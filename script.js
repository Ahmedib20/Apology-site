document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Background Floating Hearts ---
    const background = document.querySelector('.background');
    const createHeart = () => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        background.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    };
    setInterval(createHeart, 300);

    // --- 2. Sticky Notes Rotation ---
    document.querySelectorAll('.sticky-note').forEach((note, index) => {
        note.style.setProperty('--i', index);
        note.style.transform = `rotate(${Math.random() * 6 - 3}deg)`;
    });

    // --- 3. Main Apology Text (Static) ---
    // The text is static and handled by HTML.

    // --- 4. Forgiveness Conditions Input ---
    const conditionsTextarea = document.getElementById('conditions-textarea');
    const acceptanceMessageContainer = document.getElementById('acceptance-message');
    let typingTimer;
    const acceptancePhrases = ["موافق ❤️", "تمام 🌹", "على عيني 😍", "شرطك أوامر 💖", "خلص اعتبره تم ✨"];

    conditionsTextarea.addEventListener('input', () => {
        // Clear previous timer
        clearTimeout(typingTimer);
        // Create a new floating message
        createFloatingMessage(acceptancePhrases[Math.floor(Math.random() * acceptancePhrases.length)]);
        // Set a new timer to show the final message after 2 seconds of inactivity
        typingTimer = setTimeout(showFinalAcceptanceMessage, 2000);
    });

    const createFloatingMessage = (text) => {
        const message = document.createElement('div');
        message.classList.add('floating-message');
        message.textContent = text;
        
        // Randomize position near the textarea
        const textareaRect = conditionsTextarea.getBoundingClientRect();
        const topPos = textareaRect.top + window.scrollY + Math.random() * 100;
        const leftPos = textareaRect.left + window.scrollX + Math.random() * textareaRect.width;

        message.style.top = `${topPos}px`;
        message.style.left = `${leftPos}px`;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 2000);
    };

    const showFinalAcceptanceMessage = () => {
        acceptanceMessageContainer.innerHTML = 'تم قبول جميع الشروط بلا نقاش 🎉❤️';
        createFallingAnimation('heart', 50); // Falling hearts
        // Automatically send the conditions to the email (placeholder)
        sendEmail(conditionsTextarea.value);
    };

    const sendEmail = (conditions) => {
        console.log(`Conditions sent to ahmoma212@gmail.com: ${conditions}`);
        // In a real application, you'd use a server-side script (e.g., PHP, Node.js) to handle this.
        // Example with a simulated mailto link:
        // window.location.href = `mailto:ahmoma212@gmail.com?subject=شروط المسامحة&body=${conditions}`;
    };
    
    // --- 5. Countdown Timer ---
    const timerElement = document.getElementById('timer');
    const forgiveBtn = document.getElementById('forgive-btn');
    const sadBtn = document.getElementById('sad-btn');
    let timeLeft = 180; // 3 minutes

    const countdown = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(countdown);
            forgiveBtn.disabled = false;
            sadBtn.disabled = false;
        }
        
        timeLeft--;
    }, 1000);

    // --- 6. Forgiveness Buttons ---
    const sadMessages = [
        "يا حبيبة قلبي، سامحيني بس",
        "خلص، ما في زعل لما تعودي تضحكي",
        "أنا معاك مهما صار، بس رجاءً سامحيني",
        "قلبك كبير وأنا مستنيها تنفتح",
        "والنبي لتسامحيني، خلااااصصص تووببة ياحبووبة"
    ];
    const sadMessageContainer = document.getElementById('sad-message');
    
    forgiveBtn.addEventListener('click', () => {
        createFallingAnimation('emoji', 100);
        sadMessageContainer.textContent = 'شكراً يا أجمل قلب في الدنيا ❤️';
    });
    
    sadBtn.addEventListener('click', () => {
        sadMessageContainer.textContent = sadMessages[Math.floor(Math.random() * sadMessages.length)];
    });

    const createFallingAnimation = (type, count) => {
        const emojiRain = document.getElementById('emoji-rain');
        const emojis = (type === 'emoji') ? ['❤️', '🌹', '😊', '🥳', '✨'] : ['❤️'];
        
        for (let i = 0; i < count; i++) {
            const emoji = document.createElement('div');
            emoji.classList.add('emoji');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * 100 + 'vw';
            emoji.style.animationDuration = Math.random() * 5 + 3 + 's';
            emoji.style.animationDelay = Math.random() * 2 + 's';
            emojiRain.appendChild(emoji);
            
            setTimeout(() => {
                emoji.remove();
            }, 8000);
        }
    };
    
    // --- 7. Memory Slideshow ---
    const slides = document.querySelectorAll('.slideshow-item');
    let slideIndex = 0;
    const showSlides = () => {
        slides.forEach(slide => slide.style.display = 'none');
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = 'block';
        setTimeout(showSlides, 5000); // Change image every 5 seconds
    };
    showSlides();

    // Background music and apology audio
    const bgMusic = document.getElementById('bg-music');
    const apologyAudio = document.getElementById('apology-audio');
    const audioBtn = document.getElementById('audio-btn');
    const muteBtn = document.getElementById('mute-btn');
    
    bgMusic.play().catch(e => console.log("Audio autoplay was prevented."));

    muteBtn.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            bgMusic.pause();
            muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    });

    audioBtn.addEventListener('click', () => {
        apologyAudio.play();
    });

    // --- 8. Love Meter Slider ---
    const loveMeter = document.getElementById('love-meter');
    const loveMeterMessage = document.getElementById('love-meter-message');
    
    loveMeter.addEventListener('input', () => {
        const value = loveMeter.value;
        if (value >= 0 && value <= 3) {
            loveMeterMessage.textContent = "لسه بعيد، بس ما نيأس.";
        } else if (value >= 4 && value <= 7) {
            loveMeterMessage.textContent = "قريبين من بعض.";
        } else {
            loveMeterMessage.textContent = "أنا مبسوط جداً! سامحتيني؟ ❤️";
        }
    });
});