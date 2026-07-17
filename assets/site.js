(function(){
  var btn=document.getElementById('menuBtn'), menu=document.getElementById('mobileMenu'), close=document.getElementById('menuClose'), lastFocus=null;
  if(!btn||!menu) return;
  function focusables(){return menu.querySelectorAll('a[href],button');}
  function open(){lastFocus=document.activeElement;menu.hidden=false;btn.setAttribute('aria-expanded','true');document.body.style.overflow='hidden';var f=focusables();if(f.length)f[0].focus();}
  function shut(){menu.hidden=true;btn.setAttribute('aria-expanded','false');document.body.style.overflow='';if(lastFocus)lastFocus.focus();}
  btn.addEventListener('click',open); if(close)close.addEventListener('click',shut);
  menu.addEventListener('click',function(e){if(e.target.tagName==='A')shut();});
  document.addEventListener('keydown',function(e){
    if(menu.hidden)return;
    if(e.key==='Escape'){shut();return;}
    if(e.key==='Tab'){var f=focusables();if(!f.length)return;var a=f[0],z=f[f.length-1];
      if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus();}
      else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus();}}
  });
})();
