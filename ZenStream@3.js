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
{"nameen":"The Tutor 2023", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/01-1598.jpg", "description":"هذه قصة حول معلم خصوصي يجد نفسه مضطراً للتعامل مع طلب غير متوقع في قصر ضخم، ويجد نفسه يكافح مع أوهام طالبه المهووس الذي يهدده بكشف أسراره الداكنة.", "search":"اثارة غموض y2023 افلام اجنبي Thriller ", "SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi3891708953/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-if4fp0bicrpa.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-4kv58o3mr9rr.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-0xfngv0aykua.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-mnkdyplmn42y.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/x2y5tahauul4🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-lei76d1fj1en.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/9Rg7bqXR7xTaMyO🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-uqik044x2sfk.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-mxhivn0fu9gl.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/p3ophq6v3b94🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/if4fp0bicrpa.html🔹️🔹️active🟤🟤https://uptobox.com/p3ophq6v3b94🔹️🔹️♤🟤🟤https://guccihide.com/w/x2y5tahauul4🔹️🔹️♤🟤🟤https://streamtape.com/v/9Rg7bqXR7xTaMyO🔹️🔹️♤🟤🟤https://streamvid.net/uqik044x2sfk🔹️🔹️♤🟤🟤https://upstream.to/mxhivn0fu9gl🔹️🔹️♤🟤🟤https://gofile.io/d/LUCHgw🔹️🔹️♤🟤🟤https://drop.download/d0b7nuhk66m8🔹️🔹️♤🟤" },
{"nameen":"Phenomena 2023", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/01-1583.jpg", "description":"تخضع قدرات ثلاث نساء في منتصف العمر، يستكشفن الأحداث الخارقة، للاختبار حين يختفي قائدهنّ القسيس بيلون… مستوحًى من مجموعة هيبتا الحقيقية.", "search":"رعب y2023 افلام اجنبي افلام نتفلكس Horror Netflix", "SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi1561052185/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-nxbmjtjp1hnx.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-7gzbmrto4n4c.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-rjschls3z8s3.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-6sqxlwzt243e.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/jahw7n8etoph🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-27lymcao8kti.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/oZPoMjbWMXIJm6J🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-9ews1qrs17x2.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-nhvmmwgpnvsp.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/s41z7how125n🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/nxbmjtjp1hnx.html🔹️🔹️active🟤🟤https://uptobox.com/s41z7how125n🔹️🔹️♤🟤🟤https://guccihide.com/w/jahw7n8etoph🔹️🔹️♤🟤🟤https://streamtape.com/v/oZPoMjbWMXIJm6J🔹️🔹️♤🟤🟤https://streamvid.net/9ews1qrs17x2🔹️🔹️♤🟤🟤https://upstream.to/nhvmmwgpnvsp🔹️🔹️♤🟤🟤https://gofile.io/d/AcHYWf🔹️🔹️♤🟤🟤https://drop.download/dup53tkmznd2🔹️🔹️♤🟤" },
{"nameen":"Weathering 2023", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/01-1584.jpg", "description":"بعد أن فقدت صحفية طفلتها الرضيعة وكادت تلقى حتفها هي أيضًا أثناء المخاض، تنهار وسط رؤًى مزعجة واعتداءات تقشعر لها الأبدان وسط شعورها بالحزن يفتك بها وهي وحيدة في المنزل.", "search":"اثارة y2023 افلام اجنبي افلام نتفلكس Thriller Netflix", "SubButtons":"العرض🔲Movies🔲🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-pip64fdcr6to.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-a5ixahra0nag.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-trhn05c5f1qn.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-01x1hkxdwp4q.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/unjpoo7ijk2v🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-ozhhpebr2buh.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/3pMD0QXgALHd11e🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-tsvtgjeiwbuo.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-tfkamnp94083.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/r2buckumm6n0🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/pip64fdcr6to.html🔹️🔹️active🟤🟤https://uptobox.com/r2buckumm6n0🔹️🔹️♤🟤🟤https://guccihide.com/w/unjpoo7ijk2v🔹️🔹️♤🟤🟤https://streamtape.com/v/3pMD0QXgALHd11e🔹️🔹️♤🟤🟤https://streamvid.net/tsvtgjeiwbuo🔹️🔹️♤🟤🟤https://upstream.to/tfkamnp94083🔹️🔹️♤🟤🟤https://gofile.io/d/mZ4CBH🔹️🔹️♤🟤🟤https://drop.download/de2zx18mya5y🔹️🔹️♤🟤" },
{"nameen":"Queens on the Run 2023", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/01-1586.jpg", "description":"تنطلق أربع نساء أخيرًا في رحلة برّية خططن لها وهنّ على مقاعد الدراسة الثانوية، ولكن ليس لديهنّ أدنى فكرة عمّا سيصطدمن به… وبالمعنى الحرفي للكلمة أحيانًا.", "search":"اكشن كوميديا y2023 افلام اجنبي افلام نتفلكس Netflix", "SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi3860775961/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-c70hf0nqfpwg.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-fvcipfxilwja.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-qsocm3nb6mdb.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-1qzwwitjtimn.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/0189im84fwvu🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/yGPqbzBRJZf1Rv6🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-v1yl8g3pnspp.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-217b9kjnejx7.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/dnfoqt78fq8r🔹️emurlwithdownload🔹️♤🟤https://ok.ru/videoembed/4640975227646🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/c70hf0nqfpwg.html🔹️🔹️active🟤🟤https://uptobox.com/dnfoqt78fq8r🔹️🔹️♤🟤🟤https://guccihide.com/w/0189im84fwvu🔹️🔹️♤🟤🟤https://streamtape.com/v/yGPqbzBRJZf1Rv6🔹️🔹️♤🟤🟤https://streamvid.net/v1yl8g3pnspp🔹️🔹️♤🟤🟤https://upstream.to/217b9kjnejx7🔹️🔹️♤🟤🟤https://gofile.io/d/GHNZUV🔹️🔹️♤🟤🟤https://drop.download/gjx2xveee5mz🔹️🔹️♤🟤" },
{"nameen":"The Fix-It Man 2022", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/01-1596.jpg", "description":"يصبح خطأ شقيقين فادح فيما يتعلق برجل مسن نعمة غير متوقعة لأعمالهم في طلاء السيارات. لكن هل يمكنهم التعامل مع كل الاهتمام؟", "search":"كوميديا y2022 افلام تركية ", "SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi1335674137/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-oz4st4fdi91d.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-bcuzzjfg8p5o.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-j0xl60zooryj.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-7wrdr6o6d90r.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/bgsc9hz4y0wc🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-u6yplr312b2v.html🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-wzxbtsh1pmk6.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-baai00j6p49x.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/1uif5pjy51mq🔹️emurlwithdownload🔹️♤🟤https://ok.ru/videoembed/4877597477625🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/oz4st4fdi91d.html🔹️🔹️active🟤🟤https://uptobox.com/1uif5pjy51mq🔹️🔹️♤🟤🟤https://guccihide.com/w/bgsc9hz4y0wc🔹️🔹️♤🟤🟤https://streamvid.net/wzxbtsh1pmk6🔹️🔹️♤🟤🟤https://upstream.to/baai00j6p49x🔹️🔹️♤🟤🟤https://gofile.io/d/3vygUQ🔹️🔹️♤🟤🟤https://drop.download/vaine6wwwbx5🔹️🔹️♤🟤" },
{"nameen":"فيلم The Last Kingdom: Seven Kings Must Die 2023", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/01-1587.jpg", "description":"في أعقاب موت الملك إدوارد، ينطلق أوتريد من بيبانبورغ ورفاقه في مغامرة عبر مملكة ممزّقة آملًا توحيد إنجلترا في نهاية الأمر.", "search":"اكشن تاريخى دراما y2023 افلام اجنبي افلام نتفلكس Drama Netflix", "SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi2134033433/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-rnir0f19z5cp.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-mo4ktj4ba46i.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-4cc2ctpv8xad.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-2ydaa174ei7k.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/gbqh6dibbprz🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-tz2wlof5roxj.html🔹️emurlwithdownload🔹️♤🟤https://ok.ru/videoembed/4640996920062🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/rnir0f19z5cp.html🔹️🔹️active🟤🟤https://guccihide.com/w/gbqh6dibbprz🔹️🔹️♤🟤🟤https://streamvid.net/tz2wlof5roxj🔹️🔹️♤🟤🟤https://drop.download/w3e155dvjtdn🔹️🔹️♤🟤" },
{"nameen":"Qorin 2022", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/01-1576.jpg", "description":"لطالما كانت زهرة ، طالبة في السنة الثالثة في مدرسة روديت الداخلية ، طالبة نموذجية لديها العديد من الإنجازات في المدرسة.", "search":"رعب y2022 افلام اجنبي Horror ", "SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi3721905433/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-aw9o5k4l65b8.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-4cgusoh5cu3f.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-1xosdocsfso9.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-p0l34wzfktf2.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/s2vsaxh31oz1🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-8lot63822hud.html🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-0jd67b6hypi1.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-yj4z4ev0ro5v.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/c898wtxl68yt🔹️emurlwithdownload🔹️♤🟤https://ok.ru/videoembed/4888498146041🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/aw9o5k4l65b8.html🔹️🔹️active🟤🟤https://uptobox.com/c898wtxl68yt🔹️🔹️♤🟤🟤https://guccihide.com/w/s2vsaxh31oz1🔹️🔹️♤🟤🟤https://streamvid.net/0jd67b6hypi1🔹️🔹️♤🟤🟤https://upstream.to/yj4z4ev0ro5v🔹️🔹️♤🟤🟤https://gofile.io/d/8sMXWl🔹️🔹️♤🟤🟤https://drop.download/ap08e58xm3i0🔹️🔹️♤🟤" },
{"nameen":"فيلم Dungeons & Dragons: Honor Among Thieves 2023", "namear":"فيلم مدبلج", "img":"https://1cima4u.com/wp-content/uploads/01-1570.jpg", "description":"ينطلق لص ساحر ومجموعة من المغامرين غير المتوقعينفي مهمة ملحمية لاستعادة الآثار المفقودة ، لكن الأمور تنحرف بشكل خطير عندما تتعارض مع الأشخاص الخطأ.", "search":"اكشن كوميديا مغامرات y2023 افلام اجنبي ", "SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi3660563481/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-yr46l5edwmw9.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-hectepwx5sr8.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-aqz6ju1aburk.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-lzjc9yh7la5o.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/l3974a0ahqpx🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-1hmcc8cme0kb.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/xrgzeojpVqHkRLB🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-dict9zhre8z0.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-4mwatgxewh1p.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/wkbacrbfghju🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/yr46l5edwmw9.html🔹️🔹️active🟤🟤https://uptobox.com/wkbacrbfghju🔹️🔹️♤🟤🟤https://guccihide.com/w/l3974a0ahqpx🔹️🔹️♤🟤🟤https://streamtape.com/v/xrgzeojpVqHkRLB🔹️🔹️♤🟤🟤https://streamvid.net/dict9zhre8z0🔹️🔹️♤🟤🟤https://upstream.to/4mwatgxewh1p🔹️🔹️♤🟤🟤https://gofile.io/d/W7LplJ🔹️🔹️♤🟤🟤https://drop.download/0lsgcen2jngh🔹️🔹️♤🟤" },
{"nameen":"فيلم Dungeons & Dragons: Honor Among Thieves 2023", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/02-1563.jpg", "description":"ينطلق لص ساحر ومجموعة من المغامرين غير المتوقعينفي مهمة ملحمية لاستعادة الآثار المفقودة ، لكن الأمور تنحرف بشكل خطير عندما تتعارض مع الأشخاص الخطأ.", "search":"اكشن كوميديا مغامرات y2023 افلام اجنبي ", "SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi3660563481/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-nmv9vldetw19.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-8ckwt3yuo4ok.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-zftcdxci30jq.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-t6e7ru3lzy65.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/6vj22x1tvg48🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-tmhm8m9d6f7o.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/JplGWRwp1YsjXGe🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-cryczs10861u.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-iy1apv1bjxq3.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/k5gfw6q7l4r0🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/nmv9vldetw19.html🔹️🔹️active🟤🟤https://uptobox.com/k5gfw6q7l4r0🔹️🔹️♤🟤🟤https://guccihide.com/w/6vj22x1tvg48🔹️🔹️♤🟤🟤https://streamtape.com/v/JplGWRwp1YsjXGe🔹️🔹️♤🟤🟤https://streamvid.net/cryczs10861u🔹️🔹️♤🟤🟤https://upstream.to/iy1apv1bjxq3🔹️🔹️♤🟤🟤https://gofile.io/d/yWyAKH🔹️🔹️♤🟤🟤https://drop.download/nhnz1i9mdut2🔹️🔹️♤🟤" },
{"nameen":"The Donor Party 2023", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/0-11480.jpg", "description":"جاكلين تريد طفلا. ولكن بعد طلاق فوضوي وسنوات عقيمة من المواعدة عبر الإنترنت ، أدركت أنها لا تحتاج إلى زوج لتصبح أماً. تفقس هي وأصدقاؤها المقربون خطة لتحملها في حفل خاص للغاية.", "search":"كوميديا y2023 افلام اجنبي ", "SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi1920386329/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-blx2hzlcyubn.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-z84164vwmrkp.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-vble7r6jfzzt.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-2ceh8jy7ketg.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/gro1rvd074st🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-lkapey67vca5.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/4zW3xeA2dvtKqoX🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-ccv3uv5mlnkz.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-jfgdlfsc5zae.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/oxmk5oaz11pr🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/blx2hzlcyubn.html🔹️🔹️active🟤🟤https://uptobox.com/oxmk5oaz11pr🔹️🔹️♤🟤🟤https://guccihide.com/w/gro1rvd074st🔹️🔹️♤🟤🟤https://streamtape.com/v/4zW3xeA2dvtKqoX🔹️🔹️♤🟤🟤https://streamvid.net/ccv3uv5mlnkz🔹️🔹️♤🟤🟤https://upstream.to/jfgdlfsc5zae🔹️🔹️♤🟤🟤https://gofile.io/d/KDi30G🔹️🔹️♤🟤🟤https://drop.download/uop3gvnc5tdc🔹️🔹️♤🟤" },
{"nameen":"Operation Nation 2023", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/01-1569.jpg", "description":"تنشأ علاقة حبّ محظورة بين عضو في جماعة قومية في وارسو وناشطة يسارية شغوفة، الأمر الذي يؤول إلى سلسلة أحداث غير متوقعة.", "search":"دراما كوميديا y2022 افلام اجنبي افلام نتفلكس Drama Netflix", "SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi2591474201/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-9mfhosahxmta.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-ak460zaib0df.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-v4tph2gol84x.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-if9mk2bx3t3j.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/ku1bohsbcebb🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-5zf32pklk28q.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/x2lKAKxk9VFkOVB🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-xptpbtp2e31q.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-mvcr7ijdsigv.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/lhhl7jl204hu🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/9mfhosahxmta.html🔹️🔹️active🟤🟤https://uptobox.com/lhhl7jl204hu🔹️🔹️♤🟤🟤https://guccihide.com/w/ku1bohsbcebb🔹️🔹️♤🟤🟤https://streamtape.com/v/x2lKAKxk9VFkOVB🔹️🔹️♤🟤🟤https://streamvid.net/xptpbtp2e31q🔹️🔹️♤🟤🟤https://upstream.to/mvcr7ijdsigv🔹️🔹️♤🟤🟤https://gofile.io/d/oOyzMC🔹️🔹️♤🟤🟤https://drop.download/izp6xszrhbi7🔹️🔹️♤🟤" },
{"nameen":"A Lot of Nothing 2022", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/01-1566.jpg", "description":"في إطار من الكوميديا والجريمة، يعيش جيمس وفانيسا حياة زوجية مثالية من النجاح والحب، ولكن تنقلب حياتهما تمامًا حينما يشهدا على جريمة قتل ارتكبها جارهما.", "search":"اثارة دراما كوميديا y2022 افلام اجنبي Thriller Drama ", "SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi1452131609/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-q1oaisu4aakv.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-sj06psukx3mo.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-jfrkvacbxewm.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-u2x7yw9oesan.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/jjklgd14hn9m🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-4jt41h022xmx.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/bkQMxA6vBesPX9x🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-op4lt063kxo1.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-30gsvnmbfiqr.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/cmc7y1mxvuwr🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/q1oaisu4aakv.html🔹️🔹️active🟤🟤https://uptobox.com/cmc7y1mxvuwr🔹️🔹️♤🟤🟤https://guccihide.com/w/jjklgd14hn9m🔹️🔹️♤🟤🟤https://streamtape.com/v/bkQMxA6vBesPX9x🔹️🔹️♤🟤🟤https://streamvid.net/op4lt063kxo1🔹️🔹️♤🟤🟤https://upstream.to/30gsvnmbfiqr🔹️🔹️♤🟤🟤https://drop.download/yjg3tmap66gx🔹️🔹️♤🟤" },
{"nameen":"The Seven Faces of Jane 2022", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/01-1565.jpg", "description":"", "search":"دراما y2022 افلام اجنبي Drama ", "SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi2766456089/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-ec3vv5n2gb5v.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-w58qaqym9az2.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-o8y8mlkbzzj5.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-0pryub72uhv1.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/0l9vlaiqutsz🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-vmvaeu6yxy05.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/Vr7o694y3ltK7G2🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-9y7ieo7zbcj9.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-fei0ety67di8.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/mt54s1yvsez3🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/ec3vv5n2gb5v.html🔹️🔹️active🟤🟤https://uptobox.com/mt54s1yvsez3🔹️🔹️♤🟤🟤https://guccihide.com/w/0l9vlaiqutsz🔹️🔹️♤🟤🟤https://streamtape.com/v/Vr7o694y3ltK7G2🔹️🔹️♤🟤🟤https://streamvid.net/9y7ieo7zbcj9🔹️🔹️♤🟤🟤https://upstream.to/fei0ety67di8🔹️🔹️♤🟤🟤https://gofile.io/d/rIg2ga🔹️🔹️♤🟤🟤https://drop.download/ghurhugj37j8🔹️🔹️♤🟤" },
{"nameen":"Ripper's Revenge 2023", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/02-1562.jpg", "description":"", "search":"رعب y2023 افلام اجنبي Horror ", "SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi292668441/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-l31bf7qaon62.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-8r0ahknlb548.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-v581uya9tb5k.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-hvechnuu57df.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/a64abcok6se1🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-0ffzhoj24ode.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/jAxzGxwpGJigQO🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-0p7okkm7um6q.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-giefb5mykdqf.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/3xfjfh9jjqsd🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/l31bf7qaon62.html🔹️🔹️active🟤🟤https://uptobox.com/3xfjfh9jjqsd🔹️🔹️♤🟤🟤https://guccihide.com/w/a64abcok6se1🔹️🔹️♤🟤🟤https://streamtape.com/v/jAxzGxwpGJigQO🔹️🔹️♤🟤🟤https://streamvid.net/0p7okkm7um6q🔹️🔹️♤🟤🟤https://upstream.to/giefb5mykdqf🔹️🔹️♤🟤🟤https://gofile.io/d/vEdOOX🔹️🔹️♤🟤🟤https://drop.download/th9yz7bsf850🔹️🔹️♤🟤" },
{"nameen":"UFO Sweden 2022", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/0-11474.jpg", "description":"مراهقة متمردة وُضعت في الحضانة تشتبه في أن والدها لم يمت لكنه اختطف. إنها مصممة على معرفة الحقيقة بمساعدة جمعية UFO.", "search":"اثارة خيال علمى مغامرات y2022 افلام اجنبي Thriller ", "SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi1744553241/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-2a9yg93c1olp.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-hya59xlgl0px.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-bik9hkfx78i5.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-q869imm1t1si.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/qt5b3wbwswep🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-r44v7t2me65l.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/3Ayep4Ybw1Iam8🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-tb3itlh5xnlt.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-8wd756fc10ib.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/jsrvl4wc2nrw🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/2a9yg93c1olp.html🔹️🔹️active🟤🟤https://uptobox.com/jsrvl4wc2nrw🔹️🔹️♤🟤🟤https://guccihide.com/w/qt5b3wbwswep🔹️🔹️♤🟤🟤https://streamtape.com/v/3Ayep4Ybw1Iam8🔹️🔹️♤🟤🟤https://streamvid.net/tb3itlh5xnlt🔹️🔹️♤🟤🟤https://upstream.to/8wd756fc10ib🔹️🔹️♤🟤🟤https://gofile.io/d/2XlBoj🔹️🔹️♤🟤🟤https://drop.download/j2yb0oi122oo🔹️🔹️♤🟤" },
{"nameen":"Infidelity Can Be Fatal 2023", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/0-11473.jpg", "description":"يتبع محققًا خاصًا يعتقد أنها قابلت حب حياتها في لقاء غير متوقع ، لكنه قد يكون أسوأ كابوس لها.", "search":"اثارة y2023 افلام اجنبي Thriller ", "SubButtons":"العرض🔲Movies🔲🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-gjqchtju0tsg.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-2zesstmbny9f.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-680ti5w8p8oj.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-rutm2jwjagbr.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/axry4gzpgx5k🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-udad29z9thf2.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/DWO3J7AWrDtkgyZ🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-zyjun5i71zba.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-prnjkysd5pdq.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/kteoyaxygqwa🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/gjqchtju0tsg.html🔹️🔹️active🟤🟤https://uptobox.com/kteoyaxygqwa🔹️🔹️♤🟤🟤https://guccihide.com/w/axry4gzpgx5k🔹️🔹️♤🟤🟤https://streamtape.com/v/DWO3J7AWrDtkgyZ🔹️🔹️♤🟤🟤https://streamvid.net/zyjun5i71zba🔹️🔹️♤🟤🟤https://upstream.to/prnjkysd5pdq🔹️🔹️♤🟤🟤https://gofile.io/d/a7j9rM🔹️🔹️♤🟤🟤https://drop.download/0q6itvc6tqng🔹️🔹️♤🟤" },
{"nameen":"Nightsiren 2022", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/0-11468.jpg", "description":"تعود شابة إلى قريتها الجبلية ، بحثًا عن إجابات عن طفولتها المضطربة ، ولكن بينما تحاول كشف الحقيقة ، تدفع الخرافات القديمة القرويين إلى اتهامها بالسحر والقتل.", "search":"اثارة دراما غموض y2022 افلام اجنبي Thriller Drama ", "SubButtons":"العرض🔲Movies🔲🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-3h3hjusvfu9i.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-kg4df3uo5j3z.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-d1ec5k6s994s.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-ima1k9peqdht.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/o3qodoiohffe🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-48z0urlpebsm.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/3xOYZMJq3jsdYlv🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-3qutlhly7hvz.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-0n4mrg4q53kj.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/vjt5ql6fymj1🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/3h3hjusvfu9i.html🔹️🔹️active🟤🟤https://uptobox.com/vjt5ql6fymj1🔹️🔹️♤🟤🟤https://guccihide.com/w/o3qodoiohffe🔹️🔹️♤🟤🟤https://streamtape.com/v/3xOYZMJq3jsdYlv🔹️🔹️♤🟤🟤https://streamvid.net/3qutlhly7hvz🔹️🔹️♤🟤🟤https://upstream.to/0n4mrg4q53kj🔹️🔹️♤🟤🟤https://gofile.io/d/jKvWON🔹️🔹️♤🟤🟤https://drop.download/9d5osinqbkfp🔹️🔹️♤🟤" },
{"nameen":"Raquel 1,1 2022", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/0-11470.jpg", "description":"راكيل مراهقة تنتقل مع والدها إلى بلدة صغيرة بحثًا عن حياة جديدة. خلال أيامها الأولى هناك تعتقد أنها أعطيت مهمة مهمة ومثيرة للجدل تتعلق بالكتاب المقدس.", "search":"اثارة y2022 افلام اجنبي Thriller ", "SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi3296118041/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-9vqzws7bczqh.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-c7tamcawuus7.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-tt5dhikbxs51.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-il42tpxqx0x1.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/ose92ay93z78🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-4rf6txx9qnwv.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/0J0g3pAV3xiboBP🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-7i0sffog03pd.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-4uney60uqlin.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/e3gdykb6fh9w🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/9vqzws7bczqh.html🔹️🔹️active🟤🟤https://uptobox.com/e3gdykb6fh9w🔹️🔹️♤🟤🟤https://guccihide.com/w/ose92ay93z78🔹️🔹️♤🟤🟤https://streamtape.com/v/0J0g3pAV3xiboBP🔹️🔹️♤🟤🟤https://streamvid.net/7i0sffog03pd🔹️🔹️♤🟤🟤https://upstream.to/4uney60uqlin🔹️🔹️♤🟤🟤https://gofile.io/d/DyZcVD🔹️🔹️♤🟤🟤https://drop.download/d5ydzp5t0lmn🔹️🔹️♤🟤" },
{"nameen":"فيلم Vanished: Searching for My Sister 2022", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/0-11469.jpg", "description":"بعد اختفاء أختها التوأم ، تتولى جادا زمام الأمور بنفسها ، وتتنكر في هيئة أختها وتنجذب إلى عالم من المخدرات بينما تحاول اكتشاف ما حدث لها حقًا.", "search":"اثارة غموض y2022 افلام اجنبي Thriller ", "SubButtons":"العرض🔲Movies🔲🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-yx715i1o3qqy.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-k4xv86kvpj3z.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-mkagj8pf9g2g.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-5eb1i62z9lkd.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/g63k2lq71857🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-4015ouduccet.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/Pb7QV89BVBS0d7p🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-14uyh04nunjh.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-ionfxo2ucco2.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/yuv7xyjeqyq0🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/yx715i1o3qqy.html🔹️🔹️active🟤🟤https://uptobox.com/yuv7xyjeqyq0🔹️🔹️♤🟤🟤https://guccihide.com/w/g63k2lq71857🔹️🔹️♤🟤🟤https://streamtape.com/v/Pb7QV89BVBS0d7p🔹️🔹️♤🟤🟤https://streamvid.net/14uyh04nunjh🔹️🔹️♤🟤🟤https://upstream.to/ionfxo2ucco2🔹️🔹️♤🟤🟤https://gofile.io/d/xnlOYy🔹️🔹️♤🟤🟤https://drop.download/k0bon3ppzikl🔹️🔹️♤🟤" },
{"nameen":"Family Dinner 2022", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/0-11467.jpg", "description":"مراهقة تعاني من زيادة الوزن تقضي العطلة في مزرعة خالتها أملاً في الحصول على مساعدة لإنقاص وزنها ، ولكن بعد وصولها بفترة وجيزة ، بدأت تشك في وجود خطأ ما في هذا المكان.", "search":"دراما رعب غموض y2022 افلام اجنبي Drama Horror ", "SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi2548417049/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-szuho51dxheu.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-0c9igjyw58lu.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-aq41kls6gcys.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-7oenh2ad1hl3.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/wvxzu3bvvnls🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-ppl3zwdndcif.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/0Bpb8DqaZeIm6W🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-5z1503dstpje.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-h95rz457lfq5.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/jnp877a5iny1🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/szuho51dxheu.html🔹️🔹️active🟤🟤https://uptobox.com/jnp877a5iny1🔹️🔹️♤🟤🟤https://guccihide.com/w/wvxzu3bvvnls🔹️🔹️♤🟤🟤https://streamtape.com/v/0Bpb8DqaZeIm6W🔹️🔹️♤🟤🟤https://streamvid.net/5z1503dstpje🔹️🔹️♤🟤🟤https://upstream.to/h95rz457lfq5🔹️🔹️♤🟤🟤https://gofile.io/d/7b5nNa🔹️🔹️♤🟤🟤https://drop.download/1xxv1pjhyiiy🔹️🔹️♤🟤" },
{"nameen":"Bunker 2022", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/0-11466.jpg", "description":"تواجه مجموعة من الجنود المحاصرين في مخبأ خلال الحرب العالمية الأولى وجودًا شريرًا يحولهم ببطء ضد بعضهم البعض.", "search":"اثارة حروب رعب y2022 افلام اجنبي Thriller Horror ", "SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi1908458777/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-603wkvpl6l02.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-pwk2ldz3d8gc.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-d8qj3weiiczs.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-4ii94ix0ph5g.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/dehdfixfga3l🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-admarpun5ieg.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/O4vg6zqRvYC9JA🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-lnk97d7svx8b.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-l5rtz1079kdu.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/q4hxce7t10kr🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/603wkvpl6l02.html🔹️🔹️active🟤🟤https://uptobox.com/q4hxce7t10kr🔹️🔹️♤🟤🟤https://guccihide.com/w/dehdfixfga3l🔹️🔹️♤🟤🟤https://streamtape.com/v/O4vg6zqRvYC9JA🔹️🔹️♤🟤🟤https://streamvid.net/lnk97d7svx8b🔹️🔹️♤🟤🟤https://upstream.to/l5rtz1079kdu🔹️🔹️♤🟤🟤https://gofile.io/d/sJnmBY🔹️🔹️♤🟤🟤https://drop.download/2r1p01qmgqg7🔹️🔹️♤🟤" },
{"nameen":"A Good Person 2023", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/0-11465.jpg", "description":"في إطار من الدراما، تدور الأحداث حول أليسون والتي تنهار حياتها بعد تورطها في حادث مميت.", "search":"اثارة جريمة دراما y2023 افلام اجنبي Thriller Crime Drama ", "SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi1376896025/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-2ct5e07o39oy.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-j3n33yas8klp.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-upm7o8gh9swv.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-rap3f1740kzz.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/hcg5u3zli1li🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-pcwz3kfndv79.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/2KdZPYGYPOIKJw🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-dbvbdxny90ks.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-9drjkjxh848p.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/jx0jrmryq7xl🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/2ct5e07o39oy.html🔹️🔹️active🟤🟤https://uptobox.com/jx0jrmryq7xl🔹️🔹️♤🟤🟤https://guccihide.com/w/hcg5u3zli1li🔹️🔹️♤🟤🟤https://streamtape.com/v/2KdZPYGYPOIKJw🔹️🔹️♤🟤🟤https://streamvid.net/dbvbdxny90ks🔹️🔹️♤🟤🟤https://upstream.to/9drjkjxh848p🔹️🔹️♤🟤🟤https://gofile.io/d/VFBQN3🔹️🔹️♤🟤🟤https://drop.download/srfmdo8w9thm🔹️🔹️♤🟤" },
{"nameen":"Fogaréu 2022", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/01-1535.jpg", "description":"بين الماضي الاستعماري والحداثة الساحقة للأعمال الزراعية ، تعد مدينة غوياس مسرح اللقاء بين فرناندا الشابة وجذورها السرية.", "search":"دراما y2022 افلام اجنبي Drama ", "SubButtons":"العرض🔲Movies🔲🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-soqhgh3zui2q.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-u8doe559p6jf.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-3iwe3aou8zhv.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-j95mwvn8d5qf.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/cvmg4pmm9oox🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-0ax5yvb7avyv.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/akaMZGa40DSOYw🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-qrmp81c5txae.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-k6hu9jh3wa2m.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/0oeieio1eo5a🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/soqhgh3zui2q.html🔹️🔹️active🟤🟤https://uptobox.com/0oeieio1eo5a🔹️🔹️♤🟤🟤https://guccihide.com/w/cvmg4pmm9oox🔹️🔹️♤🟤🟤https://streamtape.com/v/akaMZGa40DSOYw🔹️🔹️♤🟤🟤https://streamvid.net/qrmp81c5txae🔹️🔹️♤🟤🟤https://upstream.to/k6hu9jh3wa2m🔹️🔹️♤🟤🟤https://gofile.io/d/FmbnwZ🔹️🔹️♤🟤🟤https://drop.download/4ufnqw90rxaf🔹️🔹️♤🟤" },
{"nameen":"Circle Line 2023", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/01-1534.jpg", "description":"تدور أحداث القصة في مدينة بجنوب شرق آسيا ، وهي تتبع مجموعة من الركاب في آخر قطار لمترو الأنفاقإلى المنزل فقط ليحرف القطار عن مساره ويصطدم بنفق مهجور يطارده وحش مجهول بقية الركاب.", "search":"اكشن رعب y2023 افلام اجنبي Horror ", "SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi701744409/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-dgdmysagu77k.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-k51h8d215p6t.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-0rlndusbn0yw.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-rweqsor1orwh.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/h0ocibycuaoo🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-1jc7ukg8vsmq.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/AKVDLVmr4JIXlYQ🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-vu2kx8xer49j.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-sqbbkce1zebr.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/ecg8gy8elit1🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/dgdmysagu77k.html🔹️🔹️active🟤🟤https://uptobox.com/ecg8gy8elit1🔹️🔹️♤🟤🟤https://guccihide.com/w/h0ocibycuaoo🔹️🔹️♤🟤🟤https://streamtape.com/v/AKVDLVmr4JIXlYQ🔹️🔹️♤🟤🟤https://streamvid.net/vu2kx8xer49j🔹️🔹️♤🟤🟤https://upstream.to/sqbbkce1zebr🔹️🔹️♤🟤🟤https://gofile.io/d/bd0xWR🔹️🔹️♤🟤🟤https://drop.download/u19p3ok6d7x9🔹️🔹️♤🟤" },
{"nameen":"Hunger 2023", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/0-11457.jpg", "description":"تدفع طاهية شابّة موهوبة في إعداد طعام الشوارع نفسها إلى أقصى الحدود بعد قبول دعوة للتدريب تحت إشراف طاهٍ شهير لا يرحم.", "search":"اثارة دراما y2023 افلام اسيوية افلام نتفلكس Thriller Drama Netflix", "SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi3191063577/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-7pzaugd1egda.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-atmnicv2e4km.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-shtek298sdtr.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-vxp20wqqq0ud.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/ubpgsb0owjis🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-k4ex657650z2.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/AJDaLeepvZHXLKZ🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-2vyb6d6cb6pv.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-tekekf4fkp22.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/q4fu6hi2wtqr🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/7pzaugd1egda.html🔹️🔹️active🟤🟤https://uptobox.com/q4fu6hi2wtqr🔹️🔹️♤🟤🟤https://guccihide.com/w/ubpgsb0owjis🔹️🔹️♤🟤🟤https://streamtape.com/v/AJDaLeepvZHXLKZ🔹️🔹️♤🟤🟤https://streamvid.net/2vyb6d6cb6pv🔹️🔹️♤🟤🟤https://upstream.to/tekekf4fkp22🔹️🔹️♤🟤🟤https://gofile.io/d/tqEpFe🔹️🔹️♤🟤🟤https://drop.download/ga2zyzrnng8f🔹️🔹️♤🟤" },
{"nameen":"65 2023", "namear":"فيلم مدبلج", "img":"https://1cima4u.com/wp-content/uploads/0-11104.jpg", "description":"تدور أحداث الفيلم حول رائد فضاء يهبط على كوكب غامض، فيكتشف أنه ليس وحيدًا علي الكوكب.", "search":"اكشن دراما مغامرات y2023 افلام اجنبي Drama ", "SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi2956444953/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-bm3remli1s2s.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-h91m1z15u4gv.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-iv2jmacb12zo.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-njb89zrddiim.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/sejlugriet9s🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-9h22bovkic7z.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/b3wbxKkGwWuPZzo🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-v8lmj144nfp0.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-b7ul86yl7gqb.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/o17nlhipxnny🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/bm3remli1s2s.html🔹️🔹️active🟤🟤https://uptobox.com/o17nlhipxnny🔹️🔹️♤🟤🟤https://guccihide.com/w/sejlugriet9s🔹️🔹️♤🟤🟤https://streamtape.com/v/b3wbxKkGwWuPZzo🔹️🔹️♤🟤🟤https://streamvid.net/v8lmj144nfp0🔹️🔹️♤🟤🟤https://upstream.to/b7ul86yl7gqb🔹️🔹️♤🟤🟤https://gofile.io/d/RlZMxW🔹️🔹️♤🟤🟤https://drop.download/k8nvncm9h8eb🔹️🔹️♤🟤" },
{"nameen":"فيلم Shazam! Fury of the Gods 2023", "namear":"فيلم مدبلج", "img":"https://1cima4u.com/wp-content/uploads/0-11279.jpg", "description":"يستكمل العمل مغامرة المراهق بيلي، والذي يتحول إلى بطل خارق بالغ يُدعى شازام، ويجد نفسه في مواجهة مع الآلهة.", "search":"اثارة اكشن جريمة فانتازيا مغامرات y2023 افلام اجنبي Thriller Crime ", "SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi2704786713/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-la199qes1raz.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-zlfwzouw64xn.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-nxn8xzle0dah.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-m73nl3ee7o73.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/4v6rg6a5odnk🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-tfl8imipz3rt.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/L2wGvG0kdWfRQqa🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-80484dgx5irv.html🔹️emurlwithdownload🔹️♤🟤https://ok.ru/videoembed/4828186675961🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/la199qes1raz.html🔹️🔹️active🟤🟤https://guccihide.com/w/4v6rg6a5odnk🔹️🔹️♤🟤🟤https://streamtape.com/v/L2wGvG0kdWfRQqa🔹️🔹️♤🟤🟤https://streamvid.net/80484dgx5irv🔹️🔹️♤🟤🟤https://drop.download/qjecea0p6sps🔹️🔹️♤🟤" },
{"nameen":"Voices in the Wind 2020", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/01-1527.jpg", "description":"تذهب “هارو” في رحلة طويلة لزيارة بلدتها الأم “أوتسوتشي”، التي دُمِرت في تسونامي 2011.رحلة تخرج فيها وحيدة، مدفوعة بالحنين لمن سبقوها في الرحيل عن هذا العالم.", "search":"دراما y2020 افلام اسيوية Drama ", "SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi2596913433/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-kro1eu88gerh.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-eagke97bwwoz.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-21yapbbsus5n.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-86jwiay2vg2v.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/yiwpou8juccm🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-issogkhgfg9w.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/JobXe32mwzFVqy🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-v6oa80ac7pih.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-4ewzpszfpb87.html🔹️emurlwithdownload🔹️♤🟤https://ok.ru/videoembed/4822340995833🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/kro1eu88gerh.html🔹️🔹️active🟤🟤https://guccihide.com/w/yiwpou8juccm🔹️🔹️♤🟤🟤https://streamtape.com/v/JobXe32mwzFVqy🔹️🔹️♤🟤🟤https://streamvid.net/v6oa80ac7pih🔹️🔹️♤🟤🟤https://upstream.to/4ewzpszfpb87🔹️🔹️♤🟤🟤https://gofile.io/d/Ob513l🔹️🔹️♤🟤🟤https://drop.download/qblabjvqaznm🔹️🔹️♤🟤" },
{"nameen":"Zenkamono 2021", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/01-1526.jpg", "description":"عملت كايا ضابطة مراقبة لمدة 3 سنوات تجد وظيفتها مجزية لكن أحد العملاء ماكوتو وهو قاتل سابق يختفي فجأة في الوقت الذي تحقق فيه الشرطة في سلسلة من جرائم القتل التي ارتكبها أحد الغموض.", "search":"جريمة دراما y2021 افلام اسيوية Crime Drama ", "SubButtons":"العرض🔲Movies🔲🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-xe2kehdnqcyv.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-8pnukguw2d1p.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-i40gsllnl7li.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-k6ienqhpgxat.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/5jy78knuu3kl🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-7fk5hulymkf1.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/oeP7poq8LgIJlYk🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-ba3cs3b2u7mk.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-97k28m1ro300.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/2jakqbeo7imk🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/xe2kehdnqcyv.html🔹️🔹️active🟤🟤https://uptobox.com/2jakqbeo7imk🔹️🔹️♤🟤🟤https://guccihide.com/w/5jy78knuu3kl🔹️🔹️♤🟤🟤https://streamtape.com/v/oeP7poq8LgIJlYk🔹️🔹️♤🟤🟤https://streamvid.net/ba3cs3b2u7mk🔹️🔹️♤🟤🟤https://upstream.to/97k28m1ro300🔹️🔹️♤🟤🟤https://drop.download/7yvcd7ifsrma🔹️🔹️♤🟤" },
{"nameen":"Twenty Hacker 2021", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/01-1525.jpg", "description":"يدير الهاكر العبقري Hex نادي Better World “الهاكر الأبيض”. عندما يكتشف المتسللين الذين دمروا شركة والده ، فإنه يحتاج إلى كل المساعدة التي يمكنه الحصول عليها من أعضاء ناديه من أجل القضاء عليهم.", "search":"اكشن رومانسى غموض كوميديا y2021 افلام اسيوية ", "SubButtons":"العرض🔲Movies🔲🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-za612id7vvz5.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-e12defcvb4n4.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-mn7hx6srkurw.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-x4v4ka3xtgsp.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/q55c1lsg37r5🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-cycgh7zzafw9.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/xgGXZ38zX2hkKyR🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-b6hpphks9c12.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-tjbbzslynzly.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/vfnn4lo74jd5🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/za612id7vvz5.html🔹️🔹️active🟤🟤https://uptobox.com/vfnn4lo74jd5🔹️🔹️♤🟤🟤https://guccihide.com/w/q55c1lsg37r5🔹️🔹️♤🟤🟤https://streamtape.com/v/xgGXZ38zX2hkKyR🔹️🔹️♤🟤🟤https://streamvid.net/b6hpphks9c12🔹️🔹️♤🟤🟤https://upstream.to/tjbbzslynzly🔹️🔹️♤🟤🟤https://gofile.io/d/xXiT0g🔹️🔹️♤🟤🟤https://drop.download/9iiucezrd4vy🔹️🔹️♤🟤" },
{"nameen":"The Wandering Moon 2022", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/01-1524.jpg", "description":"في نهار يوم ممطر يلتقى الطالب الجامعي “سايكي فومي” بالفتاة الصغيرة المدعوة “كاناي ساراسا” ويدعوها بالمكوث في منزله بعد أن أخبرته بعدم رغبتها بالعودة لمنزل عمتها، فيعيش الاثنان سويًا سعداء لشهرين إلى أن يُقبض على فومي بتهمة “مشتهي الأطفال الذي اختطف فتاة صغيرة” وبعد مرور 15 عامًا يلتقي الاثنان مرة أخرى.", "search":"دراما غموض y2022 افلام اسيوية Drama ", "SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi4223911193/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-r5c92x6fyo1h.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-ewbd4za1iffo.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-ato8vvc88bfq.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-2kzmanmxxny9.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/4kaf0ldt7ixr🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-spxmh4aj9omm.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/m3YYXy4l39hbwV3🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-cptk9oy8m1hs.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-s5tzs1jjwgpj.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/njw0znvfjxuo🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/r5c92x6fyo1h.html🔹️🔹️active🟤🟤https://uptobox.com/njw0znvfjxuo🔹️🔹️♤🟤🟤https://guccihide.com/w/4kaf0ldt7ixr🔹️🔹️♤🟤🟤https://streamtape.com/v/m3YYXy4l39hbwV3🔹️🔹️♤🟤🟤https://streamvid.net/cptk9oy8m1hs🔹️🔹️♤🟤🟤https://upstream.to/s5tzs1jjwgpj🔹️🔹️♤🟤🟤https://drop.download/h5o0u25fdxi3🔹️🔹️♤🟤" },
{"nameen":"The Limit 2022", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/01-1523.jpg", "description":"فيلم تشويق واثارة حول شرطية تتخفى لتتعقب المجرم الذي يقف وراء قضية اختطاف مروعة. ستقوم سو أون، ضابطة الشرطة التي تتورط في القضية من خلال أخذ مكان والدي الضحية المختطفة. بينما تحارب لمطاردة المجرم، تجد نفسها عالقة في ألعاب ذهنية متوترة ومحفوفة بالمخاطر مع الخاطف.", "search":"اثارة جريمة غموض y2022 افلام اسيوية Thriller Crime ", "SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi2512504089/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-zny0blbb1khk.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-llqvo77sg2rg.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-u61dm5mctscq.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-qkmrnk33ybjr.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/d1ywqtyrv6bm🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-8eiqzb8tdugi.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/2ajoVRyoyPUZd9P🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-58vti50r3jx1.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-6k8as2hjsvte.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/tnyn71mhg4k7🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/zny0blbb1khk.html🔹️🔹️active🟤🟤https://uptobox.com/tnyn71mhg4k7🔹️🔹️♤🟤🟤https://guccihide.com/w/d1ywqtyrv6bm🔹️🔹️♤🟤🟤https://streamtape.com/v/2ajoVRyoyPUZd9P🔹️🔹️♤🟤🟤https://streamvid.net/58vti50r3jx1🔹️🔹️♤🟤🟤https://upstream.to/6k8as2hjsvte🔹️🔹️♤🟤🟤https://gofile.io/d/6VIiLL🔹️🔹️♤🟤🟤https://drop.download/7diuo9bsawzj🔹️🔹️♤🟤" },
{"nameen":"The Gossip 2021", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/01-1522.jpg", "description":"يعمل جونغ سوك بوظيفة جزئية كمرافق للرئيس تشوي الذي يوشك على الموت ليقوم برعايته في منزله ويقضي معظم وقته مع زميله بالعمل يي بال الثرثار فيحدثه عن براعة سي نا ويدعوها للمنزل فتتعقد الأحداث وتقع أموراً مفاجئة بعد ثمالتهم .", "search":"اثارة غموض كوميديا y2021 افلام اسيوية Thriller ", "SubButtons":"العرض🔲Movies🔲🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-h0dxdccw02l5.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-0kx6ebm041qi.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-zfg66iio3l2z.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-w9v0boie1hea.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/1sfdwvobffo8🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-nz5jkm2y5bse.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/bzmd2RYRBYUPeDl🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-61qtjw19gmm5.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-jq2vv6ffpyn1.html🔹️emurlwithdownload🔹️♤🟤https://ok.ru/videoembed/4822247082745🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/h0dxdccw02l5.html🔹️🔹️active🟤🟤https://guccihide.com/w/1sfdwvobffo8🔹️🔹️♤🟤🟤https://streamtape.com/v/bzmd2RYRBYUPeDl🔹️🔹️♤🟤🟤https://streamvid.net/61qtjw19gmm5🔹️🔹️♤🟤🟤https://upstream.to/jq2vv6ffpyn1🔹️🔹️♤🟤🟤https://gofile.io/d/z3mL1x🔹️🔹️♤🟤🟤https://drop.download/8vdl91zipqpz🔹️🔹️♤🟤" },
{"nameen":"فيلم One Day The First Love Invaded Me 2022", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/01-1521.jpg", "description":"", "search":"دراما رومانسى y2022 افلام اسيوية Drama ", "SubButtons":"العرض🔲Movies🔲🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-r69r1obinz25.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-gl2ggxy50mjy.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-4854ix8cd01w.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-afn9zcq3l7rj.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/zjcr6yj6i91g🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-qgc4oeo6yqga.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/1WqRZorpgpteWe4🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-yzqwyb7nbqpc.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-pnfgtstlg26f.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/ba888phlfiqj🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/r69r1obinz25.html🔹️🔹️active🟤🟤https://uptobox.com/ba888phlfiqj🔹️🔹️♤🟤🟤https://guccihide.com/w/zjcr6yj6i91g🔹️🔹️♤🟤🟤https://streamtape.com/v/1WqRZorpgpteWe4🔹️🔹️♤🟤🟤https://streamvid.net/yzqwyb7nbqpc🔹️🔹️♤🟤🟤https://upstream.to/pnfgtstlg26f🔹️🔹️♤🟤🟤https://gofile.io/d/paA6qU🔹️🔹️♤🟤🟤https://drop.download/fiucdwfh1jy3🔹️🔹️♤🟤" },
{"nameen":"My Chilling Roommate 2022", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/01-1520.jpg", "description":"يطلب الشبح جي تشان الذي فقد كل ذكرياته المساعدة من جونج سي ري التي يمكنها سماعه وقد وافقت على مساعدته للإبقاء على مسافة بعيداً عن جي تشان. يبدأ جونج سي ري وجي تشان البحث معاً للعثور علي ذكرياته المفقودة، في هذه الأثناء تُكشَف حقيقة موت جي تشان. يزهر الحب بين إلتياع جي تشان ومواساة جونج سي ري.", "search":"رعب رومانسى كوميديا y2022 افلام اسيوية Horror ", "SubButtons":"العرض🔲Movies🔲🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-lib0ogmyqw6x.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-bnxamvzjj3vm.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-s64gaufjsnig.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-9f64kh0svp57.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/p0buh4uqoc5l🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-v5tw30lvf5ky.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/beBdj2xe4gUPw6X🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-rq7pesazetd1.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-j7bs5bme51xq.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/r0crtpjdis3g🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/lib0ogmyqw6x.html🔹️🔹️active🟤🟤https://uptobox.com/r0crtpjdis3g🔹️🔹️♤🟤🟤https://guccihide.com/w/p0buh4uqoc5l🔹️🔹️♤🟤🟤https://streamtape.com/v/beBdj2xe4gUPw6X🔹️🔹️♤🟤🟤https://streamvid.net/rq7pesazetd1🔹️🔹️♤🟤🟤https://upstream.to/j7bs5bme51xq🔹️🔹️♤🟤🟤https://drop.download/ha0gnltgw19y🔹️🔹️♤🟤" },
{"nameen":"Man In Love 2021", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/01-1519.jpg", "description":"يتحدث فيلم “رجل عاشق” عن رجل عصابات صغير يحاول بطريقة غير لائقة أن يحاكم الفتاة التي يعشقها، فهل يمكنه الفوز بها وترك العالم السفلي وراءه؟", "search":"دراما رومانسى y2021 افلام اسيوية Drama ", "SubButtons":"العرض🔲Movies🔲https://www.imdb.com/video/imdb/vi262652441/imdb/embed?autoplay=false🔹️emurlwithdownload🔹️active🟤🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-qvqndwzbocwm.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-q6n0aelb73ad.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-3y4z1ahe3x1r.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-b7a1z8aj7srw.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/ja6i51qxxg9a🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-fiq1yoaxgbqu.html🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-44wxzy30oc69.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-3dlqkhkt0hdi.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/prmkov7mq6ps🔹️emurlwithdownload🔹️♤🟤https://ok.ru/videoembed/4822181743353🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/qvqndwzbocwm.html🔹️🔹️active🟤🟤https://uptobox.com/prmkov7mq6ps🔹️🔹️♤🟤🟤https://guccihide.com/w/ja6i51qxxg9a🔹️🔹️♤🟤🟤https://streamvid.net/44wxzy30oc69🔹️🔹️♤🟤🟤https://upstream.to/3dlqkhkt0hdi🔹️🔹️♤🟤🟤https://gofile.io/d/7OV7Ss🔹️🔹️♤🟤🟤https://drop.download/gr8263t31oir🔹️🔹️♤🟤" },
{"nameen":"Junihitoe wo Kita Akuma 2020", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/01-1518.jpg", "description":"تدور أحداث الفيلم حول فتى فاشل في حياته وبعد يوم بائس وحزين يدخل بطريقةٍ ما إلى رواية يابانية باسم “حكاية غينجي” من عصر هييآن. الرواية تحكي عن هيكارو غينجي ابن الامبراطور من أحد محظياته المفضلات وفي الفلم يركز على الأحداث من جانب زوجة أبيه “كوكيدين نيوغو” ووالده ولي العهد.", "search":"تاريخى فانتازيا كوميديا y2020 افلام اسيوية ", "SubButtons":"العرض🔲Movies🔲🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-huw0t9vot2f7.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-8ubdc2y581kf.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-wgzgqui56f7u.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-vq4506m6m1rj.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/u794a7ouoqhk🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-3amzrup3ngzn.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/AA4R47we7DumbJ🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-wvri7i3l7eps.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-djya96p37enk.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/orvpfgf7dyor🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/huw0t9vot2f7.html🔹️🔹️active🟤🟤https://uptobox.com/orvpfgf7dyor🔹️🔹️♤🟤🟤https://guccihide.com/w/u794a7ouoqhk🔹️🔹️♤🟤🟤https://streamtape.com/v/AA4R47we7DumbJ🔹️🔹️♤🟤🟤https://streamvid.net/wvri7i3l7eps🔹️🔹️♤🟤🟤https://upstream.to/djya96p37enk🔹️🔹️♤🟤🟤https://gofile.io/d/sh0vk2🔹️🔹️♤🟤🟤https://drop.download/f128fdm3w78i🔹️🔹️♤🟤" },
{"nameen":"فيلم Your Turn to Kill: The Movie 2021", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/01-1516.jpg", "description":"يحكي الفيلم قصة الأبطال في واقع بديل يتبع سير أحداث معاكسة للدراما، حيث يجيب عن أسئلة من قبيل: “ماذا لو كانشوتا الذي حضر اجتماع الأهالي عوض نانا؟”، “ماذا لو أن لعبة تبادل جرائم القتل لم تبدأ أصلا؟”… ماذا سيحدث عندها؟", "search":"دراما غموض y2021 افلام اسيوية Drama ", "SubButtons":"العرض🔲Movies🔲🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-1ngj7lca3lg8.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-izdan4f6qr70.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-eqtixp5npxjj.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-2iuh9m47jz2p.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/krno604fygsc🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-ptlhsmhnyoju.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/Q0mVkzpYeqS0o2j🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-ojdt7g1ec1i7.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-auac9rqw9o39.html🔹️emurlwithdownload🔹️♤🟤https://ok.ru/videoembed/4822128331513🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/1ngj7lca3lg8.html🔹️🔹️active🟤🟤https://guccihide.com/w/krno604fygsc🔹️🔹️♤🟤🟤https://streamtape.com/v/Q0mVkzpYeqS0o2j🔹️🔹️♤🟤🟤https://streamvid.net/ojdt7g1ec1i7🔹️🔹️♤🟤🟤https://upstream.to/auac9rqw9o39🔹️🔹️♤🟤🟤https://gofile.io/d/SPNNax🔹️🔹️♤🟤🟤https://drop.download/hadpt8d43rry🔹️🔹️♤🟤" },
{"nameen":"Melancholy 2021", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/01-1513.jpg", "description":"فوكورا كوهارو تعمل في المركز الاستشاري للأطفال حياتها عادية جدًا ليست سعيدة ولا تعيسة لكن ذات يوم تنقلب حياتها رأسًا على عقب حيث ينهار جدها ويحترق متجر والدها وترا بعينيها خيانة حبيبها في تلك الليلة خسرت كوهارو كل شيء في لحظات لكن تلك كانت بداية جديدة في حياتها.", "search":"جريمة دراما غموض y2021 افلام اسيوية Crime Drama ", "SubButtons":"العرض🔲Movies🔲🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-vtyvwb5umlec.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-y4e49miahxyu.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-umhsk80uzn2o.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-sou7af8fjfk0.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/kxb1gasekko5🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-zn37sx536w5v.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/BABRP2v4B3SyxRX🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-xh1j1xb5dbvx.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-y9km7ogulta5.html🔹️emurlwithdownload🔹️♤🟤https://ok.ru/videoembed/4822104214265🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/vtyvwb5umlec.html🔹️🔹️active🟤🟤https://guccihide.com/w/kxb1gasekko5🔹️🔹️♤🟤🟤https://streamtape.com/v/BABRP2v4B3SyxRX🔹️🔹️♤🟤🟤https://streamvid.net/xh1j1xb5dbvx🔹️🔹️♤🟤🟤https://upstream.to/y9km7ogulta5🔹️🔹️♤🟤🟤https://drop.download/qjtkxf5b2j1c🔹️🔹️♤🟤" },
{"nameen":"And So the Baton Is Passed 2021", "namear":"فيلم مترجم", "img":"https://1cima4u.com/wp-content/uploads/01-1512.jpg", "description":"تعيش يوكو مع والدها الثالث بعد أن تزوجت والدتها عدة مرات واختفت من حياتها في مرحلة معينة، يحكي الفيلم قصة مؤثرة عن علاقة عائلة لا تربطهم صلة مباشرة بالدم.", "search":"دراما y2021 افلام اسيوية Drama ", "SubButtons":"العرض🔲Movies🔲🔲🔲🪷مشاهدة🔲Movies🔲https://vidpro.net/embed-ql42gida6bdi.html🔹️emurlwithdownload🔹️active🟤https://vadbam.net/embed-dyijknxoiv1l.html🔹️emurlwithdownload🔹️♤🟤https://viidshar.com/embed-4xuke7fr5gde.html🔹️emurlwithdownload🔹️♤🟤https://govad.xyz/embed-7v9ta4nd85au.html🔹️emurlwithdownload🔹️♤🟤https://guccihide.com/e/k3c6peha8ajc🔹️emurlwithdownload🔹️♤🟤https://uqload.co/embed-vx2e3woybjq3.html🔹️emurlwithdownload🔹️♤🟤https://streamtape.com/e/rbZJa7ALYyIkMy🔹️emurlwithdownload🔹️♤🟤https://streamvid.net/embed-n0he0eg233dw.html🔹️emurlwithdownload🔹️♤🟤https://upstream.to/embed-ehspcijkrqj1.html🔹️emurlwithdownload🔹️♤🟤https://uptostream.com/iframe/orr0r6t7j1jn🔲url1🔹️ar-عربية🔹️active🔲https://vidpro.net/ql42gida6bdi.html🔹️🔹️active🟤🟤https://uptobox.com/orr0r6t7j1jn🔹️🔹️♤🟤🟤https://guccihide.com/w/k3c6peha8ajc🔹️🔹️♤🟤🟤https://streamtape.com/v/rbZJa7ALYyIkMy🔹️🔹️♤🟤🟤https://streamvid.net/n0he0eg233dw🔹️🔹️♤🟤🟤https://upstream.to/ehspcijkrqj1🔹️🔹️♤🟤🟤https://gofile.io/d/ZDfFJa🔹️🔹️♤🟤🟤https://drop.download/giati72s7t4o🔹️🔹️♤🟤" },



  
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







