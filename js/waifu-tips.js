String.prototype.render = function (context) {
    var tokenReg = /(\\)?\{([^\{\}\\]+)(\\)?\}/g;

    return this.replace(tokenReg, function (word, slash1, token, slash2) {
        if (slash1 || slash2) {  
            return word.replace('\\', '');
        }

        var variables = token.replace(/\s/g, '').split('.');
        var currentObject = context;
        var i, length, variable;

        for (i = 0, length = variables.length; i < length; ++i) {
            variable = variables[i];
            currentObject = currentObject[variable];
            if (currentObject === undefined || currentObject === null) return '';
        }
        return currentObject;
    });
};

var re = /x/;
console.log(re);
re.toString = function() {
    showMessage('你不可以打开<span style="color:#66AAFF;font-weight:bold;"></span>工作台!', 5000, true);
    return '';
};

$(document).on('copy', function (){
    showMessage('<span style="color:#66AAFF;font-weight:bold;"></span>把内容记好啦，等你ctrl+V！', 5000, true);
});

$('.waifu-tool .fui-home').click(function (){
    //window.location = 'https://www.fghrsh.net/';
    window.location = window.location.protocol+'//'+window.location.hostname+'/'
});

$('.waifu-tool .fui-eye').click(function (){
    loadOtherModel();
});

$('.waifu-tool .fui-chat').click(function (){
    showHitokoto();
});

$('.waifu-tool .fui-user').click(function (){
    loadRandModel();
});

$('.waifu-tool .fui-info-circle').click(function (){
    //window.open('https://imjad.cn/archives/lab/add-dynamic-poster-girl-with-live2d-to-your-blog-02');
    window.open('https://www.fghrsh.net/post/123.html');
});

$('.waifu-tool .fui-cross').click(function (){
    sessionStorage.setItem('waifu-dsiplay', 'none');
    showMessage('希望有一天，你也能<span style="color:#FF66AA;font-weight:bold;"></span>认识！', 4000, true);
    window.setTimeout(function() {$('.waifu').hide();}, 1300);
});

$('.waifu-tool .fui-photo').click(function (){
    showMessage('咔嚓~<span style="color:#FF66AA;font-weight:bold;"></span>陷入了记忆中！', 5000, true);
    window.Live2D.captureName = 'Pio.png';
    window.Live2D.captureFrame = true;
});

(function (){
    var text;
    //var SiteIndexUrl = 'https://www.fghrsh.net/';  // 手动指定主页
    var SiteIndexUrl = window.location.protocol+'//'+window.location.hostname+'/';  // 自动获取主页
    //window.location.href == SiteIndexUrl
    if (true) {      // 如果是主页
        var now = (new Date()).getHours();
        if (now > 23 || now <= 5) {
            text = '<span style="color:#66AAFF;font-weight:bold;"></span><span style="color:#FF66AA;font-weight:bold;"></span>已经睡啦！告诉你个秘密，<span style="color:#FF66AA;font-weight:bold;"></span>是<span style="color:#66AAFF;font-weight:bold;"></span>氧气哦~';
        } else if (now > 5 && now <= 8) {
            text = '早上好！<span style="color:#66AAFF;font-weight:bold;"></span>主人还在睡觉呢！';
        } else if (now > 8 && now <= 11) {
            text = '上午好！要像<span style="color:#FF66AA;font-weight:bold;"></span>一样勤勤劳劳！';
        } else if (now > 11 && now <= 13) {
            text = '中午了，快<span style="color:#66AAFF;font-weight:bold;"></span><span style="color:#FF66AA;font-weight:bold;"></span>他们吃午饭吧！';
        } else if (now > 13 && now <= 17) {
            text = '午后啦，同<span style="color:#66AAFF;font-weight:bold;"></span><span style="color:#FF66AA;font-weight:bold;"></span>一起加油干活吧！';
        } else if (now > 17 && now <= 19) {
            text = '傍晚啦~<span style="color:#66AAFF;font-weight:bold;"></span><span style="color:#FF66AA;font-weight:bold;"></span>在回家享受晚餐呢！';
        } else if (now > 19 && now <= 21) {
            text = '晚上好，<span style="color:#66AAFF;font-weight:bold;"></span><span style="color:#FF66AA;font-weight:bold;"></span>休闲时间到啦！';
        } else if (now > 21 && now <= 23) {
            text = '我正在监督<span style="color:#66AAFF;font-weight:bold;"></span><span style="color:#FF66AA;font-weight:bold;"></span>睡觉呢！';
        } else {
            text = '嗨~ 小伙伴！';
        }
    } else {
        if(document.referrer !== ''){
            var referrer = document.createElement('a');
            referrer.href = document.referrer;
            var domain = referrer.hostname.split('.')[1];
            if (window.location.hostname == referrer.hostname) {
                text = '欢迎阅读<span style="color:#0099cc;">『' + document.title.split(' - ')[0] + '』</span>';
            } else if (domain == 'baidu') {
                text = 'Hello! 来自 百度搜索 朋友<br>你是搜索 <span style="color:#0099cc;">' + referrer.search.split('&wd=')[1].split('&')[0] + '</span> 找到我吗？';
            } else if (domain == 'so') {
                text = 'Hello! 来自 360搜索 朋友<br>你是搜索 <span style="color:#0099cc;">' + referrer.search.split('&q=')[1].split('&')[0] + '</span> 找到我吗？';
            } else if (domain == 'google') {
                text = 'Hello! 来自 谷歌搜索 朋友<br>欢迎阅读<span style="color:#0099cc;">『' + document.title.split(' - ')[0] + '』</span>';
            } else {
                text = 'Hello! 来自 <span style="color:#0099cc;">' + referrer.hostname + '</span> 朋友！';
            }
        } else {
            text = '欢迎阅读<span style="color:#0099cc;">『' + document.title.split(' - ')[0] + '』</span>';
        }
    }
    showMessage(text, 6000);
})();

