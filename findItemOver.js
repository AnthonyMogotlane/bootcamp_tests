var findItemsOver = (listOfItems, treshold) => {
    if(typeof(treshold) === "string") return "invalid threshold data input";
    var itemsOverTreshold = [];
        
    for(var item of listOfItems) {
      if(item.qty > treshold) {
        itemsOverTreshold.push(item);
      }
    }
    return itemsOverTreshold;
}