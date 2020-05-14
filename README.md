# prefectural-capital-jp

Returns the prefectural capital of the entered prefecture.

## Installation

```
npm install prefectural-capital-jp
```

## Usage

### Example

```js
const PrefecturalCapitalJp = require('prefectural-capital-jp')
const prefecturalCapitalJp = new PrefecturalCapitalJp()

console.log(prefecturalCapitalJp.find('神奈川県').toJa()) // 横浜市
```

### Inputtable String

Kanji or Kanji(Short) or Katakana or Roman Alphabet

```js
const PrefecturalCapitalJp = require('prefectural-capital-jp')
const prefecturalCapitalJp = new PrefecturalCapitalJp()

// Kanji
console.log(prefecturalCapitalJp.find('神奈川県').toJa()) // 横浜市
// Kanji(Short)
console.log(prefecturalCapitalJp.find('神奈川').toJa()) // 横浜市
// Katakana
console.log(prefecturalCapitalJp.find('カナガワ').toJa()) // 横浜市
// Roman Alphabet
console.log(prefecturalCapitalJp.find('Kanagawa').toJa()) // 横浜市
```

### Output Format

You have the choice of JA or EN.

```js
const PrefecturalCapitalJp = require('prefectural-capital-jp')
const prefecturalCapitalJp = new PrefecturalCapitalJp()

console.log(prefecturalCapitalJp.find('神奈川県').toJa()) // 横浜市
console.log(prefecturalCapitalJp.find('神奈川県').toEn()) // Yokohama
```

## Source of Information

[都道府県庁所在地 \- Wikipedia](https://ja.wikipedia.org/wiki/%E9%83%BD%E9%81%93%E5%BA%9C%E7%9C%8C%E5%BA%81%E6%89%80%E5%9C%A8%E5%9C%B0)

[Prefectures of Japan \- Wikipedia](https://en.wikipedia.org/wiki/Prefectures_of_Japan)
