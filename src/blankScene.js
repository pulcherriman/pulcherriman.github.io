var blankScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var size = cc.director.getWinSize();
        var background = new cc.DrawNode();
        background.drawPoly(
            [cc.p(0, 0), cc.p(size.width, 0), cc.p(size.width, size.height), cc.p(0, size.height)],
            cc.color(255, 0, 0, 20));
        this.addChild(background, 0);

        var label = cc.LabelTTF.create("Idle Game Center", "Arial", 120);
        label.setPosition(size.width / 2, size.height - 80);
        label.setFontFillColor(cc.color(0, 0, 0, 255));
        this.addChild(label, 1);
    }
});