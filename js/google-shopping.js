// Require is a node-specific thing, so run
// your file in the terminal with the node command!
// e.g., node js/google-shopping.js
let data = require('../products.json')

// This is a print out of all the items in the data
//console.log(data.items)

// Next, it's recommended to just look at the first item
// console.log(data.items[0])

let items = data.items
//console.log(items)

// YOUR CODE BELOW
// 1.) Go through the `items` and find all results that have `kind` of
// `shopping#product`. Print the count of these results. Where else is
// this count information stored in the search results?

console.log('\nProblem 1:\n')

const itemKindShoppingProduct = arr => {
    let shoppingProductCount = 0
    items.forEach(item => {
        
        if (item.kind === 'shopping#product') {
            shoppingProductCount++
        }

    })
    console.log(`There are ${shoppingProductCount} items that have "kind" of "shopping#product"`)
}

itemKindShoppingProduct(items)



// 2.) Print the `title` all items with a `backorder` availability
// in `inventories`.

console.log('\nProblem 2:\n')

//console.log(items[0].product.inventories[0].availability)
//console.log(items[0])



const itemsOnBackOrder = arr => {
    let itemTitle = []
    arr.forEach(item => {
        
        for(let i = 0; i < item.product.inventories.length; i++) {
            
            if (item.product.inventories[i].availability === "backorder") {
                itemTitle.push(item.product.title)
            }
        }
    })
    console.log(`Items on backorder: ${itemTitle.join(',')}`)
}

itemsOnBackOrder(items)

// 3.) Print the `title` all items with more than one image link.

console.log('\nProblem 3:\n')

const itemsWithMultImages = arr => {
    let itemTitle = []

    arr.forEach(item => {
        if (item.product.images.length > 1) {
            itemTitle.push(item.product.title)
        }
    })
    console.log(`Items with multiple images: ${itemTitle.join(',')}`)
}

itemsWithMultImages(items)


// 4.) Print all "Canon" products in the items
// HINT: careful with case sensitivity!

console.log('\nProblem 4:\n')

const canonItems =  arr => {
    let itemTitle = []

    arr.forEach(item => {
        if (item.product.brand === "Canon") {
            itemTitle.push(item.product.title)
        }
    })
    console.log(`Items from Canon: ${itemTitle.join(',')}`)
}

canonItems(items)


// 5.) Print all `items` that have an author name of "eBay" and are
// brand "Canon".
// HINT: What is the type of author?

console.log('\nProblem 5:\n')


const canonEbayItems =  arr => {
    let itemTitle = []

    arr.forEach(item => {
        if (item.product.brand === "Canon" && item.product.author.name === 'eBay') {
            itemTitle.push(item.product.title)
        }
    })
    console.log(`Canon items from eBay: ${itemTitle.join(',')}`)
}

canonEbayItems(items)


// 6.) Print all the products with their **brand**, **price**,
// and an **image link**
// HINT: You can just use the first (0th) element in the images
// and inventories arrays.

console.log('\nProblem 6:\n')


// console.log(items[0].product.link)

const printItems =  arr => {
    let itemsInfo = []

    arr.forEach(item => {
        itemsInfo.push({
            title: item.product.title,
            brand: item.product.brand,
            price: item.product.inventories[0].price,
            image: item.product.images[0].link
        })
    })
    for (let i = 0; i < itemsInfo.length; i++) {
        console.log(itemsInfo[i])
    }
}

printItems(items)
