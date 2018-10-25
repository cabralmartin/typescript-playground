import * as monaco from 'monaco-editor';
import * as ts from 'typescript';

const EDITOR_OPTIONS = {
  lineNumbers: true,
  tabSize: 2,
  autofocus: false
};

const COMPILER_OPTIONS = {

};

var inputEditor = monaco.editor.create(document.getElementById('input-area'), { 
  language: 'typescript',
  lineNumbers: "on",
  minimap: false
});

var outputEditor = monaco.editor.create(document.getElementById('output-area'), { 
  language: 'javascript',
  readOnly: true,
  lineNumbers: "on"
});

inputEditor.model.onDidChangeContent((event) => {
  outputEditor.setValue(ts.transpile(inputEditor.getValue()));
});