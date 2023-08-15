let random_sample_buttom = d3.select("#random-person");
let randomInfo = d3.select("#sampleInfo");

function createSample() {
    testValue = Math.random() * 10
    console.log(testValue);
    randomInfo.text("Test: " + testValue);
}

function displaySampleInfo() {
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
   let HeartDiesease = d3.select("#sample-metadata").append("h5");
}

random_sample_buttom.on('click', createSample);