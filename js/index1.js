const button = document.getElementById('playPauseButton');
const video = document.getElementById('videoElement');
const bfztObj = document.querySelector('.bfzt')
// 初始状态为暂停
let isPlaying = false;

// 页面加载时将视频暂停
video.pause();
button.addEventListener('click', () => {
	if (isPlaying) {
		video.pause(); // 暂停视频
		bfztObj.src = '../image/mti-播放1.png' // 更新按钮文本
		video.style.filter = "brightness(30%)"
	} else {
		video.muted = false; // 取消静音
		video.play(); // 播放视频
		bfztObj.src = '../image/mti-暂停1.png'; // 更新按钮文本
		video.style.filter = "brightness(100%)"
		setTimeout(function () {
			bfztObj.style.display = 'none'
		}, 3000);

	}
	isPlaying = !isPlaying; // 切换播放状态
});
video.addEventListener('click', () => {
	if (isPlaying) {
		bfztObj.style.display = 'block'
		setTimeout(function () {
			if (!isPlaying) {
				bfztObj.style.display = 'block'
			} else {
				bfztObj.style.display = 'none'
			}
		}, 3000);

	}
})
/*时钟*/
function updateTime() {
	const now = new Date();
	const hours = String(now.getHours()).padStart(2, '0');
	const minutes = String(now.getMinutes()).padStart(2, '0');
	document.getElementById('time').textContent = `${hours}:${minutes}`;
}

setInterval(updateTime, 60000); // 每分钟更新时间
updateTime(); // 初始化时显示时间
/*日期*/
const date = new Date();
const formattedDate = date.toDateString();

// 显示日期
document.getElementById('date').textContent = formattedDate;



/*手机切换界面*/
const icon = document.getElementById('myIcon');
const mobilePhone = document.getElementById('mobilePhone');
const desktop = document.getElementById('desktop');

let isDragging = false;
let startY, startTop;

