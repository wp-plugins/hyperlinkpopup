(function( $ ){
  $.fn.linkspopup = function() {
		var dialog = $("<div id='dialog' title=''></div>");
		var dialog_options = {
				bgiframe:true, 
				autoOpen:false, 
				modal:true,
				title:'title',
				resizable:false,
				draggable:false
		}

		var pop_frame = $("<iframe id='pop_frame' frameborder='0'></iframe>");
		var style_frame = {
			border:'none'	
		}
		pop_frame.css(style_frame);

		dialog.append(pop_frame);
		$('body').append(dialog);

		var loading_div = $("<div id='loading_div'></div>");
		var loading_img = new Image();
		loading_img.src = "http://img227.imageshack.us/img227/6100/pageloading.gif";
		var style_img = {
			position:'fixed',
			left:'50%',
			marginTop:'-52px',
			marginLeft:'-95px',
			display:'none'
		}
		loading_div.append(loading_img);
		loading_div.css(style_img);
		$('body').append(loading_div);
		
		var win_ht = $(window).height();
		var win_wd = $(window).width();

		var pop_ht = 3*win_ht/4;
		var pop_wd = 3*win_wd/4;
		
		$("#dialog").dialog( dialog_options );
		$('#dialog').dialog({minHeight:pop_ht, minWidth:pop_wd});

		$('#pop_frame').css('height',pop_ht-35+'px');
		$('#pop_frame').css('width',pop_wd-45+'px');

		var pop_src='';
		var title = '';
		pop_frame.load(function(e){
			if(pop_src.length>0){
				$('#dialog').dialog('open');
				$('#dialog').dialog({title:title});
			}
			loading_div.hide();
		});

		$('a[rel*=pop]').live('click',function(){
			pop_src = $(this).attr('href');
			title = $(this).attr('title');
			if(title.length == 0){
				title = pop_src;
			}
			pop_frame.attr('src',pop_src);
			loading_div.css('top',$(window).height()/2+'px');
			loading_div.show();
			return false;
		});
		
		$('#dialog').dialog({
			close:function(event,ui){
			pop_src='';
				pop_frame.attr('src',pop_src);
			}
		});
  };
})( jQuery );

jQuery(document).ready(function(){
	jQuery(document).linkspopup();
});