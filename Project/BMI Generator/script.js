const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);
  const result = document.querySelector('#result');

  if (isNaN(height) || height <= 0) {
    result.innerHTML = 'Please give a valid height in CM.';
  } else if (isNaN(weight) || weight <= 0) {
    result.innerHTML = 'Please give a valid weight in KG.';
  } else {
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    let message = '';
    if (bmi < 18.6) {
      message = 'You are underweight.';
    } else if (bmi < 24.9) {
      message = 'You are normal weight.';
    } else {
      message = 'You are overweight.';
    }

    result.innerHTML = `<span>Your BMI is ${bmi}</span><p>${message}</p>`;
  }
});
