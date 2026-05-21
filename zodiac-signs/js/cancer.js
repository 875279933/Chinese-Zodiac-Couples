﻿const compatibilityMatches = {
    'Rat': { best: 'Ox', worst: 'Horse', bestDesc: 'Cancer-Rat and Ox create a secure, nurturing partnership. Both value home and family above all.', worstDesc: 'Cancer-Rat and Horse may struggle. Rat loves home life while Horse craves adventure.' },
    'Ox': { best: 'Snake', worst: 'Goat', bestDesc: 'Cancer-Ox and Snake make a deeply emotional pair. Both are loyal and committed to their relationship.', worstDesc: 'Cancer-Ox and Goat may clash. Ox is steadfast while Goat is changeable.' },
    'Tiger': { best: 'Dog', worst: 'Monkey', bestDesc: 'Cancer-Tiger and Dog create a protective, loving bond. Dog\'s loyalty complements Tiger\'s strength.', worstDesc: 'Cancer-Tiger and Monkey may conflict. Tiger values security while Monkey loves novelty.' },
    'Rabbit': { best: 'Pig', worst: 'Dragon', bestDesc: 'Cancer-Rabbit and Pig create a warm, cozy home. Both are nurturing and love to care for others.', worstDesc: 'Cancer-Rabbit and Dragon may struggle. Rabbit seeks calm while Dragon craves excitement.' },
    'Dragon': { best: 'Rooster', worst: 'Rabbit', bestDesc: 'Cancer-Dragon and Rooster form an ambitious yet caring pair. Both love their family deeply.', worstDesc: 'Cancer-Dragon and Rabbit may clash. Dragon is bold while Rabbit is gentle.' },
    'Snake': { best: 'Ox', worst: 'Horse', bestDesc: 'Cancer-Snake and Ox make an emotionally deep partnership. Both are intuitive and supportive.', worstDesc: 'Cancer-Snake and Horse may struggle. Snake needs emotional depth while Horse seeks action.' },
    'Horse': { best: 'Dog', worst: 'Ox', bestDesc: 'Cancer-Horse and Dog create a loyal, loving bond. Dog provides stability while Horse brings joy.', worstDesc: 'Cancer-Horse and Ox may clash. Horse needs freedom while Ox prefers routine.' },
    'Goat': { best: 'Rabbit', worst: 'Tiger', bestDesc: 'Cancer-Goat and Rabbit create a gentle, artistic relationship. Both value peace and harmony.', worstDesc: 'Cancer-Goat and Tiger may struggle. Goat is gentle while Tiger is aggressive.' },
    'Monkey': { best: 'Dragon', worst: 'Ox', bestDesc: 'Cancer-Monkey and Dragon form a fun yet caring pair. Both love to entertain and care for family.', worstDesc: 'Cancer-Monkey and Ox may clash. Monkey loves change while Ox prefers stability.' },
    'Rooster': { best: 'Dragon', worst: 'Pig', bestDesc: 'Cancer-Rooster and Dragon create a responsible, loving partnership. Both are dedicated to their family.', worstDesc: 'Cancer-Rooster and Pig may struggle. Rooster is organized while Pig is laid-back.' },
    'Dog': { best: 'Tiger', worst: 'Snake', bestDesc: 'Cancer-Dog and Tiger create a fiercely loyal bond. They protect and support each other unconditionally.', worstDesc: 'Cancer-Dog and Snake may conflict. Dog values honesty while Snake is secretive.' },
    'Pig': { best: 'Rabbit', worst: 'Rooster', bestDesc: 'Cancer-Pig and Rabbit create a warm, loving home. Both are kind and nurturing by nature.', worstDesc: 'Cancer-Pig and Rooster may clash. Pig avoids conflict while Rooster is vocal.' }
};

function onYearChange() {
    calculateZodiac(compatibilityMatches);
}

window.addEventListener('DOMContentLoaded', function() {
    calculateZodiac(compatibilityMatches);
});