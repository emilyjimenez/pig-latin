
function pigLatin(sentence) {
  var arrayInitial = sentence.split(" ");
  var arrayFinal = [];
  var sentence;
  arrayInitial.forEach(function(string) {
    // Alert: dont use numbers
    if (string.match(/[0-9]/g)) {
      alert("Try again! Please write a sentence without numbers.")
      // if vowel + "way"
    } else if (string[0].match(/[aeiou]/gi)) {
      sentence = string + "way";
      arrayFinal.push(sentence);
      // if consonent + "ay plus consonentant"
    } else {
      for (var i = 0; i < string.length; i++) {
        console.log(i);
        if (!string[0].match(/[aeiou]/gi)) {
         string = string.slice(1, string.length) + string.charAt(0);
         sentence = string + "ay";
         console.log(string);
         console.log(sentence);




      }
    }
    arrayFinal.push(sentence);
  }
  });

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
