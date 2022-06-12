var CalcIMC = {
   calcular: function(estatura, peso) {
      try {
         if(isNaN(estatura) || isNaN(peso)) {
            alert("Error, no se ingresaron valores numericos");
         }
         else if(estatura == 0 || peso == 0) {
            alert("Error, se ingresaron valores nulos");
         }
         else if(estatura > 272 || estatura < 10) {
            alert("Error, se ingresaron valores invalidos");
         }
         else if(peso > 544 || peso < 2) {
            alert("Error, se ingresaron valores invalidos");
         }
         else{
            var EstaturaM = estatura / 100;
            var imc = peso / (EstaturaM * EstaturaM);
            document.getElementById(CalcIMC.validacion(imc)).removeAttribute('hidden'); document.getElementById('titulo').removeAttribute('hidden');
            return imc;
         }
      }
      catch(alert) {
         console.error(alert);
      }
   },
   validacion : function(imc) {
         if (imc < 18.5) {
            return "inferior";
         }
         else if (imc >= 18.5 && imc <= 24.9) {
            return "normal";
         }
         else if (imc >= 25 && imc <= 29.9) {
            return "superior";
         }
         else{
            return "obesidad";
         }
   }
}
function limpieza(){
   document.getElementById("inferior").hidden = true;
   document.getElementById("normal").hidden = true;
   document.getElementById("superior").hidden = true;
   document.getElementById("obesidad").hidden = true;
   document.getElementById("titulo").hidden = true;
}