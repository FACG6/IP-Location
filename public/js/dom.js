const searchButton = document.querySelector('.button');
const searchFor = document.querySelector('.search');
searchButton.addEventListener('click',e =>{
    e.preventDefault();
    fetchData('/search','POST',searchFor.value,(error,response) => {
        if(error){
            renderError();
        }else{
            renderData(response);
        }
        searchFor.value='';
    });
})

const renderError=()=>{
    const resultNode=document.querySelector('.result');
    resultNode.innerHTML="<p>This is not valid IP Address</p>";
    
}
const renderData=(response)=>{
    result = document.querySelector('.result');
    result.innerHTML = '';
    showInfo(response);
}

const showInfo=(obj)=>{

    let info = {
       "ip":"IP: ",
        "country_name":"Country Name: ",
        "country_code":"Country Code: ",
        "organisation":"Organization: ",
        "calling_code":"Calling Code: ",
        "emoji_flag":"Flag"
        }
    for(let i in info){
        appendcreate(info[i]);
        appendcreate(obj[i]);
    }
    
}
const appendcreate=(x)=>{
    let holder= document.createElement('div');
    let content = document.createTextNode(x);
      holder.appendChild(content);
    result.appendChild(holder);
    
}