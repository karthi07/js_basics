// h1Tag.innerHTML = "hello world";
// console.log("tset code");

let button1 = document.getElementById("btn1");
button1.addEventListener("dblclick", changeH1Tag);

function changeH1Tag() {
  let h1Tag = document.querySelector("h1");
  h1Tag.innerHTML = "On click";
}

// changeH1Tag();
