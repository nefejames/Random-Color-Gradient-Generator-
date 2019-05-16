var displayColorCode = document.querySelector(".paragraph")

function linearGradientGenerator() {
     var randomReds = [];
     var randomReds2 = [];
     var randomGreens = [];
     var randomGreens2 = [];
     var randomBlues = [];
     var randomBlues2 = [];
     for (var i = 0; i <= 10; i++) {
       randomReds.push(Math.floor(Math.random() * 256));
       randomGreens.push(Math.floor(Math.random() * 256));
       randomBlues.push(Math.floor(Math.random() * 256));

       randomReds2.push(Math.floor(Math.random() * 256));
       randomGreens2.push(Math.floor(Math.random() * 256));
       randomBlues2.push(Math.floor(Math.random() * 256));
     }

     for (var j = 0; j <= 10; j++) {
       var linearGradientCodeOne =
         "rgb(" +
         randomReds[j] +
         "," +
         randomGreens[j] +
         "," +
         randomBlues[j] +
         ")";
     }

     for (var j = 0; j <= 10; j++) {
       var linearGradientCodeTwo =
         "rgb(" +
         randomReds2[j] +
         "," +
         randomGreens2[j] +
         "," +
         randomBlues2[j] +
         ")";
     }

     var fullLinearGradientCode =
       "linear-gradient" +
       "(" +
       "135deg" +
       "," +
       (linearGradientCodeOne + "," + linearGradientCodeTwo) +
       ")";
     document.body.style.background = fullLinearGradientCode;
     console.log(linearGradientCodeOne);
     console.log(linearGradientCodeTwo);
     console.log(fullLinearGradientCode);
     displayColorCode.textContent = fullLinearGradientCode;
   }

   //causes linearGradientGenerator() function to run when spacebar is clicked
   document.body.onkeyup = function(e) {
     if (e.keyCode == 32) {
       linearGradientGenerator();
     }
   };