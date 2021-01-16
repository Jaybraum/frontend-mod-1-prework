var frog = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

for (var i = 10; i < frog.length; i--) {
  if (i > 0) {
    console.log(+[i] + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there was " + [i - 1] + " speckled frog.");
  } else if (i === 0) {
    console.log(+[i] + " speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs!");return;
  }
}console.log(frog[i]);
