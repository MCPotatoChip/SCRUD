
// Get the input fields and the table body
var pname = document.getElementById("pname");
var pprice = document.getElementById("pprice");
var pcat = document.getElementById("pcat");
var pdesc = document.getElementById("pdesc");
var plist = [];
var form = document.querySelector(".form-section form")
var insertBtn = document.querySelector("form .btns .insert")
var updateBtn = document.querySelector("form .btns .update")

// Check if there are any products in local storage
if(localStorage.getItem("plist")!== null){
    plist = JSON.parse(localStorage.getItem("plist"));
    displayOnTable();
}

// Function to add a new product
function addNewProduct(){
    if(pname.value != '' && pprice.value != '' && pcat.value != '' && pdesc.value != '')
    {
        document.querySelector(".alert").classList.add('d-none');
        var row = {
            name : pname.value,
            price : pprice.value,
            category : pcat.value,
            desc : pdesc.value,
        }
        plist.push(row);
        localStorage.setItem("plist", JSON.stringify(plist));
        displayOnTable();
    }else{
        document.querySelector(".alert").classList.remove('d-none');
    }
}

// Function to display the products on the table
function displayOnTable(){
    if(plist.length>0){
        var tableBody = document.querySelector("table tbody");
        plist.forEach((p, index)=>{
            tableBody.innerHTML +=`
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${p["name"]}</td>
                <td>${p["price"]}</td>
                <td>${p["category"]}</td>
                <td>${p["desc"]}</td>
                <td class="d-flex">
                    <button class="btn btn-primary" onclick="editP(${index})"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="btn btn-danger" onclick="deleteP(${index})"><i class="fa-solid fa-trash"></i></button>
                </td>
          </tr>
          `
        })
    }
}

// Function to delete a product
function deleteP(id){
    if(confirm("Are you sure?")){
        plist.splice(id, 1);
        localStorage.setItem("plist", JSON.stringify(plist));
        displayOnTable();
        window.location.reload()
    }
}

// Function to edit a product
function editP(id){
    var product = plist[id];
    pname.value = product["name"];
    pprice.value = product["price"];
    pcat.value = product["category"];
    pdesc.value = product["desc"];
    insertBtn.classList.add("d-none");
    updateBtn.innerHTML = `
    <button type="button" class ="btn btn-primary" onclick ="updateP(${id})">Update</button>
    <button type="button" class ="btn btn-outline-primary" onclick="endUpdate()">Cancel</button>`
}

// Function to end the editing process
function endUpdate(){
    form.reset();
    updateBtn.innerHTML = ``;
    insertBtn.classList.remove("d-none");
}

// Function to update a product
function updateP(id){
    var product = plist[id];
    product["name"] = pname.value;
    product["price"] = pprice.value;
    product["category"] = pcat.value;
    product["desc"] = pdesc.value;
    localStorage.setItem("plist", JSON.stringify(plist));
    displayOnTable();
    endUpdate();
    window.location.reload()
}
//
//This code has been updated with proper commenting. Comments have been added to clarify the purpose of each function and the overall logic of the code.        