// To get the relevant info use a URL made up something like this (example accesses: MainPage)
'https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json'
'titles=The_Lanes|North_Laine|Royal_Pavilion'
// Request a load of pages (up to 50) in one go for maximum efficiency going back and forth.
// %20Page has something to do with displaying whitespace
// To identify your client Using jQuery - include something like this
// Info on query types: https://www.mediawiki.org/wiki/API:Query

$.ajax( {
    url: remoteUrlWithOrigin,
    data: queryData,
    dataType: 'json',
    type: 'POST',
    headers: { 'Api-User-Agent': 'Example/1.0' },
    success: function(data) {
       // do something with data
    }
} );

// Your cliemt will probably need to authenticate via OAuth: https://www.mediawiki.org/wiki/OAuth/For_Developers

// EMBEDDING WIKIPEDIA ARTICLES
// INCLUDE THIS: <script src="js/wiki-embed.min.js"></script>
// WHERE YOU WANT TO USE IT USE THE EMBED CLASS: <div class="wiki-embed" data-title="stuff">Stuff goes here</div>

// TO FIND OUT PAGEID https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page
					  https://en.wikipedia.org/w/api.php?action=query&titles=The_Lanes%20Page