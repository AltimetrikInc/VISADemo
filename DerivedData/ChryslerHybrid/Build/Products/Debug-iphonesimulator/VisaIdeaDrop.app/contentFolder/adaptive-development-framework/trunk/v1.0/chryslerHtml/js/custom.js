$( ".handle" ).click(function() {
	$( ".slide-show" ).animate({
		top: 0
	}, {
	  duration: 1000,
	  step: function( now, fx ){
		  $( ".slide-show:gt(0)" ).css( "top", now ),
		  $( ".handle" ).fadeOut(50);
	  }
	});
	
});
$( ".s-close a" ).click(function() {
	$( ".slide-show" ).animate({
		top:-290
	}, {
	  duration: 1000,
	  step: function( now, fx ){
		  $( ".slide-show:gt(0)" ).css( "top", now ),
		  $( ".handle" ).fadeIn(2000);
	  }
	});
});


/*
$( ".handle-1" ).click(function() {
	$( ".slide-panel" ).animate({
		left:0
	}, {
	  duration: 1000,
	  step: function( now, fx ){
		  $( ".slide-panel:gt(0)" ).css( "top", now );
		  $( ".handle-1" ).fadeOut(50);
	  }
	});
	
});
$( ".s-close-1" ).click(function() {
	$( ".slide-panel" ).animate({
		left:-260
	}, {
	  duration: 1000,
	  step: function( now, fx ){
		  $( ".slide-panel:gt(0)" ).css( "top", now );
		  $( ".handle-1" ).fadeIn(2000);
	  }
	});
});


$("#handle-1").click(function(){
  $( ".slide-panel" ).animate({
		left:0
	},
	{
	  duration: 1000,
	  step: function( now, fx ){
		  $( ".slide-panel:gt(0)" ).css( "top", now );
		  $( "#handle-1" ).fadeOut(0);
	  }
		
	});
});

$("#hd").click(function(){
 $( ".slide-panel" ).animate({
		left:-320
	},
	{
	  duration: 1000,
	  step: function( now, fx ){
		  $( ".slide-panel:gt(0)" ).css( "top", now );
		  //$( ".handle-1" ).fadeIn(2000);
		  $( "#handle-1" ).animate({
		left:30
	});
	  }
	  
		
	});
});

*/

$( "#handle-1" ).click(function() {
	$( ".slide-panel" ).animate({
		left: 0
	}, {
	  duration: 1000,
	  step: function( now, fx ){
		  $( ".slide-panel:gt(0)" ).css( "top", now ),
		  $( "#handle-1" ).fadeOut(10);
	  }
	});
	
});
$( "#hd" ).click(function() {
	$( ".slide-panel" ).animate({
		left:-310
	}, {
	  duration: 1000,
	  step: function( now, fx ){
		  $( ".slide-panel:gt(0)" ).css( "top", now ),
		  $( "#handle-1" ).fadeIn(2700);
	  }
	});
});