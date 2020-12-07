function totalcost(a, b) {
  y = parseFloat(document.getElementById("famount").value);
  var answer = document.getElementById("fresult");
  answer.value = Math.round(150.95 * y * 100) / 100;
  x = parseFloat(document.getElementById("mamount").value);
  var answer1 = document.getElementById("mresult");
  answer1.value = Math.round(180.95 * x * 100) / 100;
  a = parseFloat(document.getElementById("fresult").value);
  b = parseFloat(document.getElementById("mresult").value);
  var answer2 = document.getElementById("result");
  answer2.value = a + b;
}
