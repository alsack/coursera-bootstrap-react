import $ from 'jquery';
// import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';

import addLoginModal from './loginModal';

$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
  addLoginModal();
});
