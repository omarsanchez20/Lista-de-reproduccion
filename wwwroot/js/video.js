document.addEventListener("DOMContentLoaded", function() {
    // Obtener los elementos de video
    var videos = document.querySelectorAll("video");

    // Iterar sobre cada elemento de video
    videos.forEach(function(video, index) {
        // Obtener los botones de play y trash correspondientes a este video
        var playButton = document.querySelectorAll(".play-button")[index];
        var trashButton = document.querySelectorAll(".trash-button")[index];

        // Añadir evento click al botón de play
        playButton.addEventListener("click", function() {
            // Si el video está pausado, reproducirlo. De lo contrario, pausarlo.
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });

        // Añadir evento click al botón de trash
        trashButton.addEventListener("click", function() {
            // Detener el video y eliminar el elemento de la lista
            video.pause();
            video.parentNode.parentNode.remove(); // Eliminar el li que contiene el video de la lista
        });
    });
});

// Función llamada cuando la API de YouTube se ha cargado
function onYouTubeIframeAPIReady() {
    // Iterar sobre cada video de YouTube
    youtubeVideos.forEach(function(video) {
        // Crear un reproductor de YouTube para cada video
        var player = videojs('player-' + video.id, {
            techOrder: ['youtube'],
            autoplay: false,
            controls: true,
            sources: [{
                src: 'https://www.youtube.com/watch?v=' + video.id,
                type: 'video/youtube'
            }]
        });

        // Agregar evento click al botón de play
        var playButton = document.getElementById("playButton-" + video.id);
        playButton.addEventListener("click", function() {
            player.play();
        });

        // Agregar evento click al botón de trash
        var trashButton = document.getElementById("trashButton-" + video.id);
        trashButton.addEventListener("click", function() {
            player.dispose();
            // Eliminar el elemento de la lista (li)
            var listItem = document.getElementById("listItem-" + video.id);
            listItem.remove();
        });
    });
}