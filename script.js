
        // 1. Inicializar Lightbox Fancybox
        Fancybox.bind("[data-fancybox]", {
            // Opciones personalizadas de lightbox si se desean
        });

        // 2. Lógica de Filtrado de fotos por Categoría
        const filterButtons = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remover clase activa de todos y dar al cliqueado
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // 3. Lógica Interactiva del Libro de Visitas (Frontend)
        const guestbookForm = document.getElementById('guestbookForm');
        const commentsContainer = document.getElementById('commentsContainer');

        guestbookForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('authorName').value;
            const messageInput = document.getElementById('authorMessage').value;

            // Crear tarjeta de comentario dinámicamente
            const commentCard = document.createElement('div');
            commentCard.className = 'comment-card';
            commentCard.innerHTML = `
                <div class="comment-header">
                    <span class="comment-author">${nameInput}</span>
                    <span class="comment-date">Hace un momento</span>
                </div>
                <p class="comment-text">${messageInput}</p>
            `;

            // Insertar al principio de la lista
            commentsContainer.prepend(commentCard);

            // Limpiar formulario
            guestbookForm.reset();
        });