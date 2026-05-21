const zodiacSigns = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];
const zodiacEmojis = {
    'Rat': '🐀', 'Ox': '🐂', 'Tiger': '🐅', 'Rabbit': '🐇', 'Dragon': '🐉', 'Snake': '🐍',
    'Horse': '🐴', 'Goat': '🐐', 'Monkey': '🐒', 'Rooster': '🐓', 'Dog': '🐕', 'Pig': '🐷'
};

const zodiacDescriptions = {
    'Rat': 'The Rat is clever, ambitious, and resourceful. People born in the Year of the Rat are quick-witted problem solvers with strong survival instincts.',
    'Ox': 'The Ox is hardworking, reliable, and steady. People born in the Year of the Ox are known for their perseverance and strong work ethic.',
    'Tiger': 'The Tiger is brave, confident, and passionate. People born in the Year of the Tiger are natural leaders with a strong sense of justice.',
    'Rabbit': 'The Rabbit is gentle, kind, and artistic. People born in the Year of the Rabbit are peace-loving individuals with a creative spirit.',
    'Dragon': 'The Dragon is charismatic, ambitious, and confident. People born in the Year of the Dragon are natural-born leaders with big dreams.',
    'Snake': 'The Snake is wise, intuitive, and mysterious. People born in the Year of the Snake have deep insight and strong intuition.',
    'Horse': 'The Horse is energetic, adventurous, and free-spirited. People born in the Year of the Horse love freedom and new experiences.',
    'Goat': 'The Goat is gentle, creative, and compassionate. People born in the Year of the Goat are artistic souls with a kind heart.',
    'Monkey': 'The Monkey is clever, playful, and adaptable. People born in the Year of the Monkey are quick learners with a fun-loving nature.',
    'Rooster': 'The Rooster is confident, organized, and hardworking. People born in the Year of the Rooster are meticulous and ambitious.',
    'Dog': 'The Dog is loyal, honest, and protective. People born in the Year of the Dog are faithful friends and protectors.',
    'Pig': 'The Pig is kind, generous, and peaceful. People born in the Year of the Pig are warm-hearted individuals who enjoy life.'
};

