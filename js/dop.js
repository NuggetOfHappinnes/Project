(function () {
    const qr = document.querySelector('.btn'); 
    const menu = document.querySelector('.qr');        
    const menuCloseItem = document.querySelector('.btn1');
    qr.addEventListener('click', () => {
        menu.classList.add('qr__active');      

    });    
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('qr__active');
    });    
}());

