const btnDeleteEl = document.querySelector(".delete");
const btnCreateEl = document.querySelector(".add");
const inputTaskEL = document.querySelector(".form");
const divTaskEl = document.querySelector(".list");

const tasks = [];

btnCreateEl.addEventListener("click", function () {
  //   inputTaskEL.value = "";
  const value = inputTaskEL.value;
  const html = `
          <div class="input-group mb-3">

  <li class="list-group-item d-flex justify-content-between">
  ${value}

  <button type="button" id="add" class="col add btn btn-success">
  <input type="checkbox" name="" id="">
  </button>
  <button class="delete btn btn-danger btn-sm">Delete</button>

  </li>
  </div>
  `;

  tasks.push(value);
  console.log(typeof value);

  //   console.log("hi");
  console.log(tasks);

  divTaskEl.insertAdjacentHTML("afterbegin", html);
});

// btnDeleteEl?.addEventListener("click", function () {
divTaskEl.addEventListener("click", function (event) {
  // Check if the clicked element has the 'delete' class
  if (event.target.classList.contains("delete")) {
    console.log("Delete clicked!");

    // Remove the task
    event.target.closest("li").remove();
  }
  tasks.pop();
});

inputTaskEL.addEventListener("click", function () {
  inputTaskEL.computedStyleMap.textDecortation;
});

// console.log("juan".le);
