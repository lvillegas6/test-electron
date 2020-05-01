
const loader = require('monaco-loader');
const { ipcRenderer } = require('electron');
const fs = require('fs');

loader().then( monaco => {
	let editor = monaco.editor.create(
		document.querySelector('#app'),
		{
			language: 'javascript',
			theme: 'vs-dark',
			automaticLayout: true
		}
	);

});