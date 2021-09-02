'use strict';

let year = Number(window.prompt(`Enter year:`));

console.log(`Is ${year} a leap year? ${year % 4 === 0 && year % 100 !== 0 || year % 4 === 0 && year % 100 === 0 && year % 400 === 0}`);

//source: https://ourcodeworld.com/articles/read/852/how-to-determine-whether-a-year-is-leap-or-not-in-programming