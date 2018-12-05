
// // Lesson 1
// $(document).ready(function(){
//
//   // BASIC SELECTORS
//   $('p.lead').css('border', '4px solid red');
//
//   // BASIC ANIMATIONS
//   $('.box').hide().fadeIn(5000)
//   $('.box').animate({bottom: '-200px', left: '200px'}, 1000)
//
//   // INDEX FILTERS
//   $('p:gt(2)').css('border','4px solid red') // gt = greater than
//   $('p:gt(2)').css('border','4px solid red')
//
//   // RELATIONSHIP FILTERS
//   $('h2:has(span)').css('border','4px solid red')
//   $('.box:parent').css('border','4px solid red') //only boxes that have children (numbers)
//   $('.box:empty').css('border','4px solid green')
//
//   // ATTRIBUTE FILTERS
//   $('p[name ^= "shor"]').css('border', '4px solid green'); // ^= begins with
//   $('a[href $= ".co.uk"]').css('border', '4px solid green'); // attribute $= ends with
// });



// // Lesson 2
// $(function(){
//
//   // ATTR METHOD
//
//   $('p:first').attr('class', 'new class name') //change class name
//
//   // IMAGE SWAP
//
//   // $('img').attr('src', 'img2.jpg')
//   $('img').delay().fadeOut(500, function(){
//     $(this).attr('src', 'img2.jpg').fadeIn(500);
//   });
//
//   // CLASS METHODS
//   // alert($('p:last').hasClass('lead'));
//   $('p').toggleClass('blue').removeClass('lead');
//
//   // CONTENT METHODS
//   $('p:first').html("HE <b>YYY</b> YYYY");
//   $('input').val('yo dude!');
//
// });
//



// Lesson 3
$(function(){

  // DOM TRAVERSAL
  $('h2').siblings('p').last().css('border', '4px solid red') // parents children

  // EVENT BINDING
  $('h2').bind('click', function(){
    $(this).toggleClass('blue');
  });

  $('h2').hover(function(){
    $(this).toggleClass('blue');
  });

  $('html').keypress(function(){
    $(this).toggleClass('blue');
  });


});
