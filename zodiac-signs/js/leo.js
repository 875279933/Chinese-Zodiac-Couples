﻿const compatibilityMatches = {
    'Rat': { best: 'Dragon', worst: 'Ox', bestDesc: 'Leo-Rat and Dragon create a powerful, charismatic partnership. Both are natural leaders who inspire others.', worstDesc: 'Leo-Rat and Ox may struggle. Rat is ambitious while Ox is steady, causing power struggles.' },
    'Ox': { best: 'Tiger', worst: 'Horse', bestDesc: 'Leo-Ox and Tiger make a strong, confident pair. Both have big personalities and support each other\'s dreams.', worstDesc: 'Leo-Ox and Horse may clash. Ox values loyalty while Horse craves freedom.' },
    'Tiger': { best: 'Horse', worst: 'Monkey', bestDesc: 'Leo-Tiger and Horse create an exciting, adventurous partnership. Both love the spotlight and new experiences.', worstDesc: 'Leo-Tiger and Monkey may compete. Both strong personalities need to share the stage.' },
    'Rabbit': { best: 'Goat', worst: 'Rooster', bestDesc: 'Leo-Rabbit and Goat create a gentle, loving bond. Goat\'s kindness balances Leo\'s boldness.', worstDesc: 'Leo-Rabbit and Rooster may conflict. Rooster\'s criticism can hurt Leo\'s pride.' },
    'Dragon': { best: 'Monkey', worst: 'Dog', bestDesc: 'Leo-Dragon and Monkey form a dynamic, entertaining pair. Both are charismatic and love attention.', worstDesc: 'Leo-Dragon and Dog may struggle. Dog needs loyalty while Dragon seeks admiration.' },
    'Snake': { best: 'Rooster', worst: 'Pig', bestDesc: 'Leo-Snake and Rooster create a confident, stylish partnership. Both appreciate beauty and success.', worstDesc: 'Leo-Snake and Pig may clash. Snake is intense while Pig is laid-back.' },
    'Horse': { best: 'Tiger', worst: 'Ox', bestDesc: 'Leo-Horse and Tiger make an energetic, passionate pair. Both love adventure and excitement.', worstDesc: 'Leo-Horse and Ox may struggle. Horse needs freedom while Ox prefers routine.' },
    'Goat': { best: 'Rabbit', worst: 'Dragon', bestDesc: 'Leo-Goat and Rabbit create a graceful, artistic relationship. Both appreciate beauty and romance.', worstDesc: 'Leo-Goat and Dragon may clash. Dragon\'s ambition can overwhelm Goat\'s gentle nature.' },
    'Monkey': { best: 'Dragon', worst: 'Tiger', bestDesc: 'Leo-Monkey and Dragon form a clever, entertaining pair. Both are quick-witted and love to have fun.', worstDesc: 'Leo-Monkey and Tiger may compete. Both love being the center of attention.' },
    'Rooster': { best: 'Snake', worst: 'Rabbit', bestDesc: 'Leo-Rooster and Snake create a confident, ambitious partnership. Both are proud and successful.', worstDesc: 'Leo-Rooster and Rabbit may struggle. Rooster\'s directness can hurt Rabbit\'s feelings.' },
    'Dog': { best: 'Tiger', worst: 'Dragon', bestDesc: 'Leo-Dog and Tiger create a loyal, protective bond. Dog\'s devotion complements Tiger\'s strength.', worstDesc: 'Leo-Dog and Dragon may conflict. Dog needs commitment while Dragon seeks admiration.' },
    'Pig': { best: 'Rabbit', worst: 'Snake', bestDesc: 'Leo-Pig and Rabbit create a warm, generous relationship. Both love to entertain and care for others.', worstDesc: 'Leo-Pig and Snake may clash. Pig is straightforward while Snake is complex.' }
};

function onYearChange() {
    calculateZodiac(compatibilityMatches);
}

window.addEventListener('DOMContentLoaded', function() {
    calculateZodiac(compatibilityMatches);
});