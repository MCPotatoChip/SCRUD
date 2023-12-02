// localStorage.setItem("student-name" , "hany")
// var x =localStorage.getItem("student-name")

// console.log(x)

// // data => obj

// data = {
//   name:"Ali",
//   address:"Cairo",
//   age: 25
// }

// localStorage.setItem("student-data",JSON.stringify(data))



// console.log(JSON.parse(localStorage.getItem("student-data")["name"]))



var pname = document.getElementById("pname");
var pprice = document.getElementById("pprice");
var pcat = document.getElementById("pcat");
var pdesc = document.getElementById("pdesc");
var plist = [];
if(localStorage.getItem("plist")!== null){
    plist = JSON.parse(localStorage.getItem("plist"));
    displayOnTable();
}
var tableBody = document.querySelector("table tbody");

function addNewProduct(){

    row = {
    name : pname.value,
    price : pprice.value,
    category : pcat.value,
    desc : pdesc.value,
    }
    plist.push(row)
    localStorage.setItem("plist", JSON.stringify(plist))
}

function displayOnTable(){
    if(plist.length>0){
        // tableBody.innerHTML = "";
        plist.forEach(p=>{
            tableBody.innerHTML +=`
            <tr>
                <th scope="row">1</th>
                <td>${p["name"]}</td>
                <td>${p["price"]}</td>
                <td>${p["cat"]}</td>
                <td>${p["desc"]}</td>
                <td>@mdo</td>
          </tr>
          `
        })
    }

}