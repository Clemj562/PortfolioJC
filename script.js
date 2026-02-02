const bloc2 = document.querySelector('.bloc2');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const viewportH = window.innerHeight;
    const progress = Math.min(scrollY / viewportH, 1);
    bloc2.style.transform = `translateY(${100 - progress * 100}%)`;
});

const projets = document.querySelectorAll('.projet');
const popup = document.querySelector('.popup');
const popupquit = document.querySelector('.popupquit');
const touslesbutton = document.querySelector('.touslesbutton');
const messageAucunProjet = document.querySelector('.aucun-projet');

// ===== SYSTÈME DE FILTRAGE =====
const filtres = document.querySelectorAll('.filtre');

filtres.forEach(filtre => {
    filtre.addEventListener('click', function () {
        filtres.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        const filtreValue = this.getAttribute('data-filtre');
        visible = 6;
        let count = 0;

        projets.forEach(projet => {
            const categorieTexte = projet.querySelector('.categorie').textContent.toLowerCase();

            if (filtreValue === 'all') {
                if (count < visible) {
                    projet.style.display = 'block';
                } else {
                    projet.style.display = 'none';
                }
                count++;
            } else if (categorieTexte.includes(filtreValue)) {
                if (count < visible) {
                    projet.style.display = 'block';
                } else {
                    projet.style.display = 'none';
                }
                count++;
            } else {
                projet.style.display = 'none';
            }
        });

        // Gérer l'affichage du message "Aucun projet"
        const projetsVisibles = Array.from(projets).filter(p => {
            if (filtreValue === 'all') return true;
            const cat = p.querySelector('.categorie').textContent.toLowerCase();
            return cat.includes(filtreValue);
        });

        if (projetsVisibles.length === 0) {
            messageAucunProjet.style.display = 'block';
            btn.style.display = 'none';
        } else {
            messageAucunProjet.style.display = 'none';
            if (projetsVisibles.length <= visible) {
                btn.style.display = 'none';
            } else {
                btn.style.display = 'block';
            }
        }
    });
});
// ===== FIN SYSTÈME DE FILTRAGE =====

