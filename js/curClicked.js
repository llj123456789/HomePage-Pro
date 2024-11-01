var imageSources = [
    './image/yh0.png',
    './image/yh1.png',
    './image/yh2.png',
    './image/yh3.png',
    './image/yh4.png',
    './image/yh5.png',
    './image/yh6.png',
  ]

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('effect-container');
  
    document.addEventListener('click', function(event) {
      const x = event.pageX;
      const y = event.pageY;
      ;

    var maxI=Math.random()*10;
    if(maxI<2)
    {
        maxI=2;
    }
      for(var i=0;i<=maxI;i++)
        {
        // 创建图案元素
        var index=Math.floor(Math.random()*imageSources.length);
        const effectItem = document.createElement('div');
        effectItem.classList.add('effect-item');
        effectItem.style.backgroundImage = `url(${imageSources[index]})`;
        effectItem.style.left = `${x+i*2}px`;
        effectItem.style.top = `${y+i*2}px`;

        // 设置随机旋转角度
        const rotation = Math.random() * 360;
        effectItem.style.transform = `rotate(${rotation}deg)`;

        // 将图案元素添加到容器中
        container.appendChild(effectItem);
        // 设置动画
      effectItem.animate([
        { transform: `translateY(0) translateX(0) rotate(${rotation}deg)` },
        { transform: `translateY(${(Math.random())*500}px) translateX(${(Math.random())*500}px) rotate(${rotation + 360}deg)`, opacity: 0 },
      ], {
        duration: (Math.random() * 3000)+1000 , // 动画持续时间
        easing: 'ease-in-out', // 缓动函数
        fill: 'forwards' // 动画结束后保持状态
      }).finished.then(() => {
        // 动画结束后移除元素
        effectItem.remove();
      });
        }  
      
    });
  });
  
  var texts = [
    "歡迎拜訪",
    "訪問へようこそ",
    "嗨，别来无恙~~~",
    "星光不问赶路人&",
    "我们笑着说再见/，却深知再见遥遥无期...",
    "最近还好吗?",
    "马车越空，晃荡越响",
    "雨水越大，心事越长",
    "每天都要开心哦",
  
    ];
    
var myColor=[
  "white",
  "red",
  "blue",
  "yellow",
  "green",
  "purple",
  "yellow",
  "orange",
  "pink",
  "brown",
  "cyan",
  "magenta",
  "gray",
  "lightblue",
  "lightgreen",
  "lightpink",
  "lightyellow",
  "lightgray",
  "lightblue",
  "lightgreen",
  "lightpink",
  "lightyellow",
  "lightgray",
  "lightblue",
  "lightgreen",
  "lightpink",
  "lightyellow",
]
// 这个函数会在鼠标移动时被调用
function getMousePosition(event) {
    // 获取鼠标相对于页面的位置
    var x = event.pageX;
    var y = event.pageY;
    var vWidth = window.innerWidth;
    var vHeight = window.innerHeight;
    // 显示鼠标位置信息
    document.getElementById("mousePosition").style.position = "absolute";
    document.getElementById("mousePosition").style.left = x + "px";
    document.getElementById("mousePosition").style.top = y + "px";
    /*
    var textIndex=Math.floor(vWidth/x);
    splWidth=vWidth/texts.length;
    textIndex=Math.floor(x/splWidth);
    var colorIndex=Math.floor(Math.random()*myColor.length);
    document.getElementById("mousePosition").style.color = myColor[colorIndex];
    document.getElementById("mousePosition").innerHTML = texts[textIndex];
    document.getElementById("mousePosition").style.zIndex = "-1";
    */

    const container = document.getElementById('effect-container');
    var maxI=Math.random()*10;
    if(maxI<2)
        {
            maxI=2;
        }
          for(var i=0;i<=maxI;i++)
            {
        // 创建图案元素
        var index=Math.floor(Math.random()*imageSources.length);
        const effectItem = document.createElement('div');
        effectItem.classList.add('small-item');
        effectItem.style.backgroundImage = `url(${imageSources[index]})`;
        effectItem.style.left = `${x}px`;
        effectItem.style.top = `${y}px`;

        // 设置随机旋转角度
        const rotation = Math.random() * 360;
        effectItem.style.transform = `rotate(${rotation}deg)`;

        // 将图案元素添加到容器中
        container.appendChild(effectItem);
        // 设置动画
      effectItem.animate([
        { transform: `translateY(0) translateX(0) rotate(${rotation}deg)` },
        { transform: `translateY(${(Math.random())*500}px) translateX(${(Math.random())*500}px) rotate(${rotation + 360}deg)`, opacity: 0 },
      ], {
        duration: (Math.random() * 3000)+1000 , // 动画持续时间
        
        fill: 'forwards' // 动画结束后保持状态
      }).finished.then(() => {
        // 动画结束后移除元素
        effectItem.remove();
      });
    }
      

}

// 在文档加载完毕后，为整个文档添加鼠标移动事件监听器
document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("mousemove", getMousePosition);
});
