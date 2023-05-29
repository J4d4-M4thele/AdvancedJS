let myTable = [];
let value = 11;
//for loops to create table
for(let i=0; i < value; i++) {
    //outer for loop creates rows
    let tempArray = [];
    for(let j=0; j < value; j++) {
        //inner loop pushes multiplication into columns and fills rows
        //results are pushed to the tempArray 
     tempArray.push(i*j);
    }
    myTable.push(tempArray);
    //tempArray results are then pushed to the table rows
}
console.table(myTable);
//table is printed to the console.