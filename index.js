// Function to calculate mean
function calculateMean(data) {
  const sum = data.reduce((acc, value) => acc + parseFloat(value), 0);
  return sum / data.length;
}

// Function to calculate median
function calculateMedian(data) {
  const sortedData = data.slice().sort((a, b) => a - b);
  const middle = Math.floor(sortedData.length / 2);
  if (sortedData.length % 2 === 0) {
    return (
      (parseFloat(sortedData[middle - 1]) + parseFloat(sortedData[middle])) / 2
    );
  } else {
    return parseFloat(sortedData[middle]);
  }
}

// Function to calculate mode
function calculateMode(data) {
  const frequencyMap = {};
  let maxFrequency = 0;
  let modes = [];

  data.forEach((value) => {
    if (!frequencyMap[value]) {
      frequencyMap[value] = 0;
    }
    frequencyMap[value]++;
    if (frequencyMap[value] > maxFrequency) {
      maxFrequency = frequencyMap[value];
      modes = [value];
    } else if (frequencyMap[value] === maxFrequency) {
      modes.push(value);
    }
  });

  return modes.join(", ");
}

// Function to calculate standard deviation
function calculateStandardDeviation(data) {
  const mean = calculateMean(data);
  const squaredDifferences = data.map((value) => Math.pow(value - mean, 2));
  const variance =
    squaredDifferences.reduce((acc, value) => acc + value, 0) /
    (data.length - 1);
  return Math.sqrt(variance);
}

// Calculate statistics when the button is clicked
document.getElementById("calculate-button").addEventListener("click", () => {
  const inputData = document.getElementById("data-input").value;
  const dataArray = inputData
    .split(",")
    .map((value) => parseFloat(value.trim()));

  const mean = calculateMean(dataArray);
  const median = calculateMedian(dataArray);
  const mode = calculateMode(dataArray);
  const stdDeviation = calculateStandardDeviation(dataArray);

  document.getElementById("mean-result").textContent = mean.toFixed(2);
  document.getElementById("median-result").textContent = median.toFixed(2);
  document.getElementById("mode-result").textContent = mode;
  document.getElementById("std-deviation-result").textContent =
    stdDeviation.toFixed(2);
});
