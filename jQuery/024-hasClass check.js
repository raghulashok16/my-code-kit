$(function () {
 
    $('div > div > div').click(function(){
        var classVal = $('#input1').val();
        var backClr = checkClass(classVal) ? 'green' : 'red';
        $('h1').css('background-color',backClr)
    })
    
    function checkClass(whatClass){
        return ($('#mainDiv').children().first().hasClass(whatClass));
    }
    
    
})