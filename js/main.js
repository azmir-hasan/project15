
$(document).ready(function() {
			// grab the initial top offset of the navigation 
		   	var stickyNavTop = $('.nav').offset().top;
		   	
		   	// our function that decides weather the navigation bar should have "fixed" css position or not.
		   	var stickyNav = function(){
			    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
			         
			    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
			    // otherwise change it back to relative
			    if (scrollTop > stickyNavTop) { 
			        $('.nav').addClass('sticky');
			    } else {
			        $('.nav').removeClass('sticky'); 
			    }
			};

			stickyNav();
			// and run it again every time you scroll
			$(window).scroll(function() {
				stickyNav();
			});
		});


function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


$(".customer").owlCarousel({
         items:5,
         autoplay:true,
         loop:true,
         dots:true,
         
         
     });


new WOW().init();
$('#nav').onePageNav();



$(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 100) {
	    $(".navbar").css({"background-color": "white", "transition": ".7s "});
	  }

	  else{
		  $(".navbar").css("background" , "transparent");  	
	  }
  })









$(".form-submit-btn").click(function(){
  $(".success-message").addClass("active-success");
});


/*---------------------------------------------*
         * SCROLL TO TOP - ALL VIDEOS PAGE
         ---------------------------------------------*/


        jQuery("#scrollTop").click(function () {
                jQuery("body,html").animate({
                    scrollTop: 0
                }, 600);
            });
            jQuery(window).scroll(function () {
                if (jQuery(window).scrollTop() > 250) {
                    jQuery("#scrollTop").addClass("visible");
                } else {
                    jQuery("#scrollTop").removeClass("visible");
                }
                
            
                
               
               
            });