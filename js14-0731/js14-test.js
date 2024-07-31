let myBtn = document.querySelector("#btn");
        myBtn.onclick = () => {
            let myDrinks = Array.from(document.getElementsByName("drinks"));
            let showDataEle = document.getElementById("show-data");
            // result => 有被勾選的飲料做成html string
            let result = "";
            myDrinks.forEach((drink) => {
                if (drink.checked) {
                    result += `<li>${drink.value}</li>`;
                }
            });
            // 如果result有內容則將其包裝在div和ul裡面
            if (result != "") {
                result = "<div><ul id='drink-checked-list'>" + "被勾選的飲料" + result;
                result += "</ul></div>"
            }

            // resultNot => 沒有被勾選的飲料做成html string
            let resultNot = "";
            myDrinks.forEach((drink) => {
                if (!drink.checked) {
                    resultNot += `<li>${drink.value}</li>`;
                }
            });
            // 如果resultNot有內容則將其包裝在div和ul裡面
            if (resultNot != "") {
                resultNot = "<div><ul id='drink-not-checked-list'>" + "沒被勾選的飲料" + resultNot;
                resultNot += "</ul></div>"
            }

            // 顯示內容
            showDataEle.innerHTML = result + resultNot;
        };