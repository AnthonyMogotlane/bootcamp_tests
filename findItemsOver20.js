// Write a function called findItemsOver20 that takes a list of objects, each object having 2 attributes one called name and the other qty.
// The function should return all the products that have a quantity higher than 20.

var findItemsOver20 = (listOfItems) => {
    if(listOfItems.length === 0) return "no items in the list";
 
    var itemsOver20 = [];
        
    for(var item of listOfItems) {
      if(item.qty > 20) {
        itemsOver20.push(item);
      }
    }
    return itemsOver20;
}