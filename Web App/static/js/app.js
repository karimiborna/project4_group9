
let sampleAgeInput = [];
let sampleSexInput = [];
let sampleChestPainInput = [];
let sampleRestingBPInput = [];
let sampleCholInput = [];
let sampleFastingBSInput = [];
let sampleRestECGInput = [];
let sampleMaxHRInput = [];
let sampleExerciseAngInput = [];
let sampleOldPeakInput = [];
let sampleSTSlopeInput = [];

let sampleData = [];
let userData = [];
let randData = [];

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

let random_sample_buttom = d3.select("#random-person");
let userInputButton = d3.select("#user-submit");
let modelChoice = d3.select('input[name="choose-model"]:checked').node().value;
let sampleChoice = d3.select('input[name="choose-sample"]:checked').node().value;
let runModelButton = d3.select("#run-model");


function init() {
    createSample();
}

function sendToModel() {
    modelChoice = d3.select('input[name="choose-model"]:checked').node().value;
    sampleChoice = d3.select('input[name="choose-sample"]:checked').node().value;

    if (sampleChoice == "user") {
        sampleData = userData;
    }
    if (sampleChoice == "random") {
        sampleData = randData;
    }
    console.log(modelChoice, sampleData);
}

function userInput() {
    sampleAgeInput = d3.select("#age").node().value;
    sampleSexInput = d3.select("#sex").node().value;
    sampleChestPainInput = d3.select("#chest-pain").node().value;
    sampleRestingBPInput = d3.select("#rest-bp").node().value;
    sampleCholInput = d3.select("#chol").node().value;
    sampleFastingBSInput = d3.select("#fast-bs").node().value;
    sampleRestECGInput = d3.select("#rest-ecg").node().value;
    sampleMaxHRInput = d3.select("#max-hr").node().value;
    sampleExerciseAngInput = d3.select("#exer-ang").node().value;
    sampleOldPeakInput = d3.select("#oldpeak").node().value;
    sampleSTSlopeInput = d3.select("#st-slope").node().value;

    userData = [];
    userData.push(sampleAgeInput);
    userData.push(sampleSexInput);
    userData.push(sampleChestPainInput);
    userData.push(sampleRestingBPInput);
    userData.push(sampleCholInput);
    userData.push(sampleFastingBSInput);
    userData.push(sampleRestECGInput);
    userData.push(sampleMaxHRInput);
    userData.push(sampleExerciseAngInput);
    userData.push(sampleOldPeakInput);
    userData.push(sampleSTSlopeInput);
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

    randData = [];
    randData.push(sampleAge);
    randData.push(sampleSex);
    randData.push(sampleChestPain);
    randData.push(sampleRestingBP);
    randData.push(sampleChol);
    randData.push(sampleFastingBS);
    randData.push(sampleRestECG);
    randData.push(sampleMaxHR);
    randData.push(sampleExerciseAng);
    randData.push(sampleOldPeak);
    randData.push(sampleSTSlope);
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
userInputButton.on('click', userInput);
runModelButton.on('click', sendToModel);

init();