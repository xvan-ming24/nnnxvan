const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

      var but = document.getElementById('but');
     but.addEventListener("click",countFunc);
    function countFunc() {
        document.getElementById('container').style.display = 'none';
        document.getElementById('container2').style.display = 'block';
        document.getElementById('card').style.display = 'block';
    }
    let countDown = new Date('Oct 01, 2020 00:00:00').getTime(),
        x = setInterval(function() {
    
          let now = new Date().getTime(),
              distance = countDown - now;
    
          document.getElementById('days').innerText = Math.floor(distance / (day)),
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
            

          //do something later when date is reached
          if (distance <= 0) {
            document.getElementById('container').style.display = 'none';
            document.getElementById('container2').style.display = 'block';
            document.getElementById('card').style.display = 'block';
        }
    
        }, second)

        const box = document.getElementById('box');
    let isBoxVisible = false;

    document.addEventListener('mousemove', (event) => {
        const { clientX } = event;

        // 当鼠标靠近左边缘（距离小于20px）时，显示盒子
        if (clientX < 20) {
            box.style.left = '10px'; // 显示盒子
            isBoxVisible = true;
        }
    });

    // 监听鼠标移出盒子区域的事件
    box.addEventListener('mouseleave', () => {
        box.style.left = '-220px'; // 隐藏盒子
        isBoxVisible = false;
    });

    // 在鼠标进入盒子区域时，不做任何操作，保持盒子可见
    box.addEventListener('mouseenter', () => {
        box.style.left = '10px'; // 保持盒子可见
    });

