$(function(){
    $('.open_button').click(function(){
        $('#menu').css('transform','translateX(0)');
    });
    $('.close_button').click(function(){
        $('#menu').css('transform','translateX(-100%)');
    });
    setTimeout(function(){
        $('#first_animetion').fadeOut(500);
    },4000);
});
$(function(){

    var now_hour = new Date().getHours();
    switch (now_hour) {
    case 1:
        // ケース1での処理
        $('#first_animetion .timebackground').css('background-color','#040E19');
        $('.night_title').css('display','block');
        break;
    case 2:
        // ケース2での処理
        $('#first_animetion').css('background-color','#0A1726');
        $('.night_title').css('display','block');
        break;
    case 3:
        // ケース3での処理
        $('#first_animetion').css('background-color','#112031');
        $('.night_title').css('display','block');
        break;
    
    case 4:
        $('#first_animetion').css('background-color','#1B2C3E');
        $('.night_title').css('display','block');
        break;

    case 5:
        $('#first_animetion').css('background-color','#2F445D');
        $('.morning_title').css('display','block');
        break;

    case 6:
        $('#first_animetion').css('background-color','#435D79');
        $('.morning_title').css('display','block');
        break;

    case 7:
        $('#first_animetion').css('background-color','#6284AC');
        $('.morning_title').css('display','block');
        break;

    case 8:
        $('#first_animetion').css('background-color','#86ACD8');
        $('.morning_title').css('display','block');
        break;
    
    case 9:
        $('#first_animetion,.time_background').css('background-color','#A2C8F4');
        $('.morning_title').css('display','block');
        break;

    case 10:
        $('#first_animetion,.time_background').css('background-color','#B5D7FF');
        $('.morning_title').css('display','block');
        break;

    case 11:
        $('#first_animetion').css('background-color','#D6E8FD');
        $('.morning_title').css('display','block');
        break;

    case 12:
        $('#first_animetion').css('background-color','#E8F1FC');
        $('.noon_title').css('display','block');
        break;

    case 13:
        $('#first_animetion').css('background-color','#FFFFFF');
        $('.noon_title').css('display','block');
        break;

    case 14:
        $('#first_animetion').css('background-color','#D6E8FD');
        $('.noon_title').css('display','block');
        break;
    
    case 15:
        $('#first_animetion').css('background-color','#85A2EF');
        $('.noon_title').css('display','block');
        break;

    case 16:
        $('#first_animetion').css('background-color','#FFD99D');
        $('.noon_title').css('display','block');
        break;

    case 17:
        $('#first_animetion').css('background-color','#FF8E80');
        $('.noon_title').css('display','block');
        break;

    case 18:
        $('#first_animetion').css('background-color','#546189');
        $('.noon_title').css('display','block');
        break;

    case 19:
        $('#first_animetion').css('background-color','#384469');
        $('.night_title').css('display','block');
        break;

    case 20:
        $('#first_animetion').css('background-color','#1F2C52');
        $('.night_title').css('display','block');
        break;

    case 21:
        $('#first_animetion').css('background-color','#0F1C41');
        $('.night_title').css('display','block');
        break;

    case 22:
        $('#first_animetion').css('background-color','#0E162B');
        $('.night_title').css('display','block');
        break;

    case 23:
        $('#first_animetion').css('background-color','#04060D');
        $('.night_title').css('display','block');
        
        break;

        default:
            $('#first_animetion').css('background-color','#000000');
            $('.night_title').css('display','block');
            break;
    }
});