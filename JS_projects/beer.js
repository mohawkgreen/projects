function beerOnTheWall (beers) {
    while (beers > -1) {
        if (beers === 0) {
            console.log("No more bottles of beer on the wall, no more bottles of beer.");
            console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
            beers--;
        } else if (beers === 1) {
            console.log(beers + " bottle of beer on the wall, " + beers + " bottle of beer.");
            console.log("Take one down and pass it around, no more bottles of beer on the wall.");
            beers--;
        } else if (beers === 2) {
            console.log(beers + " bottles of beer on the wall, " + beers + " bottles of beer.");
            beers--;
            console.log("Take one down and pass it around, " + beers + " bottle of beer on the wall.")
        } else {
            console.log(beers + " bottles of beer on the wall, " + beers + " bottles of beer.");
            beers--;
            console.log("Take one down and pass it around, " + beers + " bottles of beer on the wall.")
        }
    }
}

beerOnTheWall(99);