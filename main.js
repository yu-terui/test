// let id_box = document.getElementById("id_box");
// let id_text = document.getElementById("id_text");
// let password_box = document.getElementById("password_box");
// let password_text = document.getElementById("password_text");
// let login_btn = document.getElementById("login_btn");

// login_btn.addEventListener("click", function (event) {
//   let id_value = id_box.value;
//   let password_value = password_box.value;
//   if (id_value.match(/[^a-zA-Z0-9!-/:-@¥[-`{-~]/)) {
//     id_text.textContent = "IDは半角英数字記号のみで記入して下さい";
//     id_text.style.color = "#f00";
//     id_box.style.borderColor = "#f00";
//     event.preventDefault();
//     return;
//   } else {
//     id_text.textContent = "";
//     id_box.style.borderColor = "#333";
//   }
//   if (password_value.match(/[^a-zA-Z0-9!-/:-@¥[-`{-~]/)) {
//     password_text.textContent =
//       "パスワードは半角英数字記号のみで記入して下さい";
//     password_text.style.color = "#f00";
//     password_box.style.borderColor = "#f00";
//     event.preventDefault();
//     return;
//   } else {
//     id_text.textContent = "";
//     password_box.style.borderColor = "#333";
//   }
// });
//値の取得
let text_name = document.getElementById("form_text_name");
let text_hiragana = document.getElementById("form_text_hiragana");
let text_date = document.getElementById("form_text_date");
let text_department = document.getElementById("form_text_department");
let text_birthday = document.getElementById("form_text_birthday");
let text_age = document.getElementById("form_text_age");
let text_address = document.getElementById("form_text_address");
let text_number = document.getElementById("form_text_number");
let register_btn = document.getElementById("register_btn");

//登録ボタンをクリックした時の動き
register_btn.addEventListener("click", function (event) {
  //名前
  let input_name = document.getElementById("form_input_name");
  let value_name = input_name.value;
  if (value_name.match(/[0-9!-/:-@¥[-`{-~]/)) {
    text_name.textContent = "記号・数字を含めないでください。";
    text_name.style.color = "#f00";
    input_name.style.borderColor = "#f00";
    event.preventDefault();
  } else {
    text_name.textContent = "";
    input_name.style.borderColor = "#333";
  }
  //ひらがな
  let input_hiragana = document.getElementById("form_input_hiragana");
  let value_hiragana = input_hiragana.value;
  if (value_hiragana.match(/^[^ぁ-ん]+$/)) {
    text_hiragana.textContent = "ひらがなのみを入力してください。";
    text_hiragana.style.color = "#f00";
    input_hiragana.style.borderColor = "#f00";
    event.preventDefault();
  } else {
    text_hiragana.textContent = "";
    input_hiragana.style.borderColor = "#333";
  }
  //所属部署
  let input_department = document.getElementById("form_input_department");
  let value_department = input_department.value;
  if (value_department.match(/[0-9!-/:-@¥[-`{-~]/)) {
    text_department.textContent = "記号・数字を含めないでください。";
    text_department.style.color = "#f00";
    input_department.style.borderColor = "#f00";
    event.preventDefault();
  } else {
    text_department.textContent = "";
    input_department.style.borderColor = "#333";
  }
  //年齢
  let input_age = document.getElementById("form_input_age");
  let value_age = input_age.value;
  if (value_age.match(/[^0-9]/)) {
    text_age.textContent = "数字のみを入力してください。";
    text_age.style.color = "#f00";
    input_age.style.borderColor = "#f00";
    event.preventDefault();
  } else {
    text_age.textContent = "";
    input_age.style.borderColor = "#333";
  }
  //住所
  let input_address = document.getElementById("form_input_address");
  let value_address = input_address.value;
  if (value_address.match(/[!-/:-@¥[-`{-~]/)) {
    text_address.textContent = "記号を含めないでください。";
    text_address.style.color = "#f00";
    input_address.style.borderColor = "#f00";
    event.preventDefault();
  } else {
    text_address.textContent = "";
    input_address.style.borderColor = "#333";
  }
  //電話番号
  let input_number = document.getElementById("form_input_number");
  let value_number = input_number.value;
  if (value_number.match(/[^0-9]/)) {
    text_number.textContent = "数字のみを入力してください。";
    text_number.style.color = "#f00";
    input_number.style.borderColor = "#f00";
    event.preventDefault();
  } else {
    text_number.textContent = "";
    input_number.style.borderColor = "#333";
  }
  //カレンダーで取得した値の形式変更（入社日）
  let input_date = document.getElementById("form_input_date");
  let value_date = input_date.value;
  let date = new Date(value_date);
  date.setDate(date.getDate());
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  //カレンダーで取得した値の形式変更（誕生日）
  let input_birthday = document.getElementById("form_input_birthday");
  let value_birthday = input_birthday.value;
  let birthday = new Date(value_birthday);
  birthday.setDate(birthday.getDate());
  let birthday_year = birthday.getFullYear();
  let birthday_month = birthday.getMonth() + 1;
  let birthday_day = birthday.getDate();
  //アイコン画像を挿入
  let icon = document.getElementById("icon");
    icon.insertAdjacentHTML("beforeend", `<img src="./img/icon.png" width="200" height="200" alt="アイコン画像">`);
  //左側のtable1に、登録ボタンを押すと取得した値代入
  let tr1 = "<tr>";
  let table1_object = document.getElementById( "table1" );
  tr1 += "<th>"+"社員名:"+"</th>"+"<td>" + value_name + "</td>"+"</tr>";
  tr1 += "<th>"+""+"</th>"+"<td>" + value_hiragana + "</td>"+"</tr>";
  tr1 += "<th>"+"入社日:"+"</th>"+"<td>" + (year + "年" + month + "月" + day + "日") + "</td>"+"</tr>";
  tr1 += "<th>"+"所属部署:"+"</th>"+"<td>" + value_department + "</td>"+"</tr>";
  table1_object.insertAdjacentHTML("beforeend", tr1);
  //右側のtable2に、登録ボタンを押すと取得した値代入
  let tr2 = "<tr>";
  let table2_object = document.getElementById( "table2" );
  tr2 += "<th>"+"生年月日:"+"</th>"+"<td>" + (birthday_year + "年" + birthday_month + "月" + birthday_day + "日") + "</td>"+"</tr>";
  tr2 += "<th>"+"年齢:"+"</th>"+"<td>" + value_age + "歳" + "</td>"+"</tr>";
  tr2 += "<th>"+"住所:"+"</th>"+"<td>" + value_address + "</td>"+"</tr>";
  tr2 += "<th>"+"電話番号:"+"</th>"+"<td>" + value_number + "</td>"+"</tr>";
  table2_object.insertAdjacentHTML( "beforeend", tr2 );
});
