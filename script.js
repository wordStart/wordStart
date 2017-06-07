;
//(function(){
//		$.fn.slider=function(option){
////			console.log(option)
//			var del={
//				speed:600,
//				count:5,
//				type:"mouseover",
//				prev:".left",
//				next:".right"
//			}
//			
//			var fusion=$.extend({},del,option);
//			return this.each(function(){
//				var list=$(this).find("ul");
//			var len=list.children("li").length;
//			
//			var w=list.children("li").outerWidth();
//			
//			var a=list.width(w*len);
//				
//			$(fusion.prev).on(fusion.type,function(){
//				list.css("margin-left",-w*fusion.count);
//				list.children("li").slice(-fusion.count).prependTo(list);
//				list.stop().animate({"margin-left":0},fusion.speed);
//			})
//			
//			$(fusion.next).on(fusion.type,function(){
//				list.stop().animate({"margin-left":-w*fusion.count},fusion.speed,function(){
//					list.children("li").slice(0,fusion.count).appendTo(list);
//					list.css("margin-left",0);
//				})
//			})
//			})
//		}
//})(jQuery)

(function(){
	$.fn.slider=function(option){
//		console.log(option);
		var deft={
			count:3,
			speed:600,
			type:"click",
			prev:"",
			next:""
		}
		var set=$.extend({},deft,option);
		return this.each(function(){
				var list=$(this).find("ul");
	//		获取个数
			var len=list.children("li").length;
	//		获取宽度
			var w=list.children("li").outerWidth();
	//		console.log(len)
			list.width(w*len);
			
			$(set.prev).on(set.type,function(){
				list.css("margin-left",-w*set.count);
				list.children("li").slice(-set.count).prependTo(list);
				list.stop().animate({"margin-left":0},set.speed);
			})
			
			$(set.next).on(set.type,function(){
				list.stop().animate({"margin-left":-w*set.count},set.speed,function(){
					list.children("li").slice(0,set.count).appendTo(list);
					list.css("margin-left",0);
				})
			})
		})
	}
})(jQuery)
