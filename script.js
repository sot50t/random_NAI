const DB = {
    skin: [
        { ko: "창백함", tag: "pale skin" },
        { ko: "흰 피부", tag: "fair skin" },
        { ko: "자연스러운 톤", tag: "light skin" },
        { ko: "태닝 피부", tag: "tan, tanned skin" },
        { ko: "어두운 피부", tag: "dark skin" },
        { ko: "짙은 흑갈색", tag: "very dark skin" },
        { ko: "구릿빛 피부", tag: "bronze skin" },
        { ko: "글리터 / 윤광", tag: "glitter skin, shimmering body" },
        { ko: "도자기 피부", tag: "porcelain skin" }
    ],
    body: {
        female: [
            { ko: "가녀림", tag: "slender, petite" },
            { ko: "슬림함", tag: "slim" },
            { ko: "글래머", tag: "curvy, voluptuous" },
            { ko: "장신 / 롱다리", tag: "tall, long legs" },
            { ko: "아담·글래머", tag: "petite, curvy" },
            { ko: "탄탄·근육질", tag: "toned body, muscular female" }
        ],
        male: [
            { ko: "슬렌더", tag: "slender, lean" },
            { ko: "잔근육", tag: "toned, lean muscles" },
            { ko: "탄탄한 근육", tag: "athletic, muscular" },
            { ko: "건장함 / 떡대", tag: "broad shoulders, muscular, tall" },
            { ko: "다부진 체격", tag: "stocky, muscular" },
            { ko: "소년미 / 마름", tag: "boyish, slender" }
        ]
    },
    chest: {
        female: [
            { ko: "빈유", tag: "flat chest" },
            { ko: "작음", tag: "small breasts" },
            { ko: "보통", tag: "medium breasts" },
            { ko: "풍만함", tag: "large breasts" },
            { ko: "거유", tag: "huge breasts" }
        ],
        male: [
            { ko: "슬림", tag: "flat chest" },
            { ko: "탄탄한 흉근", tag: "pectorals" }
        ]
    },
    bangs: [
        { ko: "시스루 뱅", tag: "wispy bangs" },
        { ko: "처피 뱅", tag: "choppy bangs" },
        { ko: "일자 풀뱅", tag: "blunt bangs" },
        { ko: "넘긴 앞머리", tag: "swept bangs" },
        { ko: "가르마 뱅", tag: "parted bangs" },
        { ko: "더블 가르마", tag: "double-parted bangs" },
        { ko: "옆 가르마", tag: "side part" },
        { ko: "가운데 가르마", tag: "middle part" },
        { ko: "커튼 뱅", tag: "curtained hair" },
        { ko: "환풍구 머리", tag: "hair intakes" },
        { ko: "한쪽 환풍구", tag: "single hair intake" },
        { ko: "비대칭", tag: "asymmetrical bangs" },
        { ko: "가운데 덮개", tag: "center-flap bangs" },
        { ko: "교차 앞머리", tag: "crossed bangs" },
        { ko: "송곳니 뱅", tag: "fanged bangs" },
        { ko: "사선 뱅", tag: "diagonal bangs" },
        { ko: "아치형 뱅", tag: "arched bangs" },
        { ko: "M자 이마", tag: "widow's peak" },
        { ko: "짧은 앞머리", tag: "short bangs" },
        { ko: "미간 앞머리", tag: "hair between eyes" },
        { ko: "눈 덮는 뱅", tag: "long bangs" },
        { ko: "한쪽 눈 가림", tag: "hair over one eye" },
        { ko: "양눈 가림", tag: "hair over eyes" },
        { ko: "비치는 눈", tag: "eyes visible through hair" },
        { ko: "얼굴 가림", tag: "hair over face" },
        { ko: "핀 고정", tag: "bangs pinned back" }
    ],

    backHair: {
        short: [
            { ko: "극단발 / 초숏컷", tag: "very short hair" },
            { ko: "숏컷", tag: "short hair" },
            { ko: "픽시 컷", tag: "pixie cut, very short hair" },
            { ko: "울프 숏컷", tag: "short hair, wolf cut" },
            { ko: "바가지 머리", tag: "bowl cut" },
            { ko: "언더컷", tag: "under cut" },
            { ko: "모히칸", tag: "mohawk" },
            { ko: "크루 컷", tag: "crew cut" },
            { ko: "아이비리그 컷", tag: "ivy league haircut" },
            { ko: "플랫탑", tag: "flattop" },
            { ko: "보브컷 (단발)", tag: "bob cut, short hair" },
            { ko: "역보브컷", tag: "interverted bob" },
            { ko: "삭발", tag: "shaved head, buzz cut" }
        ],
        medium: [
            { ko: "중단발", tag: "medium hair" },
            { ko: "중단발 레이어드", tag: "medium hair, layered hair" },
            { ko: "중단발 웨이브", tag: "medium hair, wavy hair" },
            { ko: "울프컷", tag: "wolf cut, medium hair" },
            { ko: "멀릿", tag: "mullet" },
            { ko: "히메컷", tag: "hime cut" }
        ],
        long: [
            { ko: "장발", tag: "long hair" },
            { ko: "초장발", tag: "very long hair" },
            { ko: "극초장발", tag: "absurdly long hair" },
            { ko: "긴 생머리", tag: "long hair, straight hair" },
            { ko: "웨이브 장발", tag: "long hair, wavy hair" },
            { ko: "컬리 / 펌", tag: "long hair, curly hair" },
            { ko: "샤기 컷", tag: "shaggy hair" },
            { ko: "헝클어진 머리", tag: "tousled hair" },
            { ko: "부스스한 머리", tag: "messy hair" },
            { ko: "떡진 / 방치된 머리", tag: "unkempt hair" },
            { ko: "스파이크 헤어", tag: "spiked hair" },
            { ko: "올백", tag: "hair slicked back" },
            { ko: "뒤로 묶음", tag: "hair pulled back" },
            { ko: "하이 포니테일", tag: "high ponytail, long hair" },
            { ko: "로우 포니테일", tag: "low ponytail, long hair" },
            { ko: "사이드 포니테일", tag: "side ponytail, long hair" },
            { ko: "짧은 포니테일", tag: "short ponytail" },
            { ko: "트윈테일", tag: "twintails, long hair" },
            { ko: "로우 트윈테일", tag: "low twintails" },
            { ko: "비대칭 트윈테일", tag: "uneven twintails" },
            { ko: "한 갈래 땋기", tag: "single braid, long hair" },
            { ko: "사이드 땋기", tag: "side braid, long hair" },
            { ko: "양갈래 땋기", tag: "twin braids, long hair" },
            { ko: "크라운 브레이드", tag: "crown braid" },
            { ko: "콘로우", tag: "cornrows" },
            { ko: "드레드록스", tag: "dreadlocks" },
            { ko: "당고머리", tag: "single hair bun" },
            { ko: "만두머리", tag: "double bun" },
            { ko: "땋은 번", tag: "braided bun" },
            { ko: "원뿔 번", tag: "cone hair bun" },
            { ko: "반묶음", tag: "half updo" },
            { ko: "싱글 드릴", tag: "single drill" },
            { ko: "트윈 드릴", tag: "twin drills" },
            { ko: "링렛 컬", tag: "ringlets" },
            { ko: "바보털", tag: "ahoge" },
            { ko: "하트 바보털", tag: "heart ahoge" },
            { ko: "번개 바보털", tag: "lightning ahoge" },
            { ko: "안테나 잔머리", tag: "antenna hair" },
            { ko: "젖은 머리", tag: "wet hair" }
        ]
    },
    hairColor: (() => {
        const baseColors = [
            { ko: "버밀리언", tag: "vermilion hair" },
            { ko: "카민", tag: "carmine hair" },
            { ko: "루비", tag: "ruby hair" },
            { ko: "크림슨", tag: "crimson hair" },
            { ko: "버건디", tag: "burgundy hair" },
            { ko: "마룬", tag: "maroon hair" },
            { ko: "피치", tag: "peach hair" },
            { ko: "애프리콧", tag: "apricot hair" },
            { ko: "살몬", tag: "salmon hair" },
            { ko: "코랄", tag: "coral hair" },
            { ko: "탠저린", tag: "tangerine hair" },
            { ko: "오렌지", tag: "orange hair" },
            { ko: "앰버", tag: "amber hair" },
            { ko: "코퍼", tag: "copper hair" },
            { ko: "브론즈", tag: "bronze hair" },
            { ko: "번트 오렌지", tag: "burnt orange hair" },
            { ko: "아이보리", tag: "ivory hair" },
            { ko: "플래티넘 블론드", tag: "platinum blonde hair" },
            { ko: "블론드", tag: "blonde hair" },
            { ko: "베이지", tag: "beige hair" },
            { ko: "레몬", tag: "lemon hair" },
            { ko: "카나리아 옐로우", tag: "canary yellow hair" },
            { ko: "노랑", tag: "yellow hair" },
            { ko: "골드", tag: "gold hair" },
            { ko: "골든", tag: "golden hair" },
            { ko: "머스타드", tag: "mustard hair" },
            { ko: "샤르트뢰즈", tag: "chartreuse hair" },
            { ko: "라임", tag: "lime hair" },
            { ko: "민트", tag: "mint hair" },
            { ko: "켈리 그린", tag: "kelly green hair" },
            { ko: "초록", tag: "green hair" },
            { ko: "에메랄드", tag: "emerald hair" },
            { ko: "씨 그린", tag: "sea green hair" },
            { ko: "포레스트 그린", tag: "forest green hair" },
            { ko: "올리브 그린", tag: "olive green hair" },
            { ko: "제이드", tag: "jade hair" },
            { ko: "아쿠아", tag: "aqua hair" },
            { ko: "아쿠아마린", tag: "aquamarine hair" },
            { ko: "시안", tag: "cyan hair" },
            { ko: "터코이즈", tag: "turquoise hair" },
            { ko: "세룰리안", tag: "cerulean hair" },
            { ko: "틸", tag: "teal hair" },
            { ko: "스카이 블루", tag: "sky blue hair" },
            { ko: "아주르", tag: "azure hair" },
            { ko: "사파이어", tag: "sapphire hair" },
            { ko: "코발트 블루", tag: "cobalt blue hair" },
            { ko: "로열 블루", tag: "royal blue hair" },
            { ko: "울트라마린", tag: "ultramarine hair" },
            { ko: "데님", tag: "denim hair" },
            { ko: "네이비", tag: "navy blue hair" },
            { ko: "미드나잇 블루", tag: "midnight blue hair" },
            { ko: "페리윙클", tag: "periwinkle hair" },
            { ko: "인디고", tag: "indigo hair" },
            { ko: "라일락", tag: "lilac hair" },
            { ko: "오키드 퍼플", tag: "orchid purple hair" },
            { ko: "라벤더", tag: "lavender hair" },
            { ko: "모브", tag: "mauve hair" },
            { ko: "아메시스트", tag: "amethyst hair" },
            { ko: "바이올렛", tag: "violet hair" },
            { ko: "보라", tag: "purple hair" },
            { ko: "플럼 퍼플", tag: "plum hair" },
            { ko: "에그플랜트", tag: "eggplant hair" },
            { ko: "살몬 핑크", tag: "salmon pink hair" },
            { ko: "로즈 골드", tag: "rose gold hair" },
            { ko: "분홍", tag: "pink hair" },
            { ko: "로즈 핑크", tag: "rose pink hair" },
            { ko: "체리스", tag: "cerise hair" },
            { ko: "핫 핑크", tag: "hot pink hair" },
            { ko: "푸시아", tag: "fuchsia hair" },
            { ko: "마젠타", tag: "magenta hair" },
            { ko: "탠", tag: "tan hair" },
            { ko: "카키", tag: "khaki hair" },
            { ko: "오커", tag: "ochre hair" },
            { ko: "어번", tag: "auburn hair" },
            { ko: "체스트넛", tag: "chestnut hair" },
            { ko: "갈색", tag: "brown hair" },
            { ko: "마호가니", tag: "mahogany hair" },
            { ko: "세피아 브라운", tag: "sepia hair" },
            { ko: "초콜릿", tag: "chocolate hair" },
            { ko: "브루넷", tag: "brunette" },
            { ko: "스노우 화이트", tag: "snow white hair" },
            { ko: "앨러배스터", tag: "alabaster hair" },
            { ko: "하얀색", tag: "white hair" },
            { ko: "은색", tag: "silver hair" },
            { ko: "애쉬", tag: "ash hair" },
            { ko: "회색", tag: "grey hair" },
            { ko: "슬레이트", tag: "slate hair" },
            { ko: "차콜", tag: "charcoal hair" },
            { ko: "옵시디언", tag: "obsidian hair" },
            { ko: "검은색", tag: "black hair" },
            { ko: "젯 블랙", tag: "jet black hair" }
        ];

        const modifiers = [
            { ko: "밝은", prefix: "light" },
            { ko: "어두운", prefix: "dark" },
            { ko: "창백한", prefix: "pale" },
            { ko: "딥", prefix: "deep" },
            { ko: "비비드", prefix: "vivid" },
            { ko: "탁한", prefix: "dull" },
            { ko: "차분한", prefix: "muted" },
            { ko: "형광", prefix: "neon" },
            { ko: "파스텔", prefix: "pastel" },
            { ko: "애쉬", prefix: "ash" }
        ];

        const combined = [];

        baseColors.forEach((c) => combined.push(c));

        baseColors.forEach((c) => {
            modifiers.forEach((m) => {
                const baseTagName = c.tag.replace(/ hair$/, "");
                const newKo = `${m.ko} ${c.ko}`;
                const newTag = `${m.prefix} ${baseTagName} hair`;
                combined.push({ ko: newKo, tag: newTag });
            });
        });

        return combined;
    })(),

    eyeColorSingle: (() => {
        const baseColors = [
            { ko: "적안", tag: "red eyes" },
            { ko: "루비 적안", tag: "ruby eyes" },
            { ko: "크림슨", tag: "crimson eyes" },
            { ko: "버건디", tag: "burgundy eyes" },
            { ko: "오렌지", tag: "orange eyes" },
            { ko: "앰버 (호박색)", tag: "amber eyes" },
            { ko: "금안", tag: "golden eyes" },
            { ko: "옐로우", tag: "yellow eyes" },
            { ko: "초록", tag: "green eyes" },
            { ko: "에메랄드", tag: "emerald eyes" },
            { ko: "올리브 그린", tag: "olive green eyes" },
            { ko: "민트", tag: "mint eyes" },
            { ko: "아쿠아", tag: "aqua eyes" },
            { ko: "시안", tag: "cyan eyes" },
            { ko: "터코이즈", tag: "turquoise eyes" },
            { ko: "벽안 (블루)", tag: "blue eyes" },
            { ko: "사파이어", tag: "sapphire eyes" },
            { ko: "코발트 블루", tag: "cobalt blue eyes" },
            { ko: "네이비", tag: "navy blue eyes" },
            { ko: "인디고", tag: "indigo eyes" },
            { ko: "라벤더", tag: "lavender eyes" },
            { ko: "자안 (퍼플)", tag: "purple eyes" },
            { ko: "바이올렛", tag: "violet eyes" },
            { ko: "아메시스트", tag: "amethyst eyes" },
            { ko: "분홍", tag: "pink eyes" },
            { ko: "로즈 핑크", tag: "rose pink eyes" },
            { ko: "마젠타", tag: "magenta eyes" },
            { ko: "헤이즐", tag: "hazel eyes" },
            { ko: "브라운 (갈색)", tag: "brown eyes" },
            { ko: "체스트넛 (밤색)", tag: "chestnut eyes" },
            { ko: "회안 (그레이)", tag: "grey eyes" },
            { ko: "은색", tag: "silver eyes" },
            { ko: "백안 (하얀색)", tag: "white eyes" },
            { ko: "흑안 (검은색)", tag: "black eyes" }
        ];

        const modifiers = [
            { ko: "밝은", prefix: "light" },
            { ko: "어두운", prefix: "dark" },
            { ko: "창백한", prefix: "pale" },
            { ko: "딥", prefix: "deep" },
            { ko: "비비드", prefix: "vivid" },
            { ko: "탁한", prefix: "dull" },
            { ko: "차분한", prefix: "muted" },
            { ko: "형광", prefix: "neon" },
            { ko: "파스텔", prefix: "pastel" },
            { ko: "애쉬", prefix: "ash" }
        ];

        const combined = [];

        baseColors.forEach((c) => combined.push(c));

        baseColors.forEach((c) => {
            modifiers.forEach((m) => {
                const baseTagName = c.tag.replace(/ eyes$/, "");
                const newKo = `${m.ko} ${c.ko}`;
                const newTag = `${m.prefix} ${baseTagName} eyes`;
                combined.push({ ko: newKo, tag: newTag });
            });
        });

        return combined;
    })(),

    hairPatterns: [
        { ko: "투톤", tag: "two-tone hair", needsColor: 1 },
        { ko: "다색(멀티컬러)", tag: "multicolored hair", needsColor: 2 },
        { ko: "브릿지", tag: "streaked hair", needsColor: 1 },
        { ko: "줄무늬", tag: "striped hair", needsColor: 1 },
        { ko: "반반 염색", tag: "split-color hair", needsColor: 1 },
        { ko: "안쪽 투톤(시크릿)", tag: "colored inner hair", needsColor: 1 },
        { ko: "끝부분 염색", tag: "colored tips", needsColor: 1 },
        { ko: "그라데이션", tag: "gradient hair", needsColor: 1 },
        { ko: "뿌리 염색", tag: "{color} roots", needsColor: 1 },
        { ko: "무지갯빛", tag: "iridescent hair", needsColor: 0 },
        { ko: "형광빛", tag: "fluorescent hair", needsColor: 0 },
        { ko: "발광 헤어", tag: "glowing hair", needsColor: 0 }
    ],

    eyePatterns: [
        { ko: "다색 홍채", tag: "multicolored eyes" },
        { ko: "그라데이션", tag: "gradient eyes" },
        { ko: "무지갯빛", tag: "iridescent eyes" },
        { ko: "형광빛", tag: "fluorescent eyes" },
        { ko: "발광", tag: "glowing eyes" },
        { ko: "투톤 홍채", tag: "two-tone eyes" },
        { ko: "줄무늬 홍채", tag: "striped eyes" }
    ],

    eyeShape: [
        { ko: "츠리메 (매서운 눈)", tag: "tsurime, sharp eyes" },
        { ko: "타레메 (처진 눈)", tag: "tareme, droopy eyes, gentle eyes" },
        { ko: "동그란 왕눈", tag: "round eyes, large eyes" },
        { ko: "아몬드형 눈", tag: "almond shaped eyes" },
        { ko: "지토메 (시큰둥한 눈)", tag: "jitome" },
        { ko: "찢어진 눈", tag: "slanted eyes" },
        { ko: "치켜올라간 눈", tag: "unturned eyes" },
        { ko: "삼백안", tag: "sanpaku" },
        { ko: "사백안", tag: "yokume, sanpaku" },

        { ko: "반개안 (나른한 눈)", tag: "half-closed eyes" },
        { ko: "졸린 눈", tag: "sleepy eyes, tired eyes" },
        { ko: "멍한 눈", tag: "dazed eyes, blank eyes" },
        { ko: "권태로운 눈", tag: "bored eyes, lazy eyes" },
        { ko: "무기력한 눈", tag: "droopy eyes, heavy eyelids" },

        { ko: "사나운 눈빛", tag: "fierce eyes, aggressive eyes" },
        { ko: "광기 어린 눈", tag: "crazy eyes, insane eyes, wide-eyed" },
        { ko: "차가운 눈빛", tag: "cold eyes, piercing eyes" },
        { ko: "노려보는 눈", tag: "glaring eyes, sharp gaze" },
        { ko: "오만한 눈", tag: "arrogant eyes, looking down" },

        { ko: "겁먹은 눈", tag: "scared eyes, fearful eyes" },
        { ko: "촉촉한 눈", tag: "watery eyes, tearful eyes" },
        { ko: "처연한 눈", tag: "sad eyes, sorrowful eyes" },
        { ko: "퇴폐적인 눈", tag: " melancholic eyes, gloomy eyes" },

        { ko: "실눈", tag: "closed eyes, happy, slit-like eyes" },
        { ko: "의심스러운 눈", tag: "squinting, suspicious eyes" },
        { ko: "공허한 눈", tag: "empty eyes, dead eyes" },
        { ko: "초롱초롱한 눈", tag: "sparkling eyes, starry eyes" },
        { ko: "영민한 눈", tag: "bright eyes, attentive eyes" }
    ],

    eyebrows: [
        { ko: "일자 눈썹", tag: "straight eyebrows" },
        { ko: "아치형 눈썹", tag: "soft eyebrows" },
        { ko: "치켜올린 눈썹", tag: "raised eyebrows" },
        { ko: "한쪽 치켜올림", tag: "raised eyebrow" },
        { ko: "비대칭 눈썹", tag: "cocked eyebrow" },
        { ko: "안쪽 치켜올림", tag: "raised inner eyebrows" },
        { ko: "찡그린 눈썹", tag: "furrowed brow" },
        { ko: "V자 눈썹", tag: "v-shaped eyebrows" },
        { ko: "두꺼운 눈썹", tag: "thick eyebrows" },
        { ko: "스크래치", tag: "eyebrow cut" },
        { ko: "흉터 눈썹", tag: "scar across eyebrow" },
        { ko: "날카로운 눈썹", tag: "sharp eyebrows" },
        { ko: "송충이 눈썹", tag: "very thick eyebrows" },
        { ko: "처진 눈썹", tag: "droopy eyebrows" },
        { ko: "얇은 눈썹", tag: "thin eyebrows" }
    ],

    pupilNormal: [
        { ko: "기본 동공", tag: "round pupils" },
        { ko: "반사광 동공", tag: "detailed pupils, eye reflection" },
        { ko: "초롱초롱한 동공", tag: "sparkling eyes, detailed pupils" },
        { ko: "맑은 홍채", tag: "clear eyes, detailed pupils" },

        { ko: "그라데이션 홍채", tag: "gradient eyes" },
        { ko: "투톤 홍채", tag: "two-tone eyes" },
        { ko: "다색 홍채", tag: "multicolored eyes" },
        { ko: "링 홍채", tag: "ringed eyes" },
        { ko: "소용돌이 홍채", tag: "squiggle eyes" },
        { ko: "줄무늬 홍채", tag: "striped eyes" },
        { ko: "무지개 홍채", tag: "iridescent eyes" },

        { ko: "단색 원형", tag: "solid circle eyes" },
        { ko: "텅 빈 눈", tag: "empty eyes" },
        { ko: "죽은 눈", tag: "dead eyes, empty eyes" },
        { ko: "광기 어린 눈", tag: "crazy eyes, insane eyes" },
        { ko: "눈물 고인 눈", tag: "watery eyes, glossy eyes" },
        { ko: "대시(-) 눈", tag: "dashed eyes" }
    ],

    pupilSpecial: [
        { ko: "세로 고양이 동공", tag: "slit pupils" },
        { ko: "가로 동공", tag: "horizontal pupils" },
        { ko: "토끼 모양 동공", tag: "rabbit-shaped pupils" },
        { ko: "나비 모양 동공", tag: "butterfly-shaped pupils" },
        { ko: "두족류(문어 등) 눈동자", tag: "cephalopod eyes" },

        { ko: "십자(+) 모양 동공", tag: "cross-shaped pupils" },
        { ko: "X자 모양 동공", tag: "x-shaped pupils" },
        { ko: "별 모양 동공", tag: "star-shaped pupils" },
        { ko: "하트 모양 동공", tag: "heart-shaped pupils" },
        { ko: "다이아몬드 모양 동공", tag: "diamond-shaped pupils" },
        { ko: "삼각형 모양 동공", tag: "triangle-shaped pupils" },
        { ko: "눈송이 모양 동공", tag: "snowflakes-shaped pupils" },
        { ko: "꽃 모양 동공", tag: "flower-shaped pupils" },
        { ko: "클로버 모양 동공", tag: "clover-shaped pupils" },
        { ko: "빛나는 발광 동공", tag: "glowing pupils, glowing eyes" },
        { ko: "시계 모양 동공", tag: "clock eyes" },
        { ko: "조준선 모양 동공", tag: "crosshair pupils" },
        { ko: "전기 볼트 모양 동공", tag: "lightning bolt-shaped pupils" },
        { ko: "방사능 심볼 동공", tag: "radiation symbol-shaped pupils" },
        { ko: "해골 모양 동공", tag: "skull-shaped pupils" },
        { ko: "양쪽이 서로 다른 동공", tag: "mismatched pupils" },
        { ko: "수축된 동공 (경직/공포)", tag: "constricted pupils" },
        { ko: "확대된 동공 (흥분/매료)", tag: "dilated pupils" }
    ],

    expression: [
        { ko: "무표정 (시선)", tag: "expressionless, looking at viewer" },
        { ko: "옅은 미소", tag: "light smile" },
        { ko: "부드러운 미소", tag: "kind smile" },
        { ko: "다문 미소", tag: "smile" },
        { ko: "활짝 웃음", tag: "open mouth, grin, happy" },
        { ko: "건치 미소", tag: "grin, showing teeth" },
        { ko: "으쓱 미소", tag: "smirk" },
        { ko: "고양이 입 (:3)", tag: "cat smile, :3" },
        { ko: "물결 미소", tag: "wavy mouth, smile" },
        { ko: "웃음 참기", tag: "stifled laugh, holding back laughter" },
        { ko: "킥킥 웃음", tag: "giggling, laughing" },
        { ko: "기쁨의 눈물", tag: "happy tears, crying with a smile" },
        { ko: "매우 신남", tag: "excited, very happy, joyful" },

        { ko: "무표정", tag: "expressionless, blank face" },
        { ko: "멍함", tag: "blank stare, vacant eyes" },
        { ko: "둔감 / 맹함", tag: "clueless, innocent" },
        { ko: "진지함", tag: "serious expression" },
        { ko: "골똘한 생각", tag: "thinking, thoughtful" },
        { ko: "편안함 / 여유", tag: "relaxing, calm" },
        { ko: "몽롱 / 백일몽", tag: "dreaming, daydreaming" },
        { ko: "평온히 눈 감음", tag: "closed eyes, peaceful" },
        { ko: "오리 입 (o3o)", tag: "pursed lips, o3o" },
        { ko: "하품", tag: "yawning, sleepy" },
        { ko: "졸림", tag: "sleepy, drowsy, heavy eyelids" },
        { ko: "기절 / 탈진 (x_x)", tag: "exhausted, dizzy, x_x" },
        { ko: "최면 / 몽롱", tag: "drugged, hypnosis, trance" },
        { ko: "술 취함", tag: "drunk, flushed face, dizzy" },
        { ko: "수면", tag: "sleeping, asleep" },

        { ko: "자신감", tag: "confident, smug" },
        { ko: "단호한 결의", tag: "determined, resolute" },
        { ko: "고도의 집중", tag: "concentrating, focused" },
        { ko: "입술 핥기", tag: "licking lips, satisfied" },
        { ko: "감탄 / 벌린 입", tag: "open mouth, surprised, awe" },

        { ko: "비웃음 (스머크)", tag: "smirk, mocking" },
        { ko: "거만함", tag: "smug, arrogant smile" },
        { ko: "도야가오 (뿌듯)", tag: "doyagao, smug expression" },
        { ko: "트롤 페이스", tag: "troll face, mocking smile" },
        { ko: "장난스러운 미소", tag: "v-shaped eyebrows, smile" },
        { ko: "메롱 (:p)", tag: "stuck out tongue, :p" },
        { ko: "장난기 고양이 입", tag: "cat smile, playful" },

        { ko: "혼란 / 어리둥절", tag: "confused, puzzled" },
        { ko: "말문 막힘 / 의문", tag: "questioning, speechless" },
        { ko: "호기심", tag: "curious, inquisitive" },

        { ko: "걱정 / 불안", tag: "worried, anxious" },
        { ko: "두려움 / 무력감", tag: "distress, fearful" },
        { ko: "긴장", tag: "nervous, tense" },
        { ko: "어색한 미소", tag: "nervous smile, forced smile" },
        { ko: "패닉 / 공포", tag: "panicking, terrified" },
        { ko: "비명", tag: "screaming, horror" },
        { ko: "경악", tag: "horrified, shocked" },
        { ko: "고통 / 찡그림", tag: "pain, wince, grimace" },
        { ko: "메스꺼움 / 아픔", tag: "sick, nauseous" },
        { ko: "난처함", tag: "furrowed brow, troubled" },
        { ko: "재채기", tag: "sneezing" },
        { ko: "기침", tag: "coughing" },

        { ko: "수줍음", tag: "shy, bashful" },
        { ko: "설렘 / 당황", tag: "flustered, blushing, flustered expression" },
        { ko: "부끄러움", tag: "embarrassed, shy smile" },
        { ko: "시선 회피", tag: "averting eyes, looking away, shy" },
        { ko: "수줍은 곁눈질", tag: "looking to the side, shy glance" },
        { ko: "수줍은 홍조", tag: "blush, shy cheeks" },
        { ko: "난처한 물결 입", tag: "wavy mouth, troubled" },
        { ko: "츤데레", tag: "tsundere, annoyed yet blushing" },
        { ko: "어색함", tag: "awkward, speechless" },
        { ko: "깜짝 놀람", tag: "surprised, wide-eyed, parted lips" },
        { ko: "창백해짐", tag: "turn pale, frightened" },
        { ko: "손가락 꼼지락", tag: "fidgeting, nervous gesture" },
        { ko: "불쾌 / 당황", tag: "open mouth, displeased" },

        { ko: "슬픔", tag: "sad, sorrowful" },
        { ko: "우울함", tag: "depressed, gloomy" },
        { ko: "쓸쓸함 / 외로움", tag: "lonely, desolate" },
        { ko: "절망", tag: "despair, hopeless" },
        { ko: "서글픔", tag: "unhappy, miserable" },
        { ko: "슬픈 미소", tag: "sad smile, bittersweet" },
        { ko: "그렁그렁", tag: "tearing up, watery eyes" },
        { ko: "눈물 / 울음", tag: "crying, tears" },
        { ko: "눈 뜨고 울음", tag: "crying with eyes open" },
        { ko: "오열 / 흐느낌", tag: "sobbing, crying hard" },
        { ko: "눈물 닦기", tag: "wiping tears" },
        { ko: "실망", tag: "disappointed, let down" },
        { ko: "뾰로통", tag: "pout, sulking" },
        { ko: "볼 부풀림", tag: "puffy cheeks, sulking, pout" },
        { ko: "트라우마", tag: "traumatized, haunted eyes" },
        { ko: "페이스팜 (이마 짚음)", tag: "facepalm, disappointment" },
        { ko: "짜증 / 불만", tag: "frustrated, annoyed" },
        { ko: "폭포 눈물", tag: "streaming tears" },
        { ko: "개그 눈물방울", tag: "teardrop, anime tears" },
        { ko: "코믹 우울", tag: "gloom, comical sad" },
        { ko: "시무룩 (:c)", tag: "frown, :c" },

        { ko: "혐오 / 경멸", tag: "disgust, contempt" },
        { ko: "질투", tag: "jealous, envious" },
        { ko: "일그러진 얼굴", tag: "grimace, distorted face" },
        { ko: "차가운 노려봄", tag: "scowl, glaring, hostile" },
        { ko: "한숨 / 답답함", tag: "sigh, exasperated" },
        { ko: "지루함", tag: "bored, tedious" },
        { ko: "시큰둥함", tag: "unamused, unimpressed" },
        { ko: "완전 무관심", tag: "completely unamused" },
        { ko: "지침 / 피로", tag: "exhausted, tired, fatigued" },
        { ko: "코믹 진지", tag: "comically serious" },
        { ko: "얼굴 그림자", tag: "shaded face, shadow over face" },
        { ko: "반쪽 음영", tag: "partially shaded face" },
        { ko: "어둠에 가린 얼굴", tag: "face in shadow" },
        { ko: "화남", tag: "angry, mad" },
        { ko: "성가심 / 짜증", tag: "annoyed, irritated" },
        { ko: "격노", tag: "furious, enraged" },
        { ko: "고함 / 분노", tag: "shouting, yelling, angry mouth" },
        { ko: "눈 가늘게 뜸", tag: "squinting, narrowing eyes" },
        { ko: "불만 가득 다문 입", tag: "pursed lips, displeased" },
        { ko: "게스가오 (사악함)", tag: "gesugao, evil grin, sadistic smile" },
        { ko: "얀데레", tag: "yandere, psycho smile" },
        { ko: "광기", tag: "crazy, insane, unhinged" },
        { ko: "풀린 광기 눈", tag: "crazy eyes, wild eyes" },
        { ko: "광기 미소", tag: "crazy smile, maniacal smile" },
        { ko: "사악한 눈초리", tag: "evil eyes, sinister gaze" },
        { ko: "비열한 미소", tag: "evil smile, wicked grin" },
        { ko: "섬뜩한 이빨 미소", tag: "evil grin, showing teeth, sinister smile" }
    ],

    kemonomimi: [
        { ko: "고양이 귀 & 꼬리", tag: "cat ears, cat tail" },
        { ko: "흑표범 귀 & 꼬리", tag: "black panther ears, panther tail" },
        { ko: "사자 귀 & 꼬리", tag: "lion ears, lion tail" },
        { ko: "호랑이 귀 & 꼬리", tag: "tiger ears, tiger tail" },
        { ko: "강아지 귀 & 꼬리", tag: "dog ears, dog tail" },
        { ko: "늑대 귀 & 꼬리", tag: "wolf ears, wolf tail" },
        { ko: "여우 귀 & 꼬리", tag: "fox ears, fox tail" },
        { ko: "사막여우 귀 & 꼬리", tag: "fennec fox ears, fennec tail" },
        { ko: "너구리 귀 & 꼬리", tag: "raccoon ears, raccoon tail" },
        { ko: "붉은 판다 귀 & 꼬리", tag: "red panda ears, red panda tail" },

        { ko: "토끼 귀 & 꼬리", tag: "rabbit ears, rabbit tail" },
        { ko: "쥐 귀 & 꼬리", tag: "mouse ears, mouse tail" },
        { ko: "다람쥐 귀 & 꼬리", tag: "squirrel ears, squirrel tail" },
        { ko: "햄스터 귀", tag: "hamster ears" },
        { ko: "곰 귀 & 꼬리", tag: "bear ears, bear tail" },
        { ko: "판다 귀 & 꼬리", tag: "panda ears, panda tail" },
        { ko: "돼지 귀 & 꼬리", tag: "pig ears, pig tail" },
        { ko: "소 뿔 & 꼬리", tag: "cow horns, cow tail" },
        { ko: "양 뿔 & 꼬리", tag: "sheep horns, sheep tail" },
        { ko: "염소 뿔 & 꼬리", tag: "goat horns, goat tail" },
        { ko: "말 귀 & 꼬리", tag: "horse ears, horse tail" },
        { ko: "사슴 뿔 & 꼬리", tag: "antlers, deer tail" },
        { ko: "박쥐 귀 & 날개", tag: "bat ears, bat wings" },

        { ko: "새 날개 & 깃털 귀", tag: "bird wings, feathered wings, bird ears" },
        { ko: "까마귀 날개 & 깃털", tag: "crow wings, black feathers" },
        { ko: "백조 날개 & 깃털", tag: "swan wings, white feathers" },
        { ko: "올빼미 귀 & 날개", tag: "owl ears, owl wings" },
        { ko: "뱀 비늘 & 꼬리", tag: "snake scales, lamia, snake tail" },
        { ko: "상어 지느러미 & 꼬리", tag: "shark fin, shark tail" },
        { ko: "인어 꼬리", tag: "mermaid tail" },
        { ko: "문어 촉수", tag: "tentacles, octopus tentacles" },

        { ko: "치타 귀 & 꼬리", tag: "cheetah ears, cheetah tail, spotted" },
        { ko: "스라소니 귀 & 꼬리", tag: "lynx ears, ear tufts, bobtail" },
        { ko: "하이에나 귀 & 갈기", tag: "hyena ears, hyena tail" },
        { ko: "코요테 귀 & 꼬리", tag: "coyote ears, coyote tail" },
        { ko: "수달 귀 & 꼬리", tag: "otter ears, otter tail" },
        { ko: "족제비 / 담비 귀", tag: "ferret ears, ferret tail" },
        { ko: "스컹크 귀 & 꼬리", tag: "skunk ears, fluffy striped tail" },
        { ko: "오소리 귀 & 꼬리", tag: "badger ears, badger tail" },
        { ko: "고슴도치 귀 & 가시", tag: "hedgehog ears, spiky hair" },
        { ko: "코알라 귀", tag: "koala ears" },
        { ko: "캥거루 귀 & 꼬리", tag: "kangaroo ears, kangaroo tail" },
        { ko: "알파카 / 라마 귀", tag: "alpaca ears, fluffy ears" },
        { ko: "기린 뿔 & 귀", tag: "giraffe horns, giraffe ears" },
        { ko: "얼룩말 귀 & 꼬리", tag: "zebra ears, zebra tail" },
        { ko: "순록 뿔 & 귀", tag: "reindeer antlers, reindeer ears" },
        { ko: "유니콘 귀 & 뿔", tag: "horse ears, unicorn horn" },
        { ko: "페가수스 귀 & 날개", tag: "horse ears, feathered wings" },
        { ko: "롭이어 (처진 토끼귀)", tag: "floppy rabbit ears, lop-eared" },
        { ko: "강아지 처진 귀", tag: "floppy dog ears" },
        { ko: "독수리 / 매 날개", tag: "eagle wings, hawk wings, talons" },
        { ko: "공작 꼬리 깃털", tag: "peacock tail feathers, peacock wings" },
        { ko: "홍학 / 플라밍고 날개", tag: "flamingo wings, pink feathers" },
        { ko: "펭귄 날개 & 꼬리", tag: "penguin wings, penguin tail" },
        { ko: "꿀벌 더듬이 & 날개", tag: "bee antennae, bee wings, striped tail" },
        { ko: "나방 더듬이 & 날개", tag: "moth antennae, moth wings, fluffy collar" },
        { ko: "잠자리 날개", tag: "dragonfly wings, translucent wings" },
        { ko: "무당벌레 껍질 날개", tag: "ladybug wings, antennae" },
        { ko: "사마귀 낫 & 더듬이", tag: "mantis arms, antennae" },
        { ko: "전갈 집게 & 독침 꼬리", tag: "scorpion tail, stinger" },
        { ko: "도마뱀 비늘 & 꼬리", tag: "lizard tail, lizard scales" },
        { ko: "카멜레온 꼬리 & 눈", tag: "chameleon tail, curled tail" },
        { ko: "악어 비늘 & 꼬리", tag: "crocodile tail, alligator scales" },
        { ko: "거북이 등껍질", tag: "turtle shell, tortoise shell" },
        { ko: "개구리 물갈퀴 & 눈", tag: "frog eyes, webbed hands" },
        { ko: "아홀로틀 아가미 & 꼬리", tag: "axolotl gills, axolotl tail" },
        { ko: "돌고래 지느러미 & 꼬리", tag: "dolphin tail, dorsal fin" },
        { ko: "범고래 지느러미 & 꼬리", tag: "orca tail, black and white fin" },
        { ko: "해파리 촉수 & 갓", tag: "jellyfish tentacle hair, translucent bell" },
        { ko: "가오리 날개 지느러미", tag: "manta ray wings, stingray tail" },
        { ko: "해마 꼬리 & 지느러미", tag: "seahorse tail, fin ears" },
        { ko: "금붕어 지느러미 꼬리", tag: "goldfish tail, flowing fins" },
        { ko: "장어 / 곰치 꼬리", tag: "eel tail, aquatic fins" }
    ],

    nonhuman: [
        { ko: "엘프 귀", tag: "pointy ears, elf" },
        { ko: "하프 엘프", tag: "half-elf, pointy ears" },
        { ko: "숲의 요정 (픽시)", tag: "fairy wings, pointy ears, pixie" },
        { ko: "나비 요정", tag: "butterfly wings, antennae, fairy" },
        { ko: "물의 정령", tag: "water spirit, translucent, aquatic, fins" },
        { ko: "불의 정령", tag: "fire spirit, flaming hair, embers" },

        { ko: "천사", tag: "halo, angel wings, white wings" },
        { ko: "치천사 (다중 날개·눈)", tag: "seraphim, multiple wings, biblically accurate angel" },
        { ko: "타락천사", tag: "fallen angel, black wings, broken halo" },
        { ko: "악마", tag: "demon horns, demon tail, demon wings" },
        { ko: "서큐버스 / 인큐버스", tag: "succubus, demon horns, heart-tipped tail, bat wings" },
        { ko: "발키리", tag: "valkyrie, winged headwear, feathered wings" },

        { ko: "흡혈귀", tag: "vampire, fangs, pale skin" },
        { ko: "유령 / 고스트", tag: "ghost, translucent, floating, will-o'-the-wisp" },
        { ko: "강시", tag: "jiangshi, ofuda on forehead, pale skin" },
        { ko: "좀비 / 꿰맨 인형", tag: "zombie, stitches, stitched skin, pale skin" },
        { ko: "미라", tag: "mummy, bandages, wrapped" },
        { ko: "듀라한", tag: "dullahan, headless, detached head" },
        { ko: "구체관절 인형", tag: "ball-jointed doll, doll joints, porcelain skin" },
        { ko: "마리오네트", tag: "marionette, strings, doll joints" },
        { ko: "해골 / 리치", tag: "skeleton, skull, skeletal parts" },

        { ko: "오니", tag: "oni, oni horns, fangs" },
        { ko: "외뿔 오니", tag: "single horn, oni, fangs" },
        { ko: "텐구", tag: "tengu, black wings, crow wings" },
        { ko: "구미호", tag: "nine-tailed fox, fox ears, multiple tails" },
        { ko: "기린 / 해태", tag: "qilin, antlers, scales" },
        { ko: "설녀", tag: "yuki-onna, ice crystals, pale skin" },
        { ko: "드래곤", tag: "dragon horns, dragon tail, dragon wings" },
        { ko: "용인", tag: "dragon girl, scales, dragon horns" },
        { ko: "유니콘", tag: "unicorn, single horn, forehead horn" },
        { ko: "메두사 / 고르곤", tag: "gorgon, medusa, snake hair" },
        { ko: "슬라임 인간", tag: "slime girl, translucent skin, goo" },
        { ko: "드라이어드 (식물)", tag: "dryad, plant girl, wooden horns, flowers growing on body" },
        { ko: "곤충 인간", tag: "insect girl, antennae, insect wings" },
        { ko: "아라크네 (거미)", tag: "arachne, multiple eyes, spider web" },
        { ko: "하피", tag: "harpy, feathered arms, bird wings" },
        { ko: "켄타우로스", tag: "centaur, horse body" },
        { ko: "오크 / 트롤", tag: "orc, tusks, pointy ears" },
        { ko: "고블린", tag: "goblin, large pointy ears" },

        { ko: "사이클롭스 (외눈)", tag: "cyclops, one-eyed, single eye" },
        { ko: "다중 눈 (제3의 눈)", tag: "third eye, extra eyes, multiple eyes" },
        { ko: "다중 팔", tag: "multiple arms, four arms, extra arms" },
        { ko: "촉수 크리처", tag: "tentacles, tentacle hair" },
        { ko: "비인간 피부색", tag: "colored skin, blue skin, purple skin" },
        { ko: "외계인", tag: "alien, antennae, black sclera" },
        { ko: "그림자 인간", tag: "shadow person, dark silhouette, glowing eyes" },
        { ko: "수정 / 보석 인간", tag: "crystal, gemstone body, crystalline" },
        { ko: "안드로이드", tag: "android, mechanical joints, barcode" },
        { ko: "사이보그", tag: "cyborg, mechanical arm, cybernetic, visor" },
        { ko: "메카무스메", tag: "mecha musume, mechanical wings, mechanical halo" },
        { ko: "풀 메카닉 로봇", tag: "robot, mecha, full armor, glowing core" },
        { ko: "홀로그램 / AI", tag: "hologram, translucent, digital, cyber" },
        { ko: "TV 헤드 (오브젝트)", tag: "tv head, monitor head, object head" },
        { ko: "시계 헤드 (오브젝트)", tag: "clock head, object head, gears" },
        { ko: "새장 헤드 (오브젝트)", tag: "birdcage head, object head" },
        { ko: "꽃 / 화분 헤드", tag: "flower head, plant head, object head" },
        { ko: "보석 / 크리스탈 헤드", tag: "crystal head, gemstone head, object head" },
        { ko: "태양 / 달 헤드", tag: "sun head, moon head, celestial object head" },
        { ko: "해골 / 사슴두개골 헤드", tag: "skull head, deer skull, wendigo" },
        { ko: "가면 / 도자기 얼굴", tag: "porcelain mask, blank mask, featureless face" },
        { ko: "다크 엘프 (흑요석 피부)", tag: "dark elf, dark skin, pointy ears, white hair" },
        { ko: "반신 / 성좌 (후광·별빛)", tag: "deity, cosmic body, starry skin, divine halo" },
        { ko: "태양신 (불꽃 광배)", tag: "sun god, solar halo, golden aura, radiant" },
        { ko: "달의 신 (초승달·은빛)", tag: "moon deity, crescent halo, silver hair, ethereal" },
        { ko: "바다의 신 (산호·진주)", tag: "sea deity, coral horns, pearls, aquatic aura" },
        { ko: "죽음의 신 / 사신", tag: "grim reaper, skull motif, tattered cloak, ghostly" },
        { ko: "시간의 신 (톱니·모래시계)", tag: "time deity, clockwork halo, floating gears" },
        { ko: "가디언 / 석상 골렘", tag: "living statue, marble skin, cracks, stone body" },
        { ko: "금수복 (킨츠기 피부)", tag: "kintsugi, golden cracks on skin, porcelain body" },
        { ko: "스테인드글라스 신체", tag: "stained glass body, translucent mosaic, glowing" },
        { ko: "용암 / 마그마 인간", tag: "magma body, glowing cracks, lava hair, volcanic" },
        { ko: "얼음 / 빙하 인간", tag: "ice body, frost skin, icicle horns, translucent ice" },
        { ko: "번개 / 플라즈마 정령", tag: "lightning spirit, electric aura, glowing eyes, static" },
        { ko: "구름 / 안개 정령", tag: "cloud hair, vapor body, ethereal mist, floating" },
        { ko: "별밤 / 은하수 피부", tag: "galaxy skin, starry body, nebula hair, cosmic" },
        { ko: "종이 / 종이접기 인간", tag: "origami, paper body, folded texture" },
        { ko: "태엽 / 클락워크 인형", tag: "clockwork, wind-up key, exposed gears, mechanical" },
        { ko: "봉제인형 / 헝겊 인형", tag: "plushie, ragdoll, button eyes, stitched seams" },
        { ko: "밀랍 인형 (녹아내림)", tag: "wax body, melting skin, candle flame" },
        { ko: "버섯 / 균류 인간", tag: "mushroom cap hat, fungal growth, spores, forest spirit" },
        { ko: "산호초 인간", tag: "coral growing on body, sea anemone, aquatic" },
        { ko: "나비 떼 / 곤충 군집", tag: "dissolving into butterflies, swarm of butterflies" },
        { ko: "가시덩굴 / 장미 인간", tag: "thorns, rose vines wrapped around body, blood red" },
        { ko: "심해어 / 발광 인간", tag: "bioluminescent, anglerfish lure, deep sea, glowing spots" },
        { ko: "가고일 (석조 날개·뿔)", tag: "gargoyle, stone skin, bat wings, horns" },
        { ko: "스핑크스 (사자 날개)", tag: "sphinx, lion ears, feathered wings, royal" },
        { ko: "그리핀 (독수리·사자)", tag: "griffin, feathered wings, lion tail, talons" },
        { ko: "키메라 (혼합 환수)", tag: "chimera, mismatched horns, snake tail, wings" },
        { ko: "바실리스크 / 뱀눈", tag: "basilisk, slit pupils, reptile scales, crown horns" },
        { ko: "밴시 (유령·음파)", tag: "banshee, wailing, floating hair, pale spectral" },
        { ko: "네크로맨서 / 영혼 결속", tag: "spectral limbs, floating skulls, dark mist" },
        { ko: "아스트랄 / 영체 투영", tag: "astral projection, glowing outline, semi-transparent" },
        { ko: "글리치 / 오류 데이터", tag: "glitch effect, pixelated body, chromatic aberration" },
        { ko: "거울 / 유리 파편 인간", tag: "shattered glass body, mirror fragments, reflective" },
        { ko: "잉크 / 수묵화 인간", tag: "ink body, dripping black ink, painterly silhouette" },
        { ko: "빛의 실루엣 (발광체)", tag: "light being, glowing white silhouette, blinding aura" },
        { ko: "어비스 / 심연 크리처", tag: "void creature, pitch black limbs, multiple glowing eyes" }
    ],

    outfitSetFemale: [
        { ko: "프레피 교복", tag: "school uniform, blazer, pleated skirt, collared shirt, ribbon" },
        { ko: "세라복", tag: "seifuku, sailor collar, pleated skirt" },
        { ko: "가디건 교복", tag: "cardigan, school uniform, pleated skirt, shirt" },
        { ko: "니트 조끼 교복", tag: "school uniform, sweater vest, skirt, loafers" },
        { ko: "체육복 (블루머/저지)", tag: "gym uniform, jersey, track pants" },
        { ko: "마법학교 로브", tag: "wizard school uniform, robe, emblem badge, scarf" },
        { ko: "테니스 룩", tag: "tennis outfit, polo shirt, pleated sports skirt, visor cap" },
        { ko: "치어리더 복", tag: "cheerleader uniform, pleated skirt, cropped top, pom-poms" },

        { ko: "오버핏 후드 & 카고", tag: "oversized hoodie, cargo pants, sneakers" },
        { ko: "니트 & 미니스커트", tag: "knit sweater, miniskirt, knee-high socks" },
        { ko: "크롭탑 & 청바지", tag: "crop top, high-waist denim jeans, belt" },
        { ko: "오프숄더 & 롱스커트", tag: "off-shoulder blouse, long skirt, straw hat" },
        { ko: "청자켓 & 원피스", tag: "denim jacket, summer dress, casual" },
        { ko: "멜빵바지 (오버롤)", tag: "dungarees, overalls, t-shirt" },
        { ko: "보헤미안 원피스", tag: "boho dress, floral pattern, long sleeves" },
        { ko: "스케이터 스트릿", tag: "skater fashion, oversized t-shirt, baggy pants, beanie" },
        { ko: "아웃도어 / 등산복", tag: "outdoor clothing, puffer jacket, hiking pants, backpack" },
        { ko: "겨울 코트 & 목도리", tag: "wool coat, scarf, turtleneck sweater, winter fashion" },
        { ko: "한겨울 롱패딩", tag: "long padded jacket, winter scarf, beanie, cold weather" },
        { ko: "비키니 & 시스루 가운", tag: "bikini, sheer cover-up, summer beachwear, sun hat" },
        { ko: "여름 선드레스", tag: "sun dress, floral pattern, straw hat, sandals" },
        { ko: "루즈핏 홈웨어", tag: "loungewear, loose t-shirt, sweatpants, barefoot" },
        { ko: "슬립 나이트웨어", tag: "nightwear, slip dress, lace trim, cozy pajamas" },
        { ko: "동물 파자마 (키구루미)", tag: "animal pajamas, kigurumi, cat hoodie, fluffy" },

        { ko: "고딕 로리타", tag: "gothic lolita, frilled dress, lace trim, choker" },
        { ko: "스위트 로리타", tag: "sweet lolita, pastel dress, frills, apron" },
        { ko: "클래식 메이드", tag: "maid apron, maid dress, frilled headpiece" },
        { ko: "사이버 메이드", tag: "cyber maid, futuristic maid dress, glowing trim, apron" },
        { ko: "아이돌 무대의상", tag: "idol stage outfit, flashy dress, frills, ribbon, microphone" },
        { ko: "록스타 패션", tag: "rockstar fashion, ripped jeans, studded jacket, electric guitar" },
        { ko: "서커스 곡예사", tag: "circus acrobat, colorful leotard, ruffled collar, top hat" },
        { ko: "지하돌 다크 룩", tag: "underground idol, dark stage outfit, garter belts, ribbons" },

        { ko: "팔라딘 갑옷", tag: "plate armor, ornate armor, cape, gauntlets, holy knight" },
        { ko: "발키리 갑옷", tag: "valkyrie armor, winged helmet, metal breastplate, cape" },
        { ko: "마법소녀 복장", tag: "magical girl, magical dress, frills, bow, magical wand" },
        { ko: "다크 마법소녀", tag: "dark magical girl, edgy magical dress, dark ribbons, star staff" },
        { ko: "네크로맨서 로브", tag: "necromancer robe, skull ornaments, dark magic, hooded cloak" },
        { ko: "룬 마법사 로브", tag: "rune mage, embroidered robe, glowing runes, circlet, staff" },
        { ko: "궁정 마법사 로브", tag: "court wizard, star-patterned robe, pointy wizard hat, magical aura" },
        { ko: "연금술사 코트", tag: "alchemist coat, corset, potion belt, goggles on head" },
        { ko: "암살자 레더 룩", tag: "assassin outfit, hood, leather armor, dark clothes, dagger sheath" },
        { ko: "다크엘프 암살자", tag: "dark elf assassin, leather armor, hood, twin daggers" },
        { ko: "궁수 레더 룩", tag: "archer outfit, leather vest, feather cap, quiver, boots" },
        { ko: "음유시인 복장", tag: "bard outfit, feathered hat, vest, lute strapped, boots" },
        { ko: "클레릭 수녀복", tag: "cleric nun, white habit, golden cross pendant, long modest dress" },
        { ko: "바바리안 모피 룩", tag: "barbarian warrior, fur mantle, leather harness, bone necklace" },
        { ko: "해적 선장 코트", tag: "pirate captain coat, tricorn hat, pirate shirt, boots" },
        { ko: "고스트 브라이드", tag: "ghost bride, tattered wedding dress, veil, withered bouquet" },
        { ko: "뱀파이어 고딕 드레스", tag: "vampire queen, ornate gothic dress, high collar, corset" },
        { ko: "서큐버스 드레스", tag: "succubus dress, tight red dress, cutout, heart motifs" },
        { ko: "천상의 여신 로브", tag: "goddess dress, toga, white flowing robe, gold accessories" },
        { ko: "요정 여왕 드레스", tag: "fairy queen, dress made of petals and leaves, glowing crown" },
        { ko: "머메이드 비즈 룩", tag: "mermaid aesthetic, pearl-encrusted top, fish scale pattern skirt" },

        { ko: "기모노 / 유카타", tag: "kimono, wide sleeves, obi sash, floral print" },
        { ko: "온천 유카타", tag: "onsen yukata, traditional Japanese robe, wooden geta sandals" },
        { ko: "치파오", tag: "cheongsam, qipao, slit skirt, hair bun" },
        { ko: "전통 한복", tag: "traditional Korean clothes, hanbok, jeogori, chima, norigae" },
        { ko: "개량 한복", tag: "modernized hanbok, short jeogori, casual skirt" },
        { ko: "아오자이", tag: "ao dai, traditional Vietnamese dress, slit tunic, pants" },
        { ko: "인도 사리", tag: "traditional Indian sari, draped silk fabric, gold embroidery" },
        { ko: "플라멩코 드레스", tag: "flamenco dress, ruffled tiered skirt, rose in hair" },
        { ko: "오니 전통 복장", tag: "oni traditional outfit, tiger-skin pattern skirt, thick rope belt" },

        { ko: "오피스 팬츠 수트", tag: "tailored suit jacket, pants, dress shirt, office lady" },
        { ko: "오피스 스커트 정장", tag: "suit jacket, pencil skirt, blouse, stockings" },
        { ko: "마피아 핀스트라이프 수트", tag: "mafia boss, pinstripe suit, fedora hat, red tie, sharp dress" },
        { ko: "버틀러 연미복", tag: "butler uniform, vest, pocket watch, tailcoat, trousers" },
        { ko: "경찰 제복", tag: "police uniform, peaked cap, shirt, skirt" },
        { ko: "간호사복", tag: "nurse uniform, nurse cap, apron dress" },
        { ko: "스튜어디스 제복", tag: "airline stewardess uniform, neckscarf, blazer" },
        { ko: "사서 앤틱 룩", tag: "librarian outfit, cardigan, pleated skirt, round glasses" },
        { ko: "카페 바리스타", tag: "cafe barista uniform, striped apron, white shirt, neat skirt" },

        { ko: "테크웨어 스트릿", tag: "techwear, tactical jacket, straps, cargo pants, futuristic" },
        { ko: "사이버펑크 네온 룩", tag: "cyberpunk, glowing jacket, futuristic outfit, crop top" },
        { ko: "사이버 닌자 슈트", tag: "cyber ninja, futuristic bodysuit, glowing lines, face mask" },
        { ko: "플러그 슈트", tag: "plugsuit, bodysuit, futuristic, sci-fi" },
        { ko: "메카 파워슈트", tag: "heavy powered exo-suit, mecha armor, sci-fi helmet" },
        { ko: "우주 해적 코트", tag: "space pirate, futuristic captain coat, laser pistol holster" },
        { ko: "우주비행사 수트", tag: "spacesuit, helmet, NASA style, sci-fi white suit" },
        { ko: "밀리터리 전투복", tag: "military uniform, camouflage jacket, combat boots" },
        { ko: "괴도 레더 슈트", tag: "phantom thief, tight black leather bodysuit, cape, mask" },
        { ko: "아포칼립스 생존자", tag: "post-apocalyptic, leather jacket, spiked shoulder pad, torn jeans" },
        { ko: "스팀펑크 비행사", tag: "steampunk aviator, leather flight jacket, aviator cap, brass goggles" },
        { ko: "빅토리아 귀부인 드레스", tag: "victorian dress, bustle skirt, lace parasol, elegant bonnet" },
        { ko: "역병 의사 코트", tag: "plague doctor, beak mask, long black coat, wide-brim hat" },
        { ko: "탐정 트렌치코트", tag: "detective coat, trench coat, fedora hat, magnifying glass" },
        { ko: "연구원 실험가운", tag: "lab coat, scientist, safety glasses, clipboard" },
        { ko: "쉐프 조리복", tag: "chef uniform, chef hat, apron, double-breasted jacket" },
        { ko: "화가 스모크 에이프런", tag: "painter smock, paint-splattered apron, beret, holding paintbrush" },
        { ko: "소방관 방화복", tag: "firefighter uniform, fire-resistant jacket, reflective stripes" },
        { ko: "차이니즈 고딕", tag: "chinese gothic, dark cheongsam, slit skirt, spider lily print, dark ribbons" },
        {
            ko: "사이버웨어 바디수트",
            tag: "cyberware, futuristic bodysuit, glowing neon lines, visor, tech accessories"
        },
        { ko: "현대식 퇴마사", tag: "exorcist outfit, modern hanbok, ofuda talismans, sacred rope, ritual garb" },
        { ko: "정령술사 튜닉", tag: "elemental shaman, feather and leather outfit, tribal markings, barefoot" },
        { ko: "마녀사냥꾼 코트", tag: "witch hunter, long leather coat, tricorn hat, cross belt, holster" },
        { ko: "인형사 연미복", tag: "puppeteer outfit, tailcoat, fingerless gloves, marionette strings aesthetic" },
        { ko: "사이버 웨이트리스", tag: "cyberpunk waitress, neon visor, short skirt, futuristic apron" },
        { ko: "디스토피아 스캐빈저", tag: "scavenger, patched jacket, gas mask worn on neck, tactical pouches" },
        { ko: "태엽 인형 드레스", tag: "clockwork doll, key on back tag, wind-up toy aesthetic, frilled dress" },
        { ko: "몽골 전통 델", tag: "mongolian deel, traditional winter robe, sash belt, fur hat" },
        { ko: "피겨 스케이팅 복", tag: "figure skating dress, sparkly sequins, ice skates, graceful costume" },
        { ko: "고양이 앞치마 홈웨어", tag: "cute house apron over t-shirt, cat ear headband, comfy home clothes" },
        { ko: "메탈릭 아이돌 룩", tag: "metallic idol outfit, futuristic stage dress, glowing lights, knee boots" },
        { ko: "아나운서 원피스", tag: "news anchor dress, elegant business dress, professional makeup" },
        { ko: "펜싱 유니폼", tag: "fencing uniform, white jacket, protective mask, padded pants" },
        { ko: "피크닉 체크 원피스", tag: "picnic dress, gingham pattern, sun hat, basket with fruits" },
        { ko: "안드로이드 메이드", tag: "android maid, mechanical joints visible, sleek maid uniform, glowing core" },

        { ko: "지뢰계 (지로케이) 룩", tag: "jirai kei, black and pink blouse, frills, platform shoes, ribbons" },
        { ko: "양산형 걸리쉬 룩", tag: "ryousangata, pastel blouse, tweed skirt, big ribbon, lace" },
        {
            ko: "Y2K 레트로 스트릿",
            tag: "y2k fashion, baby tee, low-rise cargo pants, butterfly clips, tinted sunglasses"
        },
        { ko: "발레코어 룩", tag: "balletcore, wrap cardigan, tulle skirt, leg warmers, ribbon flats" },
        { ko: "고프코어 룩", tag: "gorpcore, windbreaker jacket, utility vest, nylon pants, trail sneakers" },
        {
            ko: "올드머니 / 콰이어트 럭셔리",
            tag: "old money aesthetic, cashmere sweater, tailored trousers, pearl necklace"
        },
        { ko: "다크 아카데미아", tag: "dark academia, tweed blazer, turtleneck, plaid trousers, vintage satchel" },
        { ko: "코티지코어 드레스", tag: "cottagecore, puff-sleeve linen dress, corset belt, woven basket" },
        { ko: "페어리 그런지", tag: "fairy grunge, tattered lace top, layered maxi skirt, distressed knit" },
        { ko: "사이키델릭 레이브 룩", tag: "rave outfit, holographic crop top, neon fishnet, platform boots" },
        {
            ko: "하라주쿠 데코라 패션",
            tag: "decora kei, colorful layered clothes, countless hair clips, bright accessories"
        },
        { ko: "갸루 교복 (루즈삭스)", tag: "kogal, loose cardigan, short plaid skirt, loose socks, loafers" },
        { ko: "스카잔 양아치 룩", tag: "sukajan, embroidered souvenir jacket, sarashi chest wrap, baggy pants" },
        { ko: "모터사이클 라이더 룩", tag: "biker outfit, cropped leather jacket, racing pants, motorcycle helmet" },
        { ko: "레이싱걸 코스튬", tag: "race queen, sleek bodysuit, jacket, high boots, checkered flag motif" },
        { ko: "바니걸 코스튬", tag: "bunny girl, strapless leotard, rabbit ears, cuffs, pantyhose" },
        { ko: "카지노 딜러 복장", tag: "casino dealer, fitted waistcoat, bow tie, rolled-up sleeves, visor" },
        { ko: "마술사 연미복", tag: "stage magician, tailcoat, top hat, bow tie, white gloves, cape" },
        {
            ko: "오페라 디바 이브닝드레스",
            tag: "evening gown, off-shoulder velvet dress, opera gloves, diamond jewelry"
        },
        { ko: "웨딩 드레스", tag: "wedding dress, white lace gown, bridal veil, bouquet" },
        { ko: "칵테일 파티 미니드레스", tag: "cocktail dress, satin slip dress, strappy heels, clutch bag" },
        { ko: "로코코 궁정 드레스", tag: "rococo dress, pannier wide skirt, ornate bows, pastel silk, corset" },
        { ko: "르네상스 귀족 드레스", tag: "renaissance gown, square neckline, velvet sleeves, gold embroidery" },
        { ko: "고대 그리스 키톤", tag: "ancient Greek chiton, draped white fabric, golden laurel wreath, sandals" },
        {
            ko: "고대 이집트 파라오 룩",
            tag: "ancient Egyptian outfit, sheer pleated linen, gold collar necklace, headpiece"
        },
        { ko: "중세 선술집 웨이트리스", tag: "medieval tavern wench, peasant blouse, laced bodice, long apron skirt" },
        {
            ko: "검투사 (글래디에이터) 아머",
            tag: "gladiator armor, leather pteruges skirt, single shoulder guard, greaves"
        },
        { ko: "바이킹 여전사 갑옷", tag: "viking shieldmaiden, chainmail, fur-trimmed cloak, leather bracers" },
        { ko: "서부 개척시대 카우걸", tag: "cowgirl outfit, cowboy hat, fringed suede vest, denim shorts, boots" },
        { ko: "1920년대 플래퍼 드레스", tag: "flapper dress, fringed beaded dress, feather headband, pearl strands" },
        { ko: "1950년대 핀업 걸 룩", tag: "1950s pin-up, polka dot halterneck dress, flared skirt, headscarf" },
        { ko: "무협 협객 도복", tag: "wuxia martial artist, flowing hanfu robes, bracers, waist sash, sword" },
        { ko: "선녀 천의 무복", tag: "celestial maiden, flowing silk ribbons, translucent hanfu, hair ornaments" },
        { ko: "무녀복 (미코)", tag: "miko outfit, white kosode top, red hakama pants, hair ribbon" },
        {
            ko: "쿠노이치 닌자 복장",
            tag: "kunoichi, sleeveless ninja tunic, fishnet armor, thigh-high bandages, scarf"
        },
        { ko: "사무라이 하카마 아머", tag: "female samurai, hakama pants, chest armor plate, katana at waist" },
        { ko: "음양사 카리기누", tag: "onmyoji outfit, traditional Japanese kariginu robe, eboshi hat, talismans" },
        { ko: "화려한 오이란 기모노", tag: "oiran, layered ornate kimono, huge front-tied obi, elaborate hairpins" },
        { ko: "다이쇼 로망 하카마", tag: "taisho roman, floral kimono top, pleated hakama skirt, lace-up boots" },
        { ko: "발레리나 튀튀 드레스", tag: "ballerina, swan lake tutu, satin corset, pointe shoes, tiara" },
        {
            ko: "아이돌 치어 댄서 룩",
            tag: "k-pop stage outfit, asymmetrical crop top, pleated micro skirt, chain belt"
        },
        { ko: "수영복 (학교 스쿨미즈)", tag: "school swimsuit, navy one-piece swimsuit, name tag" },
        { ko: "래쉬가드 & 보드숏", tag: "rash guard, surf shorts, sporty beachwear" },
        { ko: "스쿠버 다이빙 웻슈트", tag: "wetsuit, diving suit, goggles on forehead, sleek neoprene" },
        { ko: "승마 기수 복장", tag: "equestrian outfit, tailored riding jacket, white breeches, tall riding boots" },
        { ko: "골프웨어 룩", tag: "golf wear, sleeveless polo, pleated skort, golf glove, visor" },
        { ko: "요가 / 필라테스 애슬레저", tag: "athleisure, sports bra, high-waist leggings, cropped zip-up" },
        { ko: "복서 파이터 룩", tag: "boxer outfit, satin boxing robe, sports bra, boxing shorts, hand wraps" },
        {
            ko: "정비공 / 메카닉 점프슈트",
            tag: "mechanic jumpsuit, unzipped coveralls, tank top underneath, wrench, oil smudges"
        },
        { ko: "편의점 / 마트 알바 유니폼", tag: "convenience store uniform, collared vest over shirt, name badge" },
        { ko: "우체부 / 배달원 유니폼", tag: "courier uniform, messenger bag, cap, polo shirt, shorts" },
        { ko: "조련사 / 사육사 사파리 룩", tag: "safari outfit, khaki button-up shirt, utility shorts, pith helmet" },
        { ko: "기관사 / 역무원 제복", tag: "train conductor uniform, double-breasted coat, gold buttons, peaked cap" },
        { ko: "성가대 / 합창단 가운", tag: "choir robe, pleated ceremonial gown, white collar" },
        { ko: "졸업식 학사모 & 가운", tag: "graduation gown, mortarboard cap, tassel, holding diploma" },
        { ko: "온천 타월 한 장", tag: "towel wrap, bath towel around body, damp hair, steam" },
        { ko: "남자친구 셔츠 (보이프렌드 핏)", tag: "boyfriend shirt, oversized white button-up shirt, bare legs" },
        { ko: "아방가르드 런웨이 드레스", tag: "avant-garde fashion, sculptural asymmetrical dress, metallic fabric" },
        { ko: "종말의 수녀 (전투 수녀)", tag: "battle nun, armored habit, slit skirt, rosary, tactical belt" },
        { ko: "신부 (프리스트) 사제복", tag: "priestess cassock, black clerical robe, white collar, silver cross" },
        { ko: "발레리코어 미니 원피스", tag: "balletcore, pale pink mini dress, sheer mesh layers, ribbon hair ties" },
        { ko: "코티지코어 플로럴 가운", tag: "cottagecore, smocked floral dress, puffed sleeves, straw hat" },
        { ko: "다크 아카데미아 플리츠", tag: "dark academia, tweed vest, pleated midi skirt, knee-high boots" },
        {
            ko: "올드머니 실크 블라우스",
            tag: "old money aesthetic, ivory silk blouse, pleated trousers, gold accessories"
        },
        { ko: "고프코어 아노락 셋업", tag: "gorpcore, lightweight anorak jacket, nylon shorts, trail running shoes" },
        {
            ko: "Y2K 로우라이즈 카고 데님",
            tag: "y2k fashion, rhinestone baby tee, low-rise wide cargo jeans, chunky sneakers"
        },
        { ko: "사이키델릭 홀로그램 룩", tag: "psychedelic style, iridescent holographic crop top, metallic skirt" },
        { ko: "페어리그런지 레이어드 룩", tag: "fairy grunge, distressed lace slip dress, knitted shrug, leg warmers" },
        { ko: "데코라 프릴 스트릿", tag: "decora kei, multicolored layered shirts, tutu skirt, hair clips overload" },
        {
            ko: "지뢰계 블랙 프릴 원피스",
            tag: "jirai kei, black tiered dress, white frills, heart buckle platform shoes"
        },
        { ko: "양산형 체크 셋업", tag: "ryousangata, pastel check top, pleated skirt, ribbon bow headband" },
        { ko: "하이틴 체커보드 니트", tag: "y2k hitech, checkerboard pattern cardigan, tennis skirt, loafers" },
        { ko: "시스루 튜렐 원피스", tag: "sheer tulle dress, slip lining, ethereal pastel colors, delicate jewelry" },
        { ko: "레트로 빈티지 폴카닷", tag: "1950s retro pinup, polka dot swing dress, wide waist belt, headband" },
        { ko: "시크한 라이더 레더 셋업", tag: "biker chic, distressed leather jacket, slim leather pants, boots" },
        { ko: "오버사이즈 바시티 자켓", tag: "varsity jacket, oversized athletic coat, hoodie, cyclist shorts" },
        { ko: "그런지 락스타 메쉬룩", tag: "grunge rock, distressed mesh top, band t-shirt, plaid skirt" },
        { ko: "보호시크 자수 가운", tag: "boho chic, embroidered long kaftan dress, fringe vest, layered necklaces" },
        { ko: "프렌치 시크 스트라이프", tag: "french chic, navy striped tee, cropped straight jeans, ballet flats" },
        { ko: "어반 미니멀 슬립원피스", tag: "urban minimal, satin midi slip dress, minimalist blazer, mules" },
        { ko: "소프트 웜 패딩 점퍼", tag: "puffer jacket, soft pastel puffer coat, fleece sweatpants, beanie" },
        { ko: "포근한 모헤어 가디건", tag: "mohair cardigan, fluffy knit sweater, wool skirt, tights" },
        { ko: "벨벳 윈터 캐주얼", tag: "velvet tracksuit, plush hoodie, matching sweatpants, sneakers" },
        { ko: "테디베어 플리스 코트", tag: "teddy bear coat, oversized fluffy fleece jacket, turtleneck, boots" },
        { ko: "체크 패턴 블레이저", tag: "plaid blazer, turtleneck knit, straight slacks, loafers" },
        { ko: "트위드 자켓 & 스커트", tag: "tweed jacket, matching skirt, pearl buttons, classy chic" },
        { ko: "언발란스 컷아웃 원피스", tag: "cutout dress, asymmetric shoulder design, fitted bodycon dress" },
        { ko: "새틴 홀터넥 드레스", tag: "halterneck dress, glossy satin fabric, minimalist evening style" },
        { ko: "오프숄더 리브드 니트", tag: "off-shoulder ribbed sweater, denim mini skirt, knee boots" },
        { ko: "크롭 후드집업 셋업", tag: "cropped zip-up hoodie, high-waist sweat shorts, sporty sneakers" },
        { ko: "와이드 슬랙스 오피스룩", tag: "wide-leg slacks, tailored sleeveless top, minimalist belt" },
        { ko: "핀스트라이프 베스트 셋업", tag: "pinstripe waistcoat, matching trousers, smart formal look" },
        { ko: "시스루 레이스 블라우스", tag: "sheer lace blouse, bralette underneath, high-waist denim" },
        { ko: "새미오버핏 코튼 셔츠", tag: "cotton button-down shirt, rolled sleeves, bicycle shorts" },
        { ko: "플리츠 롱스커트 셋업", tag: "pleated midi skirt, matching loose knit top, cozy aesthetic" },
        { ko: "언발란스 캐스케이드 스커트", tag: "cascade skirt, asymmetrical hem dress, futuristic chic" },
        { ko: "메탈릭 실버 파티룩", tag: "metallic silver dress, shiny fabric, futuristic party style" },
        { ko: "페이턴트 레더 코트", tag: "patent leather trench coat, glossy finish, dark edgy fashion" },
        { ko: "스포티 테니스 스커트룩", tag: "tennis skirt, cropped athletic polo, white sneakers" },
        { ko: "러블리 뷔스티에 원피ส", tag: "bustier dress, floral print layered over basic t-shirt, casual" },
        { ko: "카라 플레어 미니원피스", tag: "collared flare mini dress, retro 60s mood, white boots" },
        { ko: "스트랩 크로스 바디 자켓", tag: "strappy techwear jacket, asymmetrical crop top, cargo pants" },
        { ko: "네온 컬러 포인트 스트릿", tag: "neon green accents, black windbreaker, joggers, sneakers" },
        { ko: "퍼프 슬리브 코튼 원피스", tag: "puff sleeve cotton dress, square neckline, pastoral style" },
        { ko: "셔링 드레이프 원피스", tag: "ruched draping dress, elegant body-hugging silhouette" },
        { ko: "데님 오버사이즈 셔츠룩", tag: "oversized denim shirt worn as dress, thick belt, long boots" },
        { ko: "하이넥 크롭 니트룩", tag: "high-neck crop sweater, cargo skirt, leg warmers" },
        { ko: "모던 시크 터틀넥 셋업", tag: "fitted turtleneck, midi pencil skirt, leather boots" },
        { ko: "스웨이드 프린지 자켓", tag: "suede fringe jacket, western style denim, cowboy boots" },
        { ko: "벨벳 고딕 초커 원피스", tag: "velvet gothic dress, lace trim, dark romantic aesthetic" },
        { ko: "스트라이프 럭비 셔츠", tag: "rugby shirt, oversized striped polo collar top, denim shorts" },
        { ko: "니트 베스트 레이어드 룩", tag: "knit vest over white shirt, pleated mini skirt, loafers" },
        { ko: "퍼 트림 크롭 자켓", tag: "fur-trimmed crop jacket, low-rise jeans, glam 2000s style" },
        { ko: "데님 코르셋 탑 셋업", tag: "denim corset top, matching flared jeans, layered chains" },
        { ko: "글리터 스파클링 원피스", tag: "glitter sequin mini dress, party glam, sparkling lights" },
        { ko: "파스텔 톤 셋업 수트", tag: "pastel lavender suit jacket, matching trousers, white tee" },
        { ko: "스트링 조거팬츠 힙합룩", tag: "string joggers, oversized graphic hoodie, bucket hat" },
        { ko: "리넨 서머 캐주얼 셋업", tag: "linen crop top, matching linen wide pants, summer vacation look" },
        { ko: "시폰 랩 미디 원피스", tag: "chiffon wrap dress, floral print, light summer breeze style" },
        { ko: "어반 스트릿 후드 원피스", tag: "oversized hoodie dress, long socks, platform sneakers" }
    ],

    outfitSetMale: [
        { ko: "프레피 교복", tag: "school uniform, blazer, collared shirt, necktie, trousers" },
        { ko: "가디건 교복", tag: "cardigan, school uniform, trousers, shirt" },
        { ko: "니트 조끼 교복", tag: "school uniform, sweater vest, collared shirt, slacks" },
        { ko: "가쿠란", tag: "gakuran, stand-up collar, school uniform, trousers" },
        { ko: "체육복 (저지)", tag: "gym uniform, track jacket, track pants" },
        { ko: "마법학교 로브", tag: "wizard school uniform, cloak, emblem badge, necktie, trousers" },
        { ko: "아카데미 망토 교복", tag: "academy uniform, shoulder cape, gold buttons, formal trousers" },

        { ko: "스트릿 자켓 & 카고", tag: "streetwear, oversized jacket, cargo pants, sneakers" },
        { ko: "후드티 & 청바지", tag: "hoodie, denim jeans, casual" },
        { ko: "항공점퍼 (MA-1)", tag: "bomber jacket, t-shirt, slacks" },
        { ko: "오버핏 니트", tag: "oversized knit sweater, casual trousers" },
        { ko: "청청 패션", tag: "denim jacket, denim jeans, t-shirt" },
        { ko: "체크 셔츠 레이어드", tag: "plaid shirt, t-shirt, casual pants" },
        { ko: "트렌치코트 & 터틀넥", tag: "trench coat, turtleneck, dark trousers" },
        { ko: "겨울 롱코트 & 목도리", tag: "wool coat, winter scarf, knit sweater, slacks" },
        { ko: "한겨울 롱패딩", tag: "long padded jacket, hoodie, winter pants, cold weather" },
        { ko: "스케이터 스트릿", tag: "skater fashion, graphic t-shirt, baggy pants, beanie" },
        { ko: "아메카지 워크웨어", tag: "workwear jacket, chinos, leather boots, rugged casual" },
        { ko: "하와이안 셔츠", tag: "hawaiian shirt, floral print, shorts, summer casual" },
        { ko: "맨투맨 홈웨어", tag: "loungewear, sweatshirt, sweatpants, relaxed" },

        { ko: "3피스 정장", tag: "tailored suit, 3-piece suit, dress shirt, vest, tie" },
        { ko: "비즈니스 캐주얼", tag: "dress shirt, rolled-up sleeves, slacks, business casual" },
        { ko: "턱시도", tag: "tuxedo, bow tie, formal wear, suit jacket" },
        { ko: "롱코트 수트", tag: "long coat, suit, leather shoes, elegant" },
        { ko: "마피아 핀스트라이프", tag: "mafia boss, pinstripe suit, fedora hat, dark shirt, suspenders" },
        { ko: "버틀러 연미복", tag: "butler uniform, tailcoat, white gloves, pocket watch, vest" },
        { ko: "탐정 트렌치코트", tag: "detective, trench coat, fedora hat, dress shirt, tie" },

        { ko: "모험가 레더 아머", tag: "leather armor, shoulder guard, belt, boots, adventurer" },
        { ko: "판타지 귀족 정장", tag: "aristocratic attire, cravat, gold trim, capelet, boots" },
        { ko: "팔라딘 풀플레이트", tag: "plate armor, silver armor, white cape, gauntlets, holy knight" },
        { ko: "다크 나이트 갑옷", tag: "black armor, dark knight, tattered cape, spiked pauldrons" },
        { ko: "암살자 후드 아머", tag: "assassin outfit, hooded cloak, leather armor, dark clothes, daggers" },
        { ko: "숲의 레인저 / 궁수", tag: "archer outfit, green cloak, leather jerkin, quiver, boots" },
        { ko: "대마법사 로브", tag: "wizard robe, ornate trim, pointy hat, staff, magical aura" },
        { ko: "룬 마법사 코트", tag: "rune mage, long coat with glowing runes, turtleneck, belt" },
        { ko: "네크로맨서 로브", tag: "necromancer, dark hooded robe, skull ornaments, dark magic" },
        { ko: "성직자 수단 (카속)", tag: "priest vestments, black cassock, white collar, golden cross" },
        { ko: "연금술사 코트", tag: "alchemist coat, potion belt, brass goggles, leather gloves" },
        { ko: "바바리안 모피 갑옷", tag: "barbarian warrior, fur mantle, chest harness, gauntlets" },
        { ko: "해적 선장 코트", tag: "pirate captain coat, tricorn hat, open shirt, sash, boots" },
        { ko: "뱀파이어 로드 정장", tag: "vampire lord, high-collared cape, gothic suit, cravat, red jewels" },
        { ko: "역병 의사 코트", tag: "plague doctor, beak mask, long black leather coat, wide-brim hat" },
        { ko: "마녀사냥꾼 코트", tag: "witch hunter, long leather coat, wide-brim hat, cross belt" },
        { ko: "인형사 연미복", tag: "puppeteer, gothic tailcoat, top hat, fingerless gloves" },
        { ko: "구마사제 현대 코트", tag: "exorcist, black trench coat, clerical collar, rosary" },

        { ko: "한복 도포 & 갓", tag: "traditional Korean clothes, hanbok, dopo robe, gat hat" },
        { ko: "무협 검객 도복", tag: "wuxia swordsman, traditional Chinese martial arts robe, sash, bracers" },
        { ko: "하카마 & 하오리", tag: "hakama, haori jacket, traditional Japanese clothes, sandals" },
        { ko: "온천 유카타", tag: "yukata, traditional Japanese robe, obi sash, relaxed" },
        { ko: "무도가 도복", tag: "martial arts uniform, gi, black belt, wrapped hands" },
        { ko: "오니 전통 복장", tag: "oni traditional outfit, open chest haori, rope belt, tiger pattern" },

        { ko: "경찰 제복", tag: "police uniform, peaked cap, officer jacket, trousers" },
        { ko: "SWAT 전술복", tag: "SWAT uniform, tactical vest, helmet, combat gear, black uniform" },
        { ko: "해군 제독 제복", tag: "naval uniform, white officer jacket, gold epaulets, peaked cap" },
        { ko: "파일럿 기장 제복", tag: "pilot uniform, captain jacket, tie, gold stripes" },
        { ko: "의사 / 연구원 가운", tag: "lab coat, dress shirt, tie, stethoscope or clipboard" },
        { ko: "바텐더 베스트", tag: "bartender, crisp white shirt, black vest, bow tie, armbands" },
        { ko: "쉐프 조리복", tag: "chef uniform, double-breasted white jacket, apron" },
        { ko: "카레이서 슈트", tag: "racing suit, sponsor logos, zip-up jumpsuit, sporty" },
        { ko: "소방관 방화복", tag: "firefighter uniform, heavy protective jacket, reflective stripes" },
        { ko: "테크웨어 스트릿", tag: "techwear, tactical vest, strap harness, cargo pants" },
        { ko: "사이버 닌자 슈트", tag: "cyber ninja, futuristic bodysuit, glowing neon lines, face mask" },
        { ko: "밀리터리 전투복", tag: "military uniform, camouflage tactical gear, combat boots" },
        { ko: "메카 파일럿 슈트", tag: "pilot suit, sci-fi bodysuit, armor plating" },
        { ko: "우주비행사 수트", tag: "spacesuit, sci-fi white suit, NASA style, utility belt" },
        { ko: "아포칼립스 생존자", tag: "post-apocalyptic, patched leather jacket, scarf, tactical pouches" },
        { ko: "바이커 레더 자켓", tag: "biker jacket, leather jacket, riding pants, boots" },
        { ko: "스팀펑크 발명가", tag: "steampunk outfit, leather vest, brass goggles, pocket watch, coat" },
        { ko: "빅토리아 신사 코트", tag: "victorian gentleman, frock coat, cravat, waistcoat, top hat" },
        { ko: "아이돌 제복 자켓", tag: "male idol stage outfit, ornate military jacket, gold chains, microphone" },
        { ko: "록밴드 가죽 패션", tag: "rockstar fashion, leather jacket, ripped jeans, silver chains" },
        { ko: "서커스 단장 연미복", tag: "ringmaster outfit, red tailcoat, top hat, gold trim, boots" },
        { ko: "농구 유니폼", tag: "basketball uniform, jersey, athletic shorts, sporty" },
        { ko: "펜싱 보호복", tag: "fencing uniform, white protective jacket, athletic pants" },

        { ko: "올드머니 룩", tag: "old money aesthetic, cashmere polo, linen trousers, loafers" },
        { ko: "다크 아카데미아", tag: "dark academia, tweed blazer, turtleneck, plaid trousers, satchel" },
        { ko: "고프코어 룩", tag: "gorpcore, windbreaker jacket, utility vest, nylon pants, trail sneakers" },
        { ko: "Y2K 힙합 스트릿", tag: "y2k fashion, baggy jersey, wide cargo jeans, chain necklace, beanie" },
        { ko: "그런지 록 패션", tag: "grunge fashion, distressed knit sweater, ripped jeans, combat boots" },
        { ko: "가죽 무스탕 & 진", tag: "shearling leather jacket, turtleneck, denim jeans, boots" },
        { ko: "가디건 & 셔츠 댄디", tag: "buttoned cardigan, collared shirt, chinos, glasses" },
        { ko: "린넨 셔츠 리조트", tag: "open linen shirt, relaxed trousers, beachwear, straw hat" },
        { ko: "바시티 (야구점퍼) 룩", tag: "varsity jacket, hoodie underneath, jeans, sneakers" },
        { ko: "양아치 / 불량학생 교복", tag: "delinquent uniform, unbuttoned gakuran, t-shirt underneath, bandages" },
        { ko: "양산형 / 호스트 수트", tag: "flashy host suit, satin shirt, silver chains, pointed dress shoes" },
        { ko: "사이버펑크 네온 코트", tag: "cyberpunk, glowing collar jacket, cybernetic visor, tech pants" },
        { ko: "디스토피아 스캐빈저", tag: "scavenger, tattered poncho, gas mask around neck, tactical pouches" },
        { ko: "우주 해적 선장 코트", tag: "space pirate, long futuristic coat, eyepatch, laser holster" },
        { ko: "중장갑 엑소슈트", tag: "powered exo-suit, heavy mecha armor, sci-fi visor" },
        { ko: "사이버웨어 바디수트", tag: "cyberware, tight futuristic suit, glowing circuit lines, visor" },
        { ko: "괴도 화이트 수트", tag: "phantom thief, white suit, top hat, monocle, flowing cape" },
        { ko: "카지노 딜러 베스트", tag: "casino dealer, waistcoat, rolled-up sleeves, sleeve garters, bow tie" },
        { ko: "마술사 연미복", tag: "stage magician, tailcoat, top hat, white gloves, flowing cape" },
        { ko: "오페라 연미복 & 망토", tag: "opera cape, formal white tie tailcoat, white gloves" },
        { ko: "왕실 근위병 제복", tag: "royal guard uniform, ornate tunic, gold aiguillette, ceremonial sword" },
        { ko: "나폴레옹 장교 군복", tag: "napoleonic uniform, bicorne hat, double-breasted coat, gold epaulets" },
        { ko: "1차 대전 트렌치 군복", tag: "world war uniform, trench coat, officer cap, leather crossbelt" },
        { ko: "항공점퍼 공군 조종사", tag: "fighter pilot, flight suit, leather bomber jacket, aviator sunglasses" },
        { ko: "기관사 / 역무원 제복", tag: "train conductor uniform, peaked cap, gold-buttoned coat, pocket watch" },
        { ko: "우체부 / 집배원 제복", tag: "postman uniform, peaked cap, satchel bag, collared shirt, shorts" },
        { ko: "카페 바리스타 에이프런", tag: "barista uniform, denim apron, rolled-up shirt, bow tie" },
        { ko: "정비공 / 메카닉 작업복", tag: "mechanic coveralls, unzipped jumpsuit, tank top, wrench, oil smudges" },
        { ko: "화가 / 조각가 스모크", tag: "artist smock, paint-stained shirt, beret, holding palette" },
        { ko: "도서관 사서 조끼 룩", tag: "librarian, knit vest, dress shirt, round glasses, stack of books" },
        { ko: "사육사 / 탐험가 사파리", tag: "safari outfit, khaki utility shirt, cargo shorts, pith helmet" },
        { ko: "성가대 / 합창단 가운", tag: "choir robe, ceremonial gown, white surplice" },
        { ko: "졸업식 학사모 & 가운", tag: "graduation gown, mortarboard cap, tassel, diploma" },
        { ko: "중세 음유시인 (바드)", tag: "bard outfit, feathered cap, doublet tunic, lute strapped, boots" },
        { ko: "중세 대장장이 에이프런", tag: "blacksmith, heavy leather apron, bare muscular arms, hammer" },
        { ko: "바이킹 전사 모피 갑옷", tag: "viking warrior, chainmail, fur-lined cloak, leather bracers" },
        { ko: "검투사 (글래디에이터)", tag: "gladiator armor, single shoulder guard, leather belt, bare chest" },
        { ko: "로마 백인대장 갑옷", tag: "roman centurion, lorica segmentata armor, red cloak, crested helmet" },
        { ko: "고대 그리스 히마티온", tag: "ancient Greek himation, draped white toga, laurel wreath, sandals" },
        {
            ko: "고대 이집트 파라오 룩",
            tag: "ancient Egyptian pharaoh, gold collar necklace, pleated kilt, nemes headdress"
        },
        { ko: "아라비안 사막 유목민", tag: "desert nomad, flowing robes, keffiyeh headscarf, gold trim" },
        { ko: "서부 카우보이 룩", tag: "cowboy outfit, cowboy hat, fringed leather vest, bandana, boots" },
        { ko: "1920s 개츠비 수트", tag: "1920s menswear, linen suit, boater hat, bow tie, pocket square" },
        { ko: "사무라이 풀 아머", tag: "samurai armor, kabuto helmet, ornate breastplate, katana" },
        { ko: "닌자 시노비 복장", tag: "shinobi ninja, black hooded mask, sleeveless tunic, arm wraps" },
        { ko: "음양사 카리기누", tag: "onmyoji outfit, traditional Japanese kariginu robe, eboshi hat, talismans" },
        { ko: "다이쇼 로망 서생 룩", tag: "taisho roman, kimono with hakama, student cap, cape coat" },
        { ko: "신사 칸누시 제복", tag: "kannushi outfit, white ceremonial robe, light blue hakama, eboshi" },
        { ko: "화려한 가부키 기모노", tag: "kabuki kimono, extravagant patterned robe, wide sash" },
        { ko: "선협 / 도사 도포", tag: "xianxia cultivator, flowing white and blue hanfu, jade pendant, sword" },
        { ko: "중국 황제 곤룡포", tag: "chinese emperor robe, ornate golden dragon embroidery, imperial crown" },
        { ko: "조선 무관 갑옷 (두정갑)", tag: "joseon military armor, brigandine coat, traditional helmet, sword" },
        { ko: "몽골 전통 델 코트", tag: "mongolian deel, fur-trimmed winter robe, sash belt, fur hat" },
        { ko: "야구 유니폼", tag: "baseball uniform, pinstripe jersey, baseball cap, cleats" },
        { ko: "축구 유니폼", tag: "soccer uniform, athletic jersey, shorts, high socks, cleats" },
        { ko: "복서 파이터 가운", tag: "boxer outfit, hooded satin robe, boxing trunks, hand wraps" },
        { ko: "수영 선수 수영복", tag: "swimwear, swim jammers, goggles on forehead, bare chest" },
        { ko: "스쿠버 다이빙 웻슈트", tag: "wetsuit, sleek diving suit, goggles, scuba gear" },
        { ko: "승마 기수 복장", tag: "equestrian outfit, tailored riding coat, white breeches, tall boots" },
        { ko: "테니스 선수 룩", tag: "tennis player, polo shirt, athletic shorts, sweatband" },
        { ko: "온천 타월 한 장", tag: "towel around waist, bare chest, damp hair, hot spring steam" },
        { ko: "고프코어 바람막이 셋업", tag: "gorpcore, technical windbreaker, nylon cargo pants, trail shoes" },
        { ko: "올드머니 럭셔리 니트", tag: "old money aesthetic, fine cashmere polo knit, pleated slacks, loafers" },
        { ko: "다크 아카데미아 트렌치", tag: "dark academia, tweed trench coat, roll-neck sweater, leather shoes" },
        { ko: "Y2K 와이드 바시티 룩", tag: "y2k streetwear, oversized varsity jacket, baggy jeans, beanie" },
        { ko: "그런지 찢어진 니트 룩", tag: "grunge fashion, distressed oversized knit, ripped jeans, combat boots" },
        { ko: "시크한 라이더 레더 자켓", tag: "biker chic, leather jacket, black t-shirt, slim denim, boots" },
        { ko: "어반 미니멀 셋업 수트", tag: "urban minimal, unstructured blazer, matching trousers, clean t-shirt" },
        { ko: "스트릿 테크웨어 셋업", tag: "techwear, tactical straps, cargo pants, cyber-punk boots" },
        { ko: "아메카지 워크웨어 셋업", tag: "amekaji, canvas chore jacket, relaxed chinos, work boots" },
        { ko: "시티보이 옥스퍼드 셔츠", tag: "city boy style, oversized oxford shirt, shorts, white socks, loafers" },
        { ko: "휴양지 린넨 셔츠 룩", tag: "resort wear, open linen button-up shirt, casual shorts, sandals" },
        { ko: "하와이안 서머 스트릿", tag: "hawaiian print shirt, relaxed white t-shirt, denim shorts" },
        { ko: "오버사이즈 후드 셋업", tag: "heavyweight hoodie, matching sweatpants, casual streetwear" },
        { ko: "모헤어 가디건 캐주얼", tag: "mohair cardigan, vintage graphic tee, straight denim jeans" },
        { ko: "퍼 코지 플리스 자켓", tag: "fluffy fleece jacket, turtleneck knit, cargo pants, sneakers" },
        { ko: "푸퍼 숏패딩 겨울 룩", tag: "short puffer jacket, hoodie, relaxed denim pants, winter shoes" },
        { ko: "체크 플란넬 셔츠 레이어드", tag: "flannel plaid shirt, white t-shirt, distressed jeans" },
        { ko: "싱글 버튼 체스터 코트", tag: "chesterfield wool coat, turtleneck sweater, slim slacks" },
        { ko: "미니멀 하이넥 블레이저", tag: "high-neck blazer, clean minimalist trousers, leather shoes" },
        { ko: "스포티 트랙탑 셋업", tag: "retro track jacket, matching track pants, sporty sneakers" },
        { ko: "카고 포켓 스트릿 셔츠", tag: "utility pocket shirt, cargo trousers, rugged sneakers" },
        { ko: "데님 온 데님 청청 패션", tag: "denim trucker jacket, relaxed denim jeans, graphic tee" },
        { ko: "스케이터 백팩 룩", tag: "skater fashion, oversized graphic hoodie, wide skate pants" },
        { ko: "모던 댄디 터틀넥 셋업", tag: "fine-knit turtleneck, tailored blazer, wool trousers" },
        { ko: "스웨이드 자켓 클래식", tag: "suede trucker jacket, knit polo, slim trousers, chelsea boots" },
        { ko: "하프집업 스웨트 셔츠", tag: "half-zip sweatshirt, inner white tee, pleated casual pants" },
        { ko: "스트라이프 럭비 셔츠", tag: "striped rugby shirt, relaxed denim, skate shoes" },
        { ko: "오버핏 무지 맨투맨", tag: "dropped-shoulder sweatshirt, straight slacks, minimalist sneakers" },
        { ko: "스트랩 나일론 베스트", tag: "utility vest over t-shirt, nylon cargo pants, outdoor vibe" },
        { ko: "오버사이즈 트렌치코트", tag: "oversized trench coat, hoodie layered inside, dark jeans" },
        { ko: "레더 블레이저 자켓", tag: "leather blazer, graphic tee, slim black jeans, boots" },
        { ko: "벨벳 재질 파티 수트", tag: "velvet tuxedo jacket, black dress shirt, formal trousers" },
        { ko: "스트라이프 오피스 셔츠", tag: "pinstripe dress shirt, rolled sleeves, tailored slacks" },
        { ko: "케이블 니트 스웨터", tag: "cable-knit wool sweater, collared shirt inside, chinos" },
        { ko: "사선 지퍼 바이커 룩", tag: "asymmetric biker jacket, distressed jeans, studded belt" },
        { ko: "퍼프 숏 블루종 자켓", tag: "short bomber blouson jacket, wide slacks, leather shoes" },
        { ko: "밀리터리 개파카 룩", tag: "m-51 fishtail parka, hoodie, military cargo pants, combat boots" },
        { ko: "놈코어 베이직 룩", tag: "normcore style, plain white t-shirt, relaxed grey trousers" },
        { ko: "프레피 볼드 스트라이프", tag: "bold stripe cardigan, collared shirt, pleated trousers" },
        { ko: "빈티지 울 블레이저", tag: "vintage wool blazer, casual knit, corduroy pants" },
        { ko: "코듀로이 셋업 수트", tag: "corduroy jacket, matching corduroy trousers, turtleneck" },
        { ko: "스포츠 저지 믹스매치", tag: "retro soccer jersey, wide denim jeans, retro sneakers" },
        { ko: "워크웨어 초어 자켓", tag: "canvas chore coat, hoodie, loose denim pants, work boots" },
        { ko: "언밸런스 스트릿 셔츠", tag: "asymmetric wrap shirt, wide-leg cropped pants, mules" },
        { ko: "네온 컬러 포인트 후드", tag: "black zip-up hoodie, neon orange t-shirt peek, track pants" },
        { ko: "오버사이즈 더블 코트", tag: "double-breasted long coat, chunky knit scarf, slacks" },
        { ko: "와이드 카고 스트릿 룩", tag: "baggy cargo pants, graphic oversized tee, chain accessories" },
        { ko: "서머 니트 반팔 룩", tag: "short-sleeve knit polo, lightweight pleated pants, loafers" },
        { ko: "패딩 베스트 조끼 룩", tag: "puffer vest, flannel shirt, denim jeans, boots" },
        { ko: "클래식 피코트 자켓", tag: "peacoat, wool double-breasted jacket, turtleneck, dark jeans" },
        { ko: "시티 바이크  commuter 룩", tag: "cycling jacket, technical pants, messenger bag, sneakers" },
        { ko: "그런지 스트라이프 니트", tag: "striped distressed sweater, faded denim jeans, combat boots" },
        { ko: "미니멀 하프 코트", tag: "minimalist half coat, clean roll-neck, slim trousers" },
        { ko: "턱시도 캐주얼 믹스", tag: "tuxedo jacket, casual t-shirt, tailored trousers, sneakers" },
        { ko: "리넨 베스트 레이어드", tag: "linen waistcoat, matching linen trousers, casual shirt" },
        { ko: "스포티 아노락 셋업", tag: "sporty anorak, athletic shorts, high socks, running shoes" },
        { ko: "배색 카라니트 룩", tag: "contrast collar knit polo, relaxed slacks, loafers" },
        { ko: "볼드 체인 포인트 스트릿", tag: "black oversized t-shirt, silver chunky chain, cargo pants" },
        { ko: "어반 시크 가죽 코트", tag: "long leather coat, minimalist black knit, dark trousers" },
        { ko: "트렌디 하프집업 니트", tag: "half-zip knit sweater, straight-fit denim, casual boots" }
    ],

    props: [
        { ko: "앤티크 회중시계", tag: "holding pocket watch" },
        { ko: "오래된 양장본 책", tag: "holding book" },
        { ko: "테이크아웃 커피잔", tag: "holding coffee cup" },
        { ko: "우산", tag: "holding umbrella" },
        { ko: "스마트폰 & 이어폰", tag: "holding phone, earphones" },
        { ko: "한 송이 꽃", tag: "holding single flower" },
        { ko: "빈티지 카메라", tag: "holding camera" },
        { ko: "따뜻한 차 티컵", tag: "holding teacup" },
        { ko: "유리 병 / 포션 플라스크", tag: "holding potion flask" },
        { ko: "반짝이는 마법 구슬", tag: "holding crystal ball, glowing magical orb" },
        { ko: "음악 플레이어 / 헤드폰", tag: "holding music player, wearing headphones" },
        { ko: "편지 봉투 / 서류", tag: "holding letter, envelope" },
        { ko: "장미 한 송이", tag: "holding rose" },
        { ko: "파이프 담배 / 시가", tag: "holding tobacco pipe" },
        { ko: "접이식 부채", tag: "holding folding fan" },
        { ko: "열쇠 꾸러미", tag: "holding keyring, old keys" },

        { ko: "장식용 단검", tag: "holding dagger" },
        { ko: "빛나는 검 / 레이피어", tag: "holding sword, rapier" },
        { ko: "마법사의 지팡이", tag: "holding wizard staff" },
        { ko: "화살이 든 활", tag: "holding bow and arrow" },
        { ko: "마도서 (주문서)", tag: "holding grimorie, spellbook" },
        { ko: "스크롤 두루마리", tag: "holding scroll" },
        { ko: "기사의 방패", tag: "holding shield" },
        { ko: "권총 / 마도 총", tag: "holding handgun, firearm" },

        { ko: "눈가 아래의 매력점 (눈물점)", tag: "mole under eye, tear mole" },
        { ko: "입술 옆의 점", tag: "mole near mouth" },
        { ko: "코끝의 점", tag: "mole on nose" },
        { ko: "뺨의 귀여운 주근깨", tag: "freckles on cheeks" },
        { ko: "얼굴 전체의 옅은 주근깨", tag: "light freckles" },
        { ko: "눈썹을 가로지르는 흉터", tag: "scar across eyebrow" },
        { ko: "뺨을 가로지르는 흉터", tag: "scar on cheek" },
        { ko: "입술 주변의 흉터", tag: "scar near mouth" },
        { ko: "콧등의 작은 상처 / 밴드", tag: "band-aid on nose, scratch" },
        { ko: "이마의 작은 흉터", tag: "scar on forehead" },
        { ko: "귀에 걸린 피어싱 / 링 귀걸이", tag: "earrings, hoop earrings" },
        { ko: "입술 피어싱 (립링)", tag: "lip piercing, lip ring" },
        { ko: "눈썹 피어싱", tag: "eyebrow piercing" },
        { ko: "코 피어싱 (셉텀/노스릴)", tag: "nose piercing, septum piercing" },
        { ko: "초커 목걸이", tag: "leather choker, necklace" },
        { ko: "얼굴의 신비로운 타투 / 문양", tag: "facial tattoo, tribal markings, magical crest on face" },
        { ko: "눈가의 붉은 아이라인 / 토혈/상처 연출", tag: "red eyeliner, gothic makeup" },

        { ko: "목덜미의 작은 타투", tag: "neck tattoo" },
        { ko: "쇄골 라인의 타투", tag: "collarbone tattoo" },
        { ko: "팔에 감은 붕대", tag: "bandage wrapped around arm" },
        { ko: "손등과 손목의 붕대", tag: "bandaged hand, wrist wrap" },
        { ko: "목에 감긴 붕대", tag: "bandage around neck" },
        { ko: "어깨의 화려한 바디 타투", tag: "body tattoo, shoulder tattoo" },
        { ko: "반창고를 붙인 상처", tag: "adhesive bandage, band-aid on cheek" },
        { ko: "반창고를 붙인 손가락", tag: "bandage on finger" },
        { ko: "손목시계", tag: "wearing wristwatch" },
        { ko: "고양이 꼬리 장식 가방", tag: "holding tote bag" },
        { ko: "목에 걸친 헤드폰", tag: "headphones around neck" },
        { ko: "입에 물은 막대사탕", tag: "holding lollipop in mouth, candy" },
        { ko: "손에 든 스마트 태블릿", tag: "holding tablet" }
    ]
};

