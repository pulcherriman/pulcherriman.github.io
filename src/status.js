class Status{
	constructor() {
		this.map = new Map;
	}
	set(key, value) {
		this.map.set(key, value);
	}
	setAllData(dict) {
		for(var key in dict){
			this.map.set(key,dict[key]);
		}
	}
	get(key) {
		return this.map.get(key);
	}
	save(){
		var tmp={};
		this.map.forEach(function (value,key){tmp[key]=value;});
		localStorage.setItem('dummy_save', JSON.stringify(tmp));
	}
}
var userInfo;
function LoadData(){
	userInfo = new Status();
	userInfo.setAllData(JSON.parse(localStorage.getItem('dummy_save')));
}

function make_new_savedata_json(){
    var new_data = {
        "coins": 10,
        "antimatters": 5,
    }
    return new_data;
}
function write_savedata(json){
    localStorage.setItem('dummy_save', JSON.stringify(json));
}
