console.log('my-note app.js');

$(function () {
    if(localStorage.getItem('text')) {
        $('#memo').val(localStorage.getItem('text'));
    }
});

$('.btn-newnote').on("click", function(){
    console.log("new note");
    localStorage.clear();
    location.reload();
});

$('.btn-savenote').on("click", function(){
    console.log("savenote");
    var text = $('#memo').val();
    localStorage.setItem('text',text);
});

$('.btn-about').on("click", function(){
    console.log("about");
});

$('.btn-fullscreen').on("click", function(){
    console.log("fullscreen");
    if (screenfull.enabled) {
		screenfull.request();
	}
});

$('.btn-notedownload').on("click", function(){
    console.log("notedownload");
    var blob = new Blob([localStorage.getItem('text')], {type: "text/plain;charset=utf-8"});
saveAs(blob, "MyNote.txt");
});
