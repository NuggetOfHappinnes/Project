(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());
function open(){
document.getElementsByClassName("qr").classList.toggle('qr__active')

}
(function () {
    const qr = document.querySelector('.btn'); 
    const menu = document.querySelector('.qr');        

    qr.addEventListener('click', () => {
        menu.classList.add('qr__active');      

    });        
}());