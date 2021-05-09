import { imageSrcs } from './imgSrcArray.js';

try {
    
    const images = document.getElementsByClassName('card');
    
    [].forEach.call(images, function(img, index, imgArr) {

        const storedImgSrc = localStorage.getItem(`img${ index + 1 }`);

        if (!storedImgSrc) {

            img.addEventListener('load', function() {

                const _this = this;
                const canvasEl = document.createElement('canvas');
                const imgContext = canvasEl.getContext('2d');
                const imgWidth = this.width;
                const imgHeight = this.height;

                canvasEl.width = imgWidth;
                canvasEl.height = imgHeight;
                imgContext.drawImage(_this, 0, 0, imgWidth, imgHeight);

                const imgDataUrl = canvasEl.toDataURL('image/jpeg');

                new Promise((resolve, reject) => {
                    try {
                        resolve(imgDataUrl);
                    } catch (error) {
                        reject('failed to create data url for: ', `img${index + 1}`);
                    }
                })
                .then(result => localStorage.setItem(`img${ index + 1 }`, result))
                .catch(error => console.error(error));

            })

            img.setAttribute('src', imageSrcs[index]);

        } else {
            img.setAttribute('src', storedImgSrc)
        }

    })


} catch (error) {
    console.error(error.message);
}