console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;


function addItem(item) {
    //add item to basket 
    //return true if item was added 

    if (isFull()) {
        return false;

    }
    else if (isFull() === false) {

        //if statement pushes item to Array 

        basket.push(item);

        return true;


    }
}


function removeItem(item) {

    //searches for item in basket Array and returns its index
    let index = basket.indexOf(item);

    //confirms that item is present in basket array and removes/splices the 
    //the item from array
    if (index != -1) {
        basket.splice(index, 1);
        return item;
    }

    else {
        return null;
    }



}

function listItems() {

    for (let c of basket) {
        console.log(c);

    }

}

function empty() {

    basket.length = 0;
}

function isFull() {

    //checks if array has less than 5 items
    if (basket.length < maxItems) {
        //returns false for isFull()
        return false;

    }

    else if (basket.length >= maxItems) {
        return true;

    }

}


// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch (e) {
    // Do nothing
}
