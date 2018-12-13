const root = document.documentElement 
const themeBtns = document.querySelectorAll('.theme > button')

themeBtns.forEach((btn) => {
  btn.addEventListener('click', handleThemeUpdate)
  console.log("horay!");
})

function handleThemeUpdate(e) {
  switch(e.target.value) {
    case 'dark': 
      root.style.setProperty('--bg', 'black')
      root.style.setProperty('--bg-text', 'white')
      break
    case 'calm': 
       root.style.setProperty('--bg', '#193549')
       root.style.setProperty('--bg-text', '#FFFFFF')
      break
    case 'light':
      root.style.setProperty('--bg', '#CCCC00')
      root.style.setProperty('--bg-text', '#990099')
      break
  }
}




const inputs = document.querySelectorAll('.controls input');
function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));