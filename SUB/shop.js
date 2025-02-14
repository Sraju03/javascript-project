// make form to visible starts---------
function toggleModel() {
  const model = document.getElementById("model");
  if (model.classList.contains("invisible")) {
    model.classList.remove("invisible");
  }
}
// make form to visible ends---------

function updateBtn() {
  const update = document.getElementById("update");
  const add = document.getElementById("add");
  if (update.classList.contains("invisible")) {
    update.classList.remove("invisible");
    add.classList.add("invisible");
  }
}

// back button function start-----
function toggleBack() {
  const model = document.getElementById("model");
  model.classList.add("invisible");
}
// back button function ends-----

const newCustomer = [];
let index = 0;

function getValue() {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const contact = document.getElementById("contact").value;
  const member = document.getElementById("member").value;
  const email = document.getElementById("email").value;
  const street = document.getElementById("street").value;
  const city = document.getElementById("city").value;
  const notification = document.getElementById("Notification").checked
    ? "Yes"
    : "No";
  const terms = document.getElementById("terms").checked
    ? "Agreed"
    : "Not Agreed";

  //   console.log(terms);

  const customer = {
    fname,
    lname,
    contact,
    member,
    email,
    street,
    city,
    notification,
    terms,
  };

  newCustomer.push(customer);

  renderTable();

  toggleBack();

  document.getElementById("form").reset();
}

function renderTable() {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = ""; // Clear previous rows

  // Loop through the array to create table rows for each customer
  for (let i = 0; i < newCustomer.length; i++) {
    const customer = newCustomer[i];

    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${i + 1}</td>
      <td>${customer.fname}</td>
      <td>${customer.lname}</td>
      <td>${customer.contact}</td>
      <td>${customer.member}</td>
      <td>${customer.email}</td>
      <td>${customer.street}</td>
      <td>${customer.city}</td>
      <td>${customer.notification}</td>
      <td>${customer.terms}</td>
      <td>
        <div class="col">
          <div class="p-3">
            <button type="button" class="btn btn-outline-primary " onclick=editValue();>
              Edit <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
</svg>
            </button>
            <button
              type="button"
              class="btn btn-outline-danger"
              onClick=deleteValue();
            >
              Delete <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
</svg>
            </button>
          </div>
        </div>
      </td>
    `;

    tableBody.appendChild(row);
  }
}

// function refresh() {}
function editValue() {
  toggleModel();

  let tableRow = event.target.closest("tr");

  let child = tableRow.children;

  document.getElementById("fname").value = child[1].textContent;
  document.getElementById("lname").value = child[2].textContent;
  document.getElementById("contact").value = child[3].textContent;
  document.getElementById("member").value = child[4].textContent;
  document.getElementById("email").value = child[5].textContent;
  document.getElementById("street").value = child[6].textContent;
  document.getElementById("city").value = child[7].textContent;
  document.getElementById("Notification").checked =
    child[8].textContent === "Yes";
  document.getElementById("terms").checked = child[9].textContent === "Agreed";

  updateBtn();
}

function updateValue() {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const contact = document.getElementById("contact").value;
  const member = document.getElementById("member").value;
  const email = document.getElementById("email").value;
  const street = document.getElementById("street").value;
  const city = document.getElementById("city").value;
  const notification = document.getElementById("Notification").checked
    ? "Yes"
    : "No";
  const terms = document.getElementById("terms").checked
    ? "Agreed"
    : "Not Agreed";

  //   console.log(terms);

  const customer = {
    fname,
    lname,
    contact,
    member,
    email,
    street,
    city,
    notification,
    terms,
  };

  console.log(customer);
}

function deleteValue() {
  const ans = confirm("Do you want to delete this item?");
  if (ans) {
    const row = event.target.closest("tr"); // Find the closest row
    index = row.index - 1;
    newCustomer.splice(index, 1);
    row.remove(); // Remove the row from the DOM
  }

  renderTable();
}
