let random_sample_buttom = d3.select("#random-person");
let randomInfo = d3.select("#sampleInfo");

let sampleAge_input = d3.select("#sample-metadata-input-left").append("input").text("Age: ");
let sampleSex_input = d3.select("#sample-metadata-input-left").append("select");
let sampleChestPain_input = d3.select("#sample-metadata-input-left").append("select");
let sampleRestingBP_input = d3.select("#sample-metadata-input-left").append("input");
let sampleChol_input = d3.select("#sample-metadata-input-left").append("input");
let sampleFastingBS_input = d3.select("#sample-metadata-input-left").append("input");
let sampleRestECG_input = d3.select("#sample-metadata-input-right").append("input");
let sampleMaxHR_input = d3.select("#sample-metadata-input-right").append("input");
let sampleExerciseAng_input = d3.select("#sample-metadata-input-right").append("select");
let sampleOldPeak_input = d3.select("#sample-metadata-input-right").append("select");
let sampleSTSlope_input = d3.select("#sample-metadata-input-right").append("input");

let sampleAgeRand = d3.select("#sample-metadata-random").append("h5");
let sampleSexRand = d3.select("#sample-metadata-random").append("h5");
let sampleChestPainRand = d3.select("#sample-metadata-random").append("h5");
let sampleRestingBPRand = d3.select("#sample-metadata-random").append("h5");
let sampleCholRand = d3.select("#sample-metadata-random").append("h5");
let sampleFastingBSRand = d3.select("#sample-metadata-random").append("h5");
let sampleRestECGRand = d3.select("#sample-metadata-random").append("h5");
let sampleMaxHRRand = d3.select("#sample-metadata-random").append("h5");
let sampleExerciseAngRand = d3.select("#sample-metadata-random").append("h5");
let sampleOldPeakRand = d3.select("#sample-metadata-random").append("h5");
let sampleSTSlopeRand = d3.select("#sample-metadata-random").append("h5");


function init() {
    createSample();
}

function createSample() {
    sampleAge = getRndInteger(25,100);
    sampleSex = randomSex();
    sampleChestPain = randomChestPain();
    sampleRestingBP = getRndInteger(90, 200);
    sampleChol = getRndInteger(100, 603);
    sampleFastingBS = Number(Math.random() < 0.5);
    sampleRestECG = randomRestECG();
    sampleMaxHR = getRndInteger(60, 202);
    sampleExerciseAng = randomExerAng();
    sampleOldPeak = (getRandomArbitrary(-2.6, 6.2)).toFixed(2);
    sampleSTSlope = randomSlope();

    sampleAgeRand.text("Age: " + sampleAge);
    sampleSexRand.text("Sex: " + sampleSex);
    sampleChestPainRand.text("Chest Pain: " + sampleChestPain);
    sampleRestingBPRand.text("Resting BP: " + sampleRestingBP);
    sampleCholRand.text("Cholesterol: " + sampleChol);
    sampleFastingBSRand.text("Fasting BS: " + sampleFastingBS);
    sampleRestECGRand.text("Resting ECG: " + sampleRestECG);
    sampleMaxHRRand.text("Max HR: " + sampleMaxHR);
    sampleExerciseAngRand.text("Exercise Ang: " + sampleExerciseAng);
    sampleOldPeakRand.text("Old Peak: " + sampleOldPeak);
    sampleSTSlopeRand.text("ST Slope: " + sampleSTSlope);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function randomSex() {
    let sex = ["M","F"];
    return sex[Number(Math.random() < 0.5)];
}

function randomChestPain() {
    let chestPain = ["TA", "NAP", "ATA", "ASY"];
    return chestPain[getRndInteger(0,4)]
}

function randomRestECG() {
    let restECG = ["ST", "LVH", "Normal"]
    return restECG[getRndInteger(0,3)]
}

function randomExerAng() {
    let exerAng = ["Y","N"];
    return exerAng[Number(Math.random() < 0.5)];
}

function randomSlope() {
    let restECG = ["Flat", "Up", "Down"]
    return restECG[getRndInteger(0,3)]
}


random_sample_buttom.on('click', createSample);

init();