/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-eng.txt / wet-boew.github.io/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.2-development Build: 2013-05-17 04:39 PM
 *
 */
(function(b){var a;b.fn.datepicker=function(){return b(this).each(function(){var l,p,k=pe.fn.calendar,e,s=new Date(),q="YYYY-MM-DD",j,g,r,o,h,f,t=s.getMonth(),c,n,m,i=s.getFullYear(),d=b(this);if(d.hasClass("picker-field")){return}d.addClass("picker-field");e=function(u){var v=b('label[for="'+u+'"]').text(),w=b('<a id="'+u+'-picker-toggle" class="picker-toggle-hidden" href="javascript:;"><img class="image-actual" src="'+pe.add.liblocation+'images/datepicker/calendar-month.png" alt="'+pe.dic.get("%datepicker-show")+v+'"/></a>');w.on("click vclick touchstart",function(){m(u);return false});d.after(w);a.slideUp(0)};l=function(y,A,z,D,x,v,C){var B=b("#"+y),w,u;if(B.attr("min")!==undefined){x=B.attr("min")}else{x="1800-01-01"}if(B.attr("max")!==undefined){v=B.attr("max")}else{v="2100-01-01"}x=pe.date.from_iso_format(x);v=pe.date.from_iso_format(v);w=(A===x.getFullYear()&&z===x.getMonth());u=(A===v.getFullYear()&&z===v.getMonth());D.each(function(E,H){if((!w&&!u)||(w===true&&E>=x.getDate())||(u===true&&E<=v.getDate())){var I=b(H).children("div"),G=b('<a href="javascript:;"></a>'),F=I.parent();F.empty();G.append(I.html());G.appendTo(F);G.on("keydown",function(L){var J=b(this).closest(".cal-container"),K=J.attr("id");if(!(L.ctrlKey||L.altKey||L.metaKey)){switch(L.keyCode){case 27:m(y);return false;case 32:b(this).trigger("click");return false;case 33:if(L.shiftKey){c(K,A,z,x,v,new Date(A-1,z,E+1))}else{c(K,A,z,x,v,new Date(A,z-1,E+1))}return false;case 34:if(L.shiftKey){c(K,A,z,x,v,new Date(A+1,z,E+1))}else{c(K,A,z,x,v,new Date(A,z+1,E+1))}return false;case 35:pe.focus(b(this).closest("ol").children("li").children("a").last());return false;case 36:pe.focus(b(this).closest("ol").children("li").children("a").first());return false;case 37:c(K,A,z,x,v,new Date(A,z,E));return false;case 38:c(K,A,z,x,v,new Date(A,z,E-6));return false;case 39:c(K,A,z,x,v,new Date(A,z,E+2));return false;case 40:c(K,A,z,x,v,new Date(A,z,E+8));return false}}else{if(L.ctrlKey&&!(L.altKey||L.metaKey)){switch(L.keyCode){case 35:c(K,A,z,x,v,new Date(A,11,31));return false;case 36:c(K,A,z,x,v,new Date(A,0,1));return false}}}});G.on("click vclick touchstart",{fieldid:y,year:A,month:z,day:E+1,days:D,format:C},function(K){var J=b("#"+K.data.fieldid),L=J.val();p(K.data.fieldid,K.data.year,K.data.month+1,K.data.day,K.data.format);if(L!==J.val()){J.trigger("change")}n(K.data.fieldid,K.data.year,K.data.month,K.data.days,K.data.format);m(K.data.fieldid);return false})}})};c=function(u,w,y,x,z,v){if(v.getTime()<x.getTime()){v=x;v.setDate(v.getDate()+1)}else{if(v.getTime()>z.getTime()){v=z;v.setDate(v.getDate()+1)}}if(v.getMonth()!==y||v.getFullYear()!==w){k.create(u,v.getFullYear(),v.getMonth(),true,x,z)}pe.focus(a.find(".cal-day-list").children("li:eq("+(v.getDate()-1)+")").children("a"))};n=function(w,A,y,D,C){var z,u,v,B;b(D).removeClass("datepicker-selected");b(D).find(".datepicker-selected-text").detach();C=C.replace("DD","(?<a> [0-9]{2})");C=C.replace("D","(?<a> [0-9] )");C=C.replace("MM","(?<b> [0-9]{2})");C=C.replace("M","(?<b> [0-9])");C=C.replace("YYYY","(?<c> [0-9]{4})");C=C.replace("YY","(?<c /> [0-9]{2})");z="^"+C+"$";u=b("#"+w).val();B=new XRegExp(z,"x");try{if(u!==""){v=b.parseJSON(u.replace(B,'{"year":"$1", "month":"$2", "day":"$3"}'));if(parseInt(v.year,10)===A&&parseInt(v.month,10)===y+1){b(D[v.day-1]).addClass("datepicker-selected");b(D[v.day-1]).children("a").append('<span class="wb-invisible datepicker-selected-text"> ['+pe.dic.get("%datepicker-selected")+"]</span>")}}}catch(x){}};p=function(u,w,y,v,x){a.parent().find("#"+u).val(j(w,y,v,x))};m=function(v){var x=b("#"+v),y=x.parent(),u=y.find("#"+v+"-picker-toggle"),w=pe.date.from_iso_format(x.val());u.toggleClass("picker-toggle-hidden picker-toggle-visible");if(x.attr("min")!==undefined){f=x.attr("min")}else{f="1800-01-01"}if(x.attr("max")!==undefined){h=x.attr("max")}else{h="2100-01-01"}a.attr({"aria-labelledby":v+"-picker-toggle","aria-controls":v});k.create("wb-picker",i,t,true,f,h);x.after(a);a.unbind("focusout.calendar");a.unbind("focusin.calendar");if(u.hasClass("picker-toggle-visible")){r(v);a.find("a").attr("tabindex",0);a.slideDown("fast",function(){o(b(this))});a.attr("aria-hidden","false");u.children("a").children("span").text(pe.dic.get("%datepicker-hide"));if(w!==null){w.setDate(w.getDate()+1);c("wb-picker",i,t,pe.date.from_iso_format(f),pe.date.from_iso_format(h),w)}else{if(a.find(".cal-prevmonth a").length!==0){pe.focus(a.find(".cal-prevmonth a"))}else{if(a.find(".cal-nextmonth a").length!==0){pe.focus(a.find(".cal-nextmonth a"))}else{pe.focus(a.find(".cal-goto a"))}}}}else{g(b("#"+v));pe.focus(y.find("#"+v))}};r=function(u){b(".picker-field").each(function(){if(b(this).attr("id")!==u){g(b(this))}})};g=function(x){var v,u,w;v=x.attr("id");u=b("#"+v+"-picker-toggle");w=b('label[for="'+v+'"]').text();a.find("a").attr("tabindex","-1");a.slideUp("fast",function(){o(b(this))});a.attr("aria-hidden","true");k.hideGoToForm("wb-picker");u.children("a").children("span").text(pe.dic.get("%datepicker-show")+w);u.removeClass("picker-toggle-visible");u.addClass("picker-toggle-hidden")};o=function(u){var v=b("#wb-main-in"),w;if(pe.ie===7){w=u.height()+u.offset().top-v.offset().top+50;if(v.height()>=w){v.css("min-height","")}else{if(v.height()<w){v.css("min-height",w)}}}else{if(pe.ie>0&&pe.ie<7){w=u.height()+u.offset().top-v.offset().top+50;if(v.height()>=w){v.css("height","")}else{if(v.height()<w){v.css("height",w)}}}}};j=function(w,y,v,x){var u=x;u=u.replace("DD",pe.string.pad(v,2));u=u.replace("D",v);u=u.replace("MM",pe.string.pad(y,2));u=u.replace("M",y);u=u.replace("YYYY",w);u=u.replace("YY",w.toString().substr(2,2));return u};if(a===undefined){a=b('<div id="wb-picker" class="picker-overlay" role="dialog" aria-hidden="true"></div>');a.on("keyup",function(u){if(u.keyCode===27){r();pe.focus(a.parent().find("#"+a.attr("aria-controls")))}});a.on("calendarDisplayed",function(y,v,x,z){var w=b(this),u=w.attr("aria-controls");l(u,v,x,z,f,h,q);n(u,v,x,z,q);w.on("click vclick touchstart focusin",function(A){if(A.stopPropagation){A.stopImmediatePropagation()}else{A.cancelBubble=true}})});pe.document.on("click vclick touchstart focusin",function(){if(a.attr("aria-hidden")==="false"){g(a.parent().find("#"+a.attr("aria-controls")));return false}});b('<a class="picker-close" role="button" href="javascript:;"><img src="'+pe.add.liblocation+'images/datepicker/cross-button.png" alt="'+pe.dic.get("%datepicker-hide")+'" class="image-actual" /></a>').appendTo(a).click(function(){m(a.attr("aria-controls"))});a.find("a").attr("tabindex","-1");pe.bodydiv.after(a)}if(d.attr("id")!==undefined){e(d.attr("id"))}})};b('input[type="date"]').datepicker()}(jQuery));