$(document).ready(function() {
    $("time.timeago").timeago();
	$('body').on('keypress', '#s', function(e){
		console.log("AHAH");
    	var p = e.which;
    	if(p==13){
    		console.log("HH");
        	window.location.href="/search/?keyword="+$(this).val();
    	}
 	});
    MIDI.loadPlugin({
        soundfontUrl: "/media/soundfont/",
        onsuccess: function() {
            player = MIDI.player;
            player.timeWarp = 1;
        }});
 });
