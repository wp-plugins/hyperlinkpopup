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

		var pop_frame = $("<object id='pop_frame' data='' type='text/html'></object>");
		var style_frame = {
			border:'none'
		}
		pop_frame.css(style_frame);

		dialog.append(pop_frame);
		$('body').append(dialog);

		var win_ht = $(window).height();
		var win_wd = $(window).width();

		var pop_ht = parseInt(3*win_ht/4)-70;
		var pop_wd = parseInt(3*win_wd/4)-70;
		
		$("#dialog").dialog( dialog_options );
		$('#dialog').dialog({minHeight:pop_ht, minWidth:pop_wd});

		$('#pop_frame').css('height',pop_ht+'px');
		$('#pop_frame').css('width',pop_wd+'px');

		var src = "wp-content/plugins/hyperlinkPopup2/openthis.html";
		$('a[rel*=pop]').live('click',function(e){
			e.preventDefault();
			pop_src = $(this).attr('href');
			title = $(this).attr('title');
			if(title.length == 0){
				title = pop_src;
			}
			pop_frame.attr('data',src+'?url='+pop_src+'&size='+pop_ht+','+pop_wd);
			$('#dialog').dialog('open');
			$('#dialog').dialog('option','title',title);
			return false;
		});
		
		$('#dialog').dialog({
			close:function(event,ui){
			pop_src='';
				pop_frame.attr('data',pop_src);
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