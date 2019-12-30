function write_savedata(json){
    localStorage.setItem('dummy_save', JSON.stringify(json));
}

function read_savedata(){
    return JSON.parse(localStorage.getItem('dummy_save'));
}

function make_new_savedata_json(){
    var new_data = {
        "coins": 10,
    }
    return new_data;
}