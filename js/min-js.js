$(document).ready(function(){function e(){if(s.classList.toggle("closed"),s.classList.toggle("clicked"),s.classList.contains("closed")){var e=document.getElementsByClassName("nav-icon")[0];e.innerHTML='<i class="fa fa-bars"></i>'}else{var e=document.getElementsByClassName("nav-icon")[0];e.innerHTML='<i class="fa fa-close"></i>'}}function a(){s.addClass("closed"),s.removeClass("clicked");var e=document.getElementsByClassName("nav-icon")[0];e.innerHTML='<i class="fa fa-close"></i>'}var s=document.getElementsByClassName("nav-circle")[0];s.addEventListener("click",e,!1),s.addEventListener("keydown",function(a){13===a.keyCode&&e()}),$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html, body").stop(!0).animate({scrollTop:e.offset().top},300),a(),!1}})});