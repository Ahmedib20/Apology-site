document.addEventListener('DOMContentLoaded', () => {

    // --- Google Sign-in & Authentication ---
    // This is a front-end placeholder. A real implementation requires a server-side component.
    const signinOverlay = document.getElementById('signin-overlay');
    const googleSigninBtn = document.getElementById('google-signin-btn');
    const mainContainer = document.querySelector('.container');
    const buttonsContainer = document.querySelector('.buttons-container-bottom');

    googleSigninBtn.addEventListener('click', () => {
        // Simulate a successful login. In a real app, this would initiate the Google Auth flow.
        // Once authenticated, the user's details would be available to the app.
        setTimeout(() => {
            signinOverlay.style.display = 'none';
            mainContainer.style.display = 'block';
            buttonsContainer.style.display = 'flex';
        }, 1000);
    });


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
    
    // Deleting the automatic floating message from typing, as per the new request.
    // The text area is now just for input.

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
    
    // Changing the forgive button's functionality
    forgiveBtn.addEventListener('click', () => {
        createFallingAnimation('emoji', 100);
        // This is the new action for the "رسلي شروطك دي انشوفها" button
        sendEmailWithConditions(conditionsTextarea.value, true); 
    });
    
    // Updating the sad button to show floating messages
    sadBtn.addEventListener('click', () => {
        createFloatingMessage(sadMessages[Math.floor(Math.random() * sadMessages.length)]);
        // Optional: Send a notification email when she is still sad
        // sendEmailWithConditions('لسه زعلانة', false);
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
    
    // --- New Email Sending Function ---
    const sendEmailWithConditions = (conditions, isForgiven) => {
        const forgivenessStatus = isForgiven ? 'سامحتني ❤️' : 'لسه زعلانة 😢';
        const emailBody = `
            Status: ${forgivenessStatus}
            Conditions from your partner:
            ${conditions}
        `;
        // This is a front-end placeholder. A real email service requires a backend.
        // window.location.href = `mailto:ahmoma212@gmail.com?subject=تحديث من موقع الاعتذار&body=${encodeURIComponent(emailBody)}`;
        alert('An email would be sent to your Gmail address with the conditions. In a real app, this would happen via a server-side script.');
        console.log('Email sent:', emailBody);
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