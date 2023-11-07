// const input_text = document.getElementById('textinarea');


// input_text.addEventListener('keyup', (event) => {
//     // let total_chars = document.getElementById('total-chars');
//     // let rem_chars = document.getElementById('rem-chars');
//     console.log("triggered");
//     console.log(event.target.value);
// });

document.addEventListener("DOMContentLoaded", function () {
    const input_text = document.getElementById("textinarea");
  
    input_text.addEventListener("input", function (event) {
      const total_chars = document.getElementById("total-chars");
      const rem_chars = document.getElementById("rem-chars");
      const text = event.target.value;
      const textLength = text.length;
      const maxChars = 50; // Change this to your desired character limit
  
      total_chars.textContent = textLength;
      rem_chars.textContent = maxChars - textLength;
    });
  });