const resultContainer = document.getElementById('wynik');
function oblicz(){
    var a = document.getElementById('RodzajPaliwa').value;
    var b = document.getElementById('litry').value;
    if (a == 1 ){
        a = 4;
    }else if (a == 2){
        a = 3.5;
    }else{
        a = 0;
    }
    var result = a * b;
     resultContainer.textContent = "koszt paliwa: "+result+ "zł";
}