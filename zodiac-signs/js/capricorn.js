﻿const compatibilityMatches = {
    'Rat': { best: 'Ox', worst: 'Horse', bestDesc: 'Capricorn-Rat and Ox create a responsible, ambitious partnership. Both value hard work and success.', worstDesc: 'Capricorn-Rat and Horse may struggle. Rat is ambitious while Horse craves freedom.' },
    'Ox': { best: 'Snake', worst: 'Goat', bestDesc: 'Capricorn-Ox and Snake make a steady, reliable pair. Both are patient and goal-oriented.', worstDesc: 'Capricorn-Ox and Goat may clash. Ox is structured while Goat is more flexible.' },
    'Tiger': { best: 'Dog', worst: 'Monkey', bestDesc: 'Capricorn-Tiger and Dog create a loyal, hardworking bond. Dog\'s dedication complements Tiger\'s strength.', worstDesc: 'Capricorn-Tiger and Monkey may conflict. Tiger values commitment while Monkey loves change.' },
    'Rabbit': { best: 'Pig', worst: 'Dragon', bestDesc: 'Capricorn-Rabbit and Pig create a stable, loving home. Both are responsible and caring.', worstDesc: 'Capricorn-Rabbit and Dragon may struggle. Rabbit seeks calm while Dragon craves excitement.' },
    'Dragon': { best: 'Rooster', worst: 'Rabbit', bestDesc: 'Capricorn-Dragon and Rooster form an ambitious, successful pair. Both are hardworking and goal-oriented.', worstDesc: 'Capricorn-Dragon and Rabbit may clash. Dragon is bold while Rabbit is gentle.' },
    'Snake': { best: 'Ox', worst: 'Horse', bestDesc: 'Capricorn-Snake and Ox make a wise, patient partnership. Both think carefully before acting.', worstDesc: 'Capricorn-Snake and Horse may struggle. Snake needs calm while Horse seeks activity.' },
    'Horse': { best: 'Dog', worst: 'Ox', bestDesc: 'Capricorn-Horse and Dog create a loyal, fun-loving bond. Dog provides stability while Horse brings joy.', worstDesc: 'Capricorn-Horse and Ox may clash. Horse needs freedom while Ox prefers routine.' },
    'Goat': { best: 'Rabbit', worst: 'Tiger', bestDesc: 'Capricorn-Goat and Rabbit create a gentle, artistic relationship. Both appreciate beauty and practicality.', worstDesc: 'Capricorn-Goat and Tiger may struggle. Goat is gentle while Tiger is bold.' },
    'Monkey': { best: 'Dragon', worst: 'Ox', bestDesc: 'Capricorn-Monkey and Dragon form a clever, ambitious pair. Both are intelligent and adaptable.', worstDesc: 'Capricorn-Monkey and Ox may clash. Monkey loves change while Ox prefers stability.' },
    'Rooster': { best: 'Dragon', worst: 'Pig', bestDesc: 'Capricorn-Rooster and Dragon create a hardworking, successful partnership. Both are organized and ambitious.', worstDesc: 'Capricorn-Rooster and Pig may struggle. Rooster is critical while Pig is laid-back.' },
    'Dog': { best: 'Tiger', worst: 'Snake', bestDesc: 'Capricorn-Dog and Tiger create a loyal, protective bond. They support each other through all challenges.', worstDesc: 'Capricorn-Dog and Snake may conflict. Dog values honesty while Snake is secretive.' },
    'Pig': { best: 'Rabbit', worst: 'Rooster', bestDesc: 'Capricorn-Pig and Rabbit create a warm, loving home. Both are kind and responsible.', worstDesc: 'Capricorn-Pig and Rooster may clash. Pig avoids conflict while Rooster is vocal.' }
};

function onYearChange() {
    calculateZodiac(compatibilityMatches);
}

window.addEventListener('DOMContentLoaded', function() {
    calculateZodiac(compatibilityMatches);
});