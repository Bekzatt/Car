function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
$(document).ready(function () {

    //variables
    $surface = $('.surface');
    $car = $('.car');
    $img = $('.car img');

    let flag = true;

    const cars = ['images/Img_05.png', 'images/Img_06.png'];

    //keypress
    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            $($surface).toggleClass('moveRight');
            $($car).toggleClass('suspension');
        }
    })
   
    $(document).on('keypress', function (e) {
        if (e.which == 119) {
          /*  while(true){
                 $img.attr('src', cars[0]);
                  await sleep(1000);
                  $img.attr('src', cars[1]);
            }*/
            
             if (flag) {
                 flag = false;
                $img.attr('src', cars[0]);
             }
             else {
                 flag = true;
                 $img.attr('src', cars[1]);
             }
        }
    })

});