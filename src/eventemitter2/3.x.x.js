/**
 * @param {Object=} conf
 * @constructor
 */
function EventEmitter2(conf) {}

/**
 * @type {string}
 */
EventEmitter2.prototype.delimiter;

/**
 * @param {Number} n
 */
EventEmitter2.prototype.setMaxListeners = function (n) {};

/**
 * @type {string}
 */
EventEmitter2.prototype.event;

/**
 * @param {string} event
 * @param {Function} fn
 * @return {EventEmitter2}
 */
EventEmitter2.prototype.once = function(event, fn) {};

/**
 * @param {string} event
 * @param {number} ttl
 * @param {Function} fn
 */
EventEmitter2.prototype.many = function(event, ttl, fn) {};

/**
 * @param {...*} var_args
 */
EventEmitter2.prototype.emit = function(var_args) {};

/**
 * @param {string} type
 * @param {Function} listener
 */
EventEmitter2.prototype.on = function(type, listener) {};

/**
 * @param {Function} fn
 */
EventEmitter2.prototype.onAny = function(fn) {};

/**
 * @param {string} type
 * @param {Function} listener
 */
EventEmitter2.prototype.addListener = function(type, listener) {};

/**
 * @param {string} type
 * @param {Function} listener
 */
EventEmitter2.prototype.off = function(type, listener) {};

/**
 * @param {Function} fn
 */
EventEmitter2.prototype.offAny = function(fn) {};

/**
 * @param {string} type
 * @param {Function} listener
 */
EventEmitter2.prototype.removeListener = function(type, listener) {};

/**
 * @param {string=} type
 * @return {EventEmitter2}
 */
EventEmitter2.prototype.removeAllListeners = function(type) {};

/**
 * @param {string=} type
 * @return {Array.<Function>}
 */
EventEmitter2.prototype.listeners = function(type) {};

/**
 * @param {string=} type
 * @return {Array.<Function>}
 */
EventEmitter2.prototype.listenersAny = function() {};
