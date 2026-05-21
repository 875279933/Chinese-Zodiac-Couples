﻿const compatibilityMatches = {
    'Rat': { best: 'Dragon', worst: 'Ox', bestDesc: 'Sagittarius-Rat and Dragon create an adventurous, optimistic partnership. Both love freedom and exploration.', worstDesc: 'Sagittarius-Rat and Ox may struggle. Rat is restless while Ox is steady, causing frustration.' },
    'Ox': { best: 'Tiger', worst: 'Horse', bestDesc: 'Sagittarius-Ox and Tiger make an exciting, bold pair. Both love adventure and new experiences.', worstDesc: 'Sagittarius-Ox and Horse may clash. Ox values stability while Horse craves constant change.' },
    'Tiger': { best: 'Horse', worst: 'Monkey', bestDesc: 'Sagittarius-Tiger and Horse create a free-spirited, adventurous partnership. Both love travel and excitement.', worstDesc: 'Sagittarius-Tiger and Monkey may compete. Both independent spirits need space.' },
    'Rabbit': { best: 'Goat', worst: 'Rooster', bestDesc: 'Sagittarius-Rabbit and Goat create a gentle, fun-loving bond. Goat\'s creativity balances Sagittarius\'s restlessness.', worstDesc: 'Sagittarius-Rabbit and Rooster may conflict. Rooster\'s criticism can hurt Rabbit.' },
    'Dragon': { best: 'Monkey', worst: 'Dog', bestDesc: 'Sagittarius-Dragon and Monkey form a lively, optimistic pair. Both love adventure and new ideas.', worstDesc: 'Sagittarius-Dragon and Dog may struggle. Dog needs loyalty while Dragon seeks freedom.' },
    'Snake': { best: 'Rooster', worst: 'Pig', bestDesc: 'Sagittarius-Snake and Rooster create an intellectual, adventurous partnership. Both love learning and exploration.', worstDesc: 'Sagittarius-Snake and Pig may clash. Snake is intense while Pig is laid-back.' },
    'Horse': { best: 'Tiger', worst: 'Ox', bestDesc: 'Sagittarius-Horse and Tiger make a perfect adventurous pair. Both love freedom and new experiences.', worstDesc: 'Sagittarius-Horse and Ox may struggle. Horse needs constant movement while Ox prefers stability.' },
    'Goat': { best: 'Rabbit', worst: 'Dragon', bestDesc: 'Sagittarius-Goat and Rabbit create a creative, fun relationship. Both love art and new experiences.', worstDesc: 'Sagittarius-Goat and Dragon may clash. Dragon\'s ambition can overwhelm Goat.' },
    'Monkey': { best: 'Dragon', worst: 'Tiger', bestDesc: 'Sagittarius-Monkey and Dragon form a clever, adventurous pair. Both love fun and exploration.', worstDesc: 'Sagittarius-Monkey and Tiger may compete. Both love being the center of attention.' },
    'Rooster': { best: 'Snake', worst: 'Rabbit', bestDesc: 'Sagittarius-Rooster and Snake create an ambitious, talkative partnership. Both love learning and sharing ideas.', worstDesc: 'Sagittarius-Rooster and Rabbit may struggle. Rooster\'s directness can hurt Rabbit.' },
    'Dog': { best: 'Tiger', worst: 'Dragon', bestDesc: 'Sagittarius-Dog and Tiger create a loyal, adventurous bond. Dog provides grounding while Tiger brings excitement.', worstDesc: 'Sagittarius-Dog and Dragon may conflict. Dog needs commitment while Dragon seeks freedom.' },
    'Pig': { best: 'Rabbit', worst: 'Snake', bestDesc: 'Sagittarius-Pig and Rabbit create a warm, fun-loving relationship. Both are optimistic and kind.', worstDesc: 'Sagittarius-Pig and Snake may clash. Pig is straightforward while Snake is complex.' }
};

function onYearChange() {
    calculateZodiac(compatibilityMatches);
}

window.addEventListener('DOMContentLoaded', function() {
    calculateZodiac(compatibilityMatches);
});