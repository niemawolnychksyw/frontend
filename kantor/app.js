console.log('test');

//pobieranie wartosci z inputa

var amount = document.getElementById('amount');
var btn = document.getElementById('count');

btn.addEventListener('click', function(e) {
   var res = document.getElementById('result');
    res.innerHTML = "Kwota w USD to: " + (parseFloat(amount.value) / 3.65).toFixed(2);   // do 2 miejsc po przecinku
    // console.log(amount.value);
    e.preventDefault();   // blokuje domyslne zachowania, a domyslnym zachowaniem jest przeslanie formularza bo wziete z bootstrapa
    return false;

});