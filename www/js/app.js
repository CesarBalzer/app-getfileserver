// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon: true,
    precompileTemplates: true,
    swipeBackPage: false,
    swipeBackPageThreshold: 1,
    swipePanel: "left",
    swipePanelCloseOpposite: true,
    pushState: true,
    pushStateRoot: undefined,
    pushStateNoAnimation: false,
    pushStateSeparator: '#!/',
    template7Pages: true
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
$$(document).on('pageInit', function (e) {
    routes(e.detail.page);
});

function routes(page) {
    if (page.name === 'video1') {
        if (page.query.video360) {
            mainView.loadPage('video1.html' + "?nome=" + page.query.video360);
        }
    }
}

//obj = JSON && JSON.parse('dpdb.json') || $.parseJSON('dpdb.json');
//$.getJSON("dpdb.json", function(json) {
//    
// });


// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

$(document).on("click", ".external", function (evt) {
    //var url = $(this).attr("href");
    //window.open(url, "_blank");
});




$(document).on("click", "#conectar", function (evt) {
//$("#conectar").click(function () {

//    var fileTransfer = new FileTransfer();
//    var uri = encodeURI("http://192.168.1.12/foodtruck4u/assets/chrome.webm");
//    var fileURL = "///storage/emulated/extSdCard/vrbalzer/file.webm";
//    fileTransfer.download(
//            uri, fileURL, function (entry) {
//                console.log("download complete: " + entry.toURL());
//            },
//            function (error) {
//                console.log("download error source " + error.source);
//                console.log("download error target " + error.target);
//                console.log("download error code" + error.code);
//            },
//            false, {
//                headers: {
//                    "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
//                }
//            }
//    );
});

