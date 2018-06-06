const config = require('./config');
const glob = require('glob');
const fs = require('fs');

function generateMainIndex(templateTypes) {

    let index = new String();

    templateTypes.forEach((templateType) => {

      index += `\t<li><a href="/index/${templateType}/index.html">${templateType}</li>\n`;

    });

    index = `<ul>\n${index}</ul>`;

    return index;

}

function generateIndex(files, type) {

    let index = new String();

    files.forEach((path) => {

      let name = path.replace(/^.*[\\\/]/, '').replace(/\.pug/, '');
      index += `\t<li><a href="/html_build/${type}/${name}">${name}</li>\n`;

    });

    index = `<ul>\n${index}</ul>`;

    return index;

}

module.exports = function (gulp, plugins) {

    return function () {

        for (var i = 0; i < config.templateTypes.length; i++) {

          let type = config.templateTypes[i];

          let folder = `${config.templateSource}/${config.templateTypes[i]}/*.html`;

          glob(folder, {}, (er, files) => {
            let indexHtml = generateIndex(files, type);
            fs.writeFile(`index/${type}/index.html`, indexHtml, 'utf8', () => {});
          });
        }

        let mainIndex = generateMainIndex(config.templateTypes)
        fs.writeFile('index/index.html', mainIndex, 'utf8', () => {});

    };

};
