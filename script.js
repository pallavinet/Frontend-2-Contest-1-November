
let data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  data.forEach(function(pro){
    if(pro.profession=="developer"){
      console.log(pro);
    }
  })
}


// 2. Add Data
function addData() {
  const name=prompt("Enter name:");
  const age=prompt("Enter age:");
  const profession=prompt("Enter profession:");

  const newData ={
    name: name,
    age: parseInt(age),
    profession:profession,
  };
  data.push(newData);
  console.log(data);
}


// 3. Remove Admins
function removeAdmin() {
  const admins=data.filter(pro => pro.profession ==="admin");
  
   data=data.filter(pro => pro.profession !=='admin');
  
  // console.log(admins);
  console.log(data);
  
}

// 4. Concatenate Array
const data1=[
  {name: "andy", age:24, profession:"developer" },
  {name: "avi", age: 26, profession:"admin" },
]
function concatenateArray() {
 const newdata=data.concat(data1);
 console.log(newdata);
}

// 5. Average Age
let avg=0;
function averageAge() {
  data.forEach(pro => {
     avg += pro.age;
    
     
  })
  const avgage= Math.round(avg/data.length);
  console.log(avgage);
}

// 6. Age Check
function checkAgeAbove25() {
  data.forEach(function(pro){
    if(pro.age>=25){
      console.log(pro);
    }
  })
}

// 7. Unique Professions
function uniqueProfessions() {
  data.forEach(function(pro){
    console.log(pro.profession)
  })
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  const john = data.find(pro => pro.name === "john");
  if (john) {
    john.profession = "manager";
    
}
if(data.name="john"){
  console.log(data);
}
  
}

// 10. Profession Count
totaladmin=0;
totaldev=0;
function getTotalProfessions() {
  data.forEach(function(pro){
    if(pro.profession=="developer"){
      totaldev++;
      console.log("Total devlopers: "+totaldev);
    }
    if(pro.profession=="admin"){
      totaladmin++;
      console.log("Total admins: "+totaladmin);
    }
  })
}
