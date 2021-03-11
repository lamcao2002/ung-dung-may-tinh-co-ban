let classCal = document.getElementsByClassName("calculation");
for (let i = 0; i < classCal.length; i++) {
    classCal[i].addEventListener("click", function () {
        handler(this.id);
    });
}

function handler(id) {
    let num1 = Number(document.getElementById("number1").value);
        let num2 = Number(document.getElementById("number2").value);
        let result;
        switch (id) {
            case "add":
                result = num1 + num2;
                break;
            case "sub":
                result = num1 - num2;
                break;
            case "multi":
                result = num1 * num2;
                break;
            case "div":
                result = (num1 / num2).toFixed(2);
                break;
        }
        document.getElementById("result").innerHTML = result;
}