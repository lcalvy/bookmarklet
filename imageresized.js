if (typeof jQuery=='undefined') { // typeof jQuery=='undefined' works too  

    var s = document.createElement('script');
    s.src = "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";

    if(s.addEventListener) {
        s.readyState = "complete";
      s.addEventListener("load",callback,false);
  }
  else if(s.readyState) {
      s.onreadystatechange = callback;
    }



    document.body.appendChild(s);



}
else{
    checkImageSizes();
}

function callback(){
var state = s.readyState;
    if (!state || /loaded|complete/.test(state)) {
        jQuery.noConflict();
    }
    checkImageSizes();

}

function checkImageSizes () {
        jQuery('img').each(function(i,el){
        if(el.naturalWidth > el.clientWidth || el.naturalHeight > el.clientHeight){
        //console.log(el.clientWidth, el.naturalWidth); 
        el.style.borderStyle="solid";
        el.style.borderWidth="5px";
        el.style.borderColor="red";
        jQuery(el).after("<span style='position: relative;left: 5px;top: -"+el.clientHeight+"px;padding: 0.5em 20px;width: 460px;background: rgba(0,0,0,0.8);text-decoration: none !important;color: #fff;opacity: 0.8;-webkit-transition: 0.5s;-moz-transition: 0.5s;-o-transition: 0.5s;-ms-transition: 0.5s;'>"+el.clientWidth+"x"+el.clientHeight+" &lt; "+el.naturalWidth+"x"+el.naturalHeight+"</span>");
        }});
        
        
}