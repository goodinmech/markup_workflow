const config = require('./config');
const runSequence = require('run-sequence');

module.exports = function (gulp, plugins) {

  return function (cb) {

    runSequence(['clear', 'template', 'sass', 'css'], cb);

  }

};
