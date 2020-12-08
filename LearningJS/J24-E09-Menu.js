function makeMenu() {
    // Create list of H2 elements
    var h2s = document.getElementsByTagName('h2');

    // Create menu elements
    var menu = document.createElement('div');
    var menuUl = document.createElement('ul');
    menu.appendChild(menuUl);

    for(var i = 0; i < h2s.length; i++){
        // Grab text from H2s and apply to 'li'
        var itemText = h2s[i].childNodes[0].nodeValue;
        var menuLi = document.createElement("li");
        menuUl.appendChild(menuLi);

        // Create link to section on page
        var menuLiA = document.createElement('a');
        menuLiA = menuLi.appendChild(menuLiA);

        menuLiA.setAttribute("href", "#item" + i);
        //Create text node and attach to anchor
        var menuTxt = document.createTextNode(itemText);
        menuLiA.appendChild(menuTxt)

        // Create matching anchor element before the H2
        var anc = document.createElement('a');
        anc.setAttribute('name', 'item' + i);
        insertAfter(anc, h2s[i]);
    }

    // Add menu to page
    document.body.insertBefore(menu, document.body.firstChild);
}