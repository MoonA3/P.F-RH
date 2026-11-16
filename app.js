const statNames = [
  ["vocal", "Hát"],
  ["dance", "Nhảy"],
  ["rap", "Rap"],
  ["charm", "Sức hút"],
];
const gradeOrder = ["UR", "XR", "R", "S", "A", "B"];
const cardTypes = [
  { id: "live", name: "Live", color: "#ff5a66" },
  { id: "special", name: "Special", color: "#b78bff" },
  { id: "fx", name: "FX", color: "#62aaff" },
  { id: "season", name: "Season", color: "#62d69a" },
  { id: "album", name: "Album", color: "#f1c75b" },
];

const demoCards = [
  { id: "bts-jungkook", name: "Jungkook", group: "BTS", rarity: "UR", stats: { min: { vocal: 520, dance: 505, rap: 470, charm: 510 }, max: { vocal: 980, dance: 950, rap: 890, charm: 965 } } },
  { id: "bts-v", name: "V", group: "BTS", rarity: "XR", stats: { min: { vocal: 495, dance: 470, rap: 455, charm: 530 }, max: { vocal: 930, dance: 890, rap: 860, charm: 990 } } },
  { id: "bts-jimin", name: "Jimin", group: "BTS", rarity: "S", stats: { min: { vocal: 460, dance: 515, rap: 440, charm: 490 }, max: { vocal: 860, dance: 970, rap: 825, charm: 925 } } },
  { id: "txt-yeonjun", name: "Yeonjun", group: "TXT", rarity: "UR", type: "fx", stats: { min: { vocal: 485, dance: 530, rap: 505, charm: 500 }, max: { vocal: 915, dance: 995, rap: 950, charm: 940 } } },
  { id: "txt-soobin", name: "Soobin", group: "TXT", rarity: "XR", stats: { min: { vocal: 510, dance: 470, rap: 445, charm: 515 }, max: { vocal: 960, dance: 890, rap: 845, charm: 970 } } },
  { id: "enhypen-jungwon", name: "Jungwon", group: "ENHYPEN", rarity: "S", stats: { min: { vocal: 475, dance: 505, rap: 460, charm: 480 }, max: { vocal: 895, dance: 950, rap: 870, charm: 905 } } },
  { id: "enhypen-sunghoon", name: "Sunghoon", group: "ENHYPEN", rarity: "XR", stats: { min: { vocal: 485, dance: 495, rap: 450, charm: 525 }, max: { vocal: 915, dance: 935, rap: 850, charm: 985 } } },
  { id: "seventeen-hoshi", name: "Hoshi", group: "SEVENTEEN", rarity: "UR", type: "fx", stats: { min: { vocal: 470, dance: 530, rap: 490, charm: 500 }, max: { vocal: 890, dance: 995, rap: 925, charm: 940 } } },
  { id: "seventeen-mingyu", name: "Mingyu", group: "SEVENTEEN", rarity: "XR", stats: { min: { vocal: 455, dance: 480, rap: 510, charm: 520 }, max: { vocal: 860, dance: 905, rap: 960, charm: 980 } } },
  { id: "lesserafim-chaewon", name: "Chaewon", group: "LE SSERAFIM", rarity: "S", stats: { min: { vocal: 510, dance: 500, rap: 455, charm: 490 }, max: { vocal: 960, dance: 940, rap: 860, charm: 925 } } },
  { id: "newjeans-hanni", name: "Hanni", group: "NewJeans", rarity: "XR", stats: { min: { vocal: 525, dance: 490, rap: 465, charm: 510 }, max: { vocal: 985, dance: 925, rap: 875, charm: 960 } } },
  { id: "newjeans-minji", name: "Minji", group: "NewJeans", rarity: "R", stats: { min: { vocal: 465, dance: 475, rap: 445, charm: 480 }, max: { vocal: 875, dance: 895, rap: 840, charm: 905 } } },
];

const groupMembers = {
  BTS: ["RM", "Jin", "SUGA", "j-hope", "Jimin", "V", "Jungkook"],
  TXT: ["Soobin", "Yeonjun", "Beomgyu", "Taehyun", "Huening Kai"],
  ENHYPEN: ["Jungwon", "Heeseung", "Jay", "Jake", "Sunghoon", "Sunoo", "NI-KI"],
  SEVENTEEN: ["S.COUPS", "Jeonghan", "Joshua", "Jun", "Hoshi", "Wonwoo", "Woozi", "DK", "Mingyu", "The8", "Seungkwan", "Vernon", "Dino"],
  "LE SSERAFIM": ["Sakura", "Chaewon", "Yunjin", "Kazuha", "Eunchae"],
  NewJeans: ["Minji", "Hanni", "Danielle", "Haerin", "Hyein"],
  BOYNEXTDOOR: ["Sungho", "Riwoo", "Jaehyun", "Taesan", "Leehan", "Woonhak"],
  ILLIT: ["Yunah", "Minju", "Moka", "Wonhee", "Iroha"],
  TWS: ["Shinyu", "Dohoon", "Youngjae", "Hanjin", "Jihoon", "Kyungmin"],
};

function memberKey(group, name) {
  return `${group}:${name.toLocaleLowerCase().replace(/[^a-z0-9]/g, "")}`;
}

const groupInfo = {
  BTS: {
    fullName: "BTS (방탄소년단)",
    agency: "BIGHIT MUSIC (HYBE)",
    debut: "13/06/2013",
    fandom: "ARMY",
    color: "#a894fa",
  },
  TXT: {
    fullName: "TOMORROW X TOGETHER (투모로우바이투게더)",
    agency: "BIGHIT MUSIC (HYBE)",
    debut: "04/03/2019",
    fandom: "MOA",
    color: "#67b2ff",
  },
  ENHYPEN: {
    fullName: "ENHYPEN (엔하이픈)",
    agency: "BELIFT LAB (HYBE)",
    debut: "30/11/2020",
    fandom: "ENGENE",
    color: "#ff6570",
  },
  SEVENTEEN: {
    fullName: "SEVENTEEN (세븐틴)",
    agency: "PLEDIS Entertainment (HYBE)",
    debut: "26/05/2015",
    fandom: "CARAT",
    color: "#f5ce84",
  },
  "LE SSERAFIM": {
    fullName: "LE SSERAFIM (르세라핌)",
    agency: "SOURCE MUSIC (HYBE)",
    debut: "02/05/2022",
    fandom: "FEARNOT",
    color: "#8be4c4",
  },
  NewJeans: {
    fullName: "NewJeans (뉴진스)",
    agency: "ADOR (HYBE)",
    debut: "22/07/2022",
    fandom: "Bunnies",
    color: "#82cefa",
  },
  BOYNEXTDOOR: {
    fullName: "BOYNEXTDOOR (보이넥스트도어)",
    agency: "KOZ Entertainment (HYBE)",
    debut: "30/05/2023",
    fandom: "ONEDOOR",
    color: "#f68bb2",
  },
  ILLIT: {
    fullName: "ILLIT (아일릿)",
    agency: "BELIFT LAB (HYBE)",
    debut: "25/03/2024",
    fandom: "GLLIT",
    color: "#bd8cff",
  },
  TWS: {
    fullName: "TWS (Twenty Four Seven With Us / 투어스)",
    agency: "PLEDIS Entertainment (HYBE)",
    debut: "22/01/2024",
    fandom: "42 (SAI)",
    color: "#65d79b",
  },
};

