// post-signUpForm
const checkbox1 = document.getElementsByName("man")[0];
const checkbox2 = document.getElementsByName("women")[0];
const checkbox3 = document.getElementsByName("si")[0];
const checkbox4 = document.getElementsByName("no")[0];

checkbox1.addEventListener('change', () => {
  if (checkbox1.checked) {
    checkbox2.removeAttribute('required');
  } else {
    checkbox2.setAttribute('required', 'required');
  }
});

checkbox2.addEventListener('change', () => {
  if (checkbox2.checked) {
    checkbox1.removeAttribute('required');
  } else {
    checkbox1.setAttribute('required', 'required');
  }
});

checkbox3.addEventListener('change', () => {
  if (checkbox3.checked) {
    checkbox4.removeAttribute('required');
  } else {
    checkbox4.setAttribute('required', 'required');
  }
});

checkbox4.addEventListener('change', () => {
  if (checkbox4.checked) {
    checkbox3.removeAttribute('required');
  } else {
    checkbox3.setAttribute('required', 'required');
  }
});
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
    const postLog = document.querySelector("#post-signup-form");
    const post = document.getElementById("post-signup-form")

    if (!checkbox1.checked && !checkbox2.checked) {
      alert("Debes seleccionar al menos un sexo");
      postLog.addEventListener('submit',(e)=>{
        e.preventDefault();
      })

    } if (!checkbox3.checked && !checkbox4.checked){
        alert("Debes seleccionar si o no");
        postLog.addEventListener('submit',(e)=>{
          e.preventDefault();
        })
    }
  }
  
const post = document.getElementById("post-signup-form")
const next = document.querySelector("#btnLogin");
const postLog = document.querySelector("#post-signup-form");
const fatigue = document.querySelector("#fatigue")
const section = document.querySelector("section")
let user_A = document.querySelector("#user").value;

postLog.addEventListener('submit',(e)=>{
  e.preventDefault();
  post.classList.toggle('opacity2')
  setTimeout(() => {
    post.classList.toggle('post')
    fatigue.classList.toggle('fati')
    section.classList.toggle('fat')
  }, 1000);
})

// post-signUpForm
// loginAnimation
function authenticate() {
  const user = "Luis";  
  const dni = 1001207568;
  const pass = 1234;
  let user_A = document.querySelector("#user").value;
  let dni_A = document.querySelector("#dni").value;
  let pass_A = document.querySelector("#pass").value; 

  if (user == user_A && dni == dni_A && pass == pass_A) {
    const post = document.getElementById("post-signup-form")
    const head = document.getElementById("head")
    const login = document.getElementById("login-form")
    login.addEventListener('submit', async (e) => {
      e.preventDefault()
            
      let h1 = document.querySelector("#welcome")
      h1.innerText = '¡Hola ' + user_A + '!';
      login.classList.toggle('login')

      setTimeout(() => {
        login.classList.toggle('dilog')
        head.classList.toggle('header')
        post.classList.toggle('post')
        post.classList.toggle('opacity')
      }, 1000);  
      })      
  } else {
  alert("El usuario, DNI o clave son incorrectas");
  }
}
// loginAnimation