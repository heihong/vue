var app = new Vue({
  el: "#app",
  data: {
    goals: [],
    enteredValue: "",
  },
  methods: {
    addGoal: function () {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
});

// const buttonEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEl = document.querySelector("ul");

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement("li");
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = "";
// }

// buttonEl.addEventListener("click", addGoal);