const state = {
    gender: "female",
    ageTag: "1girl",
    values: {},
    locks: {}
};

function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getFilters() {
    const genderOpt = document.querySelector('input[name="gender"]:checked').value;
    const ageOpts = Array.from(document.querySelectorAll('input[name="age"]:checked')).map((el) => el.value);
    const hairLengths = Array.from(document.querySelectorAll('input[name="hairLength"]:checked')).map((el) => el.value);
    const outfitMode = "set";
    const bottomTypes = Array.from(document.querySelectorAll('input[name="bottomType"]:checked')).map((el) => el.value);

    return {
        genderOpt,
        ageOpts: ageOpts.length ? ageOpts : ["young_adult"],
        hairLengths: hairLengths.length ? hairLengths : ["short", "medium", "long"],
        kemonomimi: document.getElementById("opt-kemonomimi").checked,
        nonhuman: document.getElementById("opt-nonhuman").checked,
        hairPattern: document.getElementById("opt-hairpattern").checked,
        heterochromia: document.getElementById("opt-heterochromia").checked,
        specialPupil: document.getElementById("opt-specialpupil").checked,
        outfitMode,
        bottomTypes: bottomTypes.length ? bottomTypes : ["pants"],
        useProp: document.getElementById("opt-prop").checked
    };
}

