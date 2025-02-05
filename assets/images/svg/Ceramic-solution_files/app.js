const navbarbtn = () => {
    document.getElementById("nav-name").classList.toggle("show-navbar")
    document.getElementById("rotats").classList.toggle("rotate42")
    document.getElementById("transparent").classList.toggle("bg-transparent")
    document.getElementById("rotats2").classList.toggle("rotate-43")
    document.body.classList.toggle("overflow-hidden")
}

$('.slider').slick({
    infinite: true,
    arrows:false,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 1,
    speed: 10000,
    // cssEase: 'linear',
    slidesToScroll: 4,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 5
            }
        },
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 4
            }
        },
    ]
});