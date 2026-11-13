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
      <article class="character-card${source ? " has-card-image" : ""} grade-${grade.toLowerCase()}${type ? ` type-${type.id}` : " type-unknown"}" style="${typeStyle}">
        <div class="card-visual" style="--card-bg:${palette[index % palette.length]}">
          <span class="grade-badge" title="Cấp thẻ ${grade}">${escapeHtml(grade)}</span>
          <span class="type-badge">${type ? escapeHtml(type.name) : "Chưa rõ loại"}</span>
          <button class="favorite-button${isFavorite ? " is-favorite" : ""}" type="button" data-action="favorite" data-id="${escapeHtml(card.id)}" aria-label="${isFavorite ? "Bỏ yêu thích" : "Thêm yêu thích"} ${escapeHtml(card.name)}" aria-pressed="${isFavorite}">♥</button>
          ${source ? `<a class="card-photo-link" ${source.page ? `href="${escapeHtml(source.page)}" target="_blank" rel="noopener noreferrer"` : ""} title="${source.page ? "Xem ảnh gốc trên Rhythm Hive Wiki" : `Ảnh ${escapeHtml(card.name)}`}"><img class="card-photo" src="${escapeHtml(source.url)}" alt="Ảnh thẻ ${escapeHtml(card.name)}" loading="lazy" referrerpolicy="no-referrer"></a>${source.gradeOverlay ? `<span class="grade-image-patch" aria-label="Hiển thị cấp ${escapeHtml(grade)} trên ảnh dự phòng">${escapeHtml(grade)}</span>` : ""}` : `<span class="avatar-mark">${escapeHtml(initials(card.name))}</span>`}
          <span class="card-group">${escapeHtml(card.group)}</span>
        </div>
        <div class="card-body">
          <div class="card-title-row"><h3 class="card-title" title="${escapeHtml(card.name)}">${escapeHtml(card.name)}</h3></div>
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
    <div class="team-slot">
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
