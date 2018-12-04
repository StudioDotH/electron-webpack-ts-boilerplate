const styles = require('./styles/index.scss');

document.write(`<div class="${styles.container}"><div class="${styles.title}">It works!</div><div class="${styles.item}">Node version: ${process.versions.node}</div><div class="${styles.item}">V8 version: ${process.versions.v8}</div><div class="${styles.item}">Erase this in /src/renderer to get started.</div></div>`);