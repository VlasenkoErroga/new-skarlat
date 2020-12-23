export default class Base {
    _createNode(element) {
        return document.createElement(element);
    }

    _append(parent, element) {
        return parent.append(element);
    }

    _remove(element) {
        return element.parentNode.removeChild(element);
    }
}