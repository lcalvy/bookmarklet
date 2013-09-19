var s = document.createElement('script');
s.src = "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";

if(s.addEventListener) {
    s.readyState = "complete";
  s.addEventListener("load",callback,false);
} 
else if(s.readyState) {
  s.onreadystatechange = callback;
}
function callback () {
        alert(s.readyState);
        var state = s.readyState;

        if (!state || /loaded|complete/.test(state)) {
            jQuery.noConflict();
     
        $('img').each(function(i,el){
        console.log(el.clientWidth, el.naturalWidth); 
        el.style.borderStyle="solid";
        el.style.borderWidth="5px";
        el.style.borderColor="red";
        $(el).after("<span style='position: relative;left: 5px;top: -"+el.clientHeight+"px;padding: 0.5em 20px;width: 460px;background: rgba(0,0,0,0.8);text-decoration: none !important;color: #fff;opacity: 0.8;-webkit-transition: 0.5s;-moz-transition: 0.5s;-o-transition: 0.5s;-ms-transition: 0.5s;'>"+el.clientWidth+"*"+el.clientHeight+"&lt;&gt;"+el.naturalWidth+"*"+el.naturalHeight+"</span>");
        });
        }

    
};


document.body.appendChild(s);