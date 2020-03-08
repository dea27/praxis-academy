function unique (arr) {
    let some = new Set();
    
    for (let a of arr) {
    some.add(a);
    }
    
    return some;
    }
    
    let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", "dep"];
    
    console.log(unique(values));