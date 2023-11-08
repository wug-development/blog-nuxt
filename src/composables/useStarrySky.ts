export const useStarrySky = () => {
  const screenW = document.documentElement.clientWidth;
  const screenH = document.documentElement.clientHeight;
  star();
  blurStar();
  function blurStar() {
    const content = document.getElementById('blurStar');
    for (let i = 0; i < 250; i++) {
      const span = document.createElement('span');
      content && content.appendChild(span);
      const x = parseInt(`${Math.random() * screenW}`);
      const y = parseInt(`${Math.random() * screenH}`);
      span.classList.add('blurStar');
      span.style.left = x + 'px';
      span.style.top = y + 'px';
      span.style.zIndex = '0';
      const scale = Math.random() * 0.5;
      span.style.transform = 'scale(' + scale + ', ' + scale + ')';
    }
  }
  function star() {
    const content = document.getElementById('meteor');
    for (let i = 0; i < 150; i++) {
      const span = document.createElement('span');
      const spanChild = document.createElement('span');
      const spanChild2 = document.createElement('span');
      span.appendChild(spanChild);
      span.appendChild(spanChild2);
      content?.appendChild(span);
      const x = parseInt(`${Math.random() * screenW}`);
      const y = parseInt(`${Math.random() * screenH}`);
      span.classList.add('spanStar');
      span.style.left = x + 'px';
      span.style.top = y + 'px';
      span.style.zIndex = '0';
      const scale = Math.random() * 0.5;
      span.style.transform = 'scale(' + scale + ', ' + scale + ')';
      const rate = Math.random() * 2;
      span.style.animationDelay = rate + 's';
    }
  }
  function meteorStar() {
    const content = document.getElementById('meteor');
    const meteorNum = parseInt(`${Math.random() * 10 + 5}`);
    for (let i = 0; i < meteorNum; i++) {
      const span = document.createElement('span');
      content && content.appendChild(span);
      const x = parseInt(`${Math.random() * screenW * 1.2}`);
      const y = 0;
      span.classList.add('meteorStar');
      span.style.left = x + 'px';
      span.style.top = y + 'px';
      span.style.zIndex = '0';
      const rate = Math.random() * 2;
      span.style.animationDelay = rate + 's';
    }
  }

  let intervalHandleAnimate: any = null;
  function animateStart() {
    meteorStar();
    if (intervalHandleAnimate != null) {
      animateStop();
    }
    intervalHandleAnimate = setInterval(() => {
      meteorStar();
    }, 10000);
  }

  function animateStop() {
    clearInterval(intervalHandleAnimate);
    intervalHandleAnimate = null;
  }

  document.addEventListener('visibilitychange', () => {
    const isShowing = document.visibilityState === 'visible'; // 展示的时候为 visible 隐藏的时候为 hidden
    // 或者简写成
    isShowing ? animateStart() : animateStop();
  });

  animateStart();
};
