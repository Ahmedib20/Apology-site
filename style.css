:root {
    --primary-font: 'Cairo', sans-serif;
    --secondary-font: 'Amiri', serif;
    --pink-light: #FFB6C1;
    --peach-light: #FFDAB9;
    --cream-light: #FFF8DC;
    --accent-color: #E91E63;
    --text-color: #333;
}

body {
    margin: 0;
    font-family: var(--primary-font);
    text-align: center;
    color: var(--text-color);
    overflow-x: hidden;
    position: relative;
    min-height: 100vh;
}

/* Google Sign-in Overlay */
#signin-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

#google-signin-btn {
    padding: 15px 30px;
    font-size: 1.5em;
    background-color: #fff;
    color: #4285F4;
    border: 1px solid #4285F4;
    border-radius: 5px;
    cursor: pointer;
    font-family: var(--primary-font);
}

/* Background gradient and animations */
.background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--pink-light), var(--peach-light), var(--cream-light));
    z-index: -1;
    overflow: hidden;
}

.heart {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    transform: rotate(-45deg);
    pointer-events: none;
    animation: float-heart linear infinite;
    z-index: 1;
}

.heart::before, .heart::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: inherit;
}

.heart::before {
    top: -10px;
    left: 0;
}

.heart::after {
    top: 0;
    left: 10px;
}

@keyframes float-heart {
    0% { transform: translateY(0) rotate(-45deg); opacity: 1; }
    100% { transform: translateY(-1000px) rotate(-45deg); opacity: 0; }
}

.container {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    position: relative;
    z-index: 2;
}

/* Sticky Notes Section */
.sticky-notes-container {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin: 40px 0;
    flex-wrap: wrap;
}

.sticky-note {
    width: 200px;
    background-color: var(--cream-light);
    padding: 15px;
    border-radius: 5px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    transform: rotate(calc(var(--i) * 3deg - 3deg));
    transition: transform 0.3s ease;
}

.sticky-note img {
    width: 100%;
    height: auto;
    border-radius: 3px;
}

.sticky-note p {
    font-family: var(--secondary-font);
    font-size: 1.2em;
    margin: 10px 0 0;
    font-weight: bold;
}

.memory-images-container {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
    margin-top: 10px;
}

.memory-images-container img {
    width: 45%;
    border-radius: 5px;
}

/* Main Apology Text */
.apology-text {
    margin: 40px 0;
}

.apology-text h1 {
    font-size: 3em;
    color: var(--accent-color);
    font-family: var(--secondary-font);
}

/* Countdown Timer */
.countdown-container {
    margin: 20px 0;
    font-size: 1.2em;
    color: var(--text-color);
}

#timer {
    font-weight: bold;
    color: var(--accent-color);
}

/* Conditions Section */
.conditions-container {
    margin: 30px 0;
    position: relative;
}

.conditions-container label {
    display: block;
    font-size: 1.3em;
    margin-bottom: 10px;
}

#conditions-textarea {
    width: 100%;
    max-width: 600px;
    height: 100px;
    padding: 15px;
    font-size: 1em;
    border: 2px solid var(--accent-color);
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.7);
    resize: vertical;
    font-family: var(--primary-font);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s;
}

#conditions-textarea:focus {
    outline: none;
    box-shadow: 0 0 15px var(--accent-color);
}

/* Floating Acceptance Messages */
.floating-message {
    position: absolute;
    padding: 10px 15px;
    background-color: var(--accent-color);
    color: white;
    border-radius: 20px;
    white-space: nowrap;
    opacity: 0;
    animation: float-up 2s forwards;
    pointer-events: none;
}

@keyframes float-up {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-100px); opacity: 0; }
}

#acceptance-message {
    font-size: 1.5em;
    font-weight: bold;
    margin-top: 20px;
    color: var(--accent-color);
    animation: pulse 1s infinite alternate;
}

@keyframes pulse {
    from { transform: scale(1); }
    to { transform: scale(1.05); }
}

/* Forgiveness Buttons - Bottom */
.buttons-container-bottom {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 600px;
    display: flex;
    justify-content: center;
    gap: 15px;
    padding: 0 20px;
}

.forgive-btn, .sad-btn {
    padding: 15px 30px;
    font-size: 1.5em;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    transition: transform 0.2s, background-color 0.2s;
    font-family: var(--primary-font);
    color: white;
    width: 100%;
    max-width: 300px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.forgive-btn {
    background-color: #4CAF50;
}

.forgive-btn:hover:not(:disabled) {
    background-color: #45a049;
    transform: translateY(-3px);
}

.sad-btn {
    background-color: #f44336;
}

.sad-btn:hover:not(:disabled) {
    background-color: #da3329;
    transform: translateY(-3px);
}

button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
}

/* Emoji Rain Animation */
#emoji-rain {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 100;
}

.emoji {
    position: absolute;
    font-size: 2em;
    animation: emoji-fall linear;
}

@keyframes emoji-fall {
    0% { transform: translateY(-10vh); opacity: 1; }
    100% { transform: translateY(110vh); opacity: 0; }
}

/* Love Meter */
.love-meter-container {
    margin: 40px 0 100px; /* Add margin to not overlap with buttons */
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 10px;
}

.love-meter-container label {
    font-size: 1.3em;
    margin-bottom: 10px;
    display: block;
}

#love-meter {
    width: 80%;
    -webkit-appearance: none;
    appearance: none;
    height: 15px;
    background: #ddd;
    outline: none;
    opacity: 0.7;
    transition: opacity 0.2s;
    border-radius: 5px;
}

#love-meter:hover {
    opacity: 1;
}

#love-meter::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: var(--accent-color);
    cursor: pointer;
    border-radius: 50%;
}

#love-meter::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: var(--accent-color);
    cursor: pointer;
    border-radius: 50%;
}

#love-meter-message {
    margin-top: 10px;
    font-size: 1.2em;
    font-weight: bold;
    color: var(--text-color);
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
    .sticky-notes-container {
        flex-direction: column;
        align-items: center;
    }
    
    .apology-text h1 {
        font-size: 2em;
    }
    
    .countdown-container p {
        font-size: 1em;
    }
    
    .buttons-container-bottom {
        flex-direction: column;
        bottom: 10px;
        gap: 10px;
    }
    
    .forgive-btn, .sad-btn {
        font-size: 1.2em;
        padding: 12px 25px;
    }
}