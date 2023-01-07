/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

// calling the functions

PrintDeveloperswithMap();
PrintDeveloperbyForEach();
addData();
removeAdmin(arr);
concatenateArray(arr,arr2)

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
      console.log(item.name);
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

let arr2 = [{ id: 101, name: "hemant", age: "20", profession: "Unemployed" }]
function concatenateArray(arr,arr2) {
  let newArray = arr.concat(arr2);
  console.log(newArray);
}
