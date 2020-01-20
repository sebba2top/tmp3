function StartConnection (){
    this.game = UnityLoader.instantiate("unityContainer", "Build/WebGL.json");
    this.connection = new signalR.HubConnectionBuilder()
    .withUrl("http://localhost:60568/rabbitmqclienthub", {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets,
    })
    .configureLogging(signalR.LogLevel.Information)
    .build();
	this.connection.on("ReceiveSiblingData", function (data){
		game.SendMessage("SignalR", 'UnpackSiblingData')
	});
    this.connection.on("ReceiveMessage", function () {
    console.log("lmao");
    game.SendMessage('SignalR', 'SignalRHere');
  });
  this.connection.start().then(function () {
    connection.invoke("SendMessage", "hello from webgl");
    console.log("connected");
  });
}
StartConnection();