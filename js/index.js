// Page scroll to top on refresh
window.onbeforeunload = function () {
  	window.scrollTo(0, 0);
}

//Navigation bar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  	if (prevScrollpos > currentScrollPos) {
    	document.getElementById("main-header").style.top = "0";
  	} else {
    	document.getElementById("main-header").style.top = "-50px";
  	}
  	prevScrollpos = currentScrollPos;
}


//Slide 1 - Know More Click
$(document).ready(function() {
	$(".more-bc p").hide();
	var count1 = 0, count2 = 0, count3 = 0, count4 = 0, count5 = 0, count6 = 0, count7 = 0;

	$("#more-btn-1").click(function() {
		count1++;
		if(count1 == 1) {
			$("#more-content-1").css({"background-color": "#d8e0c8"});
			$("#more-content-1 p").slideToggle();
			$(".arr-1").css({"transform": "rotate(90deg)"});
		} else {
			$("#more-content-1 p").slideToggle();
			$("#more-content-1").delay(300);
			$("#more-content-1").queue(function (next) {
			   $(this).css({"background-color": "#ffffff"});
			   next();
			});
			$(".arr-1").css({"transform": "rotate(0deg)"});
			count1 = 0;
		}
	})
	$("#more-btn-2").click(function() {
		count2++;
		if(count2 == 1) {
			$("#more-content-2").css({"background-color": "#d8e0c8"});
			$("#more-content-2 p").slideToggle();
			$(".arr-2").css({"transform": "rotate(90deg)"});
		} else {
			$("#more-content-2 p").slideToggle();
			$("#more-content-2").delay(300);
			$("#more-content-2").queue(function (next) {
			   $(this).css({"background-color": "#ffffff"});
			   next();
			});
			$(".arr-2").css({"transform": "rotate(0deg)"});
			count2 = 0;
		}
	})
	$("#more-btn-3").click(function() {
		count3++;
		if(count3 == 1) {
			$("#more-content-3").css({"background-color": "#d8e0c8"});
			$("#more-content-3 p").slideToggle();
			$(".arr-3").css({"transform": "rotate(90deg)"});
		} else {
			$("#more-content-3 p").slideToggle();
			$("#more-content-3").delay(300);
			$("#more-content-3").queue(function (next) {
			   $(this).css({"background-color": "#ffffff"});
			   next();
			});
			$(".arr-3").css({"transform": "rotate(0deg)"});
			count3 = 0;
		}
	})
	$("#more-btn-4").click(function() {
		count4++;
		if(count4 == 1) {
			$("#more-content-4").css({"background-color": "#d8e0c8"});
			$("#more-content-4 p").slideToggle();
			$(".arr-4").css({"transform": "rotate(90deg)"});
		} else {
			$("#more-content-4 p").slideToggle();
			$("#more-content-4").delay(300);
			$("#more-content-4").queue(function (next) {
			   $(this).css({"background-color": "#ffffff"});
			   next();
			});
			$(".arr-4").css({"transform": "rotate(0deg)"});
			count4 = 0;
		}
	})
	$("#more-btn-5").click(function() {
		count5++;
		if(count5 == 1) {
			$("#more-content-5").css({"background-color": "#d8e0c8"});
			$("#more-content-5 p").slideToggle();
			$(".arr-5").css({"transform": "rotate(90deg)"});
		} else {
			$("#more-content-5 p").slideToggle();
			$("#more-content-5").delay(300);
			$("#more-content-5").queue(function (next) {
			   $(this).css({"background-color": "#ffffff"});
			   next();
			});
			$(".arr-5").css({"transform": "rotate(0deg)"});
			count5 = 0;
		}
	})
	$("#more-btn-6").click(function() {
		count6++;
		if(count6 == 1) {
			$("#more-content-6").css({"background-color": "#d8e0c8"});
			$("#more-content-6 p").slideToggle();
			$(".arr-6").css({"transform": "rotate(90deg)"});
		} else {
			$("#more-content-6 p").slideToggle();
			$("#more-content-6").delay(300);
			$("#more-content-6").queue(function (next) {
			   $(this).css({"background-color": "#ffffff"});
			   next();
			});
			$(".arr-6").css({"transform": "rotate(0deg)"});
			count6 = 0;
		}
	})
	$("#more-btn-7").click(function() {
		count7++;
		if(count7 == 1) {
			$("#more-content-7").css({"background-color": "#d8e0c8"});
			$("#more-content-7 p").slideToggle();
			$(".arr-7").css({"transform": "rotate(90deg)"});
		} else {
			$("#more-content-7 p").slideToggle();
			$("#more-content-7").delay(300);
			$("#more-content-7").queue(function (next) {
			   $(this).css({"background-color": "#ffffff"});
			   next();
			});
			$(".arr-7").css({"transform": "rotate(0deg)"});
			count7 = 0;
		}
	})

	$("#smart_accelerate").click(function(){
		$("#slide_2, #slide_3, #slide_4").each(function(){
			$(this).hide();
		});
		$("#slide_1").show();
	});
	$("#strategic").click(function(){
		$("#slide_2").show();
		$("#slide_1, #slide_3, #slide_4").each(function(){
			$(this).hide();
		});
	});
	$("#sales").click(function(){
		$("#slide_3").show();
		$("#slide_1, #slide_2, #slide_4").each(function(){
			$(this).hide();
		});
	});
	$("#digital").click(function(){
		$("#slide_1, #slide_2, #slide_3").each(function(){
			$(this).hide();
		});
		$("#slide_4").show();
	});

	$("#slide_1_click_here").click(function(){
		$("#slide_2, #slide_3, #slide_4").each(function(){
			$(this).hide();
		});
		$("#slide_1").show();
	});
	
	$("#slide_2_click_here").click(function(){
		$("#slide_2").show();
		$("#slide_1, #slide_3, #slide_4").each(function(){
			$(this).hide();
		});
	});
	$("#slide_3_click_here").click(function(){
		$("#slide_3").show();
		$("#slide_1, #slide_2, #slide_4").each(function(){
			$(this).hide();
		});
	});
	$("#slide_4_click_here").click(function(){
		$("#slide_1, #slide_2, #slide_3").each(function(){
			$(this).hide();
		});
		$("#slide_4").show();
	});

	
	$("#smart_accelerate").click(function(){
		$('#icon-1').attr("src", "images/green_icon_1.png");
		$('#smart_accelerate h4').css("color", "#8ca726");
		$('#icon-2').attr("src", "images/grey_icon_2.png");
		$('#strategic h4').css("color", "#555555");
		$('#icon-3').attr("src", "images/grey_icon_3.png");
		$('#sales h4').css("color", "#555555");
		$('#icon-4').attr("src", "images/grey_icon_4.png");
		$('#digital h4').css("color", "#555555");
		
	});
	$("#slide_1_click_here").click(function(){
		$('#icon-1').attr("src", "images/green_icon_1.png");
		$('#smart_accelerate h4').css("color", "#8ca726");
		$('#icon-2').attr("src", "images/grey_icon_2.png");
		$('#strategic h4').css("color", "#555555");
		$('#icon-3').attr("src", "images/grey_icon_3.png");
		$('#sales h4').css("color", "#555555");
		$('#icon-4').attr("src", "images/grey_icon_4.png");
		$('#digital h4').css("color", "#555555");
		
	});
	$("#strategic").click(function(){
		$('#icon-2').attr("src", "images/green_icon_2.png");
		$('#strategic h4').css("color", "#8ca726");
		$('#icon-1').attr("src", "images/grey_icon_1.png");
		$('#smart_accelerate h4').css("color", "#555555");
		$('#icon-3').attr("src", "images/grey_icon_3.png");
		$('#sales h4').css("color", "#555555");
		$('#icon-4').attr("src", "images/grey_icon_4.png");
		$('#digital h4').css("color", "#555555");
		
	});
	$("#slide_2_click_here").click(function(){
		$('#icon-2').attr("src", "images/green_icon_2.png");
		$('#strategic h4').css("color", "#8ca726");
		$('#icon-1').attr("src", "images/grey_icon_1.png");
		$('#smart_accelerate h4').css("color", "#555555");
		$('#icon-3').attr("src", "images/grey_icon_3.png");
		$('#sales h4').css("color", "#555555");
		$('#icon-4').attr("src", "images/grey_icon_4.png");
		$('#digital h4').css("color", "#555555");
		
	});
	$("#sales").click(function(){
		$('#icon-2').attr("src", "images/grey_icon_2.png");
		$('#strategic h4').css("color", "#555555");
		$('#icon-1').attr("src", "images/grey_icon_1.png");
		$('#smart_accelerate h4').css("color", "#555555");
		$('#icon-3').attr("src", "images/green_icon_3.png");
		$('#sales h4').css("color", "#8ca726");
		$('#icon-4').attr("src", "images/grey_icon_4.png");
		$('#digital h4').css("color", "#555555");
		
	});
	$("#slide_3_click_here").click(function(){
		$('#icon-2').attr("src", "images/grey_icon_2.png");
		$('#strategic h4').css("color", "#555555");
		$('#icon-1').attr("src", "images/grey_icon_1.png");
		$('#smart_accelerate h4').css("color", "#555555");
		$('#icon-3').attr("src", "images/green_icon_3.png");
		$('#sales h4').css("color", "#8ca726");
		$('#icon-4').attr("src", "images/grey_icon_4.png");
		$('#digital h4').css("color", "#555555");
		
	});
	$("#digital").click(function(){
		$('#icon-2').attr("src", "images/grey_icon_2.png");
		$('#strategic h4').css("color", "#555555");
		$('#icon-1').attr("src", "images/grey_icon_1.png");
		$('#smart_accelerate h4').css("color", "#555555");
		$('#icon-3').attr("src", "images/grey_icon_3.png");
		$('#sales h4').css("color", "#555555");
		$('#icon-4').attr("src", "images/green_icon_4.png");
		$('#digital h4').css("color", "#8ca726");
		
	});
	$("#slide_4_click_here").click(function(){
		$('#icon-2').attr("src", "images/grey_icon_2.png");
		$('#strategic h4').css("color", "#555555");
		$('#icon-1').attr("src", "images/grey_icon_1.png");
		$('#smart_accelerate h4').css("color", "#555555");
		$('#icon-3').attr("src", "images/grey_icon_3.png");
		$('#sales h4').css("color", "#555555");
		$('#icon-4').attr("src", "images/green_icon_4.png");
		$('#digital h4').css("color", "#8ca726");
		
	});

	$("#enterpreneurs").click(function(){
		$("#startups_text, #enterprises_text").each(function(){
			$(this).hide();
		});
		$("#enterpreneurs_text").show();
		$("#startups, #enterprises").each(function(){
			$(this).css("color", "#000000");
		});
		$("#enterpreneurs").css("color", "#8ca726");
	});

	$("#startups").click(function(){
		$("#enterpreneurs_text, #enterprises_text").each(function(){
			$(this).hide();
		});
		$("#startups_text").show();
		$("#enterpreneurs, #enterprises").each(function(){
			$(this).css("color", "#000000");
		});
		$("#startups").css("color", "#8ca726");
	});

	$("#enterprises").click(function(){
		$("#enterpreneurs_text, #startups_text").each(function(){
			$(this).hide();
		});
		$("#enterprises_text").show();
		$("#enterpreneurs, #startups").each(function(){
			$(this).css("color", "#000000");
		});
		$("#enterprises").css("color", "#8ca726");
	});

});

