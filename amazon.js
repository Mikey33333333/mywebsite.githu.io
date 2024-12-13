let navbar = document.querySelector('.navbar');
document.querySelector('.bx-menu').onclick = () =>{
    navbar.classList.toggle('active');
    searchbox.classList.remove('active');
    cartiteam.classList.remove('active');
}


let cartiteam = document.querySelector('.cart-iteam-container');
document.querySelector('.bx-cart').onclick = () =>{
    cartiteam.classList.toggle('active');
    navbar.classList.remove('active');
    searchbox.classList.remove('active');
}



let searchbox = document.querySelector('.search-from');
document.querySelector('.bx-search').onclick = () =>{
    searchbox.classList.toggle('active');
    navbar.classList.remove('active');
    cartiteam.classList.remove('active');
}


window.oncancel = () => {
    navbar.classList.remove('active');
    searchbox.classList.remove('active');
    cartiteam.classList.remove('active');
}