projets.forEach(projet => {
    projet.addEventListener('click', () => {
        let titreValue = "";
        let imageUrl = "";
        let textValue = "";
        let textBValue = "";
        let outilsValue = "";
        let savoirêtreValue = "";
        let categorieValue = "";
        let categorieColor = "";

        let titre = document.getElementById("popup-title");
        let image = document.querySelector(".popup-content img");
        let text = document.getElementById("popup-texte");
        let textB = document.getElementById("popup-texteB");
        let outils = document.getElementById("popup-outils");
        let savoirêtre = document.getElementById("popup-savoirêtre");
        let categorie = document.getElementById("categorie-popup");

        popup.classList.remove('popup-hide');
        popup.classList.add('popup-show');

        switch (projet.id) {
            case "1":
                titreValue = "À L'WEST FEST";
                imageUrl = "./contents/imgs/alwestfest.jpg";
                textValue = " Dans le cadre d'un projet au sein de ma formation, j'ai dû réaliser une communication visuelle, sous la forme d'une affiche. afin d'annoncer l'organisation de la seconde édition du festival 'À l'West Fest', organisé par l'IUT afin de promouvoir les travaux des étudiants MMI de Lannion.";
                textBValue = "J'ai d'abord fait une sélection d'affiches existantes puis, avec mon équipe, nous avons mis nos idées en commun et réalisé notre affiche selon une direction artistique choisie.";
                outilsValue = "?";
                savoirêtreValue = "?";
                categorieValue = "GRAPHISME";
                categorieColor = "#a8c686";
                break;
            case "2":
                titreValue = "FOODBOX";
                imageUrl = "./contents/imgs/foodbox.jpg";
                textValue = " Dans le cadre d'un projet au sein de ma formation, j'ai dû réaliser une communication visuelle, sous la forme d'une affiche.  En effet, nous devions présenter un projet, une solution, en lien avec l'ODD 'Faim Zéro'. Par conséquent, nous avons opté pour une boîte alimentaire, que j'ai donc représenté ici.";
                textBValue = "Avec mon équipe de projet, nous avons dans un premier temps mis nos idées en commun puis j'ai réalisé un brouillon pour voir plus facilement le rendu, avant de commencer la version finale sur Affinity.";
                outilsValue = "?";
                savoirêtreValue = "?";
                categorieValue = "GRAPHISME";
                categorieColor = "#a8c686";
                break;
            case "3":
                titreValue = "ICHIRAKU'S RAMEN";
                imageUrl = "./contents/imgs/ichiraku.jpg";
                textValue = " Dans le cadre d'un projet personnel, j'ai réalisé une affiche inspirée de l'univers de Naruto, dans lequel un plat possède une place importante: Les Ramen. C'est pour cela que j'ai décidé de les représenter au centre de mon affiche, où j'ai souhaité montrer mon style graphique.";
                textBValue = "J'ai d'abord fait des recherches sur l'application Pinterest afin de m'inspirer. Par la suite j'ai réalisé le brouillon de l'affiche pour visualiser le rendu, avant de commencer la version finale sur Affinity Designer";
                outilsValue = "?";
                savoirêtreValue = "?";
                categorieValue = "GRAPHISME";
                categorieColor = "#a8c686";
                break;
            case "4":
                titreValue = "POKEMANIA";
                imageUrl = "./contents/imgs/alwestfest.jpg";
                textValue = "Dans le cadre d'un projet au sein de ma formation, j'ai dû réaliser un site web basé sur l'univers de Pokémon. En effet, nous devions permettre à l'utilisateur de collectionner ces derniers. J'ai donc réalisé avant tout le design du site, tout en lui donnant un nom : 'Pokémania'.";
                textBValue = "J'ai d'abord réalisé une planche univers afin de déterminer le visuel du site puis en me basant sur mon wireframe et mon mockup, j'ai commencé à réaliser ce dernier sur VsCode.";
                outilsValue = "?";
                savoirêtreValue = "?";
                categorieValue = "UI-UX";
                categorieColor = "#d9ebf9";
                break;
            case "5":
            case "6":
                titreValue = "À venir !";
                imageUrl = "./contents/imgs/ichiraku.jpg";
                textValue = "?";
                textBValue = "?";
                outilsValue = "?";
                savoirêtreValue = "?";
                categorieValue = "";
                categorieColor = "#999999";
                break;
            case "7":
                titreValue = "IA ET ENVIRONNEMENT";
                imageUrl = "./contents/imgs/IAETENVIR.jpg";
                textValue = "Création d'une infographie pour la Fête de la Science afin de sensibiliser aux dommages environnementaux causés par l'intelligence artificielle.";
                textBValue = "?";
                outilsValue = "?";
                savoirêtreValue = "?";
                categorieValue = "GRAPHISME";
                categorieColor = "#a8c686";
                break;
            case "8":
                titreValue = "ESSAI";
                imageUrl = "./contents/imgs/IAETENVIR.jpg";
                textValue = "Création d'une infographie pour la Fête de la Science afin de sensibiliser aux dommages environnementaux causés par l'intelligence artificielle.";
                textBValue = "?";
                outilsValue = "?";
                savoirêtreValue = "?";
                categorieValue = "GRAPHISME";
                categorieColor = "#9886c6ff";
                break;
            default:
                titreValue = "PROJET INCONNU";
                imageUrl = "./contents/imgs/ichiraku.jpg";
                textValue = "Désolé, les informations concernant ce projet sont indisponibles.";
                textBValue = "";
                outilsValue = "";
                savoirêtreValue = "";
                categorieValue = "";
                categorieColor = "#999999";
                break;
        }

        const competencesContainer = document.querySelector(".competences");
        competencesContainer.innerHTML = "";

        const competences = competencesParProjet[projet.id] || [];

        competences.forEach((comp, index) => {
            const div = document.createElement("div");
            div.className = `competence ${comp.id} ${index === 2 ? "active" : ""}`;

            div.innerHTML = `
    <div class="icon">
      <i class="fa-solid ${comp.icon}"></i>
    </div>
    <span>${comp.label}</span>
  `;

            competencesContainer.appendChild(div);
        });

        const motsClesContainer = document.querySelector(".mots-cles");
        motsClesContainer.innerHTML = "";

        const motsCles = motsClesParProjet[projet.id] || [];

        motsCles.forEach(mot => {
            const span = document.createElement("span");
            span.className = "mot-cle";
            span.innerText = mot;
            motsClesContainer.appendChild(span);
        });


        // Mise à jour de tous les éléments TEXTE
        if (titre) titre.innerText = titreValue;
        if (text) text.innerText = textValue;
        if (textB) textB.innerText = textBValue;
        if (outils) outils.innerText = outilsValue;
        if (savoirêtre) savoirêtre.innerText = savoirêtreValue;
        if (image) image.setAttribute("src", imageUrl);

        // Mise à jour de la CATÉGORIE avec styles
        // Mise à jour de la CATÉGORIE avec styles
        if (categorie) {
            categorie.innerText = categorieValue;
            categorie.style.backgroundColor = categorieColor;
            categorie.style.fontFamily = "Antonio, sans-serif";
            categorie.style.fontSize = "1.2rem";
            categorie.style.width = "fit-content";
            categorie.style.marginTop = "0";
            categorie.style.padding = "5px 15px";
            categorie.style.borderRadius = "20px";

            // Couleur du texte basée sur categorieColor
            switch (categorieColor) {
                case "#a8c686": // GRAPHISME
                    categorie.style.color = "#6b8c4a";
                    break;
                case "#f4c28b": // WEB
                    categorie.style.color = "#c68a3d";
                    break;
                case "#f6f1a2": // 3D
                    categorie.style.color = "#b8a938";
                    break;
                case "#b7d4f1": // UI-UX
                    categorie.style.color = "#5a8fc4";
                    break;
                default:
                    categorie.style.color = "#5a8fc4";
                    break;
            }
        }

        // Mise à jour des couleurs des compétences et mots-clés
        const root = document.documentElement;

        switch (categorieValue) {
            case "GRAPHISME":
                root.style.setProperty('--competence-color', '#6b8c4a');
                root.style.setProperty('--competence-bg', '#e8f3de');
                root.style.setProperty('--competence-icon-bg', '#a8c686');
                break;
            case "WEB":
                root.style.setProperty('--competence-color', '#c68a3d');
                root.style.setProperty('--competence-bg', '#fef5ea');
                root.style.setProperty('--competence-icon-bg', '#f9e5cc');
                break;
            case "3D":
                root.style.setProperty('--competence-color', '#b8a938 ');
                root.style.setProperty('--competence-bg', '#fefdf0');
                root.style.setProperty('--competence-icon-bg', '#faf7d9');
                break;
            case "UI-UX":
                root.style.setProperty('--competence-color', '#5a8fc4');
                root.style.setProperty('--competence-bg', '#eef6fc');
                root.style.setProperty('--competence-icon-bg', '#d9ebf9');
                break;
            default:
                root.style.setProperty('--competence-color', '#c45a5aff');
                root.style.setProperty('--competence-bg', '#eef6fc');
                root.style.setProperty('--competence-icon-bg', '#f9d9dfff');
                break;
        }
    });
});

