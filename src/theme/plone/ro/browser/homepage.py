from Products.Five.browser import BrowserView
from portletrender import get_portlet_manager
from portletrender import render_portlet


class Homepage(BrowserView):

    def renderPortletById(self, managerId, portletId):
        return self.renderPortlet(managerId, portletId)

    def renderPortlet(self, column, name):
        """ Render a portlet from another page in-line to this page
        Does not render other portlets in the same portlet manager.
        """
        context = self.context.aq_inner
        request = self.request
        view = self
        manager = get_portlet_manager(column)
        html = render_portlet(context, request, view, manager, name)
        return html

