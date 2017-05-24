// function loadData() {
// 	var $body = $('body');
//     var $wikiElem = $('#wikipedia-links');
    
    // clear out old data before new request
    // $wikiElem.text("");

    // load Wikipedia articles via AJAX request and JSON-P to get round CORS
    // var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json';

    // var wikiRequestTimeout = setTimeout(function(){
    //     $wikiElem.text("failed to get Wikipedia resources");
    // }, 8000);

    // $.ajax({
    //     url: wikiUrl,
    //     dataType: "jsonp",
        //jsonp: "callback"; // don't use this?!
//         success: function(response){
//             var articleList = response[1];
//             for (var i = 0; i < articleList.length; i++){
//                 articleStr = articleList[i];
//                 var url = 'http://en.wikipedia.org/wiki/' + articleStr;
//                 $wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');
//             };

//             clearTimeout(wikiRequestTimeout);
//         }
//     })


//     return false;
// };

// $('#form-container').submit(loadData);

$(document).ready(function(){

    $.ajax({
        type: "GET",
        // url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0+1&page=The_Lanes&callback=?",
        url: "http://en.wikipedia.org/w/api.php?action=parse&page=Brighton_Wheel&section=0&prop=text&format=json&callback=?",
        // url: "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json",
        // url: "http://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=Stack%20Overflow",
        // url: "http://en.wikipedia.org/w/api.php?action=parse&page=google&prop=text&format=json&callback=?"
        contentType: "application/json; charset=utf-8",
        async: true,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {

            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
            $('#article').html($(blurb).find('p'));

        },
        error: function (errorMessage) {
        }
    });
});

// $.ajax( {
//     url: remoteUrlWithOrigin,
//     data: queryData,
//     dataType: 'json',
//     type: 'POST',
//     headers: { 'Api-User-Agent': 'Example/1.0' },
//     success: function(data) {
//        // do something with data
//     }
// } );