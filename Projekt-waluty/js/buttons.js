// for(var i=1; i<17; i++){
//     console.log(i++);
// }

$(document).ready(function(){
    // $('#button-1').on('click', function(){
    //     $('#tab-news').css('display', 'block');
    //     $('#tab-gold').css('display', 'none');
    //     $('#tab-currency').css('display', 'none');
    //     $('#tab-crypto').css('display', 'none');
    // });
    $('#button-2').on('click', function(){
        $('#tab-news').css('display', 'none');
        $('#tab-gold').css('display', 'flex');
        $('#tab-currency').css('display', 'none');
        $('#tab-crypto').css('display', 'none'); 
    });  
    $('#button-3').on('click', function(){
        $('#tab-news').css('display', 'none');
        $('#tab-gold').css('display', 'none');
        $('#tab-currency').css('display', 'flex');
        $('#tab-crypto').css('display', 'none'); 
    });    
    $('#button-4').on('click', function(){
        $('#tab-news').css('display', 'none');
        $('#tab-gold').css('display', 'none');
        $('#tab-currency').css('display', 'none');
        $('#tab-crypto').css('display', 'flex'); 
    });   

});