let random_sample_buttom = d3.select("#random-person");
let randomInfo = d3.select("#sampleInfo");

let sampleAge_input = d3.select("#sample-metadata-input").append("input").text("Age: ");
let sampleSex_input = d3.select("#sample-metadata-input").append("select");
let sampleChestPain_input = d3.select("#sample-metadata-input").append("select");
let sampleRestingBP_input = d3.select("#sample-metadata-input").append("input");
let sampleChol_input = d3.select("#sample-metadata-input").append("input");
let sampleFastingBS_input = d3.select("#sample-metadata-input").append("input");
let sampleRestECG_input = d3.select("#sample-metadata-input").append("input");
let sampleMaxHR_input = d3.select("#sample-metadata-input").append("input");
let sampleExerciseAng_input = d3.select("#sample-metadata-input").append("select");
let sampleOldPeak_input = d3.select("#sample-metadata-input").append("select");
let sampleSTSlope_input = d3.select("#sample-metadata-input").append("input");

let sampleAge = d3.select("#sample-metadata-random").append("h5");
let sampleSex = d3.select("#sample-metadata-random").append("h5");
let sampleChestPain = d3.select("#sample-metadata-random").append("h5");
let sampleRestingBP = d3.select("#sample-metadata-random").append("h5");
let sampleChol = d3.select("#sample-metadata-random").append("h5");
let sampleFastingBS = d3.select("#sample-metadata-random").append("h5");
let sampleRestECG = d3.select("#sample-metadata-random").append("h5");
let sampleMaxHR = d3.select("#sample-metadata-random").append("h5");
let sampleExerciseAng = d3.select("#sample-metadata-random").append("h5");
let sampleOldPeak = d3.select("#sample-metadata-random").append("h5");
let sampleSTSlope = d3.select("#sample-metadata-random").append("h5");


function init() {
    createSample();
}

function createSample() {
    sampleAge.text("Age: " + getRndInteger(40,100));
    sampleSex.text("Sex: " + getRndInteger(1,2));
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

function fiftyFifty() {
    return Math.random() < 0.5;
}

function randomSex() {
    let sex = [M,F]
    return sex[fiftyFifty()];
}

random_sample_buttom.on('click', createSample);

init();
console.log(randomSex());