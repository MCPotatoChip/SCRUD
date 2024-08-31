
// Get the input fields and the table body
var tname = document.getElementById("tname");
var tlist = [];
var form = document.querySelector(".form-section form")
var insertBtn = document.querySelector("form .btns .insert")
var updateBtn = document.querySelector("form .btns .update") 

// Check if there are any tasks in local storage
if(localStorage.getItem("tlist")!== null){
    tlist = JSON.parse(localStorage.getItem("tlist"));
    displayOnTable();
}


// Function to add a new task
function addNewTask(){
    if(tname.value != '')
    {
        document.querySelector(".alert").classList.add('d-none');
        var row = {
            name : tname.value,
        }
        tlist.push(row);
        localStorage.setItem("tlist", JSON.stringify(tlist));
        displayOnTable();
        window.location.reload()
    }else{
        document.querySelector(".alert").classList.remove('d-none');
    }
}

// Function to display the tasks on the table
function displayOnTable(){
    if(tlist.length>0){
        var tableBody = document.querySelector("table tbody");
        tlist.forEach((t, index)=>{
            tableBody.innerHTML +=`
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${t["name"]}</td>
                <td class="d-flex">
                    <button class="btn btn-danger" onclick="deleteP(${index})"><i class="fa-solid fa-trash"></i></button>
                </td>
          </tr>
          `
          
        })
    }
}
// Function to delete a task
function deleteP(id){
    if(confirm("Are you sure?")){
        tlist.splice(id, 1);
        localStorage.setItem("tlist", JSON.stringify(tlist));
        displayOnTable();
        window.location.reload()
    }
}