const zodiacTraits = {
    'Rat': '<div class="zodiac-grid-2col"><div class="zodiac-card"><div class="zodiac-emoji">💡</div><h4>Intelligent & Resourceful</h4><p>Rats are clever, quick-witted problem solvers who always find innovative solutions. They have sharp minds and can adapt to any situation with ease.</p></div><div class="zodiac-card"><div class="zodiac-emoji">🏆</div><h4>Ambitious & Driven</h4><p>With strong motivation and determination, Rats pursue their goals relentlessly. They are highly competitive and thrive when working toward success.</p></div><div class="zodiac-card"><div class="zodiac-emoji">💰</div><h4>Thrifty & Practical</h4><p>Rats have excellent financial sense and know how to manage resources wisely. They are practical by nature and avoid unnecessary risks.</p></div><div class="zodiac-card"><div class="zodiac-emoji">❤️</div><h4>Social & Charming</h4><p>Despite their busy schedules, Rats enjoy socializing and make friends easily. They have a charming personality that draws people to them.</p></div></div>',
    'Ox': '<div class="zodiac-grid-2col"><div class="zodiac-card"><div class="zodiac-emoji">💪</div><h4>Hardworking & Diligent</h4><p>Oxen are known for their strong work ethic and perseverance. They tackle tasks with determination and never give up until the job is done.</p></div><div class="zodiac-card"><div class="zodiac-emoji">🧱</div><h4>Stable & Reliable</h4><p>Oxen provide stability in any situation. They are dependable partners who can always be counted on to keep their promises.</p></div><div class="zodiac-card"><div class="zodiac-emoji">🎯</div><h4>Determined & Focused</h4><p>Once an Ox sets a goal, nothing can stand in their way. They have incredible focus and stamina to achieve what they set out to do.</p></div><div class="zodiac-card"><div class="zodiac-emoji">🤝</div><h4>Loyal & Protective</h4><p>Oxen are fiercely loyal to family and friends. They will go to great lengths to protect those they care about.</p></div></div>',
    'Tiger': '<div class="zodiac-grid-2col"><div class="zodiac-card"><div class="zodiac-emoji">🔥</div><h4>Courageous & Bold</h4><p>Tigers are brave and confident, never afraid to take risks. They have natural leadership qualities and inspire others with their fearlessness.</p></div><div class="zodiac-card"><div class="zodiac-emoji">👑</div><h4>Natural Leader</h4><p>With charisma and confidence, Tigers naturally take charge. People look to them for guidance and direction in challenging situations.</p></div><div class="zodiac-card"><div class="zodiac-emoji">⚡</div><h4>Energetic & Passionate</h4><p>Tigers are full of energy and approach life with passion. They embrace new experiences and live life to the fullest.</p></div><div class="zodiac-card"><div class="zodiac-emoji">🎨</div><h4>Creative & Dynamic</h4><p>Beyond their boldness, Tigers have creative minds. They think outside the box and bring excitement to everything they do.</p></div></div>',
    'Rabbit': '<div class="zodiac-grid-2col"><div class="zodiac-card"><div class="zodiac-emoji">💖</div><h4>Kind & Compassionate</h4><p>Rabbits are gentle souls with big hearts. They care deeply about others and always offer a listening ear and comforting presence.</p></div><div class="zodiac-card"><div class="zodiac-emoji">🎧</div><h4>Excellent Listener</h4><p>Rabbits are wonderful listeners who provide emotional support. They have a calming presence that makes others feel heard and understood.</p></div><div class="zodiac-card"><div class="zodiac-emoji">🎨</div><h4>Artistic & Creative</h4><p>Rabbits have a natural talent for the arts. They appreciate beauty in all forms and often express themselves creatively.</p></div><div class="zodiac-card"><div class="zodiac-emoji">🏠</div><h4>Home & Family Oriented</h4><p>Rabbits love creating a warm, cozy home environment. They value family and prioritize their loved ones above all else.</p></div></div>',
    'Dragon': '<div class="zodiac-grid-2col"><div class="zodiac-card"><div class="zodiac-emoji">🌟</div><h4>Charismatic & Magnetic</h4><p>Dragons have magnetic personalities that draw people in. They exude confidence and have a natural charm that makes them stand out.</p></div><div class="zodiac-card"><div class="zodiac-emoji">🚀</div><h4>Visionary & Ambitious</h4><p>Dragons dream big and have the drive to achieve greatness. They inspire others with their bold visions and leadership.</p></div><div class="zodiac-card"><div class="zodiac-emoji">💎</div><h4>Confident & Self-Assured</h4><p>Dragons radiate confidence. They believe in themselves and their abilities, which helps them overcome any obstacle.</p></div><div class="zodiac-card"><div class="zodiac-emoji">🎯</div><h4>Determined & Focused</h4><p>Once a Dragon sets its sights on a goal, nothing can stop it. They have incredible determination and focus.</p></div></div>',
    'Snake': '<div class="zodiac-grid-2col"><div class="zodiac-card"><div class="zodiac-emoji">🧠</div><h4>Intuitive & Wise</h4><p>Snakes have strong intuition and can sense things others miss. They possess deep wisdom and insight into human nature.</p></div><div class="zodiac-card"><div class="zodiac-emoji">🔮</div><h4>Mysterious & Deep</h4><p>Snakes have an air of mystery that draws people in. They are deep thinkers who value knowledge and understanding.</p></div><div class="zodiac-card"><div class="zodiac-emoji">🐍</div><h4>Calm & Collected</h4><p>Even in stressful situations, Snakes remain calm and composed. They think carefully before acting.</p></div><div class="zodiac-card"><div class="zodiac-emoji">🎯</div><h4>Strategic & Patient</h4><p>Snakes are strategic thinkers who plan carefully. They have patience and know when to strike at the right moment.</p></div></div>',
    'Horse': '<div class="zodiac-grid-2col"><div class="zodiac-card"><div class="zodiac-emoji">🌍</div><h4>Adventurous & Free-Spirited</h4><p>Horses crave freedom and new experiences. They love exploring and hate feeling confined or restricted.</p></div><div class="zodiac-card"><div class="zodiac-emoji">⚡</div><h4>Energetic & Dynamic</h4><p>Horses are full of boundless energy and enthusiasm. They approach life with excitement and vitality.</p></div><div class="zodiac-card"><div class="zodiac-emoji">🤝</div><h4>Social & Friendly</h4><p>Horses are naturally sociable and enjoy being around people. They make friends easily and thrive in social settings.</p></div><div class="zodiac-card"><div class="zodiac-emoji">🎠</div><h4>Independent & Spirited</h4><p>Horses value their independence above all. They have strong spirits and refuse to be tied down.</p></div></div>',
    'Goat': '<div class="zodiac-grid-2col"><div class="zodiac-card"><div class="zodiac-emoji">🎨</div><h4>Creative & Artistic</h4><p>Goats have a natural talent for creative pursuits. They appreciate beauty and have excellent taste in art, music, and design.</p></div><div class="zodiac-card"><div class="zodiac-emoji">💖</div><h4>Compassionate & Kind</h4><p>Goats are gentle, kind-hearted individuals who care deeply about others. They have a nurturing nature.</p></div><div class="zodiac-card"><div class="zodiac-emoji">🌸</div><h4>Graceful & Elegant</h4><p>Goats carry themselves with grace and elegance. They have a refined sense of style and manners.</p></div><div class="zodiac-card"><div class="zodiac-emoji">🎭</div><h4>Dreamy & Imaginative</h4><p>Goats have rich inner lives and vivid imaginations. They often lose themselves in daydreams and creative pursuits.</p></div></div>',
    'Monkey': '<div class="zodiac-grid-2col"><div class="zodiac-card"><div class="zodiac-emoji">💡</div><h4>Clever & Intelligent</h4><p>Monkeys are incredibly smart and quick-witted. They learn quickly and can solve problems in innovative ways.</p></div><div class="zodiac-card"><div class="zodiac-emoji">🎉</div><h4>Playful & Fun-Loving</h4><p>Monkeys have a fun-loving nature and enjoy making others laugh. They bring joy and lightness to any situation.</p></div><div class="zodiac-card"><div class="zodiac-emoji">🔄</div><h4>Adaptable & Versatile</h4><p>Monkeys can adapt to any situation quickly. They thrive in dynamic environments and enjoy new challenges.</p></div><div class="zodiac-card"><div class="zodiac-emoji">🎲</div><h4>Curious & Inquisitive</h4><p>Monkeys have insatiable curiosity and love learning new things. They are always exploring and discovering.</p></div></div>',
    'Rooster': '<div class="zodiac-grid-2col"><div class="zodiac-card"><div class="zodiac-emoji">✨</div><h4>Confident & Proud</h4><p>Roosters are self-assured and take pride in their abilities. They carry themselves with confidence and poise.</p></div><div class="zodiac-card"><div class="zodiac-emoji">📋</div><h4>Organized & Meticulous</h4><p>Roosters are incredibly organized and pay attention to every detail. They keep everything in order and hate chaos.</p></div><div class="zodiac-card"><div class="zodiac-emoji">🎯</div><h4>Ambitious & Driven</h4><p>Roosters have strong goals and work hard to achieve them. They are competitive and strive for excellence.</p></div><div class="zodiac-card"><div class="zodiac-emoji">🐓</div><h4>Vocal & Expressive</h4><p>Roosters are not afraid to speak their minds. They are expressive communicators who share their thoughts openly.</p></div></div>',
    'Dog': '<div class="zodiac-grid-2col"><div class="zodiac-card"><div class="zodiac-emoji">❤️</div><h4>Loyal & Devoted</h4><p>Dogs are fiercely loyal to their loved ones. They will stand by their family and friends through thick and thin.</p></div><div class="zodiac-card"><div class="zodiac-emoji">⚖️</div><h4>Just & Fair</h4><p>Dogs have a strong sense of justice and fairness. They believe in doing what\'s right and protecting the vulnerable.</p></div><div class="zodiac-card"><div class="zodiac-emoji">🤝</div><h4>Trustworthy & Honest</h4><p>Dogs are honest and dependable. You can always trust them to keep their word and act with integrity.</p></div><div class="zodiac-card"><div class="zodiac-emoji">🐾</div><h4>Protective & Caring</h4><p>Dogs are protective of those they love. They care deeply and will go to great lengths to ensure the safety of their loved ones.</p></div></div>',
    'Pig': '<div class="zodiac-grid-2col"><div class="zodiac-card"><div class="zodiac-emoji">💖</div><h4>Kind & Generous</h4><p>Pigs are gentle, kind-hearted individuals who love to share. They are generous with their time, resources, and affection.</p></div><div class="zodiac-card"><div class="zodiac-emoji">😌</div><h4>Peaceful & Harmonious</h4><p>Pigs avoid conflict and seek harmony in all aspects of life. They create peaceful environments wherever they go.</p></div><div class="zodiac-card"><div class="zodiac-emoji">🤝</div><h4>Trusting & Sincere</h4><p>Pigs believe the best in people and are sincere in their relationships. They form deep, meaningful connections.</p></div><div class="zodiac-card"><div class="zodiac-emoji">🍽️</div><h4>Enjoy Life</h4><p>Pigs appreciate the good things in life. They enjoy good food, comfortable surroundings, and quality time with loved ones.</p></div></div>'
};