function resolveBaseSubject(filters) {
    const resolvedGender =
        filters.genderOpt === "random" ? (Math.random() < 0.5 ? "female" : "male") : filters.genderOpt;

    state.gender = resolvedGender;

    const pickedAge = pickRandom(filters.ageOpts);
    const isFemale = resolvedGender === "female";

    const ageMap = {
        child: isFemale ? "1girl, child, loli" : "1boy, child, shota",
        teen: isFemale ? "1girl, teenager" : "1boy, teenager",
        young_adult: isFemale ? "1girl, young adult" : "1boy, young adult",
        mature: isFemale ? "1girl, mature female" : "1boy, mature male"
    };

    state.ageTag = ageMap[pickedAge];
}

function getActiveAttributes(filters) {
    const list = [
        { key: "skin", label: "피부톤" },
        { key: "body", label: "체형" },
        { key: "chest", label: "가슴" },
        { key: "bangs", label: "앞머리" },
        { key: "backHair", label: "뒷머리" },
        { key: "hairColor", label: "헤어 색상" },
        { key: "eyeShape", label: "눈매" },
        { key: "eyeColor", label: "눈 색상" },
        { key: "eyebrows", label: "눈썹 모양" },
        { key: "pupil", label: "동공/홍채" },
        { key: "expression", label: "표정" }
    ];

    if (filters.kemonomimi) list.push({ key: "kemonomimi", label: "수인" });
    if (filters.nonhuman) list.push({ key: "nonhuman", label: "인외" });
    if (filters.hairPattern) list.push({ key: "hairPattern", label: "헤어 투톤/패턴" });
    if (filters.heterochromia) list.push({ key: "heterochromia", label: "오드아이" });
    if (filters.specialPupil) list.push({ key: "specialPupil", label: "특이 동공" });

    list.push({ key: "outfit", label: "의상" });

    if (filters.useProp) list.push({ key: "prop", label: "소품" });

    return list;
}

