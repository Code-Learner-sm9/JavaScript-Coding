// const user = {
//   name: "",
//   age: "",
//   city: ""
// };

// function updateProfile() {
//   // Read values from inputs
//   user.name = document.getElementById("inputName").value;
//   user.age = document.getElementById("inputAge").value;
//   user.city = document.getElementById("inputCity").value;

//   // Update UI
//   document.getElementById("name").textContent = user.name;
//   document.getElementById("age").textContent = "Age: " + user.age;
//   document.getElementById("city").textContent = "City: " + user.city;
// }

const user = {
  name: "",
  age: "",
  city: "", 
};

function updateProfile() {
  user.name = document.getElementById("inputName").value;
  user.age = document.getElementById("inputAge").value;
  user.city = document.getElementById("inputCity").value;

  document.getElementById("name").textContent = "Name: " + user.name;
  document.getElementById("age").textContent = "Age: " + user.age;
  document.getElementById('city').textContent = "City: " + user.city;

}

// Move cursor to next input when pressing Enter
// document.getElementById("inputName").addEventListener("keydown", function(event) {
//   if (event.key === "Enter") {
//     document.getElementById("inputAge").focus();
//   }
// });

// document.getElementById("inputAge").addEventListener("keydown", function(event) {
//   if (event.key === "Enter") {
//     document.getElementById("inputCity").focus();
//   }
// });

// document.getElementById("inputCity").addEventListener("keydown", function(event) {
//   if (event.key === "Enter") {
//     updateProfile(); // Automatically update profile
//   }
// });

document.getElementById("inputName").addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    document.getElementById("inputAge").focus();
  }
})

document.getElementById("inputAge").addEventListener("keydown", function(event){
  if(event.key === "Enter")
  {
    document.getElementById("inputCity").focus();
  }
})

document.getElementById("inputCity").addEventListener("keydown", function(event){
  if(event.key === "Enter")
  {
    updateProfile();
  }
})