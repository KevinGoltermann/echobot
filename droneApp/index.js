var pubnub = require("pubnub")({
    ssl           : true,  // <- enable TLS Tunneling over TCP 
    publish_key   : "pub-c-......",
    subscribe_key : "sub-c-......"
});

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Create an Led on pin 13
  //var led = new five.Led(13);
  // Blink every half second
  //led.blink(500); 
  
  led = new five.Led(5);
  
  //led.strobe( 1000 );
  //this.repl.inject({
  //  led: led
  //});
  //console.log("You can interact with the bargraph via the variable 'led'");
  //console.log("e.g. led.stop();\n Hit control-d to exit.\n >> ");
 

  pubnub.subscribe({
	channel  : "my_channel",
	callback : function(message) {
			console.log( " > ", message );
			console.log(message.command);
			led.blink(500);
		}
	});
});
