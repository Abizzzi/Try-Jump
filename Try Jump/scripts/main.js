$(window).ready(function e()
{
    var onceup = false;
    var onceleft = false;
	var onceright = false;
	var right = 0;
	var left = 0;
	var up = 0;
	var phys = 0;
	$("#l5-13").css("left", 875);
	$("#l6-9").css("left", 825);
	$("#l6-10").css("left", 875);
	$("#l6-11").css("left", 925);
	$(document).keydown(function (e) 
	{
		var a = "#ffffff";
		if (e.keyCode == 39 && onceright == false)
		{
			right = setInterval(goright, 1);
			onceright = true;
			$("#l6-11").css("background-color", a)
		}
		if (e.keyCode == 37 && onceleft == false)
		{
			left = setInterval(goleft, 1);
			onceleft = true;
			$("#l6-9").css("background-color", a)
		}
		if (e.keyCode == 38 && onceup == false)
		{
			up = setInterval(goup, 1);
			onceup = true;
			$("#l5-13").css("background-color", a)
		}
		if (e.keyCode == 40)
		{
			$("#l6-10").css("background-color", a)
		}
	});
	function goleft()
	{
		$(".player").css("left", "-=2");
	}
	function goup()
	{
		phys++;
		if (phys == 1)
		{
			$(".player").css("background-color", "#FFF");
		}
		if (phys < 100)
		{
			$(".player").css("top", "-=2");
		}
		else if (phys > 100)
		{
			if (phys < 150)
			{
				$(".player").css("top", "-=1");
			}
		}
		if (phys > 150)
		{
			if (phys < 200)
			{
				$(".player").css("top", "+=1");
			}
			if (phys < 250)
			{
				$(".player").css("top", "+=2");
			}
			if (phys == 260)
			{
				$(".player").css("background-color", "#000");
				clearInterval(up);
				phys = 0;
				onceup = 0;
			}
		}
	}
	function godown()
	{
		$(".player").css("top", "+=2");
	}
	function goright()
	{
		$(".player").css("left", "+=2");
	}
	$(document).keyup(function (e) 
	{
		var a = "#000000";
		if (e.keyCode == 40)
		{
			$("#l6-10").css("background-color", a)
		}
		if (e.keyCode == 39)
		{
			clearInterval(right);
			onceright = false;
			$("#l6-11").css("background-color", a)
		}
		if (e.keyCode == 38)
		{
			$("#l5-13").css("background-color", a)
		}
		if (e.keyCode == 37)
		{
			clearInterval(left);
			onceleft = false;
			$("#l6-9").css("background-color", a)
		}
	});
});