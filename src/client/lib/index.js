import $ from 'jquery';
// import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';

import addLoginModal from './loginModal';
import addReserveModal from './reserveModal';

$(document).ready(function() {
  const navLoginContainer = $('#loginContainer');
  addLoginModal(navLoginContainer);

  const reserveTableContainer = $('#reserveButtonContainer');
  addReserveModal(reserveTableContainer);
});
