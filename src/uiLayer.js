var uiLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        var size = cc.director.getWinSize();

        var coinInfo = cc.LabelTTF.create(`this is ui layer`, "Arial", 80);
        coinInfo.setPosition(size.width / 2, size.height - 440);
        coinInfo.setFontFillColor(cc.color(0, 0, 0, 255));
        this.addChild(coinInfo, 0);
    }
});