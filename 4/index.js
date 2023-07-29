const input=document.querySelector('input')
const button=document.querySelector('button')

button.addEventListener('click', alrt)
function alrt(){setTimeout(()=>{alert('hi')}, input.value*1000)}