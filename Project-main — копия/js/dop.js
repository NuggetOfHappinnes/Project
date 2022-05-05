(function () {
    const qr = document.querySelector('.btn'); 
    const menu = document.querySelector('.qr');        

    qr.addEventListener('click', () => {
        menu.classList.add('qr__active');      

    });        
}());

