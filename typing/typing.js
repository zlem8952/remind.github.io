// 한국어/영어 주제별 긴글/중간글/짧은글 데이터 (15개씩)
const korTexts = [
  {
    title: "애국가",
    short: [
      "동해물과 백두산이 마르고 닳도록",
      "하느님이 보우하사 우리나라 만세",
      "무궁화 삼천리 화려강산",
      "대한 사람 대한으로 길이 보전하세"
    ],
    medium: [
      "동해물과 백두산이 마르고 닳도록",
      "하느님이 보우하사 우리나라 만세",
      "무궁화 삼천리 화려강산",
      "대한 사람 대한으로 길이 보전하세",
      "남산 위에 저 소나무 철갑을 두른 듯",
      "바람 서리 불변함은 우리 기상일세",
      "무궁화 삼천리 화려강산",
      "대한 사람 대한으로 길이 보전하세"
    ],
    long: [
      "동해물과 백두산이 마르고 닳도록",
      "하느님이 보우하사 우리나라 만세",
      "무궁화 삼천리 화려강산",
      "대한 사람 대한으로 길이 보전하세",
      "남산 위에 저 소나무 철갑을 두른 듯",
      "바람 서리 불변함은 우리 기상일세",
      "무궁화 삼천리 화려강산",
      "대한 사람 대한으로 길이 보전하세",
      "가을 하늘 공활한데 높고 구름 없이",
      "밝은 달은 우리 가슴 일편단심일세",
      "무궁화 삼천리 화려강산",
      "대한 사람 대한으로 길이 보전하세",
      "이 기상과 이 맘으로 충성을 다하여",
      "괴로우나 즐거우나 나라 사랑하세",
      "무궁화 삼천리 화려강산",
      "대한 사람 대한으로 길이 보전하세"
    ]
  },
  {
    title: "별 헤는 밤",
    short: [
      "계절이 지나가는 하늘에는",
      "가을로 가득 차 있습니다",
      "나는 아무 걱정도 없이",
      "가을 속의 별들을 다 헤일 듯합니다"
    ],
    medium: [
      "계절이 지나가는 하늘에는",
      "가을로 가득 차 있습니다",
      "나는 아무 걱정도 없이",
      "가을 속의 별들을 다 헤일 듯합니다",
      "가슴속에 하나 둘 새겨지는 별을",
      "이제 다 못 헤는 것은",
      "쉬이 아침이 오는 까닭이요",
      "내일 밤이 남은 까닭이요"
    ],
    long: [
      "계절이 지나가는 하늘에는",
      "가을로 가득 차 있습니다",
      "나는 아무 걱정도 없이",
      "가을 속의 별들을 다 헤일 듯합니다",
      "가슴속에 하나 둘 새겨지는 별을",
      "이제 다 못 헤는 것은",
      "쉬이 아침이 오는 까닭이요",
      "내일 밤이 남은 까닭이요",
      "아직 나의 청춘이 다하지 않은 까닭입니다",
      "별 하나에 추억과",
      "별 하나에 사랑과",
      "별 하나에 쓸쓸함과",
      "별 하나에 동경과",
      "별 하나에 시와",
      "별 하나에 어머니, 어머니"
    ]
  },
  {
    title: "청춘예찬",
    short: [
      "청춘! 이는 듣기만 하여도 가슴이 설레는 말이다.",
      "청춘이란 인생의 황금시대다.",
      "청춘의 특권은 도전과 실패다."
    ],
    medium: [
      "청춘! 이는 듣기만 하여도 가슴이 설레는 말이다.",
      "청춘이란 인생의 황금시대다.",
      "청춘의 특권은 도전과 실패다.",
      "청춘은 한 번 지나가면 다시 오지 않는다.",
      "청춘의 아름다움은 용기에서 비롯된다."
    ],
    long: [
      "청춘! 이는 듣기만 하여도 가슴이 설레는 말이다.",
      "청춘이란 인생의 황금시대다.",
      "청춘의 특권은 도전과 실패다.",
      "청춘은 한 번 지나가면 다시 오지 않는다.",
      "청춘의 아름다움은 용기에서 비롯된다.",
      "청춘은 자기 자신을 믿는 데서 출발한다.",
      "청춘이여, 두려워 말고 도전하라."
    ]
  },
  {
    title: "진달래꽃",
    short: [
      "나 보기가 역겨워",
      "가실 때에는",
      "말없이 고이 보내 드리오리다."
    ],
    medium: [
      "영변에 약산 진달래꽃",
      "아름 따다 가실 길에 뿌리오리다.",
      "가시는 걸음걸음",
      "놓인 그 꽃을",
      "사뿐히 즈려밟고 가시옵소서."
    ],
    long: [
      "나 보기가 역겨워",
      "가실 때에는",
      "죽어도 아니 눈물 흘리오리다.",
      "영변에 약산 진달래꽃",
      "아름 따다 가실 길에 뿌리오리다.",
      "가시는 걸음걸음",
      "놓인 그 꽃을",
      "사뿐히 즈려밟고 가시옵소서.",
      "나 보기가 역겨워",
      "가실 때에는",
      "죽어도 아니 눈물 흘리오리다."
    ]
  },
  {
    title: "광야",
    short: [
      "떠도는 백성들아",
      "어디로 갈꼬",
      "광야에 길이 없건만"
    ],
    medium: [
      "저기 저 별을 따라가자",
      "저 별이 인도하는 곳",
      "밤은 깊어가고",
      "발걸음은 무거워도"
    ],
    long: [
      "우리의 꿈은 밝으니",
      "멈추지 말고 나아가자",
      "광야에 길을 내자",
      "희망을 안고 앞으로 나아가자.",
      "끝없는 광야를 지나",
      "우리는 결국 도달하리라."
    ]
  },
  {
    title: "상록수",
    short: [
      "푸르른 상록수야",
      "네 모습이 아름답다",
      "추운 겨울에도 변치 않는"
    ],
    medium: [
      "너의 푸르름을 보라",
      "인생도 그러해야 한다",
      "세찬 바람에 흔들려도",
      "뿌리는 단단하게 박고"
    ],
    long: [
      "언제나 푸르름을 잃지 않으리",
      "상록수처럼 살아가리",
      "삶의 시련에도 굳건하게",
      "희망을 잃지 않는 나무가 되자.",
      "상록수의 정신으로",
      "끝까지 살아가리라."
    ]
  },
  {
    title: "님의 침묵",
    short: [
      "님은 갔습니다.",
      "아아, 사랑하는 나의 님은",
      "푸른 산빛을 안고 말없이 가셨습니다."
    ],
    medium: [
      "머언 들길에 홀로 서서",
      "차마 붙잡지 못했노라.",
      "님의 뒷모습을 보며",
      "눈물만 흘렸노라."
    ],
    long: [
      "아아, 님은 갔습니다.",
      "사랑하는 나의 님은",
      "푸른 산빛을 안고",
      "말없이 가셨습니다.",
      "머언 들길에 홀로 서서",
      "차마 붙잡지 못했노라.",
      "님의 뒷모습을 보며",
      "눈물만 흘렸노라."
    ]
  },
  {
    title: "토지",
    short: [
      "땅은 영원히 변하지 않는다.",
      "땅 위에 사는 자만이 변할 뿐이다."
    ],
    medium: [
      "인간은 땅을 닮아야 한다.",
      "땅처럼 묵묵하고 단단하게.",
      "땅처럼 모든 것을 포용하라.",
      "땅은 아무리 많은 씨앗을 받아도 조금도 아깝다 하지 않는다."
    ],
    long: [
      "땅은 모든 생명을 키우지만 결코 자랑하지 않는다.",
      "땅은 모든 것을 품고도 조용하다.",
      "땅을 닮아 살아가자.",
      "인생의 뿌리를 깊게 내리자.",
      "땅처럼 변함없는 마음으로."
    ]
  },
  {
    title: "동백꽃",
    short: [
      "동백꽃 필 무렵",
      "그대를 생각한다.",
      "붉은 꽃잎 사이로"
    ],
    medium: [
      "스며드는 햇살처럼",
      "그대의 미소가 내 맘에 스며든다.",
      "동백꽃은 지고도 다시 피어나지만"
    ],
    long: [
      "우리의 청춘은 한 번 지나가면 돌아오지 않는다.",
      "동백꽃은 지고 다시 피어난다.",
      "그러나 청춘은 다시 오지 않는다.",
      "지금 이 순간을 소중히 여기자."
    ]
  },
  {
    title: "난쟁이가 쏘아올린 공",
    short: [
      "공은 하늘 높이 날아올랐다.",
      "그리고 영원히 떨어지지 않았다."
    ],
    medium: [
      "어린 시절의 꿈처럼",
      "아득한 저 하늘을 향해",
      "쏘아올린 작은 공이"
    ],
    long: [
      "시간을 초월해 빛나는 별이 되었으리.",
      "우리 모두의 꿈도 그렇게 영원하길.",
      "공은 하늘을 가르며",
      "끝없이 날아간다."
    ]
  },
  {
    title: "봄봄",
    short: [
      "봄이 오면 산에 들에 진달래 피네.",
      "진달래 피는 곳에 내 마음도 피네."
    ],
    medium: [
      "봄바람 불어오면 내 마음도 설렌다.",
      "진달래 향기 따라 걸어가고 싶다.",
      "봄봄의 추억이 내 마음에 가득하다."
    ],
    long: [
      "봄이 오면 산과 들이 물든다.",
      "진달래 피는 곳마다 사랑이 피어난다.",
      "봄바람에 실려오는 그리움.",
      "내 마음도 함께 춤춘다."
    ]
  },
  {
    title: "서시",
    short: [
      "죽는 날까지 하늘을 우러러",
      "한 점 부끄럼이 없기를"
    ],
    medium: [
      "잎새에 이는 바람에도",
      "나는 괴로워했다.",
      "별을 노래하는 마음으로",
      "모든 죽어가는 것을 사랑해야지"
    ],
    long: [
      "그리고 나에게 주어진 길을",
      "걸어가야겠다.",
      "오늘 밤에도 별이 바람에 스치운다.",
      "나는 나에게 주어진 길을 묵묵히 걷는다."
    ]
  },
  {
    title: "광개토대왕",
    short: [
      "광개토대왕의 기상은",
      "하늘을 찌를 듯하다."
    ],
    medium: [
      "그의 용기는 바다를 건넜고",
      "그의 이름은 역사를 빛냈다.",
      "위대한 정복자, 광개토대왕"
    ],
    long: [
      "그의 발자취는 영원히 남으리.",
      "나라를 위해 몸을 바친 영웅.",
      "광개토대왕의 이름을 기억하자."
    ]
  },
  {
    title: "춘향전",
    short: [
      "춘향은 이몽룡을 사랑했다.",
      "그 사랑은 변치 않았다."
    ],
    medium: [
      "이별의 아픔에도 굴하지 않고",
      "사랑을 지킨 춘향.",
      "그 사랑은 전설이 되었다."
    ],
    long: [
      "춘향과 이몽룡의 사랑은",
      "세월이 흘러도 변치 않는다.",
      "진정한 사랑의 의미를 보여준다."
    ]
  },
  {
    title: "유관순",
    short: [
      "유관순의 용기는",
      "대한독립의 불꽃이었다."
    ],
    medium: [
      "그녀의 외침은 하늘을 울렸고",
      "조국의 자유를 위해 싸웠다.",
      "유관순의 정신을 잊지 말자."
    ],
    long: [
      "그녀의 희생은 우리에게 큰 가르침을 준다.",
      "자유와 평화를 위해 싸운 영웅.",
      "유관순의 이름을 영원히 기억하자."
    ]
  },
  {
    title: "독도",
    short: [
      "독도는 우리 땅이다.",
      "아름다운 바다 위의 섬."
    ],
    medium: [
      "파도가 부서지는 그곳에",
      "우리의 소중한 땅이 있다.",
      "독도를 지키는 마음을 잊지 말자."
    ],
    long: [
      "독도는 역사의 증인이다.",
      "우리의 자존심이자 미래이다.",
      "독도를 사랑하고 지키자."
    ]
  },
  {
    title: "고향의 봄",
    short: [
      "나의 살던 고향은 꽃피는 산골",
      "복숭아꽃 살구꽃 아기 진달래"
    ],
    medium: [
      "울긋불긋 꽃 대궐 차린 동네",
      "그 속에서 놀던 때가 그립습니다.",
      "고향의 봄은 언제나 내 마음에 있다."
    ],
    long: [
      "봄바람에 실려오는 고향의 향기.",
      "어린 시절의 추억이 가득하다.",
      "고향의 봄을 노래한다."
    ]
  }
];

