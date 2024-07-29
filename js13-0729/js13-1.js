/*
// 取得元素節點node
// 根據id屬性
let myjs = document.getElementById("js");
console.log(myjs);
console.log(myjs.textContent);
// 根據querySelector
console.log(document.querySelector("#js").textContent);
// 根據html標籤
let myLi = document.getElementsByTagName("li");
console.log(myLi);
// 取出css內容
console.log(myLi.item(1).textContent);
console.log(myLi[1].textContent);

// 顯示所有的li
for (let i = 0; i < myLi.length; i++) {
    console.log(myLi.item(i).textContent);
    console.log(myLi[i].textContent);
}

console.log("---querySelector---");
console.log(document.querySelector("h1").textContent);
console.log("---getElementsByTagName---");
console.log(document.getElementsByTagName("h1")[0].textContent);



// 使用類別名稱
let mySubjects = document.getElementsByClassName("subjects");
console.log(mySubjects);
for (let i = 0; i < mySubjects.length; i++) {
    console.log(mySubjects[i].textContent);
    console.log(mySubjects.item(i).textContent);
}

// 顯示指定的內容 => html
console.log(mySubjects["html"].textContent);
*/

// 取得id#p1內容
console.log(document.getElementById("p1").textContent);
console.log(document.querySelector("#p1").textContent);

// 取得li中的第一個p
let myP = document.querySelector("li>p");
console.log(myP);
// 取得li中的所有p
myP = document.querySelectorAll("li>p");
console.log(myP);
// 取得li的子元素中的div底下的p
myP = document.querySelectorAll("li>div>p");
console.log(myP);

// console.log(document.getElementById("html").getElementsByTagName("p"));

