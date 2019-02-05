const searchButton = document.querySelector('.button');
const searchFor = document.querySelector('.search');
searchButton.addEventListener('click',e =>{
    console.log(searchFor.value)
    e.preventDefault();
    fetch('/search','POST',searchFor.value,response => {
       renderData(response);

    });
})
