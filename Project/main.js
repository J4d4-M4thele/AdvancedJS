function store() {
    //stores items in local storage
    let brand = document.getElementById('carBrand').value;
    let price = document.getElementById('carPrice').value;
    let key = document.getElementById('key').value;//gets key from user

    const car = {
        brand:brand,
        price:price,
    } 

    window.localStorage.setItem(key,JSON.stringify(car));
    //stores car object as JSON string
}

function retrieveButton() {
    console.log('retrieve records');
    let key = document.getElementById('retrieveKey').value;
    let records = window.localStorage.getItem(key);
    let paragraph = document.createElement('p');
    let info = document.createTextNode(records);
    paragraph.appendChild(info);
    let element = document.getElementById('retrieve');
    element.appendChild(paragraph);
}
function removeButton() {
    let key = document.getElementById('removeKey').value;
    localStorage.removeItem(key);
    console.log('remove items');
}

function clearStorage() {
    localStorage.clear();
    console.log('clear records')
} 

window.onload = function () {
    document.getElementById('carForm').onsubmit = store;
    document.getElementById('clearButton').onclick = clearStorage;
    document.getElementById('removeButton').onclick = removeButton;
    document.getElementById('retrieveButton').onclick = retrieveButton;
}