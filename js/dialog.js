
// 获取弹窗元素
var modal = document.getElementById('myModal');

// 获取关闭按钮
var span = document.getElementsByClassName('close')[0];

// 当点击关闭按钮时，关闭弹窗
span.onclick = function() {
  modal.style.display = 'none';
}




// 当用户点击页面上的任何其他地方时，关闭弹窗
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
  
}

// 打开弹窗
function openModal() {
  modal.style.display = 'block';
}



// 页面加载完毕后打开弹窗
window.onload = openModal;