//window.hitokotoTimer = window.setInterval(showHitokoto,30000);
/* 检测用户活动状态，并在空闲时 定时显示一言 */
var getActed = false;
window.hitokotoTimer = 0;
var hitokotoInterval = false;

$(document).mousemove(function(e){getActed = true;}).keydown(function(){getActed = true;});
setInterval(function() { if (!getActed) ifActed(); else elseActed(); }, 1000);

function ifActed() {
    if (!hitokotoInterval) {
        hitokotoInterval = true;
        hitokotoTimer = window.setInterval(showHitokoto, 30000);
    }
}

function elseActed() {
    getActed = hitokotoInterval = false;
    window.clearInterval(hitokotoTimer);
}

function showHitokoto(){
	/* 增加 hitokoto.cn API */
    $.getJSON('https://v1.hitokoto.cn',function(result){
        var text = '<span style="color:#66AAFF;font-weight:bold;"></span><span style="color:#FF66AA;font-weight:bold;"></span>感谢<span style="font-weight:bold;">{creator}</span>网友句子~';
        //在<span style="color:#0099cc;">{source}</span>中
        text = text.render({source: result.from, creator: result.creator});
        showMessage(result.hitokoto, 5000);
        window.setTimeout(function() {showMessage(text, 3000);}, 5000);
    });
	/*
	$.getJSON('https://api.fghrsh.net/hitokoto/rand/?encode=jsc&uid=3335',function(result){
        var text = '这句一言出处是 <span style="color:#0099cc;">『{source}』</span>，是 <span style="color:#0099cc;">FGHRSH</span> 在 {date} 收藏！';
        text = text.render({source: result.source, date: result.date});
        showMessage(result.hitokoto, 5000);
        window.setTimeout(function() {showMessage(text, 3000);}, 5000);
    });
	*/
}

function showMessage(text, timeout, flag){
    if(flag || sessionStorage.getItem('waifu-text') === '' || sessionStorage.getItem('waifu-text') === null){
        if(Array.isArray(text)) text = text[Math.floor(Math.random() * text.length + 1)-1];
        //console.log(text);
        
        if(flag) sessionStorage.setItem('waifu-text', text);
        
        $('.waifu-tips').stop();
        $('.waifu-tips').html(text).fadeTo(200, 1);
        if (timeout === undefined) timeout = 5000;
        hideMessage(timeout);
    }
}

