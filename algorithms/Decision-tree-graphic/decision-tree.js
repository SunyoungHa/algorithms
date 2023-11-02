// 1. Look at the decision tree graphic in this repo
// 2. Update the function in the JS file
// 3. Call the function at least 5 times with different inputs


function decision(weather) {
  if (weather === 'sun') {
    const timeInput = prompt('Choose time more than 30 mins or less than 30 mins:');
    if (timeInput === 'more than 30 mins') {
      return 'walk';
    } else {
      return 'bus';
    }
  } else if (weather === 'cloud') {
    const hungryInput = prompt('Hungry? Type yes or no:');
    if (hungryInput === 'yes') {
      return 'walk';
    } else {
      return 'bus';
    }
  } else if (weather === 'rain') {
    return 'bus';
  } else {
    return 'Invalid input. Please select from sun, cloud, or rain.';
  }
}

function getResult(index) {
  const input = prompt(`Select sun, cloud, or rain (Input ${index}):`);
  const result = decision(input);
  console.log(`Result ${index}: ${result}`);
}

for (let i = 1; i <= 5; i++) {
  getResult(i);
}
