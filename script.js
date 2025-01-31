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
      img.setAttribute('src', `${dato.icon}`);
      figcaption.textContent = `${dato.category}`;
      strong.textContent = `${dato.score}`;
      
      // Agregando clases
      div.classList.add('summary__score');
      strong.classList.add('strong--bold');

      /*
      Para agregar las clases de color de letra y fondo, hay que conparar cada figcaption 
      para agregar sus clases correspondientes 
      */
      switch (figcaption.textContent) {
        case 'Reaction':
          figcaption.classList.add('font--red')
          div.classList.add('background--red')
          break;
        case 'Memory':
          figcaption.classList.add('font--yellow')
          div.classList.add('background--yellow')
          break;
        case 'Verbal':
          figcaption.classList.add('font--Green')
          div.classList.add('background--Green')
          break;
        case 'Visual':
          figcaption.classList.add('font--blue')
          div.classList.add('background--blue')
          break;
      
        default:
          break;
      }
      // Agregando img y figcaption al figure
      figure.appendChild(img);
      figure.appendChild(figcaption);

      // Agregando el strong y el texto al p
      p.appendChild(strong)
      p.appendChild(document.createTextNode(' / 100'))


      // Agregando el figure y el p al div
      div.appendChild(figure);
      div.appendChild(p);

      // Agregando el div de los score a su contenedor padre en la seccion de summary
      summary.appendChild(div);
      
    });


  })
  .catch(error => {
      console.error('Error:', error);
  });
 

