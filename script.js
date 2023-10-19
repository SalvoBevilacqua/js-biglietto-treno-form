const nkmElem = document.getElementById("nkm");

const ageElem = document.getElementById("user_age");

console.log(nkmElem, ageElem);

const resultSection =  document.querySelector(".result_section");

const sendBtn = document.getElementById("send");

const priceForKm = 0.21;
const over = 0.60;
const min = 0.8;

sendBtn.addEventListener("click", function () {
    console.log("iniziamo");

    const nkm = nkmElem.value;
    const age = ageElem.value;
    console.log(nkm, age);

    let price = nkm * priceForKm;

    if (age > 65) {
        price = price * over;
    }
     else if (age < 18) {
        price = price * min;
    }
    
    console.log(price);

    //forzo 2 cifre decimali
    price = price.toFixed(2);

    document.getElementById("result").innerHTML = price;

    resultSection.classList.remove("hidden");
    
    console.log(price);

})