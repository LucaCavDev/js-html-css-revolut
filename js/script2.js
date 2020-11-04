$(document).ready(function () {


  $('li.tariffazione').click(function () {
    $('.first').toggleClass('dbloc');
    $('.second').removeClass('dbloc');
    $('.third').removeClass('dbloc');
    $('.fourth').removeClass('dbloc');
    $('.fifth').removeClass('dbloc');
  });

  $('li.conti').click(function () {
    $('.second').toggleClass('dbloc');
    $('.first').removeClass('dbloc');
    $('.third').removeClass('dbloc');
    $('.fourth').removeClass('dbloc');
    $('.fifth').removeClass('dbloc');

  });

  $('li.prodotti').click(function () {
    $('.third').toggleClass('dbloc');
    $('.first').removeClass('dbloc');
    $('.second').removeClass('dbloc');
    $('.fourth').removeClass('dbloc');
    $('.fifth').removeClass('dbloc');

  });

  $('li.azienda').click(function () {
    $('.fourth').toggleClass('dbloc');
    $('.first').removeClass('dbloc');
    $('.second').removeClass('dbloc');
    $('.third').removeClass('dbloc');
    $('.fifth').removeClass('dbloc');

  });

  $('li.aiuto').click(function () {
    $('.fifth').toggleClass('dbloc');
    $('.first').removeClass('dbloc');
    $('.second').removeClass('dbloc');
    $('.third').removeClass('dbloc');
    $('.fourth').removeClass('dbloc');

  });

});
