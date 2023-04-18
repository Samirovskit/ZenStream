<!--- ♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️ GLOBAL VARIABLES ♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️ --->
const $                      = document.querySelector.bind(document)
const $$                     = document.querySelectorAll.bind(document)
const showlogo4url           = "showlogo"//Global_Url Uniqueurl Yoururl
const showlogo4channels      = "showlogo"
const showlogo4moviesseries  = "showlogo"
const showuserlogo           = "showlogo"


var maxscreen      = 20;
var maxSubbuttons  = 50;
let htmlplayer =`
<div class="logo hide">
<button class="icon"><svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
<text class="FA" x="50%" y="50%">&#xf544;</text></svg></button>  
<button class="elem"><svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
<text x="50%" y="50%">ZenStream</text></svg></button></div>
<div class="Player-video" id="">
<video class="video-js plyr mejs__player" id=""
rossorigin autoplay controls muted playsinline webkit-playsinline data-mejsoptions preload       poster="https://s.cdpn.io/6035/vp_poster.jpg">
<source src=""> 
<track kind="captions" src="" srclang="" label="" default> 
</video></div><!--⚠️End_STCMCA-Player-video1-->
  
<!--⭕embed-->
<div class="Player-embed" id="">
<iframe class="ST-iframe-embed" id=""
sandbox = "allow-form allow-pointer-loc allow-same-origi allow-scripts allow-popup"
allowfullscree allowtransparency overflow ="hidden" allow="autoplay" autoplay="1" mute="1" width="100" height="100"  frameborder ="0" src=""></iframe></div>` 


<!--- ♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️ FUNCTIONS ♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️ --->
                               <!-- 💚💚💚💚💚💚 CREATE SPANS 💚💚💚💚💚💚 -->
