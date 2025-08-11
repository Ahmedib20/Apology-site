document.addEventListener('DOMContentLoaded', () => {
    // --- Initial setup and element selection ---
    const apologyAudio = document.getElementById('apology-audio');
    const playAudioBtn = document.getElementById('play-audio-btn');
    const conditionsTextarea = document.getElementById('conditions');
    const forgiveBtn = document.getElementById('forgive-btn');
    const angryBtn = document.getElementById('angry-btn');
    const angryMessage = document.getElementById('angry-message');
    const timerDisplay = document.getElementById('timer-display');
    const loveSlider = document.getElementById('love-slider');
    const loveMeterMessage = document.getElementById('love-meter-message');
    const finalAcceptanceContainer = document.getElementById('final-acceptance-container');

    // --- Floating Hearts Background ---
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 5 + 5 + 's';
        document.body.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 10000);
    }
    setInterval(createHeart, 300);

    // --- Audio Playback ---
    playAudioBtn.addEventListener('click', () => {
        apologyAudio.play();
    });

    // --- Forgiveness Conditions & Floating Messages ---
    const acceptancePhrases = ["موافق ❤️", "تمام 🌹", "على عيني 😍", "شرطك أوامر 💖", "خلص اعتبره تم ✨"];
    let typingTimer;

    conditionsTextarea.addEventListener('input', (e) => {
        const phrase = acceptancePhrases[Math.floor(Math.random() * acceptancePhrases.length)];
        const msg = document.createElement('div');
        msg.classList.add('acceptance-message');
        msg.textContent = phrase;
        msg.style.left = e.clientX + 'px';
        msg.style.top = e.clientY + 'px';
        document.body.appendChild(msg);

        // Animate and remove the message
        setTimeout(() => {
            msg.style.transform = 'translateY(-50px) scale(1.2)';
            msg.style.opacity = '0';
            setTimeout(() => msg.remove(), 2000);
        }, 100);

        // Clear previous timer and set a new one
        clearTimeout(typingTimer);
        typingTimer = setTimeout(() => {
            showFinalAcceptanceMessage();
            // --- IMPORTANT: Email Sending Logic ---
            // This is where you would send the email. This requires a backend.
            // For example, using a service like EmailJS (https://www.emailjs.com/):
            // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
            //     to_email: 'ahmoma212@gmail.com',
            //     conditions: conditionsTextarea.value
            // });
            console.log("Email to ahmoma212@gmail.com would be sent with conditions:", conditionsTextarea.value);
        }, 2000);
    });

    function showFinalAcceptanceMessage() {
        const finalMsg = document.createElement('div');
        finalMsg.classList.add('final-acceptance-message');
        finalMsg.innerHTML = 'تم قبول جميع الشروط بلا نقاش 🎉❤️';
        finalAcceptanceContainer.appendChild(finalMsg);
        finalMsg.style.display = 'block';

        // Falling hearts/petals animation
        for (let i = 0; i < 50; i++) {
            const heart = document.createElement('span');
            heart.innerHTML = ['❤️', '🌹', '💖', '🌸'][Math.floor(Math.random() * 4)];
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 2 + 3 + 's';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heart.style.opacity = 0;
            heart.style.animationName = 'fall';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }
    }

    // --- Countdown Timer & Button Enabling ---
    let timeLeft = 180; // 3 minutes
    const timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = '0:00';
            forgiveBtn.disabled = false;
            angryBtn.disabled = false;
        } else {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
    }, 1000);

    // --- Forgiveness Buttons ---
    const angryPhrases = [
        "يا حبيبة قلبي، سامحيني بس",
        "خلص، ما في زعل لما تعودي تضحكي",
        "أنا معاك مهما صار، بس رجاءً سامحيني",
        "قلبك كبير وأنا مستنيها تنفتح",
        "صبرا يا غالية، سامحيني على التأخير"
    ];

    forgiveBtn.addEventListener('click', () => {
        // Emoji rain animation
        const emojiRainContainer = document.getElementById('emoji-rain-container');
        const emojis = ['❤️', '🌹', '😊', '😍', '💖', '🎉'];
        for (let i = 0; i < 100; i++) {
            const emoji = document.createElement('span');
            emoji.classList.add('emoji-rain-item');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * 100 + 'vw';
            emoji.style.animationDuration = Math.random() * 3 + 2 + 's';
            emoji.style.animationDelay = Math.random() * 2 + 's';
            emojiRainContainer.appendChild(emoji);
        }
        const message = document.createElement('h2');
        message.style.color = '#4caf50';
        message.textContent = 'الحمد لله! شكراً على قلبك الكبير ❤️';
        message.style.animation = 'fadeInScale 0.5s ease-out';
        forgiveBtn.parentElement.appendChild(message);
    });

    angryBtn.addEventListener('click', () => {
        const randomPhrase = angryPhrases[Math.floor(Math.random() * angryPhrases.length)];
        angryMessage.textContent = randomPhrase;
    });

    // --- Memory Slideshow ---
    const slideshowImages = document.querySelectorAll('.slideshow-image');
    let currentSlide = 0;
    setInterval(() => {
        slideshowImages[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slideshowImages.length;
        slideshowImages[currentSlide].classList.add('active');
    }, 5000);

    // --- Love Meter Slider ---
    const loveMeterMessages = [
        "لسه بعيد، بس ما نيأس.",
        "قريبين من بعض.",
        "أنا مبسوط جداً! سامحتيني؟ ❤️"
    ];
    loveSlider.addEventListener('input', () => {
        const value = parseInt(loveSlider.value);
        if (value >= 0 && value <= 3) {
            loveMeterMessage.textContent = loveMeterMessages[0];
        } else if (value >= 4 && value <= 7) {
            loveMeterMessage.textContent = loveMeterMessages[1];
        } else {
            loveMeterMessage.textContent = loveMeterMessages[2];
        }
    });

    // Initial message for love slider
    loveMeterMessage.textContent = loveMeterMessages[0];
});