const memberProfiles = {
  // BTS
  "BTS:rm": {
    name: "RM",
    realName: "Kim Nam-joon (김남준)",
    group: "BTS",
    birthDate: "12/09/1994",
    zodiac: "Xử Nữ ♍",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Trưởng nhóm, Rapper chính",
    bio: "Trưởng nhóm thông minh kiệt xuất với khả năng sáng tác đỉnh cao, là linh hồn định hình phong cách âm nhạc của BTS.",
  },
  "BTS:jin": {
    name: "Jin",
    realName: "Kim Seok-jin (김석진)",
    group: "BTS",
    birthDate: "04/12/1992",
    zodiac: "Nhân Mã ♐",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Hát phụ, Visual, Anh cả",
    bio: "Anh cả 'Worldwide Handsome' với chất giọng ballad ngọt ngào, truyền cảm và tinh thần hài hước ấm áp.",
  },
  "BTS:suga": {
    name: "SUGA",
    realName: "Min Yoon-gi (민윤기) / Agust D",
    group: "BTS",
    birthDate: "09/03/1993",
    zodiac: "Song Ngư ♓",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Rapper dẫn, Producer",
    bio: "Nhà sản xuất âm nhạc tài ba với flow rap sắc sảo, chiều sâu cảm xúc và hàng loạt bản hit vang danh toàn cầu.",
  },
  "BTS:jhope": {
    name: "j-hope",
    realName: "Jung Ho-seok (정호석)",
    group: "BTS",
    birthDate: "18/02/1994",
    zodiac: "Bảo Bình ♒",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Nhảy chính, Rapper phụ",
    bio: "Cỗ máy nhảy hàng đầu K-Pop với kỹ năng freestyle điêu luyện và nguồn năng lượng tích cực tỏa sáng rực rỡ.",
  },
  "BTS:jimin": {
    name: "Jimin",
    realName: "Park Ji-min (박지민)",
    group: "BTS",
    birthDate: "13/10/1995",
    zodiac: "Thiên Bình ♎",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Nhảy chính, Hát dẫn",
    bio: "Vũ công đương đại xuất sắc với chất giọng cao vút, mềm mại cùng thần thái sân khấu quyến rũ mê hoặc.",
  },
  "BTS:v": {
    name: "V",
    realName: "Kim Tae-hyung (김태형)",
    group: "BTS",
    birthDate: "30/12/1995",
    zodiac: "Ma Kết ♑",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Hát phụ, Visual",
    bio: "Sở hữu chất giọng baritone trầm ấm độc nhất vô nhị cùng gương mặt từng đạt vị trí Top 1 Visual thế giới.",
  },
  "BTS:jungkook": {
    name: "Jungkook",
    realName: "Jeon Jung-kook (전정국)",
    group: "BTS",
    birthDate: "01/09/1997",
    zodiac: "Xử Nữ ♍",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Hát chính, Nhảy dẫn, Center, Maknae",
    bio: "'Golden Maknae' toàn năng hoàn hảo trong cả giọng hát pop quốc tế, vũ đạo sắc bén và phong cách ngôi sao toàn cầu.",
  },

  // TXT
  "TXT:soobin": {
    name: "Soobin",
    realName: "Choi Soo-bin (최수빈)",
    group: "TXT",
    birthDate: "05/12/2000",
    zodiac: "Nhân Mã ♐",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Trưởng nhóm, Hát phụ",
    bio: "Trưởng nhóm ấm áp, đáng tin cậy với nụ cười má lúm đồng tiền hiền hậu và chiều cao ấn tượng 1m85.",
  },
  "TXT:yeonjun": {
    name: "Yeonjun",
    realName: "Choi Yeon-jun (최연준)",
    group: "TXT",
    birthDate: "13/09/1999",
    zodiac: "Xử Nữ ♍",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Rapper, Dancer, Vocalist, Anh cả",
    bio: "'Thực tập sinh huyền thoại' của Big Hit, toàn diện xuất sắc ở cả vũ đạo hip-hop, rap và thần thái sân khấu đỉnh cao.",
  },
  "TXT:beomgyu": {
    name: "Beomgyu",
    realName: "Choi Beom-gyu (최범규)",
    group: "TXT",
    birthDate: "13/03/2001",
    zodiac: "Song Ngư ♓",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Vocalist, Dancer, Visual, Center",
    bio: "Visual rạng rỡ tựa nhân vật truyện tranh hoạt hình, luôn tràn đầy năng lượng tươi vui và biết chơi guitar acoustic.",
  },
  "TXT:taehyun": {
    name: "Taehyun",
    realName: "Kang Tae-hyun (강태현)",
    group: "TXT",
    birthDate: "05/02/2002",
    zodiac: "Bảo Bình ♒",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Hát chính",
    bio: "Giọng ca nội lực với những nốt cao bùng nổ, tư duy nhạy bén, logic và niềm đam mê âm nhạc kiên định.",
  },
  "TXT:hueningkai": {
    name: "Huening Kai",
    realName: "Kai Kamal Huening (카이 카말 휴닝)",
    group: "TXT",
    birthDate: "14/08/2002",
    zodiac: "Sư Tử ♌",
    nationality: "Mỹ 🇺🇸",
    position: "Vocalist, Dancer, Visual, Maknae",
    bio: "Em út thiên thần đa tài chơi thành thạo piano và guitar, sở hữu giọng ca trong sáng như pha lê cùng vẻ đẹp lai cuốn hút.",
  },

  // ENHYPEN
  "ENHYPEN:jungwon": {
    name: "Jungwon",
    realName: "Yang Jung-won (양정원)",
    group: "ENHYPEN",
    birthDate: "09/02/2004",
    zodiac: "Bảo Bình ♒",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Trưởng nhóm, Vocalist, Dancer",
    bio: "Trưởng nhóm trẻ tuổi bản lĩnh với chất giọng độc lạ cuốn hút và kỹ năng vũ đạo popping dứt khoát chuẩn xác.",
  },
  "ENHYPEN:heeseung": {
    name: "Heeseung",
    realName: "Lee Hee-seung (이희승)",
    group: "ENHYPEN",
    birthDate: "15/10/2001",
    zodiac: "Thiên Bình ♎",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Center, Main Vocalist, Dancer",
    bio: "Thành viên át chủ bài (Ace) sở hữu cao độ tuyệt đối (perfect pitch) cùng kỹ thuật thanh nhạc và vũ đạo điêu luyện.",
  },
  "ENHYPEN:jay": {
    name: "Jay",
    realName: "Park Jong-seong (박종성) / Jay Park",
    group: "ENHYPEN",
    birthDate: "20/04/2002",
    zodiac: "Kim Ngưu ♉",
    nationality: "Mỹ 🇺🇸 - Hàn Quốc 🇰🇷",
    position: "Rapper, Dancer, Vocalist",
    bio: "Chàng trai tràn đầy nhiệt huyết, chơi guitar điện điêu luyện và luôn là người truyền lửa, tạo bầu không khí cho nhóm.",
  },
  "ENHYPEN:jake": {
    name: "Jake",
    realName: "Sim Jae-yun (심재윤) / Jake Sim",
    group: "ENHYPEN",
    birthDate: "15/11/2002",
    zodiac: "Bọ Cạp ♏",
    nationality: "Úc 🇦🇺 - Hàn Quốc 🇰🇷",
    position: "Vocalist, Rapper",
    bio: "Chàng trai ấm áp đến từ nước Úc với nụ cười tỏa nắng, chất giọng ngọt ngào và năng lượng tích cực lan tỏa.",
  },
  "ENHYPEN:sunghoon": {
    name: "Sunghoon",
    realName: "Park Sung-hoon (박성훈)",
    group: "ENHYPEN",
    birthDate: "08/12/2002",
    zodiac: "Nhân Mã ♐",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Vocalist, Dancer, Visual",
    bio: "'Hoàng tử sân băng' cựu vận động viên trượt băng nghệ thuật quốc gia sở hữu vóc dáng chuẩn mực và thần thái quý phái.",
  },
  "ENHYPEN:sunoo": {
    name: "Sunoo",
    realName: "Kim Sun-woo (김선우)",
    group: "ENHYPEN",
    birthDate: "24/06/2003",
    zodiac: "Cự Giải ♋",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Vocalist",
    bio: "Biểu tượng năng lượng tươi sáng với khả năng biến hóa biểu cảm khuôn mặt xuất thần trên từng sân khấu biểu diễn.",
  },
  "ENHYPEN:niki": {
    name: "NI-KI",
    realName: "Nishimura Riki (西村力 / 니시무라 리키)",
    group: "ENHYPEN",
    birthDate: "09/12/2005",
    zodiac: "Nhân Mã ♐",
    nationality: "Nhật Bản 🇯🇵",
    position: "Main Dancer, Vocalist, Maknae",
    bio: "Thần đồng vũ đạo Nhật Bản học nhảy từ nhỏ, nổi danh với những bước nhảy sắc sảo, tốc độ và uy lực vượt bậc.",
  },

  // SEVENTEEN
  "SEVENTEEN:scoups": {
    name: "S.COUPS",
    realName: "Choi Seung-cheol (최승철)",
    group: "SEVENTEEN",
    birthDate: "08/08/1995",
    zodiac: "Sư Tử ♌",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Tổng Trưởng nhóm, Trưởng Hip-hop Team, Rapper",
    bio: "Trụ cột vững chắc lãnh đạo 13 thành viên với tinh thần trách nhiệm thép và kỹ năng rap đầy nội lực, dứt khoát.",
  },
  "SEVENTEEN:jeonghan": {
    name: "Jeonghan",
    realName: "Yoon Jeong-han (윤정한)",
    group: "SEVENTEEN",
    birthDate: "04/10/1995",
    zodiac: "Thiên Bình ♎",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Lead Vocalist, Visual (Vocal Team)",
    bio: "'Thiên thần' của nhóm với giọng hát êm dịu, vẻ đẹp phi giới tính nổi bật và tư duy chiến thuật nhanh trí, thông minh.",
  },
  "SEVENTEEN:joshua": {
    name: "Joshua",
    realName: "Joshua Jisoo Hong (홍지수)",
    group: "SEVENTEEN",
    birthDate: "30/12/1995",
    zodiac: "Ma Kết ♑",
    nationality: "Mỹ 🇺🇸",
    position: "Lead Vocalist, Visual (Vocal Team)",
    bio: "'Quý ông lịch lãm' đến từ Los Angeles với chất giọng mộc mạc ngọt ngào và khả năng chơi acoustic guitar tài hoa.",
  },
  "SEVENTEEN:jun": {
    name: "Jun",
    realName: "Wen Junhui (文俊辉 / 문준휘)",
    group: "SEVENTEEN",
    birthDate: "10/06/1996",
    zodiac: "Song Tử ♊",
    nationality: "Trung Quốc 🇨🇳",
    position: "Lead Dancer, Sub Vocalist (Performance Team)",
    bio: "Xuất thân từ diễn viên nhí và võ thuật wushu, mang đến những động tác vũ đạo uyển chuyển và vẻ đẹp cổ phong sắc nét.",
  },
  "SEVENTEEN:hoshi": {
    name: "Hoshi",
    realName: "Kwon Soon-young (권순영)",
    group: "SEVENTEEN",
    birthDate: "15/06/1996",
    zodiac: "Song Tử ♊",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Trưởng Performance Team, Main Dancer, Lead Vocalist",
    bio: "Biên đạo chính tài năng đứng sau vũ đạo đồng đều trứ danh của SEVENTEEN, mang ngọn lửa đam mê 'Horanghae' rực cháy.",
  },
  "SEVENTEEN:wonwoo": {
    name: "Wonwoo",
    realName: "Jeon Won-woo (전원우)",
    group: "SEVENTEEN",
    birthDate: "17/07/1996",
    zodiac: "Cự Giải ♋",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Rapper, Sub Vocalist (Hip-hop Team)",
    bio: "Chàng trai điềm đạm với chất giọng bass trầm ấm cuốn hút, niềm đam mê đọc sách và vẻ ngoài đậm chất tài tử điện ảnh.",
  },
  "SEVENTEEN:woozi": {
    name: "Woozi",
    realName: "Lee Ji-hoon (이지훈)",
    group: "SEVENTEEN",
    birthDate: "22/11/1996",
    zodiac: "Bọ Cạp ♏",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Trưởng Vocal Team, Lead Vocalist, Producer chính",
    bio: "Nhà sản xuất âm nhạc thiên tài, người sáng tác và hòa âm phối khí nên hầu hết tất cả bài hát đưa SEVENTEEN lên đỉnh cao.",
  },
  "SEVENTEEN:dk": {
    name: "DK",
    realName: "Lee Seok-min (이석민)",
    group: "SEVENTEEN",
    birthDate: "18/02/1997",
    zodiac: "Bảo Bình ♒",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Main Vocalist (Vocal Team), Trưởng nhóm BSS",
    bio: "Giọng ca vàng đầy nội lực kiêm diễn viên nhạc kịch xuất sắc, là 'Happy Virus' mang lại tiếng cười cho mọi người.",
  },
  "SEVENTEEN:mingyu": {
    name: "Mingyu",
    realName: "Kim Min-gyu (김민규)",
    group: "SEVENTEEN",
    birthDate: "06/04/1997",
    zodiac: "Bạch Dương ♈",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Rapper, Visual, Sub Vocalist (Hip-hop Team)",
    bio: "Visual nổi bật cao 1m87, đảm nhiệm cả rap, vũ đạo, nấu ăn khéo léo và là thỏi nam châm hút fan của nhóm.",
  },
  "SEVENTEEN:the8": {
    name: "The8",
    realName: "Xu Minghao (徐明浩 / 서명호)",
    group: "SEVENTEEN",
    birthDate: "07/11/1997",
    zodiac: "Bọ Cạp ♏",
    nationality: "Trung Quốc 🇨🇳",
    position: "Lead Dancer, Sub Vocalist (Performance Team)",
    bio: "B-boy điêu luyện sở hữu gu thời trang nghệ thuật tinh tế, những bước nhảy nhẹ nhàng tựa lông vũ và tâm hồn thiền định.",
  },
  "SEVENTEEN:seungkwan": {
    name: "Seungkwan",
    realName: "Boo Seung-kwan (부승관)",
    group: "SEVENTEEN",
    birthDate: "16/01/1998",
    zodiac: "Ma Kết ♑",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Main Vocalist (Vocal Team)",
    bio: "Giọng ca truyền cảm da diết đến từ đảo Jeju, là ngôi sao tạp kỹ duyên dáng được đông đảo công chúng yêu mến.",
  },
  "SEVENTEEN:vernon": {
    name: "Vernon",
    realName: "Hansol Vernon Chwe (최한솔)",
    group: "SEVENTEEN",
    birthDate: "18/02/1998",
    zodiac: "Bảo Bình ♒",
    nationality: "Mỹ 🇺🇸 - Hàn Quốc 🇰🇷",
    position: "Main Rapper, Visual (Hip-hop Team)",
    bio: "Rapper tài năng với phong cách hip-hop phóng khoáng, flow tự nhiên cùng gương mặt lai Tây sắc nét.",
  },
  "SEVENTEEN:dino": {
    name: "Dino",
    realName: "Lee Chan (이찬)",
    group: "SEVENTEEN",
    birthDate: "11/02/1999",
    zodiac: "Bảo Bình ♒",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Main Dancer, Sub Vocalist, Rapper, Maknae",
    bio: "'Tương lai của K-Pop' em út chăm chỉ xuất thân từ gia đình vũ công, sở hữu kỹ thuật nhảy đỉnh cao và khả năng biên đạo điêu luyện.",
  },

  // LE SSERAFIM
  "LE SSERAFIM:sakura": {
    name: "Sakura",
    realName: "Miyawaki Sakura (宮脇 咲良 / 미야와키 사쿠라)",
    group: "LE SSERAFIM",
    birthDate: "19/03/1998",
    zodiac: "Song Ngư ♓",
    nationality: "Nhật Bản 🇯🇵",
    position: "Vocalist, Dancer, Visual, Chị cả",
    bio: "Thần tượng kỳ cựu với sự nghiệp bền bỉ qua HKT48, IZ*ONE và LE SSERAFIM, biểu tượng của sự kiên định và ý chí phi thường.",
  },
  "LE SSERAFIM:chaewon": {
    name: "Chaewon",
    realName: "Kim Chae-won (김채원)",
    group: "LE SSERAFIM",
    birthDate: "01/08/2000",
    zodiac: "Sư Tử ♌",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Trưởng nhóm, Vocalist, Dancer",
    bio: "Trưởng nhóm tóc ngắn đầy cuốn hút với chất giọng thanh mảnh ngọt ngào, vũ đạo dứt khoát và phong cách biểu diễn tự tin.",
  },
  "LE SSERAFIM:yunjin": {
    name: "Yunjin",
    realName: "Huh Yun-jin (허윤진) / Jennifer Huh",
    group: "LE SSERAFIM",
    birthDate: "08/10/2001",
    zodiac: "Thiên Bình ♎",
    nationality: "Mỹ 🇺🇸 - Hàn Quốc 🇰🇷",
    position: "Main Vocalist, Producer",
    bio: "Giọng ca nội lực xuất thân opera với tư duy nghệ thuật hiện đại, tự sáng tác nhiều ca khúc solo ý nghĩa và tràn đầy cá tính.",
  },
  "LE SSERAFIM:kazuha": {
    name: "Kazuha",
    realName: "Nakamura Kazuha (中村 一葉 / 나카무라 카즈하)",
    group: "LE SSERAFIM",
    birthDate: "09/08/2003",
    zodiac: "Sư Tử ♌",
    nationality: "Nhật Bản 🇯🇵",
    position: "Dancer, Rapper, Vocalist",
    bio: "Vũ công ba lê chuyên nghiệp được đào tạo tại Hà Lan, sở hữu vóc dáng chuẩn mực, sự dẻo dai và nét đẹp thanh tú thuần khiết.",
  },
  "LE SSERAFIM:eunchae": {
    name: "Eunchae",
    realName: "Hong Eun-chae (홍은채)",
    group: "LE SSERAFIM",
    birthDate: "10/11/2006",
    zodiac: "Bọ Cạp ♏",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Main Dancer, Vocalist, Maknae",
    bio: "'Manchae' em út đáng yêu tràn ngập nụ cười và năng lượng tuổi trẻ, có khả năng tiếp thu vũ đạo nhanh như chớp.",
  },

  // NewJeans
  "NewJeans:minji": {
    name: "Minji",
    realName: "Kim Min-ji (김민지)",
    group: "NewJeans",
    birthDate: "07/05/2004",
    zodiac: "Kim Ngưu ♉",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Vocalist, Dancer",
    bio: "Gương mặt thanh tú đậm chất điện ảnh cổ điển cùng chất giọng trầm ấm, phong thái tự nhiên và trưởng thành.",
  },
  "NewJeans:hanni": {
    name: "Hanni",
    realName: "Hanni Pham / Phạm Ngọc Hân (팜응옥헌)",
    group: "NewJeans",
    birthDate: "06/10/2004",
    zodiac: "Thiên Bình ♎",
    nationality: "Úc 🇦🇺 - Việt Nam 🇻🇳",
    position: "Main Vocalist, Main Dancer",
    bio: "Thành viên gốc Việt tài năng với chất giọng R&B ngọt ngào, nụ cười rạng rỡ và khả năng viết lời, cảm thụ âm nhạc tinh tế.",
  },
  "NewJeans:danielle": {
    name: "Danielle",
    realName: "Danielle Marsh / Mo Ji-hye (모지혜)",
    group: "NewJeans",
    birthDate: "11/04/2005",
    zodiac: "Bạch Dương ♈",
    nationality: "Úc 🇦🇺 - Hàn Quốc 🇰🇷",
    position: "Vocalist, Dancer",
    bio: "'Nàng tiên Disney' với giọng ca cao vút trong sáng, tính cách ấm áp lạc quan và từng lồng tiếng cho nhân vật Ariel trong Nàng Tiên Cá.",
  },
  "NewJeans:haerin": {
    name: "Haerin",
    realName: "Kang Hae-rin (강해린)",
    group: "NewJeans",
    birthDate: "15/05/2006",
    zodiac: "Kim Ngưu ♉",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Vocalist, Dancer",
    bio: "Visual 'mèo con' trứ danh với nét cuốn hút bí ẩn, sở hữu kỹ năng nhảy popping điêu luyện và tính cách điềm tĩnh, dễ thương.",
  },
  "NewJeans:hyein": {
    name: "Hyein",
    realName: "Lee Hye-in (이혜인)",
    group: "NewJeans",
    birthDate: "21/04/2008",
    zodiac: "Kim Ngưu ♉",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Vocalist, Dancer, Maknae",
    bio: "Em út Gen Z chiều cao ấn tượng với chất giọng soul sâu lắng và thần thái người mẫu thời trang quốc tế.",
  },

  // BOYNEXTDOOR
  "BOYNEXTDOOR:sungho": {
    name: "Sungho",
    realName: "Park Sung-ho (박성호)",
    group: "BOYNEXTDOOR",
    birthDate: "04/09/2003",
    zodiac: "Xử Nữ ♍",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Main Vocalist",
    bio: "Giọng ca chính với dải âm rộng mượt mà cùng bờ vai Thái Bình Dương và tính cách ngăn nắp chu đáo.",
  },
  "BOYNEXTDOOR:riwoo": {
    name: "Riwoo",
    realName: "Lee Sang-hyeok (이상혁)",
    group: "BOYNEXTDOOR",
    birthDate: "22/10/2003",
    zodiac: "Thiên Bình ♎",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Main Dancer, Vocalist",
    bio: "Vũ công chính sắc bén từng theo học các học viện nhảy danh tiếng với những chuyển động hình thể dứt khoát.",
  },
  "BOYNEXTDOOR:jaehyun": {
    name: "Jaehyun",
    realName: "Myung Jae-hyun (명재현)",
    group: "BOYNEXTDOOR",
    birthDate: "04/12/2003",
    zodiac: "Nhân Mã ♐",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Trưởng nhóm, Rapper, Vocalist",
    bio: "Trưởng nhóm tràn đầy năng lượng như chú cún nhỏ với kỹ năng rap nhịp nhàng và sáng tác linh hoạt.",
  },
  "BOYNEXTDOOR:taesan": {
    name: "Taesan",
    realName: "Han Dong-min (한동민)",
    group: "BOYNEXTDOOR",
    birthDate: "10/08/2004",
    zodiac: "Sư Tử ♌",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Rapper, Vocalist, Producer",
    bio: "Chàng trai yêu nhạc rock cổ điển với khả năng sáng tác giai điệu bắt tai và phong cách thời trang độc đáo.",
  },
  "BOYNEXTDOOR:leehan": {
    name: "Leehan",
    realName: "Kim Dong-hyun (김동현)",
    group: "BOYNEXTDOOR",
    birthDate: "20/10/2004",
    zodiac: "Thiên Bình ♎",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Vocalist",
    bio: "Chàng trai yêu cá cảnh với đôi mắt lấp lánh như nước biển cùng chất giọng thì thầm ngọt ngào.",
  },
  "BOYNEXTDOOR:woonhak": {
    name: "Woonhak",
    realName: "Kim Woon-hak (김운학)",
    group: "BOYNEXTDOOR",
    birthDate: "29/11/2006",
    zodiac: "Nhân Mã ♐",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Vocalist, Maknae",
    bio: "Em út đáng yêu cao ráo luôn đem lại nụ cười rạng rỡ cùng khả năng sáng tác bài hát từ khi còn rất trẻ.",
  },

  // ILLIT
  "ILLIT:yunah": {
    name: "Yunah",
    realName: "Noh Yun-ah (노윤아)",
    group: "ILLIT",
    birthDate: "15/01/2004",
    zodiac: "Ma Kết ♑",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Vocalist, Dancer, Chị cả",
    bio: "Chị cả quyến rũ với thời gian thực tập dài nhất, biểu cảm sân khấu xuất chúng và khiếu hài hước tự nhiên.",
  },
  "ILLIT:minju": {
    name: "Minju",
    realName: "Park Min-ju (박민주)",
    group: "ILLIT",
    birthDate: "11/05/2004",
    zodiac: "Kim Ngưu ♉",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Vocalist, Dancer",
    bio: "Sở hữu màu giọng độc đáo tựa 'nàng thơ indie' làm say đắm người nghe trong ca khúc Magnetic.",
  },
  "ILLIT:moka": {
    name: "Moka",
    realName: "Sakai Moka (境 萌花 / 사카이 모카)",
    group: "ILLIT",
    birthDate: "08/10/2004",
    zodiac: "Thiên Bình ♎",
    nationality: "Nhật Bản 🇯🇵",
    position: "Vocalist, Dancer",
    bio: "Biểu cảm gương mặt 'triệu view' biến hóa theo từng giai điệu cùng những động tác vũ đạo duyên dáng.",
  },
  "ILLIT:wonhee": {
    name: "Wonhee",
    realName: "Lee Won-hee (이원희)",
    group: "ILLIT",
    birthDate: "26/06/2007",
    zodiac: "Cự Giải ♋",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Vocalist, Center",
    bio: "'Thần tượng thiên bẩm' với đôi mắt bồ câu to tròn, tiến bộ thần tốc chỉ sau thời gian ngắn làm thực tập sinh.",
  },
  "ILLIT:iroha": {
    name: "Iroha",
    realName: "Hokazono Iroha (外園 彩羽 / 호카조노 이로하)",
    group: "ILLIT",
    birthDate: "04/02/2008",
    zodiac: "Bảo Bình ♒",
    nationality: "Nhật Bản 🇯🇵",
    position: "Main Dancer, Vocalist, Maknae",
    bio: "Cỗ máy nhảy nhí bắt đầu học nhảy từ năm 3 tuổi với kỹ thuật hip-hop điêu luyện và chuyển động nhịp nhàng.",
  },

  // TWS
  "TWS:shinyu": {
    name: "Shinyu",
    realName: "Shin Jung-hwan (신정환)",
    group: "TWS",
    birthDate: "07/11/2003",
    zodiac: "Bọ Cạp ♏",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Trưởng nhóm, Rapper, Dancer",
    bio: "Trưởng nhóm điển trai với nét ngượng ngùng dễ thương cùng kỹ năng rap nhịp nhàng và visual thanh xuân học đường.",
  },
  "TWS:dohoon": {
    name: "Dohoon",
    realName: "Kim Do-hoon (김도훈)",
    group: "TWS",
    birthDate: "30/01/2005",
    zodiac: "Bảo Bình ♒",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Vocalist, Dancer, Rapper",
    bio: "Thành viên toàn năng sở hữu gương mặt sắc nét chuẩn visual và phong cách trình diễn cuốn hút.",
  },
  "TWS:youngjae": {
    name: "Youngjae",
    realName: "Choi Young-jae (최영재)",
    group: "TWS",
    birthDate: "31/05/2005",
    zodiac: "Song Tử ♊",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Main Vocalist, Dancer",
    bio: "Giọng ca chính trong sáng, ấm áp với nụ cười thân thiện và năng lượng học đường sảng khoái.",
  },
  "TWS:hanjin": {
    name: "Hanjin",
    realName: "Han Zhen (韩振 / 한진)",
    group: "TWS",
    birthDate: "05/01/2006",
    zodiac: "Ma Kết ♑",
    nationality: "Trung Quốc 🇨🇳",
    position: "Vocalist, Visual",
    bio: "Chàng trai Trung Quốc đáng yêu thích chụp ảnh với nụ cười thuần khiết và vẻ ngoài ấm áp như mối tình đầu.",
  },
  "TWS:jihoon": {
    name: "Jihoon",
    realName: "Han Ji-hoon (한지훈)",
    group: "TWS",
    birthDate: "28/03/2006",
    zodiac: "Bạch Dương ♈",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Main Dancer, Vocalist",
    bio: "Nhảy chính tài năng từng là thành viên của Trainee A với những bước nhảy mạnh mẽ và chuẩn xác.",
  },
  "TWS:kyungmin": {
    name: "Kyungmin",
    realName: "Lee Kyung-min (이경민)",
    group: "TWS",
    birthDate: "02/10/2007",
    zodiac: "Thiên Bình ♎",
    nationality: "Hàn Quốc 🇰🇷",
    position: "Vocalist, Maknae",
    bio: "Em út đáng yêu của TWS với giọng hát tươi mới, tinh nghịch và tinh thần lạc quan tràn trề.",
  },
};

