const inputNameEl = document.getElementById("name")
const inputPriceEl = document.getElementById("price")

const buttonCalculateEl = document.getElementById("calculate")
const resultEl = document.getElementById("result")
const maxPriceEl = document.getElementById("maxPrice")

const list = []

class Purchase {
    constructor(name, price, id) {
        this.name = name
        this.price = price
        this.id = id
    }
}

buttonCalculateEl.addEventListener('click', () => {

    const name = inputNameEl.value
    const price = inputPriceEl.value
    const item = new Purchase(name, price, Math.random())
    list.push(item)

    renderList();

    let max = 0
    let maxItem = null;
    for (let itemPrice of list) {
        if (Number(itemPrice.price) > max) { // ПОЧЕМУ НЕ РАБОТАЕТ БЕЗ NUMBER
            max = itemPrice.price
            maxItem = itemPrice
        }
    }
    let maxPrice = ''
    maxPrice += `<p>Максимальная цена: ${maxItem.price}</p>
    <p>Наименование: ${maxItem.name}</p>`
    maxPriceEl.innerHTML = maxPrice

})

// const deleteButtonEl = document.getElementById(purchase.id)
//
// deleteButtonEl.addEventListener('click', () => {
//     console.log(purchase)
//
//     let index = list.findIndex(el => el.id === purchase.id)
//     list.splice(0, index+1) //ПОЧЕМУ ТАК?
//     console.log(index)
// })
//

const renderList = () => {
    resultEl.innerHTML = ''

    for (let purchase of list) {

        const el = document.createElement('div')
        el.innerHTML = `
    <p class="alert alert-primary" role="alert">Название: ${purchase.name}, цена: ${purchase.price}
    <button id="${purchase.id}" type="button" class="btn btn-danger">
    Удалить
    </button>
    </p>`
        resultEl.appendChild(el)
        const deleteButtonEl = document.getElementById(purchase.id)

        deleteButtonEl.addEventListener('click', () => {
            console.log(purchase)

            let index = list.findIndex(el => el.id === purchase.id)
            list.splice(index, 1)

            renderList();
        })
    }
}
