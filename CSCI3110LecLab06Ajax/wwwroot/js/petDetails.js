﻿"using Strict";

import { read } from "./petRepository.js";

const urlSections = window.location.href.split("/");
console.log(urlSections);
const petId = urlSections[5];
try {
    const pet = await read(petId);
    setText("#petId", pet.id);
    setText("#petName", pet.name);
    setText("#petWeight", pet.weight);
}
catch (error) {
    console.log(error)
    window.location.replace("/pet/index"); // redirect
}

function setText(elementId, text) {
    const element = document.querySelector(elementId);
    element.appendChild(document.createTextNode(text));
}