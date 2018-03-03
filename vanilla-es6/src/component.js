export default class Component {
    el;
    tagname;
    state;

    constructor(tagname, state = {}) {
        this.tagname = tagname;
        this.el  = document.createElement(tagname);
        this.state = state;
    }
}