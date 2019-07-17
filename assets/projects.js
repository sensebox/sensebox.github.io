(function($){
	$(document).ready(function(){
		var selectedTags = [];
		$(document).on('click','.tag-filter',function(){
			if( $(this).hasClass('all')){
				selectedTags = [];
				$('span.tag-filter').removeClass("label-ticked");
				//$(this).addClass("label-ticked");
				$('.project-item').showAll();
			}else{
				if($(this).hasClass("label-ticked")){
					console.log("remove class");
					selectedTags.removeTag( $(this).data('tag') );
					$(this).removeClass("label-ticked");
				}
				else{
					selectedTags.addTag( $(this).data('tag') );
					$(this).addClass("label-ticked");
				}

				$('.project-item').filterTags( selectedTags );
			}
		});
	});

	Array.prototype.addTag = function(tag) {
		if(this.indexOf(tag) === -1) this.push(tag);
	}

	Array.prototype.removeTag = function(tag) {
		var tagIndex = this.indexOf(tag);
		this.splice(tagIndex,1);
	}

	$.fn.extend({
	  filterTags: function(tagNames) {
			if(tagNames.length == 0) return this.showAll();
			console.log(this);
	    return this.each(function() {
				var itemTagArray = JSON.parse( $(this).attr('data-tags') );
				
				var unfound = $( tagNames ).filter( itemTagArray ).get();
	    	//console.log("unfound", unfound, itemTagArray.length);
	    	if( unfound.length != tagNames.length ){
			//if($.inArray(tagNames, itemTagArray) === -1){
				$(this).addClass('not-show');
			}else{
				$(this).removeClass('not-show');
			}
	    });
	  },
	  showAll: function(){
	  	return this.each(function() {
			if($(this).hasClass('not-show')){
				$(this).removeClass('not-show');
			}
	    });
	  }
	});
})(jQuery)
