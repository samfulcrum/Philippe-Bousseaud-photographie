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
        description: ``,
        images: ["DSCF1247.webp", "DSCF1247.webp", "DSCF1247.webp"]
    },
    "ailleurs": {
        titre: "Paysages d'ailleurs",
        description: ``,
        images: ["DSCF1247.webp", "DSCF1247.webp", "DSCF1247.webp"]
    },
    "cite": {
        titre: "Au cœur de la cité",
        description: ``,
        images: ["DSCF1247.webp", "DSCF1247.webp", "DSCF1247.webp"]
    },
    "ocean": {
        titre: "Au bord de l'océan",
        description: ``,
        images: ["DSCF1247.webp", "DSCF1247.webp", "DSCF1247.webp"]
    }
};

/* --- AFFICHAGE DYNAMIQUE --- */
const params = new URLSearchParams(window.location.search);
const nomProjet = params.get('projet');

const container = document.getElementById('gallery-container');
const titreDynamique = document.getElementById('galerie-titre');
const descDynamique = document.getElementById('galerie-description'); 


if (nomProjet && projets[nomProjet]) {
    const data = projets[nomProjet];
    
    // On écrit le titre (ex: "Paysages d'ici")
    if (titreDynamique) {
        titreDynamique.innerText = data.titre;
    }

    if (descDynamique) {
        descDynamique.innerText = data.description || "";
    }

    // On remplit les images
    if (container) {
        container.innerHTML = ""; 
        data.images.forEach(imgUrl => {
            const img = document.createElement('img');
            img.src = imgUrl;
            img.classList.add('gallery-item');
            img.alt = data.titre;
            container.appendChild(img);
        });
    }
}

// Marches pour toutes les images avec la classe gallery-item
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('gallery-item')) {
        lightbox.style.display = 'flex';
        lightboxImg.src = e.target.src;
    }
});

// Fermeture
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('close-btn') || (e.target === lightbox)) {
        lightbox.style.display = 'none';
    }
});
