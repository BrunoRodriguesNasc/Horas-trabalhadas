window.addEventListener('load', start);

function calculate(entry, close, salary) {

  const hoursEntry = entry.split(':');
  const hoursClose = close.split(':');

  let totalHours = hoursClose[0] - hoursEntry[0];
  let totalMinutes = hoursClose[1] - hoursEntry[1];

  if (totalMinutes < 0) {
    totalMinutes += 60;
    totalHours -= 1;
  }

  const dt1 = new Date(1995, 01, 01, hoursEntry[0], hoursEntry[1]);
  const dt2 = new Date(1995, 01, 01, hoursClose[0], hoursClose[1]);

  if (dt1.getTime() <= dt2.getTime()) {
    return handleText(totalHours, totalMinutes);
  }
  
  return handleText();
}

function handleText(hours, minutes) {

  if (hours || minutes ) {

    const stringTime = `${hours ? hours + ' hours' :''} ${minutes ? minutes + ' minutes' : ''}`;
    return handleCard("\n Worked hours: ",stringTime );
  }

  return handleCard('Error :', 'Value invalid!')
}
function handleCard(title, message) {

  const appendId = document.querySelector('#cardMessage');
  let label = document.createElement('label');
  label.textContent = `${title} ${message}`
  appendId.innerHTML = label.textContent;
}

function start() {
  const inputEntry = document.querySelector('#hoursEntry');
  const inputClose = document.querySelector('#hoursClose');
  const btnCalculate = document.querySelector('#btnCalculate');

  btnCalculate.addEventListener('click', function () {
    calculate(inputEntry.value, inputClose.value);
  });
}


