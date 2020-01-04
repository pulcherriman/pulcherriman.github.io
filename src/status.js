class Status{
	constructor() {
		this.map = new Map;
		//dame
		//this.map['coins']=100;
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
}
var userInfo;
function LoadData(){
	userInfo = new Status();
	userInfo.setAllData(JSON.parse(localStorage.getItem('dummy_save')));
}