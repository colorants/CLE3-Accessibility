// let myObj = {
//     name: "Zara",
//     location: "Zuid-Holland",
//     number: 638999990
//
// };
//
// let myObj_serialized = JSON.stringify(myObj)
//
// localStorage.setItem("myObj", myObj_serialized);
//
// let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));
//
// console.log(myObj_deserialized)

const buttonTwo = document.querySelector('.btn-2');

function alertBtn () {
    alert('Klik OK om door te gaan naar de navigatie');
}

buttonTwo.addEventListener("click", alertBtn);
