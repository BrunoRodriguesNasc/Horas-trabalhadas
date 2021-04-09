window.addEventListener('load', start);

function calculate(entry,close) {


  const hoursEntry = entry.split(':');
  const hoursClose = close.split(':');

  const totalHours = hoursClose[0] - hoursEntry[0];
  const totalMinutes = hoursClose[1] - hoursEntry[1];

  if(totalMinutes < 0){
    totalMinutes += 60;
    totalHours -=1;
  }

  const dt1 = new Date(1995,01,01,hoursEntry[0],hoursEntry[1]);
  const dt2 = new Date(1995,01,01,hoursClose[0],hoursClose[1]);
  
  if( dt1.getTime() <= dt2.getTime() ){
    
  let title = `Total de horas trabalhadas :`  
  let message = `${totalHours} horas e ${totalMinutes} minutos`;

  return card(title, message);
  }
    
   title = `Error :`
   message = `Horas inválidas`;
  
  return card(title, message);
}

function card(title, message){

  const appendId = document.querySelector('#cardMessage');
  const label = document.createElement('label');
  label.textContent = `${title} ${message}`

  appendId.innerHTML = label.textContent;
}

function start() {
  const inputEntry = document.querySelector('#hoursEntry');
  const inputClose = document.querySelector('#hoursClose');
  const btnCalculate = document.querySelector('#btnCalculate');

  btnCalculate.addEventListener('click', function(){
    calculate(inputEntry.value,inputClose.value);
  });
}


