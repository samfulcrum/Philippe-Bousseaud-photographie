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
        images: ["17B6000.webp", "BPH1960.webp", "BPH4254.webp", "BPH5294.webp", "DSC0104.webp",
                "DSCF0.webp", "DSCF0024.webp", "DSCF0834.webp", "DSCF1099.webp", "DSCF2377.webp",
                "DSCF4299.webp", "DSCF4628.webp", "DSCF6549.webp", "DSCF6566.webp", "DSCF6664.webp",
                "DSCF6909.webp", "DSCF7028.webp", "DSCF7392.webp", "PBG6062.webp", "PBG6188.webp"]
    },
    "ailleurs": {
        titre: "Paysages d'ailleurs",
        images: ["BPA3585.webp", "BPA3619.webp", "BPF2914.webp", "BPF3772.webp", "BPF4016.webp", "BPF4498.webp",
                "BPF5291.webp", "BPF5658.webp", "BPF753.webp", "DSCF3587.webp", "BPF5706.webp", "BPF5863.webp",
                "000005.webp", "000011.webp", "D1000006.webp", "D1000007.webp", "BPGH6.webp", "BPGF5.webp",
                "BPFG4.webp", "000004.webp"]
    },
    "cite": {
        titre: "Au cœur de la cité",
        images: ["17A1718.webp", "17B5614.webp", "17B5688.webp", "17B8433.webp", "BPA1211.webp",
                "BPA1236.webp", "BPA1445.webp", "BPA1918.webp", "BPA3955.webp", "BPB3426.webp",
                "BPC6896.webp", "BPD3154.webp", "BPD4122.webp", "BPE0769.webp", "BPE4795.webp",
                "DSCF8288.webp", "DSCF8497.webp", "DSCF8547.webp", "DSCF8668.webp", "PBE4798.webp"]
    },
    "ocean": {
        titre: "Au bord de l'océan",
        images: ["BPA7220.webp", "BPB4893.webp", "BPD1829.webp", "BPE2723.webp", "BPF8436.webp",
                "BPF8514.webp", "BPF85257.webp", "BPF94258.webp", "BPG1753.webp", "BPG1768.webp",
                "BPG1801.webp", "BPG1862.webp", "BPG1874.webp", "BPG1988.webp", "BPG9433.webp", 
                "DSCF9336.webp", "DSCF9443.webp", "DSCF9467.webp", "DSCF9522.webp", "F1000075.webp"]
    }
};

/* --- AFFICHAGE DYNAMIQUE --- */
const params = new URLSearchParams(window.location.search);
const nomProjet = params.get('projet');

const container = document.getElementById('gallery-container');
const titreDynamique = document.getElementById('galerie-titre');


if (nomProjet && projets[nomProjet]) {
    const data = projets[nomProjet];
    
    // On écrit le titre (ex: "Paysages d'ici")
    if (titreDynamique) {
        titreDynamique.innerText = data.titre;
    }

    // On remplit les images
    if (container) {
        container.innerHTML = ""; 
        data.images.forEach(imgUrl => {
            const img = document.createElement('img');
            img.src = nomProjet + "/" + imgUrl;
            img.classList.add('gallery-item');
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
