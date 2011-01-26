(function( $ ){
  $.fn.linkspopup = function() {
		var dialog = $("<div id='dialog' title=''></div>");
		var dialog_options = {
				bgiframe:true, 
				autoOpen:false, 
				modal:true,
				title:'title',
				resizable:false,
				draggable:false,
				background:'transparent url(http://img227.imageshack.us/img227/6100/pageloading.gif) no-repeat'
		}

		/*
		var pop_frame = $("<object id='pop_frame' data='' type='text/html'></object>");
		var style_frame = {
			border:'none'
		}
		pop_frame.css(style_frame);
		//dialog.append(pop_frame);
		*/
		$('body').append(dialog);

		var win_ht = $(window).height();
		var win_wd = $(window).width();

		var pop_ht = 3*win_ht/4;
		var pop_wd = 3*win_wd/4;
		
		$("#dialog").dialog( dialog_options );
		$('#dialog').dialog({minHeight:pop_ht, minWidth:pop_wd});

		/*
		$('#pop_frame').css('height',pop_ht-35+'px');
		$('#pop_frame').css('width',pop_wd-45+'px');
		*/

		$('a[rel*=pop]').live('click',function(e){
			e.preventDefault();
			pop_src = $(this).attr('href');
			title = $(this).attr('title');
			if(title.length == 0){
				title = pop_src;
			}
		    var obj = document.createElement("object");
		    obj.data = pop_src;
		    obj.type = "text/html";
		    obj.id = "obj";
		    obj.width = pop_wd-45+'px';
		    obj.height = pop_ht-35+'px';
		    document.getElementById('dialog').appendChild(obj);
			$('#dialog').dialog('open');
			$('#dialog').dialog('option','title',title);
			return false;
		});
		
		$('#dialog').dialog({
			close:function(event,ui){
				/*
				pop_src='';
				pop_frame.attr('data',pop_src);
				*/
				document.getElementById('dialog').removeChild( document.getElementById('obj') );
			}
		});
  };
})( jQuery );

jQuery(document).ready(function(){
	if(jQuery.browser.msie){
		jQuery('a[rel*=pop]').attr('target','_blank');
	}else{
		jQuery(document).linkspopup();
	}
});