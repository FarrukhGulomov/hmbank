$(document).ready(function(){

    $('.eyes-features').on('click',function(){
        

       
        $('.features-menu').slideDown(200);
        
    });


  //  create click fees calculator function 

    $('#btnCalc').click(function(event){
        event.preventDefault(); 
   $(this).children('ul').slideToggle('d-none');
        
    });


 


  
  
   
   
});
    