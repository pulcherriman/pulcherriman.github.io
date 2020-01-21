var gameLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        var size = cc.director.getWinSize();
        var base = cc.p(300, 200);
        var limit = cc.pSub(cc.p(size.width, size.height), base);

        var stage = new Stage(17, 8, base, limit);
        this.addChild(stage.getLayer(), 0);
    }
});