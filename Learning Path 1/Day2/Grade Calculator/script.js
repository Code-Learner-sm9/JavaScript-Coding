
const student = {
  name: "",
  marks: [], //array
  total: 0,
  average: 0,
  grade: "",
};

function calculateGrade(){

  student.name = document.getElementById("studentName").value;

  // array
  student.marks = [
    Number(document.getElementById("marks1").value),
    Number(document.getElementById("marks2").value),
    Number(document.getElementById("marks3").value)
  ];

  // student.total = student.marks[0] + student.marks[1] + student.marks[2];

  // using loops
  student.total = 0;
  //student.marks.length = 3 here; index 0,1,2
  for(let i = 0; i < student.marks.length; i++){
    student.total += student.marks[i];
  }

  student.average = student.total/3;

  if(student.average >= 80){
    student.grade = "A+";
  }
  else if(student.average >= 60){
    student.grade = "B";
  }
  else{
    student.grade = "F";
  }



document.getElementById("outputName").textContent = "Name: " + student.name;
;
document.getElementById("outputMath").textContent = "Math: " + student.marks[0];
document.getElementById("outputEnglish").textContent = "English: " + student.marks[1];
document.getElementById("outputScience").textContent = "Science: " + student.marks[2];
document.getElementById("outputTotal").textContent = "Total: " + student.total;
document.getElementById("outputAverage").textContent = "Average: " + student.average.toFixed(3);
document.getElementById("outputGrade").textContent = "Grade: " + student.grade;

}

//Press Enter to jump one stepped down to another input

document.getElementById("studentName").addEventListener("keydown", function(event){
  if(event.key === "Enter")
  {
    document.getElementById("marks1").focus();
  }
})

document.getElementById("marks1").addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    document.getElementById("marks2").focus();
  }
})

document.getElementById("marks2").addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    document.getElementById("marks3").focus();
  }
})
document.getElementById("marks3").addEventListener("keydown", function(event){
  if(event.key==="Enter"){
    calculateGrade();
  }
})

