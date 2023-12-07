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
//idの取得
let text_name = document.getElementById("form_text_name");
let text_hiragana = document.getElementById("form_text_hiragana");
let text_date = document.getElementById("form_text_date");
let text_department = document.getElementById("form_text_department");
let text_birthday = document.getElementById("form_text_birthday");
let text_age = document.getElementById("form_text_age");
let text_address = document.getElementById("form_text_address");
let text_number = document.getElementById("form_text_number");
let register_btn = document.getElementById("register_btn");

//生年月日
let input_birthday = document.getElementById("form_input_birthday");
//生年月日から年齢を算出
//チェンジイベント発生時に算出した年齢をテキストボックスに吐き出す
input_birthday.addEventListener("change", function () {
  let value_birthday = input_birthday.value;
  //カレンダーで取得した値の形式変更（誕生日）
  let birthday = new Date(value_birthday);
  birthday.setDate(birthday.getDate());
  let birthday_year = birthday.getFullYear();
  let birthday_month = birthday.getMonth() + 1;
  let birthday_day = birthday.getDate();
  let today = new Date();
  let current_year_birthday = new Date(
    today.getFullYear(),
    birthday_month - 1,
    birthday_day
  );
  let age = today.getFullYear() - birthday_year;
  if (today < current_year_birthday) {
    age--;
  }
  document.getElementById("form_input_age").value = age;
});

//バリデーションチェック
// 登録ボタンをクリック→バリデーション
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
  //カレンダーで取得した値の形式変更（入社日）
  let input_date = document.getElementById("form_input_date");
  let value_date = input_date.value;
  let date = new Date(value_date);
  date.setDate(date.getDate());
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
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

  //新規情報追加
  // 登録ボタンをクリック→リストに情報を追加
  // アイコン画像を挿入
  let icon = document.getElementById("icon");
  icon.insertAdjacentHTML(
    "beforeend",
    `<img src="./img/icon.png" width="200" height="200" alt="アイコン画像">`
  );
  //左側のtable1に、登録ボタンを押すと取得した値代入
  let tr1 = "<tr>";
  let table1_object = document.getElementById("table1");
  tr1 += "<th>" + "社員名:" + "</th>" + "<td>" + value_name + "</td>" + "</tr>";
  tr1 += "<th>" + "" + "</th>" + "<td>" + value_hiragana + "</td>" + "</tr>";
  tr1 +=
    "<th>" +
    "入社日:" +
    "</th>" +
    "<td>" +
    (year + "年" + month + "月" + day + "日") +
    "</td>" +
    "</tr>";
  tr1 +=
    "<th>" +
    "所属部署:" +
    "</th>" +
    "<td>" +
    value_department +
    "</td>" +
    "</tr>";
  table1_object.insertAdjacentHTML("beforeend", tr1);
  //右側のtable2に、登録ボタンを押すと取得した値代入
  //カレンダーで取得した値の形式変更（誕生日）
  let value_birthday = input_birthday.value;
  let birthday = new Date(value_birthday);
  birthday.setDate(birthday.getDate());
  let birthday_year = birthday.getFullYear();
  let birthday_month = birthday.getMonth() + 1;
  let birthday_day = birthday.getDate();
  let tr2 = "<tr>";
  let table2_object = document.getElementById("table2");
  tr2 +=
    "<th>" +
    "生年月日:" +
    "</th>" +
    "<td>" +
    (birthday_year + "年" + birthday_month + "月" + birthday_day + "日") +
    "</td>" +
    "</tr>";
  tr2 +=
    "<th>" + "年齢:" + "</th>" + "<td>" + value_age + "歳" + "</td>" + "</tr>";
  tr2 +=
    "<th>" + "住所:" + "</th>" + "<td>" + value_address + "</td>" + "</tr>";
  tr2 +=
    "<th>" + "電話番号:" + "</th>" + "<td>" + value_number + "</td>" + "</tr>";
  table2_object.insertAdjacentHTML("beforeend", tr2);
});

