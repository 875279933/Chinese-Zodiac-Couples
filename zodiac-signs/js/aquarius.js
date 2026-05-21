const compatibilityMatches = {
    'Rat': { best: 'Monkey', worst: 'Ox', bestDesc: 'Aquarius-Rat and Monkey create an innovative, intellectual partnership. Both love ideas and progress.', worstDesc: 'Aquarius-Rat and Ox may struggle. Rat is forward-thinking while Ox is traditional.' },
    'Ox': { best: 'Snake', worst: 'Horse', bestDesc: 'Aquarius-Ox and Snake make a thoughtful, independent pair. Both value their own space.', worstDesc: 'Aquarius-Ox and Horse may clash. Ox values routine while Horse craves freedom.' },
    'Tiger': { best: 'Dragon', worst: 'Dog', bestDesc: 'Aquarius-Tiger and Dragon create an exciting, visionary partnership. Both are innovative and independent.', worstDesc: 'Aquarius-Tiger and Dog may struggle. Tiger loves freedom while Dog seeks loyalty.' },
    'Rabbit': { best: 'Goat', worst: 'Rooster', bestDesc: 'Aquarius-Rabbit and Goat create a gentle, creative bond. Both are humanitarian and kind.', worstDesc: 'Aquarius-Rabbit and Rooster may conflict. Rooster\'s directness can upset Rabbit.' },
    'Dragon': { best: 'Rooster', worst: 'Pig', bestDesc: 'Aquarius-Dragon and Rooster form a visionary, ambitious pair. Both are forward-thinking and confident.', worstDesc: 'Aquarius-Dragon and Pig may struggle. Dragon craves innovation while Pig seeks comfort.' },
    'Snake': { best: 'Monkey', worst: 'Rat', bestDesc: 'Aquarius-Snake and Monkey create an intellectual, unconventional partnership. Both love ideas and change.', worstDesc: 'Aquarius-Snake and Rat may clash. Snake is introspective while Rat is restless.' },
    'Horse': { best: 'Dog', worst: 'Ox', bestDesc: 'Aquarius-Horse and Dog create a free-spirited, loyal pair. Both enjoy independence and new experiences.', worstDesc: 'Aquarius-Horse and Ox may clash. Horse needs freedom while Ox prefers structure.' },
    'Goat': { best: 'Rabbit', worst: 'Tiger', bestDesc: 'Aquarius-Goat and Rabbit create a gentle, humanitarian relationship. Both value peace and creativity.', worstDesc: 'Aquarius-Goat and Tiger may struggle. Goat is gentle while Tiger is bold.' },
    'Monkey': { best: 'Rat', worst: 'Snake', bestDesc: 'Aquarius-Monkey and Rat form a clever, innovative pair. Both are quick-witted and love new ideas.', worstDesc: 'Aquarius-Monkey and Snake may clash. Monkey is restless while Snake prefers calm.' },
    'Rooster': { best: 'Dragon', worst: 'Rabbit', bestDesc: 'Aquarius-Rooster and Dragon create an ambitious, talkative partnership. Both are confident and forward-thinking.', worstDesc: 'Aquarius-Rooster and Rabbit may struggle. Rooster is vocal while Rabbit is quiet.' },
    'Dog': { best: 'Horse', worst: 'Tiger', bestDesc: 'Aquarius-Dog and Horse create a loyal, independent bond. Dog provides grounding while Horse brings freedom.', worstDesc: 'Aquarius-Dog and Tiger may conflict. Dog values loyalty while Tiger is fiercely independent.' },
    'Pig': { best: 'Rabbit', worst: 'Dragon', bestDesc: 'Aquarius-Pig and Rabbit create a warm, humanitarian relationship. Both are kind and open-minded.', worstDesc: 'Aquarius-Pig and Dragon may clash. Pig seeks peace while Dragon craves attention.' }
};

function onYearChange() {
    calculateZodiac(compatibilityMatches);
}

window.addEventListener('DOMContentLoaded', function() {
    calculateZodiac(compatibilityMatches);
});