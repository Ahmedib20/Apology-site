document.addEventListener('DOMContentLoaded', () => {
    const conditionsTextarea = document.getElementById('conditions');
    const conditionsButton = document.getElementById('conditions-button');
    const forgiveButton = document.getElementById('forgive-button');
    const notForgiveButton = document.getElementById('not-forgive-button');
    const floatingMessagesContainer = document.getElementById('floating-messages-container');
    const dialogOverlay = document.getElementById('dialog-overlay');
    const dialogText = document.getElementById('dialog-text');
    const dialogCloseButton = document.getElementById('dialog-close');

    const floatingMessages = [
        "موافق قبل تكملي يا ست الناس ❤️",
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

    // Function to show a floating message
    function showFloatingMessage(message) {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'floating-message';
        msgDiv.textContent = message;
        msgDiv.style.left = `${Math.random() * 80 + 10}%`; // Random horizontal position
        msgDiv.style.animationDuration = `${Math.random() * 3 + 4}s`; // Random animation duration
        floatingMessagesContainer.appendChild(msgDiv);
        setTimeout(() => msgDiv.remove(), 7000); // Remove message after animation
    }

    // Function to create a heart rain effect
    function startHeartRain() {
        setInterval(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.textContent = '❤️';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 2 + 3 + 's';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }, 100);
    }

    // Floating messages on textarea input
    conditionsTextarea.addEventListener('input', () => {
        if (conditionsTextarea.value.length > 5 && Math.random() > 0.8) {
            const randomMessage = floatingMessages[Math.floor(Math.random() * floatingMessages.length)];
            showFloatingMessage(randomMessage);
        }
    });

    // Conditions button click
    conditionsButton.addEventListener('click', () => {
        startHeartRain();
        dialogText.textContent = "تم قبول الشروط دون نقاش ❤️\nاعملي اسكرين ورسلي لي شروطك دي عشان ابت تترسل لي";
        dialogOverlay.classList.remove('hidden');
    });

    // Forgive button click
    forgiveButton.addEventListener('click', () => {
        startHeartRain();
        showFloatingMessage("Yaaaaayyyy 🎉");
    });

    // Not forgive button click
    notForgiveButton.addEventListener('click', () => {
        const randomMessage = notForgiveMessages[Math.floor(Math.random() * notForgiveMessages.length)];
        showFloatingMessage(randomMessage);
    });

    // Close dialog box
    dialogCloseButton.addEventListener('click', () => {
        dialogOverlay.classList.add('hidden');
    });
});