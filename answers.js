// Have indicators of literal meaning and intended meaning and indicators to differentiate similarities
const answers = {
    food: [
        {ch: '苹果',  en: 'Apple', },
        {ch: '梨',  en: 'Pear', },
        {ch: '牛油果',  en: 'Avocado', },
        {ch: '柠檬',  en: 'Lemon', },
        {ch: '杏',  en: 'Apricot', },
        {ch: '香蕉',  en: 'Banana', },
        {ch: '蓝莓',  en: 'Blueberry', },
        {ch: '樱桃',  en: 'Cherry', },
        {ch: '椰子',  en: 'Coconut', },
        {ch: '枸杞',  en: 'Goji Berry', },
        {ch: '葡萄',  en: 'Grape', },
        {ch: '酸橙',  en: 'Lime', },
        {ch: '芒果',  en: 'Mango', },
        {ch: '瓜',  en: 'Melon', },
        {ch: '橙子',  en: 'Orange', },
        {ch: '桃子',  en: 'Peach', },
        {ch: '树莓',  en: 'Raspberry', },
        {ch: '草莓',  en: 'Strawberry', },
        {ch: '西瓜',  en: 'Watermelon', },
        {ch: '水果',  en: 'Fruit', },
        {ch: '黑莓',  en: 'Blackberry', },
        {ch: '黑树莓',  en: 'Blackcurrant', },
        {ch: '蔓越莓',  en: 'Cranberry', },
        {ch: '枣',  en: 'Date/Jujube', },
        {ch: '火龙果',  en: 'Dragon Fruit', },
        {ch: '榴莲',  en: 'Durian', },
        {ch: '柚子',  en: 'Grapefruit', },
        {ch: '番石榴',  en: 'Guava', },
        {ch: '菠萝蜜',  en: 'Jackfruit', },
        {ch: '猕猴桃',  en: 'Kiwi', },
        {ch: '金橘',  en: 'Kumquat', },
        {ch: '枇杷',  en: 'Loquat', },
        {ch: '龙眼',  en: 'Longan', },
        {ch: '荔枝',  en: 'Lychee', },
        {ch: '山竹',  en: 'Mangosteen', },
        {ch: '哈密瓜',  en: 'Cantaloupe', },
        {ch: '桑葚',  en: 'Mulberry', },
        {ch: '油桃',  en: 'Nectarine', },
        {ch: '柑橘',  en: 'Tangerine', },
        {ch: '番木瓜',  en: 'Papaya', },
        {ch: '百香果',  en: 'Passion Fruit', },
        {ch: '柿子',  en: 'Persimmon', },
        {ch: '芭蕉',  en: 'Plantain', },
        {ch: '李子',  en: 'Plum', },
        {ch: '西梅',  en: 'Prune', },
        {ch: '菠萝',  en: 'Pineapple', },
        {ch: '石榴',  en: 'Pomegranate', },
        {ch: '荔枝',  en: 'Rambutan', },
        {ch: '杨桃',  en: 'Starfruit', },
        {ch: '柚',  en: 'Pomelo', },
        {ch: '杨梅',  en: 'Bayberry', },
        {ch: '昌普',  en: 'Chomphu', },
        {ch: '释迦',  en: 'Custard Apple', },
        {ch: '灯笼果',  en: 'Lantern Fruit', },
    ],
}

for (let prop in answers) {
    for (let i = 0, length = answers[prop].length; i < length; i++) {
        answers[prop][i].audio = `
            <button type="button" onclick="document.querySelector(\`[src='./english/${
                (() => answers[prop][i].en.replace(/ /g, '_').replace(/\//g, '|').replace('\'', '').replace('?', '').toLowerCase())()
            }.mp3']\`).play()">
                &#9654;
                <audio preload="none" src="./english/${(() => answers[prop][i].en.replace(/ /g, '_').replace(/\//g, '|').replace('\'', '').replace('?', '').toLowerCase())()}.mp3"></audio>
            </button>
        `
    }
}

// INDICATE MALE AND FEMALE AND FORMAL AND POLITE






