var findItemsOver = (listOfItems, treshold) => {
    var itemsOverTreshold = [];
        
    for(var item of listOfItems) {
      if(item.qty > treshold) {
        itemsOverTreshold.push(item);
      }
    }
    return itemsOverTreshold;
}