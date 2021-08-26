var form = document.getElementById("gen");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
  }

document.getElementById("submit-button").addEventListener("click", generate);

function generate() {
    var plen = document.getElementById("pw-lenght").value
    var rchar = "" // Math.floor(Math.random() * 127) + 41
    var generated = ""
    var k = 0
    if (plen < 2049) {
        for (let i = 0; i < plen; i++) {
            k = Math.random() * (127 - 41) + 41
            rchar = String.fromCharCode(k)
            generated += String(rchar)
          }
          document.getElementById("password").innerHTML = generated
          console.log(generated)
    }

  }