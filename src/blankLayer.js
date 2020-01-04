var blankLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        var size = cc.director.getWinSize();
        var background = new cc.DrawNode();
        background.drawPoly(
            [cc.p(0, 0), cc.p(size.width, 0), cc.p(size.width, size.height), cc.p(0, size.height)],
            cc.color(255, 220, 220, 255));
        this.addChild(background, 1);
    }
});