icon.addEventListener('mousedown', (e) => {
	isDragging = true;
	startY = e.clientY;
	startTop = icon.getBoundingClientRect().top;
	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(e) {
	if (isDragging) {
		const deltaY = e.clientY - startY;
		const maxDeltaY = Math.min(deltaY, 30); // 限制移动距离为30px
		const newY = Math.max(maxDeltaY, -30); // 允许向上移动，最大距离为30px

		icon.style.transform = `translateY(${newY}px)`;

		const mobilePhoneOpacity = window.getComputedStyle(mobilePhone).opacity;

		// 判断是否需要切换界面
		if (newY >= 0) { // 你可以调整这个值来决定触发切换的阈值
			if (mobilePhoneOpacity === '1') {
				mobilePhone.style.opacity = '0';
				setTimeout(() => {
					mobilePhone.style.display = 'none';
					desktop.style.display = 'block';
					desktop.style.opacity = '1';
				}, 1000); // 动画持续时间需与 CSS 保持一致
			}
		}
	}
}

function onMouseUp() {
	isDragging = false;
	document.removeEventListener('mousemove', onMouseMove);
	document.removeEventListener('mouseup', onMouseUp);
}

// 滑动隐藏视频
const bgVideoEl = document.getElementById("bg-video");

function updateVideo() {
	const scrollY = window.pageYOffset;
	video.style.opacity = 1 - scrollY / 900;
}

window.addEventListener("scroll", () => {
	requestAnimationFrame(updateVideo);
});


$('#playPauseButtones').click(function(){
	$(".yidhf").animate({
		left:'300px',top:'220px'
	},"2000")
	$(this).hide()
})

let interval;
let posX = 0;
let posY = 0;
let direction = 1; // 用于上下移动的方向
const maxDistance = 750; // 设定最大移动距离

document.getElementById('playPauseButtones').addEventListener('click', function() {

    if (interval) {
        clearInterval(interval);
        interval = null; // 停止移动
    } else {
        interval = setInterval(moveImage, 10); // 每100毫秒移动一次
		interval = setInterval(moveImages, 100); // 每100毫秒移动一次
    }
	
});
	function moveImages(){
		posX += 10; // 每次向右移动5px
		
	
	}
function moveImage() {
	posY += direction; // 根据方向移动
    // 每50px上下反转方向
    if (posY > 50 || posY < -50) {
        direction = -direction; // 改变方向
    }

    document.querySelector('.yidhf').style.transform = `translate(${posX}px, ${posY}px)`;

	if (Math.abs(posX) >= maxDistance) {
		clearInterval(interval); // 停止移动
	}
	if(posX == 200){
		$('.balloon').show()
	}
	if(posX >= 200){
		$('.textBox').show()
	}
	if(posX >= 720){
		$('.angel').css('opacity','1')
	}
	
}

let box = document.querySelectorAll('.grid-icon-btns')
	for (let i = 1; i <= 31; i++) {
		box[i + 1].innerText = `${i}`
	}

	/*
	定义一个变量，表示侧边栏状态，ture表示被隐藏（默认），false表示展开
	获取按钮，监听点击事件
	判断当前侧边栏的状态，如果被隐藏（变量值为true），就展开他：设置right，更新变量值为false
	如果展开（变量值为false），就隐藏他：设置right，更让新变量值为true。
	*/

	let flag = true //ture表示被隐藏（默认）
	$('.lantern').click(function () {
		$('.dateBirthday').stop().animate({
			right: '0px'
		},1500)
		$('.lantern').hide()
		setTimeout(function () {
			$('.dateBirthday').stop().animate({
				right: '-500px'
			},1500,function(){
				$('.lantern').show()
			})
			
		}, 3000)
	})

	const images = document.querySelectorAll('.image');
	console.log(images)
    const ornament = document.getElementById('ornament');
    const positions = Array.from(images).map(() => Math.random() * ornament.clientWidth);
    const directions = Array.from(images).map(() => Math.random() > 0.5 ? 1 : -1); // 随机方向
    const speeds = Array.from(images).map(() => Math.random() * 4 + 1); // 随机速度范围 [1, 5]

    function ornamentMoveImages() {
        images.forEach((image, index) => {
            positions[index] += directions[index] * speeds[index]; // 更新位置
            
            // 边界检测
            if (positions[index] > ornament.clientWidth - image.clientWidth || positions[index] < 0) {
                directions[index] *= -1; // 反向移动
            }

            image.style.transform = `translateX(${positions[index]}px) translateY(${Math.sin(positions[index] / 100) * 20}px) translateZ(-100px)`; // 3D移动
        });

        requestAnimationFrame(ornamentMoveImages);
    }

    ornamentMoveImages();
let i = 1
setInterval(function(){
	if(i==1){
		$('.NocloudsNoclasses').css('transform','rotate(0deg)')
		i--	
	}else{
		$('.NocloudsNoclasses').css('transform','rotate(45deg)')
		i++
	}
},500)
let j = 1
let rotateDeg = 0
setInterval(function(){
	if(i==1){
		$('.musicBox img').eq(1).css('transform',`rotate(${rotateDeg}deg)`)
		j--	
		rotateDeg+=45
	}else{
		$('.musicBox img').eq(1).css('transform',`rotate(${rotateDeg}deg)`)
		j++
		rotateDeg+=45
	}
},500)
let K = 1
let rotateDeges = 0
$('#playPauseBtn').one('click',function(){
	$('.Birthday-hats img:nth-child(1)').css('left','28%')
	$('.Birthday-hats img:nth-child(3)').css('right','41%')
	setInterval(function(){
		if(K==1){
			$('.music-player img').css('transform',`rotate(${rotateDeges}deg)`)
			K--	
			rotateDeges+=45
		}else{
			$('.music-player img').css('transform',`rotate(${rotateDeges}deg)`)
			K++
			rotateDeges+=45
		}
	},500)
})



const leftBox = document.querySelector('.left-box');
    const rightBox = document.querySelector('.right-box');
    const divider = document.querySelector('.divider');
    const valueDisplay = document.querySelector('.value');

    let isDrswiping = false;

    divider.addEventListener('mousedown', (e) => {
        isDrswiping = true;
        e.preventDefault(); // 防止文本选择
    });

    document.addEventListener('mousemove', (e) => {
        if (isDrswiping) {
            const container = document.querySelector('.swiping');
            const containerRect = container.getBoundingClientRect();
            const offsetX = e.clientX - containerRect.left;

            // 计算新的比例
            let newLeftPercentage = (offsetX / containerRect.width) * 100;
            newLeftPercentage = Math.max(0, Math.min(100, newLeftPercentage)); // 限制在0到100之间
            
            // 更新盒子宽度
            leftBox.style.flexBasis = newLeftPercentage + '%';
            rightBox.style.flexBasis = (100 - newLeftPercentage) + '%';

            // 更新显示文本
            valueDisplay.textContent = Math.round(newLeftPercentage) + '%';
            divider.style.left = newLeftPercentage + '%'; // 更新分隔条位置

            // 控制盒子的显示状态
            if (newLeftPercentage === 0) {
                leftBox.style.display = 'none';
                rightBox.style.display = 'block';
            } else if (newLeftPercentage === 100) {
                leftBox.style.display = 'block';
                rightBox.style.display = 'none';
            } else {
                leftBox.style.display = 'block';
                rightBox.style.display = 'block';
            }
        }
    });

    document.addEventListener('mouseup', () => {
        isDrswiping = false;
    });

    window.addEventListener('mouseleave', () => {
        isDrswiping = false;
    });


    let isBoxVisible = false;

    document.addEventListener('mousemove', (event) => {
        const { clientX } = event;

        // 当鼠标靠近左边缘（距离小于20px）时，显示盒子
        if (clientX < 1) {
			$('#mobilePhone').stop().animate({
				left: '0px'
			},1500)
			$('#desktop').stop().animate({
				left: '0px'
			},1500)

            isBoxVisible = true;
        }
    });

    // 监听鼠标移出盒子区域的事件
    mobilePhone.addEventListener('mouseleave', () => {
		$('#mobilePhone').stop().animate({
			left: '-400px'
		},1500)
        isBoxVisible = false;
    });
	    // 监听鼠标移出盒子区域的事件
		desktop.addEventListener('mouseleave', () => {
			$('#desktop').stop().animate({
				left: '-400px'
			},1500)
		isBoxVisible = false;
	});

    // 在鼠标进入盒子区域时，不做任何操作，保持盒子可见
    mobilePhone.addEventListener('mouseenter', () => {
		$('#mobilePhone').stop().animate({
			left: '0px'
		},1500)
        
    });
	desktop.addEventListener('mouseenter', () => {
		$('#desktop').stop().animate({
			left: '0px'
		},1500)
    });

	document.addEventListener('DOMContentLoaded', () => {
		const ul = document.querySelector("ul");
		ul.addEventListener('click', () => {
			ul.classList.toggle('active');
		});
	});
	const imagesKitty = [
		'../image/kv1.jpg', // 替换为你的第一张图片路径
		'../image/kv2.jpg', // 替换为你的第二张图片路径
		'../image/kv3.jpg', // 替换为你的第三张图片路径
		'../image/kv4.jpg'  // 替换为你的第四张图片路径
	];
	
	document.querySelector('.contentKitty').addEventListener('click', function() {
		const imageKitty = document.getElementById('image-Kitty');
		const flipImage = document.getElementById('flipImage');
		const overlay = document.getElementById('overlay');
	
		// 随机选择一张图片
		const randomIndex = Math.floor(Math.random() * imagesKitty.length);
		flipImage.src = imagesKitty[randomIndex];
	
		// 显示图片容器和遮罩层
		imageKitty.style.display = 'block';
		overlay.style.display = 'block'; // 显示遮罩层
	
		// 添加翻转类
		flipImage.classList.add('flipped');
	
		// 移除翻转类以便后续再次点击可以重新触发动画
		setTimeout(() => {
			flipImage.classList.remove('flipped');
		}, 1200); // 1200ms是动画的持续时间
	});
	
	// 隐藏图片按钮
	document.getElementById('hideButton').addEventListener('click', function() {
		const imageKitty = document.getElementById('image-Kitty');
		const overlay = document.getElementById('overlay');
	
		imageKitty.style.display = 'none'; // 隐藏图片容器
		overlay.style.display = 'none'; // 隐藏遮罩层
	});

	const imagesKuromi = [
		'../image/ci1.jpg', // 替换为你的第一张图片路径
		'../image/ci2.jpg', // 替换为你的第二张图片路径
		'../image/ci3.jpg', // 替换为你的第三张图片路径
		'../image/ci4.jpg'  // 替换为你的第四张图片路径
	];
	$('.contentKuromi').click(function(){
		// 随机选择一张图片
		const randomIndex = Math.floor(Math.random() * imagesKuromi.length);
		KuromiImage.src = imagesKuromi[randomIndex];
		// 显示图片容器和遮罩层
		$('#image-Kuromi').show()
		$('#overlay').show()
		// 添加翻转类
		KuromiImage.classList.add('flipped');

		// 移除翻转类以便后续再次点击可以重新触发动画
		setTimeout(() => {
			flipImage.classList.remove('flipped');
		}, 1200); // 1200ms是动画的持续时间
	})
	$('.hideButton').click(function(){
		$('#image-Kuromi').hide()
		$('#overlay').hide()
	})
	const imagesMeldy = [
		'../image/pomp1.jpg', // 替换为你的第一张图片路径
		'../image/pomp2.jpg', // 替换为你的第二张图片路径
		'../image/pomp3.jpg',
		'../image/pomp4.jpg'
	];
	$('.contentMeldy').click(function(){
		// 随机选择一张图片
		const randomIndex = Math.floor(Math.random() * imagesMeldy.length);
		MeldyImage.src = imagesMeldy[randomIndex];
		// 显示图片容器和遮罩层
		$('#image-Meldy').show()
		$('#overlay').show()
		// 添加翻转类
		MeldyImage.classList.add('flipped');

		// 移除翻转类以便后续再次点击可以重新触发动画
		setTimeout(() => {
			flipImage.classList.remove('flipped');
		}, 1200); // 1200ms是动画的持续时间
	})
	$('.hideButton').click(function(){
		$('#image-Meldy').hide()
		$('#overlay').hide()
	})
	const imagesPiano = [
		'../image/phc1.jpg', // 替换为你的第一张图片路径
		'../image/phc2.jpg', // 替换为你的第二张图片路径
		'../image/phc3.jpg',
		'../image/phc4.jpg'
	];
	$('.contentPiano').click(function(){
		// 随机选择一张图片
		const randomIndex = Math.floor(Math.random() * imagesPiano.length);
		PianoImage.src = imagesPiano[randomIndex];
		// 显示图片容器和遮罩层
		$('#image-Piano').show()
		$('#overlay').show()
		// 添加翻转类
		PianoImage.classList.add('flipped');

		// 移除翻转类以便后续再次点击可以重新触发动画
		setTimeout(() => {
			flipImage.classList.remove('flipped');
		}, 1200); // 1200ms是动画的持续时间
	})
	$('.hideButton').click(function(){
		$('#image-Piano').hide()
		$('#overlay').hide()
	})
	

	$(document).ready(function() {
        let current = 0;
        const page4image = $('.page4image');
        let interval;

        function showNextpage4image() {
            page4image.eq(current).removeClass('active');
            current = (current + 1) % page4image.length;
            page4image.eq(current).addClass('active');
        }

        interval = setInterval(showNextpage4image, 350); // 每3秒切换一次

        $('#slideshow').hover(
            function() {
                clearInterval(interval); // 鼠标悬停时暂停
            },
            function() {
                interval = setInterval(showNextpage4image, 300); // 鼠标移开时恢复
            }
        );
    });
	    // 设置你的生日日期 (年, 月, 日, 时, 分, 秒)
		const birthday = new Date('2024-11-24T00:00:00').getTime();

		function updateCountdown() {
			const now = new Date().getTime();
			const distance = birthday - now;
	
			// 计算时间差
			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
			// 更新页面内容
			document.getElementById("days").innerText = days + " 天";
			document.getElementById("hours").innerText = hours + " 小时";
			document.getElementById("minutes").innerText = minutes + " 分钟";
			document.getElementById("seconds").innerText = seconds + " 秒";
	
			// 如果倒计时结束
			if (distance < 0) {
				clearInterval(x);
				document.getElementById("countdown-timer").innerHTML = "生日快乐!";
			}
		}
	
		// 每秒更新一次倒计时
		const x = setInterval(updateCountdown, 1000);
	

let currentTrackIndex = 0;
const tracks = [
    { name: "안녕 (Goodbye)", src: "../fons/Dia - 안녕 (Goodbye)_HQ.mp3" },
    { name: "G-DRAGON、TAEYANG (太阳) - I Need A Girl", src: "../fons/G-DRAGON、TAEYANG (太阳) - I Need A Girl_HQ.mp3" },
    { name: "Down 4u (沦陷英文版)", src: "../fons/JuggShots - Down 4u (沦陷英文版)_HQ.mp3" },
	{ name: "Exhale", src: "../fons/Sabrina Carpenter - Exhale_HQ.mp3" },
	{ name: "麦恩莉", src: "../fons/方大同 - 麦恩莉_MQ.mp3" },
];

const audio = document.getElementById('audio');
const trackName = document.getElementById('trackName');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const seekBar = document.getElementById('seekBar');
const currentTime = document.getElementById('currentTime');
const duration = document.getElementById('duration');
const trackList = document.getElementById('trackList');
const musicPlayer = document.querySelector('.music-player');

// 加载歌曲列表
tracks.forEach((track, index) => {
    const li = document.createElement('li');
    li.textContent = track.name;
    li.addEventListener('click', () => {
        currentTrackIndex = index;
        loadTrack(currentTrackIndex);
        playPause();
    });
    trackList.appendChild(li);
});

// 加载曲目
function loadTrack(index) {
    audio.src = tracks[index].src;
    trackName.textContent = ` ${tracks[index].name}`;
    audio.load();
    changeBackgroundColor(index); // 更改背景颜色
}

// 播放/暂停
function playPause() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '暂停';
    } else {
        audio.pause();
        playPauseBtn.textContent = '播放';
    }
}

