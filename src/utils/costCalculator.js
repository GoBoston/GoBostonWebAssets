export default async function getCost(cost) {
  const costString = cost.default;
  const hide = cost.hide;
  const rate = await getRate();
  let usdValue, kztValue;
  if (costString.endsWith("USD")) {
    usdValue = parseFloat(costString.replace("USD", ""));
    kztValue = usdValue*(rate+5);  
  } else {
    kztValue = parseFloat(costString.replace("KZT", ""));
    usdValue = kztValue/(rate-5);    
  }
  return {
    usd: parseInt(usdValue),
    kzt: parseInt(kztValue),
    hide: hide
  };
}

async function getRate() {
  const url = `https://open.er-api.com/v6/latest/USD`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const rate = data.rates.KZT;
    return rate;
  } catch (error) {
    console.error("Error fetching conversion rate:", error);
    return 500;
  }
}