function getMemberProfile(group, name) {
  const directKey = memberKey(group, name);
  const found = memberProfiles[directKey];
  const groupMeta = groupInfo[group] || {
    fullName: group,
    agency: "HYBE Labels",
    debut: "",
    fandom: "",
    color: "#a894fa",
  };

  if (found) {
    return {
      ...found,
      agency: found.agency || groupMeta.agency,
      debut: found.debut || groupMeta.debut,
      fandom: found.fandom || groupMeta.fandom,
      groupColor: groupMeta.color,
    };
  }

  // Fallback search by normalized name
  const cleanName = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  for (const [key, prof] of Object.entries(memberProfiles)) {
    if (prof.group.toLowerCase() === group.toLowerCase()) {
      const profClean = prof.name.toLowerCase().replace(/[^a-z0-9]/g, "");
      if (profClean === cleanName || prof.realName.toLowerCase().includes(cleanName)) {
        return {
          ...prof,
          agency: prof.agency || groupMeta.agency,
          debut: prof.debut || groupMeta.debut,
          fandom: prof.fandom || groupMeta.fandom,
          groupColor: groupMeta.color,
        };
      }
    }
  }

  return {
    name,
    realName: name,
    group,
    birthDate: "Đang cập nhật",
    zodiac: "—",
    nationality: "—",
    position: "Thành viên",
    agency: groupMeta.agency,
    debut: groupMeta.debut,
    fandom: groupMeta.fandom,
    bio: `Thành viên trong bộ sưu tập thẻ ${group} của Rhythm Hive.`,
    groupColor: groupMeta.color,
  };
}

function createRosterCards(sourceCards) {
  const knownMembers = new Set(sourceCards.map((card) => memberKey(card.group, card.name)));
  const groupTemplates = new Map();
  for (const card of sourceCards) {
    if (!groupTemplates.has(card.group)) groupTemplates.set(card.group, card);
  }
  const rosterCards = [];
  for (const [group, members] of Object.entries(groupMembers)) {
    const template = groupTemplates.get(group) || sourceCards[0];
    if (!template) continue;
    for (const name of members) {
      const key = memberKey(group, name);
      if (knownMembers.has(key)) continue;
      knownMembers.add(key);
      const slug = `${group}-${name}`.toLocaleLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      rosterCards.push({
        ...template,
        id: `roster-${slug}`,
        name,
        group,
        rarity: "B",
        grade: "B",
        type: null,
        stats: {
          min: { ...template.stats.min },
          max: { ...template.stats.max },
        },
      });
    }
  }
  return rosterCards;
}

const twsCardImages = {
  Shinyu: "assets/tws/fx-shinyu.jpg",
  Dohoon: "assets/tws/fx-dohoon.jpg",
  Youngjae: "assets/tws/fx-youngjae.jpg",
  Hanjin: "assets/tws/fx-hanjin.jpg",
  Jihoon: "assets/tws/fx-jihoon.jpg",
  Kyungmin: "assets/tws/fx-kyungmin.jpg",
};
const txtCardImages = {
  Soobin: "assets/txt/soobin.jpg",
  Yeonjun: "assets/txt/yeonjun.jpg",
  Beomgyu: "assets/txt/beomgyu.jpg",
  "Huening Kai": "assets/txt/huening-kai.jpg",
  Taehyun: "assets/txt/taehyun.jpg",
};
const boynextdoorFxImages = {
  Jaehyun: {
    url: "https://static.wikia.nocookie.net/rhythmhive/images/a/aa/Candy_Serenade_Jaehyun.png/revision/latest?cb=20250319072917",
    page: "https://rhythmhive.fandom.com/wiki/File:Candy_Serenade_Jaehyun.png",
  },
  Leehan: {
    url: "https://static.wikia.nocookie.net/rhythmhive/images/8/83/Candy_Serenade_Leehan.png/revision/latest?cb=20250319072916",
    page: "https://rhythmhive.fandom.com/wiki/File:Candy_Serenade_Leehan.png",
  },
  Riwoo: {
    url: "https://static.wikia.nocookie.net/rhythmhive/images/0/09/Candy_Serenade_Riwoo.png/revision/latest?cb=20250319072918",
    page: "https://rhythmhive.fandom.com/wiki/File:Candy_Serenade_Riwoo.png",
  },
  Sungho: {
    url: "https://static.wikia.nocookie.net/rhythmhive/images/1/1d/Candy_Serenade_Sungho.png/revision/latest?cb=20250319072919",
    page: "https://rhythmhive.fandom.com/wiki/File:Candy_Serenade_Sungho.png",
  },
  Taesan: {
    url: "https://static.wikia.nocookie.net/rhythmhive/images/2/2a/Candy_Serenade_Taesan.png/revision/latest?cb=20250319072916",
    page: "https://rhythmhive.fandom.com/wiki/File:Candy_Serenade_Taesan.png",
  },
  Woonhak: {
    url: "https://static.wikia.nocookie.net/rhythmhive/images/d/de/Candy_Serenade_Woonhak.png/revision/latest?cb=20250319072915",
    page: "https://rhythmhive.fandom.com/wiki/File:Candy_Serenade_Woonhak.png",
  },
};
const rosterCards = createRosterCards(demoCards).map((card) => {
  const image = card.group === "TWS" ? twsCardImages[card.name]
    : card.group === "TXT" ? txtCardImages[card.name] : null;
  if (image) return { ...card, rarity: "UR", grade: "UR", type: "fx", image, imageGrade: "UR" };
  return card.group === "BOYNEXTDOOR" ? { ...card, type: "fx" } : card;
});
const builtInCards = [
  ...demoCards.map((card) => card.group === "TXT" && txtCardImages[card.name]
    ? { ...card, rarity: "UR", grade: "UR", type: "fx", image: txtCardImages[card.name], imageGrade: "UR" }
    : card),
  ...rosterCards,
];

