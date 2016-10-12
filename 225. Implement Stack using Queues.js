/**
 * Created by Jarir on 2016.10.11.
 */
/**
 * @constructor
 */
var Stack = function() {
    this.stack = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
    return this.stack.length === 0;
};