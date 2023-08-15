let random_sample_buttom = d3.select("#random-person");
let randomInfo = d3.select("#sampleInfo");

let sampleAge = d3.select("#sample-metadata").append("h5");
let sampleSex = d3.select("#sample-metadata").append("h5");
let sampleChestPain = d3.select("#sample-metadata").append("h5");
let sampleRestingBP = d3.select("#sample-metadata").append("h5");
let sampleChol = d3.select("#sample-metadata").append("h5");
let sampleFastingBS = d3.select("#sample-metadata").append("h5");
let sampleRestECG = d3.select("#sample-metadata").append("h5");
let sampleMaxHR = d3.select("#sample-metadata").append("h5");
let sampleExerciseAng = d3.select("#sample-metadata").append("h5");
let sampleOldPeak = d3.select("#sample-metadata").append("h5");
let sampleSTSlope = d3.select("#sample-metadata").append("h5");

function init() {
    createSample();
}

function createSample() {
    sampleAge.text("Age: " + getRndInteger(40,100));
    sampleSex.text("Sex: " + getRndInteger(40,100));
    sampleChestPain.text("Chest Pain: " + getRndInteger(40,100));
    sampleRestingBP.text("Resting BP: " + getRndInteger(40,100));
    sampleChol.text("Cholesterol: " + getRndInteger(40,100));
    sampleFastingBS.text("Fasting BS: " + getRndInteger(40,100));
    sampleRestECG.text("Resting ECG: " + getRndInteger(40,100));
    sampleMaxHR.text("Max HR: " + getRndInteger(40,100));
    sampleExerciseAng.text("Exercise Ang: " + getRndInteger(40,100));
    sampleOldPeak.text("Old Peak: " + getRndInteger(40,100));
    sampleSTSlope.text("ST Slope: " + getRndInteger(40,100));
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
random_sample_buttom.on('click', createSample);
