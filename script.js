'use strict';

const selectedDate = document.getElementById('date');
const calcBtn = document.getElementById('calculate');
const yearsEl = document.querySelector('.years-bold');
const monthsEl = document.querySelector('.months-bold');
const daysEl = document.querySelector('.days-bold');
const yearsP = document.querySelector('.years-p');
const monthsP = document.querySelector('.months-p');
const daysP = document.querySelector('.days-p');
const zodiacName = document.getElementById('sign');
const zodiacCharacteristics = document.getElementById('characteristics');
const zodiacDetails = document.getElementById('more-details');
const zodiacSummary = document.getElementById('summary');
const zodiacImage = document.getElementById('zodiacImage');

const ageFormatter = function (age, month, day) {
  if (age <= 1) {
    yearsP.innerText = 'Year';
  } else {
    yearsP.innerText = 'Years';
  }

  if (Math.abs(month) <= 1) {
    monthsP.innerText = 'Month';
  } else {
    monthsP.innerText = 'Months';
  }

  if (Math.abs(day) <= 1) {
    daysP.innerText = 'Day';
  } else {
    daysP.innerText = 'Days';
  }
};

// const zodiacSign = function (month, day) {
//   month = Math.abs(month) + 1;
//   day = Math.abs(day);

//   console.log(month, day);

//   if (month >= 3 && month <= 4 && day >= 21 && day <= 19) {
//     zodiacName.innerHTML = `<li id="sign"><strong>Zodiac Sign:</strong> Aries</li>`;
//     zodiacCharacteristics.innerHTML = `<li id="characteristics">
//             <strong>Characteristics:</strong> Eager, Dynamic , quick and competitive.
//           </li>`;
//   }
// };

calcBtn.addEventListener('click', function () {
  const currentDate = new Date();
  const birthDate = new Date(selectedDate.value);
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const month = currentDate.getMonth() - birthDate.getMonth();
  const day = currentDate.getDate() - birthDate.getDate();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  yearsEl.innerText = age;
  monthsEl.innerText = Math.abs(month);
  daysEl.innerText = Math.abs(day);

  ageFormatter(age, month, day);

  //   zodiacSign(month, birthDate.getDate());

  return age, month, day;
});
