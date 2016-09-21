/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var thisBoard = new Board({n: n});

  for (var i = 0; i < n; i++) {
    thisBoard.togglePiece(i, i);
  }

  var solution = thisBoard.rows();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;

  var recurseRook = function(levelsLeft, boardRows) {
    //for every starting on the top row
    boardRows = boardRows || {n: n};
    
    var thisBoard = new Board(boardRows);
    
    for (var i = 0; i < n; i++) {
      thisBoard.togglePiece(levelsLeft, i);
      //create a board with that starting point
      if (!thisBoard.hasAnyRookConflictsOn(levelsLeft, i)) {
        if (levelsLeft === 0) {
          solutionCount++;
        } else {
          recurseRook(levelsLeft - 1, thisBoard.rows());
        }
      }
      
      thisBoard.togglePiece(levelsLeft, i);
    }
    
  };
    
  recurseRook(n - 1);
  
   
    //create a board for each starting point below that
      //recurse as necessary
        //if n >= n solution count ++

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
