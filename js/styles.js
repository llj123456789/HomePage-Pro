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
  // 添加更多的文字...
    ];

// 获取页面中的元素
var textElement = document.getElementById('random-text');

// 更新文字内容和渐变色动画
function updateText() {
// 从数组中随机选择一个文字
var randomIndex = Math.floor(Math.random() * texts.length);
var newText = texts[randomIndex];

// 清空当前内容
textElement.innerHTML = '';

// 将每个文字分割并分别包裹在span标签中
newText.split('').forEach((letter, index) => {
  var letterElement = document.createElement('span');
  letterElement.textContent = letter;
  letterElement.className = 'text-letter';
  // 设置不同的动画延迟
  letterElement.style.animationDelay = `${index * 0.1}s`;
  textElement.appendChild(letterElement);
});
}
// 设置定时器，每次跳动后更新文字
setInterval(updateText, 4000); // 跳动周期为2秒，与bounce动画周期一致

 // 定义一个包含视频URL的数组
 var videoSources = [
    './video/hill.mp4',
    './video/sea.mp4',
    './video/fog.mp4',
    './video/mon.mp4',
    './video/sky.mp4',
    
    // 添加更多的视频URL...
  ];
  
  // 获取页面中的视频元素
  var videoElement = document.getElementById('background-video');
  
  // 随机选择一个视频URL
  function randomizeVideo() {
    var randomIndex = Math.floor(Math.random() * videoSources.length);
    var randomVideoSource = videoSources[randomIndex];
  
    // 设置视频元素的src属性为随机选择的视频URL
    videoElement.src = randomVideoSource;
  
    // 确保视频元素重新加载视频
    videoElement.load();
  }
  
  // 页面加载完毕后，立即随机选择一个视频
  window.onload = randomizeVideo;
  
  // 每次刷新页面时，再次随机选择一个视频
  window.onbeforeunload = function() {
    videoElement.src = ''; // 清除当前视频URL
  };
  
  // 重新加载页面时，再次随机选择一个视频
  window.onpageshow = function() {
    randomizeVideo();
  };
  
  // 添加更多的事件处理程序，以确保在不同情况下都能重新随机选择视频


  //左拉边框
  // 获取边框和文字内容元素
var border = document.querySelector('.borderLeft');
var textContent = document.querySelector('.text-contentLeft');

// 为容器添加点击事件监听器
document.querySelector('.containerLeft').addEventListener('click', function() {
  // 切换边框的宽度，实现展开和收起效果
  if (border.style.width === '100%') {
    border.style.width = '0';
    border.classList.remove('expanded');
  } else {
    border.style.width = '100%';
    border.classList.add('expanded');
  }
});

//simulate mac
        function openWindow(url) {
            document.getElementById('window-content').src = url;
            document.getElementById('window').style.display = 'block';
        }

        function closeWindow() {
            document.getElementById('window').style.display = 'none';
            document.getElementById('window-content').src = '';
        }


