$(document).ready(function(){
		var Csec = $('#sec'),
		Cmin = $('#min'),
		Chour = $('#hour');

		setInterval(function(){
		var seconds = new Date().getSeconds(),
		mins = new Date().getMinutes(),
		hours = new Date().getHours(),
		sdegree = seconds * 6,
		mdegree = mins * 6,
		hdegree = hours * 30 + (mins/2),
		srotate = "rotate(" + sdegree + "deg)";
		mrotate = "rotate(" + mdegree + "deg)";
		hrotate = "rotate(" + hdegree + "deg)";

		Csec.css({"-webkit-transform":srotate});
		Cmin.css({"-webkit-transform":mrotate});
		Chour.css({"-webkit-transform":hrotate});

		}, 1000);




});
