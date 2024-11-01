const character = document.getElementById('character');
  const dialogue = document.getElementById('dialogue');

  // 定义一个包含不同对话内容的数组
  const phrases = [
    '你是要找我主人吗?',
    '哎，你干嘛？',
    '别戳我了',
    '你喜欢和我玩吗？',
    '我主人QQ2041584846,有事找我主人吧',
    '我好累啊,走开,你往下去找另一个人把',
    '我下面还有个人,要不你去找他吧',
    '还在开发啊qwq,qwq',
    '点下左边?',
    '点下我右边?',
  
  ];

  // 随机选择一个对话
  function getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
  }

  character.addEventListener('mouseenter', () => {
    dialogue.style.display = 'block';
    dialogue.textContent = getRandomPhrase();
  });

  character.addEventListener('mouseleave', () => {
    dialogue.style.display = 'none';
  });

  character.addEventListener('click', () => {
    character.style.animation = 'shake 0.5s infinite';
    setTimeout(() => {
      character.style.animation = '';
    }, 500); // 停止抖动动画
  });