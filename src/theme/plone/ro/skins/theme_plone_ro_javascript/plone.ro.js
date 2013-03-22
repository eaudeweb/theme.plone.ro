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
        var more = jQuery('.portletFooter a span:last-child');
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
    }
}


jQuery(document).ready(function(){
    theme.plone.ro.fixSlimbar();
    //theme.plone.ro.addFlag();
    theme.plone.ro.fixMoreLinks();
    theme.plone.ro.movePersonalTools();
})
