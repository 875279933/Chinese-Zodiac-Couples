const zodiacData = {
    aries: {
        name: 'Aries', element: 'fire', modality: 'cardinal',
        hobbies: ['Sports', 'Adventure Travel', 'Competitive Games', 'Fitness', 'Outdoor Activities'],
        values: ['Independence', 'Honesty', 'Courage', 'Leadership', 'Passion'],
        traits: { spirit: 85, values: 70, life: 80, growth: 90 }
    },
    taurus: {
        name: 'Taurus', element: 'earth', modality: 'fixed',
        hobbies: ['Cooking', 'Gardening', 'Art Collecting', 'Music', 'Nature Walks'],
        values: ['Loyalty', 'Stability', 'Comfort', 'Security', 'Sensuality'],
        traits: { spirit: 60, values: 90, life: 85, growth: 65 }
    },
    gemini: {
        name: 'Gemini', element: 'air', modality: 'mutable',
        hobbies: ['Reading', 'Socializing', 'Writing', 'Travel', 'Learning New Skills'],
        values: ['Communication', 'Freedom', 'Curiosity', 'Adaptability', 'Intellect'],
        traits: { spirit: 90, values: 75, life: 70, growth: 95 }
    },
    cancer: {
        name: 'Cancer', element: 'water', modality: 'cardinal',
        hobbies: ['Home Cooking', 'Photography', 'Memory Keeping', 'Beach Walks', 'Family Time'],
        values: ['Family', 'Emotional Security', 'Nurturing', 'Tradition', 'Intimacy'],
        traits: { spirit: 75, values: 95, life: 80, growth: 70 }
    },
    leo: {
        name: 'Leo', element: 'fire', modality: 'fixed',
        hobbies: ['Theater', 'Fashion', 'Social Events', 'Creative Arts', 'Leadership Activities'],
        values: ['Recognition', 'Generosity', 'Loyalty', 'Creativity', 'Self-Expression'],
        traits: { spirit: 90, values: 80, life: 85, growth: 85 }
    },
    virgo: {
        name: 'Virgo', element: 'earth', modality: 'mutable',
        hobbies: ['Health & Wellness', 'Organizing', 'Crafting', 'Research', 'Problem Solving'],
        values: ['Service', 'Perfection', 'Health', 'Practicality', 'Reliability'],
        traits: { spirit: 65, values: 90, life: 90, growth: 80 }
    },
    libra: {
        name: 'Libra', element: 'air', modality: 'cardinal',
        hobbies: ['Art Galleries', 'Dancing', 'Dining Out', 'Fashion', 'Social Gatherings'],
        values: ['Harmony', 'Justice', 'Beauty', 'Partnership', 'Diplomacy'],
        traits: { spirit: 85, values: 85, life: 75, growth: 80 }
    },
    scorpio: {
        name: 'Scorpio', element: 'water', modality: 'fixed',
        hobbies: ['Mystery Solving', 'Deep Conversations', 'Meditation', 'Research', 'Intimacy'],
        values: ['Trust', 'Depth', 'Transformation', 'Loyalty', 'Authenticity'],
        traits: { spirit: 95, values: 90, life: 70, growth: 95 }
    },
    sagittarius: {
        name: 'Sagittarius', element: 'fire', modality: 'mutable',
        hobbies: ['Travel', 'Philosophy', 'Outdoor Sports', 'Teaching', 'Exploration'],
        values: ['Freedom', 'Truth', 'Adventure', 'Optimism', 'Wisdom'],
        traits: { spirit: 90, values: 75, life: 80, growth: 95 }
    },
    capricorn: {
        name: 'Capricorn', element: 'earth', modality: 'cardinal',
        hobbies: ['Career Building', 'Investing', 'History', 'Classical Music', 'Strategic Planning'],
        values: ['Achievement', 'Responsibility', 'Tradition', 'Discipline', 'Ambition'],
        traits: { spirit: 55, values: 85, life: 90, growth: 85 }
    },
    aquarius: {
        name: 'Aquarius', element: 'air', modality: 'fixed',
        hobbies: ['Technology', 'Activism', 'Innovation', 'Community Building', 'Science'],
        values: ['Innovation', 'Humanity', 'Freedom', 'Originality', 'Progress'],
        traits: { spirit: 90, values: 80, life: 65, growth: 95 }
    },
    pisces: {
        name: 'Pisces', element: 'water', modality: 'mutable',
        hobbies: ['Music', 'Spirituality', 'Art', 'Helping Others', 'Dream Interpretation'],
        values: ['Compassion', 'Creativity', 'Spirituality', 'Empathy', 'Imagination'],
        traits: { spirit: 95, values: 85, life: 60, growth: 85 }
    }
};