function hideMessage(timeout){
    $('.waifu-tips').stop().css('opacity',1);
    if (timeout === undefined) timeout = 5000;
    window.setTimeout(function() {sessionStorage.removeItem('waifu-text')}, timeout);
    $('.waifu-tips').delay(timeout).fadeTo(200, 0);
}

function initModel(waifuPath){
    
    if (waifuPath === undefined) waifuPath = '';
    var modelId = localStorage.getItem('modelId');
    var modelTexturesId = localStorage.getItem('modelTexturesId');
    
    
        
        /* 首次访问加载 指定模型  指定材质 */
        
        var modelId = 1;            // 模型 ID
        var modelTexturesId = 2 ;   // 材质 ID
        
    loadModel(modelId, modelTexturesId);
	result={
    "mouseover": [
        {
            "selector": "#blog_nav_myhome",
            "text": ["点击前往<span style=\"font-weight:bold;\">首页</span>后，想回到上一页可以使用浏览器后退功能哦"
			,"回到最初<span style=\"font-weight:bold;\">起点</span>~"
			,"呆呆站在<span style=\"font-weight:bold;\">首页</span>前~"]
        },
		{
			"selector":".postTitle2 span",
			"text":["希望这篇<span style=\"font-weight:bold;\">文章</span>对你有帮助！"
			,"希望<span style=\"color:#66AAFF;font-weight:bold;\"></span><span style=\"font-weight:bold;\">文章</span>能帮到您！"
			,"<span style=\"font-weight:bold;\">文章</span>能帮到您，就是我目！"]
		},
        {
            "selector": "#touxiang",
            "text": ["喜欢<span style=\"color:#66AAFF;font-weight:bold;\"></span>头像吗，嘻嘻(●'◡'●)"
			,"我觉得<span style=\"color:#66AAFF;font-weight:bold;\"></span>头像好好看，嘻嘻(●'◡'●)"
			,"太爱<span style=\"color:#66AAFF;font-weight:bold;\"></span>头像了，嘻嘻(●'◡'●)"
			,"<span style=\"color:#66AAFF;font-weight:bold;\"></span>头像爱啦，嘻嘻(●'◡'●)"
			,"怎么<span style=\"color:#66AAFF;font-weight:bold;\"></span>头像这么好看，嘻嘻(●'◡'●)"]
        },
        {
            "selector": "#comment_form_container .comment_textarea #tbCommentBody",
            "text": ["认真填写哦，<span style=\"font-weight:bold;\">垃圾评论</span>是禁止事项"]
        },
        {
            "selector": "a[href=\"#_labelTop\"]",
            "text": ["回到<span style=\"font-weight:bold;\">开始</span>地方吧"
			,"回到梦<span style=\"font-weight:bold;\">开始</span>地方吧"
			,"让我们<span style=\"font-weight:bold;\">传送</span>吧"]
        },
        {
            "selector": "div.buryit",
            "text": ["我错啦，请手下<span style=\"font-weight:bold;\">留情</span>/(ㄒoㄒ)/~~"
			,"/(ㄒoㄒ)/<span style=\"font-weight:bold;\">やめで</span>ごださい"]
        },
        {
            "selector": "div.diggit,#green_channel_digg",
            "text": ["我会向<span style=\"color:#66AAFF;font-weight:bold;\"></span>禀报您<span style=\"font-weight:bold;\">推荐</span>O(∩_∩)O"
			,"您<span style=\"font-weight:bold;\">推荐</span>就是对我大大支持O(∩_∩)O"]
        },
        {
            "selector": "#btn_comment_submit",
            "text": ["要<span style=\"font-weight:bold;\">提交</span>了吗，首次评论需要审核，请耐心等待~"]
        },
        {
            "selector": ".input_my_zzk",
            "text": ["找不到想看内容？<span style=\"font-weight:bold;\">搜索</span>看看吧"
			,"<span style=\"font-weight:bold;\">搜索</span>看看其他内容吧"
			,"使用<span style=\"font-weight:bold;\">搜索</span>查查其他内容吧"]
        },
        {
            "selector": "#post_next_prev a",
            "text": ["去<span style=\"font-weight:bold;\">其他文章</span>看看吧"
			,"去<span style=\"font-weight:bold;\">别文章</span>看看吧"
			,"去<span style=\"font-weight:bold;\">另外文章</span>看看吧"
			,"来吧,去<span style=\"font-weight:bold;\">别地方</span>散散心"
			,"别不好意思,<span style=\"font-weight:bold;\">其他文章</span>都是共享"]
        },
        {
            "selector": "#Header1_HeaderTitle",
            "text": ["点击可以回去<span style=\"color:#66AAFF;font-weight:bold;\"></span><span style=\"font-weight:bold;\">首页</span>喔"]
        },
        {
            "selector": "c-player div.time",
            "text": ["在这里可以调整<span style=\"color:#0099cc;\">播放进度</span>呢"]
        },
        {
            "selector": "c-player div.volume",
            "text": ["在这里可以调整<span style=\"color:#0099cc;\">音量</span>呢"]
        },
        {
            "selector": "c-player div.list-button",
            "text": ["<span style=\"color:#0099cc;\">播放列表</span>里都有什么呢"]
        },
        {
            "selector": "c-player div.lyric-button",
            "text": ["有<span style=\"color:#0099cc;\">歌词</span>话就能跟着一起唱呢"]
        },
        {
            "selector": ".waifu #live3d",
            "text": ["你想…干嘛…","快…把手拿开", "鼠…鼠标放错地方了！"]
        }
    ],
    "click": [
        {
            "selector": ".waifu #live2d",
            "text": ["是…不小心碰到吧(⊙ˍ⊙)", "你戳到我啦┭┮﹏┭┮","萝莉控是什么呀(⊙ˍ⊙)","你…你想干嘛(⊙ˍ⊙)"
			,"快…把手拿开⌇●﹏●⌇", "鼠…鼠标放错地方了！(ó﹏ò｡)","再摸我要报警了！⌇●﹏●⌇"
			,"110吗，这里有个变态一直在摸我(ó﹏ò｡)"]
        },
        {
            "selector": "#touxiang",
            "text": ["不要戳<span style=\"color:#66AAFF;font-weight:bold;\"></span>头像呀ヽ（≧□≦）ノ"
			,"<span style=\"color:#66AAFF;font-weight:bold;\"></span>头像是禁止戳戳ヽ（≧□≦）ノ"
			,"<span style=\"color:#66AAFF;font-weight:bold;\"></span>头像就由我来守护ヽ（≧□≦）ノ"
			,"守护<span style=\"color:#66AAFF;font-weight:bold;\"></span>头像！ヽ（≧□≦）ノ"
			,"远离<span style=\"color:#66AAFF;font-weight:bold;\"></span>头像ヽ（≧□≦）ノ"]
        },
        {
            "selector": "div.diggit,#green_channel_digg",
            "text": ["<span style=\"font-weight:bold;\">爱您爱您爱您</span>( •̀ ω •́ )y"
			,"我要<span style=\"font-weight:bold;\">抱抱您</span>( •̀ ω •́ )y"]
        },
        {
            "selector": "div.buryit",
            "text": ["哼，你是<span style=\"font-weight:bold;\">坏人</span>啦(￢︿̫̿￢☆)"
			,"哼，不<span style=\"font-weight:bold;\">坏人</span>说话啦(￢︿̫̿￢☆)"]
        }
    ],"seasons": [
        {
            "date": "01/01",
            "text": "<span style=\"color:#0099cc;\">元旦</span>了呢，新一年又开始了，新年快乐~"
        },
        {
            "date": "02/14",
            "text": "又是一年<span style=\"color:#0099cc;\">情人节</span>，今年找到对象了嘛~"
        },
        {
            "date": "03/08",
            "text": "今天是<span style=\"color:#0099cc;\">妇女节</span>！"
        },
        {
            "date": "03/12",
            "text": "今天是<span style=\"color:#0099cc;\">植树节</span>，要保护环境呀"
        },
        {
            "date": "04/01",
            "text": "悄悄告诉你一个秘密~<span style=\"background-color:#34495e;\">今天是愚人节，不要被骗了哦~</span>"
        },
        {
            "date": "05/01",
            "text": "今天是<span style=\"color:#0099cc;\">五一劳动节</span>，计划好假期去哪里了吗~"
        },
        {
            "date": "06/01",
            "text": "<span style=\"color:#0099cc;\">儿童节</span>了呢，快活时光总是短暂，要是永远长不大该多好啊…"
        },
        {
            "date": "09/03",
            "text": "<span style=\"color:#0099cc;\">中国人民抗日战争胜利纪念日</span>，铭记历史、缅怀先烈、珍爱平、开创未来。"
        },
        {
            "date": "09/10",
            "text": "<span style=\"color:#0099cc;\">教师节</span>，在学校要给老师问声好呀~"
        },
        {
            "date": "10/01",
            "text": "<span style=\"color:#0099cc;\">国庆节</span>，新中国已经成立好多年了呢"
        },
        {
            "date": "11/05-11/12",
            "text": "今年<span style=\"color:#0099cc;\">双十一</span>是谁一起过呢~"
        },
        {
            "date": "12/20-12/31",
            "text": "这几天是<span style=\"color:#0099cc;\">圣诞节</span>，主人肯定又去剁手买买买了~"
        }
    ]
};
            $.each(result.mouseover, function (index, tips){
                $(document).on("mouseover", tips.selector, function (){
                    var text = tips.text;
                    if(Array.isArray(tips.text)) text = tips.text[Math.floor(Math.random() * tips.text.length + 1)-1];
                    text = text.render({text: $(this).text()});
                    showMessage(text, 3000);
                });
            });
            $.each(result.click, function (index, tips){
                $(document).on("click", tips.selector, function (){
                    var text = tips.text;
                    if(Array.isArray(tips.text)) text = tips.text[Math.floor(Math.random() * tips.text.length + 1)-1];
                    text = text.render({text: $(this).text()});
                    showMessage(text, 3000, true);
                });
            });
            $.each(result.seasons, function (index, tips){
                var now = new Date();
                var after = tips.date.split('-')[0];
                var before = tips.date.split('-')[1] || after;
                
                if((after.split('/')[0] <= now.getMonth()+1 && now.getMonth()+1 <= before.split('/')[0]) && 
                   (after.split('/')[1] <= now.getDate() && now.getDate() <= before.split('/')[1])){
                    var text = tips.text;
                    if(Array.isArray(tips.text)) text = tips.text[Math.floor(Math.random() * tips.text.length + 1)-1];
                    text = text.render({year: now.getFullYear()});
                    showMessage(text, 6000, true);
                }
            });
			
}

