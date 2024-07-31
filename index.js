const inputName = document.getElementById("inputName");
const inputLove = document.getElementById("inputLove");
const errorName = document.querySelector(".errorName");
const errorLove = document.querySelector(".errorLove");
const formName = document.querySelector(".formName");
const formLove = document.querySelector(".formLove");
const questionContainer = document.querySelector(".questionContainer");
const mainElement = document.querySelector(".main");
const formEnterBtn = document.querySelector(".inputButton");
const music = document.getElementById("music");
const timePassedText = document.getElementById("timePassedText");
const timeLeftText = document.getElementById("timeLeft");

function validateMyFormName() {
    if (
        inputName.value.toLowerCase() === "romane bro" ||
        inputName.value.toLowerCase() === "romane"
    ) {
        music.play();
        music.loop = true;
        formName.classList.add("displayNone");
        formLove.classList.remove("displayNone");
    } else {
        console.log("no wrong person");
        inputName.style.borderColor = "#FF3860";
        errorName.classList.remove("displayNone");
    }
}

function validateMyFormLove() {
    if (
        inputLove.value.toLowerCase() === "hasnain" ||
        inputLove.value.toLowerCase() === "hash"
    ) {
        formLove.classList.add("displayNone");
        questionContainer.classList.add("displayNone");
        mainElement.classList.remove("bg");
    } else {
        console.log("no wrong person");
        inputLove.style.borderColor = "#FF3860";
        errorLove.classList.remove("displayNone");
    }
}

// Time Meet In MS
let timeMeet = 1697654426024;
// Time Now In MS
let dateNow = new Date().getTime();
// Time Passed
timePassedMS = dateNow - timeMeet;
// Time Convertion From MS To Days Min Sec
function dhm(t, text) {
    var cd = 24 * 60 * 60 * 1000,
        ch = 60 * 60 * 1000,
        d = Math.floor(t / cd),
        h = Math.floor((t - d * cd) / ch),
        m = Math.round((t - d * cd - h * ch) / 60000),
        pad = function (n) {
            return n < 10 ? "0" + n : n;
        };
    if (m === 60) {
        h++;
        m = 0;
    }
    if (h === 24) {
        d++;
        h = 0;
    }
    // console.log(`${d} Days ${pad(h)} Hours ${pad(m)} Minutes`);
    text.textContent = `${d} Days ${pad(h)} Hours ${pad(m)} Minutes`;
    /* let timeLeftAnvsry = 365 - d;
    timeLeftText.textContent = `${timeLeftAnvsry} Days`; */
}
dhm(timePassedMS, timePassedText);

// Time Anversy Meet In MS
var anversyDate = "18-09-2024";
anversyDate = anversyDate.split("-");
var timeAnversy = new Date(anversyDate[2], anversyDate[1] - 1, anversyDate[0]);
let timeAnversyMS = timeAnversy.getTime();
// Time Now In MS
let dateNowAnversy = new Date().getTime();
// Time Left
timePassedMSAnversy = timeAnversyMS - dateNowAnversy;
// Time Convertion From MS To Days Min Sec
dhm(timePassedMSAnversy, timeLeftText);