// 영어 15개 주제 예시
const engTexts = [
  {
    title: "The Great Gatsby",
    short: [
      "So we beat on, boats against the current, borne back ceaselessly into the past."
    ],
    medium: [
      "I hope she'll be a fool — that's the best thing a girl can be in this world, a beautiful little fool.",
      "Gatsby believed in the green light, the orgastic future that year by year recedes before us."
    ],
    long: [
      "Whenever you feel like criticizing any one, just remember that all the people in this world haven't had the advantages that you've had.",
      "So we beat on, boats against the current, borne back ceaselessly into the past.",
      "Gatsby believed in the green light, the orgastic future that year by year recedes before us."
    ]
  },
  {
    title: "Steve Jobs' Stanford Speech",
    short: [
      "Your time is limited, so don't waste it living someone else's life."
    ],
    medium: [
      "Don't let the noise of others' opinions drown out your own inner voice.",
      "Have the courage to follow your heart and intuition."
    ],
    long: [
      "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose.",
      "You are already naked. There is no reason not to follow your heart."
    ]
  },
  {
    title: "Martin Luther King Jr.",
    short: [
      "I have a dream that one day this nation will rise up and live out the true meaning of its creed."
    ],
    medium: [
      "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character."
    ],
    long: [
      "Let us not wallow in the valley of despair, I say to you today, my friends.",
      "And so even though we face the difficulties of today and tomorrow, I still have a dream."
    ]
  },
  {
    title: "1984",
    short: [
      "War is peace.",
      "Freedom is slavery.",
      "Ignorance is strength."
    ],
    medium: [
      "Big Brother is Watching You.",
      "Who controls the past controls the future."
    ],
    long: [
      "In the face of pain there are no heroes.",
      "No heroes, thoughts of God or of country."
    ]
  },
  {
    title: "Pride and Prejudice",
    short: [
      "It is a truth universally acknowledged."
    ],
    medium: [
      "A single man in possession of a good fortune, must be in want of a wife."
    ],
    long: [
      "Vanity and pride are different things, though the words are often used synonymously."
    ]
  },
  {
    title: "To Kill a Mockingbird",
    short: [
      "You never really understand a person until you consider things from his point of view."
    ],
    medium: [
      "Until you climb into his skin and walk around in it."
    ],
    long: [
      "The one thing that doesn't abide by majority rule is a person's conscience."
    ]
  },
  {
    title: "The Old Man and the Sea",
    short: [
      "But man is not made for defeat."
    ],
    medium: [
      "A man can be destroyed but not defeated."
    ],
    long: [
      "Now is no time to think of what you do not have.",
      "Think of what you can do with what there is."
    ]
  },
  {
    title: "The Road Not Taken",
    short: [
      "Two roads diverged in a yellow wood."
    ],
    medium: [
      "And sorry I could not travel both and be one traveler."
    ],
    long: [
      "I took the one less traveled by, and that has made all the difference."
    ]
  },
  {
    title: "Invictus",
    short: [
      "I am the master of my fate.",
      "I am the captain of my soul."
    ],
    medium: [
      "Out of the night that covers me, black as the pit from pole to pole."
    ],
    long: [
      "My head is bloody, but unbowed."
    ]
  },
  {
    title: "If—",
    short: [
      "If you can keep your head when all about you are losing theirs and blaming it on you."
    ],
    medium: [
      "If you can trust yourself when all men doubt you, but make allowance for their doubting too."
    ],
    long: [
      "If you can fill the unforgiving minute with sixty seconds' worth of distance run."
    ]
  },
  {
    title: "Desiderata",
    short: [
      "Go placidly amid the noise and haste."
    ],
    medium: [
      "And remember what peace there may be in silence."
    ],
    long: [
      "With all its sham, drudgery, and broken dreams, it is still a beautiful world."
    ]
  },
  {
    title: "O Captain! My Captain!",
    short: [
      "O Captain! my Captain! our fearful trip is done."
    ],
    medium: [
      "The ship has weather’d every rack, the prize we sought is won."
    ],
    long: [
      "The port is near, the bells I hear, the people all exulting."
    ]
  },
  {
    title: "Self-Reliance",
    short: [
      "Trust thyself: every heart vibrates to that iron string."
    ],
    medium: [
      "Nothing can bring you peace but yourself."
    ],
    long: [
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."
    ]
  },
  {
    title: "Walden",
    short: [
      "I went to the woods because I wished to live deliberately."
    ],
    medium: [
      "To front only the essential facts of life."
    ],
    long: [
      "And see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived."
    ]
  },
  {
    title: "Great Expectations",
    short: [
      "I loved her against reason, against promise, against peace, against hope, against happiness, against all discouragement that could be."
    ],
    medium: [
      "Suffering has been stronger than all other teaching."
    ],
    long: [
      "I have been bent and broken, but—I hope—into a better shape."
    ]
  }
];

