try {
    window.addEventListener('DOMContentLoaded', function() {

        const images            = document.getElementsByClassName('card');
        const modalContainer    = document.querySelector('.modal_container');
        const backdrop          = document.querySelector('.backdrop');
        const modalImage        = document.getElementById('modal_image');
        const imgTitle          = document.getElementById('modal_text');
        const modalCloseBtn     = document.getElementById('modal_closer');

        [].forEach.call(images, function(image) {
            image.addEventListener('click', function() {
                modalContainer.style.display = 'flex';
                modalImage.src          = image.src;
                modalImage.alt          = image.alt;
                imgTitle.textContent    = image.alt;
                darkenAllImages();
            })
        });

        modalCloseBtn.addEventListener('click', function() {
            closeModal();
            removeFilterFromImages();
        });

        backdrop.addEventListener('click', function() {
            closeModal();
            removeFilterFromImages();
        })

        function darkenAllImages() {
            [].forEach.call(images, function(el) {
                el.style.filter = 'brightness(50%)';
            })
        }

        function closeModal() {
            modalContainer.style.display = 'none';
        }

        function removeFilterFromImages() {
            [].forEach.call(images, function(el) {
                el.style.filter = 'brightness(100%)';
            }) 
        }

    });
} catch (error) {
    console.log(error.message);
}