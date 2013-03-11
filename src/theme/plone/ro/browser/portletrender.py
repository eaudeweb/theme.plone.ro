from zope.component import getUtility, getMultiAdapter, queryMultiAdapter
from plone.portlets.interfaces import IPortletRetriever
from plone.portlets.interfaces import IPortletManager
from plone.portlets.interfaces import IPortletRenderer


def get_portlet_manager(column):
    """ Return one of default Plone portlet managers.
    @param column: "plone.leftcolumn" or "plone.rightcolumn"
    @return: plone.portlets.interfaces.IPortletManagerRenderer instance
    """
    manager = getUtility(IPortletManager, name=column)
    return manager


def render_portlet(context, request, view, manager, name):
    """ Render a portlet defined in external location.
    .. note ::
        Portlets can be idenfied by id (not user visible)
        or interface (portlet class). This method supports look up
        by interface and will return the first matching portlet with this
        interface.
    @param context: Content item reference where portlet appear
    @param manager: IPortletManagerRenderer instance
    @param view: Current view or None if not available
    @return: Rendered portlet HTML as a string, or empty string if
    portlet not found
    """
    retriever = getMultiAdapter((context, manager), IPortletRetriever)
    portlets = retriever.getPortlets()
    assignment = None
    for portlet in portlets:
        if portlet['name'] == name:
            assignment = portlet["assignment"]
            break
    if assignment is None:
        return ""
    #A special type of content provider, IPortletRenderer, knows how to render
    #each type of portlet. The IPortletRenderer should be a multi-adapter from
    #(context, request, view, portlet manager, data provider).
    renderer = queryMultiAdapter((context, request, view, manager, assignment),
            IPortletRenderer)
    # Make sure we have working acquisition chain
    renderer = renderer.__of__(context)
    if renderer is None:
        raise RuntimeError("No portlet renderer found for:" + str(assignment))
    renderer.update()
    # Does not check visibility here... force render always
    html = renderer.render()
    return html

