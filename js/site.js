// get the start and end numbers from the page
function getValues() {
  // get the start number
  let startNumber = document.getElementById('startValue').value;
  // get the end number
  let endNumber = document.getElementById('endValue').value;

  // turn the values into actual numbers
  startNumber = parseInt(startNumber);
  endNumber = parseInt(endNumber);

  if (Number.isInteger(startNumber) && Number.isInteger(endNumber)
    && (startNumber < endNumber)) {

    // generate the range of numbers
    let generatedNumbers = generateValues(startNumber, endNumber);
    displayValues(generatedNumbers);
  } else {
    // Uh oh! Something is wrong
    Swal.fire({
      icon: 'error',
      title: 'Oops!',
      text: 'Please enter valid integers and ensure your start number is less than your end number.',
    })
  }
}

// generate a list of all numbers between the start and end
function generateValues(start, end) {
  // create a variable that can hold a bunch of numbers
  let numbers = [];

  // put a number into that variable
  // add one to that number, then add THAT to the variable
  // keep adding one and putting it into the variable UNTIL
  // we get to the end number

  for (let n = start; n <= end; n++) {
    // code goes here...
    numbers.push(n);
  }

  // somehow tell displayValues to show those numbers???
  return numbers;
}

//display each of those numbers on the page
function displayValues(numbers) {

  let html = '';

  // make a loop to get each number from the array
  for (let index = 0; index < numbers.length; index++) {
    let currentNumber = numbers[index];
    html += `<tr><td class="${(currentNumber % 2 == 0 ? 'even' : 'odd')}">${currentNumber}</td></tr>`;
  }

  let tbody = document.getElementById('results');
  tbody.innerHTML = html;
}