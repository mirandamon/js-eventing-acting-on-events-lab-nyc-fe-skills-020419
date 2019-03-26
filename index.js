// 1 - find the element
const dodger = document.getElementById('dodger')
console.log(dodger)

function onKeyDown(event) {
  console.log(event)
  if (event.keyCode === 37) {
    // how do we actually move this left  
    console.log(dodger.style.left)
  }
}

// 2 - Add the event listener
dodger.addEventListener('keydown', onKeyDown)