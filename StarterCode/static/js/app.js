// from data.js

var tableData = data;

console.log(tableData);

//select table body and append data entries into it
var tableBody = d3.select("tbody");


tableData.forEach(ufo_data => {
    
    console.log(ufo_data);
    
    //Remember to append a new table row. This took an embarrassingly long time to figure out.
    var row = tableBody.append("tr");
    Object.entries(ufo_data).forEach(function ([key, value]){
        console.log(key, value);
        var cell = tableBody.append("td");
        cell.text(value);
    });
});


var newFilter = d3.select("#filter-btn");
var newData = d3.select("tableBody");


newFilter.on("click", function(){
    newData.html("");
    d3.event.preventDefault();
    var filterDate = d3.select("#datetime").node().value;
    var searchFilter = tableData.filter(row => row.datetime === filterDate);
    
    console.log(filterDate);
    console.log(searchFilter);

    // Second verse, same as the first. This time with filterd data.

    searchFilter.forEach(function(filtered_data){
        
        console.log(filtered_data);
        
        var row = tableBody.append("tr");
        Object.entries(filtered_data).forEach(function ([key,value]) {
            console.log(key, value);
            var cell = tableBody.append("td");
            cell.text(value);
        });
    });

});
