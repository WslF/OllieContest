var Cylon = require('cylon');

Cylon.robot({
  connections: {
    bluetooth: { adaptor: 'central', uuid: 'ee42664940f4', module: 'cylon-ble' }
  },

  devices: {
    ollie: { driver: 'ollie', module: 'cylon-sphero-ble' }
  },

  work: function(my) {
    my.ollie.color(0x00FFFF);

    after(500, function() {
      my.ollie.color(0xFF0000);
    });

    after(1000, function() {
      my.ollie.roll(60, 0);
    });

    after(2000, function() {
      my.ollie.roll(60, 180);
    });

    after(3000, function() {
      my.ollie.stop();
    });
  }
}).start();
