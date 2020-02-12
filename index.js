let displayZone = document.getElementById('displayZone')
let addButton = document.getElementById('add')
let displayButton = document.getElementById('display')
let input = document.getElementById('userInput')
let listOfItems = []

function addItemsToArray () {
  listOfItems.push(input.value)
}

function showArray () {
  for (let i = 0; i < listOfItems.length; i++) {
    displayZone.innerText += ('Element ' + i + ' = ' + listOfItems[i])
    displayZone.innerHTML += '</br>'
  }
}

addButton.addEventListener('click', function () {
  addItemsToArray()
})

displayButton.addEventListener('click', function () {
  showArray()
})
