	/*
	*19数媒3班-王泽威
	*/
	$(function(){
		
		var index = 0;
		//轮展图切换 
		$("#b_btn_mini").find("li").mouseover(function(){
			// 控制小按钮选中
			$(this).addClass("no").siblings().removeClass("no");
			// 联动（图片和小按钮）
			var _index = $(this).index();
			index = _index;
			$("#b_pic").find("li").eq(_index).fadeIn("slow").siblings().hide();
			// 获取选中背景颜色，切换
			var background = $(this).data("color");
			$(this).parents(".b_bg").css("background",background);
		});
		
		// 点击下一页
		$(".next").click(function(){
			index++;
			var length = $("#b_pic").find("li").length;
			if(index >= length){
				index = 0;
			}
			// 联动背景颜色
			var background = $(".b_btn").find("li").eq(index).data("color");
			$(this).parents(".b_bg").css("background",background);
			// 联动小按钮
			$("#b_btn_mini").find("li").eq(index).addClass("no").siblings().removeClass("no");
			// 联动图片
			$("#b_pic").find("li").eq(index).fadeIn("slow").siblings().hide();
		});

		// 点击上一页
		$(".pre").click(function(){
			index--;
			var length = $("#b_pic").find("li").length;
			if(index < 0){
				index = length - 1;
			}
			// 联动背景颜色
			var background = $(".b_btn").find("li").eq(index).data("color");
			$(this).parents(".b_bg").css("background",background);
			// 联动小按钮
			$("#b_btn_mini").find("li").eq(index).addClass("no").siblings().removeClass("no");
			// 联动图片
			$("#b_pic").find("li").eq(index).fadeIn("slow").siblings().hide();
		});

		// 自动切换
		setInterval(function(){
			index++;
			var length = $("#b_pic").find("li").length;
			if(index >= length){
				index = 0;
			}
			// 联动背景颜色
			var background = $(".b_btn").find("li").eq(index).data("color");
			$(".b_bg").css("background",background);
			// 联动小按钮
			$("#b_btn_mini").find("li").eq(index).addClass("no").siblings().removeClass("no");
			// 联动图片
			$("#b_pic").find("li").eq(index).fadeIn("slow").siblings().hide();
		},3000);



	});
