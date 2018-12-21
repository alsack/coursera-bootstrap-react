import $ from 'jquery';
import loginModal from './loginModal.html';

/**
 * Appends the Modal Dialog to the html body and adds the login
 * button to the nav bar
 * @param {Object} container the DOM element in which to add the login button
 */
function addLoginModal(container) {
  $(document.body).append(loginModal);
  container.append(`
    <span class="navbar-text">
        <a data-toggle="modal" data-target="#loginModal">
        <span class="fa fa-sign-in"></span> Login</a>
    </span>`);
}

export default addLoginModal;
