// ==UserScript==
// @name        IMDb
// @namespace   IMDb
// @description IMDb space-saving
// @updateURL https://github.com/juneyourtech/GM_IMDb/raw/master/IMDb.user.js
// @include     *.imdb.com/*
// @version     1.0.0.1
// @grant       GM_addStyle
// ==/UserScript==

GM_addStyle("HTML {width:auto; min-width:320px; max-width:1008px; margin-left:auto; margin-right:auto;}")
//original: min-width:1008px

GM_addStyle("HTML > BODY#styleguide-v2, HTML > BODY#styleguide-v2 #wrapper {width:auto; min-width:320px;}")
//original: min-width:1008px

GM_addStyle("DIV#root {width:auto; min-width:320px; max-width:1008px;}") //width:1008px

//NAVBAR
GM_addStyle("DIV#nb20 {background-repeat:repeat;}") //overflow-x:auto;

GM_addStyle("DIV#navbar {width:auto; position:relative; height:auto; min-height:83px;}")
//original: width:auto; min-width:320px; max-width:1008px;

GM_addStyle("DIV#navbar #home_img_holder {position:relative; float:left; display:inline-block;}")

GM_addStyle("A#home_img {display:bock; position:sticky;}")

//FORM
GM_addStyle("DIV#navbar #navbar-form {position:relative; display:inline-block;}") //float:left;  margin-right:248px;

//search bar
GM_addStyle("DIV#nb_search {width:auto; max-width:670px; margin:0px;}")

//GM_addStyle("DIV#navbar input {width:auto; min-width:200px; max-width:419px; margin:0px;}")

GM_addStyle("DIV#navbar div.quicksearch_dropdown_wrapper {display:inline-block; position:inherit; float:right;}") //width:auto;;

GM_addStyle("DIV#navbar #megaMenu {position:relative; clear:both; display:inline-block;}") //position:initial;float:left;

GM_addStyle("DIV#navbar #megaMenu > UL#consumer_main_nav {position:initial; left:0px;}") //position:relative;float:left;

GM_addStyle("DIV#nb_extra {position:absolute; top:0px; right:0px;}") //position:relative; float:right;top:0px  top:-48px; margin-left:35px;

GM_addStyle("DIV#navbar:before {content:\'---\'; display:block; margin-right:0px; font-size:0px; height:25px; width:248px; float:right;}") //DIV#nb_extra:before  background-color:Silver;

GM_addStyle("DIV#nb_personal {display:inline-block; position:relative; clear:both; width:151px; margin-right:0px;}") //float:right; top:0px;

GM_addStyle("DIV#nb_personal UL#consumer_user_nav {position:initial;}") //

//CONTENT
GM_addStyle("DIV#tn15content > div.filmo {width:auto;}") //min-width:320px; max-width:500px;

//BOARD
GM_addStyle("DIV.boards-v2 #lhs {width:auto; max-width:790px; min-width:240px;}")

//COMMENTS
GM_addStyle("DIV.board .comment {overflow-y:hidden;}")

GM_addStyle("DIV.board.reply .actions, DIV.board.reply TEXTAREA, DIV.board.reply INPUT.title {margin-left:0px; width:auto; min-width:320px; max-width:660px;}")

GM_addStyle("@media only screen and (max-width:685px) {DIV#content-1 #main {margin-left:0px;}}") //

//BOTTOM
GM_addStyle("DIV#bottom_ad_wrapper {width:auto; min-width:320px; max-width:1008px;}")
