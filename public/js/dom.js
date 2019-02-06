const searchButton = document.querySelector('.button');
const searchFor = document.querySelector('.search');
searchButton.addEventListener('click',e =>{
    e.preventDefault();
    fetchData('/search','POST',searchFor.value,(error,response) => {
        if(error){
            renderError(response);
        }else{
            // renderData();
            console.log(response);
            
        }
    

    });
})

const renderError=(data)=>{
    const resultNode=document.querySelector('.result');
    resultNode.innerHTML=data;

}