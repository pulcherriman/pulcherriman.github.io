var uiLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        var size = cc.director.getWinSize();

        write_savedata(make_new_savedata_json());
        var savedata = read_savedata();
        //var status= new Status();
        //status.set('coins',100);
        var coins = userInfo.get('coins');

        var coinInfo = cc.LabelTTF.create(`UI: ${coins} coins`, "Arial", 80);
        coinInfo.setPosition(size.width / 2, size.height - 440);
        coinInfo.setFontFillColor(cc.color(0, 0, 0, 255));
        this.addChild(coinInfo, 0);
    }
});