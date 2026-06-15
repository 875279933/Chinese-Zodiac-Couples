let currentAudio = null;
let voicesLoaded = false;
if ('speechSynthesis' in window) {
    speechSynthesis.getVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => { voicesLoaded = true; };
    } else {
        voicesLoaded = true;
    }
}
function playAudio(chineseName, pinyin, btn) {
    if (currentAudio) { currentAudio.pause(); currentAudio = null; }
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(chineseName);
        utterance.lang = 'zh-CN';
        utterance.rate = 0.7;
        const voices = speechSynthesis.getVoices();
        const zhVoice = voices.find(v => v.lang.startsWith('zh')) || voices[0];
        if (zhVoice) utterance.voice = zhVoice;
        utterance.onstart = () => btn.classList.add('playing');
        utterance.onend = () => btn.classList.remove('playing');
        utterance.onerror = () => btn.classList.remove('playing');
        speechSynthesis.speak(utterance);
        currentAudio = { pause: () => speechSynthesis.cancel() };
    }
}

function escapeHtml(str) { return String(str).replace(/[&<>]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;'})[m]); }

const elementSingleChars = {
    "金": ["钰","铭","铃","锦","钗","钿","银","鑫"],
    "木": ["琳","杉","梅","桃","桂","柳","芸","芝"],
    "水": ["涵","汐","洁","滢","淳","渝","沐","清"],
    "火": ["婷","娜","煜","烁","灵","焕","熙","瑶"],
    "土": ["婉","怡","安","岚","娅","恩","韵","萱"]
};
const elementDoubleNames = {
    "金": ["钰婷","铭萱","铃兰","锦怡","银萍","鑫蕾","钰琪","铭雅"],
    "木": ["琳萱","梅婷","桂兰","柳清","芸熙","芝涵","杉妮","桃妍"],
    "水": ["涵玥","汐瑶","洁琳","滢萱","淳雅","渝婷","沐雪","清妍"],
    "火": ["婷怡","娜琳","煜婷","烁琪","灵萱","焕婷","熙雯","瑶琪"],
    "土": ["婉婷","怡萱","安琳","岚婷","娅琪","婉清","恩熙","韵涵"]
};
const reduplicateMap = {
    "金": ["铭铭","铃铃","鑫鑫","锦锦"],
    "木": ["琳琳","杉杉","梅梅","芸芸"],
    "水": ["涵涵","清清","滢滢","淳淳"],
    "火": ["婷婷","娜娜","熙熙","瑶瑶"],
    "土": ["婉婉","怡怡","安安","岚岚"]
};

const zodiacAnimals = ["Rat","Ox","Tiger","Rabbit","Dragon","Snake","Horse","Goat","Monkey","Rooster","Dog","Pig"];
const zodiacElementMap = {"Rat":"Water","Ox":"Earth","Tiger":"Wood","Rabbit":"Wood","Dragon":"Earth","Snake":"Fire","Horse":"Fire","Goat":"Earth","Monkey":"Metal","Rooster":"Metal","Dog":"Earth","Pig":"Water"};
const preferredElementMap = {"Rat":["Metal","Water"],"Ox":["Fire","Earth"],"Tiger":["Water","Wood"],"Rabbit":["Water","Wood"],"Dragon":["Fire","Earth"],"Snake":["Wood","Fire"],"Horse":["Wood","Fire"],"Goat":["Fire","Earth"],"Monkey":["Earth","Metal"],"Rooster":["Earth","Metal"],"Dog":["Fire","Earth"],"Pig":["Metal","Water"]};
function getSeasonElement(month) { if (month>=3 && month<=5) return "Wood"; if (month>=6 && month<=8) return "Fire"; if (month>=9 && month<=11) return "Metal"; return "Water"; }
function getZodiac(year) { return zodiacAnimals[(year - 1900) % 12]; }

function getWuxingMainElement(year, month) {
    const zodiac = getZodiac(year);
    const prefer = preferredElementMap[zodiac] || ["Earth"];
    return prefer[0];
}

function getAnalysisText(year, month) {
    const zodiac = getZodiac(year);
    const zodiacElem = zodiacElementMap[zodiac];
    const seasonElem = getSeasonElement(month);
    const mainElem = getWuxingMainElement(year, month);
    return `Zodiac: ${zodiac} (${zodiacElem} element) | Season Element: ${seasonElem} | Preferred Element: ${mainElem}. Names have been selected based on this analysis.`;
}

function generateSingleName(surname, mainElement) {
    const chars = elementSingleChars[mainElement] || elementSingleChars["土"];
    const picked = chars[Math.floor(Math.random() * chars.length)];
    const full = surname + picked;
    const pinyinBase = `${pinyinSmart(surname)} ${pinyinSmart(picked)}`;
    const elementMeaning = {
        "金": "precious metal, symbolizing nobility and elegance",
        "木": "lush vegetation, representing vitality and grace",
        "水": "flowing water, signifying wisdom and gentleness",
        "火": "bright flame, symbolizing passion and brilliance",
        "土": "solid earth, representing stability and warmth"
    };
    return { name: full, pinyin: pinyinBase, meaning: `Single character name with ${mainElement} element (${elementMeaning[mainElement]}). The character ${picked} carries traditional auspicious meaning.` };
}

function generateDoubleName(surname, mainElement) {
    const pairs = elementDoubleNames[mainElement] || elementDoubleNames["土"];
    const chosen = pairs[Math.floor(Math.random() * pairs.length)];
    const full = surname + chosen;
    const pinyinPart = pinyinSmart(chosen);
    const elementMeaning = {
        "金": "Metal element brings fortune and elegance",
        "木": "Wood element promotes growth and vitality",
        "水": "Water element enhances wisdom and gentleness",
        "火": "Fire element ignites passion and beauty",
        "土": "Earth element provides stability and warmth"
    };
    return { name: full, pinyin: `${pinyinSmart(surname)} ${pinyinPart}`, meaning: `Traditional Chinese double-character name with ${mainElement} element. ${elementMeaning[mainElement]}. This elegant combination carries profound cultural connotations.` };
}

function generateReduplicateName(surname, mainElement) {
    const redupList = reduplicateMap[mainElement] || reduplicateMap["土"];
    const base = redupList[Math.floor(Math.random() * redupList.length)];
    const full = surname + base;
    const pinyinBase = pinyinSmart(base);
    return { name: full, pinyin: `${pinyinSmart(surname)} ${pinyinBase}`, meaning: `Reduplicate name style, a beloved tradition in Chinese naming. Carries ${mainElement} element energy, symbolizing warmth, harmony, and blessings for a happy life.` };
}

function pinyinSmart(str) {
    if(!str) return "";
    const map = {
        "李":"Lǐ","王":"Wáng","张":"Zhāng","刘":"Liú","陈":"Chén","欧阳":"Ōuyáng","司马":"Sīmǎ","上官":"Shàngguān","皇甫":"Huángfǔ","令狐":"Lìnghú","诸葛":"Zhūgě",
        "钰":"Yù","铭":"Míng","铃":"Líng","锦":"Jǐn","钗":"Chāi","钿":"Diàn","银":"Yín","鑫":"Xīn","琳":"Lín","杉":"Shān","梅":"Méi","桃":"Táo","桂":"Guì","柳":"Liǔ","芸":"Yún","芝":"Zhī","涵":"Hán","汐":"Xī","洁":"Jié","滢":"Yíng","淳":"Chún","渝":"Yú","沐":"Mù","清":"Qīng","婷":"Tíng","娜":"Nà","煜":"Yù","烁":"Shuò","灵":"Líng","焕":"Huàn","熙":"Xī","瑶":"Yáo","婉":"Wǎn","怡":"Yí","安":"Ān","岚":"Lán","娅":"Yà","恩":"Ēn","韵":"Yùn","萱":"Xuān","萍":"Píng","蕾":"Lěi","琪":"Qí","妮":"Nī","妍":"Yán","玥":"Yuè","雯":"Wén",
        "钰婷":"Yùtíng","铭萱":"Míngxuān","铃兰":"Línglán","锦怡":"Jǐnyí","银萍":"Yínpíng","鑫蕾":"Xīnlěi","钰琪":"Yùqí","铭雅":"Míngyǎ","琳萱":"Línxuān","梅婷":"Méitíng","桂兰":"Guìlán","柳清":"Liǔqīng","芸熙":"Yúnxī","芝涵":"Zhīhán","杉妮":"Shānnī","桃妍":"Táoyán","涵玥":"Hányuè","汐瑶":"Xīyáo","洁琳":"Jiélín","滢萱":"Yíngxuān","淳雅":"Chúnyǎ","渝婷":"Yútíng","沐雪":"Mùxuě","清妍":"Qīngyán","婷怡":"Tíngyí","娜琳":"Nàlín","煜婷":"Yùtíng","烁琪":"Shuòqí","灵萱":"Língxuān","焕婷":"Huàntíng","熙雯":"Xīwén","瑶琪":"Yáoqí","婉婷":"Wǎntíng","怡萱":"Yíxuān","安琳":"Ānlín","岚婷":"Lántíng","娅琪":"Yàqí","婉清":"Wǎnqīng","恩熙":"Ēnxī","韵涵":"Yùnhán",
        "铭铭":"Míng Míng","铃铃":"Líng Líng","鑫鑫":"Xīn Xīn","锦锦":"Jǐn Jǐn","琳琳":"Lín Lín","杉杉":"Shān Shān","梅梅":"Méi Méi","芸芸":"Yún Yún","涵涵":"Hán Hán","清清":"Qīng Qīng","滢滢":"Yíng Yíng","淳淳":"Chún Chún","婷婷":"Tíng Tíng","娜娜":"Nà Nà","熙熙":"Xī Xī","瑶瑶":"Yáo Yáo","婉婉":"Wǎn Wǎn","怡怡":"Yí Yí","安安":"Ān Ān","岚岚":"Lán Lán",
        "慧":"Huì","雅":"Yǎ","静":"Jìng","淑":"Shū","贞":"Zhēn","柔":"Róu","芳":"Fāng","兰":"Lán","秀":"Xiù","英":"Yīng","蕊":"Ruǐ","蓉":"Róng","菲":"Fēi","薇":"Wēi","蕾":"Lěi","颖":"Yǐng","璐":"Lù","瑾":"Jǐn","璇":"Xuán","珊":"Shān",
        "志":"Zhì","恒":"Héng","远":"Yuǎn","博":"Bó","达":"Dá","睿":"Ruì","卓":"Zhuó","毅":"Yì","勇":"Yǒng","勤":"Qín","学":"Xué","思":"Sī","智":"Zhì","谋":"Móu","策":"Cè","略":"Lüè","韬":"Tāo","鹏":"Péng",
        "康":"Kāng","宁":"Níng","安":"Ān","泰":"Tài","和":"Hé","平":"Píng","顺":"Shùn","祥":"Xiáng","福":"Fú","寿":"Shòu","吉":"Jí","庆":"Qìng","荣":"Róng","昌":"Chāng","盛":"Shèng","裕":"Yù","丰":"Fēng","盈":"Yíng","舒":"Shū","怡":"Yí"
    };
    let result = "";
    for(let ch of str) {
        result += (map[ch] || ch) + " ";
    }
    return result.trim();
}

const meaningNameMap = {
    "moral": {
        "single": ["慧","雅","静","淑","贞","柔","芳","兰","秀","英","蕊","蓉","菲","薇","颖","璐","瑾","璇","珊","琪"],
        "double": ["慧雅","静淑","贞柔","芳兰","秀英","蕊蓉","菲薇","颖璐","瑾璇","珊琪","雅淑","慧兰","静芳","柔英","贞琪","淑慧","兰秀","英蕊","蓉菲","薇颖"],
        "reduplicate": ["婷婷","娜娜","涵涵","清清","雅雅","琪琪","婉婉","怡怡","萱萱","岚岚"]
    },
    "career": {
        "single": ["钰","铭","锦","涵","婷","娜","雅","琪","萱","琳","怡","婉","岚","韵","妍"],
        "double": ["钰婷","铭萱","锦怡","涵玥","婷怡","娜琳","雅琪","萱怡","琳萱","怡婷","婉婷","岚雅","韵涵","妍婷","琪涵"],
        "reduplicate": ["婷婷","娜娜","涵涵","雅雅","琪琪","萱萱","琳琳","怡怡","婉婉","岚岚"]
    },
    "health": {
        "single": ["涵","洁","清","沐","安","怡","婉","婷","娜","雅","琪","萱","琳","岚","韵"],
        "double": ["涵玥","洁琳","清妍","沐雪","安琳","怡婷","婉婷","婷怡","娜琳","雅琪","萱怡","琳萱","岚婷","韵涵","妍婷"],
        "reduplicate": ["安安","涵涵","清清","洁洁","怡怡","婉婉","婷婷","娜娜","雅雅","琪琪"]
    }
};

function generateMeaningName(surname, meaningType, styleType) {
    const nameList = meaningNameMap[meaningType][styleType] || meaningNameMap[meaningType]["single"];
    const chosen = nameList[Math.floor(Math.random() * nameList.length)];
    const full = surname + chosen;
    const styleDesc = styleType === "single" ? "single character" : styleType === "double" ? "double character" : "reduplicate";
    const meaningDesc = {
        "moral": "traditional Chinese virtues and moral integrity, inspired by classical teachings",
        "career": "ambition, wisdom, and success in one's professional journey",
        "health": "blessings for good health, peace, longevity, and well-being"
    };
    return { name: full, pinyin: `${pinyinSmart(surname)} ${pinyinSmart(chosen)}`, meaning: `Meaning-based ${styleDesc} name representing ${meaningDesc[meaningType]}. The character(s) ${chosen} carry auspicious traditional connotations.` };
}

function renderMeaningDefault(surname, meaningType, styleType) {
    const container = document.getElementById("meaningNameCards");
    if (!surname) { container.innerHTML = `<div class="name-card">Please select a surname</div>`; return; }
    const meaningLabels = { "moral": "Moral Cultivation", "career": "Career & Ambition", "health": "Health & Safety" };
    const label = meaningLabels[meaningType] || "Meaning";
    const styleDesc = styleType === "single" ? "Single Character" : styleType === "double" ? "Double Character" : "Reduplicate";
    let html = `<div class="name-card"><div class="badge rec-badge">Recommended</div><div class="chinese-name">${escapeHtml(surname)}<button class="audio-btn" onclick="playAudio('${escapeHtml(surname)}','${escapeHtml(pinyinSmart(surname))}',this)"><span class="audio-icon">🔊</span></button></div><div class="pinyin">${escapeHtml(pinyinSmart(surname))}</div><div class="meaning">Surname: ${escapeHtml(surname)} — ${styleDesc} names for ${label}</div></div>`;
    for (let i = 0; i < 3; i++) {
        const nameObj = generateMeaningName(surname, meaningType, styleType);
        html += `<div class="name-card"><div class="badge">${i === 0 ? 'Option 1' : i === 1 ? 'Option 2' : 'Option 3'}</div><div class="chinese-name">${escapeHtml(nameObj.name)}<button class="audio-btn" onclick="playAudio('${escapeHtml(nameObj.name)}','${escapeHtml(nameObj.pinyin)}',this)"><span class="audio-icon">🔊</span></button></div><div class="pinyin">${escapeHtml(nameObj.pinyin)}</div><div class="meaning">${escapeHtml(nameObj.meaning)}</div></div>`;
    }
    container.innerHTML = html;
}

function renderMeaningWithAI(surname, meaningType, styleType) {
    renderMeaningDefault(surname, meaningType, styleType);
}

function renderWuxingDefault(year, month, surname, styleType) {
    const container = document.getElementById("wuxingNameCards");
    const analysisDiv = document.getElementById("wuxingAnalysis");

    const mainElem = year && month ? getWuxingMainElement(year, month) : "Wood";
    const analysisText = year && month ? getAnalysisText(year, month) : "Please select a birth date for personalized Five Elements analysis.";

    let finalSurname = surname.trim();
    if (finalSurname === "") finalSurname = "李";

    analysisDiv.innerHTML = `Analysis: ${analysisText}`;

    let nameObj, extra1, extra2;
    if (styleType === "single") {
        nameObj = generateSingleName(finalSurname, mainElem);
        extra1 = generateSingleName(finalSurname, mainElem);
        extra2 = generateSingleName(finalSurname, mainElem);
    } else if (styleType === "double") {
        nameObj = generateDoubleName(finalSurname, mainElem);
        extra1 = generateDoubleName(finalSurname, mainElem);
        extra2 = generateDoubleName(finalSurname, mainElem);
    } else {
        nameObj = generateReduplicateName(finalSurname, mainElem);
        extra1 = generateReduplicateName(finalSurname, mainElem);
        extra2 = generateReduplicateName(finalSurname, mainElem);
    }

    let html = `<div class="name-card"><div class="badge rec-badge">Recommended</div><div class="chinese-name">${escapeHtml(nameObj.name)}<button class="audio-btn" onclick="playAudio('${escapeHtml(nameObj.name)}','${escapeHtml(nameObj.pinyin)}',this)"><span class="audio-icon">🔊</span></button></div><div class="pinyin">${escapeHtml(nameObj.pinyin)}</div><div class="meaning">${escapeHtml(nameObj.meaning)}</div></div>`;
    html += `<div class="name-card"><div class="badge">Alternative</div><div class="chinese-name">${escapeHtml(extra1.name)}<button class="audio-btn" onclick="playAudio('${escapeHtml(extra1.name)}','${escapeHtml(extra1.pinyin)}',this)"><span class="audio-icon">🔊</span></button></div><div class="pinyin">${escapeHtml(extra1.pinyin)}</div><div class="meaning">${escapeHtml(extra1.meaning)}</div></div>`;
    html += `<div class="name-card"><div class="badge">Alternative</div><div class="chinese-name">${escapeHtml(extra2.name)}<button class="audio-btn" onclick="playAudio('${escapeHtml(extra2.name)}','${escapeHtml(extra2.pinyin)}',this)"><span class="audio-icon">🔊</span></button></div><div class="pinyin">${escapeHtml(extra2.pinyin)}</div><div class="meaning">${escapeHtml(extra2.meaning)}</div></div>`;
    container.innerHTML = html;
}

function renderWuxingWithAI(year, month, surname, styleType) {
    renderWuxingDefault(year, month, surname, styleType);
}

document.addEventListener('DOMContentLoaded', function() {
    const birthYearSelect = document.getElementById('birthYear');
    const birthMonthSelect = document.getElementById('birthMonth');
    const currentYear = new Date().getFullYear();

    birthYearSelect.innerHTML = '<option value="">Select Year</option>';
    for (let y = currentYear; y >= 1950; y--) {
        birthYearSelect.innerHTML += `<option value="${y}">${y}</option>`;
    }

    birthMonthSelect.innerHTML = '<option value="">Select Month</option>';
    for (let m = 1; m <= 12; m++) {
        birthMonthSelect.innerHTML += `<option value="${m}">${m}</option>`;
    }

    const modeBtns = document.querySelectorAll('.mode-btn');
    const panels = {
        'wuxing': document.getElementById('wuxingModePanel'),
        'meaning': document.getElementById('meaningModePanel')
    };

    modeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            modeBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const mode = this.dataset.mode;
            Object.keys(panels).forEach(p => panels[p].style.display = p === mode ? 'block' : 'none');

            if (mode === 'meaning') {
                const surname = document.querySelector('#meaningSurnameGroup .style-radio.selected')?.dataset.meaningsurname || '李';
                const meaningType = document.querySelector('#meaningCategoryGroup .style-radio.selected')?.dataset.meaning || 'moral';
                const styleType = document.querySelector('#meaningStyleGroup .style-radio.selected')?.dataset.meaningstyle || 'single';
                renderMeaningDefault(surname, meaningType, styleType);
            } else if (mode === 'wuxing') {
                const year = document.getElementById('birthYear').value;
                const month = document.getElementById('birthMonth').value;
                const surname = document.querySelector('#surnameGroup .style-radio.selected')?.dataset.surname || '李';
                const styleType = document.querySelector('#nameStyleGroup .style-radio.selected')?.dataset.style || 'single';
                renderWuxingDefault(year, month, surname, styleType);
            }
        });
    });

    document.querySelectorAll('#surnameGroup .style-radio').forEach(el => {
        el.addEventListener('click', function() {
            document.querySelectorAll('#surnameGroup .style-radio').forEach(e => e.classList.remove('selected'));
            this.classList.add('selected');
            const year = document.getElementById('birthYear').value;
            const month = document.getElementById('birthMonth').value;
            const surname = this.dataset.surname;
            const styleType = document.querySelector('#nameStyleGroup .style-radio.selected')?.dataset.style || 'single';
            renderWuxingDefault(year, month, surname, styleType);
        });
    });

    document.querySelectorAll('#nameStyleGroup .style-radio').forEach(el => {
        el.addEventListener('click', function() {
            document.querySelectorAll('#nameStyleGroup .style-radio').forEach(e => e.classList.remove('selected'));
            this.classList.add('selected');
            const year = document.getElementById('birthYear').value;
            const month = document.getElementById('birthMonth').value;
            const surname = document.querySelector('#surnameGroup .style-radio.selected')?.dataset.surname || '李';
            const styleType = this.dataset.style;
            renderWuxingDefault(year, month, surname, styleType);
        });
    });

    document.querySelectorAll('#meaningSurnameGroup .style-radio').forEach(el => {
        el.addEventListener('click', function() {
            document.querySelectorAll('#meaningSurnameGroup .style-radio').forEach(e => e.classList.remove('selected'));
            this.classList.add('selected');
            const surname = this.dataset.meaningsurname;
            const meaningType = document.querySelector('#meaningCategoryGroup .style-radio.selected')?.dataset.meaning || 'moral';
            const styleType = document.querySelector('#meaningStyleGroup .style-radio.selected')?.dataset.meaningstyle || 'single';
            renderMeaningDefault(surname, meaningType, styleType);
        });
    });

    document.querySelectorAll('#meaningCategoryGroup .style-radio').forEach(el => {
        el.addEventListener('click', function() {
            document.querySelectorAll('#meaningCategoryGroup .style-radio').forEach(e => e.classList.remove('selected'));
            this.classList.add('selected');
            const surname = document.querySelector('#meaningSurnameGroup .style-radio.selected')?.dataset.meaningsurname || '李';
            const meaningType = this.dataset.meaning;
            const styleType = document.querySelector('#meaningStyleGroup .style-radio.selected')?.dataset.meaningstyle || 'single';
            renderMeaningDefault(surname, meaningType, styleType);
        });
    });

    document.querySelectorAll('#meaningStyleGroup .style-radio').forEach(el => {
        el.addEventListener('click', function() {
            document.querySelectorAll('#meaningStyleGroup .style-radio').forEach(e => e.classList.remove('selected'));
            this.classList.add('selected');
            const surname = document.querySelector('#meaningSurnameGroup .style-radio.selected')?.dataset.meaningsurname || '李';
            const meaningType = document.querySelector('#meaningCategoryGroup .style-radio.selected')?.dataset.meaning || 'moral';
            const styleType = this.dataset.meaningstyle;
            renderMeaningDefault(surname, meaningType, styleType);
        });
    });

    document.getElementById('genWuxingBtn').addEventListener('click', function() {
        const year = document.getElementById('birthYear').value;
        const month = document.getElementById('birthMonth').value;
        const surname = document.querySelector('#surnameGroup .style-radio.selected')?.dataset.surname || '李';
        const styleType = document.querySelector('#nameStyleGroup .style-radio.selected')?.dataset.style || 'single';

        if (!year || !month) {
            alert('Please select birth year and month!');
            return;
        }

        renderWuxingWithAI(year, month, surname, styleType);
    });

    document.getElementById('genMeaningBtn').addEventListener('click', function() {
        const surname = document.querySelector('#meaningSurnameGroup .style-radio.selected')?.dataset.meaningsurname || '李';
        const meaningType = document.querySelector('#meaningCategoryGroup .style-radio.selected')?.dataset.meaning || 'moral';
        const styleType = document.querySelector('#meaningStyleGroup .style-radio.selected')?.dataset.meaningstyle || 'single';
        renderMeaningWithAI(surname, meaningType, styleType);
    });

    document.getElementById('birthYear').addEventListener('change', function() {
        const year = this.value;
        const month = document.getElementById('birthMonth').value;
        const surname = document.querySelector('#surnameGroup .style-radio.selected')?.dataset.surname || '李';
        const styleType = document.querySelector('#nameStyleGroup .style-radio.selected')?.dataset.style || 'single';
        renderWuxingDefault(year, month, surname, styleType);
    });

    document.getElementById('birthMonth').addEventListener('change', function() {
        const year = document.getElementById('birthYear').value;
        const month = this.value;
        const surname = document.querySelector('#surnameGroup .style-radio.selected')?.dataset.surname || '李';
        const styleType = document.querySelector('#nameStyleGroup .style-radio.selected')?.dataset.style || 'single';
        renderWuxingDefault(year, month, surname, styleType);
    });

    const defaultSurname = document.querySelector('#surnameGroup .style-radio.selected')?.dataset.surname || '李';
    const defaultStyle = document.querySelector('#nameStyleGroup .style-radio.selected')?.dataset.style || 'single';
    renderWuxingDefault('', '', defaultSurname, defaultStyle);

    const meaningSurname = document.querySelector('#meaningSurnameGroup .style-radio.selected')?.dataset.meaningsurname || '李';
    const meaningType = document.querySelector('#meaningCategoryGroup .style-radio.selected')?.dataset.meaning || 'moral';
    const meaningStyle = document.querySelector('#meaningStyleGroup .style-radio.selected')?.dataset.meaningstyle || 'single';
    renderMeaningDefault(meaningSurname, meaningType, meaningStyle);
});

