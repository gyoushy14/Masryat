const arr = [],
  ini_name = document.getElementById("ini_name"),
  ini_pass = document.getElementById("ini_pass"),
  ini_email = document.getElementById("ini_email"),
  form_login = document.getElementById("form_login"),
  ini_phone = document.getElementById("ini_phone");

class logins {
  constructor(name, password, email, phone) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.phone = phone;
  }
clean(){
    ini_email.value = "";
    ini_phone.value = "";
    ini_pass.value = "";
    ini_name.value = "";
  }
}
// --------------------------------------------------------------------------------------------------------------------------------------------
// SUBMIT EVENT 
document.getElementById("submit").addEventListener("click", (e) => {
  // OBJ FROM LOGINS CLASS
  let user = new logins(
    ini_name.value,
    ini_pass.value,
    ini_email.value,
    ini_phone.value
  );

  // SAVE IN LOCALSTORAGE
  arr.push(user);
  localStorage.products = JSON.stringify(arr);
    
  // VALIDATION 
  if (
    (ini_name.value === "",
    ini_pass.value === "",
    ini_email.value === "",
    ini_phone.value === "")
  ) {
    localStorage.clear(localStorage.getItem("products"));
    document.getElementById("empty_alert").style.display = "block";
    setTimeout(() => {
      document.getElementById("empty_alert").remove();
    }, 4000);
  } else {
    document.getElementById("empty_alert").style.display = "none";
    document.getElementById("added_alert").style.display = "block";
    setTimeout(() => {
      document.getElementById("added_alert").remove();
    }, 4000);
  }
  
  // CLEAR ALL INPURS
  user.clean();
  e.preventDefault();
});