function calculateZodiac(matchesData) {
    const year = document.getElementById('birthYear').value;
    const resultDiv = document.getElementById('zodiacResult');
    const emojiDiv = document.getElementById('zodiacEmoji');
    const titleDiv = document.getElementById('zodiacTitle');
    const descDiv = document.getElementById('zodiacDesc');
    const traitsDiv = document.getElementById('chineseZodiacTraits');
    const compatibilitySection = document.getElementById('compatibilitySection');
    const bestMatchEmoji = document.getElementById('bestMatchEmoji');
    const worstMatchEmoji = document.getElementById('worstMatchEmoji');
    const bestMatchDesc = document.getElementById('bestMatchDesc');
    const worstMatchDesc = document.getElementById('worstMatchDesc');
    const currentZodiacIcon = document.getElementById('currentZodiacIcon');
    
    if (!year) {
        resultDiv.classList.remove('show');
        traitsDiv.innerHTML = '<p>Select your birth year above to discover your Chinese zodiac sign and its personality traits.</p><p style="margin-top: 1rem;"><span class="scroll-btn" onclick="scrollToTop()">Discover Your Chinese Zodiac</span></p>';
        compatibilitySection.classList.remove('show');
        currentZodiacIcon.textContent = '';
        return;
    }
    
    const yearNum = parseInt(year);
    const zodiacIndex = (yearNum - 1900) % 12;
    const sign = zodiacSigns[zodiacIndex];
    const matches = matchesData[sign];
    
    emojiDiv.textContent = zodiacEmojis[sign];
    titleDiv.textContent = `You are a ${sign}!`;
    descDiv.textContent = zodiacDescriptions[sign];
    traitsDiv.innerHTML = zodiacTraits[sign];
    currentZodiacIcon.textContent = zodiacEmojis[sign];
    
    bestMatchEmoji.textContent = zodiacEmojis[matches.best];
    worstMatchEmoji.textContent = zodiacEmojis[matches.worst];
    bestMatchDesc.textContent = matches.bestDesc;
    worstMatchDesc.textContent = matches.worstDesc;
    
    resultDiv.classList.add('show');
    compatibilitySection.classList.add('show');
}

function scrollToTop() {
    document.getElementById('yearSelectorSection').scrollIntoView({ behavior: 'smooth' });
}