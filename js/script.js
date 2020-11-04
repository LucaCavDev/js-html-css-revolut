/*
Descrizione:
creare l’header come da screeshot allegato.

Ogni voce di menù avrà un suo dropdown menù che viene fuori al click.


Dettagli

1. prendiamo come ref lo screeshot;

2. il dropdown esce fuori al click non all’hover (sennò  a qualcuno giustamente glie verrebbe da fare in css);

3.basta che fate la parte di header/menu (appunto quello che c’è in screeshot);

4.tenete conto che su questo avete più elementi uguali da comandare e ognuno chiaramente rende visibile solo il proprio dropdown;

5.consiglio: degli eventuali casi limte/controlli (es. voglio che sia aperto solo un dropdown alla volta, preoccupatevi alla fine).*/
$(document).ready(function () {


  $('li.tariffazione').click(function () {
    $('.first').toggleClass('dbloc');
  });
  $('li.tariffazione').on("click", function(){
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
