// const user = {
//     name: "Rahul",
//     age: 22,
//     city: "Delhi"
// };

// Function to show user data 
// Idea 1
// function showUser() {
//     document
//         .getElementById("name")
//         .textContent = user.name;
//     document
//         .getElementById("age")
//         .textContent = "Age: " + user.age;
//     document
//         .getElementById("city")
//         .textContent = "City: " + user.city;
// }

//     Js object

    const user = {
        name: "Labib",
        age: 26,
        city: "Dhaka",
        // Idea 2: We can add functions in objects directly
        showUserData: function () {
            document.getElementById("name").textContent = "Name: " + this.name;
            document.getElementById("age").textContent = "Age: " + this.age;
            document.getElementById("city").textContent = "City: " + this.city;
        }
    };

//  Idea 1: We can add object and functions on individual space  
//  function showUserData() {
//     document
//         .getElementById("name")
//         .textContent = "Name: " + user.name;
//     document
//         .getElementById("age")
//         .textContent = "Age: " + user.age;
//     document
//         .getElementById("city")
//         .textContent = "City: " + user.city;
// }