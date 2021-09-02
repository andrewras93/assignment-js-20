'use strict';

let cpr = Number(window.prompt(`Enter CPR-nr.:`));

console.log(`Does this CPR-nr. belong to a woman? ${cpr % 2 == 0}`);