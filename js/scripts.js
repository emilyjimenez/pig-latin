function pigLatin(sentence) {
  var arrayInitial = sentence.split(" ");
  var arrayFinal = [];
  arrayInitial.forEach(function(string) {
    // Alert: dont use numbers
    if (string.match(/[0-9]/g)) {
      alert("Try again! Please write a sentence without numbers.")
      // if vowel + "way"
    } else if (string[0].match(/[aeiou]/gi)) {
      sentence = string + "way";
      arrayFinal.push(sentence);
      // if consonent + "ay plus consonentant"
    } else if (!string[0].match(/[aeiou]/gi)) {
      sentence = string.slice(1, string.length) + string.charAt(0) + "ay";
      arrayFinal.push(sentence);

    } else if (!string[0].match(/[aeiou]/gi) && (!string[0].match(/[aeiou]/gi))) {
        sentence = string.slice(2, string.length) + string.charAt(1) + "ay";
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