const keys = {
  cards: "rhythm-hive-card-catalog-v1",
  favorites: "rhythm-hive-favorites-v1",
  builds: "rhythm-hive-builds-v1",
  level: "rhythm-hive-level-v1",
  cardLevels: "rhythm-hive-card-levels-v1",
  imageSources: "rhythm-hive-image-sources-v2",
  imageVariants: "rhythm-hive-card-image-variants-v2",
  songScores: "rhythm-hive-song-scores-v3",
};

const elements = {
  notice: document.querySelector("#notice"),
  search: document.querySelector("#search-input"),
  group: document.querySelector("#group-filter"),
  levelFilter: document.querySelector("#level-filter"),
  grade: document.querySelector("#grade-filter"),
  type: document.querySelector("#type-filter"),
  favoritesOnly: document.querySelector("#favorites-only"),
  levelInput: document.querySelector("#level-input"),
  levelRange: document.querySelector("#level-range"),
  grid: document.querySelector("#card-grid"),
  empty: document.querySelector("#empty-state"),
  cardCount: document.querySelector("#card-count"),
  resultLabel: document.querySelector("#result-label"),
  teamSlots: document.querySelector("#team-slots"),
  teamCount: document.querySelector("#team-count"),
  teamGroup: document.querySelector("#team-group"),
  teamTotal: document.querySelector("#team-total"),
  buildName: document.querySelector("#build-name"),
  saveBuild: document.querySelector("#save-build"),
  savedBuilds: document.querySelector("#saved-builds"),
  savedCount: document.querySelector("#saved-count"),
  importInput: document.querySelector("#import-input"),
  memberTooltip: document.querySelector("#member-tooltip"),
};

function showNotice(message) {
  elements.notice.textContent = message;
  elements.notice.hidden = false;
}

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch (error) {
    console.error(`Không thể đọc dữ liệu ${key} từ LocalStorage.`, error);
    showNotice("Không thể đọc dữ liệu đã lưu trên thiết bị. Một số thay đổi có thể chưa được khôi phục.");
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Không thể lưu dữ liệu ${key} vào LocalStorage.`, error);
    showNotice("Không thể lưu vào LocalStorage. Hãy kiểm tra dung lượng hoặc cài đặt quyền riêng tư của trình duyệt.");
    return false;
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function validStats(stats) {
  return stats && ["min", "max"].every((range) =>
    statNames.every(([key]) => Number.isFinite(stats[range]?.[key])),
  );
}

function validateCards(data) {
  if (!Array.isArray(data) || data.length === 0) return "Tệp JSON phải chứa một danh sách thẻ không rỗng.";
  const seen = new Set();
  for (const card of data) {
    if (!card || typeof card.id !== "string" || !/^[a-zA-Z0-9_-]{1,60}$/.test(card.id)) {
      return "Mỗi thẻ cần có id gồm chữ, số, dấu gạch ngang hoặc gạch dưới (tối đa 60 ký tự).";
    }
    if (seen.has(card.id)) return `ID "${card.id}" bị lặp trong tệp JSON.`;
    seen.add(card.id);
    if (typeof card.name !== "string" || !card.name.trim() || typeof card.group !== "string" || !card.group.trim()) {
      return `Thẻ "${card.id}" cần có name và group.`;
    }
    const grade = card.grade ?? card.rarity;
    if (typeof grade !== "string" || !gradeOrder.includes(grade.trim().toUpperCase()) || !validStats(card.stats)) {
      return `Thẻ "${card.id}" cần có grade (UR, XR, R, S, A hoặc B) và các chỉ số min/max hợp lệ.`;
    }
    if (card.type != null && !cardTypes.some((type) => type.id === String(card.type).toLowerCase())) {
      return `Loại thẻ "${card.id}" phải là live, special, fx, season hoặc album.`;
    }
    if (card.image !== undefined) {
      if (typeof card.image !== "string" || !card.image.trim()) {
        return `Ảnh của thẻ "${card.id}" phải là URL dạng chuỗi không rỗng.`;
      }
      try {
        const image = card.image.trim();
        const isRelative = !/^[a-z][a-z\d+.-]*:/i.test(image) && !image.startsWith("//");
        const imageUrl = new URL(image, document.baseURI);
        if (!isRelative && !["http:", "https:"].includes(imageUrl.protocol)) {
          return `Ảnh của thẻ "${card.id}" phải dùng URL HTTP/HTTPS hoặc đường dẫn tương đối trong ứng dụng.`;
        }
      } catch {
        return `URL ảnh của thẻ "${card.id}" không hợp lệ.`;
      }
    }
  }
  return "";
}

function normalizeCard(card) {
  return {
    id: card.id,
    name: card.name.trim(),
    group: card.group.trim(),
    grade: String(card.grade ?? card.rarity).trim().toUpperCase(),
    type: card.type ? String(card.type).trim().toLowerCase() : null,
    stats: {
      min: Object.fromEntries(statNames.map(([key]) => [key, Number(card.stats.min[key])])),
      max: Object.fromEntries(statNames.map(([key]) => [key, Number(card.stats.max[key])])),
    },
    ...(card.image ? { image: card.image.trim() } : {}),
  };
}

let imageSources = readStorage(keys.imageSources, {});
if (!imageSources || typeof imageSources !== "object" || Array.isArray(imageSources)) imageSources = {};
imageSources = Object.fromEntries(Object.entries(imageSources).filter(([, image]) => {
  if (!image || typeof image.url !== "string" || typeof image.page !== "string") return false;
  try {
    return new URL(image.url).protocol === "https:" &&
      new URL(image.page).hostname === "rhythmhive.fandom.com";
  } catch {
    return false;
  }
}));
let imageVariants = readStorage(keys.imageVariants, {});
if (!imageVariants || typeof imageVariants !== "object" || Array.isArray(imageVariants)) imageVariants = {};
imageVariants = Object.fromEntries(Object.entries(imageVariants).map(([id, variants]) => {
  const validVariants = {};
  if (variants && typeof variants === "object" && !Array.isArray(variants)) {
    for (const [grade, typeVariants] of Object.entries(variants)) {
      if (!gradeOrder.includes(grade) || !typeVariants || typeof typeVariants !== "object" ||
        Array.isArray(typeVariants)) continue;
      const validTypes = Object.fromEntries(Object.entries(typeVariants).filter(([, image]) => {
        if (image === null) return true;
        if (!image || typeof image.url !== "string") return false;
        try {
          const imageUrl = new URL(image.url);
          if (imageUrl.protocol !== "https:" || imageUrl.username || imageUrl.password) return false;
          if (image.manual === true) return image.page == null;
          return typeof image.page === "string" &&
            new URL(image.page).hostname === "rhythmhive.fandom.com";
        } catch {
          return false;
        }
      }).map(([type, image]) => {
        if (!image || image.manual || !image.gradeOverlay) return [type, image];
        const { gradeOverlay, ...matchingImage } = image;
        return [type, matchingImage];
      }));
      if (Object.keys(validTypes).length > 0) validVariants[grade] = validTypes;
    }
  }
  return [id, validVariants];
}).filter(([, variants]) => Object.keys(variants).length > 0));
for (const [member, image] of Object.entries(boynextdoorFxImages)) {
  const card = rosterCards.find((entry) => entry.group === "BOYNEXTDOOR" && entry.name === member);
  if (card) imageSources[card.id] = image;
}
const storedCards = readStorage(keys.cards, null);
const storedCardsError = storedCards === null ? "" : validateCards(storedCards);
const storedCardsById = new Map(
  Array.isArray(storedCards) && !storedCardsError
    ? storedCards.map((card) => [card.id, card])
    : [],
);
const cardCatalog = new Map(builtInCards.map((card) => [card.id, card]));
if (Array.isArray(storedCards) && !storedCardsError) {
  for (const card of storedCards.map(normalizeCard)) {
    cardCatalog.set(card.id, card);
  }
}
let cards = [...cardCatalog.values()].map((card) => {
  const builtIn = builtInCards.find((entry) => entry.id === card.id);
  const saved = storedCardsById.get(card.id);
  const grade = saved
    ? String(saved.grade ?? saved.rarity).trim().toUpperCase()
    : card.grade ?? builtIn?.grade ?? builtIn?.rarity;
  const type = saved && Object.hasOwn(saved, "type")
    ? card.type
    : card.type ?? builtIn?.type ?? inferWikiCardType(imageSources[card.id]?.url);
  return {
    ...card,
    grade,
    rarity: grade,
    ...(builtIn?.image ? { image: builtIn.image } : {}),
    ...(builtIn?.imageGrade ? { imageGrade: builtIn.imageGrade } : {}),
    type,
  };
});
if (Array.isArray(storedCards) && !storedCardsError && cards.some((card) =>
  card.type && !storedCards.some((saved) => saved.id === card.id && Object.hasOwn(saved, "type")),
)) {
  writeStorage(keys.cards, cards);
}
if (storedCardsError) showNotice(`Danh mục đã lưu không hợp lệ: ${storedCardsError} Đang giữ roster minh họa.`);
let favorites = readStorage(keys.favorites, {});
if (!favorites || typeof favorites !== "object" || Array.isArray(favorites)) favorites = {};
let builds = readStorage(keys.builds, []);
if (!Array.isArray(builds)) builds = [];
let currentTeam = Array(5).fill(null);
let currentLevel = Number(readStorage(keys.level, 1));
if (!Number.isInteger(currentLevel) || currentLevel < 1 || currentLevel > 60) currentLevel = 1;
let cardLevels = readStorage(keys.cardLevels, {});
if (!cardLevels || typeof cardLevels !== "object" || Array.isArray(cardLevels)) cardLevels = {};
for (const card of cards) {
  const level = Number(cardLevels[card.id]);
  if (!Number.isInteger(level) || level < 1 || level > 60) cardLevels[card.id] = 1;
}

const palette = [
  "linear-gradient(135deg,#87739f,#d18aa9)",
  "linear-gradient(135deg,#566f8c,#aa8bc2)",
  "linear-gradient(135deg,#7f688e,#ce8ca4)",
  "linear-gradient(135deg,#607c82,#b48e9c)",
  "linear-gradient(135deg,#716f9e,#b987b4)",
  "linear-gradient(135deg,#8b705e,#c39589)",
];

const fandomCategories = {
  BTS: "BTS",
  TXT: "TOMORROW X TOGETHER",
  ENHYPEN: "ENHYPEN",
  SEVENTEEN: "SEVENTEEN",
  "LE SSERAFIM": "LE SSERAFIM",
  NewJeans: "NewJeans",
  BOYNEXTDOOR: "BOYNEXTDOOR",
  ILLIT: "ILLIT",
  TWS: "TWS",
};
const songCategories = {
  BTS: "BTS",
  TXT: "TOMORROW X TOGETHER",
  ENHYPEN: "ENHYPEN",
  SEVENTEEN: "SEVENTEEN",
  "LE SSERAFIM": "LE SSERAFIM",
  NewJeans: "NewJeans",
  BOYNEXTDOOR: "BOYNEXTDOOR",
  ILLIT: "ILLIT",
  TWS: "TWS",
};
let songScores = readStorage(keys.songScores, {});
if (!songScores || typeof songScores !== "object" || Array.isArray(songScores)) songScores = {};
songScores = Object.fromEntries(Object.entries(songScores).map(([group, songs]) => [
  group,
  Array.isArray(songs) ? songs.filter((song) =>
    song && typeof song.title === "string" && Number.isFinite(song.score) &&
    typeof song.url === "string" && song.url.startsWith("https://rhythmhive.fandom.com/wiki/"),
  ) : [],
]));
const songScoreRequests = new Map();
const imageVariantRequests = new Map();

function cardById(id) {
  return cards.find((card) => card.id === id);
}

function cardLevel(card) {
  return cardLevels[card.id] ?? 1;
}

function calculatedStats(card, level = cardLevel(card)) {
  const ratio = (level - 1) / 59;
  return Object.fromEntries(statNames.map(([key]) => [
    key,
    Math.round(card.stats.min[key] + (card.stats.max[key] - card.stats.min[key]) * ratio),
  ]));
}

function cardPower(card, level = cardLevel(card)) {
  return Object.values(calculatedStats(card, level)).reduce((sum, value) => sum + value, 0);
}

function initials(name) {
  return name.split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

function normalizeTitle(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function compactTitle(value) {
  return normalizeTitle(value).replace(/\s/g, "");
}

function inferWikiCardType(imageUrl) {
  if (!imageUrl) return null;
  try {
    const imagePath = new URL(imageUrl, document.baseURI).pathname.split("/revision/")[0];
    const fileName = decodeURIComponent(imagePath.split("/").pop() || "");
    const title = compactTitle(fileName.replace(/\.[^.]+$/, ""));
    if (title.startsWith("candyserenade")) return "fx";
    if (title.startsWith("ifisayiloveyou")) return "album";
    return cardTypes.find((type) => title.startsWith(type.id))?.id || null;
  } catch {
    return null;
  }
}

function inferWikiCardGrade(imageUrl) {
  if (!imageUrl) return null;
  try {
    const imagePath = new URL(imageUrl, document.baseURI).pathname.split("/revision/")[0];
    const fileName = decodeURIComponent(imagePath.split("/").pop() || "");
    const title = normalizeTitle(fileName.replace(/\.[^.]+$/, ""));
    const suffix = title.match(/\b(ur|xr|r|s|a|b)$/);
    return suffix ? suffix[1].toUpperCase() : null;
  } catch {
    return null;
  }
}

function cardImageSource(card, grade) {
  const cachedVariants = imageVariants[card.id]?.[grade] || {};
  const variantType = card.type || "unknown";
  if (Object.hasOwn(cachedVariants, variantType) && cachedVariants[variantType]) {
    return cachedVariants[variantType];
  }
  if (Object.hasOwn(cachedVariants, "any") && cachedVariants.any) return cachedVariants.any;
  const source = card.image ? { url: card.image, page: null } : imageSources[card.id];
  const sourceGrade = card.imageGrade || inferWikiCardGrade(source?.url);
  const sourceType = inferWikiCardType(source?.url) || (card.imageGrade ? "fx" : null);
  return source && ((sourceGrade && sourceGrade !== grade) ||
    (sourceType && card.type && sourceType !== card.type))
    ? { ...source, gradeOverlay: true }
    : source;
}

function cardImageSearchUrls(card, grade, type) {
  const query = encodeURIComponent(`Rhythm Hive ${card.group} ${card.name} ${grade} ${type?.name || ""} card`);
  return {
    google: `https://www.google.com/search?tbm=isch&q=${query}`,
    bing: `https://www.bing.com/images/search?q=${query}`,
    pinterest: `https://www.pinterest.com/search/pins/?q=${query}`,
    youtube: `https://www.youtube.com/results?search_query=${query}`,
  };
}

