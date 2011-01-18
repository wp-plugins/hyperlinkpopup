<?php
/* 
Plugin Name: hyperlink popup
Pligin Description: open a hyperlink in a popup overlaying the parent page 
Version: 1.0 
Author: Satish Voddi 
Description: Opens external hyperlinks in a popup, without losing focus from parent page 
*/

add_action('wp_head', 'addHeaderCode');
function addHeaderCode() {
	echo '<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>' . "\n";   
	echo '<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.8/jquery-ui.min.js"></script>' . "\n";
	echo "<link href='http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css' rel='stylesheet' type='text/css'/>"."\n";  
	echo '<script type="text/javascript" src="'.get_bloginfo('wpurl').'/wp-content/plugins/HyperlinkPopup/js/linkspopup.js"></script>' . "\n";   
}
?>