let list = document.getElementById("student-section");
let studentName = document.getElementById("student-name");
let rollNo = document.getElementById("RollNo");
let checkbox =document.getElementById("checkBOx");
let addBtn = document.getElementById("add-button");

const allData = (e) => {
    if(studentName.value === "")  {
    alert("Please fill out the full information");   
}
else if(rollNo.value ===""){
    alert("Please fill out the full information");
}
else{
    e.preventDefault();
    const studentNameV = studentName.value;
    const rollNoV = rollNo.value;
    localStorage.setItem("student-name",studentNameV);
    localStorage.setItem("RollNo",rollNoV);
    studentName.value = "";
    rollNo.value = "";
    alert("Attendance marked Successfully");
}
}
addBtn.addEventListener("click", allData)