function loadModel(modelId, modelTexturesId){
    localStorage.setItem('modelId', modelId);
    if (modelTexturesId === undefined) modelTexturesId = 0;
    localStorage.setItem('modelTexturesId', modelTexturesId);
    loadlive2d('live2d', 'https://www.scustu.cn/m.json', console.log('live2d','模型 '+modelId+'-'+modelTexturesId+' 加载完成'));
}

function loadRandModel(){
    var modelId = localStorage.getItem('modelId');
    var modelTexturesId = localStorage.getItem('modelTexturesId');
    
    var modelTexturesRandMode = 'rand';     // 可选 'rand'(随机), 'switch'(顺序)
    
    $.ajax({
        cache: false,
        url: 'https://api.fghrsh.net/live2d/'+modelTexturesRandMode+'_textures/?id='+modelId+'-'+modelTexturesId,
        dataType: "json",
        success: function (result){
            if (result.textures['id'] == 1 && (modelTexturesId == 1 || modelTexturesId == 0)) {
                showMessage('我还没有其他衣服呢', 3000, true);
            } else {
                showMessage('<span style="color:#FF66AA;font-weight:bold;"></span>要求<span style="color:#66AAFF;font-weight:bold;"></span>给我买了很多套衣服呢~你看！', 3000, true);
            }
            loadModel(modelId, result.textures['id']);
        }
    });
}

function loadOtherModel(){
    var modelId = localStorage.getItem('modelId');
    
    var modelTexturesRandMode = 'switch';     // 可选 'rand'(随机), 'switch'(顺序)
    
    $.ajax({
        cache: false,
        url: 'https://api.fghrsh.net/live2d/'+modelTexturesRandMode+'/?id='+modelId,
        dataType: "json",
        success: function (result){
            loadModel(result.model['id']);
            showMessage(result.model['message'], 3000, true);
        }
    });
}