// ソート機能
// デフォルトの表示を一旦削除して、ボタンの情報を追加
// モノを並び替えるとき＝現状を一度リセットする
async function callApi() {
  //関数のfunction宣言の前にasyncを書いて非同期（async）関数であることを宣言
  const res = await fetch("./webapi.json");
  //変数resにawaitを書くことで非同期通信が終わった後にfetch()メソッド（引数はurl）を実行。
  const users = await res.json();
  // 変数jsonにawaitを書くことで非同期通信が終わった後にres.json()を実行

  // デフォルト表示のリスト
  for (let i = 0; i < users.length; i++) {
    let contents = document.getElementById("contents");
    //リスト追加
    let flex = `<div class="flex">`;
    flex += `
<p id="icon"><img src="./img/icon.png" width="200" height="200" alt="アイコン画像"></p>
<table>
<th>社員名:</th><td>${users[i].employee_name}</td></tr>
<th></th><td>${users[i].furigana}</td></tr>
<th>入社日:</th><td>${users[i].hire_date}</td></tr>
<th>所属部署:</th><td>${users[i].department}</td></tr>
</table>
<table>
<th>誕生日:</th><td>${users[i].date_of_birth}</td></tr>
<th>年齢:</th><td>${users[i].age}歳</td></tr>
<th>住所:</th><td>${users[i].address}</td></tr>
<th>電話番号:</th><td>${users[i].phone_number}</td></tr>
</table>
</div>
`;
    contents.insertAdjacentHTML("beforeend", flex);
  }
  let contents = document.getElementById("contents");
  // contents.insertAdjacentHTML("beforebegin",
  // `<button id="edit_btn">編集</button>`)
  return users;
}

callApi();
//１．if分で昇順降順の判定
//２．sortで情報を整形
//３．foreachで吐き出す
//繰り返しの中でソートを使う× ソートをして順番が治ったうえで繰り返し（リストの順番）
//配列の中のobjectが対象

//sort_btnを押したとき、selectの値に応じて並び替え
let sort_btn = document.getElementById("sort_btn");
sort_btn.addEventListener("click", sort);
async function sort() {
  const users = await callApi();
  //ボタンを押したとき、デフォルトのリストをリセット
  let contents = document.getElementById("contents");
  while (contents.firstChild) {
    contents.removeChild(contents.firstChild);
  }
  //selectの値を取得・判定
  let select = document.querySelector('[name="select_sort"]');
  function insert(i) {
    let contents = document.getElementById("contents");
    //リスト追加
    let flex = `<div class="flex">`;
    flex += `
  <p id="icon"><img src="./img/icon.png" width="200" height="200" alt="アイコン画像"></p>
  <table>
  <th>社員名:</th><td>${users[i].employee_name}</td></tr>
  <th></th><td>${users[i].furigana}</td></tr>
  <th>入社日:</th><td>${users[i].hire_date}</td></tr>
  <th>所属部署:</th><td>${users[i].department}</td></tr>
  </table>
  <table>
  <th>誕生日:</th><td>${users[i].date_of_birth}</td></tr>
  <th>年齢:</th><td>${users[i].age}歳</td></tr>
  <th>住所:</th><td>${users[i].address}</td></tr>
  <th>電話番号:</th><td>${users[i].phone_number}</td></tr>
  </table>
  
  
  </div>
  `;
    contents.insertAdjacentHTML("beforeend", flex);
  }
  // 名前・昇順
  // １．if分で昇順降順の判定
  if (select.selectedIndex == 1) {
    //２．sortで情報を整形
    users.sort((a, b) => {
      return a.furigana.localeCompare(b.furigana, "ja");
    });
    //３．for文で繰り返し
    for (let i = 0; i < users.length; i++) {
      insert(i);
    }
  }
  //名前・降順
  if (select.selectedIndex == 2) {
    users.sort((a, b) => {
      return b.furigana.localeCompare(a.furigana, "ja");
    });
    for (let i = 0; i < users.length; i++) {
      insert(i);
    }
  }
  //年齢・昇順
  if (select.selectedIndex == 3) {
    users.sort((a, b) => a.age - b.age);
    for (let i = 0; i < users.length; i++) {
      insert(i);
    }
  }
  //年齢・降順
  if (select.selectedIndex == 4) {
    users.sort((a, b) => b.age - a.age);
    for (let i = 0; i < users.length; i++) {
      insert(i);
    }
  }
}

//絞り込み機能
//search_btnを押したとき、selectの値に応じて並び替え
let search_word = document.getElementById("search_word");
let search_btn = document.getElementById("search_btn");
search_btn.addEventListener("click", search);
//検索ボタンを押したとき
async function search() {
  const users = await callApi();
  // デフォルトのリストをリセット
  let contents = document.getElementById("contents");
  while (contents.firstChild) {
    contents.removeChild(contents.firstChild);
  }
  //値の一部が配列内のオブジェクトと一致した場合
  let getValue = search_word.value;
  for (let i = 0; i < users.length; i++) {
    let index = users[i].employee_name.indexOf(getValue);
    if (index >= 0) {
      let contents = document.getElementById("contents");
      //リスト追加
      let flex = `<div class="flex">`;
      flex += `
      <p id="icon"><img src="./img/icon.png" width="200" height="200" alt="アイコン画像"></p>
      <table>
      <th>社員名:</th><td>${users[i].employee_name}</td></tr>
      <th></th><td>${users[i].furigana}</td></tr>
      <th>入社日:</th><td>${users[i].hire_date}</td></tr>
      <th>所属部署:</th><td>${users[i].department}</td></tr>
      </table>
      <table>
      <th>誕生日:</th><td>${users[i].date_of_birth}</td></tr>
      <th>年齢:</th><td>${users[i].age}歳</td></tr>
      <th>住所:</th><td>${users[i].address}</td></tr>
      <th>電話番号:</th><td>${users[i].phone_number}</td></tr>
      </table>
          
      </div>
      `;
      contents.insertAdjacentHTML("beforeend", flex);
    }
  }
}
// 編集機能
// ◎ボタンをクリックしたら、テキストボックスに置き換わる
//編集完了後もう一度ボタンを押すと、変更した内容が反映される
//元のテキストの状態に戻る
let edit_btn = document.getElementById("edit_btn");
edit_btn.addEventListener('click', edit);
// edit_btn.forEach(function(target){
  // target.addEventListener("click", edit);
