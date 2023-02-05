const feedDisplay = document.querySelector('#feed');

fetch('http://localhost:8000/results')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            const elementItem = `<div><h3>${element.titel}</h3><p>${element.url}</p></div>`;
            feedDisplay.insertAdjacentHTML('beforeend', elementItem);
        });
        })
    .catch(err => console.log(err))


