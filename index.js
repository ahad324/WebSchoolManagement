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

document.addEventListener("DOMContentLoaded", function () {
    var audioSources = [
        './part1.mp3',
        './part2.mpeg',
        './part3.mp3',
        './part4.mp3'
    ];

    var currentIndex = 0;
    function playAudio() {
        if (currentIndex < audioSources.length) {
            var audio = new Audio(audioSources[currentIndex]);

            audio.play().then(() => {
                currentIndex++;
            }).catch((error) => {
                console.error("Error playing audio:", error);
            });
        }
    }

    if (window.matchMedia("(max-width: 600px)").matches) {
        console.log("h")
        document.body.addEventListener('click', playAudio.bind(this));
    }
});
