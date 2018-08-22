
// function doGet() {
//   var html = UrlFetchApp.fetch('http://en.wikipedia.org/wiki/Document_Object_Model').getContentText();
//   var doc = XmlService.parse(html);
//   var html = doc.getRootElement();
//   var menu = getElementsByClassName(html, 'vertical-navbox nowraplinks')[0];
//   var output = '';
//   var linksInMenu = getElementsByTagName(menu, 'a');
//   for(i in linksInMenu) output+= XmlService.getRawFormat().format(linksInMenu[i])+'<br>';
//   return HtmlService.createHtmlOutput(output);
// }


function getElementById(element, idToFind) {
    var descendants = element.getDescendants();
    for(i in descendants) {
        var elt = descendants[i].asElement();
        if( elt !=null) {
            var id = elt.getAttribute('id');
            if( id !=null && id.getValue()== idToFind) return elt;
        }
    }
}


function getElementsByClassName(element, classToFind) {
    var data = [];
    var descendants = element.getDescendants();
    descendants.push(element);
    for(i in descendants) {
        var elt = descendants[i].asElement();
        if(elt != null) {
            var classes = elt.getAttribute('class');
            if(classes != null) {
                classes = classes.getValue();
                if(classes == classToFind) data.push(elt);
                else {
                    classes = classes.split(' ');
                    for(j in classes) {
                        if(classes[j] == classToFind) {
                            data.push(elt);
                            break;
                        }
                    }
                }
            }
        }
    }
    return data;
}



function getElementsByTagName(element, tagName) {
    var data = [];
    var descendants = element.getDescendants();
    for(i in descendants) {
        var elt = descendants[i].asElement();
        if( elt !=null && elt.getName()== tagName) data.push(elt);
    }
    return data;
}
