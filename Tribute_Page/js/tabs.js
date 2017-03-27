$(document).ready(function() {
  $('.tab-links a').click(function(event) {

    event.preventDefault();

    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    var tabRef = $(this).attr('href');

    $('.tab').not(tabRef).css('display', 'none');
    $(tabRef).fadeIn();
  });
});
