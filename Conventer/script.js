let rates = {usd: 3.9, eur: 4.2, gpt: 5}

function convertCurrency(){
    let number = document.getElementById("number").value

    if(number.trim() === "") {
        alert("Please enter a number")
        console.log("Empty input")
        return
    }

    number = parseFloat(number)

    if (isNaN(number) || number <= 0) {
        alert("Not a valid number")
        console.log("Not a valid number")
        return
    }

    const selectedCurrency = document.getElementById("selectCurrency").value

    if (selectedCurrency === "default" || selectedCurrency === "") {
        alert("Please select a valid currency")
        console.log("No currency selected or invalid selection")
        return
    }

    let currencyRate = rates[selectedCurrency]


    if(currencyRate){
        const result = (number / currencyRate).toFixed(2)
        alert(result)
        console.log(result)
    }
}