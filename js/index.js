$(function(){
	$(document).scroll(function(){
		if($(this).scrollTop()>4){
			$('.hengfu').css("display","none");
		}else{
			$('.hengfu').css("display","block");
		}
	});
});