const images = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');

images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if(e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});


/*PAGE GALERIE*/
const projets = {
    "ici": {
        titre: "Paysages d'ici",
        images: ["DSCF1230.webp", "DSCF1247.webp", "DSCF1406.webp"]
    },
    "ailleurs": {
        titre: "Paysages d'ailleurs",
        images: ["DSCF1583.webp", "DSCF1585.webp", "DSCF1595.webp"]
    },
    "cite": {
        titre: "Au cœur de la cité",
        images: ["DSCF1464.webp", "DSCF4156.webp", "DSCF6426.webp"]
    },
    "ocean": {
        titre: "Au bord de l'océan",
        images: ["DSCF6670.webp", "DSCF6729.webp", "DSCF7320_1.webp"]
    }
};

const params = new URLSearchParams(window.location.search);
const nomProjet = params.get('projet');

const container = document.getElementById('gallery-container');
const titreDynamique = document.getElementById('galerie-titre');

if (nomProjet && projets[nomProjet]) {
    const data = projets[nomProjet];
    
    // Mise à jour du titre
    if (titreDynamique) {
        titreDynamique.innerText = data.titre;
    }

    // Remplissage des images
    if (container) {
        container.innerHTML = ""; // On vide le "Chargement..."
        data.images.forEach(imgUrl => {
            const img = document.createElement('img');
            img.src = imgUrl;
            img.classList.add('gallery-item');
            img.alt = data.titre;
            container.appendChild(img);
        });
    }
}

// On utilise document.addEventListener pour que ça marche même sur les images créées par le JS
document.addEventListener('click', (e) => {
    // CLIC SUR UNE IMAGE
    if (e.target.classList.contains('gallery-item')) {
        lightbox.style.display = 'flex';
        lightboxImg.src = e.target.src;
    }
    
    // CLIC POUR FERMER (sur la croix ou à côté de l'image)
    if (e.target.classList.contains('close-btn') || e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
