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

  const controlBtn = myCarousel.find('#carouselButton');
  controlBtn.click(function() {
    const span = controlBtn.find('span');
    if (span.hasClass('fa-pause')) {
      span.removeClass('fa-pause');
      span.addClass('fa-play');
      myCarousel.carousel('pause');
    } else {
      span.removeClass('fa-play');
      span.addClass('fa-pause');
      myCarousel.carousel('cycle');
    }
  });
}
