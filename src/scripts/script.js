const init = () => {
  const elem = document.getElementById('genderinput');
  const output = document.getElementById('genderoutput');
  if (elem) {
    elem.addEventListener('keydown', (evt) => {
      if (evt.which === 13) { // enter
        fetch(`https://api.genderize.io/?name=${elem.value}`).then((response) => {
          return response.json();
        }).then((data) => {
          console.log(data);
          output.innerHTML = `Der Name ${data.name} ist zu ${Math.round(data.probability * 100)}%: <strong>${data.gender === 'male' ? '🧔🏻' : '👩🏻'}</strong>`
        })
      }
    })
  }
}


document.addEventListener("DOMContentLoaded", init);
