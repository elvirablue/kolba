  
$(document).on('ready', function(){ 
//******************модальные окна для форм**************************************************

     
  
   
    var popup_wrapper = document.querySelector('.modal_wrapper');
    var popup = document.querySelector('.js-modal');
    var close = popup.querySelector('.modal_close');         

    
    $('.js-btn-modal').click(function(event){
          event.preventDefault();          
          PopupShow(event);
    }); 
   


    function PopupShow(event) {
          event.preventDefault();
          popup.classList.remove('zoomOut');
          popup_wrapper.classList.remove('fadeOut');
          popup.classList.add('show', 'zoomIn');
          popup_wrapper.classList.add('show', 'fadeIn');
          
    };
   

    function closePopup() {
          if (popup.classList.contains('show')) {
                popup.classList.add('zoomOut');
                popup_wrapper.classList.add('fadeOut');
                setTimeout(function(){
                      popup.classList.remove('show', 'zoomIn' );      
                      popup_wrapper.classList.remove('show', 'fadeIn');
                }, 200);
                
          };
          
    }

    window.addEventListener('keydown', function(event) {
          if (event.keyCode === 27) {
                closePopup();
          };
    });

    popup_wrapper.addEventListener('click', function(event) {
          closePopup();
          
    });
 
    close.addEventListener('click', function(event) {
          event.preventDefault();
          closePopup();
    });


});