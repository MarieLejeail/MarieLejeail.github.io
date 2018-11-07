
$( document ).ready(function() {

  game = new TicTacToe();
  game.play();
  populateBoard();



   $('.square').click(function(){
     game.move($(this).data("position"))
     populateBoard();
   })

   // $('.spot').click(function(){
   //  markBox($(this).data("box"));
   // })
   //
   function populateBoard() {
     for (i = 0; i < game.grid.length; i++) {
      $('.position_0');
      $('.position_' + i).text(game.grid[i])

    }
   }

});
