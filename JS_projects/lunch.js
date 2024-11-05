function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        var seed = Math.floor(Math.random() * names.length);
        return names[seed] + " is going to buy lunch today!";
        
        
    
    
    /******Don't change the code below*******/    
    }
    
    console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));