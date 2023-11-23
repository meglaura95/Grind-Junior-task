const selectors = {
  peopleButton: document.querySelector('[search-button]'),
}

const setClickEvents = () => {
  selectors.peopleButton.addEventListener('click', () => {
    console.log('Button clicked!')
    
    // Think fetch...
  })
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello!')

  setClickEvents()
})