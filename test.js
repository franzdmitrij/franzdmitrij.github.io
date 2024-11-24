(function () {
	'use strict';
	function myErrHandler() {return true;}
	window.onerror = myErrHandler;
	var starts=0;
	function Iptvskaz_n(object) {
		var network=new Lampa.Reguest,scroll=new Lampa.Scroll({mask:!0,over:!0,step:250}),items=[],html=$("<div></div>"),body=$('<div class="iptvskaz_n category-full"></div>');cache=Lampa.Storage.cache("fav_skazchns",5e3,[]),body.append('<div style="display: none;" class="noti"></div>');var info=null,last=null,_this1=this,scdn=Lampa.Storage.cache("skazcdn"),skazico=Lampa.Storage.cache("skazico"),cache=Array.from(cache),cache_name=object.url,searched=!1,cors="",lastRequestTime=0;
		var catalogs = [{
        title: 'ÐžÐ±Ñ‰Ð¸Ðµ ÐºÐ°Ð½Ð°Ð»Ñ‹',
        url: 'https://skaz.tv/ch.json?ico='+skazico+'&ua='+Lampa.Storage.cache("skazua")+'&email='
		},
		{
        title: 'Ð˜Ð·Ð±Ñ€Ð°Ð½Ð½Ð¾Ðµ',
        url: 'https://skaz.tv/ch.json?fav=1&cdn='+scdn+'&ua='+Lampa.Storage.cache("skazua")+'&email='
		}, {
			title: 'VIP Ð¤ÐµÐ´ÐµÑ€Ð°Ð»ÑŒÐ½Ñ‹Ðµ',
			url: 'http://skaz.tv/tvpl.json?gr=%D0%A4%D0%B5%D0%B4%D0%B5%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5&rand=3942&emails=&cdn='+scdn
			},{
			title: 'VIP ÐÐ¾Ð²Ð¾ÑÑ‚Ð¸',
			url: 'http://skaz.tv/tvpl.json?gr=%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8&rand=3942&emails=&cdn='+scdn
			},{
			title: 'VIP Ð¤Ð¸Ð»ÑŒÐ¼Ñ‹',
			url: 'http://skaz.tv/tvpl.json?gr=%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B&rand=3942&emails=&cdn='+scdn
			},{
			title: 'VIP ÐšÐ¸Ð½Ð¾Ð·Ð°Ð»Ñ‹',
			url: 'http://skaz.tv/tvpl.json?gr=%D0%9A%D0%B8%D0%BD%D0%BE%D0%B7%D0%B0%D0%BB%D1%8B&rand=3942&emails=&cdn='+scdn
			},{
			title: 'VIP UHD',
			url: 'http://skaz.tv/tvpl.json?gr=UHD&rand=3942&emails=&cdn='+scdn
			},{
			title: 'VIP HDR',
			url: 'http://skaz.tv/tvpl.json?gr=HDR&rand=3942&emails=&cdn='+scdn
			},{
			title: 'VIP Ð”ÐµÑ‚ÑÐºÐ¸Ðµ',
			url: 'http://skaz.tv/tvpl.json?gr=%D0%94%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B5&rand=3942&emails=&cdn='+scdn
			},{
			title: 'VIP Ð¡Ð¿Ð¾Ñ€Ñ‚',
			url: 'http://skaz.tv/tvpl.json?gr=%D0%A1%D0%BF%D0%BE%D1%80%D1%82&rand=3942&emails=&cdn='+scdn
			},{
			title: 'VIP ÐœÑƒÐ·Ñ‹ÐºÐ°',
			url: 'http://skaz.tv/tvpl.json?gr=%D0%9C%D1%83%D0%B7%D1%8B%D0%BA%D0%B0&rand=3942&emails=&cdn='+scdn
			},{
			title: 'VIP ÐžÐ±Ñ€Ð°Ð·Ð¾Ð²Ð°Ð½Ð¸Ðµ',
			url: 'http://skaz.tv/tvpl.json?gr=%D0%9E%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5&rand=3942&emails=&cdn='+scdn
			},{
			title: 'VIP ÐŸÑ€Ð¸Ñ€Ð¾Ð´Ð°',
			url: 'http://skaz.tv/tvpl.json?gr=%D0%9F%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0&rand=3942&emails=&cdn='+scdn
			},{
			title: 'VIP ÐŸÐ»ÑŽÑÐ¾Ð²Ñ‹Ðµ',
			url: 'http://skaz.tv/tvpl.json?gr=%D0%9F%D0%BB%D1%8E%D1%81%D0%BE%D0%B2%D1%8B%D0%B5&rand=3942&emails=&cdn='+scdn
			},{
			title: 'VIP ÐŸÑ€Ð¾Ñ‡ÐµÐµ',
			url: 'http://skaz.tv/tvpl.json?gr=%D0%9F%D1%80%D0%BE%D1%87%D0%B5%D0%B5&rand=3942&emails=&cdn='+scdn
			},		{
        title: 'Ð¡ÐºÑ€Ñ‹Ñ‚Ñ‹Ðµ Ð²Ð°Ð¼Ð¸ ÐºÐ°Ð½Ð°Ð»Ñ‹',
      url: 'http://skaz.tv/ch.json?nodisplay=1&email='
		}
		];	
					catalogs.push({title: 'ÐÐ¾Ñ‡Ð½Ñ‹Ðµ', url: 'http://skaz.tv/ch.json?gr=noo'});
	 if (window.location.protocol=='https:' && Lampa.Platform.is('browser')) Lampa.Helper.show('Ð—Ð°Ð¹Ð´Ð¸Ñ‚Ðµ Ð² Ð»Ð°Ð¼Ð¿Ñƒ Ð¿Ð¾ http://, Ð° Ð½Ðµ https://');
 else if (window.location.protocol=='https:') Lampa.Helper.show('ÐžÑ‚ÐºÐ»ÑŽÑ‡Ð¸Ñ‚Ðµ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾Ðµ ÑÐ¾ÐµÐ´Ð¸Ð½ÐµÐ½Ð¸Ðµ Ð² ÐÐ°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸ - ÐžÑÑ‚Ð°Ð»ÑŒÐ½Ð¾Ðµ');
	if(cache_name.includes("gr=noo")) Lampa.Helper.show('Ð˜Ð·Ð²Ð¸Ð½Ð¸Ñ‚Ðµ, Ð½Ð¾ ÐºÐ°Ð¶ÐµÑ‚ÑÑ Ñƒ Ð²Ð°Ñ Ð½ÐµÑ‚ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÐ¸.');
	this.create=function(){	
	var t=this;return this.activity.loader(!0),network.silent(object.url,this.build.bind(this),(function(){var a=new Lampa.Empty;html.append(a.render()),t.start=a.start,t.activity.loader(!1),t.activity.toggle()})),this.render()},this.back=function(){if(searched){var t=Lampa.Arrays.clone(object);delete t.activity,Lampa.Activity.push(t),searched=!1}else Lampa.Activity.backward()};
		this.append = function (data) {
			if(cache_name.includes("fav=1")){var ar=Lampa.Storage.get("fav_skazchns"),fav=[];Object.keys(ar).forEach((function(a){if(Lampa.Arrays.getKeys(cache[a]).length&&"notdispl"!=a){data&&data.forEach((function(t){t.tvtitle==cache[a]&&fav.push(t)}))}}))} else if(cache_name.includes("nodisplay=1")){var notdisplay=[];if(Lampa.Arrays.getKeys(cache).length){var _this3=this;data&&data.forEach((function(a){Lampa.Arrays.getValues(cache).filter((function(t){'not'+a.tvtitle==t&&notdisplay.push(a)}))}))}}else{
				if(Lampa.Arrays.getKeys(cache).length){_this3=this,fav=[];data&&data.forEach((function(a){Lampa.Arrays.getValues(cache).filter((function(t){a.tvtitle==t&&fav.push(a)}))}))}if(Lampa.Arrays.getKeys(cache).length){_this3=this;var notdispl=[];data&&data.forEach((function(a,t,e){Lampa.Arrays.getValues(cache).filter((function(e){'not'+a.tvtitle==e&&delete data[t]}))}))}}cache_name.includes("fav=1")&&fav?data=fav:cache_name.includes("nodisplay=1")&&notdisplay?data=notdisplay:fav&&(data=fav.concat(data),data=data.filter((function(a,t,e){return e.indexOf(a)===t})));
			//Lampa.Storage.listener.follow('fav_skazchns',function (e) {
				//Lampa.Storage.sync('fav_skazchns','array_string');
			//});
			data.forEach(function (element) {
				var offsett = new Date().getTimezoneOffset();var card=Lampa.Template.get("card",{title:element.tvtitle,release_year:""});$(".info").css("height","4em"),card.addClass("card--collection"),element.tvshift||(element.tvshift=0),card.attr("tvid",element.tvid),card.find(".card__img").css({cursor:"pointer","background-color":"#353535a6","-webkit-border-radius":0,"border-radius":0,"-moz-border-radius":0}),card.find(".card__icons").css({"justify-content":"right",top:"0.3em",right:"0.3em"}),card.find(".card__title").css({display:"none"}),card.find(".card__view").css({"margin-bottom":"0em"});var img=card.find(".card__img")[0];img.onload=function(){card.addClass("card--loaded")},img.onerror=function(e){},img.src=element.tvlogo,cache&&cache.indexOf(element.tvtitle)>-1&&!cache_name.includes("fav=1")&&_this1.addicon("book",card);
				var progr=function(){if(cache_name.includes("tvpl.json")||element.tvmedia.includes("mono"))var e='api.skaz.tv/6',t=element.tvtitle;else t=element.tvid,console.log(t),e='api.skaz.tv/6';
				var now=Date.now(); if (now - lastRequestTime > 1000) {lastRequestTime = now;$.get("https://"+e+".php?ids="+t.replace("+","__")+'&offset='+offsett,(function(e,t){$(".progr-text").html(e)}))}};card.on("hover:focus",(function(){last=card[0],scroll.update(card,!0),info.find(".info__title").text(element.tvtitle),1==Lampa.Storage.get("epg")&&($(".progr").text(element.tvtitle),setTimeout(progr,600));info.find(".info__title-original").text(element.tvgroup),info.find(".info__create").text(card.find('.card__age').html())}));card.on("hover:hover",(function(){last=card[0],info.find(".info__title").text(element.tvtitle),info.find(".info__create").text(card.find('.card__age').html()),1==Lampa.Storage.get("epg")&&($(".progr").text(element.tvtitle),setTimeout(progr,600));info.find(".info__title-original").text(element.tvgroup)}));card.on('hover:long', function () { if (!cache_name.includes('fav=1')) {var enabled=Lampa.Controller.enabled().name,menu=[{title:!cache||cache&&-1==cache.indexOf(element.tvtitle)?"Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ Ð² Ð¸Ð·Ð±Ñ€Ð°Ð½Ð½Ð¾Ðµ":"Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ Ð¸Ð· Ð¸Ð·Ð±Ñ€Ð°Ð½Ð½Ð¾Ð³Ð¾",fav:!0},{title:!cache||cache&&-1==cache.indexOf('not'+element.tvtitle)?"Ð¡ÐºÑ€Ñ‹Ñ‚ÑŒ ÑÑ‚Ð¾Ñ‚ ÐºÐ°Ð½Ð°Ð»":"ÐŸÐ¾ÐºÐ°Ð·Ð°Ñ‚ÑŒ ÐºÐ°Ð½Ð°Ð»",notdispl:!0},{title:1==Lampa.Storage.get("epg")?"Ð’Ñ‹ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÑŒ EPG":"Ð’ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÑŒ EPG",epg:!0}];Lampa.Platform.is("webos")&&menu.push({title:Lampa.Lang.translate("player_lauch")+" - Webos",player:"webos"}),Lampa.Platform.is("android")&&menu.push({title:Lampa.Lang.translate("player_lauch")+" - Android",player:"android"});Lampa.Select.show({title:Lampa.Lang.translate("title_action"),items:menu,onBack:function e(){Lampa.Controller.toggle(enabled)},onSelect:function e(t){t.fav&&(_this1.favorite(element,card),Lampa.Controller.toggle(enabled)),t.notdispl&&(_this1.notdispl(element,card),Lampa.Controller.toggle(enabled)),t.player&&(Lampa.Player.runas(t.player),card.trigger("hover:enter"));t.noporn&&(1==Lampa.Storage.get("noporn")?(Lampa.Storage.set("noporn",0),catalogs.push({title: 'ÐÐ¾Ñ‡Ð½Ñ‹Ðµ', url: 'https://skaz.tv/ch.json?gr=18'})):(Lampa.Storage.set("noporn",1)));t.epg&&(1==Lampa.Storage.get("epg")?(Lampa.Storage.set("epg",0),html.find(".scroll").css("float","none").css("width","100%"),$("#progr1").remove()):(Lampa.Storage.set("epg",1),html.find(".scroll").css("float","left"),html.find(".scroll").css("width","70%"),html.find(".scroll").parent().append('<div id="progr1" style="float:right;padding: 1.2em 0;width: 30%;"><h2>ÐŸÑ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ð° <span class="progr"></span></h2><span class="progr-text"></span>'))),Lampa.Controller.toggle(enabled);
				}});
				} else {
				var enabled=Lampa.Controller.enabled().name,menu=[];Lampa.Platform.is("webos")&&menu.push({title:Lampa.Lang.translate("player_lauch")+" - Webos",player:"webos"}),Lampa.Platform.is("android")&&menu.push({title:Lampa.Lang.translate("player_lauch")+" - Android",player:"android"});menu.push({title:1==Lampa.Storage.get("epg")?"Ð’Ñ‹ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÑŒ EPG":"Ð’ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÑŒ EPG",epg:!0});menu.push({title:"Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ Ð²ÑÑ‘ Ð¸Ð· Ð¸Ð·Ð±Ñ€Ð°Ð½Ð½Ð¾Ð³Ð¾",favdel:!0});Lampa.Select.show({title:Lampa.Lang.translate("title_action"),items:menu,onBack:function(){Lampa.Controller.toggle(enabled)},onSelect:function(e){e.favdel&&(Lampa.Storage.set("fav_skazchns",[]),$(".card").remove()),Lampa.Controller.toggle(enabled),e.player&&(Lampa.Player.runas(e.player),card.trigger("hover:enter"));e.epg&&(1==Lampa.Storage.get("epg")?(Lampa.Storage.set("epg",0),html.find(".scroll").css("float","none").css("width","100%"),$("#progr1").remove()):(Lampa.Storage.set("epg",1),html.find(".scroll").css("float","left"),html.find(".scroll").css("width","70%"),html.find(".scroll").parent().append('<div id="progr1" style="float:right;padding: 1.2em 0;width: 30%;"><h2>ÐŸÑ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ð° <span class="progr"></span></h2><span class="progr-text"></span>'))),Lampa.Controller.toggle(enabled);}})
				}});
				card.on('hover:enter', function () {
					var video={title:element.tvtitle,url:element.tvmedia};
					var playlist=[],i=1;data.forEach((function(a){playlist.push({title:a.tvtitle,url:a.tvmedia}),i++})),video['iptv']=true,video['playlist']=playlist;
					Lampa.Player.play(video);$(".noti").html(element.tvid);
										if(cache_name.includes("tvpl.json")||cache_name.includes("fav=1")){
						var playlist=[],i=1;$.get("https://skaz.tv/archive.json?email=&name="+encodeURI(element.tvtitle.replace("+","__"))+"&&ur="+encodeURI(element.tvmedia),(function(e,l){e.forEach((function(e){playlist.push({title:e.tvtitle,url:e.tvmedia}),i++}))})),Lampa.Player.playlist(playlist)
						}else{
						Lampa.Player.playlist(playlist);}	
				if (window.location.hostname!='lite.lampa.mx') {
					Lampa.Player.opened()&&(0===Lampa.Player.render().find("#title_epg").length&&Lampa.Player.render().find(".player-info__name").append('<span id="title_epg"></span>'),"iptvskaz_n"==Lampa.Activity.active().component&&(Lampa.Keypad.listener.destroy(),Lampa.Keypad.listener.follow("keydown",(function(e){var a=e.code;
				Lampa.Player.opened()&&(428!==a&&34!==a||Lampa.PlayerPlaylist.prev(),427!==a&&33!==a||Lampa.PlayerPlaylist.next())}))));}
				});
				body.append(card);
				items.push(card);		
			});
		};
				//console.log(element);
		if (window.location.hostname!='lite.lampa.mx') {
		var skset1 = setInterval(function () {if (Lampa.Player.opened() && Lampa.Activity.active().component=='iptvskaz_n') {} else {
		parseEpg();
			}}, 180000);		
		}	
		 var parseone = function (str) {
	 // if (cache_name.includes('tvpl.json')) var ur2 = 'https://api.skaz.tv/4.php?url='+cache_name.replace('?','&'); else
	 // ur2 = 'https://skaz.tv/2.php?ids='+str
	 //$.get(ur2,(function(e,t){""!=e&&Lampa.Player.render().find("#title_epg").text(" - Ð¡ÐµÐ¹Ñ‡Ð°Ñ: "+e)}));
	  }
  
	var parseEpg=function(e){if (Lampa.Storage.get('account_email') || !cache_name.includes("tvpl.json")) {if(!$(".player-info__body")[0]){if(cache_name.includes("fav=1"))var a="&fav=1";else a="";if(cache_name.includes("tvpl.json"))var r="https://api.skaz.tv/4.php?tv="+cache_name.replace('?','&');else {if(cache_name.includes("fav=1")) r="https://api.skaz.tv/4.php?"+a; else r="https://skaz.tv/3.php?"+a};$.get(r,(function(e,a){e=JSON.parse(e);for(var r=0;r<e.length;r++)$(".card[tvid='"+e[r].id+"'] > .card__age").html(e[r].name),$(".card[tvid='"+e[r].id+"'] > .card__age").css({"background-image":"linear-gradient(90deg, rgb(54 54 54 / 50%) "+e[r].time+"%, rgb(0 0 0 / 0%) 0%)",padding:"7px",border:"1px #3e3e3e dotted","margin-top":"3px","border-radius":"7px",overflow:"hidden","max-height":"56px"})}))}}};
this.addicon=function(c,a){a.find(".card__icons-inner").append('<div class="card__icon icon--'+c+'"></div>')},this.favorite=function(c,a){!cache||cache&&-1==cache.indexOf(c.tvtitle)?cache?cache.push(c.tvtitle):cache=[c.tvtitle]:(Lampa.Arrays.remove(cache,c.tvtitle),Lampa.Storage.set("fav_skazchns",cache)),a.find(".card__icons").remove(),cache.indexOf(c.tvtitle)>-1&&this.addicon("book",a),Lampa.Storage.set("fav_skazchns",cache),searched=!0,this.back()},this.notdispl=function(c,a){!cache||cache&&-1==cache.indexOf('not'+c.tvtitle)?cache?cache.push('not'+c.tvtitle):cache=['not'+c.tvtitle]:(Lampa.Arrays.remove(cache,'not'+c.tvtitle),Lampa.Storage.set("fav_skazchns",cache)),Lampa.Storage.set("fav_skazchns",cache),searched=!0,this.back()};
		this.build = function(data) {
			var _this2=this;if(1!=Lampa.Storage.get("epg")||cache_name.includes("nodisplay=1"))ep1="16.6",ep2="24.6";else var ep1="19.6",ep2="32.6";
			Lampa.Template.add('button_category', "<style>@media screen and (max-width: 2560px) {.iptvskaz_n .card--collection {width: "+ep1+"1%!important;}}@media screen and (max-width: 800px) {.iptvskaz_n .card--collection {width: "+ep2+"%!important;}}@media screen and (max-width: 500px) {.iptvskaz_n .card--collection {width: 33.3%!important;}}</style><div class=\"full-start__button selector view--category\"><svg style=\"enable-background:new 0 0 512 512;\" version=\"1.1\" viewBox=\"0 0 24 24\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g id=\"info\"/><g id=\"icons\"><g id=\"menu\"><path d=\"M20,10H4c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2C22,10.9,21.1,10,20,10z\" fill=\"currentColor\"/><path d=\"M4,8h12c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6C2,7.1,2.9,8,4,8z\" fill=\"currentColor\"/><path d=\"M16,16H4c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2C18,16.9,17.1,16,16,16z\" fill=\"currentColor\"/></g></g></svg><span>Ð Ð°Ð·Ð´ÐµÐ»Ñ‹</span>\n    </div>");
					//	console.log('SkazTV', 'Ð”Ð½ÐµÐ¹ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÐ¸:', );
			Lampa.Template.add('button_category3', "<div style=\"float: left;\" class=\"full-start__button selector select__fav\"><span>Ð˜Ð·Ð±Ñ€Ð°Ð½Ð½Ð¾Ðµ</span>\n    </div>");
			Lampa.Template.add('button_podp', "<style>@media screen and (max-width: 2560px) {.iptvskaz_n .card--collection {width: "+ep1+"1%!important;}}@media screen and (max-width: 800px) {.iptvskaz_n .card--collection {width: "+ep2+"%!important;}}@media screen and (max-width: 500px) {.iptvskaz_n .card--collection {width: 33.3%!important;}}</style><div style=\"float: left;\" class=\"full-start__button selector view--podp\"><svg viewBox=\"0 0 159 152\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M56.6429 44.8644L79.5 7.49816L102.357 44.8644C103.883 47.3582 106.338 49.1423 109.181 49.8224L151.782 60.0141L123.308 93.2993C121.407 95.5208 120.47 98.4074 120.701 101.322L124.173 144.987L83.7176 128.192C81.0176 127.071 77.9824 127.071 75.2824 128.192L34.8273 144.987L38.2988 101.322C38.5305 98.4074 37.5925 95.5208 35.6921 93.2993L7.21802 60.0141L49.8186 49.8224C52.6618 49.1423 55.1174 47.3582 56.6429 44.8644ZM33.3175 145.613C33.318 145.613 33.3185 145.613 33.3191 145.613L33.3175 145.613Z\" stroke=\"currentColor\" fill=\"\" stroke-width=\"11\"></path></svg><span>ÐŸÐ¾Ð´Ð¿Ð¸ÑÐºÐ°</span>\n    </div>");
			$(".background__two.visible").css("opacity","0"),$(".background__one.visible").css("opacity","0");
						Lampa.Template.add('info_radio', '<div class="info layer--width"><div class="info__left"><span style="font-size:2em" class="info__title"></span>  <span style="font-size:0.8em"></span><div class="info__create" style="margin-top: 0.2em"></div></div><div style="margin-top: -15px;display: flex !important;" class="info__right">  <div id="stantion_filtr"></div></div></div>');
			var btn=Lampa.Template.get("button_category"),btn2=Lampa.Template.get("button_category3"),btn3=Lampa.Template.get("button_podp");info=Lampa.Template.get("info_radio"),info.find("#stantion_filtr").append(btn2),info.find("#stantion_filtr").append(btn3),info.find("#stantion_filtr").append(btn),info.find(".view--category").on("hover:enter hover:click",(function(){_this2.selectGroup()})),info.find(".view--podp").on("hover:enter hover:click",(function(){_this2.selectGroup2()})),info.find(".select__fav").on("hover:enter hover:click",(function(){Lampa.Activity.push({url:"https://skaz.tv/ch.json?fav=1&cdn="+scdn+"&ua="+Lampa.Storage.cache('skazua')+"&email=",title:"Ð˜Ð·Ð±Ñ€Ð°Ð½Ð½Ð¾Ðµ",component:"iptvskaz_n",page:1})}));
			
			info.find(".select__poisk").on("hover:enter hover:click",(function(){
				
				Lampa.Input.edit({
    value: "",
    title: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸Ðµ ÐºÐ°Ð½Ð°Ð»Ð°",
    free: !0,
    nosave: !0
}, function(t) {
		Lampa.Activity.push({
        url: "http://skaz.tv/ch.json?search="+t+"&email=",
        title: "ÐŸÐ¾Ð¸ÑÐº",
        component: "iptvskaz_n",
        page: 1
		});
	}
);
				
				}));
			
			scroll.render().addClass("layer--wheight").data("mheight",info),html.append(info.append()),html.append(scroll.render());
			1!=Lampa.Storage.get("epg")||cache_name.includes("nodisplay=1")||(html.find(".scroll").css("float","left"),html.find(".scroll").css("width","70%"),html.find(".scroll").parent().append('<div id="progr1" style="float:right;padding: 1.2em 0;width: 30%;"><h2>ÐŸÑ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ð° <span class="progr"></span></h2><span class="progr-text"></span>'));
			this.append(data),scroll.append(body),this.activity.loader(!1),this.activity.toggle(),parseEpg();
		this.selectGroup=function(){Lampa.Select.show({title:"ÐŸÐ»ÐµÐ¹Ð»Ð¸ÑÑ‚",items:catalogs,onSelect:function(t){Lampa.Activity.push({url:t.url,title:t.tvmedia,component:"iptvskaz_n",page:1})},onBack:function(){Lampa.Controller.toggle("content"),parseEpg();}})};
		}
		this.selectGroup2 = function () {
					  var modal = '<div><div class="broadcast__text" style="text-align:left">Ð’Ñ‹ Ð½Ðµ Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð¾Ð²Ð°Ð½Ñ‹ Ð² Ð›Ð°Ð¼Ð¿Ðµ.<br/>Ð”Ð»Ñ Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ð¸ Ð¿ÐµÑ€ÐµÐ¹Ð´Ð¸Ñ‚Ðµ Ñ Ð»ÑŽÐ±Ð¾Ð³Ð¾ ÑƒÑÑ‚Ñ€Ð¾Ð¹ÑÑ‚Ð²Ð° Ð½Ð° ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñƒ https://cub.red/add<br/>Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð¿Ð¾Ð»ÑƒÑ‡ÐµÐ½Ð½Ñ‹Ðµ Ñ†Ð¸Ñ„Ñ€Ñ‹ Ð² ÐÐ°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸ - Ð¡Ð¸Ð½Ñ…Ñ€Ð¾Ð½Ð¸Ð·Ð°Ñ†Ð¸Ñ - Ð’Ñ‹Ð¿Ð¾Ð»Ð½Ð¸Ñ‚ÑŒ Ð²Ñ…Ð¾Ð´.<br><br/>Ð’ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÐµ Ð±Ð¾Ð»ÐµÐµ 1500 ÐºÐ°Ð½Ð°Ð»Ð¾Ð². Ð”Ð¾ÑÑ‚ÑƒÐ¿ÐµÐ½ Ð°Ñ€Ñ…Ð¸Ð² Ð½Ð° Ð±Ð¾Ð»ÑŒÑˆÐ¸Ð½ÑÑ‚Ð²Ð¾ ÐºÐ°Ð½Ð°Ð»Ð¾Ð²<br/>Ð¡Ñ‚Ð¾Ð¸Ð¼Ð¾ÑÑ‚ÑŒ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÐ¸ 180Ñ€./Ð¼ÐµÑ (Ð¾Ñ‚ 6 Ð¼ÐµÑ. Ð°ÐºÑ†Ð¸Ð¸). Ð’ÑÐµ Ð²Ð¾Ð¿Ñ€Ð¾ÑÑ‹ Ð² Ð³Ñ€ÑƒÐ¿Ð¿Ðµ Ñ‚ÐµÐ»ÐµÐ³Ñ€Ð°Ð¼ @helpiptv</div></div>';
			Lampa.Template.add('skazspb', modal);
			var temp = Lampa.Template.get('skazspb');
			var enabled=Lampa.Controller.enabled().name;
			var skazback = temp.find('.skazback');
			var skaznext = temp.find('.skaznext');
			skazback.on('hover:enter', function () {
			 skazback.html('Ð’Ñ‹Ð¿Ð¾Ð»Ð½ÑÐµÑ‚ÑÑ Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐ°...<br/><br/>');
			 $.get( 
                  "http://skaz.tv/oplata.php",
                  { billId: "1ca43265232a60fe513c68212b51aab9",
					comment: "",
					email: "",
					amount: 180,
					onlysbp: 1
				  },
                  function(data) {
                    $('.skazsbp').html(data);
                  }
               );
            });
			skaznext.on('hover:enter', function () {
			window.open('http://skaz.tv/oplata.php?amount=180&lifetime=2024-11-25T2359&billId=1ca43265232a60fe513c68212b51aab9&comment=&email=')
			});
		Lampa.Modal.open({title:"",html:temp,onBack: function onBack() {Lampa.Modal.close();Lampa.Controller.toggle(enabled);$(".modal--large").remove();},
		size:"medium",mask: true});
		};
			
		this.start=function(){var o=this;Lampa.Controller.add("content",{toggle:function(){Lampa.Controller.collectionSet(scroll.render()),Lampa.Controller.collectionFocus(last||!1,scroll.render())},left:function(){Navigator.canmove("left")?Navigator.move("left"):Lampa.Controller.toggle("menu")},right:function(){Navigator.canmove("right")?Navigator.move("right"):o.selectGroup()},up:function(){Navigator.canmove("up")?Navigator.move("up"):info.find(".view--category").hasClass("focus")?Lampa.Controller.toggle("head"):info.find(".view--category").hasClass("focus")||(Lampa.Controller.collectionSet(info),Navigator.move("right"))},down:function(){Navigator.canmove("down")?Navigator.move("down"):info.find(".view--category").hasClass("focus")&&Lampa.Controller.toggle("content")},back:function(){Lampa.Activity.backward()}}),Lampa.Controller.toggle("content");
		};
		this.pause = function() {if (Lampa.Activity.active().component=='iptvskaz_n') {clearInterval(skset1);skset1=null;}};
		this.stop=function(){},this.render=function(){return html},this.destroy=function(){scroll.destroy(),info&&info.remove(),html.remove(),body.remove(),network=null,items=null,html=null,body=null,info=null};
	}
			function add() {
				var icos = '<svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" color="#fff" fill="currentColor" stroke="currentColor" class="bi bi-tv"><path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"/></svg>';
				var menu_itemss = $('<li class="menu__item selector focus" data-action="iptvskaz_n"><div class="menu__ico">' + icos + '</div><div class="menu__text">Ð¢Ð’ by skaz</div></li>');
				menu_itemss.on('hover:enter', function() {
					Lampa.Activity.push({
						url: 'https://skaz.tv/ch.json?ua='+Lampa.Storage.cache("skazua")+'&email=',						title: 'Ð¢Ð’ by skaz',
						component: 'iptvskaz_n',
						page: 1
					});
				});
				$('.menu .menu__list').eq(0).append(menu_itemss);
				Lampa.SettingsApi.addComponent({
        component: 'iptvskaz_n',
        icon: "<svg height=\"36\" viewBox=\"0 0 38 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <rect x=\"2\" y=\"8\" width=\"34\" height=\"21\" rx=\"3\" stroke=\"white\" stroke-width=\"3\"/>\n                <line x1=\"13.0925\" y1=\"2.34874\" x2=\"16.3487\" y2=\"6.90754\" stroke=\"white\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n                <line x1=\"1.5\" y1=\"-1.5\" x2=\"9.31665\" y2=\"-1.5\" transform=\"matrix(-0.757816 0.652468 0.652468 0.757816 26.197 2)\" stroke=\"white\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n                <line x1=\"9.5\" y1=\"34.5\" x2=\"29.5\" y2=\"34.5\" stroke=\"white\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n            </svg>",
        name: 'Ð¢Ð’ by skaz'
      });
	  
if (starts < 1) {
	  starts = 1;	
      Lampa.SettingsApi.addParam({
        component: 'iptvskaz_n',
        param: {
          name: 'skazcdn',
          type: 'select',
          values: {
            0: 'VIP',
			1: 'VIP CDN EUROPA',
			12: 'VIP CDN EUROPA 2',
			9: 'VIP CDN RU',
			2: 'VIP RU (MSK)',
			3: 'VIP PL',
			4: 'VIP FR',
			8: 'VIP FR 2',
			10: 'VIP NL',
			13: 'VIP DE',
			14: 'VIP DE 2',
			16: 'VIP RU 2 (MSK)',
			17: 'VIP RU 3 (SPB)',
			18: 'VIP RU 4 (NSK)'
          },
          "default": 0
        },
        field: {
          name: 'Ð¡ÐµÑ€Ð²ÐµÑ€Ñ‹ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÐ¸'
        },
        onChange: function (value) {
			Lampa.Noty.show('ÐÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¾ Ð¿ÐµÑ€ÐµÐ·Ð°Ð¹Ñ‚Ð¸ Ð² Ð¿Ð»Ð°Ð³Ð¸Ð½ Ð¸Ð· Ð»ÐµÐ²Ð¾Ð³Ð¾ Ð¼ÐµÐ½ÑŽ');
		}
	  });
	  
	  Lampa.SettingsApi.addParam({
        component: 'iptvskaz_n',
        param: {
          name: 'skaztest',
          type: 'select',
          values: {
            0: 'Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ',
			1: 'ÐŸÐµÑ€ÐµÐ¹Ñ‚Ð¸ Ð² Ñ‚ÐµÑÑ‚',
          },
          "default": 0
        },
        field: {
          name: 'Ð¢ÐµÑÑ‚ ÑÐºÐ¾Ñ€Ð¾ÑÑ‚Ð¸'
        },
        onChange: function (value) {
			Lampa.Storage.set("skaztest",0);
			window.open('http://speed.skaz.tv', '_blank');
		}
	  });
	  	if (window.location.hostname!='lampa.land') {
	  	Lampa.SettingsApi.addParam({
        component: 'iptvskaz_n',
        param: {
          name: 'noporn',
          type: 'select',
          values: {
            0: 'ÐŸÐ¾ÐºÐ°Ð·Ð°Ñ‚ÑŒ',
			1: 'Ð¡ÐºÑ€Ñ‹Ñ‚ÑŒ',
          },
          "default": 0
        },
        field: {
          name: 'ÐšÐ°Ð½Ð°Ð»Ñ‹ Ð´Ð»Ñ Ð²Ð·Ñ€Ð¾ÑÐ»Ñ‹Ñ…'
        },
        onChange: function (value) {
			Lampa.Helper.show('ÐÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¾ Ð¿ÐµÑ€ÐµÐ·Ð°Ð¹Ñ‚Ð¸ Ð² Ð¿Ð»Ð°Ð³Ð¸Ð½ Ð¸Ð· Ð»ÐµÐ²Ð¾Ð³Ð¾ Ð¼ÐµÐ½ÑŽ');
		}
	  });
	  Lampa.SettingsApi.addParam({
        component: 'iptvskaz_n',
        param: {
            name: 'SISI_fix',
            type: 'select',
            values: {
                1: 'Ð¡ÐºÑ€Ñ‹Ñ‚ÑŒ Ð¸Ð· Ð¼ÐµÐ½ÑŽ',
                2: 'ÐžÑ‚Ð¾Ð±Ñ€Ð°Ð¶Ð°Ñ‚ÑŒ Ð² Ð¼ÐµÐ½ÑŽ',
            },
            default: '1',
        },
        field: {
            name: 'ÐšÐ»ÑƒÐ±Ð½Ð¸Ñ‡ÐºÐ° (Ñ€Ð°Ð±Ð¾Ñ‚Ð°ÐµÑ‚ Ð¿Ð¾ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÐµ)',
        },
        onChange: function(value) {
            if (Lampa.Storage.field('SISI_fix') == 2) {
                var pluginsArray = Lampa.Storage.get('plugins');
                pluginsArray.push({
                    "url": "http://skaz.tv/sisi.js",
                    "status": 1
                });
                Lampa.Storage.set('plugins', pluginsArray);
                location.reload()
            }
            if (Lampa.Storage.field('SISI_fix') == 1) {
                var plugSisiArray = Lampa.Storage.get('plugins');
                var delpluginSisi = plugSisiArray.filter(function(obj) {
                    return (obj.url !== 'http://skaz.tv/sisi.js' && obj.url !== 'https://skaz.tv/sisi.js')
                });
                Lampa.Storage.set('plugins', delpluginSisi);
                location.reload()
            }
        }
	  });
	  }
	   Lampa.SettingsApi.addParam({
        component: 'iptvskaz_n',
        param: {
          name: 'noskaz2',
          type: 'select',
          values: {
            0: 'ÐžÑ‚Ð¾Ð±Ñ€Ð°Ð¶Ð°Ñ‚ÑŒ Ð² Ð¼ÐµÐ½ÑŽ',
			1: 'Ð¡ÐºÑ€Ñ‹Ñ‚ÑŒ Ð¸Ð· Ð¼ÐµÐ½ÑŽ',
          },
          "default": 0
        },
        field: {
          name: 'Ð’ÐµÑ€ÑÐ¸Ñ 2.0'
        },
        onChange: function (value) {
			location.reload()
		}
	  });
}
	window.plugin_iptvskaz_n_ready = true;   
	}
	function iptv_skaz() {
		if (window.location.hostname=='lampa.land') {
		//	Lampa.Storage.sync('fav_skazchns','array_string');
		}
		Lampa.Component.add('iptvskaz_n', Iptvskaz_n);
		if (window.appready) {add();} else Lampa.Listener.follow('app', function(r) {add();});
		window.plugin_iptvskaz_n_ready = true;   
		}
		if (!window.plugin_iptvskaz_n_ready) iptv_skaz();  
		if (!window.plugin_iptv_ready2 && Lampa.Storage.get("noskaz2")!='1') $.getScript('http://skaz.tv/tv2.js?email=');
   })();