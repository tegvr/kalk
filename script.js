function input(number){
    document.form.textView.value = document.form.textView.value+number;
}
function operan(optr){
    const operant = document.form.textView.value;
    if(operant == ""){
        alert("wopp.. masukkan angka terlebih dahulu");
    }else{
        document.form.textView.value = document.form.textView.value+optr;
    }

    
}

function hapusSemua(){
    document.form.textView.value = "";
}

function hapusSatu(){
    var hapus = document.form.textView.value;
    document.form.textView.value = hapus.substring(0,hapus.length-1);
}

function operasi(){
    const equal = document.form.textView.value;
    if(equal == ""){
        alert("Apa yang mau di operasikan fergusso!!");
    }else{
    document.form.textView.value = eval( document.form.textView.value);
    }
}
function min(){
    const min = document.form.textView.value;
    const minmin = min.map((number) => {
        document.form.textView.value = number * -1
    });
    
}

function persen(){
    const persen = document.form.textView.value;
    document.form.textView.value = document.form.textView.value / 100;
}

