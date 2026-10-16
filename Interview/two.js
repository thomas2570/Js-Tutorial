Array.prototype.customForEachOne = function(callback){
    for(let i = 0; i< this.length;i++){
        callback(this[i], i , this)
    }
}
// this is basic approach 
// Explanation: This uses a for loop to iterate through the array and passes three arguments to the callback: the current value, index, and original array.


Array.prototype.customForEachTwo = function(callback, thiscontext){
    if(typeof callback !== 'function'){
        throw `not a function`
    }

    const length = this.length

    let i = 0;
    while(i<length){
        if(this.hasOwnProperty(i)) {
            callback.call(thiscontext, this[i], i , this)
        }
        i++;
    }
}

// Explanation: This version validates the callback, skips missing array elements, and uses call() to set the callback's this context.

// 💡 Key Takeaways

// for...in iterates over enumerable property keys.

// hasOwnProperty() distinguishes own properties from inherited ones.

// Array.prototype allows us to add custom methods to arrays.

// Callbacks help us build reusable iteration methods.

// call() allows us to specify the callback's this value.