function cardImageDoesNotMatch(card, grade, type) {
  const exactVariant = imageVariants[card.id]?.[grade];
  if (exactVariant && Object.hasOwn(exactVariant, type || "unknown") &&
    exactVariant[type || "unknown"]) return Boolean(exactVariant[type || "unknown"].gradeOverlay);
  const source = card.image ? { url: card.image, page: null } : imageSources[card.id];
  if (!source) return false;
  const sourceGrade = card.imageGrade || inferWikiCardGrade(source.url);
  const sourceType = inferWikiCardType(source.url) || (card.imageGrade ? "fx" : null);
  return Boolean((sourceGrade && sourceGrade !== grade) || (sourceType && type && sourceType !== type));
}

const fandomThemeCategories = {
  live: "Live",
  special: "Special",
  fx: "FX",
  season: "Season",
  album: "Album",
};
const fandomThemeNames = new Map();
const fandomThemeRequests = new Map();

async function loadFandomThemeNames(type) {
  if (fandomThemeNames.has(type)) return fandomThemeNames.get(type);
  if (fandomThemeRequests.has(type)) return fandomThemeRequests.get(type);
  const request = (async () => {
    const themes = new Set();
    let continuation = {};
    do {
      const result = await fetchFandomJson({
        action: "query",
        list: "categorymembers",
        cmtitle: `Category:${fandomThemeCategories[type]} Themes`,
        cmtype: "page",
        cmlimit: "500",
        ...continuation,
      });
      for (const page of result.query?.categorymembers || []) {
        themes.add(normalizeTitle(page.title));
      }
      continuation = result.continue || {};
    } while (Object.keys(continuation).length > 0);
    fandomThemeNames.set(type, themes);
    return themes;
  })();
  fandomThemeRequests.set(type, request);
  try {
    return await request;
  } finally {
    fandomThemeRequests.delete(type);
  }
}

async function findWikiGradeImage(card, grade, type) {
  const groupName = fandomCategories[card.group];
  if (!groupName) return null;
  const [results, themeNames] = await Promise.all([
    Promise.all([`${groupName} ${card.name} ${grade}`, `${card.name} ${grade}`].map((srsearch) => fetchFandomJson({
      action: "query",
      list: "search",
      srnamespace: "6",
      srsearch,
      srlimit: "50",
    }))),
    type && fandomThemeCategories[type] ? loadFandomThemeNames(type) : null,
  ]);
  const suffix = normalizeTitle(`${card.name} ${grade}`);
  const groupToken = compactTitle(groupName);
  const candidates = new Map();
  for (const result of results) {
    for (const file of result.query?.search || []) {
      const title = file.title.replace(/^File:/, "");
      const withoutExtension = title.replace(/\.[^.]+$/, "");
      const normalizedTitle = normalizeTitle(withoutExtension);
      if (!/\.(?:png|jpe?g|webp)$/i.test(title) || !normalizedTitle.endsWith(suffix)) continue;
      const themeName = normalizedTitle.slice(0, -suffix.length).trim();
      if (themeNames && !themeNames.has(themeName)) continue;
      candidates.set(file.title, {
        title: file.title,
        hasGroup: compactTitle(withoutExtension).includes(groupToken),
        timestamp: file.timestamp || "",
      });
    }
  }
  const selected = [...candidates.values()].sort((a, b) =>
    Number(b.hasGroup) - Number(a.hasGroup) || b.timestamp.localeCompare(a.timestamp),
  );
  if (selected.length > 0) {
    const result = await fetchFandomJson({
      action: "query",
      prop: "imageinfo",
      iiprop: "url",
      iiurlwidth: "640",
      titles: selected.slice(0, 10).map((file) => file.title).join("|"),
    });
    const image = Object.values(result.query?.pages || {})
      .map((file) => ({
        url: file.imageinfo?.[0]?.url || file.imageinfo?.[0]?.thumburl,
        page: file.imageinfo?.[0]?.descriptionurl,
      }))
      .find((entry) => entry.url?.startsWith("https://") && typeof entry.page === "string" &&
        new URL(entry.page).hostname === "rhythmhive.fandom.com");
    if (image) return image;
  }
  if (!type || !themeNames) return null;

  let continuation = {};
  const matchingFiles = [];
  do {
    const result = await fetchFandomJson({
      action: "query",
      list: "categorymembers",
      cmtitle: `Category:${groupName} card images`,
      cmtype: "file",
      cmlimit: "500",
      cmsort: "timestamp",
      cmdir: "descending",
      cmprop: "title|timestamp",
      ...continuation,
    });
    for (const file of result.query?.categorymembers || []) {
      const title = file.title.replace(/^File:/, "");
      const withoutExtension = title.replace(/\.[^.]+$/, "");
      const normalizedTitle = normalizeTitle(withoutExtension);
      if (!/\.(?:png|jpe?g|webp)$/i.test(title)) continue;
      const themeName = [...themeNames]
        .filter((name) => normalizedTitle.startsWith(`${name} `))
        .sort((a, b) => b.length - a.length)[0];
      if (!themeName) continue;
      const aliases = [...new Set([
        card.name,
        card.name.replace(/\s+/g, ""),
        card.name.replace(/[.\s-]+/g, ""),
      ])].map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
      const match = withoutExtension.match(new RegExp(
        `(?:^|[^a-z0-9])(?:${aliases})(?:\\s+(UR|XR|R|S|A|B))?$`, "i",
      ));
      const gradeSuffix = match?.[1]?.toUpperCase();
      if (!match || (gradeSuffix && gradeSuffix !== grade)) continue;
      matchingFiles.push({
        title: file.title,
        timestamp: file.timestamp || "",
      });
    }
    continuation = result.continue || {};
  } while (Object.keys(continuation).length > 0 && matchingFiles.length === 0);

  matchingFiles.sort((a, b) => b.timestamp.localeCompare(a.timestamp));
  if (matchingFiles.length === 0) return null;
  const result = await fetchFandomJson({
    action: "query",
    prop: "imageinfo",
    iiprop: "url",
    iiurlwidth: "640",
    titles: matchingFiles.slice(0, 10).map((file) => file.title).join("|"),
  });
  const pages = Object.values(result.query?.pages || {});
  const image = matchingFiles.map((candidate) => {
    const file = pages.find((page) => page.title === candidate.title);
    return file && {
      url: file.imageinfo?.[0]?.url || file.imageinfo?.[0]?.thumburl,
      page: file.imageinfo?.[0]?.descriptionurl,
    };
  }).find((entry) => entry?.url?.startsWith("https://") && typeof entry.page === "string" &&
      new URL(entry.page).hostname === "rhythmhive.fandom.com");
  return image || null;
}

async function loadCardGradeImage(id, grade) {
  const card = cardById(id);
  if (!card) return null;
  const type = card.type || "unknown";
  const variants = imageVariants[id]?.[grade] || {};
  if (variants[type]) return variants[type];
  const requestKey = `${id}:${grade}:${type}`;
  if (imageVariantRequests.has(requestKey)) return imageVariantRequests.get(requestKey);
  const request = findWikiGradeImage(card, grade, type === "unknown" ? null : type);
  imageVariantRequests.set(requestKey, request);
  try {
    const image = await request;
    const currentVariant = imageVariants[id]?.[grade]?.[type];
    if (currentVariant?.manual) return currentVariant;
    imageVariants[id] = {
      ...(imageVariants[id] || {}),
      [grade]: { ...(imageVariants[id]?.[grade] || {}), [type]: image },
    };
    writeStorage(keys.imageVariants, imageVariants);
    return image;
  } finally {
    imageVariantRequests.delete(requestKey);
  }
}

async function fetchFandomJson(params) {
  const url = new URL("https://rhythmhive.fandom.com/api.php");
  for (const [key, value] of Object.entries({ ...params, format: "json", origin: "*" })) {
    url.searchParams.set(key, value);
  }
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Fandom API returned HTTP ${response.status}`);
  const result = await response.json();
  if (result.error) throw new Error(result.error.info || "Fandom API returned an error");
  return result;
}

function scoreFromSongTemplate(content) {
  const scoreMatch = content.match(/(?:^|\n)\s*\|scoreSH\s*=\s*([^\n|]+)/i);
  if (!scoreMatch) return null;
  const goals = scoreMatch[1].split("/")
    .flatMap((goal) => goal.match(/\d{1,3}(?:,\d{3})+|\d+/g) || [])
    .map((goal) => Number(goal.replace(/,/g, "")))
    .filter(Number.isFinite);
  return goals.length ? Math.max(...goals) : null;
}

async function loadGroupSongScores(group) {
  if (songScores[group]?.length) return songScores[group];
  if (songScoreRequests.has(group)) return songScoreRequests.get(group);
  const request = (async () => {
    const category = songCategories[group];
    if (!category) throw new Error(`Chưa có danh mục bài hát cho nhóm ${group}.`);
    const titles = [];
    let continuation = {};
    do {
      const result = await fetchFandomJson({
        action: "query",
        list: "categorymembers",
        cmtitle: `Category:${category} Songs`,
        cmtype: "page",
        cmlimit: "500",
        ...continuation,
      });
      titles.push(...(result.query?.categorymembers || []).map((page) => page.title));
      continuation = result.continue || {};
    } while (Object.keys(continuation).length > 0);

    const songs = [];
    for (let offset = 0; offset < titles.length; offset += 25) {
      const batch = titles.slice(offset, offset + 25);
      const result = await fetchFandomJson({
        action: "query",
        prop: "revisions",
        rvprop: "content",
        titles: batch.map((title) => `Template:${title}`).join("|"),
      });
      for (const page of Object.values(result.query?.pages || {})) {
        const content = page.revisions?.[0]?.["*"] ?? page.revisions?.[0]?.content ?? "";
        const score = scoreFromSongTemplate(content);
        if (score === null) continue;
        const title = page.title.replace(/^Template:/, "");
        songs.push({
          title,
          score,
          url: `https://rhythmhive.fandom.com/wiki/${encodeURIComponent(title.replace(/ /g, "_"))}`,
        });
      }
    }
    songs.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
    if (songs.length === 0) throw new Error(`Wiki không có mốc điểm Super Hard EX đọc được cho ${group}.`);
    songScores[group] = songs;
    writeStorage(keys.songScores, songScores);
    return songs;
  })();
  songScoreRequests.set(group, request);
  try {
    return await request;
  } finally {
    songScoreRequests.delete(group);
  }
}

function renderSongRecommendations(container, songs, group) {
  const topSongs = songs.slice(0, 3);
  container.innerHTML = `
    <p class="song-estimate-note">Ước tính theo mốc EX Super Hard toàn bài của ${escapeHtml(group)} trên Wiki; không phải điểm riêng của idol.</p>
    ${topSongs.map((song, index) => `
      <a class="song-result" href="${escapeHtml(song.url)}" target="_blank" rel="noopener noreferrer">
        <span class="song-rank">${index + 1}</span>
        <span class="song-result-name">${escapeHtml(song.title)}</span>
        <strong>${song.score.toLocaleString("vi-VN")}</strong>
      </a>`).join("")}`;
}

