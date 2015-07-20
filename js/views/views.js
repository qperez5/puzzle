Puzzle.IndexView = Ember.View.extend({
	templateName: "index",
	didInsertElement: function(){
		$("#tabs").tabs();
	}
});
