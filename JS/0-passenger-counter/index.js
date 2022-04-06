let count = 0;

function increment() {
  count = count + 1;
  document.getElementById("count-el").textContent = count;
}

let saveEL = document.getElementById("save-el").textContent;
function save() {
  saveEL = saveEL + " - " + count;
  document.getElementById("save-el").textContent = saveEL;
  count = 0;
  document.getElementById("count-el").textContent = count;
}
