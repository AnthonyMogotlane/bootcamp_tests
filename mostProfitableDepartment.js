//Function to find the most profitable department
var mostProfitableDepartment = (data) => {
    if(data.length === 0) return "no data in the list";
    var departmentMap = {}; //empty object
    
    //Initiation each department thats gonna be pushed to an empty object equal to zero
    for(var i = 0; i < data.length; i++) {
        var thisDepartment = data[i].department; //current department
      
      //checking if the current department is null or undefined
      if(departmentMap[thisDepartment] === undefined){
        departmentMap[thisDepartment] = 0;
      }
      
      departmentMap[thisDepartment] = 0;
    }
    
    //Adding total sales for each department as a value for that department
    for(var i = 0; i < data.length; i++) {
      
      var thisDepartment = data[i].department; //current department
      
      var totalSales = departmentMap[data[i].department]
      
      totalSales += data[i].sales;
      
      departmentMap[thisDepartment] = totalSales;
    }
    
    //Checking the highest selling department 
    var highestSales = 0;
    var HighSalesDepartment = "";
    
    for (var department in departmentMap){
      if(departmentMap[department] > highestSales) {
        highestSales = departmentMap[department];
        HighSalesDepartment = department;
      }
    }
    return HighSalesDepartment;
}