// For all modals
$(document).ready(function(){
	$('.modal').on('hidden.bs.modal', function(){
	    $(this).find('form')[0].reset();
	});

	$('#submit_btn').click(function() {
	   $('#myModal').modal('hide');
	});

	$('#submit_btn1').click(function() {
	   $('#myModal1').modal('hide');
	});
	$('#submit_btn2').click(function() {
	   $('#myModal2').modal('hide');
	});
	$('#submit_btn3').click(function() {
	   $('#myModal3').modal('hide');
	});
	$('#submit_btn4').click(function() {
	   $('#myModal4').modal('hide');
	});
	$('#submit_btn5').click(function() {
	   $('#myModal5').modal('hide');
	});
	$('#submit_btn6').click(function() {
	   $('#myModal6').modal('hide');
	});
});

// Blog - Read More
$(document).ready(function(){
	$(".read-more-text").hide();
	var count1 = 0, count2 = 0, count3 = 0, count4 = 0;

	$("#read_more_btn_1").click(function() {
		count1++;
		if(count1 == 1) {
			$("#read_more_1").slideToggle();
			$(".read_more_arr_1").css({"transform": "rotate(180deg)"});
			$("#read_more_btn_1").html("Read Less &#9650;");
		} else {
			$("#read_more_1").slideToggle();
			$("#read_more_btn_1").html("Read More &#9660;");
			count1 = 0;
		}
	})

	$("#read_more_btn_2").click(function() {
		count2++;
		if(count2 == 1) {
			$("#read_more_2").slideToggle();
			$(".read_more_arr_2").css({"transform": "rotate(180deg)"});
			$("#read_more_btn_2").html("Read Less &#9650;");
		} else {
			$("#read_more_2").slideToggle();
			$("#read_more_btn_2").html("Read More &#9660;");
			count2 = 0;
		}
	})

	$("#read_more_btn_3").click(function() {
		count3++;
		if(count3 == 1) {
			$("#read_more_3").slideToggle();
			$(".read_more_arr_3").css({"transform": "rotate(180deg)"});
			$("#read_more_btn_3").html("Read Less &#9650;");
		} else {
			$("#read_more_3").slideToggle();
			$("#read_more_btn_3").html("Read More &#9660;");
			count3 = 0;
		}
	})

	$("#read_more_btn_4").click(function() {
		count4++;
		if(count4 == 1) {
			$("#read_more_4").slideToggle();
			$(".read_more_arr_4").css({"transform": "rotate(180deg)"});
			$("#read_more_btn_4").html("Read Less &#9650;");
		} else {
			$("#read_more_4").slideToggle();
			$("#read_more_btn_4").html("Read More &#9660;");
			count4 = 0;
		}
	})
});

