import $ from 'jquery';
import modalHtml from './reserveModal.html';
/**
 * Adds a modal form to reserve a table.
 * @param {Object} container the DOM element into which to add the
 * reserve button.
 */
export default function addReserveModal(container) {
  $(document.body).append(modalHtml);

  $(container).append(`
    <a role="button" class="btn btn-lg btn-block nav-link btn-warning flex-center"
    data-toggle="modal" data-target="#reserveModal">Reserve Table</a>`);
};