const compatibilityMatrix = {
    'fire-fire': { base: 85, desc: 'Passionate and energetic match with shared enthusiasm.' },
    'fire-earth': { base: 55, desc: 'Different energies - fire brings excitement, earth brings stability.' },
    'fire-air': { base: 90, desc: 'Dynamic and stimulating - air fuels fire beautifully.' },
    'fire-water': { base: 60, desc: 'Intense but challenging - water can extinguish or temper fire.' },
    'earth-earth': { base: 85, desc: 'Solid and reliable - shared practicality creates lasting bonds.' },
    'earth-air': { base: 55, desc: 'Different approaches - earth grounds air, air inspires earth.' },
    'earth-water': { base: 90, desc: 'Nurturing and supportive - water nourishes earth perfectly.' },
    'air-air': { base: 85, desc: 'Intellectually stimulating - shared curiosity and communication.' },
    'air-water': { base: 60, desc: 'Thought meets emotion - can be complementary or conflicting.' },
    'water-water': { base: 85, desc: 'Deeply intuitive - shared emotional depth and understanding.' }
};

let selectedA = null;
let selectedB = null;

function setupSelection(containerId, isA) {
    const container = document.getElementById(containerId);
    container.querySelectorAll('.zodiac-sign').forEach(sign => {
        sign.addEventListener('click', () => {
            container.querySelectorAll('.zodiac-sign').forEach(s => s.classList.remove('selected'));
            sign.classList.add('selected');
            if (isA) selectedA = sign.dataset.sign;
            else selectedB = sign.dataset.sign;
            checkReady();
        });
        sign.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                sign.click();
            }
        });
    });
}

function checkReady() {
    const btn = document.getElementById('checkBtn');
    btn.disabled = !(selectedA && selectedB);
}

setupSelection('signA', true);
setupSelection('signB', false);

document.getElementById('checkBtn').addEventListener('click', calculateCompatibility);

function calculateCompatibility() {
    const a = zodiacData[selectedA];
    const b = zodiacData[selectedB];

    const key = `${a.element}-${b.element}`;
    const reverseKey = `${b.element}-${a.element}`;
    const compat = compatibilityMatrix[key] || compatibilityMatrix[reverseKey];

    const spiritScore = Math.round((a.traits.spirit + b.traits.spirit) / 2 * (compat.base / 100));
    const valuesScore = Math.round((a.traits.values + b.traits.values) / 2 * (compat.base / 100));
    const lifeScore = Math.round((a.traits.life + b.traits.life) / 2 * (compat.base / 100));
    const growthScore = Math.round((a.traits.growth + b.traits.growth) / 2 * (compat.base / 100));

    const totalScore = Math.round(
        spiritScore * 0.35 +
        valuesScore * 0.35 +
        lifeScore * 0.20 +
        growthScore * 0.10
    );

    const sharedHobbies = a.hobbies.filter(h => b.hobbies.includes(h));
    const sharedValues = a.values.filter(v => b.values.includes(v));

    const overlaps = [];
    if (a.element === b.element) {
        overlaps.push({
            icon: '🔥',
            text: `<span class="overlap-highlight">Same Element (${a.element})</span>: You both share the same elemental energy, creating natural understanding and harmony.`
        });
    }
    if (a.modality === b.modality) {
        overlaps.push({
            icon: '⚡',
            text: `<span class="overlap-highlight">Same Modality (${a.modality})</span>: You approach life with similar rhythms and patterns.`
        });
    }
    if (sharedHobbies.length > 0) {
        overlaps.push({
            icon: '🎯',
            text: `<span class="overlap-highlight">Shared Interests</span>: You both enjoy ${sharedHobbies.slice(0, 3).join(', ')}.`
        });
    }
    if (sharedValues.length > 0) {
        overlaps.push({
            icon: '💎',
            text: `<span class="overlap-highlight">Core Values Align</span>: You both prioritize ${sharedValues.slice(0, 3).join(', ')}.`
        });
    }

    displayResults({
        totalScore,
        spiritScore,
        valuesScore,
        lifeScore,
        growthScore,
        sharedHobbies,
        sharedValues,
        overlaps,
        compatDesc: compat.desc,
        aName: a.name,
        bName: b.name
    });
}

