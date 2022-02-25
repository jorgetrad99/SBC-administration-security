const PythonShell = require('python-shell');

let options = {
  scriptPath: 'path',
};

PythonShell.run('vigenere.py', options, (err, res) => {
  if (err) console.err;
  if (res) console.res;
});
