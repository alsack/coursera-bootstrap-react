import $ from 'jquery';
// import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';

import addCarousel from './carousel';
import addLoginModal from './loginModal';
import addReserveModal from './reserveModal';

$(document).ready(function() {
  const carouselContainer = document.querySelector('#carouselContainer');
  addCarousel(carouselContainer);

  const navLoginContainer = document.querySelector('#loginContainer');
  addLoginModal(navLoginContainer);

  const reserveTableContainer = document.querySelector('#reserveButtonContainer');
  addReserveModal(reserveTableContainer);
});
