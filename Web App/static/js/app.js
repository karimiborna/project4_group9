
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
let hiddenForm = d3.select('#send-to-flask');

let formAge = d3.select("#hidden-age");
let formSex = d3.select("#hidden-sex");
let formChestPain = d3.select("#hidden-chest-pain");
let formRestingBP = d3.select("#hidden-resting-BP");
let formChol = d3.select("#hidden-chol");
let formFastingBS = d3.select("#hidden-fast-BS");
let formRestECG = d3.select("#hidden-age-rest-ECG");
let formMaxHR = d3.select("#hidden-age-max-HR");
let formExerciseAng = d3.select("#hidden-age-exer-ang");
let formOldPeak = d3.select("#hidden-age-oldpeak");
let formSTSlope = d3.select("#hidden-age-slop-ST");


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

    if (modelChoice == "log-reg") {
        hiddenForm.attr("action", "/log");
    }
    if (modelChoice == "re-log-reg") {
        hiddenForm.attr("action", "/log_res");
    }
    if (modelChoice == "rand-for") {
        hiddenForm.attr("action", "/rf");
    }
    if (modelChoice == "knn") {
        hiddenForm.attr("action", "/knn");
    }
    if (modelChoice == "neur-net") {
        hiddenForm.attr("action", "/manual_nn");
    }
    if (modelChoice == "auto-neur-net") {
        hiddenForm.attr("action", "/auto_nn");
    }
    
    formAge.attr("value", sampleData[0]);
    formSex.attr("value", sampleData[1]);
    formChestPain.attr("value", sampleData[2]);
    formRestingBP.attr("value", sampleData[3]);
    formChol.attr("value", sampleData[4]);
    formFastingBS.attr("value", sampleData[5]);
    formRestECG.attr("value", sampleData[6]);
    formMaxHR.attr("value", sampleData[7]);
    formExerciseAng.attr("value", sampleData[8]);
    formOldPeak.attr("value", sampleData[9]);
    formSTSlope.attr("value", sampleData[10]);
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