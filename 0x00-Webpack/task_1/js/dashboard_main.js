import $ from "jquery";
const _ = require('lodash');


$('body').append("\
  <p>Holberton Dashboard</p>\
  <p>Dashboard data for the students</p>");

$('body').append("<button>Click here to get started</button>");

$('body').append("<p id='count'></p>");

$('body').append("<p>Copyright - Holberton School</p>");


let count = 0;

$('#count').on("click", function updateCounter() {
  click += 1;
  $('#count').text(`${count} clicks on the button`);
});

const debounced = _.debounce(updateCounter, 500);