function generateHairPatternCombo() {
    const p1 = pickRandom(DB.hairPatterns);
    let p2 = pickRandom(DB.hairPatterns);
    while (p2.ko === p1.ko) p2 = pickRandom(DB.hairPatterns);

    const useTwoPatterns = Math.random() < 0.45;
    const selectedPatterns = useTwoPatterns ? [p1, p2] : [p1];

    const subColor1 = pickRandom(DB.hairColor);
    let subColor2 = pickRandom(DB.hairColor);
    while (subColor2.ko === subColor1.ko) subColor2 = pickRandom(DB.hairColor);

    const koParts = [];
    const tagParts = [];

    selectedPatterns.forEach((p, idx) => {
        const targetColor = idx === 0 ? subColor1 : subColor2;
        const rawColorName = targetColor.tag.replace(/ hair$/, "");

        if (p.tag.includes("{color}")) {
            koParts.push(`${targetColor.ko} ${p.ko}`);
            tagParts.push(p.tag.replace("{color}", rawColorName));
        } else if (p.needsColor > 0) {
            koParts.push(`${p.ko}(${targetColor.ko})`);
            tagParts.push(p.tag, targetColor.tag);
            if (p.needsColor === 2) {
                koParts.push(subColor2.ko);
                tagParts.push(subColor2.tag);
            }
        } else {
            koParts.push(p.ko);
            tagParts.push(p.tag);
        }
    });

    return {
        ko: koParts.join(" + "),
        tag: [...new Set(tagParts)].join(", ")
    };
}

