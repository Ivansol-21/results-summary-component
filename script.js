const summary = document.querySelector('.summary');
const media = document.querySelector('.promedio');

fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // creando y renderizando los items de summary
    data.forEach(dato => {
      const div = document.createElement('div');

      div.innerHTML = `
      <img src="${dato.icon}" alt="icon-reaction" />
          <p>${dato.category}</p>
          <p>${dato.score} / 100</p>
      `
      summary.appendChild(div);
      
    });
    
    // Calculo de la media o promedio de los scores
    let promedio = Math.round(
      data.reduce((acc, valorActual) => {
        return (
          acc + valorActual.score
        )
      }, 0) / data.length
    );
    // Renderizando el promedio o la media(es lo mismo)
    media.textContent = promedio;

    console.log(promedio);

  })
  .catch(error => {
        console.error('Error:', error);
  });
 