// 上一曲
function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    playPause();
}

// 下一曲
function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    playPause();
}

// 更新进度条
function updateSeekBar() {
    const seekPercentage = (audio.currentTime / audio.duration) * 100;
    seekBar.value = seekPercentage || 0;

    const currentMin = Math.floor(audio.currentTime / 60);
    const currentSec = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
    currentTime.textContent = `${currentMin}:${currentSec}`;

    const durationMin = Math.floor(audio.duration / 60);
    const durationSec = Math.floor(audio.duration % 60).toString().padStart(2, '0');
    duration.textContent = `${durationMin}:${durationSec}`;
}

// 更改背景颜色
function changeBackgroundColor(index) {
    const colors = ['#50514e', '#a1a2a1', '#a26d75','#50514e','#a2948c']; // 定义颜色数组
    musicPlayer.style.backgroundColor = colors[index % colors.length]; // 根据索引循环选择颜色
}

audio.addEventListener('loadedmetadata', updateSeekBar);
audio.addEventListener('timeupdate', updateSeekBar);

playPauseBtn.addEventListener('click', playPause);
prevBtn.addEventListener('click', prevTrack);
nextBtn.addEventListener('click', nextTrack);
seekBar.addEventListener('input', () => {
    const seekTo = audio.duration * (seekBar.value / 100);
    audio.currentTime = seekTo;
});

