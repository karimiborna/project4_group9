let random_sample_buttom = d3.select("#random-person");
let randomInfo = d3.select("#sampleInfo");

function createSample() {
    testValue = Math.random() * 10
    console.log(testValue);
    randomInfo.text("Test: " + testValue);
}

random_sample_buttom.on('click', createSample);