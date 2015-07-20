var attr = DS.attr;

Puzzle.Book = DS.Model.extend({
   trackName: attr("string"),
   description: attr("string"),
   formattedPrice: attr("string"),
   trackViewUrl: attr("string")
});

Puzzle.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'https://itunes.apple.com',
  namespace: 'search',
  pathForType: function(type) {
    return "";
  },

  ajaxOptions: function(url, type, options) {
        var hash = this._super(url, type, options);
        hash.dataType = "jsonp";
        return hash;
  }
});
 
Puzzle.ApplicationSerializer = DS.RESTSerializer.extend({

  primaryKey: 'trackId',   

  extractArray: function(store, type, payload) {
        var books = payload.results;
        payload = {'books': books};
        return this._super(store, type, payload);
   },
   
   normalizeHash: {    
    books: function(hash) {
      var book = {};
      book.trackName = hash.trackName;
      book.description = hash.description;      
      book.formattedPrice = hash.formattedPrice;
      book.trackViewUrl = hash.trackViewUrl;
      return book;
    }
  }
   
});
