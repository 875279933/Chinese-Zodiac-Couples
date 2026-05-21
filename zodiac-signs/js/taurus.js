const compatibilityMatches = {
    'Rat': { best: 'Ox', worst: 'Horse', bestDesc: 'Taurus-Rat and Ox create a stable, reliable partnership. Both value security and hard work, building a solid foundation together.', worstDesc: 'Taurus-Rat and Horse may struggle. Rat values home life while Horse craves adventure and freedom.' },
    'Ox': { best: 'Snake', worst: 'Goat', bestDesc: 'Taurus-Ox and Snake make a powerful team. Both are patient and determined, working steadily toward shared goals.', worstDesc: 'Taurus-Ox and Goat may clash. Ox values structure while Goat prefers flexibility.' },
    'Tiger': { best: 'Dog', worst: 'Monkey', bestDesc: 'Taurus-Tiger and Dog create a loyal bond. Dog\'s protective nature complements Tiger\'s strength beautifully.', worstDesc: 'Taurus-Tiger and Monkey may conflict. Tiger values loyalty while Monkey craves variety.' },
    'Rabbit': { best: 'Pig', worst: 'Dragon', bestDesc: 'Taurus-Rabbit and Pig create a peaceful, loving home. Both value comfort and harmony in relationships.', worstDesc: 'Taurus-Rabbit and Dragon may struggle. Rabbit seeks calm while Dragon craves excitement.' },
    'Dragon': { best: 'Rooster', worst: 'Rabbit', bestDesc: 'Taurus-Dragon and Rooster form an ambitious pair. Both have strong goals and work hard to achieve them.', worstDesc: 'Taurus-Dragon and Rabbit may clash. Dragon\'s energy can overwhelm Rabbit\'s gentle nature.' },
    'Snake': { best: 'Ox', worst: 'Horse', bestDesc: 'Taurus-Snake and Ox make a wise, patient partnership. Both think carefully before acting and support each other deeply.', worstDesc: 'Taurus-Snake and Horse may struggle. Snake values introspection while Horse needs constant activity.' },
    'Horse': { best: 'Dog', worst: 'Ox', bestDesc: 'Taurus-Horse and Dog create a loyal, adventurous bond. Dog provides stability while Horse brings excitement.', worstDesc: 'Taurus-Horse and Ox may clash. Horse needs freedom while Ox prefers routine.' },
    'Goat': { best: 'Rabbit', worst: 'Tiger', bestDesc: 'Taurus-Goat and Rabbit create a gentle, artistic partnership. Both appreciate beauty and comfort in life.', worstDesc: 'Taurus-Goat and Tiger may struggle. Goat seeks peace while Tiger craves action.' },
    'Monkey': { best: 'Dragon', worst: 'Ox', bestDesc: 'Taurus-Monkey and Dragon form an exciting pair. Monkey\'s creativity complements Dragon\'s ambition.', worstDesc: 'Taurus-Monkey and Ox may clash. Monkey loves change while Ox prefers stability.' },
    'Rooster': { best: 'Dragon', worst: 'Pig', bestDesc: 'Taurus-Rooster and Dragon create a hardworking, successful partnership. Both are ambitious and organized.', worstDesc: 'Taurus-Rooster and Pig may struggle. Rooster is critical while Pig prefers harmony.' },
    'Dog': { best: 'Tiger', worst: 'Snake', bestDesc: 'Taurus-Dog and Tiger create a loyal, protective bond. They support each other through all challenges.', worstDesc: 'Taurus-Dog and Snake may conflict. Dog values honesty while Snake is more secretive.' },
    'Pig': { best: 'Rabbit', worst: 'Rooster', bestDesc: 'Taurus-Pig and Rabbit create a warm, loving relationship. Both value kindness and create a peaceful home.', worstDesc: 'Taurus-Pig and Rooster may clash. Pig avoids conflict while Rooster is confrontational.' }
};

function onYearChange() {
    calculateZodiac(compatibilityMatches);
}

window.addEventListener('DOMContentLoaded', function() {
    calculateZodiac(compatibilityMatches);
});