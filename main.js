//*
//login
//*
if (document.getElementById("login_btn") != null) {
  let id_box = document.getElementById("id_box");
  let id_text = document.getElementById("id_text");
  let password_box = document.getElementById("password_box");
  let password_text = document.getElementById("password_text");
  let login_btn = document.getElementById("login_btn");

  login_btn.addEventListener("click", function (event) {
    let id_value = id_box.value;
    if (id_value.match(/[^a-zA-Z0-9]/)) {
      id_text.textContent = "IDは半角英数字のみで記入して下さい"; //修正済み（ログイン単体No2）
      id_text.style.color = "#f00";
      id_box.style.borderColor = "#f00";
      event.preventDefault();
    } else if (!id_value) {
      id_text.textContent = "IDを入力してください";
      id_text.style.color = "#f00";
      id_box.style.borderColor = "#f00";
      event.preventDefault();
    } else {
      id_text.textContent = "";
      id_box.style.borderColor = "#333";
    }
    let password_value = password_box.value;
    if (password_value.match(/[^a-zA-Z0-9!-/:-@¥[-`{-~]/)) {
      password_text.textContent =
        "パスワードは半角英数字記号のみで記入して下さい";
      password_text.style.color = "#f00";
      password_box.style.borderColor = "#f00";
      event.preventDefault();
    } else if (!password_value) {
      password_text.textContent = "パスワードを入力してください";
      password_text.style.color = "#f00";
      password_box.style.borderColor = "#f00";
      event.preventDefault();
    } else {
      password.textContent = ""; //修正済み（ログイン結合No1）
      password_box.style.borderColor = "#333";
    }
  });
}

//*
//members
//*
//idの取得
if (document.getElementById("form_text_name") != null) {
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
    //～～～～～～～～～～～
    //空欄エラー 修正済み（社員一覧単体No7）ここから
    //空欄エラー 修正済み（社員一覧結合No4）ここから
    //名前
    let input_name = document.getElementById("form_input_name");
    let value_name = input_name.value;
    if (value_name.match(/[0-9!-/:-@¥[-`{-~]/)) {
      text_name.textContent = "記号・数字を含めないでください。";
      text_name.style.color = "#f00";
      input_name.style.borderColor = "#f00";
      event.preventDefault();
    } else if (!value_name) {
      text_name.textContent = "必須項目です";
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
    } else if (!value_hiragana) {
      text_hiragana.textContent = "必須項目です";
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
    } else if (!value_department) {
      text_department.textContent = "必須項目です";
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
    } else if (!value_age) {
      text_age.textContent = "必須項目です";
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
    if (!value_address) {
      text_address.textContent = "必須項目です";
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
    } else if (!value_number) {
      text_number.textContent = "必須項目です";
      text_number.style.color = "#f00";
      input_number.style.borderColor = "#f00";
      event.preventDefault();
    } else {
      text_number.textContent = "";
      input_number.style.borderColor = "#333";
    }
    //空欄エラー 修正済み（社員一覧単体No7）ここまで
    //空欄エラー 修正済み（社員一覧結合No4）ここまで
    //～～～～～～～～～～～

    //新規情報追加
    // 登録ボタンをクリック→リストに情報を追加
    // アイコン画像を挿入
    let icon = document.getElementById("newMember_icon");
    icon.insertAdjacentHTML(
      "beforeend",
      `<img src="./img/icon.png" width="200" height="200" alt="アイコン画像">`
    );
    //左側のtable1に、登録ボタンを押すと取得した値代入
    let tr1 = "<tr>";
    let table1_object = document.getElementById("newMember_table1");
    tr1 +=
      "<th>" + "社員名:" + "</th>" + "<td>" + value_name + "</td>" + "</tr>";
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
    let table2_object = document.getElementById("newMember_table2");
    tr2 +=
      "<th>" +
      "生年月日:" +
      "</th>" +
      "<td>" +
      (birthday_year + "年" + birthday_month + "月" + birthday_day + "日") +
      "</td>" +
      "</tr>";
    tr2 +=
      "<th>" +
      "年齢:" +
      "</th>" +
      "<td>" +
      value_age +
      "歳" +
      "</td>" +
      "</tr>";
    tr2 +=
      "<th>" + "住所:" + "</th>" + "<td>" + value_address + "</td>" + "</tr>";
    tr2 +=
      "<th>" +
      "電話番号:" +
      "</th>" +
      "<td>" +
      value_number +
      "</td>" +
      "</tr>";
    table2_object.insertAdjacentHTML("beforeend", tr2);
  });

  // ソート機能
  // デフォルトの表示を一旦削除して、ボタンの情報を追加
  // モノを並び替えるとき＝現状を一度リセットする

  //JSONデータの読み込み
  async function callApi() {
    //関数のfunction宣言の前にasyncを書いて非同期（async）関数であることを宣言
    const res = await fetch("./webapi.json");
    //変数resにawaitを書くことで非同期通信が終わった後にfetch()メソッド（引数はurl）を実行。
    const users = await res.json();
    // 変数jsonにawaitを書くことで非同期通信が終わった後にres.json()を実行

    return users;
  }

  document.addEventListener("DOMContentLoaded", function () {
    async function d() {
      const users = await callApi();
      // デフォルト表示のリスト
      for (let i = 0; i < users.length; i++) {
        let contents = document.getElementById("contents");
        //リスト追加
        let flex = `<div class="flex">`;
        flex += `
<p id="icon"><img src="./img/icon.png" width="200" height="200" alt="アイコン画像"></p>
<table id="table1">
<tr><th>社員名:</th><td class="td">${users[i].employee_name}</td></tr>
<tr><th></th><td class="td">${users[i].furigana}</td></tr>
<tr><th>入社日:</th><td class="td">${users[i].hire_date}</td></tr>
<tr><th>所属部署:</th><td class="td">${users[i].department}</td></tr>
</table>
<table id="table2">
<tr><th>誕生日:</th><td class="td">${users[i].date_of_birth}</td></tr>
<tr><th>年齢:</th><td class="td">${users[i].age}歳</td></tr>
<tr><th>住所:</th><td class="td">${users[i].address}</td></tr>
<tr><th>電話番号:</th><td class="td">${users[i].phone_number}</td></tr>
</table>
<button id="btn" class="editBtn offEdit">編集</button>
</div>
`;
        contents.insertAdjacentHTML("beforeend", flex);
      }
      let contents = document.getElementById("contents");
    }
    d();
  });

  //１．if文で昇順降順の判定
  //２．sortで情報を整形
  //３．foreachで吐き出す
  //繰り返しの中でソートを使う× ソートをして順番が治ったうえで繰り返し（リストの順番）
  //配列の中のobjectが対象

  //sortBtnを押したとき、selectの値に応じて並び替え
  let sortBtn = document.getElementById("sortBtn");
  sortBtn.addEventListener("click", sort);
  async function sort() {
    const users = await callApi();
    //ボタンを押したとき、デフォルトのリストをリセット
    let contents = document.getElementById("contents");
    while (contents.firstChild) {
      contents.removeChild(contents.firstChild);
    }
    //selectの値を取得・判定
    let select = document.querySelector('[name="selectsSort"]');
    function insert(i) {
      let contents = document.getElementById("contents");
      //リスト追加
      let flex = `<div class="flex">`;
      flex += `
  <p id="icon"><img src="./img/icon.png" width="200" height="200" alt="アイコン画像"></p>
  <table>
  <tr><th>社員名:</th><td class="td">${users[i].employee_name}</td></tr>
  <tr><th></th><td class="td">${users[i].furigana}</td></tr>
  <tr><th>入社日:</th><td class="td">${users[i].hire_date}</td></tr>
  <tr><th>所属部署:</th><td class="td">${users[i].department}</td></tr>
  </table>
  <table>
  <tr><th>誕生日:</th><td class="td">${users[i].date_of_birth}</td></tr>
  <tr><th>年齢:</th><td class="td">${users[i].age}歳</td></tr>
  <tr><th>住所:</th><td class="td">${users[i].address}</td></tr>
  <tr><th>電話番号:</th><td class="td">${users[i].phone_number}</td></tr>
  </table>
  <button class="editBtn offEdit">編集</button>
  </div>
  `;
      contents.insertAdjacentHTML("beforeend", flex);
    }
    //～～～～～～～～～～～
    //修正済み（社員一覧単体No1）ここから
    //「選択してください」のままの場合
    if (select.selectedIndex == 0) {
      async function d() {
        const users = await callApi();
        // デフォルト表示のリスト
        for (let i = 0; i < users.length; i++) {
          let contents = document.getElementById("contents");
          //リスト追加
          let flex = `<div class="flex">`;
          flex += `
  <p id="icon"><img src="./img/icon.png" width="200" height="200" alt="アイコン画像"></p>
  <table id="table1">
  <tr><th>社員名:</th><td class="td">${users[i].employee_name}</td></tr>
  <tr><th></th><td class="td">${users[i].furigana}</td></tr>
  <tr><th>入社日:</th><td class="td">${users[i].hire_date}</td></tr>
  <tr><th>所属部署:</th><td class="td">${users[i].department}</td></tr>
  </table>
  <table id="table2">
  <tr><th>誕生日:</th><td class="td">${users[i].date_of_birth}</td></tr>
  <tr><th>年齢:</th><td class="td">${users[i].age}歳</td></tr>
  <tr><th>住所:</th><td class="td">${users[i].address}</td></tr>
  <tr><th>電話番号:</th><td class="td">${users[i].phone_number}</td></tr>
  </table>
  <button id="btn" class="editBtn offEdit">編集</button>
  </div>
  `;
          contents.insertAdjacentHTML("beforeend", flex);
        }
        let contents = document.getElementById("contents");
      }
      d();
    }
    //修正済み（社員一覧単体No1）ここまで
    //～～～～～～～～～～～
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
    } else {
    }
  }

  //絞り込み機能
  //searchBtnを押したとき、selectの値に応じて並び替え
  let searchBtn = document.getElementById("searchBtn");
  searchBtn.addEventListener("click", search);
  //検索ボタンを押したとき
  async function search() {
    const users = await callApi();
    // デフォルトのリストをリセット
    let contents = document.getElementById("contents");
    while (contents.firstChild) {
      contents.removeChild(contents.firstChild);
    }
    //値の一部が配列内のオブジェクトと一致した場合
    let searchWord = document.getElementById("searchWord");
    let getValue = searchWord.value;
    let searchText = document.getElementById("searchText");
    for (let i = 0; i < users.length; i++) {
      let index = users[i].employee_name.indexOf(getValue);
      //値がtrueだった場合
      if (index >= 0) {
        let contents = document.getElementById("contents");
        //リスト追加
        let flex = `<div class="flex">`;
        flex += `
    <p id="icon"><img src="./img/icon.png" width="200" height="200" alt="アイコン画像"></p>
    <table>
    <tr><th>社員名:</th><td class="td">${users[i].employee_name}</td></tr>
    <tr><th></th><td class="td">${users[i].furigana}</td></tr>
    <tr><th>入社日:</th><td class="td">${users[i].hire_date}</td></tr>
    <tr><th>所属部署:</th><td class="td">${users[i].department}</td></tr>
    </table>
    <table>
    <tr><th>誕生日:</th><td class="td">${users[i].date_of_birth}</td></tr>
    <tr><th>年齢:</th><td class="td">${users[i].age}歳</td></tr>
    <tr><th>住所:</th><td class="td">${users[i].address}</td></tr>
    <tr><th>電話番号:</th><td class="td">${users[i].phone_number}</td></tr>
    </table>
<button class="editBtn offEdit">編集</button>
    </div>
    `;
        contents.insertAdjacentHTML("beforeend", flex);
      }
      // else if (index === -1) {
      //   searchText.textContent = "一致する結果がありません";
      //   searchText.style.color = "#F00";
      // }
      // else {
        // searchText.textContent = "一致する結果がありません";
        // searchText.style.color = "#F00";
      // }
    }
    //対応未完了（結合No1）どっちでもテキスト出てくる
    for (let i = 0; i < users.length; i++) {
      let index = users[i].employee_name.indexOf(getValue);
      if (index === -1) {
        searchText.textContent = "一致する結果がありません";
        searchText.style.color = "#F00";
      } else {
        searchText.textContent = "";
        searchText.style.color = "#333";
        console.log(index);
      }
    }
    //～～～～～～～～～～～
    // //修正済み（社員一覧単体No2）ここから
    if (getValue.length >= 101) {
      searchText.textContent = "文字数の上限をオーバーしています";
      searchText.style.color = "#F00";
    } else {}
    // //修正済み（社員一覧単体No2）ここまで
    //～～～～～～～～～～～
  }

  // 編集機能
  // ◎ボタンをクリックしたら、テキストボックスに置き換わる
  //編集完了後もう一度ボタンを押すと、変更した内容が反映される =新しい値を取得、反映
  //元のテキストの状態に戻る→tdに戻す
  // ★flexの何番目のtableのtdをテキストボックスに変更
  // class取得→td生成→置き換えの流れをメソッドで

  // e（.editBtn）がクリックされたとき
  document.addEventListener("click", function (e) {
    async function edit() {
      const users = await callApi();
      //複数のボタンの中から選ばれクリックされた一つ e.target ＝ .editBtn
      const t = e.target.closest(".editBtn");
      //tがnull以外の場合（クリックされたのが.editBtnのどれかの時）
      let btn = document.getElementById("btn");
      if (t !== null && btn.classList.contains("offEdit")) {
        //初回クリックで.offEditから.onEditに
        btn.classList.replace("offEdit", "onEdit");
        //クリックされた.editBtnのインデックス番号を返す
        const index = [...document.querySelectorAll(".editBtn")].indexOf(t);
        //indexの親要素＝flexからたどる
        let parent = t.parentNode;
        //テキストボックス状のリスト追加
        let td = parent.querySelectorAll(".td");
        for (let num = 0; num < td.length; num++) {
          function changeToInput(num, what) {
            let tds = document.createElement("td");
            tds.innerHTML = `<input class="inputValue" value="${what}"><p class="alertText"></p>`;
            td[num].replaceWith(tds);
            return;
          }
          // //社員名
          changeToInput(0, users[index].employee_name);
          // //ふりがな
          changeToInput(1, users[index].furigana);
          // //入社日
          changeToInput(2, users[index].hire_date);
          // //所属部署
          changeToInput(3, users[index].department);
          // //誕生日
          changeToInput(4, users[index].date_of_birth);
          // //年齢
          changeToInput(5, users[index].age);
          // //住所
          changeToInput(6, users[index].address);
          // // 電話
          changeToInput(7, users[index].phone_number);
        }
      } else if (t !== null && btn.classList.contains("onEdit")) {
        //２回目のクリックで.onEditから.offEditに（編集完了）
        btn.classList.replace("onEdit", "offEdit");
        //indexの親要素＝flexからたどる
        let parent = t.parentNode;
        let inputValue = parent.querySelectorAll(".inputValue");
        let alertText = parent.querySelectorAll(".alertText");
        //～～～～～～～～～～
        //空欄エラー 修正済み（社員一覧単体No3）ここから
        //空欄エラー 修正済み（社員一覧結合No2）ここから
        for (let i = 0; i < inputValue.length; i++) {
          if (!inputValue[i].value) {
            alertText[i].textContent = "必須項目です";
            alertText[i].style.color = "#f00";
            inputValue[i].style.borderColor = "#f00";
            return;
          } else {
            alertText[i].textContent = "";
            inputValue[i].style.borderColor = "#333";
          }
        }
        //修正済み（社員一覧単体No3）ここまで
        //修正済み（社員一覧結合No2）ここまで
        //～～～～～～～～～～

        //～～～～～～～～～～
        //値が適切でない場合 
        //修正済み（社員一覧単体No4）ここから
        //修正済み（社員一覧結合No3）ここから
        //社員名
        for (let i = 0; i < inputValue.length; i++) {
          let inputLength0 = inputValue[0].value;
          if (inputValue[0].value.match(/[0-9!-/:-@¥[-`{-~]/)) {
            alertText[0].textContent = "記号・数字を含めないでください。";
            alertText[0].style.color = "#f00";
            inputValue[0].style.borderColor = "#f00";
            return;
          }
          //～～～～～～～～～～
          //修正済み（単体No5）ここから
          else if (inputLength0.length >= 101) {
            alertText[0].textContent = "文字数の上限をオーバーしています";
            alertText[0].style.color = "#F00";
            inputValue[0].style.borderColor = "#f00";
            return;
          }
          //修正済み（単体No5）ここまで
          //～～～～～～～～～～
          else {
            alertText[0].textContent = "";
            inputValue[0].style.borderColor = "#333";
          }
        }
        //ひらがな
        for (let i = 0; i < inputValue.length; i++) {
          let inputLength1 = inputValue[1].value;
          if (inputValue[1].value.match(/^[^ぁ-ん]+$/)) {
            alertText[1].textContent = "ひらがなのみを入力してください。";
            alertText[1].style.color = "#f00";
            inputValue[1].style.borderColor = "#f00";
            return;
          }
          //～～～～～～～～～～
          //修正済み（単体No6）ここから
          else if (inputLength1.length >= 101) {
            alertText[1].textContent = "文字数の上限をオーバーしています";
            alertText[1].style.color = "#F00";
            inputValue[1].style.borderColor = "#f00";
            return;
          }
          //修正済み（単体No6）ここまで
          //～～～～～～～～～～
          else {
            alertText[1].textContent = "";
            inputValue[1].style.borderColor = "#333";
          }
        }
        //入社日
        for (let i = 0; i < inputValue.length; i++) {
          if (
            inputValue[2].value.match(
              /^[0-9]{4}年(0[1-9]|1[0-2]|[1-9])月(0[1-9]|[12][0-9]|3[01]|[1-9])日$/
            )
          ) {
          } else {
            alertText[2].textContent =
              "yyyy年mm月dd日の形式で入力してください。";
            alertText[2].style.color = "#f00";
            inputValue[2].style.borderColor = "#f00";
            return;
          }
        }
        // 所属部署
        for (let i = 0; i < inputValue.length; i++) {
          if (inputValue[3].value.match(/[0-9!-/:-@¥[-`{-~]/)) {
            alertText[3].textContent = "記号・数字を含めないでください。";
            alertText[3].style.color = "#f00";
            inputValue[3].style.borderColor = "#f00";
            return;
          } else {
            alertText[3].textContent = "";
            inputValue[3].style.borderColor = "#333";
          }
        }
        //生年月日
        for (let i = 0; i < inputValue.length; i++) {
          if (
            inputValue[4].value.match(
              /^[0-9]{4}年(0[1-9]|1[0-2]|[1-9])月(0[1-9]|[12][0-9]|3[01]|[1-9])日$/
            )
          ) {
          } else {
            alertText[4].textContent =
              "yyyy年mm月dd日の形式で入力してください。";
            alertText[4].style.color = "#f00";
            inputValue[4].style.borderColor = "#f00";
            return;
          }
        }
        //年齢
        for (let i = 0; i < inputValue.length; i++) {
          if (inputValue[5].value.match(/[^0-9]/)) {
            alertText[5].textContent = "数字のみを入力してください。";
            alertText[5].style.color = "#f00";
            inputValue[5].style.borderColor = "#f00";
            return;
          } else {
            alertText[5].textContent = "";
            inputValue[5].style.borderColor = "#333";
          }
        }
        //電話番号
        for (let i = 0; i < inputValue.length; i++) {
          if (inputValue[7].value.match(/[^0\d{2,3}-\d{1,4}-\d{4}$]/)) {
            alertText[7].textContent = "数字、ハイフンのみを入力してください。";
            alertText[7].style.color = "#f00";
            inputValue[7].style.borderColor = "#f00";
            return;
          } else {
            alertText[7].textContent = "";
            inputValue[7].style.borderColor = "#333";
          }
        }
        //修正済み（社員一覧単体No4）ここまで
        //修正済み（社員一覧結合No3）ここまで
        //～～～～～～～～～～
        //値が適切な場合
        for (let i = 0; i < inputValue.length; i++) {
          function changeToTd() {
            alertText[i].textContent = "";
            let tds = document.createElement("td");
            tds.classList.add("td");
            tds.innerHTML = `${inputValue[i].value}`;
            inputValue[i].replaceWith(tds);
          }
          changeToTd(0);
          changeToTd(1);
          changeToTd(2);
          changeToTd(3);
          changeToTd(4);
          changeToTd(5);
          changeToTd(6);
          changeToTd(7);
          // 社員名
          // validate(0,  "記号・数字を含めないでください。");
          // //フリガナ
          // validate(1,  "記号・数字を含めないでください。");
          // // //入社日
          // validate(2,  "記号・数字を含めないでください。");
          // // //所属部署
          // validate(3,  "記号・数字を含めないでください。");
          // // //誕生日
          // validate(4,  "記号・数字を含めないでください。");
          // // //年齢
          // validate(5,  "記号・数字を含めないでください。");
          // // //住所
          // validate(6,  "記号・数字を含めないでください。");
          // // //電話番号
          //   validate(7, "記号・数字を含めないでください。");
        }
      }
    }
    edit();
  });
}
