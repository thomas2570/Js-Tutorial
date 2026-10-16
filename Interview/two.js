Array.prototype.customForEachOne = function(callback){
    for(let i = 0; i< this.length;i++){
        callback(this[i], i , this)
    }
}
// this is basic approach 


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