const buttons = document.querySelectorAll(".fa-question"),
  img1 = document.getElementById("img1"),
  btn1 = document.getElementById("btn1"),
  img2 = document.getElementById("img2"),
  btn2 = document.getElementById("btn2"),
  img8 = document.getElementById("img8"),
  btn8 = document.getElementById("btn8");
// ------------------------------------------------------

// console.log(img1, img2);

function appear1() {
  if (img1 != img2) {
    if (img1.style.display == "none") {
      img1.style.display = "block";
      btn1.style.display = "none";
      setTimeout(() => {
        img1.style.display = "none";
        btn1.style.display = "block";
      }, 5000);
    } else {
      img1.style.display = "none";
      btn1.style.display = "block";
    }
  }
  le
}
function appear2() {
  if (img2.style.display == "none") {
    img2.style.display = "block";
    btn2.style.display = "none";
    setTimeout(() => {
      img2.style.display = "none";
      btn2.style.display = "block";
    }, 5000);
  } else {
    img2.style.display = "none";
    btn2.style.display = "block";
  }
}

function appear8() {
  if (img8.style.display == "none") {
    img8.style.display = "block";
    btn8.style.display = "none";
    setTimeout(() => {
      img8.style.display = "none";
      btn8.style.display = "block";
    }, 5000);
  } else {
    img8.style.display = "none";
    btn8.style.display = "block";
  }
}

function success() {
  if (img8.src === img2.src) {
    img8.style.display = "block";
    btn8.style.display = "none";
    img1.style.display = "block";
    btn1.style.display = "none";

    
  }
}