function generateHeterochromiaCombo() {
    const c1 = pickRandom(DB.eyeColorSingle);
    let c2 = pickRandom(DB.eyeColorSingle);
    while (c2.ko === c1.ko) c2 = pickRandom(DB.eyeColorSingle);

    const eye1Tag = c1.tag.replace(/ eyes$/, " eye");
    const eye2Tag = c2.tag.replace(/ eyes$/, " eye");

    const addPattern = Math.random() < 0.6;
    const pattern = pickRandom(DB.eyePatterns);

    const koText = addPattern ? `${c1.ko} & ${c2.ko} (${pattern.ko})` : `${c1.ko} & ${c2.ko}`;

    const tagList = ["heterochromia", eye1Tag, eye2Tag];
    if (addPattern) tagList.push(pattern.tag);

    return {
        ko: koText,
        tag: tagList.join(", ")
    };
}

function generateSingleAttribute(key, filters) {
    const g = state.gender;

    switch (key) {
        case "skin":
            return pickRandom(DB.skin);
        case "body":
            return pickRandom(DB.body[g]);
        case "chest":
            return pickRandom(DB.chest[g]);
        case "bangs":
            return pickRandom(DB.bangs);
        case "backHair":
            return pickRandom(DB.backHair[pickRandom(filters.hairLengths)]);
        case "hairColor":
            return pickRandom(DB.hairColor);
        case "eyeShape":
            return pickRandom(DB.eyeShape);
        case "eyeDetail":
            return pickRandom(DB.eyeDetail);
        case "eyeColor":
            return filters.heterochromia ? generateHeterochromiaCombo() : pickRandom(DB.eyeColorSingle);

        case "hairPattern":
            return generateHairPatternCombo();

        case "heterochromia":
            return generateHeterochromiaCombo();
        case "eyebrows":
            return pickRandom(DB.eyebrows);
        case "pupil":
            return filters.specialPupil ? pickRandom(DB.pupilSpecial) : pickRandom(DB.pupilNormal);
        case "expression":
            return pickRandom(DB.expression);
        case "kemonomimi":
            return pickRandom(DB.kemonomimi);
        case "nonhuman":
            return pickRandom(DB.nonhuman);
        case "heterochromia":
            return pickRandom(DB.eyeColorHetero);
        case "specialPupil":
            return pickRandom(DB.pupilSpecial);

        case "outfit": {
            let sets = g === "female" ? DB.outfitSetFemale : DB.outfitSetMale;

            if (!filters.bottomTypes.includes("skirt")) {
                sets = sets.filter((s) => !s.tag.includes("skirt") && !s.tag.includes("dress"));
            }
            if (!filters.bottomTypes.includes("pants")) {
                sets = sets.filter((s) => !s.tag.includes("pants") && !s.tag.includes("trousers"));
            }
            if (sets.length === 0) sets = g === "female" ? DB.outfitSetFemale : DB.outfitSetMale;
            return pickRandom(sets);
        }

        case "prop":
            return pickRandom(DB.props);
        default:
            return { ko: "-", tag: "" };
    }
}

