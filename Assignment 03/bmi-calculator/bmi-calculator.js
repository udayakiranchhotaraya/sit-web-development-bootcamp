function evaluateByMetric() {
    const height = parseFloat(document.getElementById("height-cm").value) / 100;
    const weight = parseFloat(document.getElementById("weight-kg").value);
    // console.log(height, weight);
    calculateBMI(height, weight, 0);
    console.log(bmi);
}

function evaluateByImperial() {
    const height_ft = parseFloat(document.getElementById("height-ft").value);
    const height_in = parseFloat(document.getElementById("height-in").value);
    const height = (height_ft * 12) + height_in;
    const weight = parseFloat(document.getElementById("weight-lb").value);
    // console.log(height_ft, height_in, weight);
    calculateBMI(height, weight, 1);
    console.log(bmi);
}

function calculateBMI(height, weight, params) {
    var bmi = weight / (height**2);
    var weightCategory;

    if (params === 1) {
        bmi = (bmi * 703).toFixed(2);
    } else {
        bmi = bmi.toFixed(2);
    }
    
    if (bmi < 18.5) {
        document.getElementById("alert").classList.add('alert-secondary');
        document.getElementById("alert").classList.remove('alert-success');
        document.getElementById("alert").classList.remove('alert-warning');
        document.getElementById("alert").classList.remove('alert-danger');
        // document.getElementById("alert").classList.toggle('alert-secondary');
        document.getElementById("uw").classList.add('table-active');
        document.getElementById("hw").classList.remove('table-active');
        document.getElementById("ow").classList.remove('table-active');
        document.getElementById("ob").classList.remove('table-active');
        // document.getElementById("uw").classList.toggle('table-active');
        weightCategory = "UnderWeight";
    } else if ((bmi >= 18.5) && (bmi < 25.0)) {
        document.getElementById("alert").classList.remove('alert-secondary');
        document.getElementById("alert").classList.add('alert-success');
        document.getElementById("alert").classList.remove('alert-warning');
        document.getElementById("alert").classList.remove('alert-danger');
        // document.getElementById("alert").classList.toggle('alert-secondary');
        document.getElementById("uw").classList.remove('table-active');
        document.getElementById("hw").classList.add('table-active');
        document.getElementById("ow").classList.remove('table-active');
        document.getElementById("ob").classList.remove('table-active');
        // document.getElementById("hw").classList.toggle('table-active');
        weightCategory = "Healthy Weight";
    } else if ((bmi >= 25.0) && (bmi < 30.0)) {
        document.getElementById("alert").classList.remove('alert-secondary');
        document.getElementById("alert").classList.remove('alert-success');
        document.getElementById("alert").classList.add('alert-warning');
        document.getElementById("alert").classList.remove('alert-danger');
        // document.getElementById("alert").classList.toggle('alert-secondary');
        document.getElementById("uw").classList.remove('table-active');
        document.getElementById("hw").classList.remove('table-active');
        document.getElementById("ow").classList.add('table-active');
        document.getElementById("ob").classList.remove('table-active');
        // document.getElementById("ow").classList.toggle('table-active');
        weightCategory = "Overweight";
    } else if (bmi >= 30.0 ) {
        document.getElementById("alert").classList.remove('alert-secondary');
        document.getElementById("alert").classList.remove('alert-success');
        document.getElementById("alert").classList.remove('alert-warning');
        document.getElementById("alert").classList.add('alert-danger');
        // document.getElementById("alert").classList.toggle('alert-danger');
        document.getElementById("uw").classList.remove('table-active');
        document.getElementById("hw").classList.remove('table-active');
        document.getElementById("ow").classList.remove('table-active');
        document.getElementById("ob").classList.add('table-active');
        // document.getElementById("ob").classList.toggle('table-active');
        weightCategory = "Obese";
    }

    if (!isNaN(bmi) || weightCategory != undefined) {
        document.getElementById("results").style.display = "flex";
        document.getElementById("alert").innerHTML = `Your BMI is <b>${bmi}</b>, indicating your weight is in the <b>${weightCategory}</b> category for adults of your height.`;
        window.location = "bmi-calculator.html#results";
    }
}    