
const inputNameEl = document.getElementById("name")
const inputPriceEl = document.getElementById("price")

const buttonCalculateEl = document.getElementById("calculate")
const resultEl = document.getElementById("result")
const maxPriceEl = document.getElementById("maxPrice")

const list = []

class Purchase {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

buttonCalculateEl.addEventListener('click', () => {

    const name = inputNameEl.value
    const price = inputPriceEl.value
    const item = new Purchase(name, price)
    list.push(item)
    let result= '';
    for (let purchase of list) {
        result = result +`<p>Название: ${purchase.name}, цена: ${purchase.price}</p>`
    }

    resultEl.innerHTML = result

let max = 0
    let maxItem = null;
for (let itemPrice of list){
    if(itemPrice.price > max){
        max = itemPrice.price
        maxItem = itemPrice
    }
}
let maxPrice = ''
    maxPrice += `<p>Максимальная цена: ${maxItem.price}</p>
    <p>Наименование: ${maxItem.name}</p>`
    maxPriceEl.innerHTML = maxPrice

})
