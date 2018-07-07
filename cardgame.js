//click on card
//add selected
//if two cards have selected - see if they are a match
//if they are a match add match class and remove select, so you can keep selecting

const game = {
  checkIfMatch: function(){
    if( $('.selected').eq(0).attr('class') ==  $('.selected').eq(1).attr('class')  ){
      $('.selected').addClass('matched').removeClass('selected')
    }else{
      $('.selected').removeClass('selected')
    }
  },
  checkEnd: function(){
    if( $('.card').length == $('.matched').length ){
      alert('GAME OVER')
    }
  }
}
$('.card').on('click', function(){
  $(this).toggleClass('selected')
  if($('.selected').length == 2){
    game.checkIfMatch()
  }
  game.checkEnd()
});




















// var addCardListener = function () {
//
//     $deck.find('.card').bind('click', function () {
//         var $this = $(this);
//
//         if ($this.hasClass('show') || $this.hasClass('match')) { return true; }
//
//         var card = $this.context.innerHTML;
//         $this.addClass('open show');
//         allOpen.push(card);
//
//         if (allOpen.length > 1) {
//             if (card === allOpen[0]) {
//                 $deck.find('.open').addClass('match');
//                 setTimeout(function () {
//                     $deck.find('open').removeClass('open show');
//                 }, wait);
//                 match++;
//             } else {
//                 $deck.find('.open').addClass('notmatch');
//                 setTimeout(function () {
//                     $deck.find('.open').removeClass('open show');
//                 }, wait / 1.5);
//             }
//             allOpen = [];
//             moves++;
//             rating(moves);
//             $moves.html(moves);
//         }
//     });
// }
//
// function rating(moves) {
//     let rating = 3;
//     if (moves > stars3 && moves < stars2) {
//         $rating.eq(3).removeClass('fa-star').addClass('fa-star-o');
//     } else if (moves > stars2 && moves < star1) {
//         $rating.eq(2).removeClass('fa-star').addClass('fa-star-o');
//     } else if (moves > star1) {
//         $rating.eq(1).removeClass('fa-star').addClass('fa-star-o');
//         rating = 1;
//     }
//     return { score: rating };
// }
//
//
//
// function gameOver(moves, score) {
//     $('#winnerText').text(`In ${second} seconds, you did a total of ${moves} moves with a score of ${score}. Well done!`);
//     $('#winnerModal').modal('toggle');
// }
