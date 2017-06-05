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

// var areas = [
//     {
//         name: 'Pavilion',
//         wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=Royal_Pavilion&section=0&prop=text&format=json&callback=?"
//     },
//     {
//         name: 'The Palace Pier',
//         wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=Brighton_Palace_Pier&section=0&prop=text&format=json&callback=?"
//     },
//     {
//         name: 'The West Pier',
//         wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=West_Pier&section=0&prop=text&format=json&callback=?"
//     },
//     {
//         name: 'The i360',
//         wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=British_Airways_i360&section=0&prop=text&format=json&callback=?"
//     },
//     {
//         name: 'The Brighton Wheel',
//         wiki: "http://en.wikipedia.org/w/api.php?action=parse&page=Brighton_Wheel&section=0&prop=text&format=json&callback=?"
//     }
// ],



$(document).ready(function(){

    $.ajax({
        type: "GET",
        url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=The_Lanes&callback=?",
        // url: areas.wiki,
        // url: "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json",
        // url: "http://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=Stack%20Overflow",
        // url: "http://en.wikipedia.org/w/api.php?action=parse&page=google&prop=text&format=json&callback=?"
        contentType: "application/json; charset=utf-8",
        async: true,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {

            var markup = data.parse.text["*"];
            console.log(data);
            var blurb = $('<div></div>').html(markup);
            $('#article').html($(blurb).find('p'));


        },
        error: function (errorMessage) {
        }
    });
});



// // load Wikipedia articles via AJAX request and JSON-P to get round CORS
//     var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + city + '&format=json&callback=wikiCallback';

//     // var wikiRequestTimeout = setTimeout(function(){
//     //     $wikiElem.text("failed to get Wikipedia resources");
//     // }, 8000);

//     $.ajax({
//         url: wikiUrl,
//         dataType: "jsonp",
//         //jsonp: "callback";
//         success: function(response){
//             var articleList = response[1];
//             for (var i = 0; i < articleList.length; i++){
//                 articleStr = articleList[i];
//                 var url = 'http://en.wikipedia.org/wiki/' + articleStr;
//                 $wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');
//             };

//         //     clearTimeout(wikiRequestTimeout);
//         // }
//     })


//     return false;
// };
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