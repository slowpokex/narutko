const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const cpu = os.cpus().length;
  console.log(`Forking for ${cpu} CPUs`);

  for (let i = 0; i < cpu; i++) {
    cluster.fork();
  }
} else {
  require('./server');
}
