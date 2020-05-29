const  tableData = data;//
const  tBody = d3.select("tbody");//
const  tTable = d3.select("table");//
const  tClass = d3.select("class", "table table-striped");
const  inputElement = d3.select("#datetime").property("value");
const  button = d3.select("#filter-btn");


tTable.attr("class", "table table-striped");

function buildTable(data) {
    data.forEach((tRows) => {
        const tRow = tBody.append("tr");
        Object.entries(tRows).forEach(([key, value]) => {
            const tCol = tRow.append("td");
            tCol.text(value);
        });
    });
};

buildTable(tableData);
console.log(tableData);


button.on("click", function() {
    console.log(inputElement);
    const  filteredData = tableData.filter(tableData => tableData.datetime === inputElement);
    console.log(filteredData);
    buildTable(filteredData);
});
