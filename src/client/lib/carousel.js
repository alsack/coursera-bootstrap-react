import $ from 'jquery';
import html from './carousel.html';

/**
 * Add a bootstrap carousel to the container provided
 * @param {Object} container the DOM element into which the
 * carousel will be placed
 */
export default function addCarousel(container) {
  $(container).append(html);
  const myCarousel = $(container).find('#mycarousel');

  myCarousel.carousel( {interval: 2000} );
  myCarousel.find('#carousel-pause').click(function() {
    myCarousel.carousel('pause');
  });
  myCarousel.find('#carousel-play').click(function() {
    myCarousel.carousel('cycle');
  });
}
