
document.querySelectorAll('.categories li').forEach(function(category) {
    category.addEventListener('click', function() {
      // 移除所有active类
      document.querySelectorAll('.categories li').forEach(function(item) {
        item.classList.remove('active');
      });
      document.querySelectorAll('.options').forEach(function(option) {
        option.classList.remove('active');
      });
  
      // 添加active类到当前点击的分类和对应的选项
      category.classList.add('active');
      var target = category.getAttribute('data-target');
      document.getElementById(target).classList.add('active');
    });
  });