const competencesParProjet = {
    1: [
        { id: "affinity", label: "Affinity D.", icon: "fa-flask" },
        { id: "creativite", label: "Créativité", icon: "fa-lightbulb" },
        { id: "communication", label: "Communication", icon: "fa-comments" }
    ],
    2: [
        { id: "figma", label: "Figma", icon: "fa-pen-ruler" },
        { id: "ux", label: "UX Design", icon: "fa-user" }
    ],
    3: [
        { id: "figma", label: "Figma", icon: "fa-pen-ruler" },
        { id: "ux", label: "UX Design", icon: "fa-user" }
    ],
    4: [
        { id: "figma", label: "Figma", icon: "fa-pen-ruler" },
        { id: "ux", label: "UX Design", icon: "fa-user" }
    ],
    5: [
        { id: "figma", label: "Figma", icon: "fa-pen-ruler" },
        { id: "ux", label: "UX Design", icon: "fa-user" }
    ],
};

const motsClesParProjet = {
    1: ["Affiche", "Festival", "Graphisme", "Communication"],
    2: ["UX", "UI", "Prototype", "Web"],
    3: ["Illustration", "Pop culture", "Affiche"]
};

function fermerPopup() {
    popup.classList.remove('popup-show');
    popup.classList.add('popup-hide');
}

popupquit.addEventListener('click', fermerPopup);

popup.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup') || e.target.classList.contains('popup-base')) {
        fermerPopup();
    }
});

