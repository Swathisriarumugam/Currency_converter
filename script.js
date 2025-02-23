const exchangeRates = {
  USD: { EUR: 0.96, GBP: 0.79, INR: 86.65 },
  EUR: { USD: 1.05, GBP: 0.83, INR: 90.58 },
  GBP: { USD: 1.26, EUR: 1.21, INR: 109.43 },
  INR: { USD: 0.012, EUR: 0.011, GBP: 0.0091 },
};

document.getElementById("convertBtn").addEventListener("click", function () {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;

  if (isNaN(amount)) {
    document.getElementById("result").innerText =
      "Please enter a valid amount.";
    return;
  }

  if (fromCurrency === toCurrency) {
    document.getElementById("result").innerText =
      "Please select different currencies.";
    return;
  }

  const rate = exchangeRates[fromCurrency][toCurrency];
  const convertedAmount = (amount * rate).toFixed(2);
  document.getElementById(
    "result"
  ).innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
});
