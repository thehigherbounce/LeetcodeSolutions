Array.prototype.last = function() {
    if(this.length == 0) return -1;
    if(this.some(ele => ele >= 0 && ele <= 1000))
    if(this.length >= 0 && this.length <= 1000){
        return this[this.length - 1];
    }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */