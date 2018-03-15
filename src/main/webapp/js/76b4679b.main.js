(function(){define("lib/jquery/easing",[],function(){jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,n,r,i){return jQuery.easing[jQuery.easing.def](e,t,n,r,i)},easeInQuad:function(e,t,n,r,i){return r*(t/=i)*t+n},easeOutQuad:function(e,t,n,r,i){return-r*(t/=i)*(t-2)+n},easeInOutQuad:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t+n:-r/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,r,i){return r*(t/=i)*t*t+n},easeOutCubic:function(e,t,n,r,i){return r*((t=t/i-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t*t+n:r/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,r,i){return r*(t/=i)*t*t*t+n},easeOutQuart:function(e,t,n,r,i){return-r*((t=t/i-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t*t*t+n:-r/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,r,i){return r*(t/=i)*t*t*t*t+n},easeOutQuint:function(e,t,n,r,i){return r*((t=t/i-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t*t*t*t+n:r/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,r,i){return-r*Math.cos(t/i*(Math.PI/2))+r+n},easeOutSine:function(e,t,n,r,i){return r*Math.sin(t/i*(Math.PI/2))+n},easeInOutSine:function(e,t,n,r,i){return-r/2*(Math.cos(Math.PI*t/i)-1)+n},easeInExpo:function(e,t,n,r,i){return t==0?n:r*Math.pow(2,10*(t/i-1))+n},easeOutExpo:function(e,t,n,r,i){return t==i?n+r:r*(-Math.pow(2,-10*t/i)+1)+n},easeInOutExpo:function(e,t,n,r,i){return t==0?n:t==i?n+r:(t/=i/2)<1?r/2*Math.pow(2,10*(t-1))+n:r/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,r,i){return-r*(Math.sqrt(1-(t/=i)*t)-1)+n},easeOutCirc:function(e,t,n,r,i){return r*Math.sqrt(1-(t=t/i-1)*t)+n},easeInOutCirc:function(e,t,n,r,i){return(t/=i/2)<1?-r/2*(Math.sqrt(1-t*t)-1)+n:r/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,r,i){var s=1.70158,o=0,u=r;if(t==0)return n;if((t/=i)==1)return n+r;o||(o=i*.3);if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return-(u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o))+n},easeOutElastic:function(e,t,n,r,i){var s=1.70158,o=0,u=r;if(t==0)return n;if((t/=i)==1)return n+r;o||(o=i*.3);if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return u*Math.pow(2,-10*t)*Math.sin((t*i-s)*2*Math.PI/o)+r+n},easeInOutElastic:function(e,t,n,r,i){var s=1.70158,o=0,u=r;if(t==0)return n;if((t/=i/2)==2)return n+r;o||(o=i*.3*1.5);if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return t<1?-0.5*u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)+n:u*Math.pow(2,-10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)*.5+r+n},easeInBack:function(e,t,n,r,i,s){return s==undefined&&(s=1.70158),r*(t/=i)*t*((s+1)*t-s)+n},easeOutBack:function(e,t,n,r,i,s){return s==undefined&&(s=1.70158),r*((t=t/i-1)*t*((s+1)*t+s)+1)+n},easeInOutBack:function(e,t,n,r,i,s){return s==undefined&&(s=1.70158),(t/=i/2)<1?r/2*t*t*(((s*=1.525)+1)*t-s)+n:r/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+n},easeInBounce:function(e,t,n,r,i){return r-jQuery.easing.easeOutBounce(e,i-t,0,r,i)+n},easeOutBounce:function(e,t,n,r,i){return(t/=i)<1/2.75?r*7.5625*t*t+n:t<2/2.75?r*(7.5625*(t-=1.5/2.75)*t+.75)+n:t<2.5/2.75?r*(7.5625*(t-=2.25/2.75)*t+.9375)+n:r*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(e,t,n,r,i){return t<i/2?jQuery.easing.easeInBounce(e,t*2,0,r,i)*.5+n:jQuery.easing.easeOutBounce(e,t*2-i,0,r,i)*.5+r*.5+n}})}),define("lib/scrollto",["lib/jquery/easing"],function(e){"use strict";function n(e){var t=window.scrollX||window.pageXOffset||document.documentElement.scrollLeft,n=window.scrollY||window.pageYOffset||document.documentElement.scrollTop,r=n+(window.innerHeight||document.documentElement.clientHeight),i=t+(window.innerWidth||document.documentElement.clientWidth),s=e.scrollLeft,o=e.scrollTop,u=s+(e.width||0),a=o+(e.height||0),f=!1,l=!1;if(s!=null&&s<t||u>i)f=!0;if(o!=null&&o<n||a>r)l=!0;return f&&l?3:l?2:f?1:0}var t=$("html,body");return function(e,r,i,s){function h(){t.animate(a,l||1e3,"easeInOutCirc",r?function e(){e.exed&&r(),e.exed=!0}:null)}var o=typeof e=="number",u=o?{top:e,left:e}:e.offset?e.offset():e,a={},f,l,c;typeof i=="number"?(l=i,c=typeof s=="string"?s:"top"):typeof i=="string"?(l=1e3,c=i):(l=1e3,c=o?"top":"all");switch(c){case"all":a.scrollTop=u.top,a.scrollLeft=u.left;break;case"top":a.scrollTop=u.top;break;case"left":a.scrollLeft=u.left;break;default:return}e.jquery&&(a.width=e.width(),a.height=e.height()),f=n(a),e.jquery&&(delete a.width,delete a.height);switch(f){case 0:return r&&r(),!1;case 1:return delete a.scrollTop,h(),!0;case 2:return delete a.scrollLeft,h(),!0;case 3:return h(),!0;default:}}}),"use strict",define("lib/pageTip",[],function(){var e=function(e){this.settings=$.extend({},{klass:"",content:"",duration:5e3,cb:function(){}},e)};return e.prototype={show:function(){this._render(),this._destroy()},_render:function(){var e='<div class="page-tip">							<div class="page-tip-content">'+this.settings.content+'</div>						  </div>						  <div class="page-cover"></div>';$("body").append(e);var t=$(".page-tip"),n=$(window),r=(n.height()-t.outerHeight())/2+(document.documentElement.scrollTop||window.pageYOffset||0),i=(n.width()-t.outerWidth())/2+(document.documentElement.scrollLeft||window.pageXOffset||0);this.settings.$tip=t,t.css({top:r,left:i})},_destroy:function(e){var t=this;setTimeout(function(){t.settings.$tip.next().remove(),t.settings.$tip.remove(),t.settings.cb&&t.settings.cb()},t.settings.duration)}},e}),"use strict",define("lib/cookie",{get:function(e){if(document.cookie.length>0){var t,n=document.cookie.indexOf(e+"=");if(n!=-1)return n=n+e.length+1,t=document.cookie.indexOf(";",n),t==-1&&(t=document.cookie.length),unescape(document.cookie.substring(n,t))}return""},set:function(e,t,n,r){return document.cookie=e+"="+escape(t)+(n==null?"":";expires="+n.toGMTString())+";path="+(r||"/"),this},remove:function(e,t){var n=new Date;n.setTime(n.getTime()-1);var r=this.get(e);r!=null&&(document.cookie=e+"="+r+";expires="+n.toGMTString()+";path="+(t||"/"))}}),define("lib/ga",["lib/cookie"],function(e){return{setGa:function(){(function(e,t,n,r,i,s,o){e.GoogleAnalyticsObject=i,e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},e[i].l=1*new Date,s=t.createElement(n),o=t.getElementsByTagName(n)[0],s.async=1,s.src=r,o.parentNode.insertBefore(s,o)})(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("require","displayfeatures"),typeof current_user!="undefined"?ga("create","UA-58266856-1",{userId:current_user.id}):ga("create","UA-58266856-1","auto"),ga("require","displayfeatures"),ga("send","pageview"),$("body").delegate("[data-analyze]","click",function(){var e=$(this).data("analyze").split(":");ga("send","event",e[0],e[1],e[2],e[3])})},setZhuge:function(){window.zhuge=window.zhuge||[],window.zhuge.methods="_init debug identify track trackLink trackForm page".split(" "),window.zhuge.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);return t.unshift(e),window.zhuge.push(t),window.zhuge}};for(var t=0;t<window.zhuge.methods.length;t++){var n=window.zhuge.methods[t];window.zhuge[n]=window.zhuge.factory(n)}window.zhuge.load=function(e,t){if(!document.getElementById("zhuge-js")){var n=document.createElement("script"),r=(new Date).getTime();n.type="text/javascript",n.id="zhuge-js",n.async=!0,n.src="http://zgsdk.zhugeio.com/zhuge-lastest.min.js?v="+r;var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i),window.zhuge._init(e,t)}},window.zhuge.load("aa3e7dc3269a48b4b0fb9d035761074f"),$("body").delegate("[data-received]","click",function(t){var n=$(this).data("received").split(".."),r=e.get("city")||"beijing",i={};i.city=r;if(n.length===1){zhuge.track(n[0],i);return}var s=n[1],o=s.split(";");for(var u=0;u<o.length;u++){o||o.splice(u,1);var a=o[u].split(".");i[a[0]]=a[1]}if(n.length){zhuge.track(n[0],i);return}})},setMarket:function(){var e=navigator.userAgent||navigator.vendor||window.opera,t=!1,n="";t=function(){var t=!1;return function(e){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))t=!0}(e),t}(),n=t?"TM-XJGSI3":"TM-9SA0Z1",!function(e,t,n,r,i,s){var o="",u=e.sessionStorage,a="__admaster_ta_param__",f="tmDataLayer"!==r?"&dl="+r:"";if(e[s]={},e[r]=e[r]||[],e[r].push({startTime:+(new Date),event:"tm.js"}),u){var l=e.location.search,c=(new RegExp("[?&]"+a+"=(.*?)(&|#|$)")).exec(l)||[];c[1]&&u.setItem(a,c[1]),c=u.getItem(a),c&&(o="&p="+c+"&t="+ +(new Date))}var h=t.createElement(n),p=t.getElementsByTagName(n)[0];h.src="//tag.cdnmaster.com/tmjs/tm.js?id="+i+f+o,h.async=!0,p.parentNode.insertBefore(h,p)}(window,document,"script","tmDataLayer",n,"admaster_tm"),$("body").delegate("[data-market]","click",function(e){var t=$(this).data("market").split(";"),n=["custom"];if(t[1]=="行家顾问"){var r=["上一","上二","上三","上四","中-Banner","中一","中二","下一","下二","下三","下四"];t[2]=r[+t[2]-1]}if(t.length===3){n=n.concat(t),_smq.push(n);return}})}}}),"use strict",define("lib/overlay",[],function(){var e=function(e){this.settings=$.extend({},{overlayName:"",content:"",clickCoverClosed:!1},e)};return e.prototype={_render:function(e){var t='<div class="overlay '+this.settings.overlayName+'">								<div class="overlay-dialog" tabindex="-1">									<div class="overlay-content">'+this.settings.content+'</div>								</div>								<div class="overlay-close" data-action="overlay-close">									<span class="icon icon-close-thin"></span>								</div>							</div>							<div class="overlay-cover"></div>';$("body").append(t);var n=$(".overlay"),r=$(window),i=(r.height()-n.outerHeight())/2+(document.documentElement.scrollTop||window.pageYOffset||0),s=(r.width()-n.outerWidth())/2+(document.documentElement.scrollLeft||window.pageXOffset||0);i<=0&&(i=10),$(".overlay").css({top:i,left:s})},_destroy:function(){$(".overlay").remove(),$(".overlay-cover").remove()},_bindEvents:function(e){var t=this;$(".overlay [data-action=overlay-close]").on("click",t._destroy),$("body").on("keydown",function(e){e.keyCode==27&&$(".overlay").length&&(e.preventDefault(),t._destroy())}),e?($('.overlay [data-action="overlay-cancel"]').on("click",t._destroy),$('.overlay [data-action="overlay-confirm"]').on("click",t.settings.confirm)):$('.overlay [data-action="overlay-confirm"]').on("click",t._destroy),t.settings.clickCoverClosed&&$(".overlay-cover").click(function(e){e.preventDefault(),t._destroy()})},destroy:function(){this._destroy()},confirm:function(){var e=this;e._render(1),e._bindEvents(1)},alert:function(){var e=this;e._render(0),e._bindEvents(0)}},e}),"use strict",define("lib/template",[],function(){var e={},t={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}},n="&<>\"'/",r="&amp;|&lt;|&gt;|&quot;|&#x27;|&#x2F;",i={escape:new RegExp("["+n+"]","g"),unescape:new RegExp("("+r+")","g")};$(["escape","unescape"]).each(function(n,r){e[r]=function(e){return e===null||e===undefined?"":(""+e).replace(i[r],function(e){return t[r][e]})}});var s={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},o=/(.)^/,u={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},a=/\\|'|\r|\n|\t|\u2028|\u2029/g,f=function(t,n){var r,i=new RegExp([(s.escape||o).source,(s.interpolate||o).source,(s.evaluate||o).source].join("|")+"|$","g"),f=0,l="__p+='";t.replace(i,function(e,n,r,i,s){return l+=t.slice(f,s).replace(a,function(e){return"\\"+u[e]}),n&&(l+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"),r&&(l+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),i&&(l+="';\n"+i+"\n__p+='"),f=s+e.length,e}),l+="';\n",s.variable||(l="with(obj||{}){\n"+l+"}\n"),l="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+l+"return __p;\n";try{r=new Function(s.variable||"obj","_",l)}catch(c){throw c.source=l,c}if(n)return r(n,e);var h=function(t){return r.call(this,t,e)};return h.source="function("+(s.variable||"obj")+"){\n"+l+"}",h};return{tmpl:f}}),define("lib/login",["./overlay","lib/template"],function(e,t){if(window.current_user)return function(){};var n=navigator.userAgent||navigator.vendor||window.opera,r=function(){var e=!1;return function(t){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))e=!0}(n),e}(),i=navigator.userAgent.toLowerCase(),s=i.match(/MicroMessenger/i)=="micromessenger",o=typeof weibo_login_url!="undefined"?weibo_login_url:"",u=s?typeof weixin_mp_login_url!="undefined"?weixin_mp_login_url:"":typeof weixin_login_url!="undefined"?weixin_login_url:"",a=typeof baidu_login_url!="undefined"?r?baidu_login_url+"&display=mobile":baidu_login_url:"",f=typeof signup_url!="undefined"?signup_url:"",l='<h3>欢迎登录「在行」</h3>					<div class="login-overlay-inner signup-panel">						<p class="signup-tip">无需注册，直接用社交账号登录</p>						<a class="btn-primary btn-hg login-weibo" data-received="登录方式..type.weibo;when.<%- when_txt %>" href="'+o+'">							<span class="icon icon-weibo"></span>						</a>						<a class="btn-primary btn-hg login-weixin" data-received="登录方式..type.weixin;when.<%- when_txt %>" href="'+u+'">							<span class="icon icon-weixin"></span>						</a>						<a class="btn-primary btn-hg login-baidu" data-received="登录方式..type.baidu;when.<%- when_txt %>" href="'+a+'">							<span class="icon icon-baidu"></span>						</a>						<div class="phone-login">							<a class="btn-hg login-phone" href="javascript: void 0;">								<span class="icon icon-phone"></span>手机登录							</a>							<form>								<div class="form-group">									<div class="form-item">										<input type="text" id="identity" placeholder="手机号码">										<span class="form-error forIdentity"></span>									</div>								</div>								<div class="form-group">									<div class="form-item">										<input type="password" id="password" placeholder="密码">										<span class="form-error forPassword"></span>									</div>								</div>								<div class="form-item">									<input class="btn-submit btn-hg" data-received="登录方式..type.mobile;when.<%- when_txt%>" type="submit" data-action="overlay-confirm" value="登录">								</div>							</form>							<div>								<p class="to-signup">没有账号？<a href="'+f+'&when=<%- when %>">现在去注册</a></p>								<p class="to-resetpassword"><a href="/settings/password/reset">忘记密码？</a></p>							</div>						</div>					</div>',c="/apis/oauth/login",h="/apis/oauth/huihui",p={account_error:"账号或密码错误",no_password:"手机已绑定微博，请登录微博设置手机登录密码",password_error:"账号或密码错误",unknow:"登录失败，请重试",parameter_error:"账号或密码错误"},d=function(n,r){var i=n||"*[data-login]";$("body").delegate(i,"click",function(n){n.preventDefault();var r=$(this).attr("data-zhugeio_when")||"other",i={tutor_apply:"成为行家",follow:"想见",booking:"约见",coupon:"领取礼券",other:"其他"},o=o||t.tmpl(l)({when:r,when_txt:i[r]}),u=typeof HuihuiJSBridge=="object"&&typeof HuihuiJSBridge.zaihLogin=="function"&&HuihuiJSBridge.zaihLogin();if(u){var a=new e({content:'<p class="overlay-text-center">正在使用会会账号登录...</p>'});return a.alert(),$.ajax({url:h,data:JSON.stringify({token:u}),type:"post",dataType:"json",async:!1,contentType:"application/json; charset=utf-8",dataFilter:function(e){return e.substring(16)},success:function(e){a.destroy(),location.href+="#_huihuiBooking",location.reload()},error:function(e){alert("登录失败")}}),!0}var a=new e({overlayName:"login-overlay",content:o,confirm:function(e){e.preventDefault();var t=/^1[3|4|5|7|8][0-9]\d{8}$/,n=$(".login-overlay #identity"),s=$(".login-overlay input[type=password]"),o=$(".login-overlay .forIdentity"),u=$(".login-overlay .forPassword"),a=$(".login-overlay .btn-submit"),f=n.val(),l=s.val(),h=$.trim(f)===""||n.is(".placeholder"),d=l.length===0||s.is("placeholder");o.text(""),u.text("");if(a.hasClass("logined"))return!1;if(h)return o.text("手机号码是必填的"),!1;if(!t.test(f))return o.text("请输入正确的11位手机号码"),!1;if(d)return u.text("密码是必填的"),!1;a.addClass("logined"),a.val("登录中..."),$.ajax({url:c,data:JSON.stringify({identity:f,password:l}),type:"post",dataType:"json",contentType:"application/json; charset=utf-8",dataFilter:function(e){return e.substring(16)},success:function(e){location.reload()},error:function(e){var t=$.parseJSON(e.responseText.substring(16)),n=t.code||"unknow";o.text(p[t.code]),a.removeClass("logined"),a.val("登录"),window.zhuge&&zhuge.track("登录失败",{reason:p[t.code]||"",when:i[r]})}})}});a.confirm(),s&&$(".overlay .login-weixin").css("visibility","visible"),$(".login-overlay input").placeholder(),$(".login-overlay").delegate(".login-phone","click",function(){$(".login-phone").hide(),$(".login-overlay .phone-login form").slideDown(function(){if($.isMobile){var e=$(window).height(),t=$(".login-overlay").height();$(".login-overlay").css("transition","top .5s").css("top",(e-t)/2+"px")}})})})};return d}),"use strict",define("lib/notify",["lib/template"],function(e){function t(){this._init()}return t.prototype={intervalTime:3e4,notityInterval:null,notifyData:[],$msgDisplay:$("#header .header-notice"),$msgBtn:$("#header .header-msg-btn"),$mobileMsgBtn:$("#mobileLoginBtn"),_init:function(){var e=this;e._getMsg(),e._setNotifyInterval(),e.$msgBtn.click(function(){e.notifyData.length?e._msgPcTmpl():e._getMsg()}),e.$mobileMsgBtn.click(function(){e.notifyData.length?e._msgMobileTmpl():e._getMsg()}),$(document).click(function(e){var t=$(e.target),n=t.parents(".header-msg-btn, .drop-notice").length||t.hasClass(".header-msg-btn")||t.hasClass(".drop-notice");n||$(".dropMenu").hide()})},_setNotifyInterval:function(){var e=this;e.notityInterval=setInterval(function(){e._getMsg()},e.intervalTime)},_clearNotifyInterval:function(){var e=this;clearInterval(e.notityInterval)},_getMsg:function(){var e=this;$.ajax({url:"/apis/open/notices",type:"GET",dataType:"json",contentType:"application/json; charset=utf-8",cache:!1,dataFilter:function(e){return e.substring(16)},success:function(t){var n=t;e.notifyData=n,e.notifyData.length&&e._msgDot()},error:function(e){}})},_msgDot:function(){var e=this;e.$msgBtn.find(".notice-dot").length||(e.$msgBtn.append('<em class="notice-dot"></em>'),e.$msgDisplay.css("display","block")),e.$mobileMsgBtn.find(".notice-dot").length||e.$mobileMsgBtn.append('<em class="notice-dot"></em>')},_msgPcTmpl:function(){var t=this,n='<li>									<a href="<%- url %>"><%- title %></a>								 </li>',r="",i=e.tmpl(n),s=t.notifyData;for(var o=0;o<s.length;o++)r+=i({url:s[o].url,title:s[o].title});$(".header-notice .drop-list").html(r).parents(".dropMenu").show()},_msgMobileTmpl:function(){var t=this,n='<li class="item">									<a  class="mobileNotice" href="javascript:void 0;">私信</a>									<ul class="mobile-notice-msg"></ul>								</li>',r=e.tmpl(n)(),i='<li>									<a href="<%- url %>"><%- title %></a>								 </li>',s="",o=e.tmpl(i),u=t.notifyData;for(var a=0;a<u.length;a++)s+=o({url:u[a].url,title:u[a].title});$(".mobile-notice-msg").length||$(".mobile-menu-setting .mobile-menu-list").append(r),$(".mobile-notice-msg").html(s)}},t}),define("lib/placeholder",[],function(){function s(){$(this).find(i).each(u)}function o(e){var t=e.attributes,n={},r=/^jQuery\d+/;for(var i=0;i<t.length;i++)t[i].specified&&!r.test(t[i].name)&&(n[t[i].name]=t[i].value);return n}function u(){var e=$(this),t,n;if(e.is(":password"))return;e.data("password")?(n=e.next().show().focus(),$("label[for="+e.attr("id")+"]").attr("for",n.attr("id")),e.remove()):e.realVal()==e.attr("placeholder")&&(e.val(""),e.removeClass("placeholder"))}function a(){var e=$(this),t,n,r,i;placeholder=e.attr("placeholder");if($.trim(e.val()).length>0)return;e.is(":password")?(i=e.attr("id")+"-clone",t=$("<input/>").attr($.extend(o(this),{type:"text",value:placeholder,"data-password":1,id:i})).addClass("placeholder"),e.before(t).hide(),$("label[for="+e.attr("id")+"]").attr("for",i)):(e.val(placeholder),e.addClass("placeholder"))}var e=document,t=window.debug||!1,n="placeholder"in e.createElement("input"),r="placeholder"in e.createElement("textarea"),i=":input[placeholder]";return $.placeholder={input:n,textarea:r},!t&&n&&r?($.fn.placeholder=function(){},{init:function(){}}):(!t&&n&&!r&&(i="textarea[placeholder]"),$.fn.realVal=$.fn.val,$.fn.val=function(){var e=$(this),t,n;return arguments.length>0?e.realVal.apply(this,arguments):(t=e.realVal(),n=e.attr("placeholder"),t==n?"":t)},$.fn.placeholder=function(){return this.filter(i).each(a),this},{init:function(){var t=$(e);t.on("submit","form",s),t.on("focus",i,u),t.on("blur",i,a),$(i).placeholder()}})}),function(e){function a(e,t,n,r){return Math.abs(e-t)>=Math.abs(n-r)?e-t>0?"Left":"Right":n-r>0?"Up":"Down"}function f(){s=null,t.last&&(t.el.trigger("longTap"),t={})}function l(){s&&clearTimeout(s),s=null}function c(){n&&clearTimeout(n),r&&clearTimeout(r),i&&clearTimeout(i),s&&clearTimeout(s),n=r=i=s=null,t={}}function h(e){return(e.pointerType=="touch"||e.pointerType==e.MSPOINTER_TYPE_TOUCH)&&e.isPrimary}function p(e,t){return e.type=="pointer"+t||e.type.toLowerCase()=="mspointer"+t}var t={},n,r,i,s,o=750,u;e(document).ready(function(){var d,v,m=0,g=0,y,b;"MSGesture"in window&&(u=new MSGesture,u.target=document.body),e(document).bind("MSGestureEnd",function(e){var n=e.velocityX>1?"Right":e.velocityX<-1?"Left":e.velocityY>1?"Down":e.velocityY<-1?"Up":null;n&&(t.el.trigger("swipe"),t.el.trigger("swipe"+n))}).on("touchstart MSPointerDown pointerdown",function(r){if((b=p(r,"down"))&&!h(r))return;y=b?r:(r.touches||r.originalEvent.touches)[0],r.touches&&r.touches.length===1&&t.x2&&(t.x2=undefined,t.y2=undefined),d=Date.now(),v=d-(t.last||d),t.el=e("tagName"in y.target?y.target:y.target.parentNode),n&&clearTimeout(n),t.x1=y.pageX,t.y1=y.pageY,v>0&&v<=250&&(t.isDoubleTap=!0),t.last=d,s=setTimeout(f,o),u&&b&&u.addPointer(r.pointerId)}).on("touchmove MSPointerMove pointermove",function(e){if((b=p(e,"move"))&&!h(e))return;y=b?e:(e.touches||e.originalEvent.touches)[0],l(),t.x2=y.pageX,t.y2=y.pageY,m+=Math.abs(t.x1-t.x2),g+=Math.abs(t.y1-t.y2)}).on("touchend MSPointerUp pointerup",function(s){if((b=p(s,"up"))&&!h(s))return;l(),t.x2&&Math.abs(t.x1-t.x2)>30||t.y2&&Math.abs(t.y1-t.y2)>30?i=setTimeout(function(){t.el.trigger("swipe"),t.el.trigger("swipe"+a(t.x1,t.x2,t.y1,t.y2)),t={}},0):"last"in t&&(m<30&&g<30?r=setTimeout(function(){var r=e.Event("tap");r.cancelTouch=c,t.el.trigger(r),t.isDoubleTap?(t.el&&t.el.trigger("doubleTap"),t={}):n=setTimeout(function(){n=null,t.el&&t.el.trigger("singleTap"),t={}},250)},0):t={}),m=g=0}).on("touchcancel MSPointerCancel pointercancel",c),e(window).on("scroll",c)}),e.each(["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"],function(t,n){e.fn[n]=function(e){return this.on(n,e)}})}(jQuery),define("lib/tap",function(){}),"use strict",define("lib/searchSuggestion",[],function(){function t(e,t,n){$.ajax({url:e,type:"GET",data:n,dataFilter:function(e){return e.substring(16)},success:function(e){var r=e.slice(0,n.limit),i=r.length>0?"<ul>                                <li>"+r.join("</li><li>")+"</li>                            </ul>":"";t.html(i)},dataType:"json",contentType:"application/json; charset=utf-8"})}var e=function(e){this.settings=$.extend({},{$search:null,$searchInput:null,dalayTime:300,api:"/v1/suggestions",limitCount:10,isAutoSearch:!1},e)};return e.prototype={init:function(e){var n=this.settings.$search||$("form.search:visible"),r=this.settings.$searchInput||n.find("input"),i=n.find(".sug"),s=this.settings.dalayTime,o=this.settings.api,u=this.settings.limitCount,a=this.settings.isAutoSearch,f="",l;r.on({focus:function(){var e=r.val().trim();!e||(f=e,t(o,i,{q:e,limit:u}))},blur:function(){setTimeout(function(){i.empty(),f=""},200)},keyup:function(e){var n=e.keyCode,a=$("li.hover").length?$("li.hover"):null,c=r.val().trim();if(n==38){a?a.removeClass("hover").prev().addClass("hover"):i.find("li").last().addClass("hover"),r.val($("li.hover").text()||c);return}if(n==40){a?a.removeClass("hover").next().addClass("hover"):i.find("li").first().addClass("hover"),r.val($("li.hover").text()||c);return}l=e.timeStamp,c?setTimeout(function(){e.timeStamp-l==0&&c!=f&&(f=c,t(o,i,{q:c,limit:u}))},s):(i.empty(),f="")}}),n.on({mouseover:function(){$(this).addClass("hover").siblings().removeClass("hover")},click:function(e){r.val($(this).text()),a?n.submit():$(document).scrollTop(0)}},"li")}},e}),require(["lib/scrollto","lib/pageTip","lib/ga","lib/login","lib/notify","lib/placeholder","lib/tap","lib/template","lib/cookie","lib/searchSuggestion","lib/overlay"],function(e,t,n,r,i,s,o,u,a,f,l){"use strict";function h(){return c.match(/iPad/i)||c.match(/iPhone/i)||c.match(/iPod/i)?"iOS":c.match(/Android/i)?"Android":"others"}function m(e,t){var t=t||window.location.href,n=t.split("?");if(n.length===1)return"";var r=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),i=n[1].match(r);return i!=null?decodeURIComponent(i[2]):""}function C(e){var t=e,n=t.position().left,r=t.css("width");N.css({left:n,width:r})}var c=navigator.userAgent||navigator.vendor||window.opera;jQuery.isMobile=function(){var e=!1;return function(t){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))e=!0}(c),e}();var p=typeof window.clouda=="object";p&&a.get("_isZDH")!=="true"&&a.set("_isZDH","true");var d=["找行家里手上在行","求教行业经验 找寻生活乐趣","一键找到行家里手解决问题","领先的知识技能共享平台","任何困惑上在行"],v=d[Math.floor(Math.random()*d.length)];n.setGa(),n.setZhuge(),n.setMarket();if(window.zhuge){var g={wx:"weixin",wx_timeline:"timeline",weibo:"weibo"},y=g[m("utm_source")]||"",b=location.pathname.split("/")[1];b===""&&(b="home"),$(document).delegate("form.search","submit",function(e){$(this).find("input").val()==""&&e.preventDefault();var t=$(this).find(".search-content").val();zhuge.track("搜索",{from:b,keyword:t,page:"导航",city:a.get("city")||"beijing"})})}var w='<div class="app-bar" id="appBar">                                <span class="app-bar-icon"></span>                                <a class="app-bar-download" id="appBarDownload" data-received="点击下载条..tag.'+v+";page."+b+";from."+y+';" data-analyze="Download:done:zaihapp download from msite" data-market="官网首页;Banner;立即体验" href="javascript:;" target="_blank">                                    <span class="app-bar-txt">下载在行客户端<br><strong>'+v+'</strong>                                    </span>                                    <span class="btn-primary btn-md app-download-btn">立即体验</span>                                </a>                                <a class="app-bar-close appBarClose" href="javascript: void 0;"><span class="icon icon-close-menu"></span></a>                            </div>';if($.isMobile&&(h()=="Android"||h()=="iOS")&&!sessionStorage.getItem("noAppBar")&&!$(".noAppBar").length&&typeof HuihuiJSBridge=="undefined"&&!p&&a.get("_isZDH")!=="true"){$("body").append(w);var E=document.querySelector("a#appBarDownload"),S=h()==="iOS"?"AApG":"AApm";$("[data-mlink]").length&&(S=S+"?"+$("[data-mlink]").attr("data-mlink")),new Mlink({mlink:"http://a.mlinks.cc/"+S,button:E,autoRedirect:!1,autoRedirectToDownloadUrl:!0,downloadWhenUniversalLinkFailed:!1}),$(".container").length&&$("#appBar").length&&($(".mobileHeader").css({"margin-top":"60px"}),$(".container").css({"margin-top":"60px"})),$("#appBar").delegate(".appBarClose","click tap",function(){$("#appBar").remove(),sessionStorage.setItem("noAppBar","true"),$(".container").length&&($(".mobileHeader").css({"margin-top":"0"}),$(".container").css({"margin-top":"0"}))})}var x=$("#header [data-action=nav-select]"),T=x.find(".active"),N=$("#header .decorate");T.length>0&&C(T.parents("[data-action=nav-select]")),x.bind("mouseenter",function(){C($(this))}).bind("mouseleave",function(){T.length>0?C(T.parents("[data-action=nav-select]")):N.css("width",0)}),$(".categoryBtn").on("click",function(){var e=$(this).next("ul");e.slideToggle("fast")}),$("#mobileMenuBtn").click(function(e){e.preventDefault(),$("html, body").addClass("menu-nav-open")}),$("#mobileLoginBtn").click(function(e){if($(this).attr("data-login")=="false")return;e.preventDefault(),$("html, body").addClass("menu-setting-open")}),$(".mobileMenu").delegate(".mobile-menu-close","click",function(e){e.preventDefault(),$("html, body").removeClass("menu-nav-open"),$("html, body").removeClass("menu-setting-open")}),$(".mobileMenu").delegate(".mobileNotice","click",function(e){e.preventDefault();var t=$(".mobileNotice"),n=$(".mobile-notice-msg");n.slideToggle()}),$(".mobileHeader").delegate(".searchBtn","click",function(e){e.preventDefault();var t=$(".mobileHeader").find($("form.search"));t.slideToggle(200);if(t.length){var n=new f({$search:t,isAutoSearch:!0});n.init()}}),r();var k=function(e,t){var n=document.createElement("script"),r=document.getElementsByTagName("head")[0],i={complete:1,loaded:1,"undefined":1};n.onload=n.onerror=n.onreadystatechange=function(){if(i[n.readyState]){t&&t(),n.onload=n.onerror=n.onreadystatechange=null;try{if(n.clearAttributes)n.clearAttributes();else for(var e in n)delete n[e]}catch(s){}r.removeChild(n),n=null}},n.async=!0,n.src=e,n.type="text/javascript",r.insertBefore(n,r.firstChild)};if(typeof window.current_user!="undefined"){$.ajax({url:"/apis/open/user_login_log",type:"post",success:function(){},error:function(){}});if(typeof window.zhuge!="undefined"){var L={realname:current_user.realname,nickname:current_user.nickname};current_user.location||(current_user.location=""),L.location=current_user.location,zhuge.identify(current_user.id,L)}}s.init();if($(".header-notice").length)var i=new i;p&&(k("http://static1.searchbox.baidu.com/static/searchbox/openjs/aio.js?v=201502",function(){window.BoxShareData={successcallback:function(){},errorcallback:function(){},options:{type:"url",content:$("meta[name=description]").attr("content"),iconUrl:"http://hangjia.qiniudn.com/FrQNvSKydk9PofafKcl-PxZ_NsZA",imageUrl:"http://hangjia.qiniudn.com/FrQNvSKydk9PofafKcl-PxZ_NsZA",linkUrl:location.href,mediaType:"all",title:$("title").text()}},typeof Box!="undefined"&&typeof Box.os!="undefined"&&typeof Box.os.name!="undefined"&&Box.os.name==="android"&&typeof Box.version_compare=="function"&&Box.version_compare(Box.version,"6.5")<0&&delete window.BoxShareData.options.imageUrl}),typeof pageName!="undefined"&&pageName==="tutorDetail"&&$(".operationList").css({bottom:"43px"}),$(".mobileMenuFooter").css({bottom:"43px"}));if(p||a.get("_isZDH")==="true")$(".appDownloadBar").hide(),$(".appDownloadBtn").hide(),$(".hideInZDH").hide();if($("form.search:visible").length){var A=$("form.search:visible");if(A.length){var O=new f({$search:A});O.init()}}$(document).delegate(".tutorApply","click",function(e){e.preventDefault();var t=$(this),n=t.attr("data-is_mobile_verified").toLowerCase(),r;n==="false"?(r=new l({content:'<p>您尚未验证手机号码，请验证后申请</p>                        <div class="overlay-buttons">                            <a href="/settings/mobile?next=%2Fapply%2Fzhima_verify%2F" class="btn-primary btn-md">去验证</a>                        </div>'}),r.alert()):location.href=t.attr("href")})}),define("main",function(){})})();