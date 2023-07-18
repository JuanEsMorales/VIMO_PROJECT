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

function authenticate() {
    
  const dni = 1001207568;
  const pass = 1234;
  let dni_A = document.querySelector("#dni").value;
  let pass_A = document.querySelector("#pass").value; 

  if (dni == dni_A && pass == pass_A) {
    const post = document.getElementById("post-signup-form")
    const head = document.getElementById("head")
    const login = document.getElementById("login-form")
    login.addEventListener('submit', async (e) => {
      e.preventDefault()
            
      login.classList.toggle('login')

      setTimeout(() => {
        login.classList.toggle('dilog')
        head.classList.toggle('header')
        post.classList.toggle('post')
        post.classList.toggle('opacity')
      }, 1000);  
      })      
  } else {
  alert("El DNI o la clave son incorrectas");
  }
}
// loginAnimation