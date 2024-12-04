// שאלה 1
function minOfTwo(a, b) {
    if (a < b) {
        return a
    } else {
        return b
    }
}

// שאלה 2
function countLongStrings(a, b, c, d) {
    let number = 0
    if (a.length > 3) {
        number++
    }
    if (b.length > 3) {
        number++
    }
    if (c.length > 3) {
        number++
    }
    if (d.length > 3) {
        number++
    }
    return number
}

// שאלה 3
function checkA() {
    let text = prompt("write here")
    if (text.indexOf('A') > -1) {
        let result = text.replace("A", "a");
        console.log(result);
        return result;
    }
}

// שאלה 4
function checkNumber(number) {
    if (number % 2 === 0) {
        console.log("even")
    } else {
        console.log("odd")
    }

    if (number > 0) {
        console.log("positive number")
    } else {
        console.log("negative number")
    }
}

// שאלה 5
function checkSameCharaters(text){
    if(text.charAt(0) === text.charAt(text.length - 1)){
        console.log(text.slice(1,text.length - 1))
    } else{
        console.log(text)
    }
}

// שאלה 6
function testString(text){
    if(text.indexOf("*") > -1){
        console.log(text.replace("*",""))
    }
    if(text.indexOf("@") > -1){
        console.log("*" + text + "*")
    }
    if(text.indexOf("₪") > -1){
        console.log("new shekel")
    }
}