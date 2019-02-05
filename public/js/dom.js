const searchButton = document.querySelector('.button');
const searchFor = document.querySelector('.search').value;
searchButton.addEventListener('click',e =>{
    e.preventDefault();
    fetch('/search','GET',searchFor,response => {
       renderData(response);

    });
})
ren