// 初始化播放器
loadTrack(currentTrackIndex);


document.getElementById('loginBtn').addEventListener('click', function() {
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	// 这里可以换成你想要的用户名和密码
	const correctUsername = '宁紫涵';
	const correctPassword = 'HelloKitty';

	const errorMsg = document.getElementById('error');

	if (username === correctUsername && password === correctPassword) {
		errorMsg.textContent = '';
		document.getElementById('loginContainer').classList.add('flippedes');
	} else {
		errorMsg.textContent = '答案错误!';
	}
});

document.getElementById('redirectBtn').addEventListener('click', function() {
	window.location.href = './Birthday wishes.html'; // 替换为你想要跳转的页面
});

// 输入框点击后文字消失
let userNameObj = document.getElementById('username')
let pwdObj = document.getElementById('password')
  // 添加点击事件监听器
userNameObj.addEventListener('click', function(){
    this.removeAttribute('placeholder');
    userNameObj.style.width = '300px'
    userNameObj.style.backgroundColor='rgba(255,255,255)'
    userNameObj.style.color='#79A8AE'
});
pwdObj.addEventListener('click', function(){
    this.removeAttribute('placeholder');
    pwdObj.style.width = '300px'
    pwdObj.style.backgroundColor='rgba(255,255,255)'
    pwdObj.style.color='#79A8AE'
});
userNameObj.addEventListener('blur', function() {
    // 恢复 placeholder 文字
    this.setAttribute('placeholder', '');
    userNameObj.style.width = '250px'
    userNameObj.style.backgroundColor='rgba(255,255,255,0.2)'
    userNameObj.style.color='rgba(255,255,255)'
});
pwdObj.addEventListener('blur', function() {
    // 恢复 placeholder 文字
    this.setAttribute('placeholder', '');
    pwdObj.style.width = '250px'
    pwdObj.style.backgroundColor='rgba(255,255,255,0.2)'
    pwdObj.style.color='rgba(255,255,255)'
});
