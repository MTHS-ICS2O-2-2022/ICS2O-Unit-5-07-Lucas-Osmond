// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lucas Osmond
// Created on: May 2023
// This file contains the JS functions for index.html

function myButtonClicked () {
  const number = parseInt(document.getElementById('number').value)
  let answer = 0

  for (let counter = 0; counter <= number; counter++) {
    answer += counter
  }
  document.getElementById('answer').innerHTML = 'The sum of all numbers from 0 to ' + number + ' is ' + answer + '.'
}
