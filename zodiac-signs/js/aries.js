const compatibilityMatches = {
    'Rat': { best: 'Dragon', worst: 'Ox', bestDesc: 'Aries-Rat and Dragon create an exciting, dynamic partnership. Both are ambitious and driven, making this a powerful combination for achieving great things.', worstDesc: 'Aries-Rat and Ox may struggle with different paces. Rat\'s quick decisions clash with Ox\'s deliberate nature.' },
    'Ox': { best: 'Tiger', worst: 'Horse', bestDesc: 'Aries-Ox and Tiger balance each other beautifully. Ox provides stability while Tiger adds excitement to the relationship.', worstDesc: 'Aries-Ox and Horse may clash. Ox values routine while Horse craves freedom and change.' },
    'Tiger': { best: 'Horse', worst: 'Monkey', bestDesc: 'Aries-Tiger and Horse make an adventurous pair. Both love excitement and freedom, creating an energetic and passionate relationship.', worstDesc: 'Aries-Tiger and Monkey may compete for dominance. Both strong personalities need to learn compromise.' },
    'Rabbit': { best: 'Goat', worst: 'Rooster', bestDesc: 'Aries-Rabbit and Goat create a gentle, loving partnership. Goat\'s calm nature balances Aries\'s fiery spirit beautifully.', worstDesc: 'Aries-Rabbit and Rooster may conflict. Rooster\'s directness can hurt Rabbit\'s sensitive nature.' },
    'Dragon': { best: 'Monkey', worst: 'Dog', bestDesc: 'Aries-Dragon and Monkey form a dynamic duo. Monkey\'s cleverness complements Dragon\'s ambition, creating exciting possibilities.', worstDesc: 'Aries-Dragon and Dog may struggle. Dog\'s need for loyalty clashes with Dragon\'s independent streak.' },
    'Snake': { best: 'Rooster', worst: 'Pig', bestDesc: 'Aries-Snake and Rooster share determination and focus. They support each other\'s goals and make a powerful team.', worstDesc: 'Aries-Snake and Pig have different priorities. Snake values intensity while Pig seeks peace and comfort.' },
    'Horse': { best: 'Tiger', worst: 'Ox', bestDesc: 'Aries-Horse and Tiger are a perfect match. Both are energetic and adventurous, creating a thrilling partnership.', worstDesc: 'Aries-Horse and Ox may clash. Horse needs freedom while Ox seeks stability and routine.' },
    'Goat': { best: 'Rabbit', worst: 'Dragon', bestDesc: 'Aries-Goat and Rabbit create a harmonious relationship. Rabbit\'s gentle nature calms Goat\'s artistic soul.', worstDesc: 'Aries-Goat and Dragon may struggle. Dragon\'s ambition can overwhelm Goat\'s gentle nature.' },
    'Monkey': { best: 'Dragon', worst: 'Tiger', bestDesc: 'Aries-Monkey and Dragon form an intellectually stimulating pair. They challenge each other and bring out the best in one another.', worstDesc: 'Aries-Monkey and Tiger may compete. Both strong personalities need to learn to share the spotlight.' },
    'Rooster': { best: 'Snake', worst: 'Rabbit', bestDesc: 'Aries-Rooster and Snake make a strategic partnership. Both are intelligent and driven, working well together toward common goals.', worstDesc: 'Aries-Rooster and Rabbit may struggle. Rooster\'s critical nature can hurt Rabbit\'s feelings.' },
    'Dog': { best: 'Tiger', worst: 'Dragon', bestDesc: 'Aries-Dog and Tiger create a loyal and protective bond. They support each other unconditionally through all challenges.', worstDesc: 'Aries-Dog and Dragon may conflict. Dog\'s need for commitment clashes with Dragon\'s need for freedom.' },
    'Pig': { best: 'Rabbit', worst: 'Snake', bestDesc: 'Aries-Pig and Rabbit create a warm, loving relationship. Both value kindness and create a peaceful home together.', worstDesc: 'Aries-Pig and Snake may struggle. Snake\'s complexity can confuse straightforward Pig.' }
};

function onYearChange() {
    calculateZodiac(compatibilityMatches);
}

window.addEventListener('DOMContentLoaded', function() {
    calculateZodiac(compatibilityMatches);
});