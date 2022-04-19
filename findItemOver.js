var findItemsOver = (listOfItems, treshold) => {
    if(typeof(treshold) === "string") return "The treshold should be a number not a string";
    var itemsOverTreshold = [];
        
    for(var item of listOfItems) {
      if(item.qty > treshold) {
        itemsOverTreshold.push(item);
      }
    }
    return itemsOverTreshold;
}