async function loadFandomImages() {
  const availableGroups = [...new Set(cards.filter((card) => !card.image && fandomCategories[card.group]).map((card) => card.group))];
  await Promise.all(availableGroups.map(async (group) => {
    const groupCards = cards.filter((card) => card.group === group && !card.image);
    const unmatched = new Set(groupCards.filter((card) => !imageSources[card.id]).map((card) => card.id));
    if (unmatched.size === 0) return;

    try {
      let continuation = {};
      let pages = 0;
      const selectedFiles = new Map();
      while (unmatched.size > 0 && pages < 8) {
        const result = await fetchFandomJson({
          action: "query",
          list: "categorymembers",
          cmtitle: `Category:${fandomCategories[group]} card images`,
          cmtype: "file",
          cmlimit: "500",
          cmsort: "timestamp",
          cmdir: "descending",
          ...continuation,
        });
        const files = result.query?.categorymembers || [];
        for (const file of files) {
          const title = file.title.replace(/^File:/, "");
          const withoutExtension = title.replace(/\.[^.]+$/, "");
          const normalized = normalizeTitle(withoutExtension);
          for (const card of groupCards) {
            if (unmatched.has(card.id) && normalized.endsWith(` ${normalizeTitle(card.name)}`)) {
              selectedFiles.set(card.id, file.title);
              unmatched.delete(card.id);
            }
          }
        }
        continuation = result.continue || {};
        pages++;
        if (Object.keys(continuation).length === 0) break;
      }

      await Promise.all([...unmatched].map(async (id) => {
        const card = groupCards.find((entry) => entry.id === id);
        try {
          const result = await fetchFandomJson({
            action: "query",
            list: "search",
            srnamespace: "6",
            srsearch: `${fandomCategories[group]} ${card.name}`,
            srlimit: "20",
          });
          const candidates = (result.query?.search || []).filter((file) => {
            const title = file.title.replace(/^File:/, "").replace(/\.[^.]+$/, "");
            return compactTitle(title).endsWith(compactTitle(card.name));
          });
          candidates.sort((a, b) => {
            const groupToken = compactTitle(fandomCategories[group]);
            const aHasGroup = compactTitle(a.title).includes(groupToken);
            const bHasGroup = compactTitle(b.title).includes(groupToken);
            return Number(bHasGroup) - Number(aHasGroup);
          });
          if (candidates[0]) selectedFiles.set(id, candidates[0].title);
        } catch (error) {
          console.error(`Không thể tìm ảnh dự phòng cho ${card.name} (${group}).`, error);
        }
      }));

      const titles = [...selectedFiles.values()];
      if (titles.length === 0) return;
      const result = await fetchFandomJson({
        action: "query",
        prop: "imageinfo",
        iiprop: "url",
        iiurlwidth: "640",
        titles: titles.join("|"),
      });
      const imagesByTitle = new Map(
        Object.values(result.query?.pages || {}).map((file) => [
          file.title,
          {
            url: file.imageinfo?.[0]?.url || file.imageinfo?.[0]?.thumburl,
            page: file.imageinfo?.[0]?.descriptionurl,
          },
        ]),
      );
      for (const [id, title] of selectedFiles) {
        const image = imagesByTitle.get(title);
        if (image?.url?.startsWith("https://")) imageSources[id] = image;
      }
    } catch (error) {
      console.error(`Không thể tải ảnh từ danh mục Fandom của ${group}.`, error);
    }
  }));

  if (Object.keys(imageSources).length > 0) {
    writeStorage(keys.imageSources, imageSources);
    let updatedTypes = false;
    for (const card of cards) {
      if (card.type || !imageSources[card.id]) continue;
      const inferredType = inferWikiCardType(imageSources[card.id].url);
      if (!inferredType) continue;
      card.type = inferredType;
      updatedTypes = true;
    }
    if (updatedTypes) writeStorage(keys.cards, cards);
    renderCards();
  } else {
    showNotice("Không tải được ảnh từ Rhythm Hive Wiki. Hãy kiểm tra kết nối mạng hoặc dùng trình duyệt cho phép truy cập API Fandom.");
  }
}

function renderFilters() {
  const selectedGroup = elements.group.value;
  const selectedLevel = elements.levelFilter.value;
  const selectedGrade = elements.grade.value;
  const selectedType = elements.type.value;
  const groups = [...new Set(cards.map((card) => card.group))].sort((a, b) => a.localeCompare(b));
  const grades = gradeOrder;
  const types = cardTypes;
  elements.group.innerHTML = '<option value="">Tất cả nhóm</option>' +
    groups.map((group) => `<option value="${escapeHtml(group)}">${escapeHtml(group)}</option>`).join("");
  elements.grade.innerHTML = '<option value="">Tất cả cấp thẻ</option>' +
    grades.map((grade) => `<option value="${escapeHtml(grade)}">${escapeHtml(grade)}</option>`).join("");
  elements.type.innerHTML = '<option value="">Tất cả loại thẻ</option>' +
    types.map((type) => `<option value="${type.id}">${type.name}</option>`).join("");
  elements.levelFilter.innerHTML = '<option value="">Tất cả Level</option>' +
    Array.from({ length: 60 }, (_, index) => `<option value="${index + 1}">Level ${index + 1}</option>`).join("");
  if (groups.includes(selectedGroup)) elements.group.value = selectedGroup;
  if (grades.includes(selectedGrade)) elements.grade.value = selectedGrade;
  if (types.some((type) => type.id === selectedType)) elements.type.value = selectedType;
  if (selectedLevel) elements.levelFilter.value = selectedLevel;
}

function renderCards() {
  const query = elements.search.value.trim().toLocaleLowerCase();
  const group = elements.group.value;
  const level = elements.levelFilter.value;
  const grade = elements.grade.value;
  const type = elements.type.value;
  const filtered = cards.filter((card) => {
    const searchable = `${card.name} ${card.group} ${card.grade ?? card.rarity} ${card.type ?? ""}`.toLocaleLowerCase();
    return (!query || searchable.includes(query)) &&
      (!group || card.group === group) &&
      (!level || cardLevel(card) === Number(level)) &&
      (!grade || (card.grade ?? card.rarity) === grade) &&
      (!type || card.type === type) &&
      (!elements.favoritesOnly.checked || Object.hasOwn(favorites, card.id));
  });
  elements.cardCount.textContent = filtered.length;
  elements.resultLabel.textContent = filtered.length === cards.length ? "Tất cả thẻ" : `Hiển thị ${filtered.length} / ${cards.length} thẻ`;
  elements.empty.hidden = filtered.length > 0;
  elements.grid.hidden = filtered.length === 0;
  const groupOrder = Object.keys(groupMembers);
  const sortedCards = filtered.sort((a, b) =>
    ((groupOrder.indexOf(a.group) < 0 ? groupOrder.length : groupOrder.indexOf(a.group)) -
      (groupOrder.indexOf(b.group) < 0 ? groupOrder.length : groupOrder.indexOf(b.group))) ||
    gradeOrder.indexOf(a.grade ?? a.rarity) - gradeOrder.indexOf(b.grade ?? b.rarity) ||
    (cardTypes.findIndex((type) => type.id === a.type) - cardTypes.findIndex((type) => type.id === b.type)) ||
    a.name.localeCompare(b.name),
  );
  const groupedCards = new Map();
  for (const card of sortedCards) {
    if (!groupedCards.has(card.group)) groupedCards.set(card.group, []);
    groupedCards.get(card.group).push(card);
  }
  elements.grid.innerHTML = [...groupedCards].map(([group, groupCards]) => `
    <section class="group-section" aria-label="${escapeHtml(group)} — ${groupCards.length} thẻ">
      <header class="group-heading">
        <div><p class="eyebrow">GROUP COLLECTION</p><h3>${escapeHtml(group)}</h3></div>
        <span class="group-card-count">${groupCards.length} thẻ</span>
      </header>
      <div class="group-card-grid">${groupCards.map((card, index) => {
    const level = cardLevel(card);
    const stats = calculatedStats(card, level);
    const grade = card.grade ?? card.rarity;
    const source = cardImageSource(card, grade);
    const isFavorite = Object.hasOwn(favorites, card.id);
    const rating = Number(favorites[card.id]) || 0;
    const selected = currentTeam.includes(card.id);
    const full = !selected && currentTeam.every(Boolean);
    const teamGroup = currentTeam.map((id) => id && cardById(id)?.group).find(Boolean) || "";
    const blockedByGroup = Boolean(teamGroup && teamGroup !== card.group);
    const type = cardTypes.find((entry) => entry.id === card.type);
    const typeStyle = type ? `--type-color:${type.color}` : "--type-color:#a9a4b5";
    const showExternalImageSearch = source?.manual || !source || cardImageDoesNotMatch(card, grade, card.type);
    const imageSearchUrls = cardImageSearchUrls(card, grade, type);
    return `
      <article class="character-card${source ? " has-card-image" : ""} grade-${grade.toLowerCase()}${type ? ` type-${type.id}` : " type-unknown"}" style="${typeStyle}" data-id="${escapeHtml(card.id)}" data-name="${escapeHtml(card.name)}" data-group="${escapeHtml(card.group)}">
        <div class="card-visual" style="--card-bg:${palette[index % palette.length]}">
          <span class="grade-badge" title="Cấp thẻ ${grade}">${escapeHtml(grade)}</span>
          <span class="type-badge">${type ? escapeHtml(type.name) : "Chưa rõ loại"}</span>
          <button class="favorite-button${isFavorite ? " is-favorite" : ""}" type="button" data-action="favorite" data-id="${escapeHtml(card.id)}" aria-label="${isFavorite ? "Bỏ yêu thích" : "Thêm yêu thích"} ${escapeHtml(card.name)}" aria-pressed="${isFavorite}">♥</button>
          ${source ? `<a class="card-photo-link" ${source.page ? `href="${escapeHtml(source.page)}" target="_blank" rel="noopener noreferrer"` : ""} title="${source.page ? "Xem ảnh gốc trên Rhythm Hive Wiki" : `Ảnh ${escapeHtml(card.name)}`}"><img class="card-photo" src="${escapeHtml(source.url)}" alt="Ảnh thẻ ${escapeHtml(card.name)}" loading="lazy" referrerpolicy="no-referrer"></a>${source.gradeOverlay ? `<span class="grade-image-patch" aria-label="Hiển thị cấp ${escapeHtml(grade)} trên ảnh dự phòng">${escapeHtml(grade)}</span>` : ""}` : `<span class="avatar-mark">${escapeHtml(initials(card.name))}</span>`}
          <span class="card-group">${escapeHtml(card.group)}</span>
        </div>
        <div class="card-body">
          <div class="card-title-row">
            <h3 class="card-title" title="${escapeHtml(card.name)}">${escapeHtml(card.name)}</h3>
            <button type="button" class="card-profile-btn" data-action="card-profile" data-id="${escapeHtml(card.id)}" title="Xem thông tin chi tiết của ${escapeHtml(card.name)}" aria-label="Hồ sơ ${escapeHtml(card.name)}">
              <span class="profile-btn-icon" aria-hidden="true">ℹ</span> Hồ sơ
            </button>
          </div>
          <div class="card-subtitle"><p class="card-group-name">${escapeHtml(card.group)}</p><div class="card-classification" aria-label="Phân loại thẻ">
            <span class="classification-grade">Cấp ${escapeHtml(grade)}</span>
            <span class="classification-type">${type ? `Thẻ ${escapeHtml(type.name)}` : "Chưa rõ loại thẻ"}</span>
          </div></div>
          <div class="card-meta-row">
            <div class="rating" aria-label="Đánh giá ${rating} trên 5">
              ${[1, 2, 3, 4, 5].map((star) => `<button type="button" data-action="rate" data-id="${escapeHtml(card.id)}" data-rating="${star}" class="${star <= rating ? "active" : ""}" aria-label="Đánh giá ${star} sao" aria-pressed="${star === rating}">★</button>`).join("")}
            </div>
            <div class="classification-pickers">
              <label class="classification-picker"><span>CẤP</span><select data-action="card-grade" data-id="${escapeHtml(card.id)}" aria-label="Cấp thẻ ${escapeHtml(card.name)}">${gradeOrder.map((entry) => `<option value="${entry}" ${grade === entry ? "selected" : ""}>${entry}</option>`).join("")}</select></label>
              <label class="classification-picker"><span>LOẠI</span><select data-action="card-type" data-id="${escapeHtml(card.id)}" aria-label="Loại thẻ ${escapeHtml(card.name)}"><option value="">Chưa rõ</option>${cardTypes.map((entry) => `<option value="${entry.id}" ${card.type === entry.id ? "selected" : ""}>${entry.name}</option>`).join("")}</select></label>
            </div>
          </div>
          ${showExternalImageSearch ? `<div class="external-image-tools">
            <div class="image-search-links">
              <span>THIẾU ẢNH?</span>
              <a href="${imageSearchUrls.google}" target="_blank" rel="noopener noreferrer">Google Images</a>
              <a href="${imageSearchUrls.bing}" target="_blank" rel="noopener noreferrer">Bing</a>
              <a href="${imageSearchUrls.pinterest}" target="_blank" rel="noopener noreferrer">Pinterest</a>
              <a href="${imageSearchUrls.youtube}" target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
            <label class="external-image-label">Dán URL ảnh HTTPS
              <input type="url" data-action="external-image-url" data-id="${escapeHtml(card.id)}" placeholder="https://..." value="${source?.manual ? escapeHtml(source.url) : ""}" aria-label="URL ảnh thay thế cho ${escapeHtml(card.name)}">
            </label>
            <div class="external-image-actions">
              <button type="button" data-action="save-external-image" data-id="${escapeHtml(card.id)}">Dùng ảnh này</button>
              ${source?.manual ? `<button type="button" data-action="remove-external-image" data-id="${escapeHtml(card.id)}">Xóa ảnh riêng</button>` : ""}
            </div>
          </div>` : ""}
          <div class="card-stats">
            ${statNames.map(([key, label]) => `<div class="stat-item"><span>${label}</span><strong>${stats[key].toLocaleString("vi-VN")}</strong></div>`).join("")}
          </div>
          <div class="song-recommendation">
            <button type="button" class="song-recommend-button" data-action="songs" data-id="${escapeHtml(card.id)}">♫ Bài điểm cao cùng nhóm</button>
            <div class="song-results" data-results-for="${escapeHtml(card.id)}" hidden></div>
          </div>
          <div class="card-footer">
            <label class="card-level-control">LV <input class="card-level-input" type="number" min="1" max="60" value="${level}" data-action="card-level" data-id="${escapeHtml(card.id)}" aria-label="Level ${escapeHtml(card.name)}"> / 60</label>
            <span class="power-tag">${cardPower(card, level).toLocaleString("vi-VN")} PWR</span>
            <button type="button" class="add-button${selected ? " is-added" : ""}" data-action="team" data-id="${escapeHtml(card.id)}" ${full || blockedByGroup ? "disabled" : ""} title="${blockedByGroup ? `Đội hình hiện chỉ gồm ${escapeHtml(teamGroup)}` : ""}">${selected ? "Đã thêm" : blockedByGroup ? "Khác nhóm" : "＋ Đội hình"}</button>
          </div>
        </div>
      </article>`;
      }).join("")}</div>
    </section>`).join("");
  if (activeTooltipCardId && elements.memberTooltip && !elements.memberTooltip.hidden) {
    const currentAnchor = document.querySelector(`.character-card[data-id="${activeTooltipCardId}"]`) ||
                          document.querySelector(`.team-slot[data-id="${activeTooltipCardId}"]`);
    if (currentAnchor) {
      showMemberTooltip(activeTooltipCardId, currentAnchor, isTooltipPinned);
    } else if (!isTooltipPinned) {
      hideMemberTooltip(true);
    }
  }
}

