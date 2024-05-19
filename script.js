// JavaScript for the Tax Calculator

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('taxForm');
    const modal = document.getElementById('modal');
    const taxResult = document.getElementById('taxResult');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const grossIncome = parseFloat(document.getElementById('grossIncome').value);
        // Get other input values (Extra Income, Deductions, Age dropdown)
        const age = document.getElementById('age').value;
        // Calculate tax based on the provided formula
        let tax = 0;
        if (grossIncome > 800000) {
            if (age === '<40') {
                tax = 0.3 * (grossIncome - 800000);
            } else if (age === '>=40&<60') {
                tax = 0.4 * (grossIncome - 800000);
            } else if (age === '>=60') {
                tax = 0.1 * (grossIncome - 800000);
            }
        }
        // Display tax calculation result in the modal
        taxResult.innerHTML = `<p>Tax Calculation Result:</p><p>Tax Amount: ${tax} Lakhs</p>`;
        modal.style.display = 'block';
    });

    // Close the modal when the close button is clicked
    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
// JavaScript for the Tax Calculator

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('taxForm');
    const modal = document.getElementById('modal');
    const taxResult = document.getElementById('taxResult');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const grossIncome = parseFloat(document.getElementById('grossIncome').value);
        // Get other input values (Extra Income, Deductions, Age dropdown)
        const age = document.getElementById('age').value;
        // Calculate tax based on the provided formula
        let tax = 0;
        if (grossIncome > 800000) {
            if (age === '<40') {
                tax = 0.3 * (grossIncome - 800000);
            } else if (age === '>=40&<60') {
                tax = 0.4 * (grossIncome - 800000);
            } else if (age === '>=60') {
                tax = 0.1 * (grossIncome - 800000);
            }
        }
        // Display tax calculation result in the modal
        taxResult.innerHTML = `<p>Tax Calculation Result:</p><p>Tax Amount: ${tax} Lakhs</p>`;
        modal.style.display = 'block';
    });

    // Close the modal when the close button is clicked
    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
