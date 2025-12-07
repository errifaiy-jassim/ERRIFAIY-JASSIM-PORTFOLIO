 // Menu mobile
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Effet de frappe (typing)
        const typingText = document.getElementById('typing-text');
        const texts = [
            "HTML/CSS/JS",
            "Machine Learning",
            "Deep Learning",
            "LLMs",
            "SQL",
            "Oracle"
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function type() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typingText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }

            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                typingSpeed = 1000; // pause at end before deleting
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingSpeed = 500; // small pause before typing next
            }

            setTimeout(type, typingSpeed);


        }

        // démarrer l'effet de frappe
        type();



        // Système de filtrage des projets
        document.addEventListener('DOMContentLoaded', function() {
            // 1. Sélectionner tous les boutons de filtre
            const filterBtns = document.querySelectorAll('.filter-btn');

            // 2. Sélectionner toutes les cartes de projet
            const projectCards = document.querySelectorAll('.project-card');

            // 3. Fonction pour filtrer les projets
            function filterProjects(category) {
                // Parcourir chaque carte de projet
                projectCards.forEach(card => {
                    // Récupérer la catégorie de la carte
                    const cardCat = card.getAttribute('data-category');

                    // Si on veut "Tous" OU si la carte correspond à la catégorie choisie
                    if (category === 'all' || cardCat === category) {
                        card.style.display = 'flex'; // Afficher la carte
                    } else {
                        card.style.display = 'none'; // Cacher la carte
                    }
                });
            }

            // 4. Ajouter un événement "click" à chaque bouton
            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    // 4.1 Retirer la classe "active" de tous les boutons
                    filterBtns.forEach(b => b.classList.remove('active'));

                    // 4.2 Ajouter la classe "active" au bouton cliqué
                    this.classList.add('active');

                    // 4.3 Récupérer la catégorie à filtrer
                    const filterValue = this.getAttribute('data-filter');

                    // 4.4 Appliquer le filtre
                    filterProjects(filterValue);
                });
            });

            // 5. Initialisation : afficher tous les projets au chargement
            filterProjects('all');
        });

    
        

        