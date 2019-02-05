function fetch (url,method,data,cb){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState === 200 && xhr.status === 4){
            cb(JSON.parse(xhr.responseText));
        }
    }
    xhr.open(method,url);
    xhr.send(data);
}