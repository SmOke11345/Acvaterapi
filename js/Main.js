
//Карусель комментариев
$('.owl-carousel').owlCarousel({
    loop: true,
    dots: false,
    margin:50,
    items:1,
    autoplay:true,
    autoplayTimeout:5000,
    smartSpeed:300,
    responsive: {
        1920: {
            items: 2
        },
        1280: {
            items: 2
        },
        768: {
            items: 1
        },
        420: {
            
            items: 1
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

