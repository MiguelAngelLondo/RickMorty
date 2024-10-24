const options = { method: 'GET' };

fetch('https://rickandmortyapi.com/api/character', options)
  .then(response => response.json())
  .then(data => {
    const characters = data.results;
    const container = document.querySelector('main');

    
    function makeCard(character) {
      const card = document.createElement('div');
      card.classList.add('card');

   
      const imgCard = document.createElement('img');
      imgCard.src = character.image;
      imgCard.alt = character.name;

    
      const nameCard = document.createElement('h2');
      nameCard.textContent = character.name;

      
      const statusCard = document.createElement('h3');
      statusCard.textContent = `Status: ${character.status}`;

     
      const speciesCard = document.createElement('h4');
      speciesCard.textContent = `Species: ${character.species}`;

   
      card.appendChild(imgCard);
      card.appendChild(nameCard);
      card.appendChild(statusCard);
      card.appendChild(speciesCard);
      container.appendChild(card);
    }
    function makeCards() {
      characters.forEach(character => {
        makeCard(character);
      });
    }

    makeCards();
  })

  .catch(err => console.error(err));
