'use strict';

const selectedDate = document.getElementById('date');
const calcBtn = document.getElementById('calculate');
const yearsEl = document.querySelector('.years-bold');
const monthsEl = document.querySelector('.months-bold');
const daysEl = document.querySelector('.days-bold');
const yearsP = document.querySelector('.years-p');
const monthsP = document.querySelector('.months-p');
const daysP = document.querySelector('.days-p');

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

  return age;
});
