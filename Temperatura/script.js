function conveTemperatura(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("retCelsius").innerHTML=(valNum-32)/1.8;
  }