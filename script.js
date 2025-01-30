const summary = document.querySelector('.summary');
const media = document.querySelector('.promedio');

fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
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


    // creando y renderizando los items de summary
    data.forEach(dato => {
      // Creando las nuevas etiquetas o elementos
      const div = document.createElement('div');
      const figure = document.createElement('figure');
      const img = document.createElement('img');
      const figcaption = document.createElement('figcaption');
      const p = document.createElement('p');
      const strong = document.createElement('strong');

      // Agregando los datos correspondientes a cada uno
      img.setAttribute('src', `${dato.icon}`)
      figcaption.textContent = `${dato.category}`
      strong.textContent = `${dato.score}`

      // Agregando img y figcaption al figure
      figure.appendChild(img);
      figure.appendChild(figcaption);

      // Agregando el strong y el texto al p
      p.appendChild(strong)
      p.appendChild(document.createTextNode(' / 100'))

      // Agregando el figure y el p al div
      div.appendChild(figure);
      div.appendChild(p);

      // Agregando clases al div
      div.classList.add('summary__score')

      // Agregando el div de los score a su contenedor padre en la seccion de summary
      summary.appendChild(div);

    });


  })
  .catch(error => {
      console.error('Error:', error);
  });
 

