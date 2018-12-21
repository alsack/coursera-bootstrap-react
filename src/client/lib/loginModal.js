import $ from 'jquery';
import loginModal from './loginModal.html';

/**
 * Appends the Modal Dialog to the html body and adds the login button to the nav bar
 * @param {Object} container the DOM element in which to add the login button
 */
function addLoginModal(container) {
  const modal = $(document.body).append(loginModal);
  const loginBtn = $(container).append(`
    <span class="navbar-text">
        <a><span class="fa fa-sign-in"></span> Login</a>
    </span>`);
  loginBtn.click(() => {
    modal.find('#loginModal').modal('show');
  });
}

export default addLoginModal;
