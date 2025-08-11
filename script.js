document.addEventListener('DOMContentLoaded', () => {
    const conditionsTextarea = document.getElementById('conditions-textarea');
    const submitConditionsBtn = document.getElementById('submit-conditions-btn');
    const forgiveBtn = document.getElementById('forgive-btn');
    const notForgiveBtn = document.getElementById('not-forgive-btn');
    const dialogOverlay = document.getElementById('dialog-overlay');
    const dialogMessage = document.getElementById('dialog-message');
    const floatingMessagesContainer = document.getElementById('floating-messages-container');
    let floatingMessageInterval;
    let heartRainInterval;

    const apologyMessages = [
        "شروطك على راسي يا حياتي",
        "أنا راضي قبل ما أسمع",
        "تسلمي لي يا ملاكي"
    ];

    const notForgiveMessages = [
        "النبي سامحيني، توبة يا حبوبة ❤️",
        "أنا غلطان، والله آخر مرة",
        "من غيرك حياتي ما ليها طعم",
        "سامحيني وابتدي صفحة جديدة",
        "بحبك مهما حصل"
    ];

    function createFloatingMessage(message) {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'floating-message';
        msgDiv.textContent = message;
        msgDiv.style.left = `${Math.random() * 80 + 10}vw`; // Random horizontal position
        floatingMessagesContainer.appendChild(msgDiv);

        setTimeout(() => {
            msgDiv.remove();
        }, 5000);
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    function startHeartRain() {
        heartRainInterval = setInterval(createHeart, 200);
    }

    function stopHeartRain() {
        clearInterval(heartRainInterval);
    }

    conditionsTextarea.addEventListener('focus', () => {
        if (!floatingMessageInterval) {
            createFloatingMessage("موافق قبل تكملي يا ست الناس ❤️");
            floatingMessageInterval = setInterval(() => {
                const randomMessage = apologyMessages[Math.floor(Math.random() * apologyMessages.length)];
                createFloatingMessage(randomMessage);
            }, 3000);
        }
    });

    conditionsTextarea.addEventListener('blur', () => {
        clearInterval(floatingMessageInterval);
        floatingMessageInterval = null;
    });

    submitConditionsBtn.addEventListener('click', () => {
        startHeartRain();
        clearInterval(floatingMessageInterval);
        dialogMessage.innerHTML = "تم قبول الشروط دون نقاش ❤️<br>اعملي اسكرين ورسلي لي شروطك دي عشان ابت تترسل لي";
        dialogOverlay.style.display = 'flex';
        
        setTimeout(() => {
            stopHeartRain();
        }, 5000);
    });

    dialogOverlay.addEventListener('click', (e) => {
        if (e.target === dialogOverlay) {
            dialogOverlay.style.display = 'none';
        }
    });

    forgiveBtn.addEventListener('click', () => {
        startHeartRain();
        createFloatingMessage("Yaaaaayyyy 🎉");
        
        setTimeout(() => {
            stopHeartRain();
        }, 5000);
    });

    notForgiveBtn.addEventListener('click', () => {
        let messageIndex = 0;
        const sendMessages = () => {
            if (messageIndex < notForgiveMessages.length) {
                createFloatingMessage(notForgiveMessages[messageIndex]);
                messageIndex++;
                setTimeout(sendMessages, 2000);
            }
        };
        sendMessages();
    });
});