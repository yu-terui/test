let id_box = document.getElementById("id_box");
let id_text = document.getElementById("id_text");
let password_box = document.getElementById("password_box");
let password_text = document.getElementById("password_text");
let btn = document.getElementById("btn");

btn.addEventListener("click", function (event) {
  let id_value = id_box.value;
  let password_value = password_box.value;
  if (id_value.match(/[^a-zA-Z0-9!-/:-@¥[-`{-~]/)) {
    id_text.textContent = "IDは半角英数字記号のみで記入して下さい";
    id_text.style.color = "#f00";
    id_box.style.borderColor = "#f00";
    event.preventDefault();
    return;
  } else {
    id_text.textContent = "";
    id_box.style.borderColor = "#333";
  }
  if (password_value.match(/[^a-zA-Z0-9!-/:-@¥[-`{-~]/)) {
    password_text.textContent =
      "パスワードは半角英数字記号のみで記入して下さい";
    password_text.style.color = "#f00";
    password_box.style.borderColor = "#f00";
    event.preventDefault();
    return;
  } else {
    id_text.textContent = "";
    password_box.style.borderColor = "#333";
  }
});
