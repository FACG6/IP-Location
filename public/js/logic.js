
const fetchData = (url,method,search ,cb) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
               
                const response=JSON.parse(xhr.responseText);
                cb(null,response);
            }else if(xhr.status===500){                
                cb('error',xhr.responseText);
            }
        }
    }
    xhr.open(method, url);
    xhr.send(search);
}