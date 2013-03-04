if(!window.theme){
    var theme = {"version": "1.0"};
}

if(!theme.plone){
    theme.plone = {"version": "1.0"};
}

theme.plone.ro = {
    placeHolder: function(){
        console.log('Plone.ro loaded!');
    }
}


jQuery(document).ready(function(){
    theme.plone.ro.placeHolder();
})
