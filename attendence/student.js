let list = document.getElementById("student-section");
let studentName = document.getElementById("student-name");
let rollNo = document.getElementById("RollNo");
let addBtn = document.getElementById("add-button");

const allData = () => {
    let studentNameV = studentName.value;
    let rollNoV = studentName.value;
    studentName.value = "";
    rollNo.value = "";
    let div1 = document.createElement("div");
    div1.setAttribute("class", "studentbox-2");
    let p1 = document.createElement("p");
    p1.innerHTML = studentNameV;
    let p2 = document.createElement("p");
    p2.innerHTML = rollNoV;
    div1.appendChild(p1);
    div1.appendChild(p2);
    list.appendChild(div1);
    console.log(list);


    //EDIT BTN
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit"
    editBtn.setAttribute("class", "editBtn");
    div1.appendChild(editBtn);


    //DELETE BUTTON
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.setAttribute("class", "deleteBtn");
    deleteBtn.setAttribute("onclick", "deleteStudent(this)");
    div1.appendChild(deleteBtn);
}
//DELETE FUNCTION
const deleteStudent = (e) => {
    e.parentNode.remove();
}
// const updateData = (e) =>{
    // if(e.target.innerHTML === "Edit"){
    // rollNo.value =  e.target.previousElementSibling.previousElementSibling.innerHTML;
    // studentName.value= e.target.previousElementSibling.innerHTML;
    // }
//     function updateData2(){
//     if(e.target.innerHTML === "Edit"){
//     rollNo.value= e.target.previousElementSibling.previousElementSibling.innerHTML;
//     }
//     updateData2()
// }


list.addEventListener("click", (e) => {
    if (e.target.classList.contains("updateBtn")) {
        let studentId = e.target.parentElement.getAttribute("data-student-id");
        let studentDiv = list.children[studentId];

        // Update student information
        studentDiv.querySelector("p:nth-child(1)").innerHTML = studentName.value;
        studentDiv.querySelector("p:nth-child(2)").innerHTML = rollNo.value;
    }})
// }
// list.addEventListener("click",updateData);
addBtn.addEventListener("click", allData)