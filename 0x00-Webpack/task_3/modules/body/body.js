import $ from "jquery";
import "./body.css"
const _ = require('lodash');


$('body').append("<p>Dashboard data for the students</p>");

$('body').append("<button>Click here to get started</button>");

$('body').append("<p id='count'></p>");


let count = 0;

$('#count').on("click", function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
});

const debounced = _.debounce(updateCounter, 500);
