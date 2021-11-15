var video=document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	 video.play()
	 document.getElementById("volume").innerHTML = document.getElementById("slider").value + "%";
 });

 document.querySelector("#pause").addEventListener("click",function(){
	console.log("Pause Video");
	video.pause()
 })

 document.querySelector("#slower").addEventListener("click",function(){
	video.playbackRate*=0.95;
	console.log("New speed is "+video.playbackRate);
 })

 document.querySelector("#faster").addEventListener("click",function(){
	video.playbackRate*=1.05;
	console.log("New speed is "+video.playbackRate);
 })

 document.querySelector("#skip").addEventListener("click",function(){
	console.log("Original location "+video.currentTime);
	if (video.currentTime >= video.duration-15){
		video.currentTime = 0;
		video.play();
		console.log("Going back to beginning");
	}
	else {
		video.currentTime += 15
	}
	console.log("New location " + video.currentTime);
 })

 document.querySelector("#mute").addEventListener("click",function(){
	if (video.muted == false){
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		//document.getElementById("volume").innerHTML ="0";
	}
	else if	(video.muted = true){
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		//document.getElementById("volume").innerHTML = "100%";
	}
 })

 document.querySelector("#slider").addEventListener("slidestop", function(){  
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
	console.log(video.volume);
}); 

document.querySelector("#vintage").addEventListener("click",function(){
	document.querySelector(".video").classList.add('oldSchool');
})

document.querySelector("#orig").addEventListener("click",function(){
	document.querySelector(".video").classList.remove('oldSchool');
})