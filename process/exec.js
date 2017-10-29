const { exec } = require('child_process');

exec('systeminfo', (err, stdout, stderr) => {
  if (err) {
    return console.log(`err: ${err}`);
  }
  console.log(`result: ${stdout}`);
});
