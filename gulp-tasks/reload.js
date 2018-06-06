const config = require('./config');

module.exports = function (gulp, plugins) {

  return function () {
      plugins.browserSync.reload();
  }

};
