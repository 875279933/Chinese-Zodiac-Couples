﻿const compatibilityMatches = {
    'Rat': { best: 'Monkey', worst: 'Ox', bestDesc: 'Gemini-Rat and Monkey create a lively, intellectual partnership. Both love learning and new experiences together.', worstDesc: 'Gemini-Rat and Ox may struggle. Rat is quick while Ox is deliberate, causing frustration.' },
    'Ox': { best: 'Snake', worst: 'Horse', bestDesc: 'Gemini-Ox and Snake make a balanced pair. Snake provides depth while Ox offers stability to Gemini\'s curious nature.', worstDesc: 'Gemini-Ox and Horse may clash. Ox values routine while Horse craves freedom.' },
    'Tiger': { best: 'Dragon', worst: 'Dog', bestDesc: 'Gemini-Tiger and Dragon create an exciting, dynamic partnership. Both are energetic and love adventure.', worstDesc: 'Gemini-Tiger and Dog may struggle. Tiger loves excitement while Dog seeks stability.' },
    'Rabbit': { best: 'Goat', worst: 'Rooster', bestDesc: 'Gemini-Rabbit and Goat create a gentle, creative bond. Both appreciate art and beauty in life.', worstDesc: 'Gemini-Rabbit and Rooster may conflict. Rabbit is sensitive while Rooster is direct.' },
    'Dragon': { best: 'Tiger', worst: 'Pig', bestDesc: 'Gemini-Dragon and Tiger form a powerful, charismatic pair. Both are natural leaders who inspire each other.', worstDesc: 'Gemini-Dragon and Pig may struggle. Dragon craves action while Pig seeks peace.' },
    'Snake': { best: 'Monkey', worst: 'Rat', bestDesc: 'Gemini-Snake and Monkey create an intellectual, mysterious partnership. Both love deep conversations and exploration.', worstDesc: 'Gemini-Snake and Rat may clash. Snake is introspective while Rat is restless.' },
    'Horse': { best: 'Dog', worst: 'Ox', bestDesc: 'Gemini-Horse and Dog make a fun-loving, loyal pair. Both enjoy socializing and new adventures together.', worstDesc: 'Gemini-Horse and Ox may struggle. Horse needs freedom while Ox prefers structure.' },
    'Goat': { best: 'Rabbit', worst: 'Tiger', bestDesc: 'Gemini-Goat and Rabbit create a harmonious, artistic relationship. Both value creativity and peace.', worstDesc: 'Gemini-Goat and Tiger may clash. Goat is gentle while Tiger is bold.' },
    'Monkey': { best: 'Rat', worst: 'Snake', bestDesc: 'Gemini-Monkey and Rat form a clever, playful partnership. Both are quick-witted and love to have fun.', worstDesc: 'Gemini-Monkey and Snake may struggle. Monkey is restless while Snake prefers calm.' },
    'Rooster': { best: 'Dragon', worst: 'Rabbit', bestDesc: 'Gemini-Rooster and Dragon create an ambitious, talkative pair. Both are confident and love to be heard.', worstDesc: 'Gemini-Rooster and Rabbit may clash. Rooster is vocal while Rabbit is quiet.' },
    'Dog': { best: 'Horse', worst: 'Tiger', bestDesc: 'Gemini-Dog and Horse create a loyal, adventurous bond. Dog provides stability while Horse brings excitement.', worstDesc: 'Gemini-Dog and Tiger may struggle. Dog values loyalty while Tiger is independent.' },
    'Pig': { best: 'Rabbit', worst: 'Dragon', bestDesc: 'Gemini-Pig and Rabbit create a warm, friendly relationship. Both are kind and enjoy good company.', worstDesc: 'Gemini-Pig and Dragon may conflict. Pig seeks peace while Dragon craves attention.' }
};

function onYearChange() {
    calculateZodiac(compatibilityMatches);
}

window.addEventListener('DOMContentLoaded', function() {
    calculateZodiac(compatibilityMatches);
});