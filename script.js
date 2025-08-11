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
    const sendConditionsBtn = document.getElementById('send-conditions-btn');
    const sadBtn = document.getElementById('sad-btn');

    // --- Countdown Timer ---
    const timerElement = document.getElementById('timer');
    const forgiveBtn = document.getElementById('forgive-btn');
    let timeLeft = 180; // 3 minutes

    const countdown = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(countdown);
            forgiveBtn.disabled = false;
            sadBtn.disabled = false;
            sendConditionsBtn.disabled = false;
        }
        
        timeLeft--;
    }, 1000);

    // --- Forgiveness Buttons ---
    const sadMessages = [
        "يا حبيبة قلبي، سامحيني بس",
        "خلص، ما في زعل لما تعودي تضحكي",
        "أنا معاك مهما صار، بس رجاءً سامحيني",
        "قلبك كبير وأنا مستنيها تنفتح",
        "والنبي لتسامحيني، خلااااصصص تووببة ياحبووبة",
        "الله يخليكِ، ما تستاهل الزعل ده",
        "الزعل يقتلني، ابتسمي لي بس"
    ];
    
    // Function to create a floating message
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

    // New button functionality for "رسلي شروطك دي انشوفها"
    sendConditionsBtn.addEventListener('click', () => {
        sendEmailWithConditions(conditionsTextarea.value);
        alert('سيتم إرسال شروطك إلى البريد الإلكتروني. يرجى الموافقة على إرسال الرسالة.');
    });

    // New button functionality for "تسامحيني مسامحة مبدئية؟"
    forgiveBtn.addEventListener('click', () => {
        createFallingAnimation('emoji', 100);
        sendEmailWithInitialForgiveness();
    });
    
    // Function for "لسه زعلانة" button
    sadBtn.addEventListener('click', () => {
        createFloatingMessage(sadMessages[Math.floor(Math.random() * sadMessages.length)]);
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
    
    // --- New Email Sending Functions (using mailto) ---
    const sendEmailWithConditions = (conditions) => {
        const emailBody = `
            شروط مسامحتي:
            ${conditions}
        `;
        window.location.href = `mailto:ahmoma212@gmail.com?subject=شروط المسامحة&body=${encodeURIComponent(emailBody)}`;
    };

    const sendEmailWithInitialForgiveness = () => {
        const emailBody = 'رسالة من منوية: مسامحة مبدئية.';
        window.location.href = `mailto:ahmoma212@gmail.com?subject=هات الخمر يا غلام، منوية سامحتني&body=${encodeURIComponent(emailBody)}`;
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