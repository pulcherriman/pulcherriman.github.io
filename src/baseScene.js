var baseScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        this.addChild(new blankLayer(), 0);
        this.addChild(new gameLayer(), 0);
        this.addChild(new uiLayer(), 0);
    }
});