//统计网站时间
        function secondToDate(second) {
          if (!second) {
              return 0;
          }
          var time = new Array(0, 0, 0, 0, 0);
          if (second >= 365 * 24 * 3600) {
              time[0] = parseInt(second / (365 * 24 * 3600));
              second %= 365 * 24 * 3600;
          }
          if (second >= 24 * 3600) {
              time[1] = parseInt(second / (24 * 3600));
              second %= 24 * 3600;
          }
          if (second >= 3600) {
              time[2] = parseInt(second / 3600);
              second %= 3600;
          }
          if (second >= 60) {
              time[3] = parseInt(second / 60);
              second %= 60;
          }
          if (second > 0) {
              time[4] = second;
          }
          return time;
      }

      function setTime() {
        // 博客创建时间秒数，时间格式中，月比较特殊，是从0开始的，所以想要显示2月，得写1才行，如下
        var create_time = Math.round(new Date(Date.UTC(2024, 6, 20, 0, 0, 0))
                .getTime() / 1000);
        // 当前时间秒数,增加时区的差异
        var timestamp = Math.round((new Date().getTime() + 8 * 60 * 60 * 1000) / 1000);
        currentTime = secondToDate((timestamp - create_time));
        currentTimeHtml = currentTime[0] + '年' + currentTime[1] + '天'
                + currentTime[2] + '时' + currentTime[3] + '分' + currentTime[4]
                + '秒';
        document.getElementById("htmer_time").innerHTML = currentTimeHtml;
    }
    setInterval(setTime, 1000);



    // Function to get browser info
    function getBrowserInfo() {
      const ua = navigator.userAgent;
      let browserName = "Unknown browser";
      if (ua.indexOf("Firefox") > -1) {
          browserName = "Mozilla Firefox";
      } else if (ua.indexOf("SamsungBrowser") > -1) {
          browserName = "Samsung Internet";
      } else if (ua.indexOf("Opera") > -1 || ua.indexOf("OPR") > -1) {
          browserName = "Opera";
      } else if (ua.indexOf("Trident") > -1) {
          browserName = "Microsoft Internet Explorer";
      } else if (ua.indexOf("Edge") > -1) {
          browserName = "Microsoft Edge";
      } else if (ua.indexOf("Chrome") > -1) {
          browserName = "Google Chrome";
      } else if (ua.indexOf("Safari") > -1) {
          browserName = "Apple Safari";
      }
      return browserName;
  }

  // Function to get OS info|y|
  function getOSInfo() {
      let os = "Unknown OS";
      if (navigator.appVersion.indexOf("Win") != -1) os = "Windows";
      if (navigator.appVersion.indexOf("Mac") != -1) os = "MacOS";
      if (navigator.appVersion.indexOf("X11") != -1) os = "UNIX";
      if (navigator.appVersion.indexOf("Linux") != -1) os = "Linux";
      return os;
  }

  // Function to measure latency (ping)
  function measureLatency() {
      const startTime = performance.now();
      return fetch('https://www.baidu.com', { mode: 'no-cors' })
          .then(() => {
              const latency = performance.now() - startTime;
              return latency.toFixed(2) + ' ms';
          })
          .catch(() => 'Latency measurement failed');
  }

  // Function to measure FPS
  function measureFPS() {
      let lastTime = performance.now();
      let frameCount = 0;
      let fps = 0;
      const updateFPS = () => {
          const currentTime = performance.now();
          frameCount++;
          if (currentTime - lastTime >= 1000) {
              fps = frameCount;
              frameCount = 0;
              lastTime = currentTime;
          }
          requestAnimationFrame(updateFPS);
      };
      requestAnimationFrame(updateFPS);
      return () => fps + ' fps';
  }

  const getFPS = measureFPS();

  // Function to check if the user is old or new
  function checkUserStatus() {
      const isReturningUser = localStorage.getItem('returningUser');
      if (isReturningUser) {
          return "欢迎再次回来！";
      } else {
          localStorage.setItem('returningUser', 'true');
          return "好久不见，欢迎回来！";
      }
  }

  function updateInfo() {
      // Fill the info
      $('#browser-info').text("Browser: " + getBrowserInfo());
      $('#os-info').text("Operating System: " + getOSInfo());
      $('#fps-info').text("FPS: " + getFPS());
      $('#user-status').text(checkUserStatus());

      // Get IP and geo information using an external API

      

        
      // Measure latency
      measureLatency().then(latency => {
          $('#latency-info').text("Network Latency: " + latency);
          // Update bottom right latency info
          updateBottomRightInfo();
      });
  }

  function updateGeoInfo()
  {
      fetch('http://api.scustu.cn:8080/api/ip')
          .then(response => response.json())
          .then(data => {
              $('#ip-info').text("IP Address: " + data.ip);
              $('#geo-info').text("欢迎来自: " + data.country+"."+data.regin+"."+data.city+"的友友拜访");
              
              // Update bottom right info
              updateBottomRightInfo();
          });
  }

  function updateBottomRightInfo() {
      $('#info-bottom-right').html(
          "欢迎来自" + $('#geo-info').text().split(': ')[1] + "的友友拜访" +"<br>"+
          "Browser: " + $('#browser-info').text().split(': ')[1] + "<br>" +
          "IP Address: " + $('#ip-info').text().split(': ')[1] + "<br>" +
          "Network Latency: " + $('#latency-info').text().split(': ')[1] + "<br>" +
          "FPS: " + $('#fps-info').text().split(': ')[1] + "<br>" +
          "Operating System: " + $('#os-info').text().split(': ')[1] + "<br>" +
          $('#user-status').text()
      );
  }



  $(document).ready(function() {
      // Display the info box
      $('#info-box').fadeIn();

      // Initial info update
      updateInfo();
      updateGeoInfo();

      // Update info every 10 seconds
      setInterval(updateInfo, 100);

      // Hide the info box after a while and show the info at bottom right
      setTimeout(function() {
          $('#info-box').fadeOut(function() {
              $('#info-bottom-right').fadeIn();
          });
      }, 4000);

      // Continuously update the bottom right info box
      setInterval(updateBottomRightInfo, 100);
  });