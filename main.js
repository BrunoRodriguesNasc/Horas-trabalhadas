window.addEventListener('load', start);

function calculate(entry, close) {

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

  if (dt1.getTime() < dt2.getTime()) {

    return componentsText(totalHours, totalMinutes);
  }

  return componentsText();
}

function componentsText(value, otherValue) {

  let text = '';
  let messageValue = '';

  if (value === undefined || value === null) {
    text = 'Error :'
    messageValue = 'Valor inválido!'
    return card(text, messageValue)
  }

  text = "Total de horas trabalhadas : ";
  messageValue = `${value} horas e ${otherValue} minutos `;

  return card(text, messageValue);
}

function card(title, message) {

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


