from zope.interface import Interface
from zope.viewlet.interfaces import IViewletManager


class IThemeSpecific(Interface):
    """Marker interface that defines a Zope 3 browser layer.
    """

class IHomepageCarousel(IViewletManager):
    """Image Carousel on the homepage
    """
