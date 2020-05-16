const jpPrefecture = require('jp-prefecture')

const PrefecturalCapitalJp = function () {
  this.prefecturalCapital = null
}

PrefecturalCapitalJp.prototype.PREFECTURAL_CAPITALS = [
  { id: 1, ja: '札幌市', en: 'Sapporo' },
  { id: 2, ja: '青森市', en: 'Aomori)' },
  { id: 3, ja: '盛岡市', en: 'Morioka' },
  { id: 4, ja: '仙台市', en: 'Sendai' },
  { id: 5, ja: '秋田市', en: 'Akita' },
  { id: 6, ja: '山形市', en: 'Yamagata' },
  { id: 7, ja: '福島市', en: 'Fukushima' },
  { id: 8, ja: '水戸市', en: 'Mito' },
  { id: 9, ja: '宇都宮市', en: 'Utsunomiya' },
  { id: 10, ja: '前橋市', en: 'Maebashi' },
  { id: 11, ja: 'さいたま市', en: 'Saitama' },
  { id: 12, ja: '千葉市', en: 'Chiba' },
  { id: 13, ja: '新宿区', en: 'Shinjuku' },
  { id: 14, ja: '横浜市', en: 'Yokohama' },
  { id: 15, ja: '新潟市', en: 'Niigata' },
  { id: 16, ja: '富山市', en: 'Toyama' },
  { id: 17, ja: '金沢市', en: 'Kanazawa' },
  { id: 18, ja: '福井市', en: 'Fukui' },
  { id: 19, ja: '甲府市', en: 'Kofu' },
  { id: 20, ja: '長野市', en: 'Nagano' },
  { id: 21, ja: '岐阜市', en: 'Gifu' },
  { id: 22, ja: '静岡市', en: 'Shizuoka' },
  { id: 23, ja: '名古屋市', en: 'Nagoya' },
  { id: 24, ja: '津市', en: 'Tsu' },
  { id: 25, ja: '大津市', en: 'Otsu' },
  { id: 26, ja: '京都市', en: 'Kyoto' },
  { id: 27, ja: '大阪市', en: 'Osaka' },
  { id: 28, ja: '神戸市', en: 'Kobe' },
  { id: 29, ja: '奈良市', en: 'Nara' },
  { id: 30, ja: '和歌山市', en: 'Wakayama' },
  { id: 31, ja: '鳥取市', en: 'Tottori' },
  { id: 32, ja: '松江市', en: 'Matsue' },
  { id: 33, ja: '岡山市', en: 'Okayama' },
  { id: 34, ja: '広島市', en: 'Hiroshima' },
  { id: 35, ja: '山口市', en: 'Yamaguchi' },
  { id: 36, ja: '徳島市', en: 'Tokushima' },
  { id: 37, ja: '高松市', en: 'Takamatsu' },
  { id: 38, ja: '松山市', en: 'Matsuyama' },
  { id: 39, ja: '高知市', en: 'Kochi' },
  { id: 40, ja: '福岡市', en: 'Fukuoka' },
  { id: 41, ja: '佐賀市', en: 'Saga' },
  { id: 42, ja: '長崎市', en: 'Nagasaki' },
  { id: 43, ja: '熊本市', en: 'Kumamoto' },
  { id: 44, ja: '大分市', en: 'Oita' },
  { id: 45, ja: '宮崎市', en: 'Miyazaki' },
  { id: 46, ja: '鹿児島市', en: 'Kagoshima' },
  { id: 47, ja: '那覇市', en: 'Naha' }
]

PrefecturalCapitalJp.prototype.find = function (prefectureName) {
  const prefecture = jpPrefecture.find('pref', prefectureName.toLowerCase())
  this.prefecturalCapital = this.PREFECTURAL_CAPITALS[prefecture.id - 1]
  return this
}

PrefecturalCapitalJp.prototype.toJa = function () {
  return this.prefecturalCapital.ja
}

PrefecturalCapitalJp.prototype.toEn = function () {
  return this.prefecturalCapital.en
}

module.exports = PrefecturalCapitalJp
