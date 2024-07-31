// 取得送出按鈕
// let myBtn = document.getElementById("btn");
let myBtn = document.querySelector("#btn");

// 監聽按鈕是否被click
myBtn.addEventListener("click", () => {
    let result = "";
    // 取得科目的全部
    let subjects = document.getElementsByName("subject");
    // 使用迴圈逐一檢查是否被選取 => checked
    for (let i = 0; i < subjects.length; i++) {
        if(subjects[i].checked){
            // 取得選項的值
            result = subjects[i].value;
            // 選項按鈕是單選，找到答案後便可跳出迴圈
            break;
        }
    }
    console.log(`科目：${result}`);
});