function CreateSpans(Lists, where, how)   {Lists.forEach( (List, index) => { 
const SpanClass       = List.ASpan_class==null  ? Lists[0].GSpan_class : List.ASpan_class+" "+Lists[0].GSpan_class;
const SpanId          = Lists[0].Span_idroot==null?``: Lists[0]['Span_idroot']+index;
const SpanStream      = List.Stream==null ? `` : List.Stream;
const SpanTarget      = List.Target==null ? `` : List.Target;
const SpanImgsrc      = List.Imgid==null  ? `` : List.Imgid.startsWith("http") ? List.Imgid: "https://drive.google.com/uc?export=view&id="+List.Imgid+"&sz=w300-h300";
const SpanPlayerid    = Lists[0].GBlockplayer_idroot==null?"":Lists[0]['GBlockplayer_idroot']+index;
const SpanTextid      = Lists[0].GBlocktxt_idroot==null?"":Lists[0]['GBlocktxt_idroot']+index;
const SpanDescription = List.description==null ? `` : List.description;


//🏮Buttons
let Buttons='';
for (var m = 1; m <= Lists[0].NrIcon_Elem; m++) { 
const icon_class  = Lists[0]['Gicon'+m+'_class']==null ? List['icon'+m+'_class']==null ?               
                   `hide`:List['icon'+m+'_class']:List['icon'+m+'_class']==null? Lists[0]['Gicon'+m+'_class'] :                         Lists[0]['Gicon'+m+'_class']+" "+List['icon'+m+'_class']             
const icon        = List['icon'+m]==null?"":List['icon'+m];
const icon_switch = List['icon'+m+'_switch']==null?"":List['icon'+m+'_switch'];
 
const elem_class  = Lists[0]['Gelem'+m+'_class']==null?List['elem'+m+'_class']==null?      
                   `hide`:List['elem'+m+'_class']: List['elem'+m+'_class']==null?Lists[0]     
                   ['Gelem'+m+'_class']:Lists[0]['Gelem'+m+'_class']+" "+List['elem'+m+'_class']
const elem        = List['elem'+m]==null?"":List['elem'+m];
  
Buttons+= `<button class="`+icon_class+`"><svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
<text class="FA" x="50%" y="50%">`+icon+`</text><text class="FA" x="50%" y="50%">`+icon_switch+`</text></svg></button>
<button class= "`+elem_class+`">
${List['elem'+m]=="Notext"? List['Notext'+m] :
`<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet"><text x="50%" y="50%">`+elem+`</text></svg>`}
</button>`}
 
 //🏮SubBottons 
let SubButtons='';
if(List.SubButtons==null){}
else{
var SubButtonsdata = List.SubButtons.split("🪷");
for (var k = 0; k < SubButtonsdata.length; k++) {
SubButtons += `<button class="`+SubButtonsdata[k].split("🔲")[0]+" "+SubButtonsdata[k].split("🔲")[1]+` Stream elem toswitch subbutton" Stream="`+SubButtonsdata[k].split("🔲")[2]+"🔲"+SubButtonsdata[k].split("🔲")[3]+"🔲"+SubButtonsdata[k].split("🔲")[4]+`">
<svg class="elem toactivet" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet"><text x="50%" y="50%">`+SubButtonsdata[k].split("🔲")[0]+`</text></svg> 
<!--svg class="icon toactivet" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
<text class="FA" x="50%" y="50%">&#xe132;</text><text class="FA" x="50%" y="50%">&#xf00d;</text> </svg--></button>`}} 
 
 
//🏮Span   
let Box=`
<span class="`+SpanClass+`" id="`+SpanId+`" Stream = "`+SpanStream+`"  Target = "`+SpanTarget+`">

<section class="Image"> <img src= `+SpanImgsrc+`> </section>

<section class="Player" id="`+SpanPlayerid+`">
<div class="Player-video"></div><div class="Player-embed"></div></section> 
  
<section class="Text" id="`+SpanTextid+`">
`+Buttons+` ${Lists[0].Span_idroot=="Screen"?`<button class="elem datascreen uniqueurl hide">
<input class="elem Unique_Url_Input" type="text" placeholder="Unique Url" style="font-size:52%;">
<svg class="icon" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet"><text class="FA" x="50%" y="50%">&#xf0c1;</text></svg></button>`:``}</section> 

<section class="Description">
<button class="description">`+SpanDescription+`</button>
<ul class="buttons"> `+SubButtons+` </ul> </section>
</span>`
document.querySelector(where).insertAdjacentHTML(how, Box)});}



                               <!-- 💚💚💚💚💚💚 RESET CONTAINER 💚💚💚💚💚💚 -->
function resetContainerItems(where, heightFrom, heightMinus, PresentationStyle, classToresize, widthInput) {

const cssObj       = window.getComputedStyle(document.querySelector(where),null)
const minGap       = cssObj.getPropertyValue("gap").replaceAll("px","");
const AspectR      = cssObj.getPropertyValue("aspect-ratio").split("/");
const Ar           = AspectR[0]/AspectR[1]
const maxRows      = cssObj.getPropertyValue("max-height").replaceAll("px","")/10000 
const whereWidth   = document.querySelector(where).offsetWidth
const whereHeight  = heightMinus===""?document.getElementById(heightFrom).offsetHeight: 
          document.getElementById(heightFrom).offsetHeight - document.getElementById(heightMinus).offsetHeight

if(PresentationStyle === "AutoSize"){   
const itemCount    = document.querySelectorAll(classToresize).length
if (!itemCount) return
const actualRatio = whereWidth / whereHeight  
 let best
  for (let rowCount = 1; rowCount <= maxRows; rowCount++) {  
    if (rowCount > itemCount) continue
    const colCount = Math.ceil(itemCount / rowCount)
   
    const ratio = (100 * Ar * colCount) / (100 * rowCount)
    if (!best || Math.abs(ratio - actualRatio) < Math.abs(best.ratio - actualRatio)) {
      best = { rowCount, colCount, ratio }}}  
const result = { rowCount: best.rowCount, colCount: best.colCount }
  if (best.ratio <= actualRatio) {
    result.itemHeight = (whereHeight - (minGap * best.rowCount)) / best.rowCount
    result.itemWidth  = result.itemHeight * Ar } 
 else {
    result.itemWidth  = (whereWidth - (minGap * best.colCount)) / best.colCount
    result.itemHeight = result.itemWidth / Ar }
  
document.querySelector(where).style.setProperty('--width', result.itemWidth + 'px')
document.querySelector(where).style.setProperty('--height', result.itemHeight + 'px')}

 
if(PresentationStyle === "Scroll") { 
document.querySelector(widthInput).addEventListener("input", function() { 
const widthValue = document.querySelector(widthInput).value; 
 
const value      = widthValue > whereWidth ? whereWidth: widthValue;
const heightu    = value / Ar ; 
const itemHeight = heightu > whereHeight? whereHeight  : heightu
const itemWidth  = itemHeight * Ar  
 
document.querySelector(where).style.setProperty('--width', itemWidth + 'px' )
document.querySelector(where).style.setProperty('--height', itemHeight + 'px')})
 
 
const widthValue = document.querySelector(widthInput).value; 
 
const value      = widthValue > whereWidth ? whereWidth: widthValue;
const heightu    = value / Ar ; 
const itemHeight = heightu > whereHeight? whereHeight  : heightu
const itemWidth  = itemHeight * Ar  
 
document.querySelector(where).style.setProperty('--width', itemWidth + 'px' )
document.querySelector(where).style.setProperty('--height', itemHeight + 'px')}}   


                               <!-- 💚💚💚💚💚💚 VIDEO PLAY 💚💚💚💚💚💚 --> 
function videoplayer(playurl, typeurl, trackurl, tracklangue, playerid, playcmd, showlogo){
document.querySelector(playerid).innerHTML = htmlplayer;

 
/* 🟢 VARIABLES */ 
var playername   = "videojs";
var player       = '';
var newplayer    = '';
var newurl       = '';
var newtype      = '';
 
 
/* 🟢 VIDEO AND IFRAME */ 
var targetvideo     = document.querySelector(playerid+" video");
var targetiframe    = document.querySelector(playerid+" iframe");
 
/* 🟢 REGEX https://regex101.com/library */ 
/* YOUTUBE */  
var ytmatch       = String(playurl).match(/^.*(youtu\.be\/|vi?\/|u\/\w\/|embed\/|\?vi?=|\&vi?=)([^#\&\?]*).*/);
var autoplay      = '?autoplay=1';
var related_no    = '&rel=0';
 
/* VIMEO */   
var vimeomatch    = String(playurl).match(/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?/i);
 
/* DAILYMOTION */
var dailymotionmatch    = String(playurl).match(/(?:https?:\/\/)?(?:www\.)?dai\.?ly(motion)?(?:\.com)?\/?.*(?:video|embed)?(?:.*v=|v\/|\/)([a-z0-9]+)/);
  
/* FACEBOOK */  
var facebookmatch    = String(playurl).match(/^http(?:s?):\/\/(?:www\.|web\.|m\.)?facebook\.com\/([A-z0-9\.]+)\/videos(?:\/[0-9A-z].+)?\/(\d+)(?:.+)?$/gm);
  
/* SONDCLOUD */
var scloudmatch   = String(playurl).match(/https?:\/\/(?:w\.|www\.|)(?:soundcloud\.com\/)(?:(?:player\/\?url=https\%3A\/\/api.soundcloud.com\/tracks\/)|)(((\w|-)[^A-z]{7})|([A-Za-z0-9]+(?:[-_][A-Za-z0-9]+)*(?!\/sets(?:\/|$))(?:\/[A-Za-z0-9]+(?:[-_][A-Za-z0-9]+)*){1,2}))/);
 
/* SPOTIFY */
var spotifymatch  = String(playurl).match(/https?:\/\/(?:embed\.|open\.)(?:spotify\.com\/)(?:(album|track|playlist)\/|\?uri=spotify:track:)((\w|-){22})/);

var spotifysymbolmatch  = String(playurl).match(/spotify:(?:(album|track|playlist):|\?uri=spotify:track:)((\w|-){22})/);
  
/* VIDEO */  
var Vrtmpmatch = String(playurl).match(/^rtmp:\/\//);
var Vhlsmatch  = String(playurl).match(/\.m3u8/);//videojs
var Vhlsmatch2 = String(playurl).match(/\=m3u8/);//videojs
var Vmp4match  = String(playurl).match(/\.(mp4|m4p|m4v|mov)/i);//videojs&direct
var Vhdsmatch  = String(playurl).match(/\.f4m/);
var Vdashmatch = String(playurl).match(/\.mpd/);//direct
var Vflvmatch  = String(playurl).match(/\.flv/);
var Vwebmmatch = String(playurl).match(/\.webm/);//videojs&direct
var Voggmatch  = String(playurl).match(/\.(opus|ogv)/i);//videojs&direct
  
/* AUDIO */
var Ampegmatch = String(playurl).match(/\.(mp3|m4a)/i);
var Aaacmatch  = String(playurl).match(/\.aac/);
var Acafmatch  = String(playurl).match(/\.caf/);
var Aflacmatch = String(playurl).match(/\.flac/);
var Awavmatch  = String(playurl).match(/\.wav/);
var Aoggmatch  = String(playurl).match(/\.(ogg|oga)/i);
  
/* 🟢 VIDEO AUDIO TYPE */
newtype = 
Vrtmpmatch ?"rtmp/mp4":
Vhlsmatch  ?"application/x-mpegurl":
Vhlsmatch2 ?"application/x-mpegurl":
Vmp4match  ?"video/mp4":
Vhdsmatch  ?"application/adobe-f4m":
Vdashmatch ?"application/dash+xml":
Vflvmatch  ?"video/flv":
Vwebmmatch ?"video/webm":
Voggmatch  ?"video/ogg":

Ampegmatch ?"audio/mpeg": 
Aaacmatch  ?"audio/aac" :
Acafmatch  ?"audio/x-caf" :
Aflacmatch ?"audio/flac" :
Awavmatch  ?"audio/wav" :
Aoggmatch  ?"audio/ogg": 
typeurl    === "player"? "video/mp4" : "embedurl";
 
/* 🟢 EMBED MANUAL */ 
if(typeurl    === "emurlwithdownload" ||typeurl==="link"){ 

 newurl         =  playurl;  
 newplayer      = "embed";
 $(playerid+" iframe").src=newurl; 
 $(playerid).setAttribute("vidorifr","iframe🩱"+newurl+"🩱"+typeurl+"🩱"+trackurl+"🩱"+tracklangue+"");
 $(""+playcmd+" .datascreen.Play").classList.add("no")
 $(""+playcmd+" .datascreen.Volume").classList.add("no")
 $(""+playcmd+" .datascreen.Downloads").classList.remove("no", "hide") 
 showlogo==="showlogo" ? $(""+playerid+" .logo").classList.remove("hide"): 
                         $(""+playerid+" .logo").classList.add("hide") } 
 
 
 /* 🟢 EMBED MANUAL */ 
else if(typeurl     === "emurl"){ 
 $(""+playcmd+" .datascreen.Play").classList.remove("no")
 $(""+playcmd+" .datascreen.Volume").classList.remove("no")
 $(""+playcmd+" .datascreen.Downloads").classList.add("no")
 showlogo==="showlogo" ? $(""+playerid+" .logo").classList.remove("hide"): 
                         $(""+playerid+" .logo").classList.add("hide")
 
  newurl         =  playurl;  
  newplayer      = "embed";
$(playerid+" iframe").src=newurl; 
$(playerid).setAttribute("vidorifr","iframe🩱"+newurl+"🩱"+typeurl+"🩱"+trackurl+"🩱"+tracklangue+"");}
 
/* 🟢 EMBED AUTOMATICALLY */ 
else if(newtype    === "embedurl"){  
 $(""+playcmd+" .datascreen.Play").classList.remove("no")
 $(""+playcmd+" .datascreen.Volume").classList.remove("no")
 $(""+playcmd+" .datascreen.Downloads").classList.add("no")
 showlogo==="showlogo" ? $(""+playerid+" .logo").classList.remove("hide"): 
                         $(""+playerid+" .logo").classList.add("hide")
 
/* ❌CHECK YOUTUBE URL */
  if (ytmatch) { 
   if(ytmatch && ytmatch[2]) {
  // window.alert("yt");
      var youtube_id  = ytmatch[2];
      newplayer       = "embed";
      newurl          = 'https://www.youtube.com/embed/'+youtube_id+autoplay+related_no;}}  
  
/* ❌CHECK FACEBOOK URL */
  else if(facebookmatch) {
  // window.alert("fb");
      newplayer       = "embed";
      newurl          = "https://www.facebook.com/plugins/video.php?href="+playurl+"&show_text=0&allowfullscreen=false";} 
  
/* ❌CHECK VIMEO URL */
  else if(vimeomatch) {
   //window.alert("vm");
      var vimeo_id    = vimeomatch[1];
      newplayer       = "embed";
      newurl          = "https://vimeo.com/api/v2/video/"+vimeo_id+".json?callback=showThumb";}
  
/* ❌CHECK SCLOUD URL */
  else if(scloudmatch) {
  // window.alert("sd");
      var scloud_id     = scloudmatch[1];
      newplayer         = "embed";
      newurl            = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+scloud_id+ "&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true";}  
   
/* ❌CHECK DAILYMOTION URL */
  else if(dailymotionmatch) { 
   //window.alert("dm");
      var dmid ='';
      if(dailymotionmatch[4] !== undefined) {
             dmid =  dailymotionmatch[4];}
      else{ dmid = dailymotionmatch[2];} 
      newplayer         = "embed";
      newurl            = "https://www.dailymotion.com/embed/video/"+dmid+"";} 
 
 
/* ❌CHECK SPOTIFY URL */
 else if(spotifymatch && spotifysymbolmatch) {
 // window.alert("sp");
      newplayer         = "embed";
      newurl            = "https://open.spotify.com/embed/"+spotifymatch+"/"+spotifysymbolmatch+"";}   
  
  
/* ❌CHECK TYPE URL UNKNOWN*/
  else {  
   //window.alert("un");
      newplayer         = "embed";
      newurl            = playurl;}
  
/* CHANGE IFRAME URL */
$(playerid+" iframe").src=newurl; 
$(playerid).setAttribute("vidorifr","iframe🩱"+newurl+"🩱"+newtype+"🩱"+trackurl+"🩱"+tracklangue+"");} 
 
  
/* 🟢 PLAY WITH PLAYER */ 
  else {  
 $(""+playcmd+" .datascreen.Play").classList.remove("no")
 $(""+playcmd+" .datascreen.Volume").classList.remove("no")
 $(""+playcmd+" .datascreen.Downloads").classList.add("no")
 showlogo==="showlogo" ? $(""+playerid+" .logo").classList.remove("hide"): 
                         $(""+playerid+" .logo").classList.add("hide")
   
   newurl    = playurl;   
   newplayer = playername ==="videojs"||"melement"||"plyr"||"videojs"?    newtype==="application/dash+xml"?"direct":playername:playername;    
   
   /* CHANGE VIDEO URL & TYPE */  
targetvideo.load();
$(""+playerid+" video source").type=newtype; 
$(""+playerid+" video source").src = newurl;
$(""+playerid+" video track").src = trackurl;
$(""+playerid+" video track").label = tracklangue;
$(playerid).setAttribute("vidorifr","video🩱"+newurl+"🩱"+newtype+"🩱"+trackurl+"🩱"+tracklangue+"");}
 
/* 🟢 DEFINE PLAYERS */
 /* 1️⃣ VIDEOJS */
if(newplayer === "videojs"){ 
 
var optionvjs = {
     techOrder: ["youtube","html5", "flash", "dailymotion", "chromecast"],
     errorDisplay   : false, 
     controls       : true,
     height         :'100%',
     poster         :'',      
     playbackRates  : [1, 1.5, 2],    
     preload        : true,    
     fill           : true, 
     fluid          : true,    
     responsive     : true, 
 aspectRatio: '16:9',
     plugins        : {    }};

targetvideo.parentElement.style.display  = 'block'; 
targetiframe.parentElement.style.display = 'none'; 
 
player =  videojs(targetvideo, optionvjs); 
player.load();
player.play();}
 
  /* 2️⃣ PLYR */
else if(newplayer === "plyr"){
 const optionplyr = {
  preload      : true, 
  fullscreen   : {enabled: true,iosNative: true},
  storage      : { enabled: false},  
  controls     : [    
    "play",
    "mute",
    "progress",
    "duration",    
    "volume",
    "fullscreen",
    "captions",
    "settings", 
    "download",  
    "quality", 
    "progress"]};

targetvideo.parentElement.style.display  = 'block'; 
targetiframe.parentElement.style.display = 'none';
 
player = new Plyr("#"+targetvideo.id, optionplyr);
 
player.source = {
   type   :'video',
   sources: [
        {src  : ""+newurl+"",         
         type : ""+newtype+""}],};

player.play();}
 
   
 /* 3️⃣ MEDIAELT */ 
else if(newplayer === "melement"){
 
 const optionmediae = {
  shimScriptAccess         : "always",
  iPadUseNativeControls    : false,
  iPhoneUseNativeControls  : false,
  AndroidUseNativeControls : false,  
  alwaysShowControls       : false,
  videoWidth               : "100%", 
  videoHeight              : "100%",
  defaultAudioWidth        : "100%",
  defaultAudioHeight       : "100px",
  audioWidth               : "100%",
  audioHeight              : "100%",
  loop                     : false,
  audioVolume              : 'vertical',
  videoVolume              : 'vertical',
  hideVolumeOnTouchDevices : false,
  startLanguage            : 'en',
  timeFormat               :'hh:mm:ss',
  features                 : ['playpause','tracks','volume','fullscreen','current','duration','progress']
 };
 
 targetvideo.parentElement.style.display  = 'block'; 
 targetiframe.parentElement.style.display = 'none'; 
 player = new MediaElementPlayer(targetvideo, optionmediae);
 player.play();}
  
 /* 4️⃣ DIRECT */
 else if(newplayer === "direct"){
 targetvideo.parentElement.style.display  = 'block'; 
 targetiframe.parentElement.style.display = 'none';
 targetvideo.setAttribute("controls","controls")
 player = targetvideo;
 player.load();
 player.play();}
 
 /* 5️⃣ EMBED */
else if(newplayer === "embed"){
targetvideo.parentElement.style.display   = 'none'; 
targetiframe.parentElement.style.display  = 'block';}}


                                 <!-- 💚💚💚💚💚💚 REPEAT 💚💚💚💚💚💚 -->
function Repeat(Elem1, Elem2, Class, timing){
let i = 1; var repeater = () => {
   setTimeout(function(){
    $$(Elem1).forEach((el1) => {el1.classList.remove(Class);});     
    $$(Elem1)[i].classList.add(Class); 
    
    if(Elem2===""){}
    else{
    $$(Elem2).forEach((el2) =>{el2.classList.remove(Class);}); 
    $$(Elem2)[i].classList.add(Class);} 
    i++;

       if($$(Elem1).length == i){i = 0;}
       if(i >= $$(Elem1).length){return;}
       repeater();}, timing);}
       repeater();}



<!--- ♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️ CREATE ELEMENTS ♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️ --->
                             <!-- 💚💚💚💚💚💚 INCREASE VIEWS 💚💚💚💚💚💚 -->
let IVSpan = [
{"GSpan_class":"IVST",  "NrIcon_Elem":"3", 
"Gicon1_class":"icon", "Gelem1_class":"elem", "Gicon2_class":"icon toactivet", "Gelem2_class":"elem", "Gicon3_class":"icon toactivet",
 
"icon1":"", "elem1":"Up Views", "icon2":"&#xf509;", "elem2":"زيادة المشاهدات", "icon3":"&#xe4b7;", "ASpan_class":""},]
CreateSpans(IVSpan, "#TCSH-IV-Button", "beforeend");

                             <!-- 💚💚💚💚💚💚 FILTER SIZE 💚💚💚💚💚💚 -->
let FSizeSpans = [
{"GSpan_class":"FSize",  "NrIcon_Elem":"3", 
"Gicon1_class":"icon", "Gelem1_class":"elem", "Gicon2_class":"icon",  "Gelem2_class":"elem", 
 
"icon1":"&#xf0b0;", "icon1_switch":"&#xf00d;", "elem1":"Size", "icon1_class":"toswitch", "icon2":"", "elem2_class":"hide",  "ASpan_class":"FSizeST"},
{"icon1":"&#xf544;", "elem1":"Auto_Size", "icon1_class":"toactivet", "icon2":"", "elem2_class":"hide",  "ASpan_class":"FSizeDD AutoSize hide active"},
{"icon1":"&#xf1de;", "elem1":"Manual_Size", "icon1_class":"toactivet", "icon2":"", "icon2_class":"hide", "elem2_class":"hide input", "elem2":"Notext", "Notext2": '<input type="range" value="1000" min="200" max="3000" step="20">', "icon3":"", "icon3_class":"icon", "ASpan_class":"FSizeDD Scroll hide"},]
CreateSpans(FSizeSpans, "#TCSH-Filter-Button ul.FilterSize", "beforeend"); 

                             <!-- 💚💚💚💚💚💚 ADD SCREENS 💚💚💚💚💚💚 -->
let AddScreendata = [
{"GSpan_class":"",  "NrIcon_Elem":"3", 
"Gicon1_class":"icon Minus AddScreen click", "Gelem1_class":"elem", "Gicon2_class":"icon Plus AddScreen click", 
 
"icon1":"&#xf146;", "elem1":"Notext", "Notext1": '<input class="AddScreen input" type="text" placeholder="max 20">', "icon2":"&#xf0fe;", "ASpan_class":""},]
CreateSpans(AddScreendata, "#TCSH-Filter-Button ul.AddScreen", "beforeend"); 


                             <!-- 💚💚💚💚💚💚 SCREENS 💚💚💚💚💚💚 -->
let ScreensData = [
{"GSpan_class":"Screen",  "NrIcon_Elem":"6", "Span_idroot":"Screen", "GBlocktxt_idroot":"Data", "GBlockplayer_idroot":"Player", 
"Gicon1_class":"icon datascreen original Play toswitch",
"Gicon2_class":"icon datascreen original Volume toswitch", 
"Gelem2_class":"elem datascreen original Servers", 
"Gelem3_class":"elem datascreen original Tracks",
"Gelem4_class":"elem datascreen original Downloads hide",
"Gicon5_class":"icon datascreen original Expand toswitch", 
"Gicon6_class":"icon datascreen original Checkbox", 
"Gelem1_class":"elem datascreen close server hide", 
"Gelem5_class":"elem datascreen close track hide", 
"Gelem6_class":"elem datascreen close download hide",

 
"icon1":"&#xf04c;", "icon1_switch":"&#xf04b;", "elem1":"close", "icon2":"&#xf6a9;", "icon2_switch":"&#xf028;", "elem2":"Servers",  "elem3":"Tracks", "elem4":"Downloads", "icon5":"&#xf31e;", "icon5_switch":"&#xf78c;", "elem5":"close", "icon6":"&#xf011;", "elem6":"close", "ASpan_class":"Destination"},]

for (var k = 1; k < maxscreen; k++) {
ScreensData.push(
{"icon1":"&#xf04c;", "icon1_switch":"&#xf04b;","elem1":"close", "icon2":"&#xf6a9;", "icon2_switch":"&#xf028;", "elem2":"Servers",  "elem3":"Tracks", "elem4":"Downloads", "icon5":"&#xf31e;", "icon5_switch":"&#xf78c;", "elem5":"close", "icon6":"&#xf011;", "elem6":"close", "ASpan_class":"hide"});}

CreateSpans(ScreensData, "#TCSMA-Screens", "beforeend");


                             <!-- 💚💚💚💚💚💚 YEARS 💚💚💚💚💚💚 -->
let YearsData = [
{"GSpan_class":"Send Year click",  "NrIcon_Elem":"1", "Gicon1_class":"icon", "Gelem1_class":"elem", 
 "icon1":"", "icon1_switch":"", "elem1":"All", "ASpan_class":"All"},]

for (var k = 1990; k < 2024; k++) {
YearsData.push(
{"icon1":"", "icon1_switch":"&#xf00d;", "elem1":""+k+"", "ASpan_class":"y"+k+""});}

CreateSpans(YearsData, "#TCSM-Grid .Third .Years", "beforeend");

<!--- ♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️ STREAMING ♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️ --->
                               <!-- 💚💚💚💚💚💚 STREAMING DATA 💚💚💚💚💚💚 -->

let StreamData      = [
{"Catg" :"Channels⚡️&#xf26c;⚡️قنوات⚡️red",          "SubcatgN":"3",      "Subcatg1":"Bouquets⚡️&#xf535;⚡️باقات⚡️",                                                                             "Subcatg2":"Categories⚡️&#xf5fd;⚡️النوع⚡️",                                                                           "Subcatg3":"Contries⚡️&#xf7a2;⚡️الدول⚡️"},
 
{"Catg" :"Movies⚡️&#xf03d;⚡️أفلام⚡️pink",           "SubcatgN":"3",       "Subcatg1":"Americain⚡️&#xf8c1;⚡️أمريكية⚡️🇺🇸",                                                                        "Subcatg2":"Arabic⚡️&#xf644;⚡️عربية⚡️🇪🇬",                                                                            "Subcatg3":"Hindu⚡️&#xf664;⚡️هندية⚡️🇮🇳"},

{"Catg" :"TVShows⚡️&#xf6d5;⚡️مسلسلات⚡️orange",      "SubcatgN":"3",       "Subcatg1":"Americain⚡️&#xf8c1;⚡️أمريكية⚡️🇺🇸",                                                                       "Subcatg2":"Arabic⚡️&#xf644;⚡️عربية⚡️🇪🇬",                                                                             "Subcatg3":"Turkish⚡️&#xe2bb;⚡️تركية⚡️🇹🇷"},
 
{"Catg" :"Radios⚡️&#xf8d7;⚡️إذاعات⚡️blue",          "SubcatgN":"2",       "Subcatg1":"Categories⚡️&#xf5fd;⚡️النوع⚡️",                                                                            "Subcatg2":"Contries⚡️&#xf7a2;⚡️الدول⚡️"},

{"Catg" :"Books⚡️&#xf02d;⚡️كتب⚡️yellow",           "SubcatgN":"3",       "Subcatg1":"Americain⚡️&#xf8c1;⚡️أمريكية⚡️🇺🇸",                                                                       "Subcatg2":"Arabic⚡️&#xf644;⚡️عربية⚡️🇪🇬",                                                                             "Subcatg3":"French⚡️&#xf664;⚡️فرنسية⚡️🇫🇷"},

{"Catg" :"Your_History⚡️&#xf1da;⚡️متابعاتك⚡️white",  "SubcatgN":"0",      "Subcatg1":"Store⚡️⚡️⚡️"},]

                             <!-- 💚💚💚💚💚💚 GRID2 CLASS 💚💚💚💚💚💚 -->
let G2_Bouquets_class  =`Bouquets `;
let G2_Categories_class=`Categories `;
let G2_Contries_class  =`Contries `;
let G2_Languages_class =``;

                            <!-- 💚💚💚💚💚💚 ARRAYS 💚💚💚💚💚💚 -->
let CMSHButton = [
{"GSpan_class":"CMSH",  "NrIcon_Elem":"3", 
"Gicon1_class":"icon toswitch toactivet", "Gelem1_class":"elem", "Gicon2_class":"icon toactivet", "Gelem2_class":"elem", "Gicon3_class":"icon",
 
"icon1":"&#xf0c9;", "icon1_switch":"&#xf00d;", "elem1":"Stream", "icon2":"&#xf7b6;", "elem2":"شاهد", "ASpan_class":"CMSHST"},]

let FCatButton = [
{"GSpan_class":"FCat",  "NrIcon_Elem":"3", 
"Gicon1_class":"icon", "Gelem1_class":"elem", "Gicon2_class":"icon toactivet", "Gelem2_class":"elem", "Gicon3_class":"icon toswitch",
 
"icon1":"", "elem1":"Notext", "Notext1" : '<input type="text" placeholder="Global Url">', "icon2":"&#xf0c1;", "elem2_class":"hide", "icon3_class":"hide", "ASpan_class":"Global_Url FCatDD hide"},
 
{"icon1":"", "elem1":"Filter", "icon3":"&#xf0b0;", "icon3_switch":"&#xf00d;", "icon2_class":"hide", "elem2_class":"hide", "ASpan_class":"FCatST"},]

let Grid1Spans  = []


                            <!-- 💚💚💚💚💚💚 CMSHDD AND FCatDD 💚💚💚💚💚💚 -->
StreamData.forEach(el => {  
CMSHButton.push(
{"icon1":"", "icon1_switch":"&#xf0c9;", "elem1":""+el.Catg.split("⚡️")[0]+"", "icon2":""+el.Catg.split("⚡️")[1]+"", "elem2":""+el.Catg.split("⚡️")[2]+"", "ASpan_class":""+el.Catg.split("⚡️")[0]+" "+el.Subcatg1.split("⚡️")[0]+" CMSHDD hide", "Target":""+el.Catg.split("⚡️")[3]+""});
 
if(el.SubcatgN==="0")  {    }
 
else{ 
for (var k = 1; k <= el.SubcatgN; k++) {
if (el['Subcatg'+k].split("⚡️")[0]      ==="Bouquets"){G2_Bouquets_class += el.Catg.split("⚡️")[0]+" ";} 
else if (el['Subcatg'+k].split("⚡️")[0] ==="Categories"){G2_Categories_class += el.Catg.split("⚡️")[0]+" ";} 
else if (el['Subcatg'+k].split("⚡️")[0] ==="Contries"){G2_Contries_class += el.Catg.split("⚡️")[0]+" ";} 
else{G2_Languages_class += el['Subcatg'+k].split("⚡️")[0]+" "+el.Catg.split("⚡️")[0]+" ";}
  
FCatButton.push(
{"icon1":""+el['Subcatg'+k].split("⚡️")[3]+"", "elem1":""+el['Subcatg'+k].split("⚡️")[0]+"", "icon2":""+el['Subcatg'+k].split("⚡️")[1]+"", "elem2":""+el['Subcatg'+k].split("⚡️")[2]+"", "icon3":"", "icon3_switch":"&#xf0b0", "ASpan_class":""+el.Catg.split("⚡️")[0]+" "+el['Subcatg'+k].split("⚡️")[0]+" FCatDD hide"})
 
Grid1Spans.push(
{"icon1":""+el['Subcatg'+k].split("⚡️")[3]+"", "elem1":""+el['Subcatg'+k].split("⚡️")[0]+"", "icon2":""+el['Subcatg'+k].split("⚡️")[1]+"", "elem2":""+el['Subcatg'+k].split("⚡️")[2]+"", "icon3":"", "icon3_switch":"&#xf0b0", "ASpan_class":""+el.Catg.split("⚡️")[0]+" "+el['Subcatg'+k].split("⚡️")[0]+" G1Span hide", "NrIcon_Elem":"3", "GBlocktxt_idroot":"", "Stream":"",
"Gicon1_class":"icon hide", "Gelem1_class":"elem", "Gicon2_class":"icon toactivet", "Gelem2_class":"elem hide", "Gicon3_class":"icon hide"})}}})

CreateSpans(CMSHButton, "#TCSH-CMSH-Button", "beforeend"); 
CreateSpans(FCatButton, "#TCSH-Filter-Button ul:nth-child(3)", "beforeend"); 
CreateSpans(Grid1Spans,  "#TCSM-Grid .First", "beforeend"); 


                            <!-- 💚💚💚💚💚💚 GRID2 💚💚💚💚💚💚 -->
<!--🪷BOUQUETS-->
let icon2Bq = "&#xf204;"; let icon2BqS = "&#xf00d;";

let G2_Bouquets = [
{"GSpan_class":"G2Span "+G2_Bouquets_class+"", "NrIcon_Elem":"3", "Gelem1_class":"elem", "Gicon2_class":"icon toactivet toswitch", "Gelem2_class":"elem",

"elem1":"All", "icon2":""+icon2Bq+"", "icon2_switch":""+icon2BqS+"","elem2":"الكل", "ASpan_class":"All hide", "Imgid":"1NaZrUeSLeli6EFGjucGJ_kgc79j9Lnnt"},]


let G2_BouquetsArray = [{"nameen":"","namear":"","img":"1NaZrUeSLeli6EFGjucGJ_kgc79j9Lnnt"},{"nameen":"","namear":"","img":"1NaZrUeSLeli6EFGjucGJ_kgc79j9Lnnt"},]

G2_BouquetsArray.forEach(el => {  
G2_Bouquets.push({"elem1":""+el.nameen+"", "icon2":""+icon2Bq+"", "icon2_switch":""+icon2BqS+"", "elem2":""+el.namear+"", "ASpan_class":""+el.nameen+" hide", "Imgid":""+el.img+""})});

CreateSpans(G2_Bouquets, "#TCSM-Grid .Second.snd", "beforeend"); 



<!--🪷CATEGORIES-->
let icon2Catg = "&#xf204;"; let icon2CatgS = "&#xf00d;";
let G2_Categories = [
{"GSpan_class":"G2Span "+G2_Categories_class+"", "NrIcon_Elem":"3", "Gelem1_class":"elem", "Gicon2_class":"icon toactivet", "Gelem2_class":"elem",

"elem1":"All", "icon2":""+icon2Catg+"", "icon2_switch":""+icon2CatgS+"","elem2":"الكل", "ASpan_class":"All hide", "Imgid":"1NaZrUeSLeli6EFGjucGJ_kgc79j9Lnnt"},]

let G2_CategoriesArray = 
[{"nameen":"Sports","namear":"رياضات","img":"18mbfVhgcZ21oBq8XTlEttbJJzC-UyVyN"}, 
{"nameen":"General","namear":"عام","img":"18Iv45YdzOu2xZkdQ7lftsNZ3CnAzvbA8"}, 
{"nameen":"News","namear":"أخبار","img":"18NNt5YLhFHdbjyHNceTC03MX-nhPud_7"}, 
{"nameen":"Kids","namear":"أطفال","img":"183y9D2cUSm7TAWoO30A_dFTh_x8pSoVX"}, 
{"nameen":"Series","namear":"مسلسلات","img":"18gfL7Z_VS0U0cNj-wobYOEG5zejj1FCe"}, 
{"nameen":"Movies","namear":"أفلام","img":"18L5PvVbGwwBtAKMVTRUXfJqri8a4j1sp"}, 
{"nameen":"Music","namear":"موسيقى","img":"15QLfM9NSYUMCZZgSh-g_2nsEhABcb1ZC"}, 
{"nameen":"Animation","namear":"الرسوم المتحركة","img":"18qMs4P42CF3yM859GBwRQk9NY4_Ilxl5"}, 
{"nameen":"Comedy","namear":"كوميديا","img":"193m9-RZgwUy6Mlr_QuiNAjzrLhCqb9mq"}, 
{"nameen":"Entertainment","namear":"الترفيه","img":"17xS6FGfxEeV5YbXleJ7-kUu9TKsoaQuV"}, 
{"nameen":"Science","namear":"علوم","img":"15PYfnNijMj-4J6-EpinathuRdGn1vx8D"}, 
{"nameen":"Documentary","namear":"وثائقي","img":"19DgFaIEwqFX4j5vw9DS5H1Y4Vd73SZKf"}, 
{"nameen":"Cooking","namear":"طبخ","img":"19LHHdHHyLrH5b6UkndgDVWcTOGBtC24i"}, 
{"nameen":"Culture","namear":"ثقافة","img":"19ONVLpSi-SGovXtBl0uO8K58Khuk_X0d"},
{"nameen":"Religious","namear":"ديني","img":"18SSp13StjxwjEmiP7Om0YvEr1jF2nlCo"},
{"nameen":"Family","namear":"عائلة","img":"1Bb5T5bJERwRH9t_yeKE799M7O7tp8IEe"},
{"nameen":"Lifestyle","namear":"نمط الحياة","img":"19RriFUo55t5XrR12QXe6Lyo9T1jZT_FA"},
{"nameen":"Travel","namear":"السفر","img":"19_L9hj4ZTZOiAGeocTxfkBNfjMUpA6Hd"},
{"nameen":"Education","namear":"تعليم","img":"19dQbZDBkzkO3b84i-EV9uzpmQHCmhTSr"},
{"nameen":"Business","namear":"عمل","img":"18_LErf72EuiGGQuGIZxc5_6pRm5mnFK-"},
{"nameen":"Auto","namear":"آلي","img":"18dKY63M8b2rz8ftkkWtaYG-v1IaszQjS"},
{"nameen":"Relax","namear":"راحة","img":"19JVdezwt7otnrra29CGnL-VufFv_BW8Y"},]

G2_CategoriesArray.forEach(el => {  
G2_Categories.push({"elem1":""+el.nameen+"", "icon2":""+icon2Catg+"", "icon2_switch":""+icon2CatgS+"", "elem2":""+el.namear+"", "ASpan_class":""+el.nameen+" hide", "Imgid":""+el.img+""})});
 
CreateSpans(G2_Categories, "#TCSM-Grid .Second.snd", "beforeend"); 


<!--🪷CONTRIES-->
let icon2Cont = "&#xf204;"; let icon2ContS = "&#xf00d;";
let G2_Contries   = [
{"GSpan_class":"G2Span "+G2_Contries_class+"", "NrIcon_Elem":"3", "Gelem1_class":"elem", "Gicon2_class":"icon toactivet", "Gelem2_class":"elem",

"elem1":"All", "icon2":""+icon2Cont+"", "icon2_switch":""+icon2ContS+"","elem2":"الكل", "ASpan_class":"All hide", "Imgid":"1NaZrUeSLeli6EFGjucGJ_kgc79j9Lnnt"},]

let G2_ContriesArray = 
[{"nameen":"Algeria","namear":"الجزائر","img":"14auID7gZUEEmupOIPAbRi6IMRPEVMR5P"},
{"nameen":"Egypt","namear":"مصر","img":"17yg3MIf3Is3Ms4_xqJu_jlmh9L4rpNJ_"},
{"nameen":"France","namear":"فرنسا","img":"18dbZLxlJm0aolxWK7syqdZ8KARr5TpQt"},
{"nameen":"Iraq","namear":"العراق","img":"19dWVRU3rSspIFoqI89TTLB7xTH-HWS3l"},
{"nameen":"Jordan","namear":"الأردن","img":"1A4PThAHkykARbf9j4PXIUzgTRw-9fU78"},
{"nameen":"Kuwait","namear":"الكويت","img":"1AaB68dZc_olNmUrBCzeDGlX58yk-AFts"},
{"nameen":"Lebanon","namear":"لبنان","img":"1AgVkz37db3gtz6qZff8rF0_dxrCvvjze"},
{"nameen":"Libya","namear":"ليبيا","img":"1B-BegbWwZN3wfS86HX9wZnjTVpoxcZY6"},
{"nameen":"Morocco","namear":"المغرب","img":"1CR06RR-HDPnPTbh4Qx5VwDOSHatjjXm6"},
{"nameen":"Oman","namear":"عمان","img":"1EEkyuCEBCcTJ5F91ug5sv_7pvC1sFuho"},
{"nameen":"Palestine","namear":"فلسطين","img":"1EKsum7Jy5wCbFmF7pumLi9wWxLj9c4av"},
{"nameen":"Qatar","namear":"دولة قطر","img":"1F1LlwETR2DtCygWeGYw6772pWXWUwdkm"},
{"nameen":"Saudi Arabia","namear":"السعودية","img":"1Faq5gIDbye47GYl6chlHpuO5AKzQqkDK"},
{"nameen":"Spain","namear":"إسبانيا","img":"1GU8YT_g1AUNUtrZhPqyZglE3zhiZg-6A"},
{"nameen":"Syria","namear":"سوريا","img":"1GtPAz25E1syQ3RWtGOn4gTk4gilbsQs3"},
{"nameen":"Tunisia","namear":"تونس","img":"1HR8RLxkJeKM_PsH_3djQnWQ2-2djDWMh"},
{"nameen":"Emirates","namear":"الإمارات","img":"1I30GvE9-jicQEls5BIJogDD01YQX4VIE"},
{"nameen":"U.Kingdom","namear":"المملكة المتحدة","img":"1I5GOnP9v_rKE_8LZhcRg985YvXLOeW3d"},
{"nameen":"USA","namear":"أمريكا","img":"1I5rKbpMc_7Zc4ulOJbsVzJxG9eqKu5QV"},
{"nameen":"Yemen","namear":"اليمن","img":"1IWgj4dgcGkZ6uVRecZ5PXfzXlgME4CBm"},]

G2_ContriesArray.forEach(el => {  
G2_Contries.push({"elem1":""+el.nameen+"", "icon2":""+icon2Cont+"", "icon2_switch":""+icon2ContS+"", "elem2":""+el.namear+"", "ASpan_class":""+el.nameen+" hide", "Imgid":""+el.img+""})});

CreateSpans(G2_Contries, "#TCSM-Grid .Second.snd", "beforeend"); 



<!--🪷LANGUAGES-->
let icon2Lang = "&#xf204;"; let icon2LangS = "&#xf00d;";
let G2_Languages = [
{"GSpan_class":"G2Span "+G2_Languages_class+"", "NrIcon_Elem":"3", "Gelem1_class":"elem", "Gicon2_class":"icon toactivet", "Gelem2_class":"elem",

"elem1":"All", "icon2":""+icon2Cont+"", "icon2_switch":""+icon2ContS+"","elem2":"الكل", "ASpan_class":"All hide", "Imgid":"1NaZrUeSLeli6EFGjucGJ_kgc79j9Lnnt"},]

let G2_LanguagesArray = 
[{"nameen":"Netflix","namear":"نتفلكس","img":"1AUoWwFvZcRS4A9mCH-1NFS0efTU2Fu-k"},
{"nameen":"Horror","namear":"رعب","img":"1AH1FgGdKUDmh2dxjaRFIcSeT4yxCGxHs"},
{"nameen":"Action","namear":"حركة","img":"1AH_0YtCu6vsxdLFFdwjQQbH2UXM4YmIf"},
{"nameen":"Animation","namear":"الرسوم","img":"1Apcb5f9AzakoEzCA5Cw7SqWLUp2ge3cI"},
{"nameen":"Humor","namear":"ضحك","img":"1AO5xcnbLU1bv8LtztCuzDmcF38De7Eow"},
{"nameen":"Sci-Fi","namear":"خيال علمي","img":"1AW6UkUfRFOawbVvDciK33rkCpT5oqPbb"},
{"nameen":"Fantasy","namear":"خيالي","img":"1AYty5JKg2ta_ApKeQW9-OGHOAY-bZ-Mk"},
{"nameen":"War","namear":"حرب","img":"1AuS7N4-uF5ZTLm5XovlQy9HmNlMb7CSG"},
{"nameen":"Thriller","namear":"إثارة","img":"1BJnsT5nXexXRdakt7jvBnTwbeLX7oW7z"},
{"nameen":"Western","namear":"الغربي","img":"1AqICtNvVUi24irKEE_U3e4JCA0NeC1Pu"},
{"nameen":"Romance","namear":"رومانسي","img":"1AxmO6oLhjOi_QRELKQhbP9NozPqbowP3"},
{"nameen":"Superhero","namear":"بطل خارق","img":"1AyNeNrbteVsQWy_5qMXPvhidxMiPhpgb"},
{"nameen":"Family","namear":"عائلة","img":"1Bb5T5bJERwRH9t_yeKE799M7O7tp8IEe"},
{"nameen":"Crime","namear":"جريمة","img":"1B5HqY-lZwRq4sttmdkciy1hj9C4gsn_9"},
{"nameen":"Adventure","namear":"مفامرة","img":"1BHuiABUSGuFTsNSCHJv5_h-lBbG-l3Eq"},
{"nameen":"Drama","namear":"دراما","img":"1AK7R9jlTPG3RoS4bXG4eWfD95t_9sSUQ"},]

G2_LanguagesArray.forEach(el => {  
G2_Languages.push({"elem1":""+el.nameen+"", "icon2":""+icon2Lang+"", "icon2_switch":""+icon2LangS+"", "elem2":""+el.namear+"", "ASpan_class":""+el.nameen+" "+el.namear+" hide", "Imgid":""+el.img+""})});

CreateSpans(G2_Languages, "#TCSM-Grid .Second.snd", "beforeend"); 



<!--🪷CATEGORIES-->
let icon2UrlsType = "&#xf204;"; let icon2UrlsTypeS = "&#xf00d;";

let G2_UrlsType = [
{"GSpan_class":"G2Span UrlsTypes", "NrIcon_Elem":"3", "Gelem1_class":"elem", "Gicon2_class":"icon toactivet hide", "Gelem2_class":"elem hide",

"elem1":"Youtube", "icon2":""+icon2UrlsType+"", "icon2_switch":""+icon2UrlsTypeS+"","elem2":"يوتيوب", "ASpan_class":"hide", "Imgid":"1BcFjvPvTcBvVsG8AlxxVtU3KH6bWw2yX"},]

let G2_UrlsTypeArray = 
[{"nameen":"Facebook","namear":"فيسبوك","img":"1Bd5fwI88b6MAu8CAjVEGxzrMjZN04L2v"},
{"nameen":"Soundcloud","namear":"سوندكلود","img":"1Bd_RawynmWitcObMLn2y9Mpa-Yzv_4Nl"},
{"nameen":"Vimeo","namear":"فيميو","img":"1BhMu3c9nyjUmWv7Uap-fc_0ChGVkKblE"},
{"nameen":"Websites","namear":"ويب","img":"1_00eWaOVd1nHRoHvHnrIhJyumz3m14JZ"},
{"nameen":"Spotify","namear":"سبوتفاي","img":"1BjFQBCfwKfgyp0QZ2XEB16Sl0woStu9_"},
{"nameen":"Dailymotion","namear":"دايليموشن","img":"1BjCaMaeOPqipMosC7BgtkClKxbHrZ1J7"},
{"nameen":"Mp4","namear":"Mp4","img":"1BkWAWz8D2eIy1YUncn8y4Y90H4ZMUUOt"},
{"nameen":"Rtmp","namear":"Rtmp","img":"1Box8OzlZa1I-B1fx0MIzBIE--ql9vxzr"},
{"nameen":"M3u8","namear":"M3u8","img":"1Box8OzlZa1I-B1fx0MIzBIE--ql9vxzr"},
{"nameen":"M4p","namear":"M4p","img":"1Box8OzlZa1I-B1fx0MIzBIE--ql9vxzr"},
{"nameen":"M4v","namear":"M4v","img":"1Box8OzlZa1I-B1fx0MIzBIE--ql9vxzr"},
{"nameen":"Mov","namear":"Mov","img":"1Box8OzlZa1I-B1fx0MIzBIE--ql9vxzr"},
{"nameen":"F4m","namear":"F4m","img":"1Box8OzlZa1I-B1fx0MIzBIE--ql9vxzr"},
{"nameen":"Mpd","namear":"Mpd","img":"1Box8OzlZa1I-B1fx0MIzBIE--ql9vxzr"},
{"nameen":"Flv","namear":"Flv","img":"1Box8OzlZa1I-B1fx0MIzBIE--ql9vxzr"},
{"nameen":"Webm","namear":"Webm","img":"1Box8OzlZa1I-B1fx0MIzBIE--ql9vxzr"},
{"nameen":"Opus","namear":"Opus","img":"1Box8OzlZa1I-B1fx0MIzBIE--ql9vxzr"},
{"nameen":"Ogv","namear":"Ogv","img":"1Box8OzlZa1I-B1fx0MIzBIE--ql9vxzr"},
{"nameen":"Mp3","namear":"Mp3","img":"1Bpr-iLXOKRfM2cz84Bz8X15H5iydHk9a"},
{"nameen":"M4a","namear":"M4a","img":"1Bpr-iLXOKRfM2cz84Bz8X15H5iydHk9a"},
{"nameen":"Aac","namear":"Aac","img":"1Bpr-iLXOKRfM2cz84Bz8X15H5iydHk9a"},
{"nameen":"Caf","namear":"Caf","img":"1Bpr-iLXOKRfM2cz84Bz8X15H5iydHk9a"},
{"nameen":"Flac","namear":"Flac","img":"1Bpr-iLXOKRfM2cz84Bz8X15H5iydHk9a"},
{"nameen":"Wav","namear":"Wav","img":"1Bpr-iLXOKRfM2cz84Bz8X15H5iydHk9a"},
{"nameen":"Ogg","namear":"Ogg","img":"1Bpr-iLXOKRfM2cz84Bz8X15H5iydHk9a"},]

G2_UrlsTypeArray.forEach(el => {  
G2_UrlsType.push({"elem1":""+el.nameen+"", "icon2":""+icon2UrlsType+"", "icon2_switch":""+icon2UrlsTypeS+"", "elem2":""+el.namear+"", "ASpan_class":""+el.nameen+" hide", "Imgid":""+el.img+""})});

CreateSpans(G2_UrlsType, "#TCSM-Grid .Second.snd", "beforeend");
CreateSpans(G2_UrlsType, "#TCSMA-Urlstype", "beforeend");



                            <!-- 💚💚💚💚💚💚 GRID3 💚💚💚💚💚💚 -->

<!--🪷CHANNELS-->
let icon2Chan = "&#xf204;"; let icon2ChanS = "&#xf00d;";
let G3_Channels = [
{"GSpan_class":"Your_History G3Span Stream "+StreamData[0].Catg.split("⚡️")[0]+" "+StreamData[0].Subcatg1.split("⚡️")[0]+" "+StreamData[0].Subcatg2.split("⚡️")[0]+" "+StreamData[0].Subcatg3.split("⚡️")[0]+"", "NrIcon_Elem":"3", "Gelem1_class":"elem", "Gicon2_class":"icon toactivet", "Gelem2_class":"elem",

"elem1":"Al Aoula", "icon2":""+icon2Chan+"", "icon2_switch":""+icon2ChanS+"", "elem2":"الأولى", "ASpan_class":"AlAoula Al_Aoula ألاولى Morocco المغرب General عام hide All الكل",  "Imgid":"https://i.imgur.com/ZFHjIVU.png",
"Stream":"https://cdnamd-hls-globecast.akamaized.net/live/ramdisk/al_aoula_inter/hls_snrt/index.m3u8🔹️m3u8🔹️active🟤🔲https🔹️off🔹️active"},] 
 
let ChannelsArray = 
//Morroco
[{"nameen":"Laayoune","namear":"العيون","img":"https://i.imgur.com/ZFHjIVU.png",
"search":"AlAoula Al_Aoula_Laayoune العيون_ألاولى Morocco المغرب General عام","Stream":"https://cdnamd-hls-globecast.akamaized.net/live/ramdisk/al_aoula_laayoune/hls_snrt/index.m3u8🔹️m3u8🔹️active🟤🔲https🔹️off🔹️active"},
{"nameen":"2M","namear":"2M","img":"https://i.imgur.com/CwwRn4b.png",
"search":"2M 2m عام General المغرب Morocco", "Stream":"https://cdnamd-hls-globecast.akamaized.net/live/ramdisk/2m_monde/hls_video_ts_tuhawxpiemz257adfc/2m_monde.m3u8🔹️m3u8🔹️active🟤🔲https🔹️off🔹️active"},
 

{"nameen":"","namear":"","img":"https://i.imgur.com/CwwRn4b.png",
"search":"", "Stream":"🔹️m3u8🔹️active🟤🔲https🔹️off🔹️active"}, 
{"nameen":"","namear":"","img":"https://i.imgur.com/CwwRn4b.png",
"search":"", "Stream":"🔹️m3u8🔹️active🟤🔲https🔹️off🔹️active"}, 
{"nameen":"","namear":"","img":"https://i.imgur.com/CwwRn4b.png",
"search":"", "Stream":"🔹️m3u8🔹️active🟤🔲https🔹️off🔹️active"}, 
]
 
ChannelsArray.forEach(el => {  
G3_Channels.push({"elem1":""+el.nameen+"", "icon2":""+icon2Chan+"", "icon2_switch":""+icon2ChanS+"", "elem2":""+el.namear+"", "ASpan_class":""+el.nameen+" "+el.search+" hide All الكل", "Imgid":""+el.img+"", "Stream":""+el.Stream+""})});

CreateSpans(G3_Channels, "#TCSM-Grid .Third", "beforeend"); 



<!--🪷MOVIES AMERICAN-->
let icon2AmericMo = "&#xf204;"; let icon2AmericMoS = "&#xf00d;";
let G3_Americain_Movies = [
{"GSpan_class":"All Your_History G3Span "+StreamData[1].Catg.split("⚡️")[0]+" "+StreamData[1].Subcatg1.split("⚡️")[0]+"", "NrIcon_Elem":"3", "Gelem1_class":"elem", "Gicon2_class":"icon toactivet", "Gelem2_class":"elem",

"elem1":"The Tutor 2023", "icon2":""+icon2AmericMo+"", "icon2_switch":""+icon2AmericMoS+"", "elem2":"فيلم مترجم", 
"ASpan_class":"hide اثارة غموض y2023 Thriller", "Imgid":"https://1cima4u.com/wp-content/uploads/01-1598.jpg",
 
"description":"هذه قصة حول معلم خصوصي يجد نفسه مضطراً للتعامل مع طلب غير متوقع في قصر ضخم، ويجد نفسه يكافح مع أوهام طالبه المهووس الذي يهدده بكشف أسراره الداكنة.", 

 
"SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi3891708953/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-if4fp0bicrpa.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-4kv58o3mr9rr.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-0xfngv0aykua.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-mnkdyplmn42y.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/x2y5tahauul4🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-lei76d1fj1en.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/9Rg7bqXR7xTaMyO🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-uqik044x2sfk.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-mxhivn0fu9gl.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/p3ophq6v3b94🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/if4fp0bicrpa.html🔹️S0🔹️active🟤https://uptobox.com/p3ophq6v3b94🔹️S1🔹️♤🟤https://guccihide.com/w/x2y5tahauul4🔹️S2🔹️♤🟤https://streamtape.com/v/9Rg7bqXR7xTaMyO🔹️S3🔹️♤🟤https://streamvid.net/uqik044x2sfk🔹️S4🔹️♤🟤https://upstream.to/mxhivn0fu9gl🔹️S5🔹️♤🟤https://gofile.io/d/LUCHgw🔹️S6🔹️♤🟤https://drop.download/d0b7nuhk66m8🔹️S7🔹️♤" },]
 


let AmericMoviesArray = 
[

{"nameen":"The Tutor 2023", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/01-1598.jpg", "description":"القصة هذه قصة حول معلم خصوصي يجد نفسه مضطراً للتعامل مع طلب غير متوقع في قصر ضخم، ويجد نفسه يكافح مع أوهام طالبه المهووس الذي يهدده بكشف أسراره الداكنة.", "search":"اثارة غموض y2023 افلام اجنبي Thriller ", "SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi3891708953/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-if4fp0bicrpa.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-4kv58o3mr9rr.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-0xfngv0aykua.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-mnkdyplmn42y.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/x2y5tahauul4🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-lei76d1fj1en.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/9Rg7bqXR7xTaMyO🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-uqik044x2sfk.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-mxhivn0fu9gl.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/p3ophq6v3b94🔹️emurlwithdownload🔹️♤🟤https://ok.ru/videoembed/4878610336505🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/if4fp0bicrpa.html🔹️https://uptobox.com/p3ophq6v3b94🔹️https://guccihide.com/w/x2y5tahauul4🔹️https://streamtape.com/v/9Rg7bqXR7xTaMyO🔹️https://streamvid.net/uqik044x2sfk🔹️https://upstream.to/mxhivn0fu9gl🔹️https://gofile.io/d/LUCHgw🔹️https://drop.download/d0b7nuhk66m8" },

{"nameen":"Phenomena 2023", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/01-1583.jpg", "description":"تخضع قدرات ثلاث نساء في منتصف العمر، يستكشفن الأحداث الخارقة، للاختبار حين يختفي قائدهنّ القسيس بيلون… مستوحًى من مجموعة هيبتا الحقيقية.", "search":"رعب y2023 افلام اجنبي افلام نتفلكس Horror Netflix", "SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi1561052185/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-nxbmjtjp1hnx.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-7gzbmrto4n4c.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-rjschls3z8s3.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-6sqxlwzt243e.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/jahw7n8etoph🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-27lymcao8kti.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/oZPoMjbWMXIJm6J🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-9ews1qrs17x2.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-nhvmmwgpnvsp.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/s41z7how125n🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/nxbmjtjp1hnx.html🔹️S0🔹️active🟤https://uptobox.com/s41z7how125n🔹️S1🔹️♤🟤https://guccihide.com/w/jahw7n8etoph🔹️S2🔹️♤🟤https://streamtape.com/v/oZPoMjbWMXIJm6J🔹️S3🔹️♤🟤https://streamvid.net/9ews1qrs17x2🔹️S4🔹️♤🟤https://upstream.to/nhvmmwgpnvsp🔹️S5🔹️♤🟤https://gofile.io/d/AcHYWf🔹️S6🔹️♤🟤https://drop.download/dup53tkmznd2🔹️S7🔹️♤" },

]
 

AmericMoviesArray.forEach(el => {    
G3_Americain_Movies.push({"elem1":""+el.nameen+"", "icon2":""+icon2AmericMo+"", "icon2_switch":""+icon2AmericMoS+"", "elem2":""+el.namear+"", "ASpan_class":""+el.nameen+" "+el.search+" hide All الكل", "Imgid":""+el.img+"", "description":""+el.description+"", "SubButtons":""+el.SubButtons+"" })});
 
   
CreateSpans(G3_Americain_Movies, "#TCSM-Grid .Third", "beforeend");


<!--🪷MOVIES ARABIC-->
let G3_Arabic_Movies = [
{"GSpan_class":"Your_History G3Span "+StreamData[1].Catg.split("⚡️")[0]+" "+StreamData[1].Subcatg2.split("⚡️")[0]+"", "NrIcon_Elem":"3", "Gelem1_class":"elem", "Gicon2_class":"icon toactivet", "Gelem2_class":"elem",

"elem1":"moviearab", "icon2":""+StreamData[0].Subcatg1.split("⚡️")[1]+"","elem2":"بين سبورت", "ASpan_class":"BeinSport hide", "Imgid":"1H3SbbwtoJdOS24XxgS-vQvV1UbxzF6AG"},
 
]  
CreateSpans(G3_Arabic_Movies, "#TCSM-Grid .Third", "beforeend");





<!--- ♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️ FILTERS ♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️ --->
function Reseting(elem, match)
{resetContainerItems("#TCSMA-Screens", "TCSM-Area", $(".IVST").matches(".active") ? "TCSMA-Urlstype" : "", elem.matches(match)? "AutoSize":"Scroll",  ".Screen:not(.hide)", ".FSize.Scroll input");}


<!--🪷BUTTONS-->
$$("#Landing span").forEach((elem, i)=>{elem.addEventListener("click",function(){
$$("#Landing span, #Landing img").forEach(el => {el.classList.remove("active");})
$$("#Landing span")[i].classList.add("active"); 
$$("#Landing img")[i].classList.add("active");})})
Repeat("#Landing span", "#Landing img", "active", 3000)

<!--🪷SLIDES-->
$$("#Landing img").forEach(elem=>{elem.addEventListener("click",function(){
$("#All-Containers .CENTER").classList.add("Switch"); 
$(".FSizeDD.AutoSize").click();})})

                             <!-- 💚💚💚💚💚💚 LEFT 💚💚💚💚💚💚 -->
<!--🪷THEMESWITCH-->
$$(".ThemeSwitcher").forEach(elem=>{elem.addEventListener("click",function(){
$$(".ThemeSwitcher").forEach(el=>{el.classList.remove("active")}); 
elem.classList.add("active"); 
document.firstElementChild.setAttribute("Theme-Style", elem.getAttribute("value"));})})

                             <!-- 💚💚💚💚💚💚 HEADER 💚💚💚💚💚💚 -->
<!--🪷FSizeST--> 
$$(".FSize").forEach(elem=>{elem.addEventListener("click",function(){
if(elem.matches(".FSizeST")){
elem.matches(".Opened") ? elem.classList.remove("Opened") : elem.classList.add("Opened");} 
else{
Reseting(elem, ".FSize.AutoSize");
$$(".FSizeDD").forEach(el=>{el.classList.remove("active")});
this.classList.add("active");
if(elem.matches(".FSize.AutoSize")) {$(".FSizeST").classList.remove("Opened"); 
                                     $(".FSize.Scroll .elem.input").classList.add("hide");}
else                                {$(".FSize.Scroll .elem").classList.add("hide");
                                     $(".FSize.Scroll .elem.input").classList.remove("hide");}}})})


<!--🪷IV--> 
$(".IVST").addEventListener("click",function(){  
this.classList.add("active");
$$(".FCat, .CMSH, .G1Span, .G2Span, .G3Span").forEach(el=>{el.classList.remove("active","intop","run","Opened","expand", "switch")}); 
$$(".FCat, .CMSHDD, .FSizeDD, .datascreen, .closeExpand").forEach(el=>{el.classList.add("hide")}); 
$(".CMSHST").classList.remove("hide");
$$(".CMSHST button.toswitch, .FCatST button.toswitch, .FSizeST button.toswitch").forEach(el=>{el.classList.remove("switch")});
$(".FSizeST").classList.remove("Opened");
$(".YearST").classList.add("opac"); 
$(".Yoururl").classList.remove("switch", "Opened"); 
$(".searchautocomplete").classList.add("opac");
$(".Global_Url").classList.remove("hide"); 
$(".Global_Url input").focus();
 
$$(".datascreen.uniqueurl").forEach(el=>{el.classList.remove("hide")});
$$(".datascreen").forEach(el=>{el.classList.remove("run")});
$$(".Player").forEach(el=>{el.innerHTML="";});
$$(".datascreen.Servers").forEach(el=>{el.querySelector("text").innerHTML="Servers";});
$$(".datascreen.Downloads").forEach(el=>{el.querySelector("text").innerHTML="Downloads";});
$$(".datascreen.Tracks").forEach(el=>{el.querySelector("text").innerHTML="Tracks"}); 
$$("#TCSMA-Urlstype, #TCSMA-Urlstype span").forEach(el=>{el.classList.remove("hide")});
$$("#TCSM-Grid .First, #TCSM-Grid .Second, #TCSM-Grid .Forth, .G3Span").forEach(el=>{el.classList.remove("opac")});
$("#TCSM-Grid").classList.add("hide");
$(".ToScroll").classList.remove("Opened");
$(".FSizeDD.active").click();})

<!--🪷HIDE_UNHIDE_SCREENS-->
$$(".AddScreen").forEach(elem=>{elem.addEventListener(elem.matches(".click")?"click":"input",function(){
var screenadd =document.querySelector(".AddScreen.input").value;
 
if(elem.matches(".input")) {
elem.setAttribute("max", maxscreen);
elem.value = elem.value > maxscreen ? maxscreen : elem.value;
screenadd = elem.value;}
 
if(elem.matches(".Plus"))   {
screenadd = $("#TCSH-Filter-Button ul:nth-child(2) input").value;
screenadd = (screenadd==""||screenadd==" ") ? 1 : screenadd;
screenadd++;
screenadd = screenadd>maxscreen?maxscreen:screenadd;
$("#TCSH-Filter-Button ul:nth-child(2) input").value= screenadd}

if(elem.matches(".Minus"))   {
screenadd = $("#TCSH-Filter-Button ul:nth-child(2) input").value;
screenadd--;
screenadd = screenadd < 1 ? 1 : screenadd;
$("#TCSH-Filter-Button ul:nth-child(2) input").value= screenadd;}
  
//Hide Unhide
if(screenadd===""){ 
for (var m = 1; m < maxscreen ; m++) {
document.querySelectorAll(".Screen")[m].querySelector(".Player").innerHTML = "";
document.querySelectorAll(".Screen")[m].classList.add("hide");}}
 
else{
for (var m = 1; m <= maxscreen ; m++) {  
if(m <= screenadd){
document.querySelectorAll(".Screen")[m-1].classList.remove("hide")}
else{
document.querySelectorAll(".Screen")[m-1].querySelector("section.Player").innerHTML = "";
document.querySelectorAll(".Screen")[m-1].classList.add("hide")}

//CMSH OR IV
if(document.querySelector(".IVST").matches(".active")){
var NScreens     = document.querySelectorAll(".Screen:not(.hide)").length;

var Videourl     = document.querySelector(".Global_Url input").value; 
if(Videourl === ""){}
else{
if(screenadd  > NScreens){ 
for (var j  = NScreens ; j < screenadd; j++) {
videoplayer(Videourl, "mp4" , "", "", "#Player"+j+"", "#Data"+j+"", showlogo4url)}}}

} 
NScreens = screenadd;}}
 
//Checkbox 
if(screenadd=1){
$$(".Screen").forEach(el =>                  {
if(el.matches(".Screen.Destination"))  {el.classList.remove("Destination");}})
$("#Screen0").classList.add("Destination");}
 
//Reseize
Reseting($(".FSize.AutoSize"), ".active")})}) 

<!--🪷CMSHST--> 
$(".CMSHST").addEventListener("click",function(){
<!--CMSHST-Close-->
if(this.matches(".Opened"))        {
$$(".CMSHST, .FSizeST").forEach(el => {el.classList.remove("Opened")}); 
$$(".CMSHST .toswitch,  .FSizeST .toswitch").forEach(el => {el.classList.remove("switch");})
$$(".FSizeDD").forEach(el => {el.classList.add("hide");}) 
$$(".CMSH").forEach(el => {
 el.classList.add("hide");
 if(el.matches(".CMSHST.active"))  {el.classList.remove("hide");}
 if(el.matches(".CMSHDD.active"))  {el.classList.remove("hide"); el.classList.add("intop");
                                    el.querySelector("button.toswitch").classList.add("switch");}})}
<!--CMSHST-Open-->
else {
this.classList.add("Opened", "active"); this.querySelector("button.toswitch").classList.add("switch"); 
if($(".IVST").matches(".active")){ $$(".Player").forEach(el=>{el.innerHTML=""}); 
                                    $(".IVST").classList.remove("active");}   
$$(".CMSHDD .toswitch").forEach(el=>{el.classList.remove("switch")});
 
$$("#TCSMA-Urlstype, .Global_Url, .datascreen").forEach(el=>{el.classList.add("hide")})
$$(".CMSHDD,#TCSM-Grid,.FCatST, .datascreen.original:not(.Downloads)").forEach(el=>{el.classList.remove("hide","no")}) 
$(".FSizeDD.active").click();}})

<!--🪷CMSHDD-->
$$(".CMSHDD").forEach(elem=>{elem.addEventListener("click",function(){
<!--CMHDD InTop-> 
if(elem.matches(".intop"))    {
$(".CMSHST").classList.add("Opened"); 
$(".CMSHST .toswitch").classList.add("switch"); 
$$(".CMSH").forEach(el=>{el.classList.remove("hide")}); 
$$(".FSizeDD, .FCat").forEach(el => {el.classList.add("hide");})
$$(".CMSHDD .toswitch, .FSizeST .toswitch, .FCat .toswitch").forEach(el => {el.classList.remove("switch");}) 
$(".FSizeST").classList.remove("Opened"); 
$$(".FCat").forEach(el => {
if(el.matches(".active")) {el.classList.remove("Opened"); el.classList.add("intop", "run");
                           el.querySelector("button.toswitch").classList.add("switch");}}) 
if($(".FCatDD.active")===null){$(".FCatST").classList.remove("hide");}
else                          {$(".FCatDD.active").classList.remove("hide");}  
elem.classList.remove("intop");}
 
<!--CMSHDD-To=>filter>
else {
if(elem.matches(".active"))       { 
$$(".CMSH").forEach(el=>{el.classList.add("hide")}); 
$$(".G1Span."+elem.classList.item(0)+"").forEach(el=>{el.classList.remove("hide")})}
 
else{
$("#TCSM-Grid").style.setProperty('--Switch-color', elem.getAttribute("Target"))
$$(".CMSH, .FCat").forEach(el=>{el.classList.add("hide")});
$$(".CMSH").forEach(el=>{el.classList.remove("active", "intop")});
$$(".FCat").forEach(el=>{el.classList.remove("active", "intop", "Opened", "run")});
$$(".FCatST").forEach(el=>{el.classList.remove("hide"); el.classList.add("run","active")});
$(".FCatST button.toswitch").classList.remove("switch");
$$(".FCatDD."+elem.classList.item(0)+"").forEach(el=>{el.classList.add("run")});
if($(".FCatDD."+elem.classList.item(0)+"."+elem.classList.item(1)) ===null){}
else{$(".FCatDD."+elem.classList.item(0)+"."+elem.classList.item(1)).classList.add("active");}
 
$$(".G1Span, .G2Span, .G3Span").forEach(el=>{el.classList.add("hide"); el.classList.remove("active", "run","expand","switch")}); 
$$(".G1Span."+elem.classList.item(0)+"").forEach(el=>{el.classList.remove("hide", "active");})
if($(".G1Span."+elem.classList.item(0)+"."+elem.classList.item(1))===null){}
else{$(".G1Span."+elem.classList.item(0)+"."+elem.classList.item(1)).classList.add("active");}  
 
$$(".G2Span."+elem.classList.item(0)+"."+elem.classList.item(1)).forEach(el=>{
 el.classList.remove("hide"); el.classList.add("run");})  
$$(".G3Span."+elem.classList.item(0)+"."+elem.classList.item(1)).forEach(el=>{
 el.classList.remove("hide"); el.classList.add("run");})  
$$("#TCSM-Grid .First, #TCSM-Grid .Second, #TCSM-Grid .Forth, .G3Span").forEach(el=>{el.classList.remove("opac")}); 
$(".closeExpand").classList.add("hide");  
$(".Yoururl").classList.remove("switch", "Opened");  
$("#All-Containers .Streaming .Middle").scrollTo({top:0, left:10000 ,behavior: 'smooth'}); 
if(elem.matches(".Movies, .TVShows")){
                             $(".searchautocomplete").classList.remove("opac");
                             $(".YearST").classList.remove("opac","switch", "opac");                             
                             $(".Years").classList.add("hide"); 
                             $$(".Years .Year").forEach(el=> el.classList.remove("active")); 
                             $(".YearST svg text:nth-child(1)").innerHTML="&#xf073;"}
 
if(!elem.matches(".Movies, .TVShows"))   {$(".YearST").classList.add("opac");
                                          $(".searchautocomplete").classList.remove("opac");}} 

elem.classList.add("active","intop"); elem.classList.remove("hide"); elem.querySelector("button.toswitch").classList.add("switch");}})})



<!--🪷ToScroll--> 
$(".ToScroll").addEventListener("click",function(){

if(this.matches(".Opened"))        {
this.classList.remove("Opened");
$("#All-Containers .Streaming .Middle").scrollTo({top:0, left:-10000 ,behavior: 'smooth'});}
else {
this.classList.add("Opened"); 
$("#All-Containers .Streaming .Middle").scrollTo({top:0, left:10000 ,behavior: 'smooth'});}})


<!--🪷FCat--> 
$$(".FCat").forEach(elem=>{elem.addEventListener("click",function(){
//⭕️FCatST
if(elem.matches(".FCatST.run"))   {  
<!--FCatST-Close-->
if(elem.matches(".Opened"))       {
elem.classList.remove("Opened"); 
elem.classList.add("active"); 
elem.querySelector("button.toswitch").classList.remove("switch"); 
$$(".FCat").forEach(el =>           {
  el.classList.add("hide");
  if(el.matches(".FCatDD.active")){el.classList.add("intop");
                                    el.querySelector("button.toswitch").classList.add("switch");}})  
  if($(".FCatDD.active")===null)
       {$(".FCatST").classList.remove("hide");}
  else {$(".FCatDD.active").classList.remove("hide");}}
 
<!--FCatST-Open-->
else {
elem.classList.add("Opened"); 
elem.classList.add("active"); 
elem.querySelector("button.toswitch").classList.add("switch"); 
$$(".FCatDD").forEach(el =>      { 
if(el.matches(".FCatDD.run"))    {el.classList.remove("hide");
                                  el.querySelector("button.toswitch").classList.remove("switch");}})}}
 
//⭕️FCatDD
if(elem.matches(".FCatDD.run")) {  
<!--FCatDD InTop-> 
if(elem.matches(".intop"))      {  
$$(".FCat").forEach(el =>           { 
if(el.matches(".FCatST"))       {el.classList.add("Opened");
                                 el.querySelector("button.toswitch").classList.add("switch");}
if(el.matches(".FCat.run"))     {el.classList.remove("hide");}
if(el.matches(".FCatDD.run"))   {el.querySelector("button.toswitch").classList.remove("switch");}})
elem.classList.remove("intop");} 
 
 <!--FCatDD-To=>filter>
else {
$$(".FCat").forEach(el=>{el.classList.add("hide"); el.classList.remove("active","intop")});
 
$$(".G2Span, .G3Span").forEach(el=>{el.classList.add("hide"); el.classList.remove("run")}); 
$$(".G2Span."+elem.classList.item(0)+"."+elem.classList.item(1)).forEach(el=>{
 el.classList.remove("hide"); el.classList.add("run");})  
$$(".G3Span."+elem.classList.item(0)+"."+elem.classList.item(1)).forEach(el=>{
 el.classList.remove("hide"); el.classList.add("run");})   
elem.classList.add("active","intop"); 
elem.classList.remove("hide"); 
elem.querySelector("button.toswitch").classList.add("switch");}}})})

<!--🪷GLOBAL_URL-->
$(".Global_Url input").addEventListener("input",function(){
var Videourl = this.value;
var NScreens = $$(".Screen:not(.hide)").length;
 
if(Videourl === ""){}
else{
for (var k  = 0; k < NScreens; k++) {
videoplayer(Videourl, "mp4" , "", "", "#Player"+k+"", "#Data"+k+"", showlogo4url)}}})
 

                             <!-- 💚💚💚💚💚💚 MIDDLE 💚💚💚💚💚💚 -->
<!--🪷UNIQUE_URL-->
$$(".Unique_Url_Input").forEach(elem=>{elem.addEventListener("input",function(){
var Videourl = elem.value;
var playerid = elem.closest(".Screen").querySelector("section.Player").id;
var dataid   = elem.closest(".Screen").querySelector("section.Text").id; 
videoplayer(Videourl, "mp4" , "", "", "#"+playerid+"", "#"+dataid+"", showlogo4url)})})
 
 <!--🪷Checkbox-->
$$(".Checkbox").forEach(elem=>{elem.addEventListener("click",function(){
$$(".Screen").forEach(el=>{el.classList.remove("Destination")});
elem.closest(".Screen").classList.add("Destination");})})


<!--🪷SERVERS--> 
$$(".Screen .datascreen.Servers").forEach(elem=>{elem.addEventListener("click",function(){
if(elem.matches(".run")){
$$("#"+elem.closest("section.Text").id+" .datascreen").forEach(el => {el.classList.add("hide")})
$$("#"+elem.closest("section.Text").id+" .datascreen.server").forEach(el => {el.classList.remove("hide")})}})})

<!--🪷TRACKS--> 
$$(".Screen .datascreen.Tracks").forEach(elem=>{elem.addEventListener("click",function(){
if(elem.matches(".run")){
$$("#"+elem.closest("section.Text").id+" .datascreen").forEach(el => {el.classList.add("hide")})
$$("#"+elem.closest("section.Text").id+" .datascreen.track").forEach(el => {el.classList.remove("hide")})}})})

<!--🪷DOWNLOADS--> 
$$(".Screen .datascreen.Downloads").forEach(elem=>{elem.addEventListener("click",function(){
if(elem.matches(".run")){
$$("#"+elem.closest("section.Text").id+" .datascreen").forEach(el => {el.classList.add("hide")})
$$("#"+elem.closest("section.Text").id+" .datascreen.download").forEach(el => {el.classList.remove("hide")})}})})

<!--🪷SERVER TRACK DOWNLOAD CLOSE--> 
$$(".datascreen.server, .datascreen.track, .download").forEach(elem=>{elem.addEventListener("click",function(){
$$("#"+elem.closest("section.Text").id+" .datascreen").forEach(el => {el.classList.add("hide")})
$$("#"+elem.closest("section.Text").id+" .datascreen.original").forEach(el => {el.classList.remove("hide")})})}) 

<!--🪷PLAYPAUSE-->
$$(".Screen .datascreen.Play").forEach(elem=>{elem.addEventListener("click",function(){
if(elem.matches(".run")){
var Video = $("#"+elem.closest(".Screen").querySelector("section.Player").id+" video"); 
Video.onended = function() {elem.classList.add("switch")}; 
if (Video.paused) {Video.play();  elem.classList.remove("switch")} 
else              {Video.pause(); elem.classList.add("switch")}}})})


<!--🪷MUTEUNMUTE-->
$$(".Screen .datascreen.Volume").forEach(elem=>{elem.addEventListener("click",function(){ 
if(elem.matches(".run")){
var Video = $("#"+elem.closest(".Screen").querySelector("section.Player").id+" video");
if (Video.muted === false) {Video.muted = true;  elem.classList.remove("switch")} 
else                       {Video.muted = false; elem.classList.add("switch")}}})})
 
<!--🪷EXPAND-SCREEN->
$$(".Screen .datascreen.Expand").forEach(elem=>{elem.addEventListener("click",function(){ 
if(elem.matches(".run")){
if(elem.matches(".switch")){
elem.classList.remove("switch")
$$(".Screen").forEach(el=>{el.classList.remove("no")})
$(".Streaming").classList.remove("Expand")
$("#TCSM-Grid .First").classList.add("hide")
if($(".FSizeDD.Scroll").matches(".active")){
resetContainerItems("#TCSMA-Screens", "TCSM-Area", "", "Scroll",".Screen:not(.hide)", ".FSize.Scroll input");}
else{ 
resetContainerItems("#TCSMA-Screens", "TCSM-Area", "", "AutoSize",".Screen:not(.hide)", ".FSize.Scroll input");}}
 
else{
elem.classList.add("switch")
$$(".Screen").forEach(el=>{el.classList.add("no")})
$("#"+elem.closest(".Screen").id).classList.remove("no")
$("#TCSM-Grid .First").classList.remove("hide")
$(".Streaming").classList.add("Expand")
resetContainerItems("#TCSMA-Screens", "TCSM-Area", "", "AutoSize",".Screen:not(.no)", ".FSize.Scroll input");
}}})}) 




                             <!-- 💚💚💚💚💚💚 GRID1 💚💚💚💚💚💚 -->
<!--🪷G1Span> 
$$(".G1Span").forEach(elem=>{elem.addEventListener("click",function(){ 
$$(".G1Span").forEach(el=>{el.classList.remove("active")});  
$$(".G2Span, .G3Span").forEach(el=>{el.classList.add("hide"); el.classList.remove("run", "active")}); 
$$(".G2Span."+elem.classList.item(0)+"."+elem.classList.item(1)).forEach(el=>{
 el.classList.remove("hide"); el.classList.add("run");})   
$$(".G3Span."+elem.classList.item(0)+"."+elem.classList.item(1)).forEach(el=>{
 el.classList.remove("hide"); el.classList.add("run");})   
elem.classList.add("active");})})  



                             <!-- 💚💚💚💚💚💚 GRID2 💚💚💚💚💚💚 -->
<!--🪷GRID2 BUTTONEXPAND--> 
$(".Grid2Expand").addEventListener("click",function(){
if(this.matches(".Opened")){
this.classList.remove("Opened");    
$("#TCSM-Grid .Second.fst").classList.remove("Expand");} 
else{
this.classList.add("Opened");  
$("#TCSM-Grid .Second.fst").classList.add("Expand");}}) 

<!--🪷G2Span> 
$$(".G2Span").forEach(elem=>{elem.addEventListener("click",function(){ 
$$(".G2Span").forEach(el=>{el.classList.remove("active")});  
$$(".G3Span.run").forEach(el=>{el.classList.add("hide")});  
$$(".G3Span.run."+elem.classList.item(0)).forEach(el=>{el.classList.remove("hide")});  
elem.classList.add("active");
if(elem.matches(".toswitch")) {elem.querySelector(".toswitch").classList.add("switch")}})})  


                             <!-- 💚💚💚💚💚💚 GRID3 💚💚💚💚💚💚 -->
<!--🪷GRID3 Year-->
$$(".Year").forEach(elem=>{elem.addEventListener("click",function(){ 
$$(".Year").forEach(el=>{el.classList.remove("active");});
$(".Years").classList.add("hide"); 
$(".YearST").classList.remove("switch", "Opened"); 
$(".YearST svg text:nth-child(1)").innerHTML=elem.querySelector("section.Text .elem svg text:nth-child(1)").innerHTML;
$$(".G3Span.run").forEach(el=>{el.classList.add("hide")});  
$$(".G3Span.run."+elem.classList.item(0)).forEach(el=>{el.classList.remove("hide")});
elem.classList.add("active");})})

<!--🪷G3Span> 
$$(".G3Span").forEach(elem=>{elem.addEventListener("click",function(){ 
if(elem.matches(".run")){ 
$$(".G3Span").forEach(el=>{el.classList.remove("active","expand")});  
elem.classList.add("active", "Store");
if(elem.matches(".G3Span.Movies, .G3Span.TVShows"))    {
elem.classList.add("expand"); 
$$(".G3Span.run, #TCSM-Grid .First, #TCSM-Grid .Second, #TCSM-Grid .Forth").forEach(el=>{el.classList.add("opac")});  
$(".closeExpand").classList.remove("hide");}}})})  

<!--🪷 CLOSE_EXPAND-->
$(".closeExpand").addEventListener("click",function(){ 
this.classList.add("hide")
$(".G3Span.run.active.expand").classList.remove("expand");
$$(".G3Span,#TCSM-Grid .First,#TCSM-Grid .Second,#TCSM-Grid .Forth").forEach(el=>{el.classList.remove("opac")});})

                             <!-- 💚💚💚💚💚💚 GRID4 💚💚💚💚💚💚 -->
<!--🪷Grid4 YearST-->
$(".YearST").addEventListener("click",function(){
if(this.matches(".Opened"))        {
this.classList.remove("Opened","switch"); 
$("#TCSM-Grid .Third .Years").classList.add("hide");
$$(".Years .Year").forEach(el =>          {
if(el.matches(".Years .Year.active"))     { this.innerHtml=el.querySelector(".Block.Text").innerHtml;}})}  
else {
this.classList.add("Opened","active","switch");
$("#TCSM-Grid .Years").classList.remove("hide");}}) 


<!--🪷Grid4 AUTOCOMPLETE--> 
$(".Autocomplete").addEventListener("input",function(){
const tofilter = document.querySelectorAll(".G3Span.run");
const val1     = this.value.replaceAll("   ","  ").replaceAll("  "," ").replaceAll(" ","_");
const val2     = this.value;
if(val1===""||val2===""){
for (var j = 0; j < tofilter.length; j++) {
 tofilter[j].classList.add("show"); tofilter[j].classList.remove("hide");}} 
else{for (var j = 0; j < tofilter.length; j++) { const eachclass = tofilter[j].className.split(' ');
for (var k = 0; k < eachclass.length; k++) {
if (eachclass[k].substr(0, val1.length).toUpperCase() == val1.toUpperCase()||eachclass[k].substr(0, val2.length).toUpperCase() == val2.toUpperCase()) {
tofilter[j].classList.add("show"); tofilter[j].classList.remove("hide");
break;} 
else{tofilter[j].classList.add("hide"); tofilter[j].classList.remove("show");}};};};})

<!--🪷Grid4 YourUrl-->
$$(".Yoururl, .closeYoururls").forEach(elem=>{elem.addEventListener("click",function(){
if(elem.matches(".Opened"))        {
$(".Yoururl").classList.remove("Opened","switch");
elem.classList.remove("Opened","switch");
$$(".G3Span, .G2Span").forEach(el=>{el.classList.add("hide")}); 
$(".searchautocomplete").classList.remove("opac");
$$(".G3Span.run, .G2Span.run").forEach(el=>{el.classList.remove("hide")})}
  
else {
elem.classList.add("Opened", "switch");
$$(".G3Span, .G2Span").forEach(el=>{el.classList.add("hide")});
$$(".G2Span.UrlsTypes").forEach(el=>{el.classList.remove("hide")});
$(".closeYoururls").classList.add("Opened");
$(".searchautocomplete").classList.add("opac");
$(".YourUrls").classList.remove("hide");}})})



                         <!-- 💚💚💚💚💚💚 STREAM-SERVERS_TRACKS 💚💚💚💚💚💚 -->

function bigfilter(elem) {
//♥️Text
$(".Screen.Destination .datascreen.Servers text").innerHTML   ="Servers";//elem.classList.item(0)+"";
$(".Screen.Destination .datascreen.Tracks text").innerHTML    ="Tracks";//elem.classList.item(0)+"";
$(".Screen.Destination .datascreen.Downloads text").innerHTML ="Downloads";//elem.classList.item(0)+"";
$$(".Screen.Destination .datascreen.server:not(.close)").forEach(el=>el.remove());
$$(".Screen.Destination .datascreen.track:not(.close)").forEach(el=>el.remove());
$$(".Screen.Destination .datascreen.download:not(.close)").forEach(el=>el.remove());
$$(".Screen.Destination .datascreen").forEach(el=>el.classList.add("run"));
$$(".Stream").forEach(el=>{el.classList.remove("active", "switch")})
elem.classList.add("switch","active"); 
  
//♥️Logo
let Datalogo  = elem.matches(".Channels")         ? showlogo4channels : 
                elem.matches(".Movies, .TVShows") ? showlogo4moviesseries : 
                elem.matches(".userurl")          ? showuserlogo : "";

//♥️Servers 
let Dataservers  = elem.getAttribute("Stream").split("🔲")[0].split("🟤");
 
let videourl     = ""; let videotype   = ""; let trackurl      = ""; let tracklangue = ""; let activevideo = ""; 
let activetype   = ""; let activetrack = ""; let activelangue  = ""; let html1       = ""; let html2       = "";

let playerid     = $(".Screen.Destination section.Player").id;  
let dataid       = $(".Screen.Destination section.Text").id;  
 
for (var i  = 0; i    < Dataservers.length; i++) {
if(Dataservers[i]===""){}
else{
let eachserverdata    = Dataservers[i].split("🔹️"); 
videourl= eachserverdata[0]==="inputurl"? elem.closest("span.YourUrls").querySelector(".streamurl").value :   
eachserverdata[0];
 
videotype         = eachserverdata[0]==="inputurl" ? "link"  : eachserverdata[1]; 
 
if(eachserverdata[2]==="active"){ activevideo = videourl;  activetype  = videotype;};
 
html1 +=
`<button class = "Playme datascreen server elem hide `+eachserverdata[2]+`"
Playme         = "onlyvideo🩱`+videourl+`🩱`+videotype+`🩱`+"#"+playerid+`🩱`+"#"+dataid+`">
<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet"><text x="50%" y="50%">S_`+i+`</text></svg></button>`}}
 
document.querySelector(".Screen.Destination section.Text").insertAdjacentHTML("beforeend", html1);
 
//♥️Tracks 
let Datatracks  = elem.getAttribute("Stream").split("🔲")[1].split("🟤");  
 if(Datatracks==null){}
for (var j  = 0; j    < Datatracks.length; j++) {
if(Datatracks[j]===""){}
else{
let eachtrackdata    = Datatracks[j].split("🔹️"); 
trackurl             = eachtrackdata[0]==="inputtrack" ? elem.closest("span.YourUrls").querySelector(".subtitleurl").value : eachtrackdata[0];
tracklangue          = eachtrackdata[0]==="inputtrack" ? "subtitle"  : eachtrackdata[1];
 
if(eachtrackdata[2]==="active"){ activetrack  = trackurl; activelangue = tracklangue};
 
html2 +=
`<button class = "Playme datascreen track elem hide `+eachtrackdata[2]+`" 
Playme         = "onlytrack🩱`+trackurl+`🩱`+tracklangue+`🩱`+"#"+playerid+`🩱`+"#"+dataid+`">
<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet"> <text x="50%" y="50%">`+tracklangue+`</text> 
</svg></button>`;}}  

document.querySelector(".Screen.Destination section.Text").insertAdjacentHTML("beforeend", html2); 
 
//♥️Downloads 
let downloadserver = ""; let downloadurl = ""; let html3 = ""; 
if(elem.matches(".subbutton")){
let Datadownloads  = elem.getAttribute("Stream").split("🔲")[2].split("🟤"); 

if(Datadownloads==null){}
for (var j  = 0; j    < Datadownloads.length; j++) {
if(Datadownloads[j]===""){}
else{
let eachdownloaddata    = Datadownloads[j].split("🔹️"); 
downloadurl             = eachdownloaddata[0]==="inputdownload" ? elem.closest("span.YourUrls").querySelector(".subtitleurl").value : eachdownloaddata[0];
downloadserver          = eachdownloaddata[0]==="inputdownload" ? "S1"  : eachdownloaddata[1]; 
  
html3 +=
`<button class = "Downloadme datascreen download elem hide `+eachdownloaddata[2]+`" 
Downloadme     = "">
<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet"> <text x="50%" y="50%">`+downloadserver+`</text> 
</svg></button>`;}}  

document.querySelector(".Screen.Destination section.Text").insertAdjacentHTML("beforeend", html3);}


 
//♥️STORE INPUT 
let clone="";
if(elem.getAttribute("Stream").split("🔹️")[0]==="inputurl"){
clone = `<span class="🔗 Your_History G3Span Stream Store hide subbutton inputstream" 
Stream = "`+videourl+`🔹️`+videotype+`🔹️active🔲`+trackurl+`🔹️`+tracklangue+`🔹️active🔲`+downloadurl+`🔹️`+downloadserver+`🔹️♤">
<section class="Image"><img src="https://drive.google.com/uc?export=view&id=18NNt5YLhFHdbjyHNceTC03MX-nhPud_7&sz=w300-h300"></section>  
<section class="Text">
<button class="elem"><svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet"><text x="50%" y="50%">Your Link</text></svg></button>
<button class="icon"><svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet"><text class="FA" x="50%" y="50%">&#xf0c1;</text></svg></button>
<button class="elem"><svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet"><text x="50%" y="50%">رابطك</text></svg></button></section> </span>` 

$("#TCSM-Grid .Third").insertAdjacentHTML('beforeend', clone);} 
 
 
//♥️PlayActive
videoplayer(activevideo, activetype, activetrack, activelangue, "#"+playerid, "#"+dataid, Datalogo); 
 
 
//♥️Change Server or Track
$$(".Playme").forEach (el=>el.addEventListener("click", ()=>{ 

var PlayVdata = el.getAttribute('Playme').split("🩱"); 
var olddata   = $(PlayVdata[3]).getAttribute("vidorifr").split("🩱");
 
//player dispose
let player = videojs(document.querySelector(PlayVdata[3]+" video"));
player.dispose();
   
if(PlayVdata[0]==="onlyvideo"){
videoplayer(PlayVdata[1], PlayVdata[2], olddata[3], olddata[4], PlayVdata[3], PlayVdata[4], Datalogo);
$$("#"+el.closest("section.Text").id+" .Playme.server").forEach(ele => {ele.classList.remove("active")});}
 
else if(PlayVdata[0]==="onlytrack"){
videoplayer(olddata[1], olddata[2] , PlayVdata[1], PlayVdata[2], PlayVdata[3], PlayVdata[4], Datalogo);
$$("#"+el.closest("section.Text").id+" .Playme.track").forEach(ele => {ele.classList.remove("active")});}

$$("#"+el.closest("section.Text").id+" .datascreen").forEach(ele => {ele.classList.add("hide")});
$$("#"+el.closest("section.Text").id+" .datascreen.original").forEach(ele => {ele.classList.remove("hide")});
el.classList.add("active")}))
 
//♥️Download 
$$(".Downloadme").forEach (el=>el.addEventListener("click", ()=>{
$$("#"+el.closest("section.Text").id+" .datascreen").forEach(ele => {ele.classList.add("hide")})
$$("#"+el.closest("section.Text").id+" .datascreen.original").forEach(ele => {ele.classList.remove("hide")})
$$("#"+el.closest("section.Text").id+" .Downloadme").forEach(ele => {ele.classList.remove("active")});
el.classList.add("active");}))
 
$$(".Stream.inputstream").forEach (el=>el.addEventListener("click", ()=>{bigfilter(el); }))}                                     

let Stream   = document.querySelectorAll('.Stream');
for (var s = 0; s    < Stream.length; s++) {
Stream[s].addEventListener("click",function() {bigfilter(this)});}