const popupContent = document.querySelector('.popup-content');
if (popupContent) {
    popupContent.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

function selectCategory(button) {
    document.querySelectorAll('.touslesbutton button').forEach(btn => {
        btn.classList.remove('active');
    });

    button.classList.add('active');
}

const sectionprojets = document.querySelectorAll("#section-projets > div");
const btn = document.querySelector(".confirm");
let visible = 6;

// Affichage initial
sectionprojets.forEach((p, i) => {
    if (i >= visible) p.style.display = "none";
});

// S'il y a 6 projets ou moins → pas de bouton
if (sectionprojets.length <= visible) {
    btn.style.display = "none";
}

btn.addEventListener("click", () => {
    const filtreActif = document.querySelector('.filtre.active').getAttribute('data-filtre');

    const projetsCorrespondants = Array.from(projets).filter(p => {
        if (filtreActif === 'all') return true;
        const cat = p.querySelector('.categorie').textContent.toLowerCase();
        return cat.includes(filtreActif);
    });

    let count = 0;
    projets.forEach(projet => {
        const cat = projet.querySelector('.categorie').textContent.toLowerCase();
        const correspond = filtreActif === 'all' || cat.includes(filtreActif);

        if (correspond && projet.style.display === 'none' && count < 6) {
            projet.style.display = 'block';
            count++;
        }
    });

    visible += 6;

    const projetsCaches = projetsCorrespondants.filter(p => p.style.display === 'none');
    if (projetsCaches.length === 0) {
        btn.style.display = "none";
    }
});


const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});




/* =====================================
   POPUP COMPÉTENCES – BOOSTERS
===================================== */

// Boosters 3D
const boosterLeft = document.getElementById('booster-left');
const boosterRight = document.getElementById('booster-right');

// Popups
const pskills = document.querySelector('.pskills');
const pskills2 = document.querySelector('.pskills2');

// Boutons fermeture
const pskillsquit = document.querySelector('.pskillsquit');
const pskillsquit2 = document.querySelector('.pskillsquit2');

/* ---------- OUVERTURE BOOSTER GAUCHE ---------- */
if (boosterLeft && pskills) {
    boosterLeft.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        pskills.style.display = 'flex';
        pskills.classList.remove('pskills-hide');
        pskills.classList.add('pskills-show');
        document.body.style.overflow = 'hidden';
    });
}

/* ---------- OUVERTURE BOOSTER DROIT ---------- */
if (boosterRight && pskills2) {
    boosterRight.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        pskills2.style.display = 'flex';
        pskills2.classList.remove('pskills-hide2');
        pskills2.classList.add('pskills-show2');
        document.body.style.overflow = 'hidden';
    });
}

/* ---------- FERMETURE BOUTON X GAUCHE ---------- */
if (pskillsquit && pskills) {
    pskillsquit.addEventListener('click', () => {
        pskills.classList.remove('pskills-show');
        pskills.classList.add('pskills-hide');
        setTimeout(() => {
            pskills.style.display = 'none';
            document.body.style.overflow = '';
        }, 300);
    });
}

/* ---------- FERMETURE BOUTON X DROIT ---------- */
if (pskillsquit2 && pskills2) {
    pskillsquit2.addEventListener('click', () => {
        pskills2.classList.remove('pskills-show2');
        pskills2.classList.add('pskills-hide2');
        setTimeout(() => {
            pskills2.style.display = 'none';
            document.body.style.overflow = '';
        }, 300);
    });
}

/* ---------- FERMETURE CLIC FOND GAUCHE ---------- */
if (pskills) {
    pskills.addEventListener('click', (e) => {
        if (e.target === pskills || e.target.classList.contains('pskills-base')) {
            pskills.classList.remove('pskills-show');
            pskills.classList.add('pskills-hide');
            setTimeout(() => {
                pskills.style.display = 'none';
                document.body.style.overflow = '';
            }, 300);
        }
    });

    const content = pskills.querySelector('.pskills-content');
    if (content) {
        content.addEventListener('click', (e) => e.stopPropagation());
    }
}

/* ---------- FERMETURE CLIC FOND DROIT ---------- */
if (pskills2) {
    pskills2.addEventListener('click', (e) => {
        if (e.target === pskills2 || e.target.classList.contains('pskills-base2')) {
            pskills2.classList.remove('pskills-show2');
            pskills2.classList.add('pskills-hide2');
            setTimeout(() => {
                pskills2.style.display = 'none';
                document.body.style.overflow = '';
            }, 300);
        }
    });

    const content2 = pskills2.querySelector('.pskills-content2');
    if (content2) {
        content2.addEventListener('click', (e) => e.stopPropagation());
    }
}

// ===== FIN SYSTÈME DE POPUP COMPÉTENCES =====