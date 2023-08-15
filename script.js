function calculate() {
    try {
        const height = parseFloat(document.getElementById("height").value);
        const weight = parseFloat(document.getElementById("weight").value);
        const bmi = height / (weight * weight);

        if (bmi < 18) {
            document.getElementById("display").value = 'Underweight';
        } else if (bmi < 24.9) {
            document.getElementById("display").value = 'Normal Weight';
        } else if (bmi < 29.9) {
            document.getElementById("display").value = 'Overweight';
        } else if (bmi < 34.9) {
            document.getElementById("display").value = 'Obesity Class-Ⅰ';
        } else if (bmi < 39.9) {
            document.getElementById("display").value = 'Obesity Class-Ⅱ';
        } else {
            document.getElementById("display").value = 'Obesity Class-Ⅲ';
        }
    } catch (error) {
        document.getElementById("display").value = 'Error';
    }
}
