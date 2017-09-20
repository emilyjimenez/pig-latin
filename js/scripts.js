function pigLatin(sentence) {
  var arrayInitial = sentence.split(" ");
  var arrayFinal = [];
  arrayInitial.forEach(function(string) {
    if (string.match(/[0-9]/g)) {
      alert("Try again! Please write a sentence without numbers.")
    } else if (string[0].match(/[aeiou]/gi)) {
      sentence = string + "way";
      arrayFinal.push(sentence);
    } else if (!string[0].match(/[aeiou]/gi)) {
      arrayFinal.push(sentence);
    }
  })
  return arrayFinal;
  }

// jQuery UI logic is below
$(document).ready(function() {
  $("form#pigform").submit(function(event) {
      event.preventDefault();
      var sentence = $("#inputForm").val();

      $("#result").text(pigLatin(sentence));

  });
});
