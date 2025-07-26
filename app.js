const btnAdd = document.querySelector(".create");
const ul = document.querySelector(".group");
const taskInput = document.querySelector(".taskInput");
const form = document.querySelector("form");

const tasks = [];

btnAdd.addEventListener("click", function (e) {
  const input = taskInput.value;
  if (input !== "") {
    const html = `
    <div class="task">
    <h3>${taskInput.value}</h3>
    <button class="delete">X</button>
    </div>
    `;
    ul.insertAdjacentHTML("afterbegin", html);
  }
  tasks.push(input);
  console.log(tasks);
  // input.innerHTML = "";
});

addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.closest(".task")?.remove();
    console.log("hi");
    tasks.pop();
  }
  console.log(tasks);
});
