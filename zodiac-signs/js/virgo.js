﻿const compatibilityMatches = {
    'Rat': { best: 'Ox', worst: 'Horse', bestDesc: 'Virgo-Rat and Ox create a practical, hardworking partnership. Both are organized and detail-oriented.', worstDesc: 'Virgo-Rat and Horse may struggle. Rat values efficiency while Horse craves freedom.' },
    'Ox': { best: 'Snake', worst: 'Goat', bestDesc: 'Virgo-Ox and Snake make a thoughtful, reliable pair. Both are analytical and value stability.', worstDesc: 'Virgo-Ox and Goat may clash. Ox is structured while Goat is more flexible.' },
    'Tiger': { best: 'Dog', worst: 'Monkey', bestDesc: 'Virgo-Tiger and Dog create a loyal, responsible bond. Dog\'s dedication complements Tiger\'s strength.', worstDesc: 'Virgo-Tiger and Monkey may conflict. Tiger values commitment while Monkey loves change.' },
    'Rabbit': { best: 'Pig', worst: 'Dragon', bestDesc: 'Virgo-Rabbit and Pig create a gentle, caring home. Both are nurturing and practical.', worstDesc: 'Virgo-Rabbit and Dragon may struggle. Rabbit seeks calm while Dragon craves excitement.' },
    'Dragon': { best: 'Rooster', worst: 'Rabbit', bestDesc: 'Virgo-Dragon and Rooster form an ambitious, organized pair. Both are hardworking and goal-oriented.', worstDesc: 'Virgo-Dragon and Rabbit may clash. Dragon is bold while Rabbit is gentle.' },
    'Snake': { best: 'Ox', worst: 'Horse', bestDesc: 'Virgo-Snake and Ox make an intelligent, patient partnership. Both think carefully before acting.', worstDesc: 'Virgo-Snake and Horse may struggle. Snake needs calm while Horse seeks activity.' },
    'Horse': { best: 'Dog', worst: 'Ox', bestDesc: 'Virgo-Horse and Dog create a loyal, fun-loving bond. Dog provides stability while Horse brings joy.', worstDesc: 'Virgo-Horse and Ox may clash. Horse needs freedom while Ox prefers routine.' },
    'Goat': { best: 'Rabbit', worst: 'Tiger', bestDesc: 'Virgo-Goat and Rabbit create a gentle, artistic relationship. Both appreciate beauty and practicality.', worstDesc: 'Virgo-Goat and Tiger may struggle. Goat is gentle while Tiger is bold.' },
    'Monkey': { best: 'Dragon', worst: 'Ox', bestDesc: 'Virgo-Monkey and Dragon form a clever, ambitious pair. Both are intelligent and adaptable.', worstDesc: 'Virgo-Monkey and Ox may clash. Monkey loves change while Ox prefers stability.' },
    'Rooster': { best: 'Dragon', worst: 'Pig', bestDesc: 'Virgo-Rooster and Dragon create a hardworking, successful partnership. Both are perfectionists.', worstDesc: 'Virgo-Rooster and Pig may struggle. Rooster is critical while Pig is laid-back.' },
    'Dog': { best: 'Tiger', worst: 'Snake', bestDesc: 'Virgo-Dog and Tiger create a loyal, protective bond. They support each other through all challenges.', worstDesc: 'Virgo-Dog and Snake may conflict. Dog values honesty while Snake is secretive.' },
    'Pig': { best: 'Rabbit', worst: 'Rooster', bestDesc: 'Virgo-Pig and Rabbit create a warm, loving home. Both are kind and practical.', worstDesc: 'Virgo-Pig and Rooster may clash. Pig avoids conflict while Rooster is vocal.' }
};

function onYearChange() {
    calculateZodiac(compatibilityMatches);
}

window.addEventListener('DOMContentLoaded', function() {
    calculateZodiac(compatibilityMatches);
});