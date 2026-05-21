const compatibilityMatches = {
    'Rat': { best: 'Monkey', worst: 'Ox', bestDesc: 'Libra-Rat and Monkey create a charming, social partnership. Both love beauty and harmony.', worstDesc: 'Libra-Rat and Ox may struggle. Rat is social while Ox prefers quiet stability.' },
    'Ox': { best: 'Snake', worst: 'Horse', bestDesc: 'Libra-Ox and Snake make a balanced, graceful pair. Both appreciate beauty and peace.', worstDesc: 'Libra-Ox and Horse may clash. Ox values routine while Horse craves freedom.' },
    'Tiger': { best: 'Dragon', worst: 'Dog', bestDesc: 'Libra-Tiger and Dragon create an exciting, charismatic partnership. Both are charming and love attention.', worstDesc: 'Libra-Tiger and Dog may struggle. Tiger loves excitement while Dog seeks loyalty.' },
    'Rabbit': { best: 'Goat', worst: 'Rooster', bestDesc: 'Libra-Rabbit and Goat create a gentle, artistic bond. Both love beauty and harmony.', worstDesc: 'Libra-Rabbit and Rooster may conflict. Rooster\'s directness can upset Rabbit.' },
    'Dragon': { best: 'Rooster', worst: 'Pig', bestDesc: 'Libra-Dragon and Rooster form a stylish, confident pair. Both love luxury and admiration.', worstDesc: 'Libra-Dragon and Pig may struggle. Dragon craves attention while Pig seeks peace.' },
    'Snake': { best: 'Monkey', worst: 'Rat', bestDesc: 'Libra-Snake and Monkey create an elegant, intellectual partnership. Both appreciate art and conversation.', worstDesc: 'Libra-Snake and Rat may clash. Snake is introspective while Rat is restless.' },
    'Horse': { best: 'Dog', worst: 'Ox', bestDesc: 'Libra-Horse and Dog create a fun-loving, loyal pair. Both enjoy socializing and new experiences.', worstDesc: 'Libra-Horse and Ox may clash. Horse needs freedom while Ox prefers structure.' },
    'Goat': { best: 'Rabbit', worst: 'Tiger', bestDesc: 'Libra-Goat and Rabbit create a graceful, peaceful relationship. Both value beauty and harmony.', worstDesc: 'Libra-Goat and Tiger may struggle. Goat is gentle while Tiger is bold.' },
    'Monkey': { best: 'Rat', worst: 'Snake', bestDesc: 'Libra-Monkey and Rat form a clever, charming pair. Both are social and love to have fun.', worstDesc: 'Libra-Monkey and Snake may clash. Monkey is restless while Snake prefers calm.' },
    'Rooster': { best: 'Dragon', worst: 'Rabbit', bestDesc: 'Libra-Rooster and Dragon create an elegant, ambitious partnership. Both are confident and stylish.', worstDesc: 'Libra-Rooster and Rabbit may struggle. Rooster is vocal while Rabbit is quiet.' },
    'Dog': { best: 'Horse', worst: 'Tiger', bestDesc: 'Libra-Dog and Horse create a loyal, friendly bond. Dog provides stability while Horse brings joy.', worstDesc: 'Libra-Dog and Tiger may conflict. Dog values loyalty while Tiger is independent.' },
    'Pig': { best: 'Rabbit', worst: 'Dragon', bestDesc: 'Libra-Pig and Rabbit create a warm, harmonious relationship. Both are kind and love peace.', worstDesc: 'Libra-Pig and Dragon may clash. Pig seeks calm while Dragon craves excitement.' }
};

function onYearChange() {
    calculateZodiac(compatibilityMatches);
}

window.addEventListener('DOMContentLoaded', function() {
    calculateZodiac(compatibilityMatches);
});