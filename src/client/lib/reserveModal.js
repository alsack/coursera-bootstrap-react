import $ from 'jquery';
import modalHtml from './reserveModal.html';
/**
 * Adds a modal form to reserve a table.
 * @param {Object} container the DOM element into which to add the reserve button.
 */
export default function addReserveModal(container) {
  const modal = $(document.body).append(modalHtml);

  const btn = $(container).append(`
    <a role="button" class="btn btn-lg btn-block nav-link btn-warning flex-center">
      Reserve Table
    </a>`);

  btn.click(() => {
    modal.find('#reserveModal').modal('show');
  });
};
