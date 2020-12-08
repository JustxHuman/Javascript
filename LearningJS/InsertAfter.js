function insertAfter(newNode, targetNode) {
    var loc = targetNode.nextSibling;
    document.body.insertBefore(newNode, loc)
}