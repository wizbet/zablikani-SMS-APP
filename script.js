const cash = document.getElementById('cash');
const momo = document.getElementById('momo-pay');
const previous = document.getElementById('previous-amount');
const cost = document.getElementById('cost-amount');
const current = document.getElementById('current-amount');
const balance = document.getElementById('balance');
const errorMsg = document.getElementById('error-msg');
const form = document.getElementById('payment-form');

function calculateBalance() {
  const cashVal = parseFloat(cash.value) || 0;
  const momoVal = parseFloat(momo.value) || 0;
  const previousVal = parseFloat(previous.value) || 0;
  const costVal = parseFloat(cost.value) || 0;

  const currentTotal = cashVal + momoVal;
  const newBalance = currentTotal + previousVal - costVal;

  current.value = currentTotal.toFixed(2);
  balance.value = newBalance.toFixed(2);
}

[cash, momo, previous, cost].forEach(field => {
  field.addEventListener('input', () => {
    if (isNaN(field.value) || field.value.trim() === "") {
      errorMsg.textContent = "Please enter valid numbers in all amount fields.";
    } else {
      errorMsg.textContent = "";
      calculateBalance();
    }
  });
});

form.addEventListener('submit', function (e) {
  if (!document.getElementById('customer-name').value) {
    e.preventDefault();
    errorMsg.textContent = "Please select a customer.";
  } else if (errorMsg.textContent !== "") {
    e.preventDefault();
  }
});