function renderTeam() {
  const teamCards = currentTeam.map((id) => id ? cardById(id) : null);
  const active = teamCards.filter(Boolean);
  const activeGroups = [...new Set(active.map((card) => card.group))];
  const teamGroup = activeGroups[0] || "";
  const total = active.reduce((sum, card) => sum + cardPower(card), 0);
  elements.teamCount.textContent = `${active.length}/5`;
  elements.teamGroup.textContent = teamGroup || "Chọn một nhóm nhạc để bắt đầu";
  elements.teamGroup.classList.toggle("has-group", Boolean(teamGroup));
  elements.teamTotal.textContent = total.toLocaleString("vi-VN");
  elements.teamSlots.innerHTML = teamCards.map((card, index) => card ? `
    <div class="team-slot" data-id="${escapeHtml(card.id)}">
      <span class="slot-avatar">${escapeHtml(initials(card.name))}</span>
      <span class="slot-copy"><strong>${escapeHtml(card.name)}</strong><span>${escapeHtml(card.group)} · ${escapeHtml(card.grade ?? card.rarity)} · ${escapeHtml(cardTypes.find((type) => type.id === card.type)?.name || "Chưa rõ")} · LV ${cardLevel(card)} · ${cardPower(card).toLocaleString("vi-VN")} PWR</span></span>
      <button type="button" class="remove-slot" data-action="remove-slot" data-index="${index}" aria-label="Xóa ${escapeHtml(card.name)} khỏi đội hình">×</button>
    </div>` : `<div class="team-slot empty-slot">Vị trí ${index + 1} · Chọn thẻ từ bộ sưu tập</div>`).join("");
  elements.savedCount.textContent = builds.length;
  if (builds.length === 0) {
    elements.savedBuilds.innerHTML = '<p class="saved-empty">Chưa có đội hình nào được lưu.</p>';
  } else {
    elements.savedBuilds.innerHTML = builds.map((build, index) => `
      <div class="build-row">
        <span class="build-row-name" title="${escapeHtml(build.name)}">${escapeHtml(build.name)}</span>
          <span class="build-row-meta">${escapeHtml(build.group || "Đội hình")} · ${build.team.filter(Boolean).length} thẻ</span>
        <button type="button" data-action="load-build" data-index="${index}">Mở</button>
        <button type="button" data-action="delete-build" data-index="${index}" aria-label="Xóa đội hình ${escapeHtml(build.name)}">×</button>
      </div>`).join("");
  }
}

function renderAll() {
  renderFilters();
  renderCards();
  renderTeam();
}

function updateLevel(value) {
  const level = Math.max(1, Math.min(60, Math.round(Number(value) || 1)));
  currentLevel = level;
  elements.levelInput.value = level;
  elements.levelRange.value = level;
  writeStorage(keys.level, level);
  for (const card of cards) cardLevels[card.id] = level;
  writeStorage(keys.cardLevels, cardLevels);
  renderCards();
  renderTeam();
}

function updateCardLevel(id, value) {
  if (!cardById(id)) return;
  const level = Math.max(1, Math.min(60, Math.round(Number(value) || 1)));
  const previousLevel = cardLevels[id];
  cardLevels[id] = level;
  if (writeStorage(keys.cardLevels, cardLevels)) {
    renderAll();
  } else {
    cardLevels[id] = previousLevel;
    renderAll();
  }
}

function updateCardType(id, value) {
  const card = cardById(id);
  if (!card || (value && !cardTypes.some((type) => type.id === value))) return;
  const previousType = card.type;
  card.type = value || null;
  if (writeStorage(keys.cards, cards)) {
    renderAll();
    const grade = card.grade ?? card.rarity;
    const type = card.type;
    loadCardGradeImage(id, grade).then((image) => {
      if (card.type !== type || (card.grade ?? card.rarity) !== grade) return;
      renderAll();
      if (!image && cardImageDoesNotMatch(card, grade, type)) {
        showNotice(`Wiki chưa có ảnh ${cardTypes.find((entry) => entry.id === type)?.name || "chưa rõ loại"} cấp ${grade} của ${card.name}; ảnh cùng nhân vật được giữ và màu phân loại được cập nhật riêng.`);
      }
    }).catch((error) => {
      console.error(`Không thể tải ảnh ${card.name} cấp ${grade}.`, error);
      if (card.type === type && (card.grade ?? card.rarity) === grade) {
        showNotice(`Không thể tải ảnh ${card.name} cấp ${grade}. Hãy kiểm tra kết nối và thử lại.`);
      }
    });
  } else {
    card.type = previousType;
    renderAll();
  }
}

function updateCardGrade(id, value) {
  const card = cardById(id);
  const grade = String(value).toUpperCase();
  if (!card || !gradeOrder.includes(grade)) return;
  const previousGrade = card.grade;
  card.grade = grade;
  card.rarity = grade;
  if (writeStorage(keys.cards, cards)) {
    renderAll();
    const type = card.type;
    loadCardGradeImage(id, grade).then((image) => {
      if (card.grade !== grade || card.type !== type) return;
      renderAll();
      if (!image && cardImageDoesNotMatch(card, grade, type)) {
        showNotice(`Wiki chưa có ảnh cấp ${grade} của ${card.name}; ảnh cùng nhân vật được giữ và nhãn cấp được cập nhật riêng.`);
      }
    }).catch((error) => {
      console.error(`Không thể tải ảnh cấp ${grade} của ${card.name}.`, error);
      if (card.grade === grade && card.type === type) {
        showNotice(`Không thể tải ảnh cấp ${grade} của ${card.name}. Hãy kiểm tra kết nối và thử lại.`);
      }
    });
  } else {
    card.grade = previousGrade;
    card.rarity = previousGrade;
    renderAll();
  }
}

function validateExternalImageUrl(value) {
  const imageUrl = new URL(value.trim());
  if (imageUrl.protocol !== "https:" || imageUrl.username || imageUrl.password) {
    throw new Error("URL ảnh phải là HTTPS hợp lệ.");
  }
  return imageUrl.href;
}

function verifyExternalImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const timeout = setTimeout(() => {
      image.src = "";
      reject(new Error("Đợi tải ảnh quá lâu."));
    }, 15000);
    image.referrerPolicy = "no-referrer";
    image.onload = () => {
      clearTimeout(timeout);
      resolve();
    };
    image.onerror = () => {
      clearTimeout(timeout);
      reject(new Error("Không tải được ảnh từ URL này."));
    };
    image.src = url;
  });
}

async function saveExternalCardImage(id, button) {
  const card = cardById(id);
  const input = button.closest(".external-image-tools")?.querySelector('input[data-action="external-image-url"]');
  if (!card || !input?.value.trim()) {
    showNotice("Hãy dán URL ảnh HTTPS trước khi lưu.");
    return;
  }
  let url;
  try {
    url = validateExternalImageUrl(input.value);
    await verifyExternalImage(url);
  } catch (error) {
    console.error(`Không thể xác minh ảnh thay thế cho ${card.name}.`, error);
    showNotice(error.message || `Không thể xác minh ảnh thay thế cho ${card.name}.`);
    return;
  }

  const grade = card.grade ?? card.rarity;
  const type = card.type || "unknown";
  const previous = imageVariants[id]?.[grade]?.[type];
  imageVariants[id] = {
    ...(imageVariants[id] || {}),
    [grade]: {
      ...(imageVariants[id]?.[grade] || {}),
      [type]: { url, page: null, manual: true },
    },
  };
  if (writeStorage(keys.imageVariants, imageVariants)) {
    renderAll();
    showNotice(`Đã lưu ảnh thay thế cho ${card.name} (${grade} · ${type === "unknown" ? "chưa rõ loại" : type}).`);
  } else {
    if (previous === undefined) delete imageVariants[id][grade][type];
    else imageVariants[id][grade][type] = previous;
    renderAll();
  }
}

function removeExternalCardImage(id) {
  const card = cardById(id);
  if (!card) return;
  const grade = card.grade ?? card.rarity;
  const type = card.type || "unknown";
  const previous = imageVariants[id]?.[grade]?.[type];
  if (!previous?.manual) return;
  delete imageVariants[id][grade][type];
  if (Object.keys(imageVariants[id][grade]).length === 0) delete imageVariants[id][grade];
  if (Object.keys(imageVariants[id]).length === 0) delete imageVariants[id];
  if (writeStorage(keys.imageVariants, imageVariants)) {
    renderAll();
    showNotice(`Đã xóa ảnh riêng của ${card.name}.`);
  } else {
    imageVariants[id] = {
      ...(imageVariants[id] || {}),
      [grade]: { ...(imageVariants[id]?.[grade] || {}), [type]: previous },
    };
    renderAll();
  }
}

function toggleFavorite(id) {
  const wasFavorite = Object.hasOwn(favorites, id);
  const previousRating = favorites[id];
  if (Object.hasOwn(favorites, id)) {
    delete favorites[id];
  } else {
    favorites[id] = 0;
  }
  if (writeStorage(keys.favorites, favorites)) {
    renderAll();
  } else {
    if (wasFavorite) favorites[id] = previousRating;
    else delete favorites[id];
  }
}

function setRating(id, rating) {
  const wasFavorite = Object.hasOwn(favorites, id);
  const previousRating = favorites[id];
  favorites[id] = rating;
  if (writeStorage(keys.favorites, favorites)) {
    renderCards();
  } else if (wasFavorite) {
    favorites[id] = previousRating;
  } else {
    delete favorites[id];
  }
}

function toggleTeamCard(id) {
  const card = cardById(id);
  if (!card) return;
  const existingIndex = currentTeam.indexOf(id);
  if (existingIndex >= 0) {
    currentTeam[existingIndex] = null;
  } else {
    const teamGroup = currentTeam.map((teamId) => teamId && cardById(teamId)?.group).find(Boolean);
    if (teamGroup && teamGroup !== card.group) {
      showNotice(`Đội hình hiện chỉ gồm ${teamGroup}. Hãy xóa các thẻ hiện tại nếu muốn đổi nhóm.`);
      return;
    }
    const freeIndex = currentTeam.indexOf(null);
    if (freeIndex < 0) {
      showNotice("Đội hình đã đủ 5 vị trí. Hãy xóa một thẻ trước khi thêm thẻ khác.");
      return;
    }
    currentTeam[freeIndex] = id;
  }
  renderAll();
}

function saveBuild() {
  const name = elements.buildName.value.trim();
  if (!name) {
    showNotice("Hãy nhập tên cho đội hình trước khi lưu.");
    elements.buildName.focus();
    return;
  }
  if (!currentTeam.some(Boolean)) {
    showNotice("Hãy thêm ít nhất một thẻ vào đội hình trước khi lưu.");
    return;
  }
  const teamLevels = Object.fromEntries(currentTeam.filter(Boolean).map((id) => [id, cardLevels[id] ?? 1]));
  const group = cardById(currentTeam.find(Boolean))?.group || "";
  builds.unshift({ id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, name, group, team: [...currentTeam], levels: teamLevels, level: currentLevel });
  if (writeStorage(keys.builds, builds)) {
    elements.buildName.value = "";
    showNotice(`Đã lưu đội hình "${name}".`);
    renderTeam();
  } else {
    builds.shift();
  }
}

elements.search.addEventListener("input", renderCards);
elements.group.addEventListener("change", renderCards);
elements.levelFilter.addEventListener("change", renderCards);
elements.grade.addEventListener("change", renderCards);
elements.type.addEventListener("change", renderCards);
elements.favoritesOnly.addEventListener("change", renderCards);
elements.levelInput.addEventListener("change", () => updateLevel(elements.levelInput.value));
elements.levelRange.addEventListener("input", () => updateLevel(elements.levelRange.value));
elements.saveBuild.addEventListener("click", saveBuild);
elements.buildName.addEventListener("keydown", (event) => {
  if (event.key === "Enter") saveBuild();
});

let activeTooltipCardId = null;
let tooltipHoverTimeout = null;
let isTooltipPinned = false;

