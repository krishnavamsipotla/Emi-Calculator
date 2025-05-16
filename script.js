function calculateEMI() {
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const annualRate = parseFloat(document.getElementById("interestRate").value);
    const tenureYears = parseFloat(document.getElementById("loanTenure").value);

    if (!loanAmount || !annualRate || !tenureYears) {
        alert("Please enter valid values in all fields.");
        return;
    }

    const monthlyRate = annualRate / 12 / 100;
    const tenureMonths = tenureYears * 12;

    const emi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths) /
        (Math.pow(1 + monthlyRate, tenureMonths) - 1);

    const totalPayment = emi * tenureMonths;
    const totalInterest = totalPayment - loanAmount;

    document.getElementById("emi").textContent = emi.toFixed(2);
    document.getElementById("totalPayment").textContent = totalPayment.toFixed(2);
    document.getElementById("totalInterest").textContent = totalInterest.toFixed(2);
}
