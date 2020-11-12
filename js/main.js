var text = document.getElementById("enter");
var c = 0;
var result = document.getElementById("result");


function fn1() {
    for (var i = 0; i < text.value.length; i++) {
        if (text.value.charAt(i) === ' ') {
            c = c + 1;
        }
    }
    c = c + 1;
    result.innerHTML = "The Number Of Words In The Sentence Is : " + c;
    console.log(text.value.length);
}

function fn2() {
    c = 0;
    text.value = " ";
    result.innerHTML = "The Number Of Words In The Sentence Is : ";
}


