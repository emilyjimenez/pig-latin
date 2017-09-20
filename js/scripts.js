

// jQuery UI logic is below
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
      event.preventDefault();
      var sentence = $("#inputForm").val();
      var result = pigLatin(sentence);

      $(".translation").text(result);

);
