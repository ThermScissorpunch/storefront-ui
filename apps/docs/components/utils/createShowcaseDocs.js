const glob = require('glob');
const { docsSplit, removePart, saveDoc } = require('./utils');
const fs = require('fs');
const commandLineArgs = require('command-line-args');

const options = commandLineArgs([{ name: 'event' }, { name: 'path' }]);

const mdFiles = glob.sync('./blocks/*.md');

function generateDocs() {
  if (options.event === 'change') {
    let docsContent = fs.readFileSync(options.path, 'utf8');
    const reactDocContent = removePart(docsContent, 'vue');
    const vueDocContent = removePart(docsContent, 'react');

    saveDoc(`./react/${options.path}`, reactDocContent);
    saveDoc(`./vue/${options.path}`, vueDocContent);
  } else {
    docsSplit(mdFiles, 'blocks');
  }
}

module.exports = {
  generateDocs,
};

if (require.main === module) {
  generateDocs();
}