Puzzle.Router.map(function(){
        this.route("book");

        });

Puzzle.IndexRoute = Ember.Route.extend({
    setupController: function(controller) {
        controller.set("booksHeminway",this.store.find("book",{country:"gb",term: "heminway",media:"ebook",limit: "10"}));
        controller.set("booksDickens",this.store.find("book",{country:"gb",term: "dickens",media:"ebook",limit: "10"}));
        controller.set("booksShakespeare",this.store.find("book",{country:"gb",term: "shakespeare",media:"ebook",limit: "10"}));
    }
});
