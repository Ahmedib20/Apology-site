document.addEventListener('DOMContentLoaded', () => {

    // --- Background Floating Hearts ---
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

    // --- Sticky Notes Rotation ---
    document.querySelectorAll('.sticky-note').forEach((note, index) => {
        note.style.setProperty('--i', index);
        note.style.transform = `rotate(${Math.random() * 6 - 3}deg)`;
    });

    // --- Forgiveness Conditions Input ---
    const conditionsTextarea = document.getElementById('conditions-textarea');
    const acceptanceMessageContainer = document.getElementById('acceptance-message');
    const acceptancePhrases = ["موافق ❤️", "تمام 🌹", "على عيني 😍", "شرطك أوامر 💖", "خلص اعتبره تم ✨"];
    
    // --- Countdown Timer ---
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

    // --- Forgiveness Buttons ---
    const sadMessages = [
        "يا حبيبة قلبي، سامحيني بس",
        "خلص، ما في زعل لما تعودي تضحكي",
        "أنا معاك مهما صار، بس رجاءً سامحيني",
        "قلبك كبير وأنا مستنيها تنفتح",
        "والنبي لتسامحيني، خلااااصصص تووببة ياحبووبة"
    ];
    
    forgiveBtn.addEventListener('click', () => {
        createFallingAnimation('emoji', 100);
        // This function now uses the mailto link to send the email
        sendEmailWithConditions(conditionsTextarea.value, true); 
    });
    
    sadBtn.addEventListener('click', () => {
        createFloatingMessage(sadMessages[Math.floor(Math.random() * sadMessages.length)]);
    });

    const createFloatingMessage = (text) => {
        const message = document.createElement('div');
        message.classList.add('floating-message');
        message.textContent = text;
        
        // Randomize position near the button
        const buttonRect = sadBtn.getBoundingClientRect();
        const topPos = buttonRect.top + window.scrollY - Math.random() * 50 - 50;
        const leftPos = buttonRect.left + window.scrollX + Math.random() * buttonRect.width - 50;

        message.style.top = `${topPos}px`;
        message.style.left = `${leftPos}px`;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 2000);
    };

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
    
    // --- New Email Sending Function (using mailto) ---
    const sendEmailWithConditions = (conditions, isForgiven) => {
        const forgivenessStatus = isForgiven ? 'سامحتني ❤️' : 'لسه زعلانة 😢';
        const emailBody = `
            Status: ${forgivenessStatus}
            Conditions from your partner:
            ${conditions}
        `;
        window.location.href = `mailto:ahmoma212@gmail.com?subject=تحديث من موقع الاعتذار&body=${encodeURIComponent(emailBody)}`;
    };

    // --- Love Meter Slider ---
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