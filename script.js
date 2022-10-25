var tombol = document.querySelector(".box");
var input = document.querySelector(".input");

tombol.addEventListener("click", function (data) {

    var klik = data.target;
    var nilaiKlik = klik.innerText;

    if (nilaiKlik == "AC") {
        input.value = "";
    } else if(nilaiKlik == "Del") {
        input.value = input.value.slice('0', -1)
    } else if (nilaiKlik == "="){
        input.value = eval(input.value);
    } else if (nilaiKlik == "%") {
        input.value = input.value/100;
    } else {

        input.value = input.value + nilaiKlik;
    }


})