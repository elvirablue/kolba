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


    $('#demo1').circliful({
        // foreground Color
          foregroundColor: "#ffdd00",

          // backgroun color
          backgroundColor: "#eee",

          // fill color of point circle
          pointColor: "none",

          // fill color
          fillColor: '#fff',

          // width of foreground circle border
          foregroundBorderWidth: 12,

          // width of background circle border
          backgroundBorderWidth: 12,

          // font size of the percentage text
          percentageTextSize: 42,


          // font color
          fontColor: '#000',

          // from 0 to 100
          percent: 76,

          // additonal css for the percentage text
            textAdditionalCss: 'graph__num',

            animateInView: true,
    });  	

    $('#demo2').circliful({
        // foreground Color
          foregroundColor: "#ffdd00",

          // backgroun color
          backgroundColor: "#eee",

          // fill color of point circle
          pointColor: "none",

          // fill color
          fillColor: '#fff',

          // width of foreground circle border
          foregroundBorderWidth: 12,

          // width of background circle border
          backgroundBorderWidth: 12,

          // font size of the percentage text
          percentageTextSize: 42,


          // font color
          fontColor: '#000',

          // from 0 to 100
          percent: 92,

          // additonal css for the percentage text
            textAdditionalCss: 'graph__num',
            animateInView: true,
    }); 

    $('#demo3').circliful({
        // foreground Color
          foregroundColor: "#ffdd00",

          // backgroun color
          backgroundColor: "#eee",

          // fill color of point circle
          pointColor: "none",

          // fill color
          fillColor: '#fff',

          // width of foreground circle border
          foregroundBorderWidth: 12,

          // width of background circle border
          backgroundBorderWidth: 12,

          // font size of the percentage text
          percentageTextSize: 42,


          // font color
          fontColor: '#000',

          // from 0 to 100
          percent: 23,

          // additonal css for the percentage text
        textAdditionalCss: 'graph__num',
        animateInView: true,
    });

    $('#demo4').circliful({
        // foreground Color
          foregroundColor: "#ffdd00",

          // backgroun color
          backgroundColor: "#eee",

          // fill color of point circle
          pointColor: "none",

          // fill color
          fillColor: '#fff',

          // width of foreground circle border
          foregroundBorderWidth: 12,

          // width of background circle border
          backgroundBorderWidth: 12,

          // font size of the percentage text
          percentageTextSize: 42,


          // font color
          fontColor: '#000',

          // from 0 to 100
          percent: 47,

          // additonal css for the percentage text
            textAdditionalCss: 'graph__num',
            animateInView: true,
    });              



});