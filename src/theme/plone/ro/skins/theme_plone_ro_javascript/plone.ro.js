if(!window.theme){
    var theme = {"version": "1.0"};
}

if(!theme.plone){
    theme.plone = {"version": "1.0"};
}

theme.plone.ro = {
    fixSlimbar: function(){
        var slimbar = jQuery('#slimbar');
        slimbar.removeClass();
        slimbar.addClass('slimnavbar');
        jQuery('.navbar-inner', slimbar).removeClass().addClass('slimnavbar-inner');
        jQuery('.container', slimbar).removeClass().addClass('slimcontainer');
        jQuery('.navbar.actionMenuContent', slimbar).removeClass().addClass('slimnavbar actionMenuContent');
        jQuery('.dropdown-menu', slimbar).removeClass();
    },
    addFlag: function(){
        var flagRibbon = jQuery('<div>').addClass('flag-ribbon');
        var flagRepeat = jQuery('<div>').addClass('flag-repeat');
        flagRibbon.insertAfter('#portal-logo');
        flagRepeat.insertAfter('#portal-logo');
    },
    fixMoreLinks: function(){
        var more = jQuery('.portletFooter a[class!="portletRSS"]:first-child span:last-child');
        more.addClass('portletMoreLink');
        more.text('Mai mult...');
    },
    movePersonalTools: function(){
        var tools = jQuery('#portal-personaltools-wrapper');
        var nav = jQuery('nav');
        var right_nav = jQuery('<div class="pull-right dropdown">');
        jQuery('ul', nav).parent().append(right_nav);
        tools.appendTo(right_nav);
        tools.replaceWith(function(){
            return jQuery('a:first, ul:first', this);
        });
    },
    addNewsThumb: function(){
        var stiriROtitles = jQuery('dl.portlet-collection-stiri-plone-ro dd dt a');
        var stiriROdesc = jQuery('dl.portlet-collection-stiri-plone-ro dd dd');
        var stiriORGtitles = jQuery('dl.portlet-collection-stiri-plone-org dd dt a');
        var stiriORGdesc = jQuery('dl.portlet-collection-stiri-plone-org dd dd');

        // Stiri plone.ro
        for ( var i=0; i<stiriROdesc.length; i++) {
            var data = jQuery(stiriROdesc[i]).html();
            jQuery(stiriROdesc[i]).html('<img style="float: left" src="' + jQuery(stiriROtitles[i])[0].href + '/image_tile" title="" />' + data);
        };

        // Stiri plone.org
        for ( var i=0; i<stiriORGdesc.length; i++) {
            var data = jQuery(stiriORGdesc[i]).html();
            jQuery(stiriORGdesc[i]).html('<img style="float: left" src="' + jQuery(stiriORGtitles[i])[0].href + '/image_tile" title="" />' + data);
        }
    },
    addNewsRSSIcons: function() {
        var portlets = jQuery('.portletCollection .portletBottomRight');
        jQuery.each(portlets, function(i, o){
            var link = jQuery('a:first', jQuery(o).parent()).attr('href');
            var rss_link = jQuery('<a class="portletRSS pull-right">');
            rss_link.attr('href', link + '/RSS');
            jQuery(o).append(rss_link);
        });
    }
}


jQuery(document).ready(function(){
    theme.plone.ro.fixSlimbar();
    //theme.plone.ro.addFlag();
    theme.plone.ro.fixMoreLinks();
    theme.plone.ro.movePersonalTools();
    theme.plone.ro.addNewsThumb();
    theme.plone.ro.addNewsRSSIcons();
})
