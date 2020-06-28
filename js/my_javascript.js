var text1 = document.getElementById("naming");
var newEl = document.createElement('h3');
	
$(document).ready(function() {
  $("#btn1").click(function() {
    $("#beginner-1").slideDown("fast");
    $("#beginner-2").slideDown("fast");
    $("#beginner-3").slideDown("fast");
    $("#beginner-4").slideDown("fast");
	
		
	//$("#beginner-1, #beginner-2, #beginner-3, #beginner-4").hide();
	$("#elementary-1, #elementary-2, #elementary-3, #elementary-4").hide();
	$("#pre-intermediate-1, #pre-intermediate-2, #pre-intermediate-3, #pre-intermediate-4").hide();
	$("#intermediate-1, #intermediate-2, #intermediate-3, #intermediate-4").hide();
	$("#upper-intermediate-1, #upper-intermediate-2, #upper-intermediate-3, #upper-intermediate-4").hide();
	$("#advanced-1, #advanced-2, #advanced-3, #advanced-4").hide();
	
	//newEl.innerHTML = '<b>Beginner</b>';
	//text1.parentNode.replaceChild(newEl, text1);
	
	
  });
});


$(document).ready(function() {
  $("#btn2").click(function() {
    $("#elementary-1").slideDown("fast");
    $("#elementary-2").slideDown("fast");
    $("#elementary-3").slideDown("fast");
    $("#elementary-4").slideDown("fast");

		
	$("#beginner-1, #beginner-2, #beginner-3, #beginner-4").hide();
	//$("#elementary-1, #elementary-2, #elementary-3, #elementary-4").hide();
	$("#pre-intermediate-1, #pre-intermediate-2, #pre-intermediate-3, #pre-intermediate-4").hide();
	$("#intermediate-1, #intermediate-2, #intermediate-3, #intermediate-4").hide();
	$("#upper-intermediate-1, #upper-intermediate-2, #upper-intermediate-3, #upper-intermediate-4").hide();
	$("#advanced-1, #advanced-2, #advanced-3, #advanced-4").hide();
	
	
	//newEl.innerHTML = '<b>Elementary</b>';
	//text1.parentNode.replaceChild(newEl, text1);
	
	
  });
});

$(document).ready(function() {
  $("#btn3").click(function() {
    $("#pre-intermediate-1").slideDown("fast");
    $("#pre-intermediate-2").slideDown("fast");
    $("#pre-intermediate-3").slideDown("fast");
    $("#pre-intermediate-4").slideDown("fast");
	
		
	
	$("#beginner-1, #beginner-2, #beginner-3, #beginner-4").hide();
	$("#elementary-1, #elementary-2, #elementary-3, #elementary-4").hide();
	//$("#pre-intermediate-1, #pre-intermediate-2, #pre-intermediate-3, #pre-intermediate-4").hide();
	$("#intermediate-1, #intermediate-2, #intermediate-3, #intermediate-4").hide();
	$("#upper-intermediate-1, #upper-intermediate-2, #upper-intermediate-3, #upper-intermediate-4").hide();
	$("#advanced-1, #advanced-2, #advanced-3, #advanced-4").hide();
	
	
	//newEl.innerHTML = '<b>Pre-Intermediate</b>';
	//text1.parentNode.replaceChild(newEl, text1);
	
	
  });
});


$(document).ready(function() {
  $("#btn4").click(function() {
    $("#intermediate-1").slideDown("fast");
    $("#intermediate-2").slideDown("fast");
    $("#intermediate-3").slideDown("fast");
    $("#intermediate-4").slideDown("fast");
	

	
	$("#beginner-1, #beginner-2, #beginner-3, #beginner-4").hide();
	$("#elementary-1, #elementary-2, #elementary-3, #elementary-4").hide();
	$("#pre-intermediate-1, #pre-intermediate-2, #pre-intermediate-3, #pre-intermediate-4").hide();
	//$("#intermediate-1, #intermediate-2, #intermediate-3, #intermediate-4").hide();
	$("#upper-intermediate-1, #upper-intermediate-2, #upper-intermediate-3, #upper-intermediate-4").hide();
	$("#advanced-1, #advanced-2, #advanced-3, #advanced-4").hide();
	
	
	//newEl.innerHTML = '<b>Intermediate</b>';
	//text1.parentNode.replaceChild(newEl, text1);
	
  });
});


$(document).ready(function() {
  $("#btn5").click(function() {
    $("#upper-intermediate-1").slideDown("fast");
    $("#upper-intermediate-2").slideDown("fast");
    $("#upper-intermediate-3").slideDown("fast");
    $("#upper-intermediate-4").slideDown("fast");
		
	
	$("#beginner-1, #beginner-2, #beginner-3, #beginner-4").hide();
	$("#elementary-1, #elementary-2, #elementary-3, #elementary-4").hide();
	$("#pre-intermediate-1, #pre-intermediate-2, #pre-intermediate-3, #pre-intermediate-4").hide();
	$("#intermediate-1, #intermediate-2, #intermediate-3, #intermediate-4").hide();
	//$("#upper-intermediate-1, #upper-intermediate-2, #upper-intermediate-3, #upper-intermediate-4").hide();
	$("#advanced-1, #advanced-2, #advanced-3, #advanced-4").hide();
	
	
	//newEl.innerHTML = '<b>Upper-Intermediate</b>';
	//text1.parentNode.replaceChild(newEl, text1);
	
	
  });
});


$(document).ready(function() {
  $("#btn6").click(function() {
    $("#advanced-1").slideDown("fast");
    $("#advanced-2").slideDown("fast");
    $("#advanced-3").slideDown("fast");
    $("#advanced-4").slideDown("fast");
	
	
	$("#beginner-1, #beginner-2, #beginner-3, #beginner-4").hide();
	$("#elementary-1, #elementary-2, #elementary-3, #elementary-4").hide();
	$("#pre-intermediate-1, #pre-intermediate-2, #pre-intermediate-3, #pre-intermediate-4").hide();
	$("#intermediate-1, #intermediate-2, #intermediate-3, #intermediate-4").hide();
	$("#upper-intermediate-1, #upper-intermediate-2, #upper-intermediate-3, #upper-intermediate-4").hide();
	//$("#advanced-1, #advanced-2, #advanced-3, #advanced-4").hide();
	
	
	//newEl.innerHTML = '<b>Advanced</b>';
	//text1.parentNode.replaceChild(newEl, text1);
	
  });
});







$(document).ready(function() {
	$('.l-c-btn').click(function(){
		$('.l-c-btn').removeClass("active-2");
		$(this).addClass("active-2");
	});
});















