const compatibilityMatches = {
    'Rat': { best: 'Snake', worst: 'Ox', bestDesc: 'Scorpio-Rat and Snake create an intense, passionate partnership. Both are deep and mysterious.', worstDesc: 'Scorpio-Rat and Ox may struggle. Rat is intense while Ox is steady, causing friction.' },
    'Ox': { best: 'Tiger', worst: 'Horse', bestDesc: 'Scorpio-Ox and Tiger make a powerful, determined pair. Both are strong-willed and loyal.', worstDesc: 'Scorpio-Ox and Horse may clash. Ox values commitment while Horse craves freedom.' },
    'Tiger': { best: 'Horse', worst: 'Monkey', bestDesc: 'Scorpio-Tiger and Horse create a passionate, adventurous partnership. Both are intense and love excitement.', worstDesc: 'Scorpio-Tiger and Monkey may compete. Both strong personalities need to compromise.' },
    'Rabbit': { best: 'Goat', worst: 'Rooster', bestDesc: 'Scorpio-Rabbit and Goat create a deep, emotional bond. Goat\'s gentleness balances Scorpio\'s intensity.', worstDesc: 'Scorpio-Rabbit and Rooster may conflict. Rooster\'s directness can hurt Rabbit.' },
    'Dragon': { best: 'Monkey', worst: 'Dog', bestDesc: 'Scorpio-Dragon and Monkey form a dynamic, intense pair. Both are powerful and charismatic.', worstDesc: 'Scorpio-Dragon and Dog may struggle. Dog needs loyalty while Dragon seeks admiration.' },
    'Snake': { best: 'Rooster', worst: 'Pig', bestDesc: 'Scorpio-Snake and Rooster create a passionate, mysterious partnership. Both are intense and perceptive.', worstDesc: 'Scorpio-Snake and Pig may clash. Snake is intense while Pig is laid-back.' },
    'Horse': { best: 'Tiger', worst: 'Ox', bestDesc: 'Scorpio-Horse and Tiger make an energetic, passionate pair. Both love adventure and excitement.', worstDesc: 'Scorpio-Horse and Ox may struggle. Horse needs freedom while Ox prefers routine.' },
    'Goat': { best: 'Rabbit', worst: 'Dragon', bestDesc: 'Scorpio-Goat and Rabbit create a gentle, loving relationship. Both value emotional depth.', worstDesc: 'Scorpio-Goat and Dragon may clash. Dragon\'s ambition can overwhelm Goat.' },
    'Monkey': { best: 'Dragon', worst: 'Tiger', bestDesc: 'Scorpio-Monkey and Dragon form a clever, intense pair. Both are intelligent and passionate.', worstDesc: 'Scorpio-Monkey and Tiger may compete. Both love power and control.' },
    'Rooster': { best: 'Snake', worst: 'Rabbit', bestDesc: 'Scorpio-Rooster and Snake create a powerful, ambitious partnership. Both are determined and perceptive.', worstDesc: 'Scorpio-Rooster and Rabbit may struggle. Rooster\'s criticism can hurt Rabbit\'s feelings.' },
    'Dog': { best: 'Tiger', worst: 'Dragon', bestDesc: 'Scorpio-Dog and Tiger create a fiercely loyal bond. They protect each other unconditionally.', worstDesc: 'Scorpio-Dog and Dragon may conflict. Dog needs commitment while Dragon seeks admiration.' },
    'Pig': { best: 'Rabbit', worst: 'Snake', bestDesc: 'Scorpio-Pig and Rabbit create a warm, loving relationship. Both are kind and emotional.', worstDesc: 'Scorpio-Pig and Snake may clash. Pig is straightforward while Snake is complex.' }
};

function onYearChange() {
    calculateZodiac(compatibilityMatches);
}

window.addEventListener('DOMContentLoaded', function() {
    calculateZodiac(compatibilityMatches);
});