async function edit() {
    const users = await callApi();
    // デフォルトのリストをリセット
    let contents = document.getElementById("contents");
    while (contents.firstChild) {
      contents.removeChild(contents.firstChild);
    }
    function insert(i) {
      let contents = document.getElementById("contents");
      //リスト追加
      let flex = `<div class="flex">`;
      flex += `
  <p id="icon"><img src="./img/icon.png" width="200" height="200" alt="アイコン画像"></p>
  <table>
  <th>社員名:</th><td>${users[i].employee_name}</td></tr>
  <th></th><td>${users[i].furigana}</td></tr>
  <th>入社日:</th><td>${users[i].hire_date}</td></tr>
  <th>所属部署:</th><td>${users[i].department}</td></tr>
  </table>
  <table>
  <th>誕生日:</th><td>${users[i].date_of_birth}</td></tr>
  <th>年齢:</th><td>${users[i].age}歳</td></tr>
  <th>住所:</th><td>${users[i].address}</td></tr>
  <th>電話番号:</th><td>${users[i].phone_number}</td></tr>
  </table>
  
  </div>
  `;
      contents.insertAdjacentHTML("beforeend", flex);
    }
    //テキストボックス状のリスト追加
    for (let i = 0; i < users.length; i++) {
      let flex = `<div class="flex">`;
      flex += `
    <p id="icon"><img src="./img/icon.png" width="200" height="200" alt="アイコン画像"></p>
    <table>
    <th>社員名:</th><td><input class="editValue" id="nameValue" value="${users[i].employee_name}"></td>
    </tr>
    <th>ふりがな:</th><td><input class="editValue" id="furiganaValue" value="${users[i].furigana}"></td>
    </tr>
    <th>入社日:</th><td><input class="editValue" id="dateValue" value="${users[i].hire_date}"></td>
    </tr>
    <th>所属部署:</th><td><input class="editValue" id="departmentValue" value="${users[i].department}"></td>
    </tr>
    </table>
    <table>
    <th>誕生日:</th><td><input class="editValue" id="birthdayValue" value="${users[i].date_of_birth}"></td>
    </tr>
    <th>年齢:</th><td><input class="editValue" id="ageValue" value="${users[i].age}歳"></td>
    </tr>
    <th>住所:</th><td><input class="editValue" id="addressValue" value="${users[i].address}"></td>
    </tr>
    <th>電話番号:</th><td><input class="editValue" id="phoneValue" value="${users[i].phone_number}"></td>
    </tr>
    </table>
        
    </div>
    `;
      contents.insertAdjacentHTML("beforeend", flex);
    }
    let editValue = document.getElementsByClassName("editValue");
    let nameValue = document.getElementById("nameValue");
    nameValue.addEventListener("change", function () {
      console.log(nameValue.value);
      for (let i = 0; i < users.length; i++) {
        insert(i);
      }
    });
    let furiganaValue = document.getElementById("furiganaValue");
    furiganaValue.addEventListener("change", function () {
      console.log(furiganaValue.value);
    });
    let dateValue = document.getElementById("dateValue");
    dateValue.addEventListener("change", function () {
      console.log(dateValue.value);
    });
    let departmentValue = document.getElementById("departmentValue");
    departmentValue.addEventListener("change", function () {
      console.log(departmentValue.value);
    });
    let birthdayValue = document.getElementById("birthdayValue");
    birthdayValue.addEventListener("change", function () {
      console.log(birthdayValue.value);
    });
    let ageValue = document.getElementById("ageValue");
    ageValue.addEventListener("change", function () {
      console.log(ageValue.value);
    });
    let addressValue = document.getElementById("addressValue");
    addressValue.addEventListener("change", function () {
      console.log(addressValue.value);
    });
    let phoneValue = document.getElementById("phoneValue");
    phoneValue.addEventListener("change", function () {
      console.log(phoneValue.value);
    });
}
// })
