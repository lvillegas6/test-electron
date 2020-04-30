const loader = require('monaco-loader')
const { ipcRenderer } = require('electron')
const fs = require('fs')
loader().then(monaco => {
    let editor = monaco.editor.create(
      document.getElementById('app'),
      {
          languaje: 'javascript',
          theme: 'vs-dark',
          automaticLayout: true
      }  
    )

    ipcRenderer.on('open-file', (e, url) => {
        fs.readFile(url.slice(7), 'utf-8', (err, data) => {
            editor.setMode(monaco.editor.createMde(data, 'javascript'));
        })
    })

})