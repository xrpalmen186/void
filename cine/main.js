document.addEventListener('DOMContentLoaded', function () {
    
    //MAPA DE GOOGLE MAPS
    const whereBtn = document.getElementById('where-link');
    const mapSection = document.getElementById('map-section');
    const mapContainer = document.getElementById('map-container');

    whereBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (mapContainer.querySelector('iframe')) {
            mapSection.scrollIntoView({ behavior: 'smooth' });
            return;
        }

        const address = encodeURIComponent('Av Montequinto, Sevilla, España');
        const iframe = document.createElement('iframe');
        iframe.width = '100%';
        iframe.height = '400';
        iframe.style.border = 0;
        iframe.loading = 'lazy';
        iframe.referrerPolicy = 'no-referrer-when-downgrade';
        iframe.src = `https://maps.google.com/maps?q=${address}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

        mapContainer.innerHTML = '';
        mapContainer.appendChild(iframe);
        mapSection.scrollIntoView({ behavior: 'smooth' });
        mapSection.setAttribute('aria-hidden', 'false');
    });


    //FORMULARIO DE CONTACTO
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            alert('Por favor completa todos los campos.');
            return;
        }

        alert('Mensaje enviado. ¡Gracias!');
        form.reset();
    });

    //POPUP DEL TRAILER
    const btnTrailer = document.getElementById("btn-trailer");
    const modal = document.getElementById("trailerModal");
    const closeBtn = document.getElementById("closeTrailer");
    const iframe = document.getElementById("trailerFrame");

    const youtubeURL = "https://www.youtube.com/embed/Izme__ZsURY";

    btnTrailer.addEventListener("click", (e) => {
        e.preventDefault();
        iframe.src = youtubeURL + "?autoplay=1";
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
        iframe.src = "";
        modal.style.display = "none";
    });

    //Cerrar al hacer clic fuera del video
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
        iframe.src = "";
        modal.style.display = "none";
        }
    });
});
