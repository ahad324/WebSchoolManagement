document.addEventListener("DOMContentLoaded", function () {
    let glasses = document.querySelectorAll('.glass');

    function handleGlassClick(event) {
        event.target.closest('.glass').classList.toggle('active');
    }

    glasses.forEach(glass => {
        glass.addEventListener('click', handleGlassClick);
    });

    function handleWindowClick(event) {
        if (!event.target.classList.contains('glass') && !event.target.closest('.glass')) {
            glasses.forEach(glass => glass.classList.remove('active'));
        }
    }
    window.addEventListener('click', handleWindowClick);
});