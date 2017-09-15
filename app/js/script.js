$(document).on('ready', function(){ 
	var owl = $('#owl1');

       owl.owlCarousel({
         loop:true,//Зацикливаем слайдер
         margin:10,
         navigation : true,
         dots: true,
         //autoplayHoverPause: true, //Останавливает автопроигрывание если навести мышкой (hover) на элемент
         //autoplay:true, //Автозапуск слайдера
         smartSpeed:2500, //Время движения слайда
         autoplayTimeout:40, //Время смены слайда
         responsiveClass:true, 
         nav:true,       
         responsive:{
             0:{
                 items:1
             },
             600:{
                 items:1
             },
             1000:{
                 items:1
             }
           }
       });
  
   $('ul.drop-down-list li').click(function(event){
        event.preventDefault();
        var target = $(this);
        target.toggleClass('active');
    });   	



});