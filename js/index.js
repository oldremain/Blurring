function blurring(root) {
  const [$bg, $percent] = root.children;

  let percentProgress = 0;

  let interval = setInterval(() => {
    if (percentProgress  === 100) {
      clearInterval(interval);
      return;
    }
    percentProgress  += 1;
    $percent.textContent = `${percentProgress } %`;
    $bg.style.filter = `blur(${50 - (percentProgress / 2)}px)`;
  }, 50);
}

blurring(document.querySelector('.blur'));
