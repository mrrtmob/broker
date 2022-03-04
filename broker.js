// MQTT broker
var mosca = require('mosca')
var SECURE_KEY = 'secure/privkey.pem';
var SECURE_CERT = 'secure/cert.pem';
var settings = {port: 8883,
    // logger: {
    //   name: "Lambda",
    //   level: 40,
    // },
    secure : {
      port: 8443,
      keyPath: SECURE_KEY,
      certPath: SECURE_CERT,
    }
  };
var broker = new mosca.Server(settings)

broker.on('ready', () => {
    console.log('Broker is ready!')
})

// broker.on('published', (packet)=>{
//     message = packet.payload.toString()
//     console.log(message)
// })