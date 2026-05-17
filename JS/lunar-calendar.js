function removeZodiacBadgeEmojis() {
    const zodiacBadges = document.querySelectorAll('.zodiac-badge');
    
    const emojiMap = {
        '🐀': '', '🐂': '', '🐅': '', '🐇': '', '🐉': '',
        '🐍': '', '🐎': '', '🐐': '', '🐒': '', '🐓': '',
        '🐕': '', '🐖': ''
    };
    
    zodiacBadges.forEach(badge => {
        let text = badge.textContent.trim();
        for (const emoji in emojiMap) {
            text = text.replace(emoji, '').trim();
        }
        badge.textContent = text;
    });
}

function fixContentZodiacEmojis() {
    const zodiacEmojis = document.querySelectorAll('.zodiac-emoji');
    
    const emojiToImg = {
        '🐀': '../Images/rat.png',
        '🐂': '../Images/ox.png',
        '🐅': '../Images/tiger.png',
        '🐇': '../Images/rabbit.png',
        '🐉': '../Images/dragon.png',
        '🐍': '../Images/snake.png',
        '🐎': '../Images/horse.png',
        '🐐': '../Images/goat.png',
        '🐒': '../Images/monkey.png',
        '🐓': '../Images/rooster.png',
        '🐕': '../Images/dog.png',
        '🐖': '../Images/pig.png'
    };
    
    zodiacEmojis.forEach(span => {
        const text = span.textContent.trim();
        if (emojiToImg[text] && !span.querySelector('img')) {
            const img = document.createElement('img');
            img.src = emojiToImg[text];
            img.alt = text;
            img.className = 'zodiac-emoji';
            span.textContent = '';
            span.appendChild(img);
        }
    });
}

function addZodiacImagesToCalendar() {
    const zodiacBadges = document.querySelectorAll('.zodiac-badge');
    
    const zodiacImages = {
        'Rat': '../Images/rat.png',
        'Ox': '../Images/ox.png',
        'Tiger': '../Images/tiger.png',
        'Rabbit': '../Images/rabbit.png',
        'Dragon': '../Images/dragon.png',
        'Snake': '../Images/snake.png',
        'Horse': '../Images/horse.png',
        'Goat': '../Images/goat.png',
        'Monkey': '../Images/monkey.png',
        'Rooster': '../Images/rooster.png',
        'Dog': '../Images/dog.png',
        'Pig': '../Images/pig.png'
    };
    
    zodiacBadges.forEach(badge => {
        const zodiacName = badge.textContent.trim();
        if (zodiacImages[zodiacName]) {
            const dayCell = badge.closest('.day-cell');
            if (dayCell && !dayCell.querySelector('.zodiac-calendar-img')) {
                const img = document.createElement('img');
                img.src = zodiacImages[zodiacName];
                img.alt = zodiacName;
                img.className = 'zodiac-calendar-img';
                img.style.cssText = 'width: 20px; height: 20px; margin-right: 4px; vertical-align: middle;';
                
                badge.parentNode.insertBefore(img, badge);
            }
        }
    });
}

function init() {
    removeZodiacBadgeEmojis();
    fixContentZodiacEmojis();
    addZodiacImagesToCalendar();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}