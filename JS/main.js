var zodiacEmojis = {
            Rat: '<img src="Images/rat.png" alt="Rat" class="zodiac-emoji" />', Ox: '<img src="Images/ox.png" alt="Ox" class="zodiac-emoji" />', Tiger: '<img src="Images/tiger.png" alt="Tiger" class="zodiac-emoji" />', Rabbit: '<img src="Images/rabbit.png" alt="Rabbit" class="zodiac-emoji" />',
            Dragon: '<img src="Images/dragon.png" alt="Dragon" class="zodiac-emoji" />', Snake: '<img src="Images/snake.png" alt="Snake" class="zodiac-emoji" />', Horse: '<img src="Images/horse.png" alt="Horse" class="zodiac-emoji" />', Goat: '<img src="Images/goat.png" alt="Goat" class="zodiac-emoji" />',
            Monkey: '<img src="Images/monkey.png" alt="Monkey" class="zodiac-emoji" />', Rooster: '<img src="Images/rooster.png" alt="Rooster" class="zodiac-emoji" />', Dog: '<img src="Images/dog.png" alt="Dog" class="zodiac-emoji" />', Pig: '<img src="Images/pig.png" alt="Pig" class="zodiac-emoji" />'
        };

        var zodiacTraits = {
            Rat: { type: 'Quick-Witted', desc: 'Smart, resourceful, and ambitious. Rats work hard and value security - key traits in Chinese zodiac couples.' },
            Ox: { type: 'Reliable', desc: 'Hardworking, patient, and steadfast. Oxen bring stability and are deeply loyal partners in relationships.' },
            Tiger: { type: 'Brave', desc: 'Confident, passionate, and adventurous. Tigers are natural leaders who protect loved ones in Chinese zodiac couples.' },
            Rabbit: { type: 'Gentle', desc: 'Kind, compassionate, and harmonious. Rabbits seek peace and create warm homes for Chinese zodiac couples.' },
            Dragon: { type: 'Charismatic', desc: 'Confident, ambitious, and inspiring. Dragons dream big and energize relationships.' },
            Snake: { type: 'Intuitive', desc: 'Intelligent, mysterious, and deep. Snakes value wisdom and are devoted when committed to relationships.' },
            Horse: { type: 'Energetic', desc: 'Independent, optimistic, and lively. Horses love freedom and bring excitement to relationships.' },
            Goat: { type: 'Artistic', desc: 'Gentle, empathetic, and creative. Goats are caring partners who prioritize harmony in relationships.' },
            Monkey: { type: 'Clever', desc: 'Curious, playful, and adaptable. Monkeys keep things fun and bring creativity to relationships.' },
            Rooster: { type: 'Confident', desc: 'Organized, honest, and hardworking. Roosters pay attention to detail and are loyal in relationships.' },
            Dog: { type: 'Loyal', desc: 'Trustworthy, protective, and faithful. Dogs are devoted partners who value honesty in relationships.' },
            Pig: { type: 'Generous', desc: 'Kind, optimistic, and enjoy life. Pigs are supportive companions who bring warmth to relationships.' }
        };

        var zodiacYears = {
            Rat: '1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020',
            Ox: '1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021',
            Tiger: '1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022',
            Rabbit: '1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023',
            Dragon: '1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024',
            Snake: '1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025',
            Horse: '1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026',
            Goat: '1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027',
            Monkey: '1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028',
            Rooster: '1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029',
            Dog: '1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030',
            Pig: '1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031'
        };

        var bestMatches = {
            Rat: ['Monkey', 'Ox', 'Dragon'],
            Ox: ['Snake', 'Rooster', 'Rat', 'Ox'],
            Tiger: ['Horse', 'Dog', 'Tiger'],
            Rabbit: ['Goat', 'Dog', 'Pig', 'Rabbit'],
            Dragon: ['Rat', 'Rooster', 'Monkey'],
            Snake: ['Ox', 'Rooster'],
            Horse: ['Tiger', 'Goat', 'Dog'],
            Goat: ['Rabbit', 'Horse', 'Pig'],
            Monkey: ['Rat', 'Dragon', 'Snake'],
            Rooster: ['Ox', 'Dragon', 'Snake'],
            Dog: ['Tiger', 'Rabbit', 'Horse'],
            Pig: ['Goat', 'Rabbit', 'Tiger']
        };

        var worstMatches = {
            Rat: ['Horse', 'Goat', 'Rabbit', 'Rooster'],
            Ox: ['Horse', 'Goat', 'Dragon', 'Dog'],
            Tiger: ['Monkey', 'Snake'],
            Rabbit: ['Rat', 'Rooster', 'Ox', 'Dragon'],
            Dragon: ['Rabbit', 'Dog', 'Ox', 'Dragon'],
            Snake: ['Monkey', 'Pig', 'Tiger'],
            Horse: ['Rat', 'Ox', 'Rabbit', 'Horse'],
            Goat: ['Ox', 'Dog', 'Goat'],
            Monkey: ['Tiger', 'Pig'],
            Rooster: ['Rabbit', 'Dog', 'Rooster'],
            Dog: ['Goat', 'Dragon', 'Rooster', 'Ox'],
            Pig: ['Monkey', 'Snake', 'Pig']
        };

        var pairDescriptions = {
            'Rat-Monkey': 'The Rat and Monkey are deeply in love. Their married life is happy and fulfilling, they become great partners at work, and it is not easy for them to be separated.',
            'Rat-Ox': 'The Rat and Ox are deeply in love. Their married life is happy and fulfilling, they become great partners at work, and it is not easy for them to be separated.',
            'Rat-Dragon': 'The Rat and Dragon are deeply in love. Their married life is happy and fulfilling, they become great partners at work, and it is not easy for them to be separated.',
            'Rat-Horse': 'The Rat and Horse have an unsatisfactory married life. They cannot rely on each other at all, and may even feel burdened by each other.',
            'Rat-Goat': 'The Rat and Goat have an unsatisfactory married life. They cannot rely on each other at all, and may even feel burdened by each other.',
            'Rat-Rabbit': 'The Rat and Rabbit have an unsatisfactory married life. They cannot rely on each other at all, and may even feel burdened by each other.',
            'Rat-Rooster': 'The Rat and Rooster have an unsatisfactory married life. They cannot rely on each other at all, and may even feel burdened by each other.',
            'Ox-Snake': 'The Ox and Snake are a divinely ordained couple. They help each other after marriage, family income keeps increasing, and arguments are rare.',
            'Ox-Rooster': 'The Ox and Rooster are a divinely ordained couple. They help each other after marriage, family income keeps increasing, and arguments are rare.',
            'Ox-Rat': 'The Ox and Rat are a divinely ordained couple. They help each other after marriage, family income keeps increasing, and arguments are rare.',
            'Ox-Ox': 'The Ox and Ox are a divinely ordained couple. They help each other after marriage, family income keeps increasing, and arguments are rare.',
            'Ox-Horse': 'The Ox and Horse argue constantly soon after marriage. Life becomes even more unsatisfactory after having children. Not suitable for each other.',
            'Ox-Goat': 'The Ox and Goat argue constantly soon after marriage. Life becomes even more unsatisfactory after having children. Not suitable for each other.',
            'Ox-Dragon': 'The Ox and Dragon argue constantly soon after marriage. Life becomes even more unsatisfactory after having children. Not suitable for each other.',
            'Ox-Dog': 'The Ox and Dog argue constantly soon after marriage. Life becomes even more unsatisfactory after having children. Not suitable for each other.',
            'Tiger-Horse': 'The Tiger and Horse have a happy and fulfilling marriage. They understand how to care for each other\'s feelings and love grows stronger over time.',
            'Tiger-Dog': 'The Tiger and Dog have a happy and fulfilling marriage. They understand how to care for each other\'s feelings and love grows stronger over time.',
            'Tiger-Tiger': 'The Tiger and Tiger have a happy and fulfilling marriage. They understand how to care for each other\'s feelings and love grows stronger over time.',
            'Tiger-Monkey': 'The Tiger and Monkey face various problems in married life. Their relationship is strained, they often quarrel over trivial matters, and cannot live a stable life.',
            'Tiger-Snake': 'The Tiger and Snake face various problems in married life. Their relationship is strained, they often quarrel over trivial matters, and cannot live a stable life.',
            'Rabbit-Goat': 'The Rabbit and Goat have a smooth marriage. They help and care for each other after marriage, and will not easily give up on their relationship.',
            'Rabbit-Dog': 'The Rabbit and Dog have a smooth marriage. They help and care for each other after marriage, and will not easily give up on their relationship.',
            'Rabbit-Pig': 'The Rabbit and Pig have a smooth marriage. They help and care for each other after marriage, and will not easily give up on their relationship.',
            'Rabbit-Rabbit': 'The Rabbit and Rabbit have a smooth marriage. They help and care for each other after marriage, and will not easily give up on their relationship.',
            'Rabbit-Rat': 'The Rabbit and Rat have an unhappy married life. They easily bring trouble to each other, struggle in their careers, and suffer greatly.',
            'Rabbit-Rooster': 'The Rabbit and Rooster have an unhappy married life. They easily bring trouble to each other, struggle in their careers, and suffer greatly.',
            'Rabbit-Ox': 'The Rabbit and Ox have an unhappy married life. They easily bring trouble to each other, struggle in their careers, and suffer greatly.',
            'Rabbit-Dragon': 'The Rabbit and Dragon have an unhappy married life. They easily bring trouble to each other, struggle in their careers, and suffer greatly.',
            'Dragon-Rat': 'The Dragon and Rat get along harmoniously. They never quarrel and become the model couple in others\' eyes.',
            'Dragon-Rooster': 'The Dragon and Rooster get along harmoniously. They never quarrel and become the model couple in others\' eyes.',
            'Dragon-Monkey': 'The Dragon and Monkey get along harmoniously. They never quarrel and become the model couple in others\' eyes.',
            'Dragon-Rabbit': 'The Dragon and Rabbit cannot communicate well. They quarrel at the slightest disagreement, bring trouble to each other, and find it hard to feel love.',
            'Dragon-Dog': 'The Dragon and Dog cannot communicate well. They quarrel at the slightest disagreement, bring trouble to each other, and find it hard to feel love.',
            'Dragon-Ox': 'The Dragon and Ox cannot communicate well. They quarrel at the slightest disagreement, bring trouble to each other, and find it hard to feel love.',
            'Dragon-Dragon': 'The Dragon and Dragon cannot communicate well. They quarrel at the slightest disagreement, bring trouble to each other, and find it hard to feel love.',
            'Snake-Ox': 'The Snake and Ox are truly a match made in heaven. Destined to be together forever, they will not stray no matter how many temptations come their way.',
            'Snake-Rooster': 'The Snake and Rooster are truly a match made in heaven. Destined to be together forever, they will not stray no matter how many temptations come their way.',
            'Snake-Monkey': 'The Snake and Monkey lose interest in each other after marriage. They are always indifferent, lack responsibility, and are unwilling to care for their family and children.',
            'Snake-Pig': 'The Snake and Pig lose interest in each other after marriage. They are always indifferent, lack responsibility, and are unwilling to care for their family and children.',
            'Snake-Tiger': 'The Snake and Tiger lose interest in each other after marriage. They are always indifferent, lack responsibility, and are unwilling to care for their family and children.',
            'Horse-Tiger': 'The Horse and Tiger stay together forever once they hold hands. Their married life is harmonious and happy, bringing each other full of security.',
            'Horse-Goat': 'The Horse and Goat stay together forever once they hold hands. Their married life is harmonious and happy, bringing each other full of security.',
            'Horse-Dog': 'The Horse and Dog stay together forever once they hold hands. Their married life is harmonious and happy, bringing each other full of security.',
            'Horse-Rat': 'The Horse and Rat face marital changes in middle age and find it difficult to grow old together.',
            'Horse-Ox': 'The Horse and Ox face marital changes in middle age and find it difficult to grow old together.',
            'Horse-Rabbit': 'The Horse and Rabbit face marital changes in middle age and find it difficult to grow old together.',
            'Horse-Horse': 'The Horse and Horse face marital changes in middle age and find it difficult to grow old together.',
            'Goat-Rabbit': 'The Goat and Rabbit are destined for a happy life. They have high understanding, help each other greatly, and achieve greater success in their careers.',
            'Goat-Horse': 'The Goat and Horse are destined for a happy life. They have high understanding, help each other greatly, and achieve greater success in their careers.',
            'Goat-Pig': 'The Goat and Pig are destined for a happy life. They have high understanding, help each other greatly, and achieve greater success in their careers.',
            'Goat-Ox': 'The Goat and Ox have difficulty maintaining a stable married life. They bring trouble to each other after marriage, communication is not good, and they do not pay much attention to their children.',
            'Goat-Dog': 'The Goat and Dog have difficulty maintaining a stable married life. They bring trouble to each other after marriage, communication is not good, and they do not pay much attention to their children.',
            'Goat-Goat': 'The Goat and Goat have difficulty maintaining a stable married life. They bring trouble to each other after marriage, communication is not good, and they do not pay much attention to their children.',
            'Monkey-Rat': 'The Monkey and Rat are a perfect match. The more they get along, the more inseparable they become. They give each other infinite tenderness and love, and are willing to take care of each other for a lifetime.',
            'Monkey-Dragon': 'The Monkey and Dragon are a perfect match. The more they get along, the more inseparable they become. They give each other infinite tenderness and love, and are willing to take care of each other for a lifetime.',
            'Monkey-Snake': 'The Monkey and Snake are a perfect match. The more they get along, the more inseparable they become. They give each other infinite tenderness and love, and are willing to take care of each other for a lifetime.',
            'Monkey-Tiger': 'The Monkey and Tiger face many disasters after marriage. They find it difficult to stay together until old age, and usually separate in middle age.',
            'Monkey-Pig': 'The Monkey and Pig face many disasters after marriage. They find it difficult to stay together until old age, and usually separate in middle age.',
            'Rooster-Ox': 'The Rooster and Ox have a good married life. Even if they are not wealthy, they love each other deeply and become the most compatible couple in others\' eyes.',
            'Rooster-Dragon': 'The Rooster and Dragon have a good married life. Even if they are not wealthy, they love each other deeply and become the most compatible couple in others\' eyes.',
            'Rooster-Snake': 'The Rooster and Snake have a good married life. Even if they are not wealthy, they love each other deeply and become the most compatible couple in others\' eyes.',
            'Rooster-Rabbit': 'The Rooster and Rabbit find it difficult to get along harmoniously. They are extremely selfish in their relationship and quarrel frequently.',
            'Rooster-Dog': 'The Rooster and Dog find it difficult to get along harmoniously. They are extremely selfish in their relationship and quarrel frequently.',
            'Rooster-Rooster': 'The Rooster and Rooster find it difficult to get along harmoniously. They are extremely selfish in their relationship and quarrel frequently.',
            'Dog-Tiger': 'The Dog and Tiger are simply a match made in heaven. The family is happy, they cooperate with each other, and never let each other down.',
            'Dog-Rabbit': 'The Dog and Rabbit are simply a match made in heaven. The family is happy, they cooperate with each other, and never let each other down.',
            'Dog-Horse': 'The Dog and Horse are simply a match made in heaven. The family is happy, they cooperate with each other, and never let each other down.',
            'Dog-Goat': 'The Dog and Goat face many disasters after marriage. Financial luck is unsatisfactory, life is very difficult, and they are not suitable to be together.',
            'Dog-Dragon': 'The Dog and Dragon face many disasters after marriage. Financial luck is unsatisfactory, life is very difficult, and they are not suitable to be together.',
            'Dog-Rooster': 'The Dog and Rooster face many disasters after marriage. Financial luck is unsatisfactory, life is very difficult, and they are not suitable to be together.',
            'Dog-Ox': 'The Dog and Ox face many disasters after marriage. Financial luck is unsatisfactory, life is very difficult, and they are not suitable to be together.',
            'Pig-Goat': 'The Pig and Goat live a prosperous life. They love each other more and more, the family atmosphere is very warm, and they receive care from their children and grandchildren.',
            'Pig-Rabbit': 'The Pig and Rabbit live a prosperous life. They love each other more and more, the family atmosphere is very warm, and they receive care from their children and grandchildren.',
            'Pig-Tiger': 'The Pig and Tiger live a prosperous life. They love each other more and more, the family atmosphere is very warm, and they receive care from their children and grandchildren.',
            'Pig-Monkey': 'The Pig and Monkey find it difficult to stay married till the end. They are unwilling to change for each other and separate after constant quarrels.',
            'Pig-Snake': 'The Pig and Snake find it difficult to stay married till the end. They are unwilling to change for each other and separate after constant quarrels.',
            'Pig-Pig': 'The Pig and Pig find it difficult to stay married till the end. They are unwilling to change for each other and separate after constant quarrels.'
        };

        function checkCompatibility() {
            var sign1 = document.getElementById('sign1').value;
            var sign2 = document.getElementById('sign2').value;

            if (!sign1 || !sign2) {
                alert('Please select both zodiac signs to check compatibility.');
                return;
            }

            var score = calculateScore(sign1, sign2);
            var description = getDescription(sign1, sign2);
            var badgeClass = score >= 85 ? 'excellent' : score >= 65 ? 'good' : 'challenging';
            var badgeText = score >= 85 ? 'Excellent Match' : score >= 65 ? 'Good Match' : 'Challenging Pair';

            console.log('Signs:', sign1, sign2);
            console.log('Score:', score);
            console.log('Description:', description);

            document.getElementById('matchTitle').textContent = sign1 + ' & ' + sign2 + ' Compatibility';
            document.getElementById('matchSigns').innerHTML = zodiacEmojis[sign1] + ' ' + sign1 + ' + ' + zodiacEmojis[sign2] + ' ' + sign2;
            document.getElementById('scoreValue').textContent = score + '%';
            document.getElementById('scoreBadge').textContent = badgeText;
            document.getElementById('scoreBadge').className = 'score-badge ' + badgeClass;
            document.getElementById('resultDesc').textContent = description;

            document.getElementById('traitEmoji1').innerHTML = zodiacEmojis[sign1];
            document.getElementById('traitName1').textContent = sign1;
            document.getElementById('traitDesc1').textContent = zodiacTraits[sign1].type + ' - ' + zodiacTraits[sign1].desc;

            document.getElementById('traitEmoji2').innerHTML = zodiacEmojis[sign2];
            document.getElementById('traitName2').textContent = sign2;
            document.getElementById('traitDesc2').textContent = zodiacTraits[sign2].type + ' - ' + zodiacTraits[sign2].desc;

            var dimensions = calculateDimensions(score);
            document.getElementById('emotionStars').textContent = dimensions.emotion;
            document.getElementById('communicationStars').textContent = dimensions.communication;
            document.getElementById('valuesStars').textContent = dimensions.values;
            document.getElementById('intimacyStars').textContent = dimensions.intimacy;

            document.getElementById('conclusionText').textContent = getConclusion(sign1, sign2, score);

            var resultBox = document.getElementById('resultBox');
            resultBox.classList.add('show');
            resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        function calculateDimensions(score) {
            var baseStars = Math.floor(score / 20);
            var variance = Math.floor(Math.random() * 2) - 1;
            
            return {
                emotion: getStarString(Math.min(5, Math.max(1, baseStars + (Math.floor(Math.random() * 2) - 1)))),
                communication: getStarString(Math.min(5, Math.max(1, baseStars + (Math.floor(Math.random() * 2) - 1)))),
                values: getStarString(Math.min(5, Math.max(1, baseStars + (Math.floor(Math.random() * 2) - 1)))),
                intimacy: getStarString(Math.min(5, Math.max(1, baseStars + (Math.floor(Math.random() * 2) - 1))))
            };
        }

        function getStarString(count) {
            return '\u2605'.repeat(count) + '\u2606'.repeat(5 - count);
        }

        function getConclusion(sign1, sign2, score) {
            var isBestMatch = (bestMatches[sign1] && bestMatches[sign1].indexOf(sign2) !== -1) || 
                             (bestMatches[sign2] && bestMatches[sign2].indexOf(sign1) !== -1);
            var isWorstMatch = (worstMatches[sign1] && worstMatches[sign1].indexOf(sign2) !== -1) || 
                              (worstMatches[sign2] && worstMatches[sign2].indexOf(sign1) !== -1);
            
            if (isBestMatch) {
                return 'Excellent match! ' + sign1 + ' and ' + sign2 + ' are highly compatible. You two will love each other deeply, enjoy a happy married life, and become great partners at work. This is a divine union that brings mutual support, increasing family income, and minimal conflicts.';
            } else if (isWorstMatch) {
                return 'Challenging pairing. ' + sign1 + ' and ' + sign2 + ' may face difficulties in marriage. Life together may be unsatisfactory, with constant arguments and struggles. Communication issues could arise frequently, making it hard to feel love and stability. Consider working hard on understanding and compromise.';
            } else {
                return 'This ' + sign1 + ' and ' + sign2 + ' pairing has unique dynamics. With understanding and effort, you can build a meaningful relationship. Focus on communication and mutual respect to strengthen your bond.';
            }
        }

        function calculateScore(z1, z2) {
            var isBest1 = bestMatches[z1] && bestMatches[z1].indexOf(z2) !== -1;
            var isBest2 = bestMatches[z2] && bestMatches[z2].indexOf(z1) !== -1;
            var isWorst1 = worstMatches[z1] && worstMatches[z1].indexOf(z2) !== -1;
            var isWorst2 = worstMatches[z2] && worstMatches[z2].indexOf(z1) !== -1;

            if (isBest1 && isBest2) return 92 + Math.floor(Math.random() * 8);
            if (isBest1 || isBest2) return 80 + Math.floor(Math.random() * 10);
            if (isWorst1 && isWorst2) return 22 + Math.floor(Math.random() * 8);
            if (isWorst1 || isWorst2) return 32 + Math.floor(Math.random() * 13);
            return 55 + Math.floor(Math.random() * 20);
        }

        function getDescription(z1, z2) {
            var key1 = z1 + '-' + z2;
            var key2 = z2 + '-' + z1;
            return pairDescriptions[key1] || pairDescriptions[key2] || 'This ' + z1 + ' and ' + z2 + ' pairing has unique dynamics. With understanding and effort, you can build a meaningful relationship.';
        }

        function buildSignsGrid() {
            var grid = document.getElementById('signsGrid');
            var signs = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];

            signs.forEach(function(sign) {
                var best = bestMatches[sign] || [];
                var worst = worstMatches[sign] || [];

                var bestSigns = best.map(function(s) {
                    return '<span class="match-sign">' + zodiacEmojis[s] + ' ' + s + '</span>';
                }).join('');

                var worstSigns = worst.map(function(s) {
                    return '<span class="match-sign">' + zodiacEmojis[s] + ' ' + s + '</span>';
                }).join('');

                grid.innerHTML += '<div class="sign-card">' +
                    '<div class="sign-header">' +
                    '<span class="sign-emoji">' + zodiacEmojis[sign] + '</span>' +
                    '<div>' +
                    '<div class="sign-name">' + sign + '</div>' +
                    '<div class="sign-years">' + zodiacYears[sign] + '</div>' +
                    '</div>' +
                    '</div>' +
                    '<p class="trait-desc">' + zodiacTraits[sign].type + ' - ' + zodiacTraits[sign].desc + '</p>' +
                    '<div class="match-section">' +
                    '<div class="match-label best">Best Match</div>' +
                    '<div class="match-signs">' + bestSigns + '</div>' +
                    '</div>' +
                    '<div class="match-section">' +
                    '<div class="match-label challenge">Challenging</div>' +
                    '<div class="match-signs">' + worstSigns + '</div>' +
                    '</div>' +
                    '</div>';
            });
        }

        buildSignsGrid();