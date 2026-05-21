const compatibilityMatches = {
    'Rat': { best: 'Ox', worst: 'Horse', bestDesc: 'Pisces-Rat and Ox create a compassionate, caring partnership. Both are sensitive and supportive.', worstDesc: 'Pisces-Rat and Horse may struggle. Rat is intuitive while Horse craves action.' },
    'Ox': { best: 'Snake', worst: 'Goat', bestDesc: 'Pisces-Ox and Snake make a deeply emotional pair. Both are intuitive and supportive.', worstDesc: 'Pisces-Ox and Goat may clash. Ox is grounded while Goat is dreamy.' },
    'Tiger': { best: 'Dog', worst: 'Monkey', bestDesc: 'Pisces-Tiger and Dog create a loving, protective bond. Dog\'s loyalty complements Tiger\'s strength.', worstDesc: 'Pisces-Tiger and Monkey may conflict. Tiger values commitment while Monkey loves change.' },
    'Rabbit': { best: 'Pig', worst: 'Dragon', bestDesc: 'Pisces-Rabbit and Pig create a gentle, dreamy home. Both are compassionate and artistic.', worstDesc: 'Pisces-Rabbit and Dragon may struggle. Rabbit seeks calm while Dragon craves excitement.' },
    'Dragon': { best: 'Rooster', worst: 'Rabbit', bestDesc: 'Pisces-Dragon and Rooster form a creative, inspiring pair. Both have big dreams and imagination.', worstDesc: 'Pisces-Dragon and Rabbit may clash. Dragon is bold while Rabbit is gentle.' },
    'Snake': { best: 'Ox', worst: 'Horse', bestDesc: 'Pisces-Snake and Ox make an intuitive, spiritual partnership. Both are deep and compassionate.', worstDesc: 'Pisces-Snake and Horse may struggle. Snake needs calm while Horse seeks activity.' },
    'Horse': { best: 'Dog', worst: 'Ox', bestDesc: 'Pisces-Horse and Dog create a loyal, loving bond. Dog provides stability while Horse brings joy.', worstDesc: 'Pisces-Horse and Ox may clash. Horse needs freedom while Ox prefers routine.' },
    'Goat': { best: 'Rabbit', worst: 'Tiger', bestDesc: 'Pisces-Goat and Rabbit create a gentle, artistic relationship. Both are creative and compassionate.', worstDesc: 'Pisces-Goat and Tiger may struggle. Goat is gentle while Tiger is bold.' },
    'Monkey': { best: 'Dragon', worst: 'Ox', bestDesc: 'Pisces-Monkey and Dragon form a creative, imaginative pair. Both are artistic and fun-loving.', worstDesc: 'Pisces-Monkey and Ox may clash. Monkey loves change while Ox prefers stability.' },
    'Rooster': { best: 'Dragon', worst: 'Pig', bestDesc: 'Pisces-Rooster and Dragon create an artistic, ambitious partnership. Both are creative and confident.', worstDesc: 'Pisces-Rooster and Pig may struggle. Rooster is critical while Pig is laid-back.' },
    'Dog': { best: 'Tiger', worst: 'Snake', bestDesc: 'Pisces-Dog and Tiger create a deeply loyal bond. They support each other through all challenges.', worstDesc: 'Pisces-Dog and Snake may conflict. Dog values honesty while Snake is secretive.' },
    'Pig': { best: 'Rabbit', worst: 'Rooster', bestDesc: 'Pisces-Pig and Rabbit create a warm, loving home. Both are kind, compassionate, and artistic.', worstDesc: 'Pisces-Pig and Rooster may clash. Pig avoids conflict while Rooster is vocal.' }
};

function onYearChange() {
    calculateZodiac(compatibilityMatches);
}

window.addEventListener('DOMContentLoaded', function() {
    calculateZodiac(compatibilityMatches);
});