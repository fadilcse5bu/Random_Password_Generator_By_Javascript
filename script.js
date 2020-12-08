const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}

document.getElementById('submit-btn').addEventListener('click', e => {
  e.preventDefault()
  const len = characterAmountNumber.value
  var str = ''
  const includeNumbers = document.getElementById('includeNumbers')
  const includeUppercase = document.getElementById('includeUppercase')
  const includeSymbols = document.getElementById('includeSymbols')

  for(let i = 0; i < len; i++) {
    while(1) {
      console.log("YES")
      const ran = Math.floor(Math.random() * 94) + 33
      // console.log(ran)
      if(ran >= 97 && ran <= 122) {
        str += String.fromCharCode(ran)
        break
      } 
      else if(ran >= 65 && ran <= 90) {
        if(includeUppercase.checked) {
          str += String.fromCharCode(ran)
          break
        }
      } 
      else if(ran >= 48 && ran <= 57) {
        if(includeNumbers.checked) {
          str += String.fromCharCode(ran)
          break
        }
      } 
      else {
        if(includeSymbols.checked) {
          str += String.fromCharCode(ran)
          break
        }
      }
    }
  }

  document.getElementById('passwordDisplay').innerText = str
})
