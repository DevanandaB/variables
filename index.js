const inputs = document.querySelectorAll(".ctrls input");

function update() {
  const suffix = this.dataset.sizing || ''; //data-sizing 
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); //imp line

}

inputs.forEach(input => input.addEventListener('change', update));
inputs.forEach(input => input.addEventListener('input', update)); //used input coz mousemove didn't work