function generateAll() {
    const filters = getFilters();
    resolveBaseSubject(filters);
    const activeAttrs = getActiveAttributes(filters);

    const newValues = {};
    const newLocks = {};

    activeAttrs.forEach((attr) => {
        newLocks[attr.key] = state.locks[attr.key] || false;
        if (newLocks[attr.key] && state.values[attr.key]) {
            newValues[attr.key] = state.values[attr.key];
        } else {
            newValues[attr.key] = generateSingleAttribute(attr.key, filters);
        }
    });

    state.values = newValues;
    state.locks = newLocks;

    renderAttributes(activeAttrs);
    buildPrompt(activeAttrs);
}

function regenerateOne(key) {
    const filters = getFilters();
    state.values[key] = generateSingleAttribute(key, filters);
    const activeAttrs = getActiveAttributes(filters);
    renderAttributes(activeAttrs);
    buildPrompt(activeAttrs);
}

function toggleLock(key) {
    state.locks[key] = !state.locks[key];
    const filters = getFilters();
    renderAttributes(getActiveAttributes(filters));
}

function renderAttributes(activeAttrs) {
    const container = document.getElementById("attr-list");
    container.innerHTML = "";

    activeAttrs.forEach((attr) => {
        const val = state.values[attr.key] || { ko: "-", tag: "" };
        const isLocked = state.locks[attr.key];

        const item = document.createElement("div");
        item.className = "attr-item";

        item.innerHTML = `
      <div class="attr-info">
        <span class="attr-name">${attr.label}</span>
        <span class="attr-value" title="${val.tag || "없음"}">${val.ko}</span>
      </div>
      <div class="attr-actions">
        <button class="icon-btn" data-action="reroll" data-key="${attr.key}" title="변경">↻</button>
        <button class="icon-btn ${isLocked ? "locked" : ""}" data-action="lock" data-key="${attr.key}" title="고정">
          ${isLocked ? "고정됨" : "고정"}
        </button>
      </div>
    `;
        container.appendChild(item);
    });
}

function buildPrompt(activeAttrs) {
    const tags = [state.ageTag, "solo"];

    activeAttrs.forEach((attr) => {
        const item = state.values[attr.key];
        if (item && item.tag) {
            tags.push(item.tag);
        }
    });

    const formatted = tags
        .join(", ")
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
        .filter((v, i, self) => self.indexOf(v) === i)
        .join(", ");

    document.getElementById("prompt-output").value = formatted;
}

document.getElementById("attr-list").addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const action = btn.dataset.action;
    const key = btn.dataset.key;

    if (action === "reroll") regenerateOne(key);
    else if (action === "lock") toggleLock(key);
});

document.getElementById("btn-generate").addEventListener("click", generateAll);

document.getElementById("btn-copy").addEventListener("click", async () => {
    const textarea = document.getElementById("prompt-output");
    const status = document.getElementById("status-msg");
    try {
        await navigator.clipboard.writeText(textarea.value);
        status.textContent = "클립보드에 복사되었습니다.";
    } catch {
        textarea.select();
        document.execCommand("copy");
        status.textContent = "복사되었습니다.";
    }
    setTimeout(() => {
        status.textContent = "";
    }, 2000);
});

document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", generateAll);
});

generateAll();
