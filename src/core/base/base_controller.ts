export abstract class BaseController{

init():void{
    this.mouseFollower();
};
private mouseFollower():void{
    document.addEventListener("mousemove", function(event) {
        var follower = document.getElementById("follower");
        var mouseX = event.clientX-200;
        var mouseY = event.clientY-200;
        follower!.style.left = mouseX + "px";
        follower!.style.top = mouseY + "px";
        follower!.style.transition = "none";
        setTimeout(function() {
            follower!.style.transition = "";
        }, 0);
    });
}
}