/**
 * Maison BK
 */
$(function() {
  /**
   * Top navigation
   */
  $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      $('.navbar').addClass('navbar-shrink');
    }
    else {
      $('.navbar').removeClass('navbar-shrink');
    }
  });

  /**
   * Card height
   */
  $('.card .thumbnail').matchHeight();

  /**
   * Eased window scrolling
   */
  $('a.page-scroll').bind('click', function(event) {
    $.scrollTo($(this).attr("href"), 500, {
      offset: -70
    });
    event.preventDefault();
  });

  /**
   * Display the card previews
   */
  $('.card a.preview').click(function(event) {
    var card = $(this).closest('.card');
    bootbox.dialog({
      message: '<div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-interval="3000">\
        <div class="carousel-inner" role="listbox">' + $('.carousel-inner', card).html() + '\
        </div>\
        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">\
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>\
        <span class="sr-only">Previous</span>\
        </a>\
        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">\
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>\
        <span class="sr-only">Next</span>\
        </a>\
        </div>',
      title: $('h3', card).text(),
      buttons: {
        success: {
          label: "Okay",
          className: "btn-success"
        }
      }
    });
    setTimeout(function() {
      $('#carousel-example-generic').carousel();
    }, 1000);
    event.preventDefault();
  });

  /**
   * Use Minicart.
   */
  if ($('form.paypal').length > 0 && paypal) {
    paypal.minicart.render();

    // Update the business address.
    var val = 'iefkkfi';
    $('form.paypal input.business').attr('value', xorCrypt(val + 's~ibjbcnfG`jfnk)dhj', val.length));
  }
});
