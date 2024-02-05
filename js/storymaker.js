// Assignment 1 | COMP1073 Client-Side JavaScript
document.addEventListener('DOMContentLoaded', function() {
/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const btnNoun1 = document.getElementById('noun1');
const btnVerb = document.getElementById('verb');
const btnAdjective = document.getElementById('adjective');
const btnNoun2 = document.getElementById('noun2');
const btnSetting = document.getElementById('setting');

// Constants for p tag to display query selectors
const displayNoun1 = document.getElementById('choosenNoun1');
const displayVerb = document.getElementById('choosenVerb');
const displayAdjective = document.getElementById('choosenAdjective');
const displayNoun2 = document.getElementById('choosenNoun2');
const displaySetting = document.getElementById('choosenSetting');
const displayStory = document.getElementById('story');

// Constants for final buttons and p tags
const btnPlayback = document.getElementById('playback');
const btnRandom = document.getElementById('random');
const btnReset = document.getElementById('reset');

// Variables for pre-defined arrays
const nouns1 = ["the turkey", "mom", "dad", "the dog", "my teacher", "the elephant", "the cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const nouns2 = ["monkey", "fish", "cow", "frog", "bug", "worm"];
const settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    // if-else to change count setting
    if (noun1Count >= nouns1.length) {
        noun1Count = 0; 
    }
    displayNoun1.textContent = nouns1[noun1Count];
    noun1Count++;
}

function verb_on_click() {
    if (verbCount >= verbs.length) {
        verbCount = 0; 
    }
    displayVerb.textContent = verbs[verbCount];
    verbCount++;
}

function adjective_on_click() {
    if (adjectiveCount >= nouns1.length) {
        adjectiveCount = 0; 
    }
    displayAdjective.textContent = adjectives[adjectiveCount];
    adjectiveCount++;
}

function noun2_on_click() {
    if (noun2Count >= nouns2.length) {
        noun2Count = 0;
    }
    displayNoun2.textContent = nouns2[noun2Count];
    noun2Count++;
}


function setting_on_click() {
    if (settingCount >= settings.length) {
        settingCount = 0;
    }
    displaySetting.textContent = settings[settingCount];
    settingCount++;
}

// concatenate the user story and display
function playback_on_click() {
     displayStory.textContent = `${displayNoun1.textContent} ${displayVerb.textContent} ${displayAdjective.textContent} ${displayNoun2.textContent} ${displaySetting.textContent}.`;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
     displayStory.textContent = `${nouns1[Math.floor(Math.random() * nouns1.length)]} ${verbs[Math.floor(Math.random() * verbs.length)]} ${nouns2[Math.floor(Math.random() * nouns2.length)]} ${adjectives[Math.floor(Math.random() * adjectives.length)]} ${settings[Math.floor(Math.random() * settings.length)]}.`;
}
function reset_on_click() {
    displayStory.textContent = ("your story has been reset!")
}

/* Event Listeners
-------------------------------------------------- */

    btnNoun1.addEventListener('click', noun1_on_click);
    btnVerb.addEventListener('click', verb_on_click);
    btnAdjective.addEventListener('click', adjective_on_click);
    btnNoun2.addEventListener('click', noun2_on_click);
    btnSetting.addEventListener('click', setting_on_click);
    btnPlayback.addEventListener('click', playback_on_click);
    btnRandom.addEventListener('click', random_on_click);
    btnReset.addEventListener('click', reset_on_click);
})

