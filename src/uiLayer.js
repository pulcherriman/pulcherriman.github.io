var uiLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        var size = cc.director.getWinSize();
      
        var coins = userInfo.get('coins');
        var coinInfo = cc.LabelTTF.create(`UI: ${coins} coins`, "Arial", 80);
        //userInfo.set('coins',coins+10);
        userInfo.save();
        coinInfo.setPosition(size.width / 2, size.height - 440);
        coinInfo.setFontFillColor(cc.color(0, 0, 0, 255));
        this.addChild(coinInfo, 0);
    }
});