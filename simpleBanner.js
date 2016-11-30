(function($,w)
{

	function repeat(target, n)
	{
		return (new Array(n + 1)).join(target);
	}

	$.fn.simpleBanner=function(cfg)
	{
		var options=
		{
			dots:null,
			speed:500,
			arrows:false,
			autoPlay:true,
			autoPlayDuration:5000,
			eventType:'click',
			animation:null,
			onSwitch:null
		};
		cfg=$.extend(options,cfg);
		var $ul=this.find('ul');
		var $li=$ul.find('li');
		var $img=$li.find('img');
		var len=$li.length;
		var width=len+'00%';
		var perWidth=(100/len).toFixed(2)+'%';

		this.css({overflow:'hidden',width:'100%',position:'relative'});
		$ul.css({width:width,overflow:'hidden',margin:0,zoom:1});
		$li.css({width:perWidth,float:'left'});
		$img.css({width:'100%'});

		if(cfg.dots)
		{
			this.append('<ol class="'+cfg.dots+'"><li class="active"></li>'+repeat('<li></li>',len-1)+'</ol>');
			var $ol=this.find('.'+cfg.dots);

			$ol.on(cfg.eventType,'li',function()
			{
				var $_this=$(this);
				var current=$_this.index();
				play(current);
				index=current;
			});
		}

		var timer , index=0;


		function next()
		{
			var current=index++%len;
			play(current);
		}

		function prev()
		{
			var current=index++%len;
			play(Math.abs(current-2));
		}

		function autoplay()
		{
			if(!timer)
			{
				timer=setInterval(next,cfg.autoPlayDuration);
			}
		}
		function stopplay()
		{
			clearInterval(timer);
			timer=null;
		}

		function play(current)
		{
			$ul.css({'margin-left':'-'+current+'00%'}).data('active',current);
			if(cfg.dots)
			{
				$ol.find('li').eq(current).addClass('active').siblings().removeClass('active');
			}
		}


		if(cfg.autoPlay)
		{
			this.hover(function()
			{
				stopplay();
			},function()
			{
				autoplay();
			});
			autoplay();
		}



	};


})(jQuery,window);