function showMemberTooltip(cardId, anchorElement, pin = false) {
  const card = cardById(cardId);
  const tooltip = elements.memberTooltip;
  if (!card || !tooltip || !anchorElement) return;

  const group = card.group;
  const name = card.name;
  const profile = getMemberProfile(group, name);
  const level = cardLevel(card);
  const stats = calculatedStats(card, level);
  const grade = card.grade ?? card.rarity;
  const type = cardTypes.find((t) => t.id === card.type);
  const source = cardImageSource(card, grade);
  const power = cardPower(card, level);

  const groupColor = profile.groupColor || (type ? type.color : "#a894fa");
  tooltip.style.setProperty("--tooltip-accent", groupColor);

  // Avatar / photo
  const avatarImg = tooltip.querySelector(".tooltip-avatar-img");
  const avatarMark = tooltip.querySelector(".tooltip-avatar-mark");
  if (source?.url) {
    avatarImg.src = source.url;
    avatarImg.alt = `Ảnh ${name}`;
    avatarImg.hidden = false;
    avatarMark.hidden = true;
  } else {
    avatarImg.src = "";
    avatarImg.hidden = true;
    avatarMark.textContent = initials(name);
    avatarMark.hidden = false;
  }

  // Titles & tags
  tooltip.querySelector(".tooltip-group-badge").textContent = group;
  tooltip.querySelector(".tooltip-debut-badge").textContent = profile.debut ? `Debut: ${profile.debut}` : "";
  tooltip.querySelector(".tooltip-member-name").textContent = name;
  tooltip.querySelector(".tooltip-real-name").textContent = profile.realName || name;

  // Basic info fields
  tooltip.querySelector(".tooltip-birth").textContent = profile.birthDate || "Đang cập nhật";
  tooltip.querySelector(".tooltip-zodiac").textContent = profile.zodiac || "—";
  tooltip.querySelector(".tooltip-nationality").textContent = profile.nationality || "—";
  tooltip.querySelector(".tooltip-position").textContent = profile.position || "Thành viên";
  tooltip.querySelector(".tooltip-agency").textContent = profile.agency || "HYBE";
  tooltip.querySelector(".tooltip-fandom").textContent = profile.fandom || "—";
  tooltip.querySelector(".tooltip-bio").textContent = profile.bio || `Thành viên của ${group} trong Rhythm Hive.`;

  // Game card info
  tooltip.querySelector(".tooltip-card-power").textContent = `${power.toLocaleString("vi-VN")} PWR`;
  const gradeChip = tooltip.querySelector(".tooltip-card-grade");
  gradeChip.textContent = `Cấp ${grade}`;
  gradeChip.className = `tooltip-chip tooltip-card-grade grade-${grade.toLowerCase()}`;

  const typeChip = tooltip.querySelector(".tooltip-card-type");
  typeChip.textContent = type ? `Thẻ ${type.name}` : "Chưa rõ loại";
  typeChip.className = `tooltip-chip tooltip-card-type ${type ? `type-${type.id}` : "type-unknown"}`;

  tooltip.querySelector(".tooltip-card-level").textContent = `LV ${level}/60`;

  tooltip.querySelector(".t-vocal").textContent = stats.vocal.toLocaleString("vi-VN");
  tooltip.querySelector(".t-dance").textContent = stats.dance.toLocaleString("vi-VN");
  tooltip.querySelector(".t-rap").textContent = stats.rap.toLocaleString("vi-VN");
  tooltip.querySelector(".t-charm").textContent = stats.charm.toLocaleString("vi-VN");

  if (pin) {
    isTooltipPinned = true;
    tooltip.classList.add("is-pinned");
    tooltip.setAttribute("aria-hidden", "false");
  } else if (!isTooltipPinned) {
    tooltip.classList.remove("is-pinned");
    tooltip.setAttribute("aria-hidden", "false");
  }

  tooltip.hidden = false;
  positionMemberTooltip(anchorElement);
  requestAnimationFrame(() => {
    tooltip.classList.add("is-visible");
  });
}

function hideMemberTooltip(force = false) {
  const tooltip = elements.memberTooltip;
  if (!tooltip) return;
  if (isTooltipPinned && !force) return;

  clearTimeout(tooltipHoverTimeout);
  tooltip.classList.remove("is-visible");
  if (force) {
    isTooltipPinned = false;
    tooltip.classList.remove("is-pinned");
    tooltip.hidden = true;
    tooltip.setAttribute("aria-hidden", "true");
    activeTooltipCardId = null;
  } else {
    setTimeout(() => {
      if (!tooltip.classList.contains("is-visible") && !isTooltipPinned) {
        tooltip.hidden = true;
        tooltip.setAttribute("aria-hidden", "true");
        activeTooltipCardId = null;
      }
    }, 180);
  }
}

function positionMemberTooltip(anchorElement) {
  const tooltip = elements.memberTooltip;
  if (!tooltip || !anchorElement) return;

  const targetRect = anchorElement.getBoundingClientRect();
  const tipWidth = tooltip.offsetWidth || 380;
  const tipHeight = tooltip.offsetHeight || 390;
  const margin = 12;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  let left = 0;
  let top = 0;

  const spaceRight = viewportWidth - targetRect.right;
  const spaceLeft = targetRect.left;

  if (spaceRight >= tipWidth + margin) {
    left = targetRect.right + margin;
    top = targetRect.top;
  } else if (spaceLeft >= tipWidth + margin) {
    left = targetRect.left - tipWidth - margin;
    top = targetRect.top;
  } else if (targetRect.top >= tipHeight + margin) {
    left = targetRect.left + (targetRect.width - tipWidth) / 2;
    top = targetRect.top - tipHeight - margin;
  } else {
    left = targetRect.left + (targetRect.width - tipWidth) / 2;
    top = targetRect.bottom + margin;
  }

  left = Math.max(margin, Math.min(left, viewportWidth - tipWidth - margin));
  top = Math.max(margin, Math.min(top, viewportHeight - tipHeight - margin));

  tooltip.style.left = `${Math.round(left)}px`;
  tooltip.style.top = `${Math.round(top)}px`;
}

elements.grid.addEventListener("change", (event) => {
  const input = event.target.closest('input[data-action="card-level"]');
  if (input) updateCardLevel(input.dataset.id, input.value);
  const typeSelect = event.target.closest('select[data-action="card-type"]');
  if (typeSelect) updateCardType(typeSelect.dataset.id, typeSelect.value);
  const gradeSelect = event.target.closest('select[data-action="card-grade"]');
  if (gradeSelect) updateCardGrade(gradeSelect.dataset.id, gradeSelect.value);
});

elements.grid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const { action, id } = button.dataset;
  if (action === "card-profile") {
    event.stopPropagation();
    const cardElement = button.closest(".character-card");
    if (isTooltipPinned && activeTooltipCardId === id) {
      hideMemberTooltip(true);
    } else {
      activeTooltipCardId = id;
      showMemberTooltip(id, cardElement, true);
    }
    return;
  }
  if (action === "save-external-image") {
    saveExternalCardImage(id, button);
    return;
  }
  if (action === "remove-external-image") {
    removeExternalCardImage(id);
    return;
  }
  if (action === "favorite") toggleFavorite(id);
  if (action === "rate") setRating(id, Number(button.dataset.rating));
  if (action === "team") toggleTeamCard(id);
  if (action === "songs") {
    const results = button.closest(".character-card").querySelector(".song-results");
    if (!results) return;
    if (!results.hidden) {
      results.hidden = true;
      button.textContent = "♫ Bài điểm cao cùng nhóm";
      return;
    }
    results.hidden = false;
    button.disabled = true;
    button.textContent = "Đang tra bảng điểm…";
    loadGroupSongScores(cardById(id).group).then((songs) => {
      renderSongRecommendations(results, songs, cardById(id).group);
      button.disabled = false;
      button.textContent = "Ẩn gợi ý";
    }).catch((error) => {
      console.error(`Không thể tải bảng điểm bài hát cho ${cardById(id).group}.`, error);
      results.textContent = "Không tải được dữ liệu bài hát từ Wiki. Hãy thử lại khi có kết nối mạng.";
      button.disabled = false;
      button.textContent = "Thử tải lại gợi ý";
    });
  }
});

elements.teamSlots.addEventListener("click", (event) => {
  const button = event.target.closest('button[data-action="remove-slot"]');
  if (!button) return;
  currentTeam[Number(button.dataset.index)] = null;
  renderAll();
});

// Hover event listeners on catalog cards
elements.grid.addEventListener("pointerover", (event) => {
  if (isTooltipPinned) return;
  const cardElement = event.target.closest(".character-card");
  if (!cardElement) return;
  const cardId = cardElement.dataset.id;
  if (!cardId) return;

  if (activeTooltipCardId === cardId && elements.memberTooltip && !elements.memberTooltip.hidden) return;

  clearTimeout(tooltipHoverTimeout);
  tooltipHoverTimeout = setTimeout(() => {
    activeTooltipCardId = cardId;
    showMemberTooltip(cardId, cardElement);
  }, 90);
});

elements.grid.addEventListener("pointerout", (event) => {
  if (isTooltipPinned) return;
  const cardElement = event.target.closest(".character-card");
  if (!cardElement) return;
  const related = event.relatedTarget;
  if (related && cardElement.contains(related)) return;

  clearTimeout(tooltipHoverTimeout);
  activeTooltipCardId = null;
  hideMemberTooltip();
});

// Hover event listeners on lineup team slots
elements.teamSlots.addEventListener("pointerover", (event) => {
  if (isTooltipPinned) return;
  const slotElement = event.target.closest(".team-slot[data-id]");
  if (!slotElement) return;
  const cardId = slotElement.dataset.id;
  if (!cardId) return;

  if (activeTooltipCardId === cardId && elements.memberTooltip && !elements.memberTooltip.hidden) return;

  clearTimeout(tooltipHoverTimeout);
  tooltipHoverTimeout = setTimeout(() => {
    activeTooltipCardId = cardId;
    showMemberTooltip(cardId, slotElement);
  }, 90);
});

elements.teamSlots.addEventListener("pointerout", (event) => {
  if (isTooltipPinned) return;
  const slotElement = event.target.closest(".team-slot[data-id]");
  if (!slotElement) return;
  const related = event.relatedTarget;
  if (related && slotElement.contains(related)) return;

  clearTimeout(tooltipHoverTimeout);
  activeTooltipCardId = null;
  hideMemberTooltip();
});

// Close pinned tooltip
if (elements.memberTooltip) {
  const closeBtn = elements.memberTooltip.querySelector(".tooltip-close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      hideMemberTooltip(true);
    });
  }
}

document.addEventListener("click", (event) => {
  if (isTooltipPinned) {
    if (!elements.memberTooltip?.contains(event.target) && !event.target.closest('button[data-action="card-profile"]')) {
      hideMemberTooltip(true);
    }
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hideMemberTooltip(true);
  }
});

window.addEventListener("scroll", () => {
  if (activeTooltipCardId && elements.memberTooltip && !elements.memberTooltip.hidden) {
    const currentAnchor = document.querySelector(`.character-card[data-id="${activeTooltipCardId}"]`) ||
                          document.querySelector(`.team-slot[data-id="${activeTooltipCardId}"]`);
    if (currentAnchor) {
      positionMemberTooltip(currentAnchor);
    } else if (!isTooltipPinned) {
      hideMemberTooltip();
    }
  }
}, { passive: true });

window.addEventListener("resize", () => {
  if (activeTooltipCardId && elements.memberTooltip && !elements.memberTooltip.hidden) {
    const currentAnchor = document.querySelector(`.character-card[data-id="${activeTooltipCardId}"]`) ||
                          document.querySelector(`.team-slot[data-id="${activeTooltipCardId}"]`);
    if (currentAnchor) positionMemberTooltip(currentAnchor);
  }
}, { passive: true });

elements.savedBuilds.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const index = Number(button.dataset.index);
  if (!Number.isInteger(index) || !builds[index]) return;
  if (button.dataset.action === "load-build") {
    const build = builds[index];
    const savedIds = Array.isArray(build.team) ? build.team : [];
    const firstSavedCard = savedIds.map((id) => cardById(id?.id ?? id)).find(Boolean);
    const loadGroup = firstSavedCard?.group || build.group || "";
    let skippedCards = false;
    currentTeam = Array.from({ length: 5 }, (_, slot) => {
      const id = savedIds[slot]?.id ?? savedIds[slot];
      const card = cardById(id);
      if (card && card.group === loadGroup) return card.id;
      if (card) skippedCards = true;
      return null;
    });
    if (build.levels && typeof build.levels === "object") {
      for (const id of currentTeam.filter(Boolean)) {
        const level = Number(build.levels[id]);
        if (Number.isInteger(level) && level >= 1 && level <= 60) cardLevels[id] = level;
      }
      writeStorage(keys.cardLevels, cardLevels);
    }
    if (Number.isInteger(build.level) && build.level >= 1 && build.level <= 60) {
      currentLevel = build.level;
      elements.levelInput.value = currentLevel;
      elements.levelRange.value = currentLevel;
      writeStorage(keys.level, currentLevel);
    }
    showNotice(skippedCards
      ? `Đã mở đội hình "${build.name}" và bỏ qua thẻ khác nhóm để giữ đội hình đồng nhất.`
      : `Đã mở đội hình "${build.name}".`);
    renderAll();
  }
  if (button.dataset.action === "delete-build") {
    const [removed] = builds.splice(index, 1);
    if (writeStorage(keys.builds, builds)) {
      showNotice(`Đã xóa đội hình "${removed.name}".`);
      renderTeam();
    } else {
      builds.splice(index, 0, removed);
    }
  }
});

elements.importInput.addEventListener("change", async () => {
  const file = elements.importInput.files?.[0];
  if (!file) return;
  try {
    const parsed = JSON.parse(await file.text());
    const error = validateCards(parsed);
    if (error) {
      showNotice(error);
      return;
    }
    const merged = new Map(cards.map((card) => [card.id, card]));
    for (const card of parsed.map(normalizeCard)) {
      merged.set(card.id, card);
      if (!Number.isInteger(cardLevels[card.id]) || cardLevels[card.id] < 1 || cardLevels[card.id] > 60) cardLevels[card.id] = 1;
    }
    const updatedCards = [...merged.values()];
    if (writeStorage(keys.cards, updatedCards)) {
      cards = updatedCards;
      writeStorage(keys.cardLevels, cardLevels);
      showNotice(`Đã nhập ${parsed.length} thẻ. Thẻ trùng ID được cập nhật; các thẻ khác được giữ nguyên.`);
      renderAll();
      loadFandomImages();
    }
  } catch (error) {
    console.error("Không thể đọc tệp dữ liệu thẻ.", error);
    showNotice("Không thể đọc tệp JSON. Hãy kiểm tra cú pháp và thử lại.");
  } finally {
    elements.importInput.value = "";
  }
});

elements.levelInput.value = currentLevel;
elements.levelRange.value = currentLevel;
renderAll();
loadFandomImages();
