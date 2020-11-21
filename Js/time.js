function hora() {
  var now = new Date();
  day = "teste"
  switch (now.getDay()){
    case 1:
      day = "Segunda-feira"
      break;
    case 2:
      day = "Terça-feira"
      break;
    case 3:
      day = "Quarta-feira"
      break;
    case 4:
      day = "Quinta-feira"
      break;
    case 5:
      day = "Sexta-feira"
      break;
    case 6:
      day = "Sábado"
      break;
    case 7:
      day = "Domingo"
      break;
  }
  document.querySelector(".time").innerHTML = ("00"+now.getHours()).slice(-2)+":"+("00"+now.getMinutes()).slice(-2);
  document.querySelector(".date").innerHTML = now.getUTCDate()+"/"+(now.getMonth()+1)+" "+day;
}

document.onload = setInterval(hora,1000);

