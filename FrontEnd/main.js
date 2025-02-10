async function fetchWorks() {
  const response = await fetch("http://localhost:5678/api/works"); // API backend/works swagger
  if (!response.ok) {
    console.error("Erreur lors de la récupération de l'API"); // Message d'erreur dans la console si la reponse n'est pas true
    return []; // Tableau vide pour ne pas bloquer le code
  }
  const works = await response.json(); // Passe la réponse en format JSON
  return works;
}

async function displayWorks() {
  const works = await fetchWorks(); // Appel la fonction pour récupérer les travaux et les stocke dans une variable

  const gallery = document.querySelector(".gallery"); // Sélectionne l'élément qui contient la galerie

  works.forEach((work) => {
    // Equivalent d'une boucle for et crée un élément HTML pour chaque work (work = works[i])

    const workElement = document.createElement("figure"); // Crée un élément figure

    // Ajoute l'image .imageUrl et une balise alt/legende avec .title
    workElement.innerHTML = `
          <img src="${work.imageUrl}" alt="${work.title}">
          <figcaption>${work.title}</figcaption>
        `;

    gallery.appendChild(workElement); // La figure créée devient l'enfant de gallery (inséré dans le HTMl)
  });
}

displayWorks(); // Appel la fonction qui ajoute les travaux dans le HTML
