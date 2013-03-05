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
    }
}


jQuery(document).ready(function(){
    theme.plone.ro.fixSlimbar();
})
