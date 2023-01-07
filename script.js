/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
 var array2 = [
    { id: 101, name: "hemant", age: "20", profession: "Unemployed" },
    { id: 102, name: "jay", age: "22", profession: "Employed" }
    ];
// calling the functions

PrintDeveloperswithMap();
PrintDeveloperbyForEach();
addData();
removeAdmin(arr);
concatenateArray(arr, array2);

function PrintDeveloperswithMap() {
  arr.map((employee) => {
    if (employee.profession === "developer") {
      console.log(
        employee.name +
          "," +
          employee.age +
          "," +
          employee.id +
          "," +
          employee.profession
      );
    }
  });
}

function PrintDeveloperbyForEach() {
  arr.forEach((item) => {
    if (item.profession === "developer") {
      console.log(item.name+","+item.id+","+item.age+","+item.profession);
    }
  });
}

function addData() {
  let data = arr;
  data.push({ id: 4, name: "susan", age: "20", profession: "intern" });
  console.log(arr);
}

function removeAdmin(arr) {
  let filteredArr = arr.filter((employee) => employee.profession !== "admin");

  console.log(filteredArr);
}



function concatenateArray(arr, array2) {
 
  let newArray = arr.concat(array2);
  console.log(newArray);
}
