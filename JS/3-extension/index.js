let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEL = document.getElementById("ul-el");
let leadsLocal = JSON.parse(localStorage.getItem("myLeads"));
const btn = document.getElementById("input-btn");
const delBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

if (leadsLocal) {
  myLeads = leadsLocal;
  renderLeads(myLeads);
}

function saveTab() {
  let newLead = "None";
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    newLead = tabs[0].url;
    inputEl.value = "";
    if (newLead != "") {
      myLeads.push(newLead);
      renderLeads(myLeads);
      localStorage.setItem("myLeads", JSON.stringify(myLeads));
      console.log(JSON.parse(localStorage.getItem("myLeads")));
    }
  });
}

function saveLead() {
  let newLead = inputEl.value;
  inputEl.value = "";
  if (newLead != "") {
    myLeads.push(newLead);
    renderLeads(myLeads);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    console.log(JSON.parse(localStorage.getItem("myLeads")));
  }
}

function renderLeads(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li>
        <a href="${leads[i]}" target='_blank'>
            ${leads[i]}
        </a>
    </li>
    `;
  }
  ulEL.innerHTML = listItems;
}

function deleteLead() {
  localStorage.clear();
  myLeads = [];
  inputEl.value = "";
  renderLeads(myLeads);
  console.clear();
}

btn.addEventListener("click", () => {
  saveLead();
});

delBtn.addEventListener("click", () => {
  deleteLead();
});

tabBtn.addEventListener("click", () => {
  console.log("tab btn clicked");
  saveTab();
});
