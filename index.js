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
        './part1.mpeg',
        './part2.mp3',
        './part3.mp3'
    ];

    function playSequentialAudio(index) {
        if (index < audioSources.length) {
            var audio = new Audio(audioSources[index]);
            audio.play();

            audio.addEventListener('ended', function () {
                playSequentialAudio(index + 1);
            });
        }
    }

    playSequentialAudio(0);
});