// Go to Top Arrow click
$(document).ready(function(){
	$('#myBtn').each(function(){
	    $(this).click(function(){ 
	        $('html,body').animate({ scrollTop: 0 }, 'slow');
	        return false; 
	    });
	});
});

//BLOG - Restore all the divs
function restore_my_div(){
   	nameDivs = document.getElementsByClassName("search_text");
   	for (var j = 0, divsLen = nameDivs.length; j < divsLen; j++) {
	   	nameDivs[j].style.display = "block";
	}
}

//BLOG - Search
function find_my_div(e) {
    //For All Post
    if(e.id == 'allSelect'){
	    var str_needle = document.getElementById("allSelect").value;
    }
    //For Input Search
    else{
    	var str_needle = document.getElementById("textSearch").value;
    }

    if(str_needle == "all") {
	    //Restoring Divs
	    nameDivs = document.getElementsByClassName("search_text");
	    for (var j = 0, divsLen = nameDivs.length; j < divsLen; j++) {
	        nameDivs[j].style.display = "block";
	    }
	    //Sorting Divs according to data index
	    $('.date_search_class').each(function(){
	        var $this = $(this);
	        $this.append($this.find('.search_text').get().sort(function(a, b) {
	            return $(a).data('index') - $(b).data('index');
	        }));
	    });
    } else {
    	str_needle = str_needle.toUpperCase();
    	var searchStrings = str_needle.split(/\W/);
	    for (var i = 0, len = searchStrings.length; i < len; i++) {
	        var currentSearch = searchStrings[i].toUpperCase();
	        if (currentSearch !== "") {
	            nameDivs = document.getElementsByClassName("search_text");
	            div_id_s = $('.search_text').attr('id');
	            for (var j = 0, divsLen = nameDivs.length; j < divsLen; j++) {
	                if (nameDivs[j].textContent.toUpperCase().indexOf(currentSearch) !== -1) {
	                    nameDivs[j].style.display = "block";
	                }
	                else {
	                  	nameDivs[j].style.display = "none";
	                }
	            }
	        }
	    }
	}
}
