document.addEventListener('DOMContentLoaded', () => {
    // Hämta elementen från DOM
    const modal = document.getElementById('artModal');
    const closeButton = document.querySelector('.close-button');
    const galleryItems = document.querySelectorAll('.art-piece');

    // Funktion för att öppna modalen med specifik konstinfo
    const openModal = (title, artist, imageSrc) => {
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-artist').textContent = artist;
        document.getElementById('modal-image').src = imageSrc;
        
        // Uppdatera alt-texten för tillgänglighet
        document.getElementById('modal-image').alt = `Detaljbild av konstverket: ${title} av ${artist}`;

        modal.style.display = 'block';
    };

    // Lägg till händelselyssnare på varje "Se detaljer"-knapp
    galleryItems.forEach(item => {
        const detailsButton = item.querySelector('.view-details');
        
        detailsButton.addEventListener('click', () => {
            // Hämta datan från HTML-elementets data-attribut
            const title = item.getAttribute('data-title');
            const artist = item.getAttribute('data-artist');
            const imageSrc = item.querySelector('img').src; 
            
            // Om bild-src i HTML är relativ, kan du behöva justera hur du får den:
            // I detta exempel använder vi `placeholder-art-1.jpg` osv.
            // För en riktig sida, se till att sökvägen till bilden blir rätt.
            
            openModal(title, artist, imageSrc);
        });
    });

    // Stäng modalen när användaren klickar på X
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Stäng modalen när användaren klickar utanför den
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});