function displayResults(data) {
    const resultSection = document.getElementById('resultSection');
    resultSection.classList.add('show');

    const circumference = 2 * Math.PI * 72;
    const offset = circumference - (data.totalScore / 100) * circumference;
    const circle = document.getElementById('scoreCircle');
    circle.style.strokeDashoffset = circumference;

    setTimeout(() => {
        circle.style.strokeDashoffset = offset;
    }, 100);

    animateNumber('scoreValue', data.totalScore);

    const badge = document.getElementById('scoreBadge');
    if (data.totalScore >= 80) {
        badge.className = 'score-badge excellent';
        badge.textContent = 'Excellent Match';
    } else if (data.totalScore >= 60) {
        badge.className = 'score-badge good';
        badge.textContent = 'Good Match';
    } else {
        badge.className = 'score-badge challenging';
        badge.textContent = 'Challenging Match';
    }

    setTimeout(() => {
        document.getElementById('spiritBar').style.width = data.spiritScore + '%';
        document.getElementById('valuesBar').style.width = data.valuesScore + '%';
        document.getElementById('lifeBar').style.width = data.lifeScore + '%';
        document.getElementById('growthBar').style.width = data.growthScore + '%';
    }, 300);

    document.getElementById('spiritScore').textContent = data.spiritScore + '/100';
    document.getElementById('valuesScore').textContent = data.valuesScore + '/100';
    document.getElementById('lifeScore').textContent = data.lifeScore + '/100';
    document.getElementById('growthScore').textContent = data.growthScore + '/100';

    const hobbyTags = document.getElementById('hobbyTags');
    hobbyTags.innerHTML = data.sharedHobbies.length > 0
        ? data.sharedHobbies.map(h => `<span class="tag hobby">${h}</span>`).join('')
        : '<span class="tag">No direct hobby overlaps - explore new activities together!</span>';

    const valueTags = document.getElementById('valueTags');
    valueTags.innerHTML = data.sharedValues.length > 0
        ? data.sharedValues.map(v => `<span class="tag value">${v}</span>`).join('')
        : '<span class="tag">Different value priorities - learn from each other!</span>';

    const overlapList = document.getElementById('overlapList');
    overlapList.innerHTML = data.overlaps.map(o => `
        <div class="overlap-item">
            <span class="overlap-icon">${o.icon}</span>
            <span class="overlap-text">${o.text}</span>
        </div>
    `).join('');

    document.getElementById('summaryText').innerHTML =
        `<strong>${data.aName} & ${data.bName}</strong>: ${data.compatDesc} ` +
        `Your overall compatibility score is <strong>${data.totalScore}%</strong>. ` +
        `Spiritual connection stands at ${data.spiritScore}%, shared values at ${data.valuesScore}%, ` +
        `lifestyle compatibility at ${data.lifeScore}%, and growth potential at ${data.growthScore}%. ` +
        data.overlaps.map(o => o.text.replace(/<[^>]+>/g, '')).join(' ') +
        ' Focus on your shared strengths while respecting your differences.';

    resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function animateNumber(elementId, target) {
    const element = document.getElementById(elementId);
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.round(current);
    }, 30);
}
