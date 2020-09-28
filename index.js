/**
 * WELCOME TO GLOBAL PROTOTYPE JAVASCRIPT,
 * MADE BY HANIF DWY PUTRA S for LEARNING AND SCIENTIST.
 */

//  -------------------------------------------------------------------------------------------

/**
 * 
 * @returns {String}
 * 
 */
String.prototype.toTitleCase = function() {
    return this.split(" ").map(x => x.charAt(0).toUpperCase() + x.slice(x.length - (x.length - 1))).join(" ");
}

/**
 * 
 * @returns {String}
 * 
 */
String.prototype.tos = function() {
    return this.split(" ").map(x => x + "tos").join(" ");
}

/**
 * 
 * @returns {String}
 * 
 */
String.prototype.pramuka = function () {
    return this.replace(/[a|i|u|o]/gim, "e");
}

/**
 * 
 * @returns {String}
 * 
 */
String.prototype.removeCharacters = function() {
    return this.replace(/[</\/!\\\$\\\#\\\*/\/^\/\/\d{0,9}\/\/(/\?\\\+\\\-/\/\/(/\/\[\\\])/\/\/(/\/\/:\\\;\>]/gim, "");
}

Number.prototype.bintang = function() {
    const temp = [];
    for (var i = 0; i < this; i++) {
        temp.push('*'.repeat(i+1));
    }
    return temp.join('\n');
}

/**
 * 
 * @returns {String|null|Number|Object|Array}
 * 
 */
Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
}

/**
 * 
 * @param {Number} chunkSize 
 * @returns {Array}
 * 
 */
Array.prototype.chunk = function (chunkSize) {
    const temp = [];
    for (var i = 0; i < this.length; i+=chunkSize) {
        temp.push(this.slice(i, i+chunkSize));
    }
    return temp;
}


// -------------------------------------------------------------------------------------------


/**
 * 11:50 GMT +0700
 * 22 / 09 / 2020
 * 22 August 2020
 */