function shareTo(platform) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Chinese Name Generator Female - Free Five Elements & Meaning-based Name Generator');
    let shareUrl = '';

    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`;
            break;
        case 'x':
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
            break;
        case 'pinterest':
            shareUrl = `https://pinterest.com/pin/create/button/?url=${url}&description=${title}`;
            break;
        case 'reddit':
            shareUrl = `https://reddit.com/submit?url=${url}&title=${title}`;
            break;
        default:
            return;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
}

async function copyLink() {
    const url = window.location.href;
    try {
        await navigator.clipboard.writeText(url);
        const copyBtn = document.querySelector('.copy-btn');
        const originalText = copyBtn.querySelector('.social-text').textContent;
        copyBtn.querySelector('.social-text').textContent = 'Copied!';
        copyBtn.style.background = '#22c55e';
        setTimeout(() => {
            copyBtn.querySelector('.social-text').textContent = originalText;
            copyBtn.style.background = '#4a5568';
        }, 2000);
    } catch (err) {
        console.error('Failed to copy:', err);
        alert('Copy failed. Please copy manually: ' + url);
    }
}

// FAQ Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isOpen = answer.classList.contains('open');

            document.querySelectorAll('.faq-answer').forEach(a => {
                if (a !== answer) {
                    a.classList.remove('open');
                    a.previousElementSibling.classList.remove('active');
                }
            });

            if (isOpen) {
                answer.classList.remove('open');
                this.classList.remove('active');
            } else {
                answer.classList.add('open');
                this.classList.add('active');
            }
        });
    });
});