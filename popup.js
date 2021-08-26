var form = document.getElementById("gen");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
  }

document.getElementById("submit-button").addEventListener("click", generate);

function generate() {
    var plen = document.getElementById("pw-lenght").value
    var rchar = ""
    var generated = ""
    var k = 0
    if (plen < 2049) {
        for (let i = 0; i < plen; i++) {
            k = Math.floor(Math.random() * (126 - 33) + 33)
            console.log(k)
            rchar = String.fromCharCode(k)
            if (k == 60 || k  == 62) {
                rchar = String.fromCharCode(Math.random() * (59 - 33) + 33)
            }
            generated += String(rchar)
          }
          document.getElementById("password").innerHTML = generated
          console.log(generated)
    }

  }