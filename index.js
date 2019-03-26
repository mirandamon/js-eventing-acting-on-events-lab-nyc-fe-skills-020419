// 1 - find the element
const dodger = document.getElementById('dodger')

function onKeyDown(event) {
  if (event.keyCode === 37) {
    // how do we actually move this left  
    dodger.style.left = currentPosition - 5 // (180px)
    
  }
}

// 2 - Add the event listener
document.addEventListener('keydown', onKeyDown)