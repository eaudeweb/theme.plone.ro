from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile
from collective.ploneslimbar.viewlet import SlimbarViewlet


class PloneRoSlimbarViewlet(SlimbarViewlet):
    index = ViewPageTemplateFile('../templates/slimbar.pt')
