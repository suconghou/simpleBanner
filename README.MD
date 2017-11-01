# simpleBanner

simple jquery slide banner for ie8+

and can also for ie7 with basic usage

[online demo](http://rawcdn.githack.com/suconghou/simpleBanner/master/index.html)


## Options


| key       		| type   		| default value | description 									|
| ------    		| ----   		| ----          | ----        									|
| dots      		| string 	 	| null          | set dot class or do not show dot				|
| speed   			| number 		| 500           | feadIn or slide animate speed 				|
| autoPlay  		| bool   		| true          | auto play all the imgs 						|
| autoPlayDuration  | number   		| 5000 	        | auto play duration						  	|
| eventType  		| string   		| click         | click/mouseenter event to trigger play	 	|
| animation			| string   		| change        | change/fade/slide  animations					|
| onSwitch			| function   	| $.noop        | event hook after switch						|
| resizeHeight		| number   		| 0      		| 0/1/2 ; 0 for do nothing						|


set `resizeHeight` to 1 : use maxheight for the container's height

set `resizeHeight` to 2 : reszie the container's height with content

**instance method**


| method       		| description 									|
| ------    		| ----        									|
| play      		| play the given index pic 						|
| prev   			| show prev pic 								|
| next  			| show next pic 								|
| pause  			| stop autoplay	  								|
| unpause  			| continue autoplay 						 	|



## CSS

html looks like
```
<div class="wrapper-1">
	<div class="example-1">
		<ul>
			<li><img src="" alt=""></li>
			<li><img src="" alt=""></li>
		</ul>
	</div>
</div>
```

or 

```
<div class="wrapper-1">
	<div class="example-1">
		<ul>
			<li>
				<img src="" alt="">
				<div class="text"></div>
			</li>
			<li>
				<img src="" alt="">
				<div class="text"></div>
			</li>
		</ul>
	</div>
</div>
```

css 

```
/*style for container*/
.wrapper-1{
	width: 600px;
	margin: 100px auto 400px;
}

/*style for img in case of low download speed*/
.example-1{
	overflow: hidden;
	width: 100%;
	position: relative;
}
.example-1 ul{
	overflow: hidden;
	margin: 0;
	zoom: 1;
}
.example-1 ul li{
	float: left;
	height: 100%;
	display: none;
}
.example-1 ul li:first-child{
	display: block;
}
.example-1 ul li img{
	width: 100%;
	height: 100%;
}


/*style for dots*/
.dots-1{
	position: absolute;
	bottom: 10px;
	right: 10px;
	margin: 0;
	padding: 0;
	text-align: center;
}
.dots-1 li{
	display: inline-block;
	*display: inline;
	*zoom: 1;
	width: 15px;
	height: 15px;
	margin: 0 5px;
	background: #963;
	cursor: pointer;
}
.dots-1 li:hover,.dots-1 li.active{
	background: #000;
}
```

**it is useful to set ul li display:none in case of flash**

```
$('.banner .banner-imgs').simpleBanner(
{
    autoPlayDuration:8000,
    dots:'dots-1',
    eventType:'mouseenter',
    animation:'slide'
});
```

see index.html for more



