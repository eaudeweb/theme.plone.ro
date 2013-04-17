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
        var newsPortlets = jQuery('[class*="portlet-collection-stiri-plone"]');
        var newsItems = jQuery('dd dd', newsPortlets);

        jQuery.each(newsItems, function(i, o){
            var dd = jQuery(o);
            var image = jQuery('<img>');
            var articleUrl = dd.prev().find('a').attr('href');
            var imageUrl = articleUrl + '/image_tile';
            image.addClass('portlet-news-item');
            image.attr('src', imageUrl);
            dd.prepend(image);
        });
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
