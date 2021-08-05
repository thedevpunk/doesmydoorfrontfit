const doorfront = document.getElementById("doorfrontHeight");
const niche = document.getElementById("nicheHeight");

const minimal = document.getElementById("minimalHeigth");
const minimalDoorHeight = document.getElementById("minimalDoorHeigth");
const maximalDoorHeight = document.getElementById("maximalDoorHeigth");

const button = document.getElementById("calc");

const maxFrontHeightSolution = document.getElementById("maxfrontHeightSolution");
const minFrontHeightSolution = document.getElementById("minfrontHeightSolution");
const frontHeightHint = document.getElementById("frontHeightHint");

button.addEventListener("click", function () {

   const placeBetweenDishwasherAndNiche = parseInt(niche.value) - parseInt(minimal.value);

   const maxFrontHeight = parseInt(maximalDoorHeight.value) + placeBetweenDishwasherAndNiche;

   maxFrontHeightSolution.innerText = `maximal front height is ${maxFrontHeight}mm`;

   if (parseInt(doorfront.value) <= maxFrontHeight && parseInt(doorfront.value) >= parseInt(minimalDoorHeight.value)) {
      frontHeightHint.innerText = "Your doorfront fits 🤙";
   } else if (parseInt(doorfront.value) > maxFrontHeight) {
      frontHeightHint.innerText = `Your doorfront is ${parseInt(doorfront.value) - maxFrontHeight}mm to large.`;
   } else if (parseInt(minimalDoorHeight.value) > parseInt(doorfront.value)) {
      frontHeightHint.innerText = `your doorfront is ${parseInt(minimalDoorHeight.value) - parseInt(doorfront.value)}mm to small.`;
   } else {
      frontHeightHint.innerText = '';
   }
});