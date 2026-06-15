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

    const pinyinMap = {
        "李":"Lǐ","王":"Wáng","张":"Zhāng","刘":"Liú","陈":"Chén","杨":"Yáng","赵":"Zhào","黄":"Huáng","周":"Zhōu","吴":"Wú","徐":"Xú","孙":"Sūn","胡":"Hú","朱":"Zhū","高":"Gāo","林":"Lín","何":"Hé","郭":"Guō","马":"Mǎ","罗":"Luó","许":"Xǔ","邓":"Dèng","曹":"Cáo","彭":"Péng","曾":"Zēng","肖":"Xiāo","田":"Tián","董":"Dǒng","潘":"Pān","袁":"Yuán","欧阳":"Ōuyáng","司马":"Sīmǎ","上官":"Shàngguān","皇甫":"Huángfǔ","令狐":"Lìnghú","诸葛":"Zhūgě",
        "瑞":"Ruì","铭":"Míng","锐":"Ruì","泽":"Zé","锦":"Jǐn","轩":"Xuān","柏":"Bǎi","森":"Sēn","浩":"Hào","宇":"Yǔ","鸿":"Hóng","炎":"Yán","旭":"Xù","煜":"Yù","圣":"Shèng","峻":"Jùn","安":"Ān","辰":"Chén","坤":"Kūn","铮":"Zhēng","钧":"Jūn","锋":"Fēng","银":"Yín","梓":"Zǐ","桐":"Tóng","栋":"Dòng","楷":"Kǎi","松":"Sōng","瀚":"Hàn","润":"Rùn","沐":"Mù","清":"Qīng","滔":"Tāo","彬":"Bīn","尧":"Yáo","城":"Chéng","昊":"Hào","昱":"Yù","炜":"Wěi","宸":"Chén","哲":"Zhé","峰":"Fēng","维":"Wéi","远":"Yuǎn","楠":"Nán","桓":"Huán","杉":"Shān","槿":"Jǐn","渊":"Yuān","潇":"Xiāo","汐":"Xī","潞":"Lù","炫":"Xuàn","焱":"Yàn","炅":"Jiǒng","熠":"Yì","垚":"Yáo","埕":"Chéng","墉":"Yōng","圻":"Qí","钰":"Yù","铖":"Chéng","镕":"Róng","铎":"Duó","晖":"Huī","瑜":"Yú","霖":"Lín","澜":"Lán","智":"Zhì","慧":"Huì","聪":"Cōng","颖":"Yǐng","睿":"Ruì","思":"Sī","敏":"Mǐn","博":"Bó","学":"Xué","文":"Wén","雅":"Yǎ","才":"Cái","明":"Míng","悟":"Wù","彦":"Yàn","儒":"Rú","富":"Fù","贵":"Guì","财":"Cái","禄":"Lù","丰":"Fēng","盈":"Yíng","盛":"Shèng","福":"Fú","鑫":"Xīn","荣":"Róng","华":"Huá","宝":"Bǎo","金":"Jīn","裕":"Yù","昌":"Chāng","旺":"Wàng","进":"Jìn","达":"Dá","贤":"Xián","德":"Dé","仁":"Rén","义":"Yì","诚":"Chéng","志":"Zhì","豪":"Háo","功":"Gōng","业":"Yè","和":"Hé","康":"Kāng","平":"Píng","宁":"Níng","健":"Jiàn","泰":"Tài","寿":"Shòu","吉":"Jí","铭铭":"Míng Míng","瑞瑞":"Ruì Ruì","浩浩":"Hào Hào"
    };
    const elementBrief = {
        "金": "Metal — symbolizes strength, clarity, and decisiveness.",
        "木": "Wood — symbolizes growth, vitality, and upward energy.",
        "水": "Water — symbolizes wisdom, flexibility, and flow.",
        "火": "Fire — symbolizes passion, brilliance, and warmth.",
        "土": "Earth — symbolizes stability, nourishment, and reliability."
    };
    const meaningLabels = { "moral": "Moral Cultivation", "career": "Career & Ambition", "health": "Health & Safety", "wisdom": "Wisdom & Intelligence", "wealth": "Wealth & Prosperity" };
    const optionLabels = ["Option 1","Option 2","Option 3","Option 4","Option 5"];

    const elementSingleChars = {
        "金": ["瑞","铭","锐","钧","锦","锋","银","铮","钰","铖","镕","铎"],
        "木": ["梓","林","柏","森","桐","栋","楷","松","楠","桓","杉","槿"],
        "水": ["浩","泽","鸿","瀚","润","沐","清","滔","渊","潇","汐","潞"],
        "火": ["炎","煜","旭","昂","昊","昱","烁","炜","炫","焱","炅","熠"],
        "土": ["圣","峻","宇","安","维","辰","坤","磊","垚","埕","墉","圻"]
    };
    const elementDoubleNames = {
        "金": ["瑞铭","锐泽","锦程","铭凯","钧瀚","锋锐","锦鸿","钰锋","铮然","镕朗"],
        "木": ["梓轩","林栩","柏豪","森荣","栋梁","楷瑞","楠晖","桓瑜","杉霖","槿之"],
        "水": ["浩宇","泽洋","鸿涛","润泽","清源","沐轩","渊博","潇然","汐文","潞川"],
        "火": ["炎彬","旭尧","煜城","昊然","昱辉","炜宸","炫明","焱之","炅熙","熠辰"],
        "土": ["圣哲","峻峰","宇轩","安辰","维远","坤舆","垚坤","埕宇","墉安","圻昊"]
    };
    const reduplicateMap = {
        "金": ["铭铭","瑞瑞","钧钧","铮铮","锦锦","锋锋"],
        "木": ["林林","森森","彬彬","松松","楠楠","楷楷"],
        "水": ["浩浩","泽泽","源源","清清","潇潇","潞潞"],
        "火": ["炎炎","灿灿","炜炜","昱昱","昊昊","熠熠"],
        "土": ["安安","辰辰","维维","坤坤","垚垚","墉墉"]
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
        return `Zodiac: ${zodiac} (${zodiacElem} element) | Season: ${seasonElem} | Preferred Element: ${mainElem}. ${elementBrief[mainElem] || ""} Names have been selected based on this analysis.`;
    }
    
    function generateSingleName(surname, mainElement) {
        const chars = elementSingleChars[mainElement] || elementSingleChars["土"];
        const picked = chars[Math.floor(Math.random() * chars.length)];
        const full = surname + picked;
        const pinyinBase = `${pinyinSmart(surname)} ${pinyinSmart(picked)}`;
        return { name: full, pinyin: pinyinBase, meaning: `Single character name with ${mainElement} element. The character ${picked} symbolizes strength and simplicity.` };
    }
    
    function generateDoubleName(surname, mainElement) {
        const pairs = elementDoubleNames[mainElement] || elementDoubleNames["土"];
        const chosen = pairs[Math.floor(Math.random() * pairs.length)];
        const full = surname + chosen;
        const pinyinPart = pinyinSmart(chosen);
        return { name: full, pinyin: `${pinyinSmart(surname)} ${pinyinPart}`, meaning: `Classic double-character name with ${mainElement} element. Implies stability and auspicious prospects.` };
    }
    
    function generateReduplicateName(surname, mainElement) {
        const redupList = reduplicateMap[mainElement] || reduplicateMap["土"];
        const base = redupList[Math.floor(Math.random() * redupList.length)];
        const full = surname + base;
        const pinyinBase = pinyinSmart(base);
        return { name: full, pinyin: `${pinyinSmart(surname)} ${pinyinBase}`, meaning: `Reduplicate name with ${mainElement} element. Implies warmth, kindness, and harmonious relationships.` };
    }
    
    function pinyinSmart(str) {
        if(!str) return "";
        let result = "";
        for(let i = 0, len = str.length; i < len; i++) {
            result += (pinyinMap[str[i]] || str[i]) + " ";
        }
        return result.trim();
    }

    const meaningNameMap = {
        "moral": {
            "single": ["瑞","铭","锐","泽","锦","钧","锋","圣","峻","安","辰","坤","昊","炜","耀","贤","德","仁","义","诚"],
            "double": ["瑞铭","锐泽","锦程","钧瀚","锋锐","铭凯","钧平","锐志","圣哲","峻峰","宇轩","安和","辰康","坤舆","哲宇","耀明","贤达","德馨","仁和","义诚"],
            "reduplicate": ["安安","瑞瑞","铭铭","泽泽","平平","明明","光光","康康","宁宁","和和"]
        },
        "career": {
            "single": ["铭","锐","泽","锦","钧","锋","志","豪","荣","栋","楷","松","桐","浩","鸿","炎","旭","煜","昱","炜","圣","峻","安","辰","坤","昊","耀","功","业","达"],
            "double": ["铭凯","锐泽","锦程","钧瀚","锋锐","瑞安","铭志","锐进","梓轩","林栩","栋梁","森荣","楷瑞","松云","桐林","榕城","浩宇","泽洋","鸿涛","润泽","炎彬","旭尧","煜城","昊然","昱辉","炜宸","熠辉","耀鹏","圣哲","峻峰","宇轩","安辰","坤舆","哲宇","功成","业辉","达志","鸿业","鹏程"],
            "reduplicate": ["安安","志志","豪豪","荣荣","栋栋","楷楷","松松","桐桐","浩浩","鸿鸿","旭旭","明明","耀耀","程程","凯凯","达达"]
        },
        "health": {
            "single": ["瑞","铭","泽","钧","锐","和","安","康","平","宁","和","福","林","柏","森","桐","浩","润","清","沐","炎","旭","煜","昊","昱","炜","圣","峻","辰","坤","哲","健","泰","寿","吉"],
            "double": ["瑞安","铭泽","钧安","锐和","锦安","铭康","瑞康","平和","林安","柏康","森安","桐康","栋康","楷安","松安","林康","浩安","泽安","润康","清安","沐安","润和","浩康","泽康","炎安","旭康","煜安","昊安","昱康","炜安","熠安","耀康","圣安","峻康","宇安","安福","辰康","坤安","哲安","健安","泰宁","寿康","吉康"],
            "reduplicate": ["安安","康康","平平","宁宁","和和","福福","静静","慢慢","稳稳","健健"]
        },
        "wisdom": {
            "single": ["智","慧","聪","颖","睿","哲","思","敏","博","学","文","雅","才","明","悟","聪","慧","睿","彦","儒"],
            "double": ["智慧","聪慧","颖悟","睿哲","思维","敏思","博学","文雅","才思","明慧","慧心","智博","敏慧","颖才","慧明","儒雅","彦博","学文","颖思","慧智"],
            "reduplicate": ["慧慧","聪聪","明明","敏敏","文文","博博","雅雅","颖颖"]
        },
        "wealth": {
            "single": ["富","贵","财","禄","丰","盈","盛","瑞","福","鑫","锦","荣","华","宝","金","裕","昌","旺","进","达"],
            "double": ["富贵","财禄","丰盈","盛瑞","福禄","锦华","瑞丰","荣华","富康","禄丰","盛华","财源","福盈","锦荣","丰瑞","裕昌","金瑞","旺财","进财","达贵","宝丰","盛荣","华锦","盈瑞"],
            "reduplicate": ["富贵","富富","盛盛","锦锦","荣荣","华华","金金","裕裕","昌昌","旺旺"]
        }
    };

    const meaningElements = {
        "moral": "金",
        "career": "木",
        "health": "水",
        "wisdom": "水",
        "wealth": "金"
    };

    const meaningDescriptions = {
        "moral": "moral cultivation and virtue",
        "career": "career ambition and success",
        "health": "health and safety",
        "wisdom": "wisdom and intelligence",
        "wealth": "wealth and prosperity"
    };

    const characterMeanings = {
        "瑞":"auspicious","铭":"inscribe","锐":"sharp","泽":"marsh","锦":"brocade","钧":"balance","锋":"edge","圣":"sage","峻":"lofty","安":"peace","辰":"star","坤":"earth","昊":"vast sky","炜":"brilliant","耀":"shine","贤":"virtuous","德":"virtue","仁":"benevolence","义":"righteous","诚":"sincere","志":"aspire","豪":"heroic","荣":"glory","栋":"pillar","楷":"model","松":"pine","桐":"paulownia","浩":"vast","鸿":"swan","炎":"flame","旭":"dawn","煜":"radiant","昱":"bright","功":"merit","业":"career","达":"achieve","和":"harmony","康":"health","平":"calm","宁":"serene","福":"blessing","林":"forest","柏":"cypress","森":"dense","清":"clear","沐":"bathe","哲":"wise","健":"strong","泰":"peaceful","寿":"longevity","吉":"lucky","智":"wisdom","慧":"intelligent","聪":"clever","颖":"talented","睿":"shrewd","思":"thought","敏":"keen","博":"broad","学":"study","文":"refined","雅":"elegant","才":"talent","明":"bright","悟":"enlighten","彦":"accomplished","儒":"scholarly","富":"rich","贵":"noble","财":"wealth","禄":"fortune","丰":"abundant","盈":"full","盛":"flourish","鑫":"prosperity","荣":"honor","华":"splendid","宝":"treasure","金":"gold","裕":"plentiful","昌":"prosperous","旺":"thriving","进":"advance","哲":"wise","彤":"crimson","烨":"sparkle","炅":"bright","晗":"dawn","曦":"sunrise","珩":"jade","璟":"gleam","珏":"jade pair","珂":"jade","珉":"jade stone","琛":"treasure","瑜":"jade virtue","琪":"fine jade","玮":"precious","珞":"jewelry","钧":"balance","铖":"sharp metal","镕":"molten","铎":"bell","钰":"jade","铿":"sonorous","铿":"resonant","彬":"refined","尧":"eminent","城":"city","宸":"imperial","峰":"peak","维":"preserve","远":"far","坤":"earth","垚":"lofty","埕":"vast","墉":"wall","圻":"boundary","渊":"deep","潇":"drizzle","汐":"tide","潞":"clear stream","炫":"dazzle","焱":"blaze","熠":"shimmer","桓":"stately","楠":"nan wood","杉":"cedar","槿":"hibiscus","晖":"radiance","瑜":"jade","霖":"rain","澜":"billow","烽":"beacon","炅":"brilliant","灿":"resplendent","熹":"dawn glow","烨":"sparkle","晗":"rosy dawn","曦":"sunlight","耿":"bright","曜":"shine","炙":"ardent"
    };

    function generateMeaningName(surname, meaningType, styleType) {
        const nameList = meaningNameMap[meaningType][styleType] || meaningNameMap[meaningType]["single"];
        const chosen = nameList[Math.floor(Math.random() * nameList.length)];
        const full = surname + chosen;
        const styleDesc = styleType === "single" ? "single character" : styleType === "double" ? "double character" : "reduplicate";
        const desc = meaningDescriptions[meaningType] || "positive meaning";
        return { name: full, pinyin: `${pinyinSmart(surname)} ${pinyinSmart(chosen)}`, meaning: `Meaning-based ${styleDesc} name representing ${desc}. The character ${chosen} embodies positive qualities.` };
    }

    function renderMeaningDefault(surname, meaningType, styleType) {
        const container = document.getElementById("meaningNameCards");
        if (!surname) { container.innerHTML = `<div class="name-card">Please select a surname</div>`; return; }
        const label = meaningLabels[meaningType] || "Meaning";
        const styleDesc = styleType === "single" ? "Single Character" : styleType === "double" ? "Double Character" : "Reduplicate";
        const surnamePinyin = pinyinSmart(surname);
        let html = `<div class="name-card"><div class="badge rec-badge">Surname</div><div class="chinese-name">${escapeHtml(surname)}<button class="audio-btn" onclick="playAudio('${escapeHtml(surname)}','${escapeHtml(surnamePinyin)}',this)"><span class="audio-icon">🔊</span></button></div><div class="pinyin">${escapeHtml(surnamePinyin)}</div><div class="meaning">${styleDesc} names for ${label}</div><div class="char-meaning">${escapeHtml(surname)}: surname</div></div>`;
        for (let i = 0; i < 5; i++) {
            const nameObj = generateMeaningName(surname, meaningType, styleType);
            let charDetail = "";
            const nameBody = nameObj.name.slice(surname.length);
            for (let j = 0; j < nameBody.length; j++) {
                charDetail += (j ? " · " : "") + nameBody[j] + ": " + (characterMeanings[nameBody[j]] || "noble");
            }
            charDetail = `<div class="char-meaning">${charDetail}</div>`;
            html += `<div class="name-card"><div class="badge">${optionLabels[i]}</div><div class="chinese-name">${escapeHtml(nameObj.name)}<button class="audio-btn" onclick="playAudio('${escapeHtml(nameObj.name)}','${escapeHtml(nameObj.pinyin)}',this)"><span class="audio-icon">🔊</span></button></div><div class="pinyin">${escapeHtml(nameObj.pinyin)}</div><div class="meaning">${escapeHtml(nameObj.meaning)}</div>${charDetail}</div>`;
        }
        container.innerHTML = html;
    }

    function renderWuxingDefault(year, month, surname, styleType) {
        const container = document.getElementById("wuxingNameCards");
        const analysisDiv = document.getElementById("wuxingAnalysis");
        
        const mainElem = year && month ? getWuxingMainElement(year, month) : "Wood";
        const analysisText = year && month ? getAnalysisText(year, month) : "Please select a birth date for personalized Five Elements analysis.";
        
        let finalSurname = surname.trim();
        if (finalSurname === "") finalSurname = "Li";

        let html = "";
        if (styleType === "double") {
            html = `<div class="name-card">
                <div class="badge rec-badge">Recommended</div>
                <div class="chinese-name">李明轩<span class="audio-btn" onclick="playAudio('李明轩','Li Mingxuan',this)"><span class="audio-icon">🔊</span></span></div>
                <div class="pinyin">Lǐ Míngxuān</div>
                <div class="meaning">Bright and elegant, with aspirations for wisdom</div>
                <div class="pronunciation">Pronunciation: Lee Ming-shwen</div>
            </div>
            <div class="name-card">
                <div class="badge">Alternative</div>
                <div class="chinese-name">李浩宇<span class="audio-btn" onclick="playAudio('李浩宇','Li Haoyu',this)"><span class="audio-icon">🔊</span></span></div>
                <div class="pinyin">Lǐ Hàoyǔ</div>
                <div class="meaning">Vast universe, broad-minded and ambitious</div>
                <div class="pronunciation">Pronunciation: Lee How-yu</div>
            </div>
            <div class="name-card">
                <div class="badge">Alternative</div>
                <div class="chinese-name">李俊杰<span class="audio-btn" onclick="playAudio('李俊杰','Li Junjie',this)"><span class="audio-icon">🔊</span></span></div>
                <div class="pinyin">Lǐ Jùnjié</div>
                <div class="meaning">Outstanding talent, noble character</div>
                <div class="pronunciation">Pronunciation: Lee Jwen-jyeh</div>
            </div>
            <div class="name-card">
                <div class="badge">Alternative</div>
                <div class="chinese-name">李睿哲<span class="audio-btn" onclick="playAudio('李睿哲','Li Ruizhe',this)"><span class="audio-icon">🔊</span></span></div>
                <div class="pinyin">Lǐ Ruìzhé</div>
                <div class="meaning">Wise and philosophical, deep insight</div>
                <div class="pronunciation">Pronunciation: Lee Rwey-jeh</div>
            </div>
            <div class="name-card">
                <div class="badge">Alternative</div>
                <div class="chinese-name">李锦程<span class="audio-btn" onclick="playAudio('李锦程','Li Jincheng',this)"><span class="audio-icon">🔊</span></span></div>
                <div class="pinyin">Lǐ Jǐnchéng</div>
                <div class="meaning">Bright future, prosperous journey</div>
                <div class="pronunciation">Pronunciation: Lee Jin-cheng</div>
            </div>`;
        } else if (styleType === "reduplicate") {
            html = `<div class="name-card">
                <div class="badge rec-badge">Recommended</div>
                <div class="chinese-name">李安安<span class="audio-btn" onclick="playAudio('李安安','Li Anan',this)"><span class="audio-icon">🔊</span></span></div>
                <div class="pinyin">Lǐ Ān'ān</div>
                <div class="meaning">Peaceful and tranquil, safe and sound</div>
                <div class="pronunciation">Pronunciation: Lee An-an</div>
            </div>
            <div class="name-card">
                <div class="badge">Alternative</div>
                <div class="chinese-name">李乐乐<span class="audio-btn" onclick="playAudio('李乐乐','Li Lele',this)"><span class="audio-icon">🔊</span></span></div>
                <div class="pinyin">Lǐ Lèlè</div>
                <div class="meaning">Joyful and happy, full of laughter</div>
                <div class="pronunciation">Pronunciation: Lee Leh-leh</div>
            </div>
            <div class="name-card">
                <div class="badge">Alternative</div>
                <div class="chinese-name">李轩轩<span class="audio-btn" onclick="playAudio('李轩轩','Li Xuanxuan',this)"><span class="audio-icon">🔊</span></span></div>
                <div class="pinyin">Lǐ Xuānxuān</div>
                <div class="meaning">Elegant and graceful, refined character</div>
                <div class="pronunciation">Pronunciation: Lee Shwen-shwen</div>
            </div>
            <div class="name-card">
                <div class="badge">Alternative</div>
                <div class="chinese-name">李宁宁<span class="audio-btn" onclick="playAudio('李宁宁','Li Ningning',this)"><span class="audio-icon">🔊</span></span></div>
                <div class="pinyin">Lǐ Níngníng</div>
                <div class="meaning">Calm and peaceful, with inner serenity</div>
                <div class="pronunciation">Pronunciation: Lee Ning-ning</div>
            </div>
            <div class="name-card">
                <div class="badge">Alternative</div>
                <div class="chinese-name">李康康<span class="audio-btn" onclick="playAudio('李康康','Li Kangkang',this)"><span class="audio-icon">🔊</span></span></div>
                <div class="pinyin">Lǐ Kāngkāng</div>
                <div class="meaning">Healthy and strong, full of vitality</div>
                <div class="pronunciation">Pronunciation: Lee Kahng-kahng</div>
            </div>`;
        } else {
            html = `<div class="name-card">
                <div class="badge rec-badge">Recommended</div>
                <div class="chinese-name">李轩<span class="audio-btn" onclick="playAudio('李轩','Li Xuan',this)"><span class="audio-icon">🔊</span></span></div>
                <div class="pinyin">Lǐ Xuān</div>
                <div class="meaning">Wood Element - Elegant and refined</div>
                <div class="pronunciation">Pronunciation: Lee Shwen</div>
            </div>
            <div class="name-card">
                <div class="badge">Alternative</div>
                <div class="chinese-name">李浩<span class="audio-btn" onclick="playAudio('李浩','Li Hao',this)"><span class="audio-icon">🔊</span></span></div>
                <div class="pinyin">Lǐ Hào</div>
                <div class="meaning">Water Element - Vast and profound</div>
                <div class="pronunciation">Pronunciation: Lee How</div>
            </div>
            <div class="name-card">
                <div class="badge">Alternative</div>
                <div class="chinese-name">李俊<span class="audio-btn" onclick="playAudio('李俊','Li Jun',this)"><span class="audio-icon">🔊</span></span></div>
                <div class="pinyin">Lǐ Jùn</div>
                <div class="meaning">Fire Element - Talented and outstanding</div>
                <div class="pronunciation">Pronunciation: Lee Jwen</div>
            </div>
            <div class="name-card">
                <div class="badge">Alternative</div>
                <div class="chinese-name">李睿<span class="audio-btn" onclick="playAudio('李睿','Li Rui',this)"><span class="audio-icon">🔊</span></span></div>
                <div class="pinyin">Lǐ Ruì</div>
                <div class="meaning">Water Element - Wise and perceptive</div>
                <div class="pronunciation">Pronunciation: Lee Rwey</div>
            </div>
            <div class="name-card">
                <div class="badge">Alternative</div>
                <div class="chinese-name">李铭<span class="audio-btn" onclick="playAudio('李铭','Li Ming',this)"><span class="audio-icon">🔊</span></span></div>
                <div class="pinyin">Lǐ Míng</div>
                <div class="meaning">Metal Element - Lasting and memorable</div>
                <div class="pronunciation">Pronunciation: Lee Ming</div>
            </div>`;
        }
        container.innerHTML = html;
        analysisDiv.innerHTML = `Analysis: ${analysisText}`;
        
        if (year && month) {
            let nameObj = null;
            if (styleType === "single") {
                nameObj = generateSingleName(finalSurname, mainElem);
            } else if (styleType === "double") {
                nameObj = generateDoubleName(finalSurname, mainElem);
            } else if (styleType === "reduplicate") {
                nameObj = generateReduplicateName(finalSurname, mainElem);
            } else {
                nameObj = generateDoubleName(finalSurname, mainElem);
            }
            const wuxingLabels = ["Recommended","Option 1","Option 2","Option 3","Option 4"];
            function buildCharDetail(fullName) {
                let detail = "";
                const body = fullName.slice(finalSurname.length);
                for (let j = 0; j < body.length; j++) {
                    detail += (j ? " · " : "") + body[j] + ": " + (characterMeanings[body[j]] || "noble");
                }
                return `<div class="char-meaning">${detail}</div>`;
            }
            html = `<div class="name-card"><div class="badge rec-badge">Recommended</div><div class="chinese-name">${escapeHtml(nameObj.name)}<button class="audio-btn" onclick="playAudio('${escapeHtml(nameObj.name)}','${escapeHtml(nameObj.pinyin)}',this)"><span class="audio-icon">🔊</span></button></div><div class="pinyin">${escapeHtml(nameObj.pinyin)}</div><div class="meaning">${escapeHtml(nameObj.meaning)}</div>${buildCharDetail(nameObj.name)}</div>`;
            const usedNames = new Set([nameObj.name]);
            for (let i = 1; i < 5; i++) {
                let extra;
                let attempts = 0;
                do {
                    if (styleType === "single") extra = generateSingleName(finalSurname, mainElem);
                    else if (styleType === "double") extra = generateDoubleName(finalSurname, mainElem);
                    else extra = generateReduplicateName(finalSurname, mainElem);
                    attempts++;
                } while (usedNames.has(extra.name) && attempts < 8);
                usedNames.add(extra.name);
                html += `<div class="name-card"><div class="badge">${wuxingLabels[i]}</div><div class="chinese-name">${escapeHtml(extra.name)}<button class="audio-btn" onclick="playAudio('${escapeHtml(extra.name)}','${escapeHtml(extra.pinyin)}',this)"><span class="audio-icon">🔊</span></button></div><div class="pinyin">${escapeHtml(extra.pinyin)}</div><div class="meaning">${escapeHtml(extra.meaning)}</div>${buildCharDetail(extra.name)}</div>`;
            }
            container.innerHTML = html;
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        const birthYearSelect = document.getElementById('birthYear');
        const birthMonthSelect = document.getElementById('birthMonth');
        const currentYear = new Date().getFullYear();
        
        birthYearSelect.innerHTML = '<option value="">Select Year</option>';
        const yearOptions = new Array(currentYear - 1949);
        for (let y = currentYear, idx = 0; y >= 1950; y--, idx++) {
            yearOptions[idx] = `<option value="${y}">${y}</option>`;
        }
        birthYearSelect.insertAdjacentHTML('beforeend', yearOptions.join(''));

        birthMonthSelect.innerHTML = '<option value="">Select Month</option>';
        const monthOptions = new Array(12);
        for (let m = 1, idx = 0; m <= 12; m++, idx++) {
            monthOptions[idx] = `<option value="${m}">${m}</option>`;
        }
        birthMonthSelect.insertAdjacentHTML('beforeend', monthOptions.join(''));

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
            
            renderWuxingDefault(year, month, surname, styleType);
        });

        document.getElementById('genMeaningBtn').addEventListener('click', function() {
            const surname = document.querySelector('#meaningSurnameGroup .style-radio.selected')?.dataset.meaningsurname || '李';
            const meaningType = document.querySelector('#meaningCategoryGroup .style-radio.selected')?.dataset.meaning || 'moral';
            const styleType = document.querySelector('#meaningStyleGroup .style-radio.selected')?.dataset.meaningstyle || 'single';
            renderMeaningDefault(surname, meaningType, styleType);
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

        // Mobile nav toggle
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', function() {
                const isOpen = navMenu.classList.toggle('active');
                navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            });
            navMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', function() {
                    navMenu.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', 'false');
                });
            });
        }

        // FAQ accordion
        document.querySelectorAll('.faq-question').forEach(btn => {
            btn.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                const isOpen = this.classList.toggle('active');
                if (answer && answer.classList.contains('faq-answer')) {
                    answer.classList.toggle('open', isOpen);
                }
            });
        });
    });

    function shareTo(platform) {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent('Chinese Name Generator Male - Free English to Chinese Male Name Generator');
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