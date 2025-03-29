document.getElementById("employeeForm").addEventListener
("submit", function (event){
event.preventDefault();
//Get form input values 
 const firstName=
document.getElementById("firstName").value;
const lastName =
document.getElementById("lastName").value;
const email = 
document.getElementById("email").value;
const position = 
document.getElementById("position").value;
const salary =
document.getElementById("salary").value;

// create a new row in the table 
const table =
document.getElementById("employeeTable").getElementsByTagName("tbody")[0];
const newRow = table.insertRow();
//insert cellsand data
newRow.insertCell(0).textContent=`${firstName} ${lastName}`;
newRow.insertCell(1).textContent=email;
newRow.insertCell(2).textContent= position;
newRow.insertCell(3).textContent=`$${salary}`;

//Add Delete button
const deleteCell = newRow.insertCell(4);
const deleteButton = document.createElement("button");
deleteButton.textContent="Delete";
deleteButton.classList.add("delete");
deleteButton.onclick = function(){
   table.deleteRow(newRow.rowIndex-1);
};
deleteCell.appendChild(deleteButton);

//Clear form fields
document.getElementById("employeForm").reset();
});