const header = document.querySelector('header')
const next = document.querySelector('#next')
const loginDis = document.querySelector('#login-form')
const regis = document.querySelector('#regis')
const ing = document.querySelector('#ing')
const si = document.getElementById("si")
const no = document.getElementById("no")
// post-signUpForm
function handleCheckboxChange(checkbox) {
    var checkboxes = document.getElementsByClassName("option");
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkbox) {
        checkboxes[i].checked = false;
      }
    }
  }
function handleCheckboxChange2(checkbox){
    var checkboxes = document.getElementsByClassName("options");
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkbox) {
        checkboxes[i].checked = false;
      }
    }
  }
  function validarCheckboxes() {
    var checkbox1 = document.getElementById("man");
    var checkbox2 = document.getElementById("women");
    var checkbox3 = document.getElementById("si");
    var checkbox4 = document.getElementById("no");

    if (!checkbox1.checked && !checkbox2.checked) {
      alert("Debes seleccionar al menos un sexo");
    } if (!checkbox3.checked && !checkbox4.checked){
        alert("Debes seleccionar si o no");
    }
  }
// post-signUpForm
// loginAnimation

function animation() {
    
}

function authenticate() {
    
    const dni = 1001207568;
    const pass = 1234;
    let dni_A = document.querySelector("#dni").value;
    let pass_A = document.querySelector("#pass").value; 

        if (dni == dni_A && pass == pass_A) {
          alert("Si");
        } else {
        alert("El DNI o la clave son incorrectas");
        }
}
// loginAnimation