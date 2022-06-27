
//Карусель комментариев
$('.owl-carousel').owlCarousel({
    loop: true,
    dots: true,
    margin:50,
    items:2,
    autoplay:true,
    autoplayTimeout:5000,
    smartSpeed:300,
    responsive: {
        1280: {
            items: 1
        },
        1920: {
            items: 2
        }
    }
})

// Выпадающий список
function myFunction() {
    var submenu = document.querySelector(".submenu")
   
    
    if (submenu.classList.toggle("show")) {
        var overlay = $('.overlay').css({'display' : 'block' });
    }
    else  {
        var overlay = $('.overlay').css({'display' : 'none' });
    }
    
    submenu.classList.toggle("active")
}

