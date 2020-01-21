function StartConnection (){
    this.game = UnityLoader.instantiate("unityContainer", "Build/WebGL.json");
}
StartConnection();