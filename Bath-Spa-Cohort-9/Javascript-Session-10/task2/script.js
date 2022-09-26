function calculation() {
    let height = parseInt(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);
    let result = (weight / height / height) * 10000;
    document.getElementById("output").innerHTML = `Your BMI is: ${result}`;
}