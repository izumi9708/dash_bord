export function pref_array(){
  let prefArray = [
    {
        local : '北海道',
        value : 1,
        local_name : 'hokkaido',
        pref  : [
            {
              pref_name : '北海道',
              param : 'hokkaido'
            }
        ]
    },{
        local : '東北',
        value : 2,
        local_name : 'tohoku',
        pref : [
            {
              pref_name : '青森',
              param : 'aomori'
            },
            {
              pref_name : '秋田',
              param : 'akita'
            },
            {
              pref_name : '岩手',
              param : 'iwate'
            },
            {
              pref_name : '宮城',
              param : 'miyagi'
            },
            {
              pref_name : '山形',
              param : 'yamagata'
            },
            {
              pref_name : '福島',
              param : 'hukusima'
            }
        ]
    },{
        local : '関東',
        value : 3,
        local_name : 'kanto',
        pref : [
            {
              pref_name : '東京',
              param : 'tokyo'
            },
            {
              pref_name : '千葉',
              param : 'chiba'
            },
            {
              pref_name : '埼玉',
              param : 'saitama'
            },
            {
              pref_name : '神奈川',
              param : 'kanagawa'
            },
            {
              pref_name : '群馬',
              param : 'gunma'
            },
            {
              pref_name : '栃木',
              param : 'tochigi'
            },
            {
              pref_name : '茨城',
              param : 'ibaraki'
              }
        ]
    },{
        local : '中部',
        value : 4,
        local_name : 'chubu',
        pref : [
            {
              pref_name : '新潟',
              param : 'nigata'
            },
            {
              pref_name : '静岡',
              param : 'shizuoka'
            },
            {
              pref_name : '長野',
              param : 'nagano'
            },
            {
              pref_name : '岐阜',
              param : 'gihu'
            },
            {
              pref_name : '富山',
              param : 'toyama'
            },
            {
              pref_name : '石川',
              param : 'ishikawa'
            },
            {
              pref_name : '福井',
              param : 'hukui'
            },
            {
              pref_name : '山梨',
              param : 'yamanashi'
            },
            {
              pref_name : '愛知',
              param : 'aichi'
              }
        ]
    },{
        local : '近畿',
        value : 5,
        local_name : 'kinki',
        pref : [
            {
              pref_name : '京都',
              param : 'kyoto'
            },
            {
              pref_name : '大阪',
              param : 'osaka'
            },
            {
              pref_name : '三重',
              param : 'mie'
            },
            {
              pref_name : '滋賀',
              param : 'shiga'
            },
            {
              pref_name : '兵庫',
              param : 'hyogo'
            },
            {
              pref_name : '奈良',
              param : 'nara'
            },
            {
              pref_name : '和歌山',
              param : 'wakayama'
              }
        ]
    },{
        local : '中国',
        value : 6,
        local_name : 'chugoku',
        pref : [
            {
              pref_name : '鳥取',
              param : 'tottori'
            },
            {
              pref_name : '島根',
              param : 'shimane'
            },
            {
              pref_name : '岡山',
              param : 'okayama'
            },
            {
              pref_name : '広島',
              param : 'hiroshima'
            },
            {
              pref_name : '山口',
              param : 'yamaguchi'
            },
        ]
    },{
        local : '四国',
        value : 7,
        local_name : 'shikoku',
        pref : [
            {
              pref_name : '愛媛',
              param : 'ehime'
            },
            {
              pref_name : '香川',
              param : 'kagawa'
            },
            {
              pref_name : '徳島',
              param : 'tokushima'
            },
            {
              pref_name : '高知',
              param : 'kouchi'
            },
        ]
    },{
        local : '九州',
        value : 8,
        local_name : 'kyusyu',

        pref : [
            {
              pref_name : '福岡',
              param : 'hukuoka'
            },
            {
              pref_name : '佐賀',
              param : 'shiga'
            },
            {
              pref_name : '長崎',
              param : 'nagasaki'
            },
            {
              pref_name : '大分',
              param : 'oita'
            },
            {
              pref_name : '熊本',
              param : 'kumamoto'
            },
            {
              pref_name : '宮崎',
              param : 'miyazaki'
            },
            {
              pref_name : '鹿児島',
              param : 'kagoshima'
            },
        ]
    },{
        local : '沖縄',
        value : 9,
        local_name : 'okinawa',

        pref : [
            {
              pref_name : '沖縄',
              param : 'okinawa'
            }
        ]
    }
];

  return prefArray;

}