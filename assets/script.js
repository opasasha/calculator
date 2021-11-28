
function calc(){
    let a = document.querySelector('.textarea');
    console.dir(a, 'a');
    console.log(a.value.length);
    a.value = (a.value.length);
}

function calculate(){
    let b = document.querySelector('.textarea2');
    b.value = math.evaluate(b.value);
}