// 노래가사 txt 파일 목록 (lyrics 폴더에 txt 파일로 저장, 파일명=노래제목)
let songList = [
  {name: "오늘 밤은 삐딱하게", file: "오늘 밤은 삐딱하게.txt"},
  {name: "사랑은 늘 도망가", file: "사랑은 늘 도망가.txt"},
  {name: "아로하", file: "아로하.txt"},
  {name: "봄날", file: "봄날.txt"},
  {name: "벚꽃 엔딩", file: "벚꽃 엔딩.txt"},
  {name: "너의 의미", file: "너의 의미.txt"},
  {name: "좋은 날", file: "좋은 날.txt"},
  {name: "비처럼 음악처럼", file: "비처럼 음악처럼.txt"},
  {name: "걱정말아요 그대", file: "걱정말아요 그대.txt"},
  {name: "그대라는 사치", file: "그대라는 사치.txt"},
  {name: "첫눈처럼 너에게 가겠다", file: "첫눈처럼 너에게 가겠다.txt"},
  {name: "취중진담", file: "취중진담.txt"},
  {name: "다시 여기 바닷가", file: "다시 여기 바닷가.txt"},
  {name: "너를 만나", file: "너를 만나.txt"},
  {name: "오래된 노래", file: "오래된 노래.txt"}
];

let mode = "ko";
let lines = [];
let currentLine = 0;
let startTime = null;
let correctChars = 0;
let totalTyped = 0;
let errors = 0;
let testStarted = false;
let selectedLength = "short";
let selectedSubject = 0;
