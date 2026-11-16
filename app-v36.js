const statNames = [
  ["vocal", "Hát"],
  ["dance", "Nhảy"],
  ["rap", "Rap"],
  ["charm", "Sức hút"],
];
const gradeOrder = ["UR", "XR", "R", "S", "A", "B"];
const cardTypes = [
  { id: "live", name: "Live Theme", shortName: "Live", color: "#ff3b4e", icon: "🔴", desc: "Màu Đỏ" },
  { id: "fx", name: "FX Theme", shortName: "FX", color: "#00a2ff", icon: "🔷", desc: "Màu Xanh Dương" },
  { id: "special", name: "Special Theme", shortName: "Special", color: "#b347ff", icon: "💜", desc: "Màu Tím" },
  { id: "season", name: "Season Theme", shortName: "Season", color: "#10b981", icon: "🌿", desc: "Màu Xanh Lá" },
  { id: "album", name: "Album Theme", shortName: "Album", color: "#ffb703", icon: "🟡", desc: "Màu Vàng" },
];

const demoCards = [
  { id: "bts-rm-live", name: "RM", group: "BTS", rarity: "UR", grade: "UR", type: "live", theme: "Proof", image: "https://static.wikia.nocookie.net/rhythmhive/images/f/f3/CONCEPT_F_-_LOVE_YOURSELF_%E7%B5%90_%27Answer%27_RM.png/revision/latest?cb=20230531013245", stats: { min: { vocal: 504, dance: 505, rap: 511, charm: 512 }, max: { vocal: 969, dance: 972, rap: 983, charm: 985 } } },
  { id: "bts-jin-live", name: "Jin", group: "BTS", rarity: "UR", grade: "UR", type: "live", theme: "Proof", image: "https://static.wikia.nocookie.net/rhythmhive/images/e/ec/CONCEPT_F_-_LOVE_YOURSELF_%E7%B5%90_%27Answer%27_Jin.png/revision/latest?cb=20230531013243", stats: { min: { vocal: 506, dance: 512, rap: 505, charm: 504 }, max: { vocal: 973, dance: 984, rap: 971, charm: 970 } } },
  { id: "bts-suga-live", name: "SUGA", group: "BTS", rarity: "UR", grade: "UR", type: "live", theme: "Proof", image: "https://static.wikia.nocookie.net/rhythmhive/images/6/61/CONCEPT_F_-_LOVE_YOURSELF_%E7%B5%90_%27Answer%27_SUGA.png/revision/latest?cb=20230531013246", stats: { min: { vocal: 505, dance: 501, rap: 500, charm: 517 }, max: { vocal: 971, dance: 963, rap: 962, charm: 995 } } },
  { id: "bts-j-hope-live", name: "j-hope", group: "BTS", rarity: "UR", grade: "UR", type: "live", theme: "Proof", image: "https://static.wikia.nocookie.net/rhythmhive/images/f/f9/CONCEPT_F_-_LOVE_YOURSELF_%E7%B5%90_%27Answer%27_j-hope.png/revision/latest?cb=20230531013239", stats: { min: { vocal: 508, dance: 509, rap: 498, charm: 512 }, max: { vocal: 976, dance: 978, rap: 957, charm: 985 } } },
  { id: "bts-jimin-live", name: "Jimin", group: "BTS", rarity: "UR", grade: "UR", type: "live", theme: "Proof", image: "https://static.wikia.nocookie.net/rhythmhive/images/7/72/CONCEPT_F_-_LOVE_YOURSELF_%E7%B5%90_%27Answer%27_Jimin.png/revision/latest?cb=20230531013242", stats: { min: { vocal: 515, dance: 519, rap: 508, charm: 515 }, max: { vocal: 991, dance: 998, rap: 977, charm: 990 } } },
  { id: "bts-v-live", name: "V", group: "BTS", rarity: "UR", grade: "UR", type: "live", theme: "Proof", image: "https://static.wikia.nocookie.net/rhythmhive/images/8/8a/CONCEPT_F_-_LOVE_YOURSELF_%E7%B5%90_%27Answer%27_V.png/revision/latest?cb=20230531013247", stats: { min: { vocal: 510, dance: 502, rap: 510, charm: 504 }, max: { vocal: 980, dance: 965, rap: 980, charm: 970 } } },
  { id: "bts-jungkook-live", name: "Jungkook", group: "BTS", rarity: "UR", grade: "UR", type: "live", theme: "Proof", image: "https://static.wikia.nocookie.net/rhythmhive/images/1/1a/CONCEPT_F_-_LOVE_YOURSELF_%E7%B5%90_%27Answer%27_JungKook.png/revision/latest?cb=20230531013244", stats: { min: { vocal: 504, dance: 507, rap: 515, charm: 515 }, max: { vocal: 970, dance: 975, rap: 990, charm: 990 } } },
  { id: "bts-rm-special", name: "RM", group: "BTS", rarity: "XR", grade: "XR", type: "special", theme: "Butter", image: "https://static.wikia.nocookie.net/rhythmhive/images/c/cd/Blood_Sweat_%26_Tears_-_WINGS_RM.png/revision/latest?cb=20230531013220", stats: { min: { vocal: 487, dance: 475, rap: 474, charm: 478 }, max: { vocal: 936, dance: 913, rap: 912, charm: 920 } } },
  { id: "bts-jin-special", name: "Jin", group: "BTS", rarity: "XR", grade: "XR", type: "special", theme: "Butter", image: "https://static.wikia.nocookie.net/rhythmhive/images/4/4c/Blood_Sweat_%26_Tears_-_WINGS_Jin.png/revision/latest?cb=20230531013216", stats: { min: { vocal: 479, dance: 474, rap: 486, charm: 478 }, max: { vocal: 922, dance: 911, rap: 934, charm: 920 } } },
  { id: "bts-suga-special", name: "SUGA", group: "BTS", rarity: "XR", grade: "XR", type: "special", theme: "Butter", image: "https://static.wikia.nocookie.net/rhythmhive/images/f/f6/Blood_Sweat_%26_Tears_-_WINGS_SUGA.png/revision/latest?cb=20230531013221", stats: { min: { vocal: 473, dance: 468, rap: 465, charm: 484 }, max: { vocal: 910, dance: 900, rap: 895, charm: 930 } } },
  { id: "bts-j-hope-special", name: "j-hope", group: "BTS", rarity: "XR", grade: "XR", type: "special", theme: "Butter", image: "https://static.wikia.nocookie.net/rhythmhive/images/1/12/Blood_Sweat_%26_Tears_-_WINGS_j-hope.png/revision/latest?cb=20230531013214", stats: { min: { vocal: 474, dance: 470, rap: 469, charm: 486 }, max: { vocal: 911, dance: 903, rap: 902, charm: 935 } } },
  { id: "bts-jimin-special", name: "Jimin", group: "BTS", rarity: "XR", grade: "XR", type: "special", theme: "Butter", image: "https://static.wikia.nocookie.net/rhythmhive/images/4/4b/Blood_Sweat_%26_Tears_-_WINGS_Jimin.png/revision/latest?cb=20230531013215", stats: { min: { vocal: 472, dance: 473, rap: 476, charm: 478 }, max: { vocal: 908, dance: 909, rap: 916, charm: 920 } } },
  { id: "bts-v-special", name: "V", group: "BTS", rarity: "XR", grade: "XR", type: "special", theme: "Butter", image: "https://static.wikia.nocookie.net/rhythmhive/images/e/e1/Blood_Sweat_%26_Tears_-_WINGS_V.png/revision/latest?cb=20230531013222", stats: { min: { vocal: 477, dance: 480, rap: 474, charm: 486 }, max: { vocal: 918, dance: 924, rap: 911, charm: 935 } } },
  { id: "bts-jungkook-special", name: "Jungkook", group: "BTS", rarity: "XR", grade: "XR", type: "special", theme: "Butter", image: "https://static.wikia.nocookie.net/rhythmhive/images/a/ab/Blood_Sweat_%26_Tears_-_WINGS_JungKook.png/revision/latest?cb=20230531013219", stats: { min: { vocal: 475, dance: 480, rap: 474, charm: 473 }, max: { vocal: 913, dance: 924, rap: 911, charm: 910 } } },
  { id: "bts-rm-fx", name: "RM", group: "BTS", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/b/b2/Candy_Serenade_RM.png/revision/latest?cb=20250301044256", stats: { min: { vocal: 473, dance: 468, rap: 465, charm: 484 }, max: { vocal: 910, dance: 900, rap: 895, charm: 930 } } },
  { id: "bts-jin-fx", name: "Jin", group: "BTS", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/a/a1/Candy_Serenade_Jin.png/revision/latest?cb=20250301044256", stats: { min: { vocal: 474, dance: 477, rap: 466, charm: 486 }, max: { vocal: 911, dance: 918, rap: 897, charm: 935 } } },
  { id: "bts-suga-fx", name: "SUGA", group: "BTS", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/8/8a/Candy_Serenade_SUGA.png/revision/latest?cb=20250301044255", stats: { min: { vocal: 477, dance: 488, rap: 471, charm: 486 }, max: { vocal: 918, dance: 939, rap: 906, charm: 935 } } },
  { id: "bts-j-hope-fx", name: "j-hope", group: "BTS", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/b/bd/Candy_Serenade_j-hope.png/revision/latest?cb=20250301044254", stats: { min: { vocal: 471, dance: 468, rap: 465, charm: 471 }, max: { vocal: 905, dance: 900, rap: 895, charm: 905 } } },
  { id: "bts-jimin-fx", name: "Jimin", group: "BTS", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/b/b0/Candy_Serenade_Jimin.png/revision/latest?cb=20250301044253", stats: { min: { vocal: 485, dance: 470, rap: 484, charm: 471 }, max: { vocal: 933, dance: 904, rap: 931, charm: 905 } } },
  { id: "bts-v-fx", name: "V", group: "BTS", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/9/9a/Candy_Serenade_V.png/revision/latest?cb=20250301044252", stats: { min: { vocal: 487, dance: 475, rap: 474, charm: 478 }, max: { vocal: 936, dance: 913, rap: 912, charm: 920 } } },
  { id: "bts-jungkook-fx", name: "Jungkook", group: "BTS", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/3/3d/Candy_Serenade_JungKook.png/revision/latest?cb=20250301044257", stats: { min: { vocal: 471, dance: 481, rap: 468, charm: 471 }, max: { vocal: 905, dance: 925, rap: 900, charm: 905 } } },
  { id: "bts-rm-season", name: "RM", group: "BTS", rarity: "UR", grade: "UR", type: "season", theme: "Cozy Winter", image: "https://static.wikia.nocookie.net/rhythmhive/images/3/35/Cozy_Winter_RM.png/revision/latest?cb=20240104073714", stats: { min: { vocal: 517, dance: 516, rap: 515, charm: 504 }, max: { vocal: 995, dance: 992, rap: 990, charm: 969 } } },
  { id: "bts-jin-season", name: "Jin", group: "BTS", rarity: "UR", grade: "UR", type: "season", theme: "Cozy Winter", image: "https://static.wikia.nocookie.net/rhythmhive/images/9/96/Cozy_Winter_Jin.png/revision/latest?cb=20240104073714", stats: { min: { vocal: 522, dance: 505, rap: 500, charm: 508 }, max: { vocal: 1005, dance: 972, rap: 961, charm: 976 } } },
  { id: "bts-suga-season", name: "SUGA", group: "BTS", rarity: "UR", grade: "UR", type: "season", theme: "Cozy Winter", image: "https://static.wikia.nocookie.net/rhythmhive/images/a/ab/Cozy_Winter_SUGA.png/revision/latest?cb=20240104073715", stats: { min: { vocal: 509, dance: 516, rap: 508, charm: 508 }, max: { vocal: 979, dance: 993, rap: 977, charm: 976 } } },
  { id: "bts-j-hope-season", name: "j-hope", group: "BTS", rarity: "UR", grade: "UR", type: "season", theme: "Cozy Winter", image: "https://static.wikia.nocookie.net/rhythmhive/images/7/7e/Cozy_Winter_j-hope.png/revision/latest?cb=20240104073716", stats: { min: { vocal: 510, dance: 519, rap: 513, charm: 510 }, max: { vocal: 981, dance: 997, rap: 986, charm: 982 } } },
  { id: "bts-jimin-season", name: "Jimin", group: "BTS", rarity: "UR", grade: "UR", type: "season", theme: "Cozy Winter", image: "https://static.wikia.nocookie.net/rhythmhive/images/0/0d/Cozy_Winter_Jimin.png/revision/latest?cb=20240104073717", stats: { min: { vocal: 513, dance: 519, rap: 513, charm: 504 }, max: { vocal: 987, dance: 997, rap: 986, charm: 969 } } },
  { id: "bts-v-season", name: "V", group: "BTS", rarity: "UR", grade: "UR", type: "season", theme: "Cozy Winter", image: "https://static.wikia.nocookie.net/rhythmhive/images/e/e7/Cozy_Winter_V.png/revision/latest?cb=20240104073717", stats: { min: { vocal: 506, dance: 509, rap: 516, charm: 517 }, max: { vocal: 974, dance: 978, rap: 992, charm: 994 } } },
  { id: "bts-jungkook-season", name: "Jungkook", group: "BTS", rarity: "UR", grade: "UR", type: "season", theme: "Cozy Winter", image: "https://static.wikia.nocookie.net/rhythmhive/images/f/f5/Cozy_Winter_JungKook.png/revision/latest?cb=20240104073718", stats: { min: { vocal: 505, dance: 519, rap: 505, charm: 508 }, max: { vocal: 971, dance: 998, rap: 972, charm: 976 } } },
  { id: "bts-rm-album", name: "RM", group: "BTS", rarity: "XR", grade: "XR", type: "album", theme: "Vintage Rose", image: "https://static.wikia.nocookie.net/rhythmhive/images/e/e3/Vintage_Rose_RM.png/revision/latest?cb=20240507025453", stats: { min: { vocal: 480, dance: 480, rap: 488, charm: 482 }, max: { vocal: 925, dance: 925, rap: 940, charm: 930 } } },
  { id: "bts-jin-album", name: "Jin", group: "BTS", rarity: "XR", grade: "XR", type: "album", theme: "Vintage Rose", image: "https://static.wikia.nocookie.net/rhythmhive/images/0/04/Vintage_Rose_Jin.png/revision/latest?cb=20240507025452", stats: { min: { vocal: 482, dance: 475, rap: 482, charm: 476 }, max: { vocal: 930, dance: 915, rap: 930, charm: 920 } } },
  { id: "bts-suga-album", name: "SUGA", group: "BTS", rarity: "XR", grade: "XR", type: "album", theme: "Vintage Rose", image: "https://static.wikia.nocookie.net/rhythmhive/images/2/24/Vintage_Rose_SUGA.png/revision/latest?cb=20240507025454", stats: { min: { vocal: 476, dance: 472, rap: 470, charm: 488 }, max: { vocal: 920, dance: 910, rap: 905, charm: 940 } } },
  { id: "bts-j-hope-album", name: "j-hope", group: "BTS", rarity: "XR", grade: "XR", type: "album", theme: "Vintage Rose", image: "https://static.wikia.nocookie.net/rhythmhive/images/a/a4/Vintage_Rose_j-hope.png/revision/latest?cb=20240507025450", stats: { min: { vocal: 475, dance: 488, rap: 478, charm: 480 }, max: { vocal: 917, dance: 941, rap: 924, charm: 925 } } },
  { id: "bts-jimin-album", name: "Jimin", group: "BTS", rarity: "XR", grade: "XR", type: "album", theme: "Vintage Rose", image: "https://static.wikia.nocookie.net/rhythmhive/images/5/53/Vintage_Rose_Jimin.png/revision/latest?cb=20240507025451", stats: { min: { vocal: 489, dance: 480, rap: 484, charm: 488 }, max: { vocal: 948, dance: 929, rap: 936, charm: 940 } } },
  { id: "bts-v-album", name: "V", group: "BTS", rarity: "XR", grade: "XR", type: "album", theme: "Vintage Rose", image: "https://static.wikia.nocookie.net/rhythmhive/images/1/11/Vintage_Rose_V.png/revision/latest?cb=20240507025457", stats: { min: { vocal: 475, dance: 474, rap: 476, charm: 480 }, max: { vocal: 917, dance: 916, rap: 919, charm: 925 } } },
  { id: "bts-jungkook-album", name: "Jungkook", group: "BTS", rarity: "XR", grade: "XR", type: "album", theme: "Vintage Rose", image: "https://static.wikia.nocookie.net/rhythmhive/images/0/00/Vintage_Rose_JungKook.png/revision/latest?cb=20240507025452", stats: { min: { vocal: 474, dance: 472, rap: 470, charm: 474 }, max: { vocal: 915, dance: 910, rap: 905, charm: 915 } } },
  { id: "txt-soobin-live", name: "Soobin", group: "TXT", rarity: "UR", grade: "UR", type: "live", theme: "FREEZE", image: "https://static.wikia.nocookie.net/rhythmhive/images/5/5a/WORLD_%E2%80%93_THE_CHAOS_CHAPTER_FREEZE_Soobin.png/revision/latest?cb=20230605060406", stats: { min: { vocal: 508, dance: 518, rap: 499, charm: 515 }, max: { vocal: 977, dance: 996, rap: 959, charm: 990 } } },
  { id: "txt-yeonjun-live", name: "Yeonjun", group: "TXT", rarity: "UR", grade: "UR", type: "live", theme: "FREEZE", image: "https://static.wikia.nocookie.net/rhythmhive/images/7/77/WORLD_%E2%80%93_THE_CHAOS_CHAPTER_FREEZE_Yeonjun.png/revision/latest?cb=20230605060408", stats: { min: { vocal: 505, dance: 502, rap: 504, charm: 502 }, max: { vocal: 972, dance: 966, rap: 969, charm: 965 } } },
  { id: "txt-beomgyu-live", name: "Beomgyu", group: "TXT", rarity: "UR", grade: "UR", type: "live", theme: "FREEZE", image: "https://static.wikia.nocookie.net/rhythmhive/images/3/31/WORLD_%E2%80%93_THE_CHAOS_CHAPTER_FREEZE_Beomgyu.png/revision/latest?cb=20230605060405", stats: { min: { vocal: 505, dance: 502, rap: 504, charm: 502 }, max: { vocal: 972, dance: 966, rap: 969, charm: 965 } } },
  { id: "txt-taehyun-live", name: "Taehyun", group: "TXT", rarity: "UR", grade: "UR", type: "live", theme: "FREEZE", image: "https://static.wikia.nocookie.net/rhythmhive/images/5/53/WORLD_%E2%80%93_THE_CHAOS_CHAPTER_FREEZE_Taehyun.png/revision/latest?cb=20230605060407", stats: { min: { vocal: 507, dance: 515, rap: 512, charm: 510 }, max: { vocal: 975, dance: 990, rap: 985, charm: 980 } } },
  { id: "txt-huening-kai-live", name: "Huening Kai", group: "TXT", rarity: "UR", grade: "UR", type: "live", theme: "FREEZE", image: "https://static.wikia.nocookie.net/rhythmhive/images/2/28/WORLD_%E2%80%93_THE_CHAOS_CHAPTER_FREEZE_HueningKai.png/revision/latest?cb=20230605060405", stats: { min: { vocal: 517, dance: 504, rap: 502, charm: 507 }, max: { vocal: 995, dance: 970, rap: 965, charm: 975 } } },
  { id: "txt-soobin-special", name: "Soobin", group: "TXT", rarity: "XR", grade: "XR", type: "special", theme: "Blue Hour", image: "https://static.wikia.nocookie.net/rhythmhive/images/4/42/COMEBACK_SHOW_%E2%80%93_Minisode1_Blue_Hour_Soobin.png/revision/latest?cb=20230605060321", stats: { min: { vocal: 487, dance: 475, rap: 474, charm: 478 }, max: { vocal: 936, dance: 913, rap: 912, charm: 920 } } },
  { id: "txt-yeonjun-special", name: "Yeonjun", group: "TXT", rarity: "XR", grade: "XR", type: "special", theme: "Blue Hour", image: "https://static.wikia.nocookie.net/rhythmhive/images/3/30/COMEBACK_SHOW_%E2%80%93_Minisode1_Blue_Hour_Yeonjun.png/revision/latest?cb=20230605060323", stats: { min: { vocal: 475, dance: 473, rap: 476, charm: 473 }, max: { vocal: 913, dance: 909, rap: 916, charm: 910 } } },
  { id: "txt-beomgyu-special", name: "Beomgyu", group: "TXT", rarity: "XR", grade: "XR", type: "special", theme: "Blue Hour", image: "https://static.wikia.nocookie.net/rhythmhive/images/2/2f/COMEBACK_SHOW_%E2%80%93_Minisode1_Blue_Hour_Beomgyu.png/revision/latest?cb=20230605060320", stats: { min: { vocal: 474, dance: 470, rap: 469, charm: 486 }, max: { vocal: 911, dance: 903, rap: 902, charm: 935 } } },
  { id: "txt-taehyun-special", name: "Taehyun", group: "TXT", rarity: "XR", grade: "XR", type: "special", theme: "Blue Hour", image: "https://static.wikia.nocookie.net/rhythmhive/images/f/f0/COMEBACK_SHOW_%E2%80%93_Minisode1_Blue_Hour_Taehyun.png/revision/latest?cb=20230605060322", stats: { min: { vocal: 478, dance: 482, rap: 477, charm: 471 }, max: { vocal: 919, dance: 927, rap: 918, charm: 905 } } },
  { id: "txt-huening-kai-special", name: "Huening Kai", group: "TXT", rarity: "XR", grade: "XR", type: "special", theme: "Blue Hour", image: "https://static.wikia.nocookie.net/rhythmhive/images/e/e5/COMEBACK_SHOW_%E2%80%93_Minisode1_Blue_Hour_HueningKai.png/revision/latest?cb=20230605060320", stats: { min: { vocal: 484, dance: 486, rap: 473, charm: 481 }, max: { vocal: 930, dance: 935, rap: 910, charm: 925 } } },
  { id: "txt-soobin-fx", name: "Soobin", group: "TXT", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/a/ab/Candy_Serenade_Soobin.png/revision/latest?cb=20250301044327", stats: { min: { vocal: 473, dance: 474, rap: 480, charm: 481 }, max: { vocal: 909, dance: 912, rap: 923, charm: 925 } } },
  { id: "txt-yeonjun-fx", name: "Yeonjun", group: "TXT", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/1/1b/Candy_Serenade_Yeonjun.png/revision/latest?cb=20250301044327", stats: { min: { vocal: 472, dance: 471, rap: 473, charm: 476 }, max: { vocal: 907, dance: 906, rap: 909, charm: 915 } } },
  { id: "txt-beomgyu-fx", name: "Beomgyu", group: "TXT", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/e/e6/Candy_Serenade_Beomgyu.png/revision/latest?cb=20250301044326", stats: { min: { vocal: 477, dance: 480, rap: 474, charm: 486 }, max: { vocal: 918, dance: 924, rap: 911, charm: 935 } } },
  { id: "txt-taehyun-fx", name: "Taehyun", group: "TXT", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/d/d8/Candy_Serenade_Taehyun.png/revision/latest?cb=20250301044325", stats: { min: { vocal: 475, dance: 480, rap: 474, charm: 473 }, max: { vocal: 913, dance: 924, rap: 911, charm: 910 } } },
  { id: "txt-huening-kai-fx", name: "Huening Kai", group: "TXT", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/c/c5/Candy_Serenade_HueningKai.png/revision/latest?cb=20250301044328", stats: { min: { vocal: 472, dance: 471, rap: 473, charm: 476 }, max: { vocal: 907, dance: 906, rap: 909, charm: 915 } } },
  { id: "txt-soobin-season", name: "Soobin", group: "TXT", rarity: "UR", grade: "UR", type: "season", theme: "Fireworks", image: "https://static.wikia.nocookie.net/rhythmhive/images/f/f6/2022_Fireworks_Festival_Soobin.png/revision/latest?cb=20241009053251", stats: { min: { vocal: 508, dance: 510, rap: 520, charm: 520 }, max: { vocal: 976, dance: 982, rap: 1000, charm: 1000 } } },
  { id: "txt-yeonjun-season", name: "Yeonjun", group: "TXT", rarity: "UR", grade: "UR", type: "season", theme: "Fireworks", image: "https://static.wikia.nocookie.net/rhythmhive/images/a/ae/2022_Fireworks_Festival_Yeonjun.png/revision/latest?cb=20241009053255", stats: { min: { vocal: 520, dance: 524, rap: 508, charm: 517 }, max: { vocal: 1000, dance: 1007, rap: 976, charm: 994 } } },
  { id: "txt-beomgyu-season", name: "Beomgyu", group: "TXT", rarity: "UR", grade: "UR", type: "season", theme: "Fireworks", image: "https://static.wikia.nocookie.net/rhythmhive/images/1/11/2022_Fireworks_Festival_Beomgyu.png/revision/latest?cb=20241009053247", stats: { min: { vocal: 516, dance: 511, rap: 506, charm: 520 }, max: { vocal: 993, dance: 984, rap: 973, charm: 1000 } } },
  { id: "txt-taehyun-season", name: "Taehyun", group: "TXT", rarity: "UR", grade: "UR", type: "season", theme: "Fireworks", image: "https://static.wikia.nocookie.net/rhythmhive/images/4/48/2022_Fireworks_Festival_Taehyun.png/revision/latest?cb=20241009053253", stats: { min: { vocal: 525, dance: 513, rap: 517, charm: 520 }, max: { vocal: 1010, dance: 987, rap: 995, charm: 1000 } } },
  { id: "txt-huening-kai-season", name: "Huening Kai", group: "TXT", rarity: "UR", grade: "UR", type: "season", theme: "Fireworks", image: "https://static.wikia.nocookie.net/rhythmhive/images/6/6b/2022_Fireworks_Festival_HueningKai.png/revision/latest?cb=20241009053249", stats: { min: { vocal: 504, dance: 517, rap: 501, charm: 504 }, max: { vocal: 969, dance: 994, rap: 963, charm: 969 } } },
  { id: "txt-soobin-album", name: "Soobin", group: "TXT", rarity: "XR", grade: "XR", type: "album", theme: "STAR", image: "https://static.wikia.nocookie.net/rhythmhive/images/2/24/CONCEPT_1_%E2%80%93_THE_DREAM_CHAPTER_STAR_Soobin.png/revision/latest?cb=20230605060325", stats: { min: { vocal: 476, dance: 486, rap: 480, charm: 477 }, max: { vocal: 917, dance: 934, rap: 922, charm: 918 } } },
  { id: "txt-yeonjun-album", name: "Yeonjun", group: "TXT", rarity: "XR", grade: "XR", type: "album", theme: "STAR", image: "https://static.wikia.nocookie.net/rhythmhive/images/d/dc/CONCEPT_1_%E2%80%93_THE_DREAM_CHAPTER_STAR_Yeonjun.png/revision/latest?cb=20230605060327", stats: { min: { vocal: 472, dance: 488, rap: 476, charm: 477 }, max: { vocal: 907, dance: 940, rap: 917, charm: 918 } } },
  { id: "txt-beomgyu-album", name: "Beomgyu", group: "TXT", rarity: "XR", grade: "XR", type: "album", theme: "STAR", image: "https://static.wikia.nocookie.net/rhythmhive/images/f/ff/CONCEPT_1_%E2%80%93_THE_DREAM_CHAPTER_STAR_Beomgyu.png/revision/latest?cb=20230605060324", stats: { min: { vocal: 492, dance: 476, rap: 475, charm: 481 }, max: { vocal: 947, dance: 915, rap: 914, charm: 925 } } },
  { id: "txt-taehyun-album", name: "Taehyun", group: "TXT", rarity: "XR", grade: "XR", type: "album", theme: "STAR", image: "https://static.wikia.nocookie.net/rhythmhive/images/8/88/CONCEPT_1_%E2%80%93_THE_DREAM_CHAPTER_STAR_Taehyun.png/revision/latest?cb=20230605060326", stats: { min: { vocal: 476, dance: 486, rap: 480, charm: 477 }, max: { vocal: 917, dance: 934, rap: 922, charm: 918 } } },
  { id: "txt-huening-kai-album", name: "Huening Kai", group: "TXT", rarity: "XR", grade: "XR", type: "album", theme: "STAR", image: "https://static.wikia.nocookie.net/rhythmhive/images/e/e4/CONCEPT_1_%E2%80%93_THE_DREAM_CHAPTER_STAR_HueningKai.png/revision/latest?cb=20230605060324", stats: { min: { vocal: 472, dance: 488, rap: 476, charm: 477 }, max: { vocal: 907, dance: 940, rap: 917, charm: 918 } } },
  { id: "enhypen-jungwon-live", name: "Jungwon", group: "ENHYPEN", rarity: "UR", grade: "UR", type: "live", theme: "MANIFESTO", image: "https://static.wikia.nocookie.net/rhythmhive/images/2/24/M_ver._%E2%80%93_MANIFESTO_DAY_1_Jungwon.png/revision/latest?cb=20230618043834", stats: { min: { vocal: 504, dance: 518, rap: 514, charm: 512 }, max: { vocal: 969, dance: 997, rap: 988, charm: 985 } } },
  { id: "enhypen-heeseung-live", name: "Heeseung", group: "ENHYPEN", rarity: "UR", grade: "UR", type: "live", theme: "MANIFESTO", image: "https://static.wikia.nocookie.net/rhythmhive/images/8/83/M_ver._%E2%80%93_MANIFESTO_DAY_1_Heeseung.png/revision/latest?cb=20230618043831", stats: { min: { vocal: 512, dance: 508, rap: 503, charm: 515 }, max: { vocal: 984, dance: 977, rap: 968, charm: 990 } } },
  { id: "enhypen-jay-live", name: "Jay", group: "ENHYPEN", rarity: "UR", grade: "UR", type: "live", theme: "MANIFESTO", image: "https://static.wikia.nocookie.net/rhythmhive/images/0/02/M_ver._%E2%80%93_MANIFESTO_DAY_1_Jay.png/revision/latest?cb=20230618043833", stats: { min: { vocal: 513, dance: 511, rap: 511, charm: 502 }, max: { vocal: 986, dance: 983, rap: 982, charm: 965 } } },
  { id: "enhypen-jake-live", name: "Jake", group: "ENHYPEN", rarity: "UR", grade: "UR", type: "live", theme: "MANIFESTO", image: "https://static.wikia.nocookie.net/rhythmhive/images/6/65/M_ver._%E2%80%93_MANIFESTO_DAY_1_Jake.png/revision/latest?cb=20230618043832", stats: { min: { vocal: 516, dance: 501, rap: 515, charm: 502 }, max: { vocal: 993, dance: 964, rap: 991, charm: 965 } } },
  { id: "enhypen-sunghoon-live", name: "Sunghoon", group: "ENHYPEN", rarity: "UR", grade: "UR", type: "live", theme: "MANIFESTO", image: "https://static.wikia.nocookie.net/rhythmhive/images/d/da/M_ver._%E2%80%93_MANIFESTO_DAY_1_Sunghoon.png/revision/latest?cb=20230618043836", stats: { min: { vocal: 519, dance: 511, rap: 516, charm: 517 }, max: { vocal: 999, dance: 982, rap: 993, charm: 995 } } },
  { id: "enhypen-sunoo-live", name: "Sunoo", group: "ENHYPEN", rarity: "UR", grade: "UR", type: "live", theme: "MANIFESTO", image: "https://static.wikia.nocookie.net/rhythmhive/images/7/7a/M_ver._%E2%80%93_MANIFESTO_DAY_1_Sunoo.png/revision/latest?cb=20230618043837", stats: { min: { vocal: 516, dance: 500, rap: 512, charm: 517 }, max: { vocal: 992, dance: 961, rap: 984, charm: 995 } } },
  { id: "enhypen-ni-ki-live", name: "NI-KI", group: "ENHYPEN", rarity: "UR", grade: "UR", type: "live", theme: "MANIFESTO", image: "https://static.wikia.nocookie.net/rhythmhive/images/2/26/M_ver._%E2%80%93_MANIFESTO_DAY_1_NI-KI.png/revision/latest?cb=20230618043835", stats: { min: { vocal: 505, dance: 510, rap: 501, charm: 502 }, max: { vocal: 972, dance: 981, rap: 964, charm: 965 } } },
  { id: "enhypen-jungwon-special", name: "Jungwon", group: "ENHYPEN", rarity: "XR", grade: "XR", type: "special", theme: "HYPE", image: "https://static.wikia.nocookie.net/rhythmhive/images/2/2a/BORDER_CARNIVAL_%E2%80%93_HYPE_Jungwon.png/revision/latest?cb=20230618043749", stats: { min: { vocal: 473, dance: 474, rap: 480, charm: 481 }, max: { vocal: 909, dance: 912, rap: 923, charm: 925 } } },
  { id: "enhypen-heeseung-special", name: "Heeseung", group: "ENHYPEN", rarity: "XR", grade: "XR", type: "special", theme: "HYPE", image: "https://static.wikia.nocookie.net/rhythmhive/images/7/74/BORDER_CARNIVAL_%E2%80%93_HYPE_Heeseung.png/revision/latest?cb=20230618043746", stats: { min: { vocal: 487, dance: 476, rap: 478, charm: 481 }, max: { vocal: 937, dance: 916, rap: 919, charm: 925 } } },
  { id: "enhypen-jay-special", name: "Jay", group: "ENHYPEN", rarity: "XR", grade: "XR", type: "special", theme: "HYPE", image: "https://static.wikia.nocookie.net/rhythmhive/images/8/8b/BORDER_CARNIVAL_%E2%80%93_HYPE_Jay.png/revision/latest?cb=20230618043748", stats: { min: { vocal: 488, dance: 479, rap: 485, charm: 486 }, max: { vocal: 939, dance: 922, rap: 933, charm: 935 } } },
  { id: "enhypen-jake-special", name: "Jake", group: "ENHYPEN", rarity: "XR", grade: "XR", type: "special", theme: "HYPE", image: "https://static.wikia.nocookie.net/rhythmhive/images/8/8e/BORDER_CARNIVAL_%E2%80%93_HYPE_Jake.png/revision/latest?cb=20230618043747", stats: { min: { vocal: 473, dance: 487, rap: 483, charm: 481 }, max: { vocal: 909, dance: 937, rap: 928, charm: 925 } } },
  { id: "enhypen-sunghoon-special", name: "Sunghoon", group: "ENHYPEN", rarity: "XR", grade: "XR", type: "special", theme: "HYPE", image: "https://static.wikia.nocookie.net/rhythmhive/images/1/13/BORDER_CARNIVAL_%E2%80%93_HYPE_Sunghoon.png/revision/latest?cb=20230618043751", stats: { min: { vocal: 471, dance: 481, rap: 468, charm: 471 }, max: { vocal: 905, dance: 925, rap: 900, charm: 905 } } },
  { id: "enhypen-sunoo-special", name: "Sunoo", group: "ENHYPEN", rarity: "XR", grade: "XR", type: "special", theme: "HYPE", image: "https://static.wikia.nocookie.net/rhythmhive/images/3/3d/BORDER_CARNIVAL_%E2%80%93_HYPE_Sunoo.png/revision/latest?cb=20230618043752", stats: { min: { vocal: 471, dance: 483, rap: 472, charm: 473 }, max: { vocal: 906, dance: 928, rap: 907, charm: 910 } } },
  { id: "enhypen-ni-ki-special", name: "NI-KI", group: "ENHYPEN", rarity: "XR", grade: "XR", type: "special", theme: "HYPE", image: "https://static.wikia.nocookie.net/rhythmhive/images/9/92/BORDER_CARNIVAL_%E2%80%93_HYPE_NI-KI.png/revision/latest?cb=20230618043750", stats: { min: { vocal: 475, dance: 474, rap: 480, charm: 476 }, max: { vocal: 914, dance: 912, rap: 923, charm: 915 } } },
  { id: "enhypen-jungwon-fx", name: "Jungwon", group: "ENHYPEN", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/b/b8/Candy_Serenade_Jungwon.png/revision/latest?cb=20250319071946", stats: { min: { vocal: 476, dance: 485, rap: 485, charm: 481 }, max: { vocal: 916, dance: 933, rap: 932, charm: 925 } } },
  { id: "enhypen-heeseung-fx", name: "Heeseung", group: "ENHYPEN", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/1/14/Candy_Serenade_Heeseung.png/revision/latest?cb=20250319071945", stats: { min: { vocal: 476, dance: 476, rap: 484, charm: 478 }, max: { vocal: 915, dance: 915, rap: 930, charm: 920 } } },
  { id: "enhypen-jay-fx", name: "Jay", group: "ENHYPEN", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/3/39/Candy_Serenade_Jay.png/revision/latest?cb=20250319071944", stats: { min: { vocal: 472, dance: 484, rap: 475, charm: 476 }, max: { vocal: 907, dance: 931, rap: 914, charm: 915 } } },
  { id: "enhypen-jake-fx", name: "Jake", group: "ENHYPEN", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/0/04/Candy_Serenade_Jake.png/revision/latest?cb=20250319071943", stats: { min: { vocal: 481, dance: 478, rap: 476, charm: 486 }, max: { vocal: 925, dance: 920, rap: 915, charm: 935 } } },
  { id: "enhypen-sunghoon-fx", name: "Sunghoon", group: "ENHYPEN", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/a/ac/Candy_Serenade_Sunghoon.png/revision/latest?cb=20250319071945", stats: { min: { vocal: 481, dance: 478, rap: 476, charm: 486 }, max: { vocal: 925, dance: 920, rap: 915, charm: 935 } } },
  { id: "enhypen-sunoo-fx", name: "Sunoo", group: "ENHYPEN", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/4/4c/Candy_Serenade_Sunoo.png/revision/latest?cb=20250319071942", stats: { min: { vocal: 473, dance: 476, rap: 484, charm: 484 }, max: { vocal: 910, dance: 915, rap: 930, charm: 930 } } },
  { id: "enhypen-ni-ki-fx", name: "NI-KI", group: "ENHYPEN", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/9/93/Candy_Serenade_NI-KI.png/revision/latest?cb=20250319071941", stats: { min: { vocal: 472, dance: 484, rap: 475, charm: 476 }, max: { vocal: 907, dance: 931, rap: 914, charm: 915 } } },
  { id: "enhypen-jungwon-season", name: "Jungwon", group: "ENHYPEN", rarity: "XR", grade: "XR", type: "season", theme: "Vintage Rose", image: "https://static.wikia.nocookie.net/rhythmhive/images/9/98/Vintage_Rose_Jungwon.png/revision/latest?cb=20240507025640", stats: { min: { vocal: 475, dance: 482, rap: 471, charm: 488 }, max: { vocal: 918, dance: 928, rap: 908, charm: 940 } } },
  { id: "enhypen-heeseung-season", name: "Heeseung", group: "ENHYPEN", rarity: "XR", grade: "XR", type: "season", theme: "Vintage Rose", image: "https://static.wikia.nocookie.net/rhythmhive/images/1/16/Vintage_Rose_Heeseung.png/revision/latest?cb=20240507025637", stats: { min: { vocal: 478, dance: 489, rap: 483, charm: 482 }, max: { vocal: 922, dance: 942, rap: 931, charm: 930 } } },
  { id: "enhypen-jay-season", name: "Jay", group: "ENHYPEN", rarity: "XR", grade: "XR", type: "season", theme: "Vintage Rose", image: "https://static.wikia.nocookie.net/rhythmhive/images/8/8a/Vintage_Rose_Jay.png/revision/latest?cb=20240507025639", stats: { min: { vocal: 478, dance: 480, rap: 486, charm: 487 }, max: { vocal: 922, dance: 926, rap: 937, charm: 938 } } },
  { id: "enhypen-jake-season", name: "Jake", group: "ENHYPEN", rarity: "XR", grade: "XR", type: "season", theme: "Vintage Rose", image: "https://static.wikia.nocookie.net/rhythmhive/images/6/67/Vintage_Rose_Jake.png/revision/latest?cb=20240507025638", stats: { min: { vocal: 476, dance: 474, rap: 474, charm: 478 }, max: { vocal: 918, dance: 914, rap: 913, charm: 921 } } },
  { id: "enhypen-sunghoon-season", name: "Sunghoon", group: "ENHYPEN", rarity: "XR", grade: "XR", type: "season", theme: "Vintage Rose", image: "https://static.wikia.nocookie.net/rhythmhive/images/b/be/Vintage_Rose_Sunghoon.png/revision/latest?cb=20240507025641", stats: { min: { vocal: 482, dance: 475, rap: 482, charm: 478 }, max: { vocal: 930, dance: 915, rap: 930, charm: 921 } } },
  { id: "enhypen-sunoo-season", name: "Sunoo", group: "ENHYPEN", rarity: "XR", grade: "XR", type: "season", theme: "Vintage Rose", image: "https://static.wikia.nocookie.net/rhythmhive/images/4/44/Vintage_Rose_Sunoo.png/revision/latest?cb=20240507025644", stats: { min: { vocal: 486, dance: 485, rap: 487, charm: 478 }, max: { vocal: 937, dance: 936, rap: 939, charm: 921 } } },
  { id: "enhypen-ni-ki-season", name: "NI-KI", group: "ENHYPEN", rarity: "XR", grade: "XR", type: "season", theme: "Vintage Rose", image: "https://static.wikia.nocookie.net/rhythmhive/images/9/9e/Vintage_Rose_NI-KI.png/revision/latest?cb=20240507025640", stats: { min: { vocal: 487, dance: 488, rap: 474, charm: 483 }, max: { vocal: 939, dance: 941, rap: 913, charm: 931 } } },
  { id: "enhypen-jungwon-album", name: "Jungwon", group: "ENHYPEN", rarity: "UR", grade: "UR", type: "album", theme: "ORANGE BLOOD", image: "https://static.wikia.nocookie.net/rhythmhive/images/d/d0/KSANA_Ver._%E2%80%93_ORANGE_BLOOD_Jungwon.png/revision/latest?cb=20231227152703", stats: { min: { vocal: 503, dance: 521, rap: 505, charm: 506 }, max: { vocal: 969, dance: 1001, rap: 970, charm: 975 } } },
  { id: "enhypen-heeseung-album", name: "Heeseung", group: "ENHYPEN", rarity: "UR", grade: "UR", type: "album", theme: "ORANGE BLOOD", image: "https://static.wikia.nocookie.net/rhythmhive/images/5/5c/KSANA_Ver._%E2%80%93_ORANGE_BLOOD_Heeseung.png/revision/latest?cb=20231227152704", stats: { min: { vocal: 509, dance: 508, rap: 517, charm: 511 }, max: { vocal: 981, dance: 978, rap: 994, charm: 982 } } },
  { id: "enhypen-jay-album", name: "Jay", group: "ENHYPEN", rarity: "UR", grade: "UR", type: "album", theme: "ORANGE BLOOD", image: "https://static.wikia.nocookie.net/rhythmhive/images/d/d2/KSANA_Ver._%E2%80%93_ORANGE_BLOOD_Jay.png/revision/latest?cb=20231227152705", stats: { min: { vocal: 509, dance: 518, rap: 508, charm: 506 }, max: { vocal: 979, dance: 995, rap: 976, charm: 975 } } },
  { id: "enhypen-jake-album", name: "Jake", group: "ENHYPEN", rarity: "UR", grade: "UR", type: "album", theme: "ORANGE BLOOD", image: "https://static.wikia.nocookie.net/rhythmhive/images/a/a1/KSANA_Ver._%E2%80%93_ORANGE_BLOOD_Jake.png/revision/latest?cb=20231227152706", stats: { min: { vocal: 512, dance: 515, rap: 502, charm: 522 }, max: { vocal: 985, dance: 991, rap: 966, charm: 1004 } } },
  { id: "enhypen-sunghoon-album", name: "Sunghoon", group: "ENHYPEN", rarity: "UR", grade: "UR", type: "album", theme: "ORANGE BLOOD", image: "https://static.wikia.nocookie.net/rhythmhive/images/d/da/KSANA_Ver._%E2%80%93_ORANGE_BLOOD_Sunghoon.png/revision/latest?cb=20231227152706", stats: { min: { vocal: 528, dance: 514, rap: 519, charm: 522 }, max: { vocal: 1016, dance: 988, rap: 998, charm: 1004 } } },
  { id: "enhypen-sunoo-album", name: "Sunoo", group: "ENHYPEN", rarity: "UR", grade: "UR", type: "album", theme: "ORANGE BLOOD", image: "https://static.wikia.nocookie.net/rhythmhive/images/b/b0/KSANA_Ver._%E2%80%93_ORANGE_BLOOD_Sunoo.png/revision/latest?cb=20231227152707", stats: { min: { vocal: 512, dance: 527, rap: 499, charm: 522 }, max: { vocal: 985, dance: 1013, rap: 959, charm: 1004 } } },
  { id: "enhypen-ni-ki-album", name: "NI-KI", group: "ENHYPEN", rarity: "UR", grade: "UR", type: "album", theme: "ORANGE BLOOD", image: "https://static.wikia.nocookie.net/rhythmhive/images/3/3e/KSANA_Ver._%E2%80%93_ORANGE_BLOOD_NI-KI.png/revision/latest?cb=20231227152708", stats: { min: { vocal: 508, dance: 514, rap: 498, charm: 525 }, max: { vocal: 976, dance: 986, rap: 956, charm: 1011 } } },
  { id: "seventeen-scoups-live", name: "S.COUPS", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "live", theme: "Darl+ing", image: "https://static.wikia.nocookie.net/rhythmhive/images/e/e1/Concept_Photo_1_%E2%80%93_Darl%2Bing_S.COUPS.png/revision/latest?cb=20240118094156", stats: { min: { vocal: 505, dance: 502, rap: 504, charm: 502 }, max: { vocal: 972, dance: 966, rap: 969, charm: 965 } } },
  { id: "seventeen-jeonghan-live", name: "Jeonghan", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "live", theme: "Darl+ing", image: "https://static.wikia.nocookie.net/rhythmhive/images/8/82/Concept_Photo_1_%E2%80%93_Darl%2Bing_Jeonghan.png/revision/latest?cb=20240118094154", stats: { min: { vocal: 510, dance: 502, rap: 510, charm: 504 }, max: { vocal: 980, dance: 965, rap: 980, charm: 970 } } },
  { id: "seventeen-joshua-live", name: "Joshua", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "live", theme: "Darl+ing", image: "https://static.wikia.nocookie.net/rhythmhive/images/e/e4/Concept_Photo_1_%E2%80%93_Darl%2Bing_Joshua.png/revision/latest?cb=20240118094154", stats: { min: { vocal: 510, dance: 502, rap: 510, charm: 504 }, max: { vocal: 980, dance: 965, rap: 980, charm: 970 } } },
  { id: "seventeen-jun-live", name: "Jun", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "live", theme: "Darl+ing", image: "https://static.wikia.nocookie.net/rhythmhive/images/e/e4/Concept_Photo_1_%E2%80%93_Darl%2Bing_Jun.png/revision/latest?cb=20240118094155", stats: { min: { vocal: 509, dance: 500, rap: 506, charm: 502 }, max: { vocal: 979, dance: 962, rap: 973, charm: 965 } } },
  { id: "seventeen-hoshi-live", name: "Hoshi", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "live", theme: "Darl+ing", image: "https://static.wikia.nocookie.net/rhythmhive/images/6/6a/Concept_Photo_1_%E2%80%93_Darl%2Bing_Hoshi.png/revision/latest?cb=20240118094153", stats: { min: { vocal: 514, dance: 516, rap: 501, charm: 510 }, max: { vocal: 989, dance: 992, rap: 963, charm: 980 } } },
  { id: "seventeen-wonwoo-live", name: "Wonwoo", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "live", theme: "Darl+ing", image: "https://static.wikia.nocookie.net/rhythmhive/images/7/7c/Concept_Photo_1_%E2%80%93_Darl%2Bing_Wonwoo.png/revision/latest?cb=20240118094159", stats: { min: { vocal: 505, dance: 502, rap: 504, charm: 502 }, max: { vocal: 972, dance: 966, rap: 969, charm: 965 } } },
  { id: "seventeen-woozi-live", name: "Woozi", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "live", theme: "Darl+ing", image: "https://static.wikia.nocookie.net/rhythmhive/images/7/78/Concept_Photo_1_%E2%80%93_Darl%2Bing_Woozi.png/revision/latest?cb=20240118094200", stats: { min: { vocal: 509, dance: 519, rap: 502, charm: 517 }, max: { vocal: 978, dance: 999, rap: 966, charm: 995 } } },
  { id: "seventeen-dk-live", name: "DK", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "live", theme: "Darl+ing", image: "https://static.wikia.nocookie.net/rhythmhive/images/a/a7/Concept_Photo_1_%E2%80%93_Darl%2Bing_DK.png/revision/latest?cb=20240118094152", stats: { min: { vocal: 502, dance: 514, rap: 503, charm: 504 }, max: { vocal: 966, dance: 988, rap: 967, charm: 970 } } },
  { id: "seventeen-mingyu-live", name: "Mingyu", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "live", theme: "Darl+ing", image: "https://static.wikia.nocookie.net/rhythmhive/images/4/4e/Concept_Photo_1_%E2%80%93_Darl%2Bing_Mingyu.png/revision/latest?cb=20240118094156", stats: { min: { vocal: 508, dance: 518, rap: 499, charm: 515 }, max: { vocal: 977, dance: 996, rap: 959, charm: 990 } } },
  { id: "seventeen-the8-live", name: "The8", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "live", theme: "Darl+ing", image: "https://static.wikia.nocookie.net/rhythmhive/images/d/db/Concept_Photo_1_%E2%80%93_Darl%2Bing_The8.png/revision/latest?cb=20240118094158", stats: { min: { vocal: 503, dance: 517, rap: 510, charm: 510 }, max: { vocal: 968, dance: 994, rap: 981, charm: 980 } } },
  { id: "seventeen-seungkwan-live", name: "Seungkwan", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "live", theme: "Darl+ing", image: "https://static.wikia.nocookie.net/rhythmhive/images/d/dd/Concept_Photo_1_%E2%80%93_Darl%2Bing_Seungkwan.png/revision/latest?cb=20240209050054", stats: { min: { vocal: 502, dance: 514, rap: 503, charm: 504 }, max: { vocal: 966, dance: 988, rap: 967, charm: 970 } } },
  { id: "seventeen-vernon-live", name: "Vernon", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "live", theme: "Darl+ing", image: "https://static.wikia.nocookie.net/rhythmhive/images/c/c6/Concept_Photo_1_%E2%80%93_Darl%2Bing_Vernon.png/revision/latest?cb=20240118094158", stats: { min: { vocal: 505, dance: 501, rap: 500, charm: 517 }, max: { vocal: 971, dance: 963, rap: 962, charm: 995 } } },
  { id: "seventeen-dino-live", name: "Dino", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "live", theme: "Darl+ing", image: "https://static.wikia.nocookie.net/rhythmhive/images/7/7b/Concept_Photo_1_%E2%80%93_Darl%2Bing_Dino.png/revision/latest?cb=20240118094151", stats: { min: { vocal: 510, dance: 502, rap: 510, charm: 504 }, max: { vocal: 980, dance: 965, rap: 980, charm: 970 } } },
  { id: "seventeen-scoups-special", name: "S.COUPS", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "special", theme: "Picnic Day", image: "https://static.wikia.nocookie.net/rhythmhive/images/0/04/2022_Picnic_Day_in_June_S.COUPS.png/revision/latest?cb=20241009055951", stats: { min: { vocal: 515, dance: 523, rap: 518, charm: 516 }, max: { vocal: 992, dance: 1006, rap: 996, charm: 993 } } },
  { id: "seventeen-jeonghan-special", name: "Jeonghan", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "special", theme: "Picnic Day", image: "https://static.wikia.nocookie.net/rhythmhive/images/e/ef/2022_Picnic_Day_in_June_Jeonghan.png/revision/latest?cb=20241009055948", stats: { min: { vocal: 518, dance: 528, rap: 507, charm: 525 }, max: { vocal: 995, dance: 1016, rap: 975, charm: 1009 } } },
  { id: "seventeen-joshua-special", name: "Joshua", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "special", theme: "Picnic Day", image: "https://static.wikia.nocookie.net/rhythmhive/images/e/eb/2022_Picnic_Day_in_June_Joshua.png/revision/latest?cb=20241009055949", stats: { min: { vocal: 521, dance: 515, rap: 509, charm: 522 }, max: { vocal: 1001, dance: 992, rap: 978, charm: 1004 } } },
  { id: "seventeen-jun-special", name: "Jun", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "special", theme: "Picnic Day", image: "https://static.wikia.nocookie.net/rhythmhive/images/b/b6/2022_Picnic_Day_in_June_Jun.png/revision/latest?cb=20241009055949", stats: { min: { vocal: 526, dance: 509, rap: 521, charm: 527 }, max: { vocal: 1011, dance: 978, rap: 1003, charm: 1014 } } },
  { id: "seventeen-hoshi-special", name: "Hoshi", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "special", theme: "Picnic Day", image: "https://static.wikia.nocookie.net/rhythmhive/images/b/b3/2022_Picnic_Day_in_June_Hoshi.png/revision/latest?cb=20241009055947", stats: { min: { vocal: 513, dance: 528, rap: 524, charm: 522 }, max: { vocal: 986, dance: 1017, rap: 1007, charm: 1004 } } },
  { id: "seventeen-wonwoo-special", name: "Wonwoo", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "special", theme: "Picnic Day", image: "https://static.wikia.nocookie.net/rhythmhive/images/c/c9/2022_Picnic_Day_in_June_Wonwoo.png/revision/latest?cb=20241009055954", stats: { min: { vocal: 512, dance: 525, rap: 515, charm: 516 }, max: { vocal: 984, dance: 1010, rap: 992, charm: 993 } } },
  { id: "seventeen-woozi-special", name: "Woozi", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "special", theme: "Picnic Day", image: "https://static.wikia.nocookie.net/rhythmhive/images/4/45/2022_Picnic_Day_in_June_Woozi.png/revision/latest?cb=20241009060021", stats: { min: { vocal: 522, dance: 519, rap: 516, charm: 527 }, max: { vocal: 1004, dance: 998, rap: 993, charm: 1014 } } },
  { id: "seventeen-dk-special", name: "DK", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "special", theme: "Picnic Day", image: "https://static.wikia.nocookie.net/rhythmhive/images/2/2a/2022_Picnic_Day_in_June_DK.png/revision/latest?cb=20241009055946", stats: { min: { vocal: 512, dance: 525, rap: 515, charm: 516 }, max: { vocal: 984, dance: 1010, rap: 992, charm: 993 } } },
  { id: "seventeen-mingyu-special", name: "Mingyu", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "special", theme: "Picnic Day", image: "https://static.wikia.nocookie.net/rhythmhive/images/9/9c/2022_Picnic_Day_in_June_Mingyu.png/revision/latest?cb=20241009055950", stats: { min: { vocal: 521, dance: 518, rap: 512, charm: 525 }, max: { vocal: 1003, dance: 995, rap: 985, charm: 1009 } } },
  { id: "seventeen-the8-special", name: "The8", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "special", theme: "Picnic Day", image: "https://static.wikia.nocookie.net/rhythmhive/images/2/24/2022_Picnic_Day_in_June_The8.png/revision/latest?cb=20241009055953", stats: { min: { vocal: 527, dance: 512, rap: 507, charm: 513 }, max: { vocal: 1013, dance: 984, rap: 974, charm: 987 } } },
  { id: "seventeen-seungkwan-special", name: "Seungkwan", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "special", theme: "Picnic Day", image: "https://static.wikia.nocookie.net/rhythmhive/images/e/e2/2022_Picnic_Day_in_June_Seungkwan.png/revision/latest?cb=20241009055952", stats: { min: { vocal: 518, dance: 520, rap: 510, charm: 525 }, max: { vocal: 995, dance: 999, rap: 981, charm: 1009 } } },
  { id: "seventeen-vernon-special", name: "Vernon", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "special", theme: "Picnic Day", image: "https://static.wikia.nocookie.net/rhythmhive/images/d/d0/2022_Picnic_Day_in_June_Vernon.png/revision/latest?cb=20241009055953", stats: { min: { vocal: 516, dance: 525, rap: 522, charm: 519 }, max: { vocal: 993, dance: 1009, rap: 1004, charm: 998 } } },
  { id: "seventeen-dino-special", name: "Dino", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "special", theme: "Picnic Day", image: "https://static.wikia.nocookie.net/rhythmhive/images/e/ed/2022_Picnic_Day_in_June_Dino.png/revision/latest?cb=20241009055945", stats: { min: { vocal: 525, dance: 529, rap: 518, charm: 525 }, max: { vocal: 1010, dance: 1018, rap: 995, charm: 1009 } } },
  { id: "seventeen-scoups-fx", name: "S.COUPS", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "fx", theme: "Blue Frost", image: "https://static.wikia.nocookie.net/rhythmhive/images/1/13/Blue_Frost_Wonder_S.COUPS.png/revision/latest?cb=20241201083018", stats: { min: { vocal: 474, dance: 477, rap: 466, charm: 486 }, max: { vocal: 911, dance: 918, rap: 897, charm: 935 } } },
  { id: "seventeen-jeonghan-fx", name: "Jeonghan", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "fx", theme: "Blue Frost", image: "https://static.wikia.nocookie.net/rhythmhive/images/5/51/Blue_Frost_Wonder_Jeonghan.png/revision/latest?cb=20241201083019", stats: { min: { vocal: 486, dance: 472, rap: 467, charm: 473 }, max: { vocal: 934, dance: 907, rap: 898, charm: 910 } } },
  { id: "seventeen-joshua-fx", name: "Joshua", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "fx", theme: "Blue Frost", image: "https://static.wikia.nocookie.net/rhythmhive/images/8/8b/Blue_Frost_Wonder_Joshua.png/revision/latest?cb=20241201083018", stats: { min: { vocal: 477, dance: 488, rap: 471, charm: 486 }, max: { vocal: 918, dance: 939, rap: 906, charm: 935 } } },
  { id: "seventeen-jun-fx", name: "Jun", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "fx", theme: "Blue Frost", image: "https://static.wikia.nocookie.net/rhythmhive/images/3/3f/Blue_Frost_Wonder_Jun.png/revision/latest?cb=20241201083017", stats: { min: { vocal: 475, dance: 480, rap: 474, charm: 473 }, max: { vocal: 913, dance: 924, rap: 911, charm: 910 } } },
  { id: "seventeen-hoshi-fx", name: "Hoshi", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "fx", theme: "Blue Frost", image: "https://static.wikia.nocookie.net/rhythmhive/images/3/38/Blue_Frost_Wonder_Hoshi.png/revision/latest?cb=20241201083016", stats: { min: { vocal: 483, dance: 485, rap: 470, charm: 478 }, max: { vocal: 929, dance: 932, rap: 903, charm: 920 } } },
  { id: "seventeen-wonwoo-fx", name: "Wonwoo", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "fx", theme: "Blue Frost", image: "https://static.wikia.nocookie.net/rhythmhive/images/c/c3/Blue_Frost_Wonder_Wonwoo.png/revision/latest?cb=20241201083015", stats: { min: { vocal: 475, dance: 480, rap: 474, charm: 473 }, max: { vocal: 913, dance: 924, rap: 911, charm: 910 } } },
  { id: "seventeen-woozi-fx", name: "Woozi", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "fx", theme: "Blue Frost", image: "https://static.wikia.nocookie.net/rhythmhive/images/e/ea/Blue_Frost_Wonder_Woozi.png/revision/latest?cb=20241201083014", stats: { min: { vocal: 473, dance: 476, rap: 484, charm: 484 }, max: { vocal: 910, dance: 915, rap: 930, charm: 930 } } },
  { id: "seventeen-dk-fx", name: "DK", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "fx", theme: "Blue Frost", image: "https://static.wikia.nocookie.net/rhythmhive/images/b/b3/Blue_Frost_Wonder_DK.png/revision/latest?cb=20241201083011", stats: { min: { vocal: 475, dance: 480, rap: 474, charm: 473 }, max: { vocal: 913, dance: 924, rap: 911, charm: 910 } } },
  { id: "seventeen-mingyu-fx", name: "Mingyu", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "fx", theme: "Blue Frost", image: "https://static.wikia.nocookie.net/rhythmhive/images/1/14/Blue_Frost_Wonder_Mingyu.png/revision/latest?cb=20241201083012", stats: { min: { vocal: 474, dance: 477, rap: 466, charm: 486 }, max: { vocal: 911, dance: 918, rap: 897, charm: 935 } } },
  { id: "seventeen-the8-fx", name: "The8", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "fx", theme: "Blue Frost", image: "https://static.wikia.nocookie.net/rhythmhive/images/8/81/Blue_Frost_Wonder_The8.png/revision/latest?cb=20241201083013", stats: { min: { vocal: 472, dance: 471, rap: 473, charm: 476 }, max: { vocal: 907, dance: 906, rap: 909, charm: 915 } } },
  { id: "seventeen-seungkwan-fx", name: "Seungkwan", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "fx", theme: "Blue Frost", image: "https://static.wikia.nocookie.net/rhythmhive/images/d/dd/Blue_Frost_Wonder_Seungkwan.png/revision/latest?cb=20241201083009", stats: { min: { vocal: 481, dance: 478, rap: 476, charm: 486 }, max: { vocal: 925, dance: 920, rap: 915, charm: 935 } } },
  { id: "seventeen-vernon-fx", name: "Vernon", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "fx", theme: "Blue Frost", image: "https://static.wikia.nocookie.net/rhythmhive/images/5/56/Blue_Frost_Wonder_Vernon.png/revision/latest?cb=20241201083011", stats: { min: { vocal: 471, dance: 481, rap: 468, charm: 471 }, max: { vocal: 905, dance: 925, rap: 900, charm: 905 } } },
  { id: "seventeen-dino-fx", name: "Dino", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "fx", theme: "Blue Frost", image: "https://static.wikia.nocookie.net/rhythmhive/images/4/4a/Blue_Frost_Wonder_Dino.png/revision/latest?cb=20241201083010", stats: { min: { vocal: 488, dance: 478, rap: 482, charm: 484 }, max: { vocal: 938, dance: 919, rap: 926, charm: 930 } } },
  { id: "seventeen-scoups-season", name: "S.COUPS", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "season", theme: "Strawberry Parade", image: "https://static.wikia.nocookie.net/rhythmhive/images/e/e4/Strawberry_Parade_S.COUPS.png/revision/latest?cb=20240607024606", stats: { min: { vocal: 516, dance: 511, rap: 506, charm: 520 }, max: { vocal: 993, dance: 984, rap: 973, charm: 1000 } } },
  { id: "seventeen-jeonghan-season", name: "Jeonghan", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "season", theme: "Strawberry Parade", image: "https://static.wikia.nocookie.net/rhythmhive/images/f/f0/Strawberry_Parade_Jeonghan.png/revision/latest?cb=20240607024559", stats: { min: { vocal: 525, dance: 511, rap: 513, charm: 517 }, max: { vocal: 1009, dance: 983, rap: 987, charm: 994 } } },
  { id: "seventeen-joshua-season", name: "Joshua", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "season", theme: "Strawberry Parade", image: "https://static.wikia.nocookie.net/rhythmhive/images/6/62/Strawberry_Parade_Joshua.png/revision/latest?cb=20240607024600", stats: { min: { vocal: 508, dance: 513, rap: 499, charm: 524 }, max: { vocal: 977, dance: 986, rap: 960, charm: 1007 } } },
  { id: "seventeen-jun-season", name: "Jun", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "season", theme: "Strawberry Parade", image: "https://static.wikia.nocookie.net/rhythmhive/images/1/11/Strawberry_Parade_Jun.png/revision/latest?cb=20240607024601", stats: { min: { vocal: 522, dance: 505, rap: 500, charm: 508 }, max: { vocal: 1005, dance: 972, rap: 961, charm: 976 } } },
  { id: "seventeen-hoshi-season", name: "Hoshi", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "season", theme: "Strawberry Parade", image: "https://static.wikia.nocookie.net/rhythmhive/images/3/31/Strawberry_Parade_Hoshi.png/revision/latest?cb=20240607024558", stats: { min: { vocal: 509, dance: 506, rap: 511, charm: 508 }, max: { vocal: 979, dance: 974, rap: 983, charm: 976 } } },
  { id: "seventeen-wonwoo-season", name: "Wonwoo", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "season", theme: "Strawberry Parade", image: "https://static.wikia.nocookie.net/rhythmhive/images/2/2d/Strawberry_Parade_Wonwoo.png/revision/latest?cb=20240607024611", stats: { min: { vocal: 521, dance: 501, rap: 516, charm: 524 }, max: { vocal: 1003, dance: 965, rap: 993, charm: 1007 } } },
  { id: "seventeen-woozi-season", name: "Woozi", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "season", theme: "Strawberry Parade", image: "https://static.wikia.nocookie.net/rhythmhive/images/c/c1/Strawberry_Parade_Woozi.png/revision/latest?cb=20240607024612", stats: { min: { vocal: 513, dance: 503, rap: 509, charm: 504 }, max: { vocal: 987, dance: 966, rap: 979, charm: 969 } } },
  { id: "seventeen-dk-season", name: "DK", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "season", theme: "Strawberry Parade", image: "https://static.wikia.nocookie.net/rhythmhive/images/c/c4/Strawberry_Parade_DK.png/revision/latest?cb=20240607024557", stats: { min: { vocal: 513, dance: 526, rap: 505, charm: 524 }, max: { vocal: 986, dance: 1011, rap: 971, charm: 1007 } } },
  { id: "seventeen-mingyu-season", name: "Mingyu", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "season", theme: "Strawberry Parade", image: "https://static.wikia.nocookie.net/rhythmhive/images/6/64/Strawberry_Parade_Mingyu.png/revision/latest?cb=20240607024605", stats: { min: { vocal: 521, dance: 501, rap: 516, charm: 524 }, max: { vocal: 1003, dance: 965, rap: 993, charm: 1007 } } },
  { id: "seventeen-the8-season", name: "The8", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "season", theme: "Strawberry Parade", image: "https://static.wikia.nocookie.net/rhythmhive/images/4/47/Strawberry_Parade_The8.png/revision/latest?cb=20240607024609", stats: { min: { vocal: 508, dance: 503, rap: 503, charm: 524 }, max: { vocal: 977, dance: 967, rap: 966, charm: 1007 } } },
  { id: "seventeen-seungkwan-season", name: "Seungkwan", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "season", theme: "Strawberry Parade", image: "https://static.wikia.nocookie.net/rhythmhive/images/f/f2/Strawberry_Parade_Seungkwan.png/revision/latest?cb=20240607024607", stats: { min: { vocal: 506, dance: 525, rap: 519, charm: 517 }, max: { vocal: 974, dance: 1009, rap: 998, charm: 994 } } },
  { id: "seventeen-vernon-season", name: "Vernon", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "season", theme: "Strawberry Parade", image: "https://static.wikia.nocookie.net/rhythmhive/images/e/e7/Strawberry_Parade_Vernon.png/revision/latest?cb=20240607024610", stats: { min: { vocal: 516, dance: 510, rap: 501, charm: 517 }, max: { vocal: 992, dance: 981, rap: 965, charm: 994 } } },
  { id: "seventeen-dino-season", name: "Dino", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "season", theme: "Strawberry Parade", image: "https://static.wikia.nocookie.net/rhythmhive/images/4/49/Strawberry_Parade_Dino.png/revision/latest?cb=20240607024556", stats: { min: { vocal: 525, dance: 511, rap: 513, charm: 517 }, max: { vocal: 1009, dance: 983, rap: 987, charm: 994 } } },
  { id: "seventeen-scoups-album", name: "S.COUPS", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "album", theme: "HANA", image: "https://static.wikia.nocookie.net/rhythmhive/images/e/e4/Heng_garae_%E2%80%93_HANA_S.COUPS.png/revision/latest?cb=20231113232809", stats: { min: { vocal: 509, dance: 506, rap: 512, charm: 506 }, max: { vocal: 979, dance: 973, rap: 984, charm: 975 } } },
  { id: "seventeen-jeonghan-album", name: "Jeonghan", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "album", theme: "HANA", image: "https://static.wikia.nocookie.net/rhythmhive/images/6/66/Heng_garae_%E2%80%93_HANA_Jeonghan.png/revision/latest?cb=20231113232810", stats: { min: { vocal: 517, dance: 509, rap: 501, charm: 518 }, max: { vocal: 994, dance: 981, rap: 962, charm: 997 } } },
  { id: "seventeen-joshua-album", name: "Joshua", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "album", theme: "HANA", image: "https://static.wikia.nocookie.net/rhythmhive/images/b/b9/Heng_garae_%E2%80%93_HANA_Joshua.png/revision/latest?cb=20231113232808", stats: { min: { vocal: 511, dance: 522, rap: 518, charm: 515 }, max: { vocal: 982, dance: 1004, rap: 997, charm: 989 } } },
  { id: "seventeen-jun-album", name: "Jun", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "album", theme: "HANA", image: "https://static.wikia.nocookie.net/rhythmhive/images/1/1b/Heng_garae_%E2%80%93_HANA_Jun.png/revision/latest?cb=20231113232807", stats: { min: { vocal: 528, dance: 514, rap: 519, charm: 522 }, max: { vocal: 1016, dance: 988, rap: 998, charm: 1004 } } },
  { id: "seventeen-hoshi-album", name: "Hoshi", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "album", theme: "HANA", image: "https://static.wikia.nocookie.net/rhythmhive/images/6/6e/Heng_garae_%E2%80%93_HANA_Hoshi.png/revision/latest?cb=20231113232807", stats: { min: { vocal: 514, dance: 528, rap: 503, charm: 525 }, max: { vocal: 986, dance: 1017, rap: 969, charm: 1011 } } },
  { id: "seventeen-wonwoo-album", name: "Wonwoo", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "album", theme: "HANA", image: "https://static.wikia.nocookie.net/rhythmhive/images/b/b3/Heng_garae_%E2%80%93_HANA_Wonwoo.png/revision/latest?cb=20231113232806", stats: { min: { vocal: 503, dance: 518, rap: 499, charm: 503 }, max: { vocal: 968, dance: 997, rap: 960, charm: 968 } } },
  { id: "seventeen-woozi-album", name: "Woozi", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "album", theme: "HANA", image: "https://static.wikia.nocookie.net/rhythmhive/images/0/0a/Heng_garae_%E2%80%93_HANA_Woozi.png/revision/latest?cb=20231113232805", stats: { min: { vocal: 512, dance: 514, rap: 498, charm: 518 }, max: { vocal: 984, dance: 986, rap: 956, charm: 997 } } },
  { id: "seventeen-dk-album", name: "DK", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "album", theme: "HANA", image: "https://static.wikia.nocookie.net/rhythmhive/images/f/f6/Heng_garae_%E2%80%93_HANA_DK.png/revision/latest?cb=20231113232803", stats: { min: { vocal: 508, dance: 502, rap: 501, charm: 525 }, max: { vocal: 976, dance: 965, rap: 963, charm: 1011 } } },
  { id: "seventeen-mingyu-album", name: "Mingyu", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "album", theme: "HANA", image: "https://static.wikia.nocookie.net/rhythmhive/images/3/35/Heng_garae_%E2%80%93_HANA_Mingyu.png/revision/latest?cb=20231113232804", stats: { min: { vocal: 518, dance: 512, rap: 505, charm: 522 }, max: { vocal: 995, dance: 985, rap: 972, charm: 1004 } } },
  { id: "seventeen-the8-album", name: "The8", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "album", theme: "HANA", image: "https://static.wikia.nocookie.net/rhythmhive/images/9/99/Heng_garae_%E2%80%93_HANA_The8.png/revision/latest?cb=20231113232805", stats: { min: { vocal: 514, dance: 519, rap: 514, charm: 503 }, max: { vocal: 988, dance: 1000, rap: 986, charm: 968 } } },
  { id: "seventeen-seungkwan-album", name: "Seungkwan", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "album", theme: "HANA", image: "https://static.wikia.nocookie.net/rhythmhive/images/c/ce/Heng_garae_%E2%80%93_HANA_Seungkwan.png/revision/latest?cb=20231113232811", stats: { min: { vocal: 515, dance: 503, rap: 515, charm: 506 }, max: { vocal: 989, dance: 968, rap: 989, charm: 975 } } },
  { id: "seventeen-vernon-album", name: "Vernon", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "album", theme: "HANA", image: "https://static.wikia.nocookie.net/rhythmhive/images/a/aa/Heng_garae_%E2%80%93_HANA_Vernon.png/revision/latest?cb=20231113232802", stats: { min: { vocal: 527, dance: 512, rap: 514, charm: 518 }, max: { vocal: 1014, dance: 984, rap: 988, charm: 997 } } },
  { id: "seventeen-dino-album", name: "Dino", group: "SEVENTEEN", rarity: "UR", grade: "UR", type: "album", theme: "HANA", image: "https://static.wikia.nocookie.net/rhythmhive/images/8/83/Heng_garae_%E2%80%93_HANA_Dino.png/revision/latest?cb=20231113232801", stats: { min: { vocal: 518, dance: 515, rap: 511, charm: 525 }, max: { vocal: 997, dance: 989, rap: 982, charm: 1011 } } },
  { id: "lesserafim-sakura-live", name: "Sakura", group: "LE SSERAFIM", rarity: "UR", grade: "UR", type: "live", theme: "Full Moon", image: "https://static.wikia.nocookie.net/rhythmhive/images/0/00/Full_Moon_Sakura.png/revision/latest?cb=20240101015317", stats: { min: { vocal: 508, dance: 518, rap: 499, charm: 515 }, max: { vocal: 977, dance: 996, rap: 959, charm: 990 } } },
  { id: "lesserafim-chaewon-live", name: "Chaewon", group: "LE SSERAFIM", rarity: "UR", grade: "UR", type: "live", theme: "Full Moon", image: "https://static.wikia.nocookie.net/rhythmhive/images/2/20/Full_Moon_Kim_Chaewon.png/revision/latest?cb=20240101015317", stats: { min: { vocal: 504, dance: 499, rap: 497, charm: 515 }, max: { vocal: 970, dance: 960, rap: 955, charm: 990 } } },
  { id: "lesserafim-yunjin-live", name: "Yunjin", group: "LE SSERAFIM", rarity: "UR", grade: "UR", type: "live", theme: "Full Moon", image: "https://static.wikia.nocookie.net/rhythmhive/images/1/14/Full_Moon_Huh_Yunjin.png/revision/latest?cb=20240101015318", stats: { min: { vocal: 502, dance: 499, rap: 497, charm: 502 }, max: { vocal: 965, dance: 960, rap: 955, charm: 965 } } },
  { id: "lesserafim-kazuha-live", name: "Kazuha", group: "LE SSERAFIM", rarity: "UR", grade: "UR", type: "live", theme: "Full Moon", image: "https://static.wikia.nocookie.net/rhythmhive/images/8/86/Full_Moon_Kazuha.png/revision/latest?cb=20240101015319", stats: { min: { vocal: 505, dance: 501, rap: 500, charm: 517 }, max: { vocal: 971, dance: 963, rap: 962, charm: 995 } } },
  { id: "lesserafim-eunchae-live", name: "Eunchae", group: "LE SSERAFIM", rarity: "UR", grade: "UR", type: "live", theme: "Full Moon", image: "https://static.wikia.nocookie.net/rhythmhive/images/0/06/Full_Moon_Hong_Eunchae.png/revision/latest?cb=20240101015320", stats: { min: { vocal: 502, dance: 514, rap: 503, charm: 504 }, max: { vocal: 966, dance: 988, rap: 967, charm: 970 } } },
  { id: "lesserafim-sakura-special", name: "Sakura", group: "LE SSERAFIM", rarity: "XR", grade: "XR", type: "special", theme: "Pajama Party", image: "https://static.wikia.nocookie.net/rhythmhive/images/6/64/Pajama_Party_Sakura_XR.png/revision/latest?cb=20231003014330", stats: { min: { vocal: 476, dance: 476, rap: 484, charm: 478 }, max: { vocal: 915, dance: 915, rap: 930, charm: 920 } } },
  { id: "lesserafim-chaewon-special", name: "Chaewon", group: "LE SSERAFIM", rarity: "XR", grade: "XR", type: "special", theme: "Pajama Party", image: "https://static.wikia.nocookie.net/rhythmhive/images/6/64/Pajama_Party_Kim_Chaewon_XR.png/revision/latest?cb=20231003014328", stats: { min: { vocal: 486, dance: 472, rap: 467, charm: 473 }, max: { vocal: 934, dance: 907, rap: 898, charm: 910 } } },
  { id: "lesserafim-yunjin-special", name: "Yunjin", group: "LE SSERAFIM", rarity: "XR", grade: "XR", type: "special", theme: "Pajama Party", image: "https://static.wikia.nocookie.net/rhythmhive/images/3/3d/Pajama_Party_Huh_Yunjin_XR.png/revision/latest", stats: { min: { vocal: 477, dance: 479, rap: 470, charm: 484 }, max: { vocal: 917, dance: 921, rap: 904, charm: 930 } } },
  { id: "lesserafim-kazuha-special", name: "Kazuha", group: "LE SSERAFIM", rarity: "XR", grade: "XR", type: "special", theme: "Pajama Party", image: "https://static.wikia.nocookie.net/rhythmhive/images/2/2e/Pajama_Party_Kazuha_XR.png/revision/latest?cb=20231003014327", stats: { min: { vocal: 471, dance: 483, rap: 472, charm: 473 }, max: { vocal: 906, dance: 928, rap: 907, charm: 910 } } },
  { id: "lesserafim-eunchae-special", name: "Eunchae", group: "LE SSERAFIM", rarity: "XR", grade: "XR", type: "special", theme: "Pajama Party", image: "https://static.wikia.nocookie.net/rhythmhive/images/8/8c/Pajama_Party_Hong_Eunchae_XR.png/revision/latest?cb=20231003014323", stats: { min: { vocal: 477, dance: 479, rap: 470, charm: 484 }, max: { vocal: 917, dance: 921, rap: 904, charm: 930 } } },
  { id: "lesserafim-sakura-fx", name: "Sakura", group: "LE SSERAFIM", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/6/68/Candy_Serenade_Sakura.png/revision/latest?cb=20250319072506", stats: { min: { vocal: 472, dance: 486, rap: 479, charm: 478 }, max: { vocal: 908, dance: 934, rap: 921, charm: 920 } } },
  { id: "lesserafim-chaewon-fx", name: "Chaewon", group: "LE SSERAFIM", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/c/c2/Candy_Serenade_Kim_Chaewon.png/revision/latest?cb=20250319072508", stats: { min: { vocal: 471, dance: 468, rap: 465, charm: 471 }, max: { vocal: 905, dance: 900, rap: 895, charm: 905 } } },
  { id: "lesserafim-yunjin-fx", name: "Yunjin", group: "LE SSERAFIM", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/c/c6/Candy_Serenade_Huh_Yunjin.png/revision/latest?cb=20250319072507", stats: { min: { vocal: 473, dance: 474, rap: 480, charm: 481 }, max: { vocal: 909, dance: 912, rap: 923, charm: 925 } } },
  { id: "lesserafim-kazuha-fx", name: "Kazuha", group: "LE SSERAFIM", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/1/10/Candy_Serenade_Kazuha.png/revision/latest?cb=20250319072505", stats: { min: { vocal: 472, dance: 484, rap: 475, charm: 476 }, max: { vocal: 907, dance: 931, rap: 914, charm: 915 } } },
  { id: "lesserafim-eunchae-fx", name: "Eunchae", group: "LE SSERAFIM", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/2/2d/Candy_Serenade_Hong_Eunchae.png/revision/latest?cb=20250319072507", stats: { min: { vocal: 476, dance: 484, rap: 481, charm: 478 }, max: { vocal: 915, dance: 930, rap: 925, charm: 920 } } },
  { id: "lesserafim-sakura-season", name: "Sakura", group: "LE SSERAFIM", rarity: "UR", grade: "UR", type: "season", theme: "Blue Marine", image: "https://static.wikia.nocookie.net/rhythmhive/images/2/2a/Blue_Marine_Sakura.png/revision/latest?cb=20240101015322", stats: { min: { vocal: 525, dance: 513, rap: 517, charm: 520 }, max: { vocal: 1010, dance: 987, rap: 995, charm: 1000 } } },
  { id: "lesserafim-chaewon-season", name: "Chaewon", group: "LE SSERAFIM", rarity: "UR", grade: "UR", type: "season", theme: "Blue Marine", image: "https://static.wikia.nocookie.net/rhythmhive/images/d/da/Blue_Marine_Kim_Chaewon.png/revision/latest?cb=20240101015323", stats: { min: { vocal: 511, dance: 522, rap: 521, charm: 517 }, max: { vocal: 983, dance: 1004, rap: 1003, charm: 994 } } },
  { id: "lesserafim-yunjin-season", name: "Yunjin", group: "LE SSERAFIM", rarity: "UR", grade: "UR", type: "season", theme: "Blue Marine", image: "https://static.wikia.nocookie.net/rhythmhive/images/e/ef/Blue_Marine_Huh_Yunjin.png/revision/latest?cb=20240101015321", stats: { min: { vocal: 505, dance: 503, rap: 503, charm: 508 }, max: { vocal: 971, dance: 967, rap: 966, charm: 976 } } },
  { id: "lesserafim-kazuha-season", name: "Kazuha", group: "LE SSERAFIM", rarity: "UR", grade: "UR", type: "season", theme: "Blue Marine", image: "https://static.wikia.nocookie.net/rhythmhive/images/d/d4/Blue_Marine_Kazuha.png/revision/latest?cb=20240101015322", stats: { min: { vocal: 511, dance: 513, rap: 499, charm: 517 }, max: { vocal: 983, dance: 986, rap: 960, charm: 994 } } },
  { id: "lesserafim-eunchae-season", name: "Eunchae", group: "LE SSERAFIM", rarity: "UR", grade: "UR", type: "season", theme: "Blue Marine", image: "https://static.wikia.nocookie.net/rhythmhive/images/5/59/Blue_Marine_Hong_Eunchae.png/revision/latest?cb=20240101015320", stats: { min: { vocal: 513, dance: 526, rap: 505, charm: 524 }, max: { vocal: 986, dance: 1011, rap: 971, charm: 1007 } } },
  { id: "lesserafim-sakura-album", name: "Sakura", group: "LE SSERAFIM", rarity: "UR", grade: "UR", type: "album", theme: "UNFORGIVEN", image: "https://static.wikia.nocookie.net/rhythmhive/images/3/31/DEWY_SAGE_%E2%80%93_UNFORGIVEN_Sakura.png/revision/latest?cb=20240101015310", stats: { min: { vocal: 522, dance: 525, rap: 506, charm: 518 }, max: { vocal: 1004, dance: 1011, rap: 975, charm: 997 } } },
  { id: "lesserafim-chaewon-album", name: "Chaewon", group: "LE SSERAFIM", rarity: "UR", grade: "UR", type: "album", theme: "UNFORGIVEN", image: "https://static.wikia.nocookie.net/rhythmhive/images/d/d8/DEWY_SAGE_%E2%80%93_UNFORGIVEN_Kim_Chaewon.png/revision/latest?cb=20240101015310", stats: { min: { vocal: 508, dance: 502, rap: 501, charm: 525 }, max: { vocal: 976, dance: 965, rap: 963, charm: 1011 } } },
  { id: "lesserafim-yunjin-album", name: "Yunjin", group: "LE SSERAFIM", rarity: "UR", grade: "UR", type: "album", theme: "UNFORGIVEN", image: "https://static.wikia.nocookie.net/rhythmhive/images/8/81/DEWY_SAGE_-_UNFORGIVEN_Huh_Yunjin.png/revision/latest?cb=20231003014319", stats: { min: { vocal: 505, dance: 522, rap: 509, charm: 511 }, max: { vocal: 970, dance: 1005, rap: 981, charm: 982 } } },
  { id: "lesserafim-kazuha-album", name: "Kazuha", group: "LE SSERAFIM", rarity: "UR", grade: "UR", type: "album", theme: "UNFORGIVEN", image: "https://static.wikia.nocookie.net/rhythmhive/images/c/c6/DEWY_SAGE_%E2%80%93_UNFORGIVEN_Kazuha.png/revision/latest?cb=20240101015302", stats: { min: { vocal: 509, dance: 508, rap: 517, charm: 511 }, max: { vocal: 981, dance: 978, rap: 994, charm: 982 } } },
  { id: "lesserafim-eunchae-album", name: "Eunchae", group: "LE SSERAFIM", rarity: "UR", grade: "UR", type: "album", theme: "UNFORGIVEN", image: "https://static.wikia.nocookie.net/rhythmhive/images/5/5e/DEWY_SAGE_-_UNFORGIVEN_Hong_Eunchae.png/revision/latest?cb=20231003014319", stats: { min: { vocal: 506, dance: 527, rap: 521, charm: 518 }, max: { vocal: 973, dance: 1014, rap: 1001, charm: 997 } } },
  { id: "newjeans-minji-live", name: "Minji", group: "NewJeans", rarity: "UR", grade: "UR", type: "live", theme: "Attention", image: "https://static.wikia.nocookie.net/rhythmhive/images/e/ed/Attention_%E2%80%93_NewJeans_Minji.png/revision/latest?cb=20240101015434", stats: { min: { vocal: 507, dance: 515, rap: 512, charm: 510 }, max: { vocal: 975, dance: 990, rap: 985, charm: 980 } } },
  { id: "newjeans-hanni-live", name: "Hanni", group: "NewJeans", rarity: "UR", grade: "UR", type: "live", theme: "Attention", image: "https://static.wikia.nocookie.net/rhythmhive/images/3/31/Attention_%E2%80%93_NewJeans_Hanni.png/revision/latest?cb=20240101015435", stats: { min: { vocal: 514, dance: 514, rap: 497, charm: 507 }, max: { vocal: 988, dance: 989, rap: 956, charm: 975 } } },
  { id: "newjeans-danielle-live", name: "Danielle", group: "NewJeans", rarity: "UR", grade: "UR", type: "live", theme: "Attention", image: "https://static.wikia.nocookie.net/rhythmhive/images/3/35/Attention_%E2%80%93_NewJeans_Danielle.png/revision/latest?cb=20240101015436", stats: { min: { vocal: 514, dance: 514, rap: 497, charm: 507 }, max: { vocal: 988, dance: 989, rap: 956, charm: 975 } } },
  { id: "newjeans-haerin-live", name: "Haerin", group: "NewJeans", rarity: "UR", grade: "UR", type: "live", theme: "Attention", image: "https://static.wikia.nocookie.net/rhythmhive/images/0/00/Attention_%E2%80%93_NewJeans_Haerin.png/revision/latest?cb=20240101015436", stats: { min: { vocal: 506, dance: 505, rap: 511, charm: 507 }, max: { vocal: 974, dance: 972, rap: 983, charm: 975 } } },
  { id: "newjeans-hyein-live", name: "Hyein", group: "NewJeans", rarity: "UR", grade: "UR", type: "live", theme: "Attention", image: "https://static.wikia.nocookie.net/rhythmhive/images/a/ae/Attention_%E2%80%93_NewJeans_Hyein.png/revision/latest?cb=20240101015437", stats: { min: { vocal: 509, dance: 500, rap: 506, charm: 502 }, max: { vocal: 979, dance: 962, rap: 973, charm: 965 } } },
  { id: "newjeans-minji-special", name: "Minji", group: "NewJeans", rarity: "UR", grade: "UR", type: "special", theme: "OMG", image: "https://static.wikia.nocookie.net/rhythmhive/images/9/9c/OMG_Minji.png/revision/latest?cb=20231109082820", stats: { min: { vocal: 524, dance: 524, rap: 506, charm: 516 }, max: { vocal: 1007, dance: 1008, rap: 972, charm: 993 } } },
  { id: "newjeans-hanni-special", name: "Hanni", group: "NewJeans", rarity: "UR", grade: "UR", type: "special", theme: "OMG", image: "https://static.wikia.nocookie.net/rhythmhive/images/6/60/Ditto_%E2%80%93_OMG_Hanni.png/revision/latest?cb=20240101015432", stats: { min: { vocal: 526, dance: 510, rap: 525, charm: 511 }, max: { vocal: 1012, dance: 981, rap: 1010, charm: 982 } } },
  { id: "newjeans-danielle-special", name: "Danielle", group: "NewJeans", rarity: "UR", grade: "UR", type: "special", theme: "OMG", image: "https://static.wikia.nocookie.net/rhythmhive/images/5/5c/Ditto_%E2%80%93_OMG_Danielle.png/revision/latest?cb=20240101015432", stats: { min: { vocal: 511, dance: 508, rap: 505, charm: 511 }, max: { vocal: 982, dance: 976, rap: 971, charm: 982 } } },
  { id: "newjeans-haerin-special", name: "Haerin", group: "NewJeans", rarity: "UR", grade: "UR", type: "special", theme: "OMG", image: "https://static.wikia.nocookie.net/rhythmhive/images/c/c6/OMG_Haerin.png/revision/latest?cb=20231109082818", stats: { min: { vocal: 512, dance: 525, rap: 515, charm: 516 }, max: { vocal: 984, dance: 1010, rap: 992, charm: 993 } } },
  { id: "newjeans-hyein-special", name: "Hyein", group: "NewJeans", rarity: "UR", grade: "UR", type: "special", theme: "OMG", image: "https://static.wikia.nocookie.net/rhythmhive/images/6/6f/OMG_Hyein_R.png/revision/latest?cb=20240714014252", stats: { min: { vocal: 518, dance: 529, rap: 511, charm: 527 }, max: { vocal: 996, dance: 1019, rap: 983, charm: 1014 } } },
  { id: "newjeans-minji-fx", name: "Minji", group: "NewJeans", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/1/1f/Candy_Serenade_Minji.png/revision/latest?cb=20250301044457", stats: { min: { vocal: 482, dance: 482, rap: 483, charm: 473 }, max: { vocal: 927, dance: 926, rap: 929, charm: 910 } } },
  { id: "newjeans-hanni-fx", name: "Hanni", group: "NewJeans", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/1/15/Candy_Serenade_Hanni.png/revision/latest?cb=20250301044456", stats: { min: { vocal: 479, dance: 474, rap: 486, charm: 478 }, max: { vocal: 922, dance: 911, rap: 934, charm: 920 } } },
  { id: "newjeans-danielle-fx", name: "Danielle", group: "NewJeans", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/d/d6/Candy_Serenade_Danielle.png/revision/latest?cb=20250301044456", stats: { min: { vocal: 473, dance: 476, rap: 484, charm: 484 }, max: { vocal: 910, dance: 915, rap: 930, charm: 930 } } },
  { id: "newjeans-haerin-fx", name: "Haerin", group: "NewJeans", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/3/3b/Candy_Serenade_Haerin.png/revision/latest?cb=20250301044455", stats: { min: { vocal: 486, dance: 473, rap: 471, charm: 476 }, max: { vocal: 935, dance: 910, rap: 905, charm: 915 } } },
  { id: "newjeans-hyein-fx", name: "Hyein", group: "NewJeans", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/6/68/Candy_Serenade_Hyein.png/revision/latest?cb=20250301044454", stats: { min: { vocal: 475, dance: 480, rap: 474, charm: 473 }, max: { vocal: 913, dance: 924, rap: 911, charm: 910 } } },
  { id: "newjeans-minji-season", name: "Minji", group: "NewJeans", rarity: "UR", grade: "UR", type: "season", theme: "Blue Frost", image: "https://static.wikia.nocookie.net/rhythmhive/images/e/e9/Blue_Frost_Wonder_Minji.png/revision/latest?cb=20241216050525", stats: { min: { vocal: 421, dance: 424, rap: 411, charm: 419 }, max: { vocal: 810, dance: 815, rap: 790, charm: 805 } } },
  { id: "newjeans-hanni-season", name: "Hanni", group: "NewJeans", rarity: "UR", grade: "UR", type: "season", theme: "Blue Frost", image: "https://static.wikia.nocookie.net/rhythmhive/images/6/6b/Blue_Frost_Wonder_Hanni.png/revision/latest?cb=20241216050524", stats: { min: { vocal: 420, dance: 419, rap: 421, charm: 411 }, max: { vocal: 807, dance: 806, rap: 809, charm: 790 } } },
  { id: "newjeans-danielle-season", name: "Danielle", group: "NewJeans", rarity: "UR", grade: "UR", type: "season", theme: "Blue Frost", image: "https://static.wikia.nocookie.net/rhythmhive/images/0/05/Blue_Frost_Wonder_Danielle.png/revision/latest?cb=20241216050523", stats: { min: { vocal: 410, dance: 423, rap: 417, charm: 416 }, max: { vocal: 788, dance: 814, rap: 801, charm: 800 } } },
  { id: "newjeans-haerin-season", name: "Haerin", group: "NewJeans", rarity: "UR", grade: "UR", type: "season", theme: "Blue Frost", image: "https://static.wikia.nocookie.net/rhythmhive/images/c/c0/Blue_Frost_Wonder_Haerin.png/revision/latest?cb=20241216050522", stats: { min: { vocal: 413, dance: 420, rap: 415, charm: 413 }, max: { vocal: 794, dance: 807, rap: 798, charm: 795 } } },
  { id: "newjeans-hyein-season", name: "Hyein", group: "NewJeans", rarity: "UR", grade: "UR", type: "season", theme: "Blue Frost", image: "https://static.wikia.nocookie.net/rhythmhive/images/f/fd/Blue_Frost_Wonder_Hyein.png/revision/latest?cb=20241216050521", stats: { min: { vocal: 409, dance: 422, rap: 413, charm: 413 }, max: { vocal: 787, dance: 811, rap: 794, charm: 795 } } },
  { id: "newjeans-minji-album", name: "Minji", group: "NewJeans", rarity: "UR", grade: "UR", type: "album", theme: "Get Up", image: "https://static.wikia.nocookie.net/rhythmhive/images/9/9a/Super_Shy_%E2%80%93_Get_Up_Minji.png/revision/latest?cb=20240101021521", stats: { min: { vocal: 503, dance: 502, rap: 501, charm: 506 }, max: { vocal: 969, dance: 965, rap: 963, charm: 975 } } },
  { id: "newjeans-hanni-album", name: "Hanni", group: "NewJeans", rarity: "UR", grade: "UR", type: "album", theme: "Get Up", image: "https://static.wikia.nocookie.net/rhythmhive/images/5/5b/Super_Shy_%E2%80%93_Get_Up_Hanni.png/revision/latest?cb=20240101021536", stats: { min: { vocal: 514, dance: 501, rap: 509, charm: 503 }, max: { vocal: 988, dance: 963, rap: 979, charm: 968 } } },
  { id: "newjeans-danielle-album", name: "Danielle", group: "NewJeans", rarity: "UR", grade: "UR", type: "album", theme: "Get Up", image: "https://static.wikia.nocookie.net/rhythmhive/images/3/3b/Super_Shy_%E2%80%93_Get_Up_Danielle.png/revision/latest?cb=20240101021549", stats: { min: { vocal: 509, dance: 508, rap: 517, charm: 511 }, max: { vocal: 981, dance: 978, rap: 994, charm: 982 } } },
  { id: "newjeans-haerin-album", name: "Haerin", group: "NewJeans", rarity: "UR", grade: "UR", type: "album", theme: "Get Up", image: "https://static.wikia.nocookie.net/rhythmhive/images/7/70/Super_Shy_%E2%80%93_Get_Up_Haerin.png/revision/latest?cb=20240101021605", stats: { min: { vocal: 511, dance: 511, rap: 522, charm: 515 }, max: { vocal: 982, dance: 982, rap: 1004, charm: 989 } } },
  { id: "newjeans-hyein-album", name: "Hyein", group: "NewJeans", rarity: "UR", grade: "UR", type: "album", theme: "Get Up", image: "https://static.wikia.nocookie.net/rhythmhive/images/4/44/Super_Shy_%E2%80%93_Get_Up_Hyein.png/revision/latest?cb=20240101021622", stats: { min: { vocal: 519, dance: 517, rap: 517, charm: 503 }, max: { vocal: 998, dance: 994, rap: 992, charm: 968 } } },
  { id: "boynextdoor-sungho-live", name: "Sungho", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "live", theme: "HOW?", image: "https://static.wikia.nocookie.net/rhythmhive/images/a/a3/Earth_ver._%E2%80%93_HOW%3F_Sungho.png/revision/latest?cb=20240604235255", stats: { min: { vocal: 506, dance: 513, rap: 509, charm: 507 }, max: { vocal: 974, dance: 987, rap: 978, charm: 975 } } },
  { id: "boynextdoor-riwoo-live", name: "Riwoo", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "live", theme: "HOW?", image: "https://static.wikia.nocookie.net/rhythmhive/images/4/4c/Earth_ver._%E2%80%93_HOW%3F_Riwoo.png/revision/latest?cb=20240604235302", stats: { min: { vocal: 512, dance: 508, rap: 503, charm: 515 }, max: { vocal: 984, dance: 977, rap: 968, charm: 990 } } },
  { id: "boynextdoor-jaehyun-live", name: "Jaehyun", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "live", theme: "HOW?", image: "https://static.wikia.nocookie.net/rhythmhive/images/0/03/Earth_ver._%E2%80%93_HOW%3F_Jaehyun.png/revision/latest?cb=20240604235307", stats: { min: { vocal: 504, dance: 507, rap: 515, charm: 515 }, max: { vocal: 970, dance: 975, rap: 990, charm: 990 } } },
  { id: "boynextdoor-taesan-live", name: "Taesan", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "live", theme: "HOW?", image: "https://static.wikia.nocookie.net/rhythmhive/images/e/e4/Earth_ver._%E2%80%93_HOW%3F_Taesan.png/revision/latest?cb=20240604235348", stats: { min: { vocal: 503, dance: 504, rap: 508, charm: 510 }, max: { vocal: 968, dance: 969, rap: 976, charm: 980 } } },
  { id: "boynextdoor-leehan-live", name: "Leehan", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "live", theme: "HOW?", image: "https://static.wikia.nocookie.net/rhythmhive/images/b/bd/Earth_ver._%E2%80%93_HOW%3F_Leehan.png/revision/latest?cb=20240604235416", stats: { min: { vocal: 509, dance: 512, rap: 505, charm: 517 }, max: { vocal: 978, dance: 984, rap: 971, charm: 995 } } },
  { id: "boynextdoor-woonhak-live", name: "Woonhak", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "live", theme: "HOW?", image: "https://static.wikia.nocookie.net/rhythmhive/images/b/bd/Earth_ver._%E2%80%93_HOW%3F_Woonhak.png/revision/latest?cb=20240604235326", stats: { min: { vocal: 509, dance: 500, rap: 506, charm: 502 }, max: { vocal: 979, dance: 962, rap: 973, charm: 965 } } },
  { id: "boynextdoor-sungho-special", name: "Sungho", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "special", theme: "Night Market", image: "https://static.wikia.nocookie.net/rhythmhive/images/5/55/Night_Market_Sungho.png/revision/latest?cb=20240617160003", stats: { min: { vocal: 527, dance: 513, rap: 511, charm: 516 }, max: { vocal: 1014, dance: 987, rap: 982, charm: 993 } } },
  { id: "boynextdoor-riwoo-special", name: "Riwoo", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "special", theme: "Night Market", image: "https://static.wikia.nocookie.net/rhythmhive/images/1/15/Night_Market_Riwoo.png/revision/latest?cb=20240617160030", stats: { min: { vocal: 515, dance: 514, rap: 521, charm: 516 }, max: { vocal: 992, dance: 990, rap: 1001, charm: 993 } } },
  { id: "boynextdoor-jaehyun-special", name: "Jaehyun", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "special", theme: "Night Market", image: "https://static.wikia.nocookie.net/rhythmhive/images/e/e6/Night_Market_Jaehyun.png/revision/latest?cb=20240617160044", stats: { min: { vocal: 513, dance: 514, rap: 521, charm: 522 }, max: { vocal: 986, dance: 990, rap: 1001, charm: 1004 } } },
  { id: "boynextdoor-taesan-special", name: "Taesan", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "special", theme: "Night Market", image: "https://static.wikia.nocookie.net/rhythmhive/images/5/5e/Night_Market_Taesan.png/revision/latest?cb=20240617160105", stats: { min: { vocal: 515, dance: 521, rap: 514, charm: 513 }, max: { vocal: 991, dance: 1003, rap: 988, charm: 987 } } },
  { id: "boynextdoor-leehan-special", name: "Leehan", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "special", theme: "Night Market", image: "https://static.wikia.nocookie.net/rhythmhive/images/a/ae/Night_Market_Leehan.png/revision/latest?cb=20240617160119", stats: { min: { vocal: 527, dance: 512, rap: 507, charm: 513 }, max: { vocal: 1013, dance: 984, rap: 974, charm: 987 } } },
  { id: "boynextdoor-woonhak-special", name: "Woonhak", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "special", theme: "Night Market", image: "https://static.wikia.nocookie.net/rhythmhive/images/0/0b/Night_Market_Woonhak.png/revision/latest?cb=20240617160133", stats: { min: { vocal: 516, dance: 526, rap: 526, charm: 522 }, max: { vocal: 994, dance: 1012, rap: 1011, charm: 1004 } } },
  { id: "boynextdoor-sungho-fx", name: "Sungho", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/1/1d/Candy_Serenade_Sungho.png/revision/latest?cb=20250319072919", stats: { min: { vocal: 483, dance: 483, rap: 466, charm: 476 }, max: { vocal: 928, dance: 929, rap: 896, charm: 915 } } },
  { id: "boynextdoor-riwoo-fx", name: "Riwoo", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/0/09/Candy_Serenade_Riwoo.png/revision/latest?cb=20250319072918", stats: { min: { vocal: 483, dance: 483, rap: 466, charm: 476 }, max: { vocal: 928, dance: 929, rap: 896, charm: 915 } } },
  { id: "boynextdoor-jaehyun-fx", name: "Jaehyun", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/a/aa/Candy_Serenade_Jaehyun.png/revision/latest?cb=20250319072917", stats: { min: { vocal: 476, dance: 485, rap: 485, charm: 481 }, max: { vocal: 916, dance: 933, rap: 932, charm: 925 } } },
  { id: "boynextdoor-taesan-fx", name: "Taesan", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/2/2a/Candy_Serenade_Taesan.png/revision/latest?cb=20250319072916", stats: { min: { vocal: 472, dance: 484, rap: 475, charm: 476 }, max: { vocal: 907, dance: 931, rap: 914, charm: 915 } } },
  { id: "boynextdoor-leehan-fx", name: "Leehan", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/8/83/Candy_Serenade_Leehan.png/revision/latest?cb=20250319072916", stats: { min: { vocal: 484, dance: 488, rap: 477, charm: 484 }, max: { vocal: 931, dance: 938, rap: 917, charm: 930 } } },
  { id: "boynextdoor-woonhak-fx", name: "Woonhak", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/d/de/Candy_Serenade_Woonhak.png/revision/latest?cb=20250319072915", stats: { min: { vocal: 485, dance: 470, rap: 484, charm: 471 }, max: { vocal: 933, dance: 904, rap: 931, charm: 905 } } },
  { id: "boynextdoor-sungho-season", name: "Sungho", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "season", theme: "Blue Frost", image: "https://static.wikia.nocookie.net/rhythmhive/images/1/17/Blue_Frost_Wonder_Sungho.png/revision/latest?cb=20241216050535", stats: { min: { vocal: 411, dance: 415, rap: 404, charm: 424 }, max: { vocal: 791, dance: 798, rap: 777, charm: 815 } } },
  { id: "boynextdoor-riwoo-season", name: "Riwoo", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "season", theme: "Blue Frost", image: "https://static.wikia.nocookie.net/rhythmhive/images/e/e0/Blue_Frost_Wonder_Riwoo.png/revision/latest?cb=20241216050534", stats: { min: { vocal: 423, dance: 408, rap: 422, charm: 408 }, max: { vocal: 813, dance: 784, rap: 811, charm: 785 } } },
  { id: "boynextdoor-jaehyun-season", name: "Jaehyun", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "season", theme: "Blue Frost", image: "https://static.wikia.nocookie.net/rhythmhive/images/8/87/Blue_Frost_Wonder_Jaehyun.png/revision/latest?cb=20241216050533", stats: { min: { vocal: 409, dance: 409, rap: 410, charm: 413 }, max: { vocal: 787, dance: 786, rap: 789, charm: 795 } } },
  { id: "boynextdoor-taesan-season", name: "Taesan", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "season", theme: "Blue Frost", image: "https://static.wikia.nocookie.net/rhythmhive/images/3/32/Blue_Frost_Wonder_Taesan.png/revision/latest?cb=20241216050532", stats: { min: { vocal: 417, dance: 410, rap: 420, charm: 413 }, max: { vocal: 801, dance: 788, rap: 807, charm: 795 } } },
  { id: "boynextdoor-leehan-season", name: "Leehan", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "season", theme: "Blue Frost", image: "https://static.wikia.nocookie.net/rhythmhive/images/e/eb/Blue_Frost_Wonder_Leehan.png/revision/latest?cb=20241216050531", stats: { min: { vocal: 413, dance: 420, rap: 415, charm: 413 }, max: { vocal: 794, dance: 807, rap: 798, charm: 795 } } },
  { id: "boynextdoor-woonhak-season", name: "Woonhak", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "season", theme: "Blue Frost", image: "https://static.wikia.nocookie.net/rhythmhive/images/e/ea/Blue_Frost_Wonder_Woonhak.png/revision/latest?cb=20241216050530", stats: { min: { vocal: 415, dance: 420, rap: 415, charm: 408 }, max: { vocal: 799, dance: 807, rap: 798, charm: 785 } } },
  { id: "boynextdoor-sungho-album", name: "Sungho", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "album", theme: "WHO!", image: "https://static.wikia.nocookie.net/rhythmhive/images/8/8f/Crunch_ver._%E2%80%93_WHO%21_Sungho.png/revision/latest?cb=20240321131333", stats: { min: { vocal: 525, dance: 506, rap: 503, charm: 511 }, max: { vocal: 1011, dance: 975, rap: 968, charm: 982 } } },
  { id: "boynextdoor-riwoo-album", name: "Riwoo", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "album", theme: "WHO!", image: "https://static.wikia.nocookie.net/rhythmhive/images/d/d8/Crunch_ver._%E2%80%93_WHO%21_Riwoo.png/revision/latest?cb=20240321131332", stats: { min: { vocal: 503, dance: 499, rap: 496, charm: 503 }, max: { vocal: 968, dance: 960, rap: 953, charm: 968 } } },
  { id: "boynextdoor-jaehyun-album", name: "Jaehyun", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "album", theme: "WHO!", image: "https://static.wikia.nocookie.net/rhythmhive/images/9/93/Crunch_ver._%E2%80%93_WHO%21_Jaehyun.png/revision/latest?cb=20240321131331", stats: { min: { vocal: 518, dance: 515, rap: 511, charm: 525 }, max: { vocal: 997, dance: 989, rap: 982, charm: 1011 } } },
  { id: "boynextdoor-taesan-album", name: "Taesan", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "album", theme: "WHO!", image: "https://static.wikia.nocookie.net/rhythmhive/images/a/a4/Crunch_ver._%E2%80%93_WHO%21_Taesan.png/revision/latest?cb=20240321131330", stats: { min: { vocal: 527, dance: 512, rap: 514, charm: 518 }, max: { vocal: 1014, dance: 984, rap: 988, charm: 997 } } },
  { id: "boynextdoor-leehan-album", name: "Leehan", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "album", theme: "WHO!", image: "https://static.wikia.nocookie.net/rhythmhive/images/8/8b/Crunch_ver._%E2%80%93_WHO%21_Leehan.png/revision/latest?cb=20240321131330", stats: { min: { vocal: 514, dance: 528, rap: 503, charm: 525 }, max: { vocal: 986, dance: 1017, rap: 969, charm: 1011 } } },
  { id: "boynextdoor-woonhak-album", name: "Woonhak", group: "BOYNEXTDOOR", rarity: "UR", grade: "UR", type: "album", theme: "WHO!", image: "https://static.wikia.nocookie.net/rhythmhive/images/7/7d/Crunch_ver._%E2%80%93_WHO%21_Woonhak.png/revision/latest?cb=20240321131329", stats: { min: { vocal: 508, dance: 502, rap: 501, charm: 525 }, max: { vocal: 976, dance: 965, rap: 963, charm: 1011 } } },
  { id: "tws-shinyu-live", name: "Shinyu", group: "TWS", rarity: "UR", grade: "UR", type: "live", theme: "LIVE THEME", image: "assets/tws/live-shinyu.jpg", stats: { min: { vocal: 506, dance: 512, rap: 505, charm: 504 }, max: { vocal: 973, dance: 984, rap: 971, charm: 970 } } },
  { id: "tws-dohoon-live", name: "Dohoon", group: "TWS", rarity: "UR", grade: "UR", type: "live", theme: "LIVE THEME", image: "assets/tws/live-dohoon.jpg", stats: { min: { vocal: 505, dance: 501, rap: 500, charm: 517 }, max: { vocal: 971, dance: 963, rap: 962, charm: 995 } } },
  { id: "tws-youngjae-live", name: "Youngjae", group: "TWS", rarity: "UR", grade: "UR", type: "live", theme: "LIVE THEME", image: "assets/tws/live-youngjae.jpg", stats: { min: { vocal: 505, dance: 502, rap: 504, charm: 502 }, max: { vocal: 972, dance: 966, rap: 969, charm: 965 } } },
  { id: "tws-hanjin-live", name: "Hanjin", group: "TWS", rarity: "UR", grade: "UR", type: "live", theme: "LIVE THEME", image: "assets/tws/live-hanjin.jpg", stats: { min: { vocal: 512, dance: 510, rap: 507, charm: 517 }, max: { vocal: 985, dance: 980, rap: 975, charm: 995 } } },
  { id: "tws-jihoon-live", name: "Jihoon", group: "TWS", rarity: "UR", grade: "UR", type: "live", theme: "LIVE THEME", image: "assets/tws/live-jihoon.jpg", stats: { min: { vocal: 517, dance: 503, rap: 498, charm: 504 }, max: { vocal: 994, dance: 967, rap: 958, charm: 970 } } },
  { id: "tws-kyungmin-live", name: "Kyungmin", group: "TWS", rarity: "UR", grade: "UR", type: "live", theme: "LIVE THEME", image: "assets/tws/live-kyungmin.jpg", stats: { min: { vocal: 503, dance: 517, rap: 510, charm: 510 }, max: { vocal: 968, dance: 994, rap: 981, charm: 980 } } },
  { id: "tws-shinyu-special", name: "Shinyu", group: "TWS", rarity: "UR", grade: "UR", type: "special", theme: "SPECIAL THEME", image: "assets/tws/special-shinyu.jpg", stats: { min: { vocal: 496, dance: 502, rap: 495, charm: 494 }, max: { vocal: 958, dance: 969, rap: 956, charm: 955 } } },
  { id: "tws-dohoon-special", name: "Dohoon", group: "TWS", rarity: "UR", grade: "UR", type: "special", theme: "SPECIAL THEME", image: "assets/tws/special-dohoon.jpg", stats: { min: { vocal: 495, dance: 491, rap: 490, charm: 507 }, max: { vocal: 956, dance: 948, rap: 947, charm: 980 } } },
  { id: "tws-youngjae-special", name: "Youngjae", group: "TWS", rarity: "UR", grade: "UR", type: "special", theme: "SPECIAL THEME", image: "assets/tws/special-youngjae.jpg", stats: { min: { vocal: 495, dance: 492, rap: 494, charm: 492 }, max: { vocal: 957, dance: 951, rap: 954, charm: 950 } } },
  { id: "tws-hanjin-special", name: "Hanjin", group: "TWS", rarity: "UR", grade: "UR", type: "special", theme: "SPECIAL THEME", image: "assets/tws/special-hanjin.jpg", stats: { min: { vocal: 502, dance: 500, rap: 497, charm: 507 }, max: { vocal: 970, dance: 965, rap: 960, charm: 980 } } },
  { id: "tws-jihoon-special", name: "Jihoon", group: "TWS", rarity: "UR", grade: "UR", type: "special", theme: "SPECIAL THEME", image: "assets/tws/special-jihoon.jpg", stats: { min: { vocal: 507, dance: 493, rap: 488, charm: 494 }, max: { vocal: 979, dance: 952, rap: 943, charm: 955 } } },
  { id: "tws-kyungmin-special", name: "Kyungmin", group: "TWS", rarity: "UR", grade: "UR", type: "special", theme: "SPECIAL THEME", image: "assets/tws/special-kyungmin.jpg", stats: { min: { vocal: 493, dance: 507, rap: 500, charm: 500 }, max: { vocal: 953, dance: 979, rap: 966, charm: 965 } } },
  { id: "tws-shinyu-fx", name: "Shinyu", group: "TWS", rarity: "UR", grade: "UR", type: "fx", theme: "FX THEME", image: "assets/tws/fx-shinyu.jpg", stats: { min: { vocal: 491, dance: 497, rap: 490, charm: 489 }, max: { vocal: 948, dance: 959, rap: 946, charm: 945 } } },
  { id: "tws-dohoon-fx", name: "Dohoon", group: "TWS", rarity: "UR", grade: "UR", type: "fx", theme: "FX THEME", image: "assets/tws/fx-dohoon.jpg", stats: { min: { vocal: 490, dance: 486, rap: 485, charm: 502 }, max: { vocal: 946, dance: 938, rap: 937, charm: 970 } } },
  { id: "tws-youngjae-fx", name: "Youngjae", group: "TWS", rarity: "UR", grade: "UR", type: "fx", theme: "FX THEME", image: "assets/tws/fx-youngjae.jpg", stats: { min: { vocal: 490, dance: 487, rap: 489, charm: 487 }, max: { vocal: 947, dance: 941, rap: 944, charm: 940 } } },
  { id: "tws-hanjin-fx", name: "Hanjin", group: "TWS", rarity: "UR", grade: "UR", type: "fx", theme: "FX THEME", image: "assets/tws/fx-hanjin.jpg", stats: { min: { vocal: 497, dance: 495, rap: 492, charm: 502 }, max: { vocal: 960, dance: 955, rap: 950, charm: 970 } } },
  { id: "tws-jihoon-fx", name: "Jihoon", group: "TWS", rarity: "UR", grade: "UR", type: "fx", theme: "FX THEME", image: "assets/tws/fx-jihoon.jpg", stats: { min: { vocal: 502, dance: 488, rap: 483, charm: 489 }, max: { vocal: 969, dance: 942, rap: 933, charm: 945 } } },
  { id: "tws-kyungmin-fx", name: "Kyungmin", group: "TWS", rarity: "UR", grade: "UR", type: "fx", theme: "FX THEME", image: "assets/tws/fx-kyungmin.jpg", stats: { min: { vocal: 488, dance: 502, rap: 495, charm: 495 }, max: { vocal: 943, dance: 969, rap: 956, charm: 955 } } },
  { id: "tws-shinyu-season", name: "Shinyu", group: "TWS", rarity: "UR", grade: "UR", type: "season", theme: "SEASON THEME", image: "assets/tws/fx-shinyu.jpg", stats: { min: { vocal: 491, dance: 497, rap: 490, charm: 489 }, max: { vocal: 948, dance: 959, rap: 946, charm: 945 } } },
  { id: "tws-dohoon-season", name: "Dohoon", group: "TWS", rarity: "UR", grade: "UR", type: "season", theme: "SEASON THEME", image: "assets/tws/fx-dohoon.jpg", stats: { min: { vocal: 490, dance: 486, rap: 485, charm: 502 }, max: { vocal: 946, dance: 938, rap: 937, charm: 970 } } },
  { id: "tws-youngjae-season", name: "Youngjae", group: "TWS", rarity: "UR", grade: "UR", type: "season", theme: "SEASON THEME", image: "assets/tws/fx-youngjae.jpg", stats: { min: { vocal: 490, dance: 487, rap: 489, charm: 487 }, max: { vocal: 947, dance: 941, rap: 944, charm: 940 } } },
  { id: "tws-hanjin-season", name: "Hanjin", group: "TWS", rarity: "UR", grade: "UR", type: "season", theme: "SEASON THEME", image: "assets/tws/fx-hanjin.jpg", stats: { min: { vocal: 497, dance: 495, rap: 492, charm: 502 }, max: { vocal: 960, dance: 955, rap: 950, charm: 970 } } },
  { id: "tws-jihoon-season", name: "Jihoon", group: "TWS", rarity: "UR", grade: "UR", type: "season", theme: "SEASON THEME", image: "assets/tws/fx-jihoon.jpg", stats: { min: { vocal: 502, dance: 488, rap: 483, charm: 489 }, max: { vocal: 969, dance: 942, rap: 933, charm: 945 } } },
  { id: "tws-kyungmin-season", name: "Kyungmin", group: "TWS", rarity: "UR", grade: "UR", type: "season", theme: "SEASON THEME", image: "assets/tws/fx-kyungmin.jpg", stats: { min: { vocal: 488, dance: 502, rap: 495, charm: 495 }, max: { vocal: 943, dance: 969, rap: 956, charm: 955 } } },
  { id: "tws-shinyu-album", name: "Shinyu", group: "TWS", rarity: "UR", grade: "UR", type: "album", theme: "ALBUM THEME", image: "assets/tws/fx-shinyu.jpg", stats: { min: { vocal: 491, dance: 497, rap: 490, charm: 489 }, max: { vocal: 948, dance: 959, rap: 946, charm: 945 } } },
  { id: "tws-dohoon-album", name: "Dohoon", group: "TWS", rarity: "UR", grade: "UR", type: "album", theme: "ALBUM THEME", image: "assets/tws/fx-dohoon.jpg", stats: { min: { vocal: 490, dance: 486, rap: 485, charm: 502 }, max: { vocal: 946, dance: 938, rap: 937, charm: 970 } } },
  { id: "tws-youngjae-album", name: "Youngjae", group: "TWS", rarity: "UR", grade: "UR", type: "album", theme: "ALBUM THEME", image: "assets/tws/fx-youngjae.jpg", stats: { min: { vocal: 490, dance: 487, rap: 489, charm: 487 }, max: { vocal: 947, dance: 941, rap: 944, charm: 940 } } },
  { id: "tws-hanjin-album", name: "Hanjin", group: "TWS", rarity: "UR", grade: "UR", type: "album", theme: "ALBUM THEME", image: "assets/tws/fx-hanjin.jpg", stats: { min: { vocal: 497, dance: 495, rap: 492, charm: 502 }, max: { vocal: 960, dance: 955, rap: 950, charm: 970 } } },
  { id: "tws-jihoon-album", name: "Jihoon", group: "TWS", rarity: "UR", grade: "UR", type: "album", theme: "ALBUM THEME", image: "assets/tws/fx-jihoon.jpg", stats: { min: { vocal: 502, dance: 488, rap: 483, charm: 489 }, max: { vocal: 969, dance: 942, rap: 933, charm: 945 } } },
  { id: "tws-kyungmin-album", name: "Kyungmin", group: "TWS", rarity: "UR", grade: "UR", type: "album", theme: "ALBUM THEME", image: "assets/tws/fx-kyungmin.jpg", stats: { min: { vocal: 488, dance: 502, rap: 495, charm: 495 }, max: { vocal: 943, dance: 969, rap: 956, charm: 955 } } },
  { id: "illit-yunah-live", name: "Yunah", group: "ILLIT", rarity: "UR", grade: "UR", type: "live", theme: "Magnetic", image: "https://static.wikia.nocookie.net/rhythmhive/images/9/98/I%27LL_%28SHOW%29_IT_%E2%80%93_Magnetic_Yunah.png/revision/latest?cb=20250220095003", stats: { min: { vocal: 503, dance: 515, rap: 506, charm: 507 }, max: { vocal: 967, dance: 991, rap: 974, charm: 975 } } },
  { id: "illit-minju-live", name: "Minju", group: "ILLIT", rarity: "UR", grade: "UR", type: "live", theme: "Magnetic", image: "https://static.wikia.nocookie.net/rhythmhive/images/a/ad/I%27LL_%28SHOW%29_IT_%E2%80%93_Magnetic_Minju.png/revision/latest?cb=20250220095000", stats: { min: { vocal: 516, dance: 500, rap: 512, charm: 517 }, max: { vocal: 992, dance: 961, rap: 984, charm: 995 } } },
  { id: "illit-moka-live", name: "Moka", group: "ILLIT", rarity: "UR", grade: "UR", type: "live", theme: "Magnetic", image: "https://static.wikia.nocookie.net/rhythmhive/images/5/5a/I%27LL_%28SHOW%29_IT_%E2%80%93_Magnetic_Moka.png/revision/latest?cb=20250220094958", stats: { min: { vocal: 517, dance: 504, rap: 502, charm: 507 }, max: { vocal: 995, dance: 970, rap: 965, charm: 975 } } },
  { id: "illit-wonhee-live", name: "Wonhee", group: "ILLIT", rarity: "UR", grade: "UR", type: "live", theme: "Magnetic", image: "https://static.wikia.nocookie.net/rhythmhive/images/6/6c/I%27LL_%28SHOW%29_IT_%E2%80%93_Magnetic_Wonhee.png/revision/latest?cb=20250220094956", stats: { min: { vocal: 513, dance: 513, rap: 514, charm: 504 }, max: { vocal: 987, dance: 986, rap: 989, charm: 970 } } },
  { id: "illit-iroha-live", name: "Iroha", group: "ILLIT", rarity: "UR", grade: "UR", type: "live", theme: "Magnetic", image: "https://static.wikia.nocookie.net/rhythmhive/images/6/6d/I%27LL_%28SHOW%29_IT_%E2%80%93_Magnetic_Iroha.png/revision/latest?cb=20250220094953", stats: { min: { vocal: 505, dance: 501, rap: 500, charm: 517 }, max: { vocal: 971, dance: 963, rap: 962, charm: 995 } } },
  { id: "illit-yunah-special", name: "Yunah", group: "ILLIT", rarity: "UR", grade: "UR", type: "special", theme: "I'LL LIKE YOU", image: "https://static.wikia.nocookie.net/rhythmhive/images/f/ff/WITH_Ver._%E2%80%93_I%27LL_LIKE_YOU_Yunah.png/revision/latest?cb=20250220095002", stats: { min: { vocal: 518, dance: 521, rap: 514, charm: 527 }, max: { vocal: 996, dance: 1003, rap: 988, charm: 1014 } } },
  { id: "illit-minju-special", name: "Minju", group: "ILLIT", rarity: "UR", grade: "UR", type: "special", theme: "I'LL LIKE YOU", image: "https://static.wikia.nocookie.net/rhythmhive/images/4/4a/WITH_Ver._%E2%80%93_I%27LL_LIKE_YOU_Minju.png/revision/latest?cb=20250220095000", stats: { min: { vocal: 529, dance: 520, rap: 526, charm: 527 }, max: { vocal: 1019, dance: 1000, rap: 1012, charm: 1014 } } },
  { id: "illit-moka-special", name: "Moka", group: "ILLIT", rarity: "UR", grade: "UR", type: "special", theme: "I'LL LIKE YOU", image: "https://static.wikia.nocookie.net/rhythmhive/images/e/ed/WITH_Ver._%E2%80%93_I%27LL_LIKE_YOU_Moka.png/revision/latest?cb=20250220094957", stats: { min: { vocal: 513, dance: 516, rap: 525, charm: 525 }, max: { vocal: 987, dance: 993, rap: 1009, charm: 1009 } } },
  { id: "illit-wonhee-special", name: "Wonhee", group: "ILLIT", rarity: "UR", grade: "UR", type: "special", theme: "I'LL LIKE YOU", image: "https://static.wikia.nocookie.net/rhythmhive/images/7/77/WITH_Ver._%E2%80%93_I%27LL_LIKE_YOU_Wonhee.png/revision/latest?cb=20250220094955", stats: { min: { vocal: 516, dance: 526, rap: 526, charm: 522 }, max: { vocal: 994, dance: 1012, rap: 1011, charm: 1004 } } },
  { id: "illit-iroha-special", name: "Iroha", group: "ILLIT", rarity: "UR", grade: "UR", type: "special", theme: "I'LL LIKE YOU", image: "https://static.wikia.nocookie.net/rhythmhive/images/3/3b/WITH_Ver._%E2%80%93_I%27LL_LIKE_YOU_Iroha.png/revision/latest?cb=20250220094952", stats: { min: { vocal: 518, dance: 521, rap: 514, charm: 527 }, max: { vocal: 996, dance: 1003, rap: 988, charm: 1014 } } },
  { id: "illit-yunah-fx", name: "Yunah", group: "ILLIT", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/2/24/Candy_Serenade_Yunah.png/revision/latest?cb=20250319073426", stats: { min: { vocal: 477, dance: 488, rap: 471, charm: 486 }, max: { vocal: 918, dance: 939, rap: 906, charm: 935 } } },
  { id: "illit-minju-fx", name: "Minju", group: "ILLIT", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/b/b1/Candy_Serenade_Minju.png/revision/latest?cb=20250319073425", stats: { min: { vocal: 478, dance: 482, rap: 477, charm: 471 }, max: { vocal: 919, dance: 927, rap: 918, charm: 905 } } },
  { id: "illit-moka-fx", name: "Moka", group: "ILLIT", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/5/5d/Candy_Serenade_Moka.png/revision/latest?cb=20250319073424", stats: { min: { vocal: 474, dance: 471, rap: 473, charm: 471 }, max: { vocal: 912, dance: 906, rap: 909, charm: 905 } } },
  { id: "illit-wonhee-fx", name: "Wonhee", group: "ILLIT", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/6/6e/Candy_Serenade_Wonhee.png/revision/latest?cb=20250319073424", stats: { min: { vocal: 474, dance: 477, rap: 466, charm: 486 }, max: { vocal: 911, dance: 918, rap: 897, charm: 935 } } },
  { id: "illit-iroha-fx", name: "Iroha", group: "ILLIT", rarity: "UR", grade: "UR", type: "fx", theme: "Candy Serenade", image: "https://static.wikia.nocookie.net/rhythmhive/images/4/43/Candy_Serenade_Iroha.png/revision/latest?cb=20250319073423", stats: { min: { vocal: 475, dance: 473, rap: 476, charm: 473 }, max: { vocal: 913, dance: 909, rap: 916, charm: 910 } } },
  { id: "illit-yunah-season", name: "Yunah", group: "ILLIT", rarity: "R", grade: "R", type: "season", theme: "Deco Polaroid", image: "https://static.wikia.nocookie.net/rhythmhive/images/9/94/ILLIT_Deco_Polaroid_Yunah_R.png/revision/latest?cb=20250307072335", stats: { min: { vocal: 409, dance: 409, rap: 410, charm: 413 }, max: { vocal: 787, dance: 786, rap: 789, charm: 795 } } },
  { id: "illit-minju-season", name: "Minju", group: "ILLIT", rarity: "R", grade: "R", type: "season", theme: "Deco Polaroid", image: "https://static.wikia.nocookie.net/rhythmhive/images/2/2b/ILLIT_Deco_Polaroid_Minju_R.png/revision/latest?cb=20250307072333", stats: { min: { vocal: 410, dance: 423, rap: 417, charm: 416 }, max: { vocal: 788, dance: 814, rap: 801, charm: 800 } } },
  { id: "illit-moka-season", name: "Moka", group: "ILLIT", rarity: "R", grade: "R", type: "season", theme: "Deco Polaroid", image: "https://static.wikia.nocookie.net/rhythmhive/images/b/b6/ILLIT_Deco_Polaroid_Moka.png/revision/latest?cb=20250307072331", stats: { min: { vocal: 409, dance: 422, rap: 413, charm: 413 }, max: { vocal: 787, dance: 811, rap: 794, charm: 795 } } },
  { id: "illit-wonhee-season", name: "Wonhee", group: "ILLIT", rarity: "R", grade: "R", type: "season", theme: "Deco Polaroid", image: "https://static.wikia.nocookie.net/rhythmhive/images/4/44/ILLIT_Deco_Polaroid_Wonhee.png/revision/latest?cb=20250307072330", stats: { min: { vocal: 424, dance: 412, rap: 412, charm: 416 }, max: { vocal: 816, dance: 793, rap: 792, charm: 800 } } },
  { id: "illit-iroha-season", name: "Iroha", group: "ILLIT", rarity: "R", grade: "R", type: "season", theme: "Deco Polaroid", image: "https://static.wikia.nocookie.net/rhythmhive/images/8/8a/ILLIT_Deco_Polaroid_Iroha.png/revision/latest?cb=20250307072327", stats: { min: { vocal: 418, dance: 413, rap: 406, charm: 419 }, max: { vocal: 803, dance: 794, rap: 781, charm: 805 } } },
  { id: "illit-yunah-album", name: "Yunah", group: "ILLIT", rarity: "UR", grade: "UR", type: "album", theme: "SUPER REAL ME", image: "https://static.wikia.nocookie.net/rhythmhive/images/4/4d/SUPER_ME_Ver._%E2%80%93_SUPER_REAL_ME_Yunah.png/revision/latest?cb=20250220095004", stats: { min: { vocal: 505, dance: 525, rap: 515, charm: 515 }, max: { vocal: 972, dance: 1010, rap: 991, charm: 989 } } },
  { id: "illit-minju-album", name: "Minju", group: "ILLIT", rarity: "UR", grade: "UR", type: "album", theme: "SUPER REAL ME", image: "https://static.wikia.nocookie.net/rhythmhive/images/8/84/SUPER_ME_Ver._%E2%80%93_SUPER_REAL_ME_Minju.png/revision/latest?cb=20250220095001", stats: { min: { vocal: 528, dance: 517, rap: 524, charm: 525 }, max: { vocal: 1017, dance: 992, rap: 1008, charm: 1011 } } },
  { id: "illit-moka-album", name: "Moka", group: "ILLIT", rarity: "UR", grade: "UR", type: "album", theme: "SUPER REAL ME", image: "https://static.wikia.nocookie.net/rhythmhive/images/b/bd/SUPER_ME_Ver._%E2%80%93_SUPER_REAL_ME_Moka.png/revision/latest?cb=20250220094959", stats: { min: { vocal: 505, dance: 506, rap: 512, charm: 515 }, max: { vocal: 972, dance: 973, rap: 984, charm: 989 } } },
  { id: "illit-wonhee-album", name: "Wonhee", group: "ILLIT", rarity: "UR", grade: "UR", type: "album", theme: "SUPER REAL ME", image: "https://static.wikia.nocookie.net/rhythmhive/images/5/53/SUPER_ME_Ver._%E2%80%93_SUPER_REAL_ME_Wonhee.png/revision/latest?cb=20250220094956", stats: { min: { vocal: 503, dance: 502, rap: 501, charm: 506 }, max: { vocal: 969, dance: 965, rap: 963, charm: 975 } } },
  { id: "illit-iroha-album", name: "Iroha", group: "ILLIT", rarity: "UR", grade: "UR", type: "album", theme: "SUPER REAL ME", image: "https://static.wikia.nocookie.net/rhythmhive/images/d/d3/SUPER_ME_Ver._%E2%80%93_SUPER_REAL_ME_Iroha.png/revision/latest?cb=20250220094954", stats: { min: { vocal: 508, dance: 514, rap: 498, charm: 525 }, max: { vocal: 976, dance: 986, rap: 956, charm: 1011 } } },
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

const fandomEmojis = {
  BTS: "💜",
  TXT: "💙",
  ENHYPEN: "🧡",
  SEVENTEEN: "💎",
  "LE SSERAFIM": "🩵",
  NewJeans: "🐰",
  BOYNEXTDOOR: "🚪",
  TWS: "☁️",
  ILLIT: "✨",
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

function getInitialCardImage(card) {
  return card.image || null;
}

const rosterCards = createRosterCards(demoCards);

const builtInCards = [
  ...demoCards.map((card) => {
    const image = getInitialCardImage(card);
    if (image) {
      return { ...card, image, imageGrade: card.grade || "UR" };
    }
    return card;
  }),
  ...rosterCards,
];

const keys = {
  cards: "rhythm-hive-card-catalog-v8",
  favorites: "rhythm-hive-favorites-v1",
  builds: "rhythm-hive-builds-v1",
  level: "rhythm-hive-level-v1",
  cardLevels: "rhythm-hive-card-levels-v5",
  imageSources: "rhythm-hive-image-sources-v6",
  imageVariants: "rhythm-hive-card-image-variants-v2",
  songScores: "rhythm-hive-song-scores-v3",
  groupTeams: "rhythm-hive-group-teams-v2",
  team: "rhythm-hive-current-team-v2",
};

const elements = {
  notice: document.querySelector("#notice"),
  search: document.querySelector("#search-input"),
  group: document.querySelector("#group-filter"),
  memberFilter: document.querySelector("#member-filter"),
  memberFilterWrap: document.querySelector("#member-filter-wrap"),
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
    ...(card.theme ? { theme: String(card.theme).trim() } : {}),
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
// BOYNEXTDOOR card images mapped directly in builtInCards
for (const card of builtInCards) {
  if (card.image && (!imageSources[card.id] || !imageSources[card.id].url)) {
    imageSources[card.id] = {
      url: card.image,
      page: card.image.startsWith("http") ? card.image : `https://rhythmhive.fandom.com/wiki/File:${encodeURIComponent(card.name)}`,
    };
  }
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
    ...((card.theme || builtIn?.theme || saved?.theme) ? { theme: card.theme || builtIn?.theme || saved?.theme } : {}),
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

const ALL_GROUPS = ["BTS", "TXT", "ENHYPEN", "SEVENTEEN", "LE SSERAFIM", "NewJeans", "BOYNEXTDOOR", "TWS", "ILLIT"];

let groupTeams = readStorage(keys.groupTeams, {});
if (!groupTeams || typeof groupTeams !== "object" || Array.isArray(groupTeams)) groupTeams = {};

function getGroupMemberCount(group) {
  return groupMembers[group]?.length || 5;
}

function getGroupTeam(group) {
  const g = group || selectedStudioGroup || "BTS";
  const count = getGroupMemberCount(g);
  if (!Array.isArray(groupTeams[g]) || groupTeams[g].length !== count) {
    const existing = Array.isArray(groupTeams[g]) ? groupTeams[g].filter(Boolean) : [];
    const newTeam = Array(count).fill(null);
    for (let i = 0; i < Math.min(count, existing.length); i++) {
      const card = cardById(existing[i]);
      if (card && card.group === g) newTeam[i] = existing[i];
    }
    groupTeams[g] = newTeam;
  }
  return groupTeams[g];
}

function saveGroupTeams() {
  writeStorage(keys.groupTeams, groupTeams);
}

let selectedStudioGroup = "BTS";
let currentTeam = getGroupTeam(selectedStudioGroup);
let currentLevel = Number(readStorage(keys.level, 1));
if (!Number.isInteger(currentLevel) || currentLevel < 1 || currentLevel > 60) currentLevel = 1;
let cardLevels = readStorage(keys.cardLevels, {});
if (!cardLevels || typeof cardLevels !== "object" || Array.isArray(cardLevels)) cardLevels = {};
for (const card of cards) {
  const level = Number(cardLevels[card.id]);
  if (!Number.isInteger(level) || level < 1 || level > 60) cardLevels[card.id] = 1;
}

let currentTab = "cards";
let currentSongGroup = "BTS";
let songsSearchQuery = "";
let currentSongAlbum = "";
let currentSongDiff = "all";
let currentSongLevel = "";
let currentSongSort = "score-desc";
let isFetchingSongs = false;
let currentIdolGroup = "Tất cả";
let idolsSearchQuery = "";

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

const defaultSongScores = {
  BTS: [
    // Proof & New Singles
    { title: "Run BTS (달려라 방탄)", score: 3250000, album: "Proof" },
    { title: "Yet To Come (The Most Beautiful Moment)", score: 2480000, album: "Proof" },
    { title: "For Youth", score: 2520000, album: "Proof" },
    { title: "Born Singer", score: 2450000, album: "Proof" },
    { title: "Take Two", score: 2420000, album: "Take Two" },
    { title: "Butter", score: 2750000, album: "Butter" },
    { title: "Permission to Dance", score: 2680000, album: "Butter" },
    // BE
    { title: "Dynamite", score: 2720000, album: "BE" },
    { title: "Life Goes On", score: 2550000, album: "BE" },
    { title: "Fly To My Room (내 방을 여행하는 법)", score: 2620000, album: "BE" },
    { title: "Blue & Grey", score: 2580000, album: "BE" },
    { title: "Telepathy (잠시)", score: 2700000, album: "BE" },
    { title: "Dis-ease (병)", score: 2750000, album: "BE" },
    { title: "Stay", score: 2740000, album: "BE" },
    // MAP OF THE SOUL : 7
    { title: "ON", score: 3020000, album: "MAP OF THE SOUL : 7" },
    { title: "Black Swan", score: 2980000, album: "MAP OF THE SOUL : 7" },
    { title: "Filter", score: 2850000, album: "MAP OF THE SOUL : 7" },
    { title: "My Time (시차)", score: 2820000, album: "MAP OF THE SOUL : 7" },
    { title: "Louder than bombs", score: 2760000, album: "MAP OF THE SOUL : 7" },
    { title: "UGH! (욱)", score: 2950000, album: "MAP OF THE SOUL : 7" },
    { title: "00:00 (Zero O'Clock)", score: 2650000, album: "MAP OF THE SOUL : 7" },
    { title: "Inner Child", score: 2680000, album: "MAP OF THE SOUL : 7" },
    { title: "Friends (친구)", score: 2720000, album: "MAP OF THE SOUL : 7" },
    { title: "Moon", score: 2700000, album: "MAP OF THE SOUL : 7" },
    { title: "Respect", score: 2660000, album: "MAP OF THE SOUL : 7" },
    { title: "We are Bulletproof : the Eternal", score: 2600000, album: "MAP OF THE SOUL : 7" },
    // MAP OF THE SOUL : PERSONA
    { title: "Dionysus", score: 3200000, album: "MAP OF THE SOUL : PERSONA" },
    { title: "Boy With Luv (작은 것들을 위한 시)", score: 2780000, album: "MAP OF THE SOUL : PERSONA" },
    { title: "Mikrokosmos (소우주)", score: 2650000, album: "MAP OF THE SOUL : PERSONA" },
    { title: "Make It Right", score: 2620000, album: "MAP OF THE SOUL : PERSONA" },
    { title: "HOME", score: 2750000, album: "MAP OF THE SOUL : PERSONA" },
    { title: "Jamais Vu", score: 2600000, album: "MAP OF THE SOUL : PERSONA" },
    { title: "Intro : Persona", score: 2720000, album: "MAP OF THE SOUL : PERSONA" },
    // LOVE YOURSELF SERIES
    { title: "IDOL", score: 3150000, album: "LOVE YOURSELF 結 'Answer'" },
    { title: "Euphoria", score: 2780000, album: "LOVE YOURSELF 結 'Answer'" },
    { title: "Trivia 起 : Just Dance", score: 2700000, album: "LOVE YOURSELF 結 'Answer'" },
    { title: "Trivia 承 : Love", score: 2680000, album: "LOVE YOURSELF 結 'Answer'" },
    { title: "Trivia 轉 : Seesaw", score: 2720000, album: "LOVE YOURSELF 結 'Answer'" },
    { title: "Epiphany", score: 2640000, album: "LOVE YOURSELF 結 'Answer'" },
    { title: "I'm Fine", score: 2880000, album: "LOVE YOURSELF 結 'Answer'" },
    { title: "Answer : Love Myself", score: 2600000, album: "LOVE YOURSELF 結 'Answer'" },
    { title: "FAKE LOVE", score: 3050000, album: "LOVE YOURSELF 轉 'Tear'" },
    { title: "The Truth Untold (전하지 못한 진심)", score: 2550000, album: "LOVE YOURSELF 轉 'Tear'" },
    { title: "Airplane pt.2", score: 2820000, album: "LOVE YOURSELF 轉 'Tear'" },
    { title: "Anpanman", score: 2860000, album: "LOVE YOURSELF 轉 'Tear'" },
    { title: "So What", score: 2900000, album: "LOVE YOURSELF 轉 'Tear'" },
    { title: "Magic Shop", score: 2680000, album: "LOVE YOURSELF 轉 'Tear'" },
    { title: "Love Maze", score: 2700000, album: "LOVE YOURSELF 轉 'Tear'" },
    { title: "Paradise (낙원)", score: 2650000, album: "LOVE YOURSELF 轉 'Tear'" },
    { title: "DNA", score: 2950000, album: "LOVE YOURSELF 承 'Her'" },
    { title: "MIC Drop", score: 3180000, album: "LOVE YOURSELF 承 'Her'" },
    { title: "Best Of Me", score: 2750000, album: "LOVE YOURSELF 承 'Her'" },
    { title: "Go Go (고민보다 Go)", score: 2800000, album: "LOVE YOURSELF 承 'Her'" },
    { title: "Pied Piper", score: 2760000, album: "LOVE YOURSELF 承 'Her'" },
    { title: "Dimple (보조개)", score: 2680000, album: "LOVE YOURSELF 承 'Her'" },
    // WINGS & YNWA
    { title: "Spring Day (봄날)", score: 2500000, album: "YOU NEVER WALK ALONE" },
    { title: "Not Today", score: 2920000, album: "YOU NEVER WALK ALONE" },
    { title: "A Supplementary Story: You Never Walk Alone", score: 2550000, album: "YOU NEVER WALK ALONE" },
    { title: "Blood Sweat & Tears (피 땀 눈물)", score: 3080000, album: "Wings" },
    { title: "Lie", score: 2820000, album: "Wings" },
    { title: "Stigma", score: 2650000, album: "Wings" },
    { title: "First Love", score: 2600000, album: "Wings" },
    { title: "MAMA", score: 2750000, album: "Wings" },
    { title: "Awake", score: 2620000, album: "Wings" },
    { title: "Lost", score: 2700000, album: "Wings" },
    { title: "BTS Cypher 4", score: 2880000, album: "Wings" },
    { title: "Am I Wrong", score: 2780000, album: "Wings" },
    { title: "21st Century Girl (21세기 소녀)", score: 2840000, album: "Wings" },
    { title: "2! 3! (둘! 셋!)", score: 2580000, album: "Wings" },
    // HYYH Series
    { title: "FIRE (불타오르네)", score: 3120000, album: "화양연화 Young Forever" },
    { title: "Save ME", score: 2800000, album: "화양연화 Young Forever" },
    { title: "EPILOGUE : Young Forever", score: 2560000, album: "화양연화 Young Forever" },
    { title: "House of Cards", score: 2650000, album: "화양연화 Young Forever" },
    { title: "RUN", score: 2800000, album: "화양연화 pt.2" },
    { title: "Butterfly", score: 2600000, album: "화양연화 pt.2" },
    { title: "Whalien 52", score: 2640000, album: "화양연화 pt.2" },
    { title: "Ma City", score: 2850000, album: "화양연화 pt.2" },
    { title: "Silver Spoon (뱁새)", score: 2900000, album: "화양연화 pt.2" },
    { title: "Autumn Leaves (고엽)", score: 2680000, album: "화양연화 pt.2" },
    { title: "I NEED U", score: 2820000, album: "화양연화 pt.1" },
    { title: "DOPE (쩔어)", score: 3100000, album: "화양연화 pt.1" },
    { title: "Hold Me Tight (잡아줘)", score: 2620000, album: "화양연화 pt.1" },
    { title: "Converse High", score: 2660000, album: "화양연화 pt.1" },
    // Early Classics
    { title: "Danger", score: 2880000, album: "DARK&WILD" },
    { title: "War of Hormone (호르몬 전쟁)", score: 2860000, album: "DARK&WILD" },
    { title: "Blanket Kick (이불킥)", score: 2600000, album: "DARK&WILD" },
    { title: "Boy In Luv (상남자)", score: 2900000, album: "Skool Luv Affair" },
    { title: "Just One Day (하루만)", score: 2680000, album: "Skool Luv Affair" },
    { title: "Tomorrow", score: 2740000, album: "Skool Luv Affair" },
    { title: "Jump", score: 2800000, album: "Skool Luv Affair" },
    { title: "N.O", score: 2820000, album: "O!RUL8,2?" },
    { title: "Attack on Bangtan (진격의 방탄)", score: 2860000, album: "O!RUL8,2?" },
    { title: "No More Dream", score: 2850000, album: "2 COOL 4 SKOOL" },
    { title: "We Are Bulletproof Pt.2", score: 2880000, album: "2 COOL 4 SKOOL" },
    { title: "Like (좋아요)", score: 2600000, album: "2 COOL 4 SKOOL" },
    // Solos featured in Rhythm Hive
    { title: "Seven (feat. Latto)", score: 3220000, album: "GOLDEN" },
    { title: "Standing Next to You", score: 3200000, album: "GOLDEN" },
    { title: "3D (feat. Jack Harlow)", score: 3150000, album: "GOLDEN" },
    { title: "Slow Dancing", score: 2980000, album: "Layover" },
    { title: "Love Me Again", score: 2920000, album: "Layover" },
    { title: "Rainy Days", score: 2880000, album: "Layover" },
    { title: "FRI(END)S", score: 3050000, album: "FRI(END)S" },
    { title: "Like Crazy", score: 3120000, album: "FACE" },
    { title: "Set Me Free Pt.2", score: 3180000, album: "FACE" },
    { title: "Who", score: 3200000, album: "MUSE" },
    { title: "Closer Than This", score: 2850000, album: "MUSE" },
    { title: "The Astronaut", score: 2950000, album: "The Astronaut" },
    { title: "Super Tuna (슈퍼 참치)", score: 2900000, album: "Super Tuna" },
    { title: "Running Wild", score: 3100000, album: "Happy" },
    { title: "I'll Be There", score: 3050000, album: "Happy" },
    { title: "Haegeum (해금)", score: 3180000, album: "D-DAY" },
    { title: "Daechwita (대취타)", score: 3150000, album: "D-2" },
    { title: "People Pt.2 (feat. IU)", score: 2950000, album: "D-DAY" },
    { title: "MORE", score: 3080000, album: "Jack In The Box" },
    { title: "Arson", score: 3120000, album: "Jack In The Box" },
    { title: "on the street (with J. Cole)", score: 2980000, album: "on the street" },
    { title: "NEURON", score: 3050000, album: "HOPE ON THE STREET VOL.1" },
    { title: "Wild Flower (들꽃놀이)", score: 3020000, album: "Indigo" },
    { title: "Still Life", score: 2960000, album: "Indigo" },
  ],
  TXT: [
    { title: "Over The Moon", score: 3220000, album: "The Star Chapter: SANCTUARY" },
    { title: "Heaven", score: 3150000, album: "The Star Chapter: SANCTUARY" },
    { title: "Danger", score: 3120000, album: "The Star Chapter: SANCTUARY" },
    { title: "Resist (Not Gonna Run Away)", score: 3080000, album: "The Star Chapter: SANCTUARY" },
    { title: "Forty One Winks", score: 3050000, album: "The Star Chapter: SANCTUARY" },
    { title: "Higher Than Heaven", score: 3100000, album: "The Star Chapter: SANCTUARY" },
    { title: "Deja Vu", score: 3200000, album: "minisode 3: TOMORROW" },
    { title: "Miracle (기적은 너와 내가 함께하는 순간마다 일어나고 있어)", score: 2780000, album: "minisode 3: TOMORROW" },
    { title: "I'll See You There Tomorrow (내일에서 기다릴게)", score: 3150000, album: "minisode 3: TOMORROW" },
    { title: "The Killa (I Belong to You)", score: 3100000, album: "minisode 3: TOMORROW" },
    { title: "Quarter Life", score: 3050000, album: "minisode 3: TOMORROW" },
    { title: "Chasing That Feeling", score: 3180000, album: "The Name Chapter: FREEFALL" },
    { title: "Growing Pain", score: 3120000, album: "The Name Chapter: FREEFALL" },
    { title: "Back for More (TXT Ver.)", score: 3100000, album: "The Name Chapter: FREEFALL" },
    { title: "Dreaming", score: 3020000, album: "The Name Chapter: FREEFALL" },
    { title: "Deep Down (물수제비)", score: 2980000, album: "The Name Chapter: FREEFALL" },
    { title: "Happily Ever After", score: 2950000, album: "The Name Chapter: FREEFALL" },
    { title: "Skipping Stones (두 개의 달이 떠오르는 밤)", score: 2900000, album: "The Name Chapter: FREEFALL" },
    { title: "Blue Spring", score: 2850000, album: "The Name Chapter: FREEFALL" },
    { title: "Sugar Rush Ride", score: 3150000, album: "The Name Chapter: TEMPTATION" },
    { title: "Devil by the Window (자정의 창가에서 너와 내가 발견한 평화로운 밤)", score: 3100000, album: "The Name Chapter: TEMPTATION" },
    { title: "Happy Fools (feat. Coi Leray)", score: 3000000, album: "The Name Chapter: TEMPTATION" },
    { title: "Tinnitus (Wanna be a rock)", score: 3050000, album: "The Name Chapter: TEMPTATION" },
    { title: "Farewell, Neverland", score: 3000000, album: "The Name Chapter: TEMPTATION" },
    { title: "Good Boy Gone Bad", score: 3120000, album: "minisode 2: Thursday's Child" },
    { title: "Opening Sequence", score: 2860000, album: "minisode 2: Thursday's Child" },
    { title: "Trust Fund Baby", score: 2780000, album: "minisode 2: Thursday's Child" },
    { title: "Lonely Boy (네 번째 손가락 위 타투)", score: 2800000, album: "minisode 2: Thursday's Child" },
    { title: "Thursday's Child Has Far To Go", score: 2840000, album: "minisode 2: Thursday's Child" },
    { title: "LOSER=LOVER", score: 3080000, album: "The Chaos Chapter: FIGHT OR ESCAPE" },
    { title: "MOA Diary (Dubaddu Wari Wari)", score: 2900000, album: "The Chaos Chapter: FIGHT OR ESCAPE" },
    { title: "0X1=LOVESONG (I Know I Love You)", score: 3100000, album: "The Chaos Chapter: FREEZE" },
    { title: "Anti-Romantic", score: 2800000, album: "The Chaos Chapter: FREEZE" },
    { title: "Magic", score: 2950000, album: "The Chaos Chapter: FREEZE" },
    { title: "Ice Cream (소악행)", score: 2820000, album: "The Chaos Chapter: FREEZE" },
    { title: "What if I had been that PUMA (밸런스 게임)", score: 2920000, album: "The Chaos Chapter: FREEZE" },
    { title: "No Rules", score: 2960000, album: "The Chaos Chapter: FREEZE" },
    { title: "Dear Sputnik", score: 2900000, album: "The Chaos Chapter: FREEZE" },
    { title: "Frost", score: 2980000, album: "The Chaos Chapter: FREEZE" },
    { title: "Blue Hour (5시 53분의 하늘에서 발견한 너와 나)", score: 2920000, album: "minisode1: Blue Hour" },
    { title: "Ghosting", score: 2550000, album: "minisode1: Blue Hour" },
    { title: "We Lost The Summer (날씨를 잃어버렸어)", score: 2600000, album: "minisode1: Blue Hour" },
    { title: "Wishlist", score: 2750000, album: "minisode1: Blue Hour" },
    { title: "Way Home (하굣길)", score: 2680000, album: "minisode1: Blue Hour" },
    { title: "Can't You See Me? (세계가 불타버린 밤, 우린...)", score: 2950000, album: "The Dream Chapter: ETERNITY" },
    { title: "Drama", score: 2620000, album: "The Dream Chapter: ETERNITY" },
    { title: "Fairy of Shampoo", score: 2580000, album: "The Dream Chapter: ETERNITY" },
    { title: "Maze in the Mirror (거울 속의 미로)", score: 2650000, album: "The Dream Chapter: ETERNITY" },
    { title: "PUMA (동물원을 빠져나온 퓨마)", score: 2900000, album: "The Dream Chapter: ETERNITY" },
    { title: "Eternally", score: 2850000, album: "The Dream Chapter: ETERNITY" },
    { title: "Run Away (9와 4분의 3 승강장에서 너를 기다려)", score: 2950000, album: "The Dream Chapter: MAGIC" },
    { title: "New Rules", score: 2850000, album: "The Dream Chapter: MAGIC" },
    { title: "20cm", score: 2650000, album: "The Dream Chapter: MAGIC" },
    { title: "Roller Coaster", score: 2700000, album: "The Dream Chapter: MAGIC" },
    { title: "Poppin' Star", score: 2680000, album: "The Dream Chapter: MAGIC" },
    { title: "Can't We Just Leave the Monster Alive?", score: 2720000, album: "The Dream Chapter: MAGIC" },
    { title: "CROWN (어느날 머리에서 뿔이 자랐다)", score: 2880000, album: "The Dream Chapter: STAR" },
    { title: "Blue Orangeade", score: 2750000, album: "The Dream Chapter: STAR" },
    { title: "Cat & Dog", score: 2720000, album: "The Dream Chapter: STAR" },
    { title: "Our Summer", score: 2680000, album: "The Dream Chapter: STAR" },
    { title: "Nap of a star (별의 낮잠)", score: 2500000, album: "The Dream Chapter: STAR" },
  ],
  ENHYPEN: [
    { title: "No Doubt", score: 3240000, album: "ROMANCE : UNTOLD -daydream-" },
    { title: "Daydream", score: 3160000, album: "ROMANCE : UNTOLD -daydream-" },
    { title: "Brought The Heat Back", score: 3220000, album: "ROMANCE : UNTOLD" },
    { title: "XO (Only If You Say Yes)", score: 3180000, album: "ROMANCE : UNTOLD" },
    { title: "Moonstruck", score: 3150000, album: "ROMANCE : UNTOLD" },
    { title: "Your Eyes Only", score: 3080000, album: "ROMANCE : UNTOLD" },
    { title: "Highway 1009", score: 3020000, album: "ROMANCE : UNTOLD" },
    { title: "Paranormal", score: 3120000, album: "ROMANCE : UNTOLD" },
    { title: "Royalty", score: 3050000, album: "ROMANCE : UNTOLD" },
    { title: "Fatal Trouble", score: 3120000, album: "MEMORABILIA" },
    { title: "Lucifer", score: 3100000, album: "MEMORABILIA" },
    { title: "Teeth", score: 3060000, album: "MEMORABILIA" },
    { title: "Scream", score: 3020000, album: "MEMORABILIA" },
    { title: "Criminal Love", score: 3080000, album: "MEMORABILIA" },
    { title: "One In A Billion", score: 3040000, album: "MEMORABILIA" },
    { title: "Sweet Venom", score: 3100000, album: "ORANGE BLOOD" },
    { title: "Orange Flower (You Complete Me)", score: 2600000, album: "ORANGE BLOOD" },
    { title: "Still Monster", score: 2700000, album: "ORANGE BLOOD" },
    { title: "Blind", score: 2950000, album: "ORANGE BLOOD" },
    { title: "Mortal", score: 2850000, album: "ORANGE BLOOD" },
    { title: "Bite Me", score: 3080000, album: "DARK BLOOD" },
    { title: "Sacrifice (Eat Me Up)", score: 3050000, album: "DARK BLOOD" },
    { title: "Chaconne", score: 3020000, album: "DARK BLOOD" },
    { title: "Karma", score: 2980000, album: "DARK BLOOD" },
    { title: "Bills", score: 2900000, album: "DARK BLOOD" },
    { title: "Fate", score: 2820000, album: "DARK BLOOD" },
    { title: "Future Perfect (Pass the MIC)", score: 2960000, album: "MANIFESTO : DAY 1" },
    { title: "SHOUT OUT", score: 2940000, album: "MANIFESTO : DAY 1" },
    { title: "ParadoXXX Invasion", score: 2920000, album: "MANIFESTO : DAY 1" },
    { title: "TFW (That Feeling When)", score: 2850000, album: "MANIFESTO : DAY 1" },
    { title: "Blessed-Cursed", score: 2920000, album: "DIMENSION : ANSWER" },
    { title: "Polaroid Love", score: 2900000, album: "DIMENSION : ANSWER" },
    { title: "Tamed-Dashed", score: 2880000, album: "DIMENSION : DILEMMA" },
    { title: "Upper Side Dreamin'", score: 2850000, album: "DIMENSION : DILEMMA" },
    { title: "Go Big or Go Home (모 아니면 도)", score: 2820000, album: "DIMENSION : DILEMMA" },
    { title: "Blockbuster (액션 영화처럼)", score: 2860000, album: "DIMENSION : DILEMMA" },
    { title: "Attention, please!", score: 2840000, album: "DIMENSION : DILEMMA" },
    { title: "Just A Little Bit (몰랐어)", score: 2700000, album: "DIMENSION : DILEMMA" },
    { title: "Drunk-Dazed", score: 2800000, album: "BORDER : CARNIVAL" },
    { title: "FEVER", score: 2780000, album: "BORDER : CARNIVAL" },
    { title: "Not For Sale", score: 2750000, album: "BORDER : CARNIVAL" },
    { title: "Mixed Up (별안간)", score: 2720000, album: "BORDER : CARNIVAL" },
    { title: "Given-Taken", score: 2720000, album: "BORDER : DAY ONE" },
    { title: "Let Me In (20 CUBE)", score: 2680000, album: "BORDER : DAY ONE" },
    { title: "10 Months", score: 2640000, album: "BORDER : DAY ONE" },
    { title: "Flicker", score: 2650000, album: "BORDER : DAY ONE" },
  ],
  SEVENTEEN: [
    { title: "LOVE, MONEY, FAME (feat. DJ Khaled)", score: 3280000, album: "SPILL THE FEELS" },
    { title: "Eyes on you", score: 3180000, album: "SPILL THE FEELS" },
    { title: "1 TO 13", score: 3140000, album: "SPILL THE FEELS" },
    { title: "Candy", score: 3100000, album: "SPILL THE FEELS" },
    { title: "Rain", score: 3080000, album: "SPILL THE FEELS" },
    { title: "Water", score: 3060000, album: "SPILL THE FEELS" },
    { title: "MAESTRO", score: 3250000, album: "17 IS RIGHT HERE" },
    { title: "LALALI", score: 3180000, album: "17 IS RIGHT HERE" },
    { title: "Spell", score: 3160000, album: "17 IS RIGHT HERE" },
    { title: "Cheers to youth (청춘찬가)", score: 3120000, album: "17 IS RIGHT HERE" },
    { title: "Fighting (파이팅 해야지 feat. 이영지)", score: 3200000, album: "SECOND WIND" },
    { title: "7PM (7시에 들어줘 feat. Peder Elias)", score: 2950000, album: "SECOND WIND" },
    { title: "Lunch", score: 2980000, album: "SECOND WIND" },
    { title: "God of Music (음악의 신)", score: 3220000, album: "SEVENTEENTH HEAVEN" },
    { title: "Diamond Days", score: 3120000, album: "SEVENTEENTH HEAVEN" },
    { title: "SOS (prod. Marshmello)", score: 3150000, album: "SEVENTEENTH HEAVEN" },
    { title: "Monster", score: 3100000, album: "SEVENTEENTH HEAVEN" },
    { title: "Yawn (하품)", score: 2980000, album: "SEVENTEENTH HEAVEN" },
    { title: "Headliner", score: 3040000, album: "SEVENTEENTH HEAVEN" },
    { title: "Super (손오공)", score: 3200000, album: "FML" },
    { title: "F*ck My Life", score: 3160000, album: "FML" },
    { title: "Fire", score: 3120000, album: "FML" },
    { title: "I Don't Understand But I Luv U", score: 3100000, album: "FML" },
    { title: "Dust (먼지)", score: 3050000, album: "FML" },
    { title: "April shower", score: 3020000, album: "FML" },
    { title: "_WORLD", score: 3100000, album: "SECTOR 17" },
    { title: "CHEERS", score: 3080000, album: "SECTOR 17" },
    { title: "Circles (돌고 돌아)", score: 2980000, album: "SECTOR 17" },
    { title: "Fallin' Flower (Korean Ver.)", score: 3020000, album: "SECTOR 17" },
    { title: "HOT", score: 3140000, album: "Face the Sun" },
    { title: "Darl+ing", score: 3080000, album: "Face the Sun" },
    { title: "DON QUIXOTE", score: 3120000, album: "Face the Sun" },
    { title: "March", score: 3080000, album: "Face the Sun" },
    { title: "Domino", score: 3040000, album: "Face the Sun" },
    { title: "Shadow", score: 3060000, album: "Face the Sun" },
    { title: "'bout you (노래해)", score: 2960000, album: "Face the Sun" },
    { title: "Rock with you", score: 3050000, album: "Attacca" },
    { title: "To you (소용돌이)", score: 3000000, album: "Attacca" },
    { title: "Crush", score: 2980000, album: "Attacca" },
    { title: "PANG!", score: 2920000, album: "Attacca" },
    { title: "Imperfect love (매일 그대라서 행복하다)", score: 2880000, album: "Attacca" },
    { title: "Ready to love", score: 3020000, album: "Your Choice" },
    { title: "Anyone", score: 3000000, album: "Your Choice" },
    { title: "Heaven's Cloud", score: 2950000, album: "Your Choice" },
    { title: "HOME;RUN", score: 2980000, album: "; [Semicolon]" },
    { title: "All My Love (겨우)", score: 2880000, album: "; [Semicolon]" },
    { title: "Hey Buddy", score: 2920000, album: "; [Semicolon]" },
    { title: "Left & Right", score: 2960000, album: "Heng:garæ" },
    { title: "My My", score: 2900000, album: "Heng:garæ" },
    { title: "Fearless", score: 2940000, album: "Heng:garæ" },
    { title: "Together (같이 가요)", score: 2880000, album: "Heng:garæ" },
    { title: "HIT", score: 2940000, album: "An Ode" },
    { title: "Fear (독)", score: 2920000, album: "An Ode" },
    { title: "Snap Shoot", score: 2900000, album: "An Ode" },
    { title: "Second Life", score: 2850000, album: "An Ode" },
    { title: "Home", score: 2860000, album: "YOU MADE MY DAWN" },
    { title: "Good to Me", score: 2840000, album: "YOU MADE MY DAWN" },
    { title: "Getting Closer (숨이 차)", score: 2950000, album: "YOU MADE MY DAWN" },
    { title: "Oh My! (어쩌나)", score: 2840000, album: "YOU MAKE MY DAY" },
    { title: "Our dawn is hotter than day", score: 2800000, album: "YOU MAKE MY DAY" },
    { title: "Holiday", score: 2820000, album: "YOU MAKE MY DAY" },
    { title: "THANKS (고맙다)", score: 2820000, album: "DIRECTOR'S CUT" },
    { title: "Run to You (지금 널 찾아가고 있어)", score: 2860000, album: "DIRECTOR'S CUT" },
    { title: "CLAP (박수)", score: 2800000, album: "TEEN, AGE" },
    { title: "CHANGE UP", score: 2880000, album: "TEEN, AGE" },
    { title: "Without You (모자를 눌러 쓰고)", score: 2750000, album: "TEEN, AGE" },
    { title: "Pinwheel (바람개비)", score: 2720000, album: "TEEN, AGE" },
    { title: "Don't Wanna Cry (울고 싶지 않아)", score: 2780000, album: "Al1" },
    { title: "Habit (입버릇)", score: 2700000, album: "Al1" },
    { title: "Swimming Fool", score: 2740000, album: "Al1" },
    { title: "Boom Boom (붐붐)", score: 2750000, album: "Going Seventeen" },
    { title: "Highlight", score: 2780000, album: "Going Seventeen" },
    { title: "Smile Flower (웃음꽃)", score: 2650000, album: "Going Seventeen" },
    { title: "VERY NICE (아주 NICE)", score: 2720000, album: "Love & Letter Repackage" },
    { title: "Healing (힐링)", score: 2680000, album: "Love & Letter Repackage" },
    { title: "Pretty U (예쁘다)", score: 2680000, album: "FIRST 'LOVE&LETTER'" },
    { title: "Mansae (만세)", score: 2640000, album: "BOYS BE" },
    { title: "When I Grow Up (어른이 되면)", score: 2600000, album: "BOYS BE" },
    { title: "Adore U (아낀다)", score: 2600000, album: "17 CARAT" },
    { title: "20", score: 2550000, album: "17 CARAT" },
  ],
  "LE SSERAFIM": [
    { title: "CRAZY", score: 3220000, album: "CRAZY" },
    { title: "1-800-hot-n-fun", score: 3180000, album: "CRAZY" },
    { title: "Pierrot", score: 3150000, album: "CRAZY" },
    { title: "Chasing Lightning", score: 3100000, album: "CRAZY" },
    { title: "Crazier", score: 3050000, album: "CRAZY" },
    { title: "Star Signs", score: 3080000, album: "Star Signs" },
    { title: "EASY", score: 3120000, album: "EASY" },
    { title: "Smart", score: 3100000, album: "EASY" },
    { title: "Swan Song", score: 3050000, album: "EASY" },
    { title: "Good Bones", score: 3000000, album: "EASY" },
    { title: "We got so much", score: 2980000, album: "EASY" },
    { title: "Perfect Night", score: 3080000, album: "Perfect Night" },
    { title: "Perfect Night (Holiday Remix)", score: 3020000, album: "Perfect Night" },
    { title: "UNFORGIVEN (feat. Nile Rodgers)", score: 3050000, album: "UNFORGIVEN" },
    { title: "Eve, Psyche & The Bluebeard's wife", score: 3020000, album: "UNFORGIVEN" },
    { title: "Fire in the belly", score: 2980000, album: "UNFORGIVEN" },
    { title: "Flash Forward", score: 2950000, album: "UNFORGIVEN" },
    { title: "No-Return (Into the unknown)", score: 2920000, album: "UNFORGIVEN" },
    { title: "Burn the Bridge", score: 2880000, album: "UNFORGIVEN" },
    { title: "ANTIFRAGILE", score: 2900000, album: "ANTIFRAGILE" },
    { title: "Impurities", score: 2860000, album: "ANTIFRAGILE" },
    { title: "No Celestial", score: 2840000, album: "ANTIFRAGILE" },
    { title: "Good Parts (when the quality is bad but I am)", score: 2800000, album: "ANTIFRAGILE" },
    { title: "The Hydra", score: 2750000, album: "ANTIFRAGILE" },
    { title: "FEARLESS", score: 2850000, album: "FEARLESS" },
    { title: "Blue Flame", score: 2800000, album: "FEARLESS" },
    { title: "Sour Grapes", score: 2720000, album: "FEARLESS" },
    { title: "The Great Mermaid", score: 2780000, album: "FEARLESS" },
    { title: "The World Is My Oyster", score: 2650000, album: "FEARLESS" },
  ],
  NewJeans: [
    { title: "Supernatural", score: 3200000, album: "Supernatural" },
    { title: "Right Now", score: 3160000, album: "Supernatural" },
    { title: "How Sweet", score: 3150000, album: "How Sweet" },
    { title: "Bubble Gum", score: 3100000, album: "How Sweet" },
    { title: "GODS (League of Legends Worlds Anthem)", score: 3220000, album: "GODS" },
    { title: "Zero", score: 3050000, album: "Zero" },
    { title: "Zero (J.I.D Remix)", score: 3000000, album: "Zero" },
    { title: "ETA", score: 3120000, album: "Get Up" },
    { title: "Super Shy", score: 3080000, album: "Get Up" },
    { title: "Cool With You", score: 3050000, album: "Get Up" },
    { title: "ASAP", score: 3000000, album: "Get Up" },
    { title: "New Jeans", score: 2980000, album: "Get Up" },
    { title: "Get Up", score: 2920000, album: "Get Up" },
    { title: "Ditto", score: 2950000, album: "OMG" },
    { title: "OMG", score: 2920000, album: "OMG" },
    { title: "Hype Boy", score: 2900000, album: "New Jeans" },
    { title: "Attention", score: 2880000, album: "New Jeans" },
    { title: "Cookie", score: 2850000, album: "New Jeans" },
    { title: "Hurt", score: 2780000, album: "New Jeans" },
    { title: "Super Shy (2nd Ver.)", score: 3050000, album: "Get Up" },
    { title: "Cool With You (2nd Ver.)", score: 3020000, album: "Get Up" },
    { title: "Hype Boy (2nd Ver.)", score: 2880000, album: "New Jeans" },
    { title: "Attention (250 Remix)", score: 2850000, album: "NJWMX" },
    { title: "Ditto (250 Remix)", score: 2920000, album: "NJWMX" },
    { title: "OMG (FRNK Remix)", score: 2900000, album: "NJWMX" },
    { title: "Hype Boy (250 Remix)", score: 2880000, album: "NJWMX" },
    { title: "Cookie (FRNK Remix)", score: 2840000, album: "NJWMX" },
    { title: "Hurt (250 Remix)", score: 2760000, album: "NJWMX" },
  ],
  BOYNEXTDOOR: [
    { title: "Nice Guy", score: 3180000, album: "19.99" },
    { title: "Dangerous (부모님 관람불가)", score: 3150000, album: "19.99" },
    { title: "Gonna Be A Rock (돌멩이)", score: 3100000, album: "19.99" },
    { title: "Call Me", score: 3050000, album: "19.99" },
    { title: "20", score: 3080000, album: "19.99" },
    { title: "SKIT", score: 2950000, album: "19.99" },
    { title: "Earth, Wind & Fire", score: 3120000, album: "HOW?" },
    { title: "OUR", score: 3080000, album: "HOW?" },
    { title: "Amnesia", score: 3040000, album: "HOW?" },
    { title: "So let's go see the stars", score: 3020000, album: "HOW?" },
    { title: "l i f e i s c o o l", score: 2980000, album: "HOW?" },
    { title: "Dear. My Darling", score: 2950000, album: "HOW?" },
    { title: "But Sometimes (뭣 같아)", score: 3050000, album: "WHY.." },
    { title: "Crying", score: 2980000, album: "WHY.." },
    { title: "ABCDLOVE", score: 2940000, album: "WHY.." },
    { title: "One and Only", score: 2920000, album: "WHO!" },
    { title: "But I Like You (돌멩이)", score: 2880000, album: "WHO!" },
    { title: "Serenade", score: 2850000, album: "WHO!" },
    { title: "Fadeaway", score: 2960000, album: "GARBAGE TIME OST" },
  ],
  TWS: [
    { title: "Last Festival (마지막 축제)", score: 3220000, album: "Last Bell" },
    { title: "Highlight (너의 이름)", score: 3150000, album: "Last Bell" },
    { title: "Comma, (점)", score: 3100000, album: "Last Bell" },
    { title: "If I'm S, Can You Be My N? (내가 S면 넌 나의 N이 되어줘)", score: 3180000, album: "SUMMER BEAT!" },
    { title: "hey! hey!", score: 3150000, album: "SUMMER BEAT!" },
    { title: "Double Take", score: 3120000, album: "SUMMER BEAT!" },
    { title: "Keep On", score: 3050000, album: "SUMMER BEAT!" },
    { title: "Fireflies", score: 3000000, album: "SUMMER BEAT!" },
    { title: "You+Me=7942", score: 2980000, album: "SUMMER BEAT!" },
    { title: "plot twist (첫 만남은 계획대로 되지 않아)", score: 3100000, album: "Sparkling Blue" },
    { title: "unplugged boy", score: 3020000, album: "Sparkling Blue" },
    { title: "first hooky", score: 2980000, album: "Sparkling Blue" },
    { title: "BFF", score: 2950000, album: "Sparkling Blue" },
    { title: "Oh Mymy : 7s", score: 2900000, album: "Sparkling Blue" },
  ],
  ILLIT: [
    { title: "Cherish (My Love)", score: 3200000, album: "I'LL LIKE YOU" },
    { title: "IYKYK (If You Know You Know)", score: 3150000, album: "I'LL LIKE YOU" },
    { title: "Tick-Tack", score: 3100000, album: "I'LL LIKE YOU" },
    { title: "Pimple", score: 3050000, album: "I'LL LIKE YOU" },
    { title: "I'll Like You", score: 2980000, album: "I'LL LIKE YOU" },
    { title: "Magnetic", score: 3120000, album: "SUPER REAL ME" },
    { title: "Lucky Girl Syndrome", score: 3060000, album: "SUPER REAL ME" },
    { title: "Midnight Fiction", score: 2980000, album: "SUPER REAL ME" },
    { title: "My World", score: 2920000, album: "SUPER REAL ME" },
    { title: "Magnetic (Starlight Remix)", score: 3080000, album: "SUPER REAL ME" },
    { title: "Magnetic (R&B Remix)", score: 3050000, album: "SUPER REAL ME" },
  ],
};

let storedSongScores = readStorage(keys.songScores, {});
if (!storedSongScores || typeof storedSongScores !== "object" || Array.isArray(storedSongScores)) storedSongScores = {};

let songScores = Object.fromEntries(Object.keys(songCategories).map((group) => {
  const defaults = defaultSongScores[group] || [];
  const cached = Array.isArray(storedSongScores[group]) ? storedSongScores[group] : [];
  const mergedMap = new Map();
  for (const s of defaults) {
    if (s?.title) mergedMap.set(s.title.toLowerCase(), s);
  }
  for (const s of cached) {
    if (s && typeof s.title === "string" && Number.isFinite(s.score)) {
      mergedMap.set(s.title.toLowerCase(), {
        ...mergedMap.get(s.title.toLowerCase()),
        ...s,
      });
    }
  }
  const result = [...mergedMap.values()].sort((a, b) => (b.score || 0) - (a.score || 0) || a.title.localeCompare(b.title));
  return [group, result];
}));
const songScoreRequests = new Map();
const imageVariantRequests = new Map();

function cardById(id) {
  return cards.find((card) => card.id === id);
}

function cardMaxLevel(grade) {
  return 60;
}

function cardLevel(card) {
  const lvl = cardLevels[card?.id] ?? 1;
  return Math.max(1, Math.min(60, Math.round(Number(lvl) || 1)));
}

function calculatedStats(card, level = cardLevel(card)) {
  const curLvl = Math.max(1, Math.min(60, Math.round(Number(level) || 1)));
  const ratio = (curLvl - 1) / 59;
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

const memberSongKeywords = {
  // BTS
  "RM": ["trivia 承 : love", "intro : persona", "wild flower", "still life", "reflection", "ugh!", "respect", "stay"],
  "Jin": ["moon", "epiphany", "awake", "the astronaut", "running wild", "i'll be there", "super tuna", "jamais vu", "00:00", "zero o'clock", "stay"],
  "SUGA": ["trivia 轉 : seesaw", "first love", "daechwita", "haegeum", "people pt.2", "people", "polar night", "amygdala", "ugh!", "respect", "fly to my room"],
  "j-hope": ["trivia 起 : just dance", "mama", "boy meets evil", "arson", "more", "chicken noodle", "neuron", "on the street", "ugh!", "jamais vu", "fly to my room"],
  "Jimin": ["filter", "lie", "serendipity", "like crazy", "set me free", "letter", "who", "closer than this", "friends (친구)", "00:00", "zero o'clock", "fly to my room"],
  "V": ["inner child", "singularity", "stigma", "slow dancing", "love me again", "rainy days", "fri(end)s", "christmas tree", "sweet night", "friends (친구)", "blue & grey", "00:00", "zero o'clock", "fly to my room"],
  "Jungkook": ["euphoria", "my time", "begin", "seven", "standing next to you", "3d", "stay alive", "dreamers", "still with you", "stay", "jamais vu", "00:00", "zero o'clock"],

  // SEVENTEEN
  "S.COUPS": ["lalali", "water", "monster", "fire", "cheers", "change up", "check-in", "trauma", "sukyo"],
  "Wonwoo": ["lalali", "water", "monster", "fire", "check-in", "trauma", "bittersweet", "last night"],
  "Mingyu": ["lalali", "water", "monster", "fire", "check-in", "trauma", "bittersweet"],
  "Vernon": ["lalali", "water", "monster", "fire", "black eye", "lotto", "check-in", "trauma"],
  "Woozi": ["cheers to youth", "candy", "yawn", "dust", "second life", "pinwheel", "habit", "ruby", "simple", "cheers", "change up"],
  "Jeonghan": ["cheers to youth", "candy", "yawn", "dust", "second life", "pinwheel", "habit", "last night"],
  "Joshua": ["cheers to youth", "candy", "yawn", "dust", "second life", "pinwheel", "habit"],
  "DK": ["fighting", "7pm", "lunch", "cheers to youth", "candy", "yawn", "dust", "second life", "pinwheel", "habit"],
  "Seungkwan": ["fighting", "7pm", "lunch", "cheers to youth", "candy", "yawn", "dust", "second life", "pinwheel", "habit"],
  "Hoshi": ["fighting", "7pm", "lunch", "spell", "rain", "pang!", "swimming fool", "highlight", "spider", "cheers", "change up", "i don't understand but i luv u"],
  "Jun": ["spell", "rain", "pang!", "swimming fool", "highlight", "limbo", "silent boarding gate", "psycho", "i don't understand but i luv u"],
  "The8": ["spell", "rain", "pang!", "swimming fool", "highlight", "side by side", "dreams come true", "i don't understand but i luv u"],
  "Dino": ["spell", "rain", "pang!", "swimming fool", "highlight", "wait", "i don't understand but i luv u"],

  // TXT
  "Yeonjun": ["the killa", "ggum", "ghosting", "blockbuster"],
  "Soobin": ["quarter life", "thursday's child", "trust fund baby"],
  "Beomgyu": ["quarter life", "thursday's child", "trust fund baby", "maze in the mirror"],
  "Taehyun": ["the killa", "opening sequence"],
  "Huening Kai": ["the killa", "dear sputnik"],

  // ENHYPEN
  "Jay": ["lucifer", "fatal trouble", "criminal love", "one in a billion"],
  "Jake": ["lucifer", "fatal trouble", "criminal love", "one in a billion"],
  "Sunghoon": ["lucifer", "fatal trouble", "criminal love", "one in a billion"],
  "Jungwon": ["teeth", "fatal trouble", "criminal love", "one in a billion"],
  "Heeseung": ["teeth", "fatal trouble", "criminal love", "one in a billion"],
  "Sunoo": ["teeth", "fatal trouble", "criminal love", "one in a billion"],
  "NI-KI": ["teeth", "fatal trouble", "criminal love", "one in a billion"],

  // LE SSERAFIM
  "Yunjin": ["crazier", "raise y_our glass", "love you twice", "i ≠ doll", "blessing in disguise"],
  "Chaewon": ["crazier", "bambi"]
};

function getMemberSongRecommendations(songs, card) {
  if (!songs || songs.length === 0) return [];
  const memberName = card.name;
  const keywords = memberSongKeywords[memberName] || [];
  const matchedSongs = [];
  const usedTitles = new Set();

  if (keywords.length > 0) {
    for (const song of songs) {
      const lower = song.title.toLowerCase();
      if (keywords.some((kw) => lower.includes(kw.toLowerCase()))) {
        matchedSongs.push({ ...song, isMemberTrack: true });
        usedTitles.add(song.title.toLowerCase());
      }
    }
  }

  matchedSongs.sort((a, b) => b.score - a.score);
  const result = [...matchedSongs.slice(0, 3)];

  if (result.length < 3) {
    const sortedGroupSongs = [...songs].sort((a, b) => b.score - a.score);
    for (const s of sortedGroupSongs) {
      if (!usedTitles.has(s.title.toLowerCase())) {
        result.push({ ...s, isMemberTrack: false });
        usedTitles.add(s.title.toLowerCase());
        if (result.length >= 3) break;
      }
    }
  }

  return result.slice(0, 3);
}

function renderSongRecommendations(container, songs, card) {
  const recSongs = getMemberSongRecommendations(songs, card);
  const memberName = card.name;
  const group = card.group;
  const hasMemberTrack = recSongs.some((s) => s.isMemberTrack);

  container.innerHTML = `
    <div class="song-rec-header">
      <span class="song-rec-title">
        <span>🎯</span> Điểm cao cho <strong>${escapeHtml(memberName)}</strong>
      </span>
      <span class="song-rec-badge">${hasMemberTrack ? "Solo / Unit" : "Top Stage"}</span>
    </div>
    <p class="song-estimate-note">
      ${hasMemberTrack
        ? `Bài hát gắn liền với <strong>${escapeHtml(memberName)}</strong> có điểm EX Super Hard cao nhất:`
        : `Mốc điểm EX Super Hard cao nhất của ${escapeHtml(group)} tối ưu cho thẻ này:`}
    </p>
    ${recSongs.map((song, index) => {
      const songUrl = song.url || `https://rhythmhive.fandom.com/wiki/${encodeURIComponent(song.title.replace(/ /g, "_"))}`;
      return `
        <a class="song-result" href="${escapeHtml(songUrl)}" target="_blank" rel="noopener noreferrer" title="Xem bài hát trên Rhythm Hive Wiki">
          <span class="song-rank">${index + 1}</span>
          <span class="song-result-name">
            ${escapeHtml(song.title)}
            ${song.isMemberTrack ? `<span class="song-result-type-tag">Solo/Unit</span>` : ""}
          </span>
          <strong>${Number(song.score).toLocaleString("vi-VN")}</strong>
        </a>`;
    }).join("")}
  `;
}

function memberAliases(name) {
  const clean = normalizeTitle(name);
  const compact = compactTitle(name);
  const aliases = [clean, compact];
  if (clean === "s coups" || clean === "s.coups") aliases.push("scoups", "coups");
  if (clean === "j hope" || clean === "j-hope") aliases.push("jhope", "hoseok");
  if (clean === "suga") aliases.push("yoongi");
  if (clean === "rm") aliases.push("namjoon");
  if (clean === "v") aliases.push("taehyung");
  if (clean === "jin") aliases.push("seokjin");
  if (clean === "jungkook") aliases.push("jk");
  if (clean === "the8") aliases.push("the 8", "minghao");
  if (clean === "ni ki" || clean === "niki") aliases.push("ni-ki", "niki");
  if (clean === "huening kai") aliases.push("hueningkai", "huening");
  if (clean === "chaewon") aliases.push("kim chaewon");
  if (clean === "sakura") aliases.push("miyawaki sakura");
  if (clean === "yunjin") aliases.push("huh yunjin");
  if (clean === "kazuha") aliases.push("nakamura kazuha");
  if (clean === "eunchae") aliases.push("hong eunchae");
  return aliases;
}

async function loadFandomImages() {
  const availableGroups = [...new Set(cards.filter((card) => fandomCategories[card.group]).map((card) => card.group))];
  await Promise.all(availableGroups.map(async (group) => {
    const groupCards = cards.filter((card) => card.group === group);
    const unmatched = new Set(groupCards.filter((card) => !imageSources[card.id] || imageSources[card.id].url.includes("Special:FilePath")).map((card) => card.id));
    if (unmatched.size === 0) return;

    try {
      let continuation = {};
      let pages = 0;
      const selectedFiles = new Map();
      while (unmatched.size > 0 && pages < 6) {
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
          for (const id of unmatched) {
            const card = groupCards.find((c) => c.id === id);
            if (!card) continue;
            const aliases = memberAliases(card.name);
            const matchesMember = aliases.some((a) => normalized.includes(a) || compactTitle(withoutExtension).includes(compactTitle(a)));
            if (!matchesMember) continue;

            const themeToken = card.theme ? normalizeTitle(card.theme) : "";
            const matchesTheme = themeToken ? normalized.includes(themeToken) : true;
            if (matchesTheme) {
              selectedFiles.set(id, file.title);
              unmatched.delete(id);
            }
          }
        }
        continuation = result.continue || {};
        pages++;
        if (Object.keys(continuation).length === 0) break;
      }

      await Promise.all([...unmatched].map(async (id) => {
        const card = groupCards.find((entry) => entry.id === id);
        if (!card) return;
        try {
          const srsearch = card.theme ? `"${card.theme}" "${card.name}"` : `"${fandomCategories[group]}" "${card.name}"`;
          const result = await fetchFandomJson({
            action: "query",
            list: "search",
            srnamespace: "6",
            srsearch,
            srlimit: "15",
          });
          const candidates = (result.query?.search || []).filter((file) => {
            const title = file.title.replace(/^File:/, "").replace(/\.[^.]+$/, "");
            const aliases = memberAliases(card.name);
            return aliases.some((a) => normalizeTitle(title).includes(a) || compactTitle(title).includes(compactTitle(a)));
          });
          if (candidates[0]) selectedFiles.set(id, candidates[0].title);
        } catch (error) {
          console.warn("Không thể tìm ảnh cho thẻ:", error);
        }
      }));

      const titles = [...new Set(selectedFiles.values())];
      if (titles.length === 0) return;
      for (let i = 0; i < titles.length; i += 50) {
        const batch = titles.slice(i, i + 50);
        const result = await fetchFandomJson({
          action: "query",
          prop: "imageinfo",
          iiprop: "url",
          iiurlwidth: "640",
          titles: batch.join("|"),
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
      }
    } catch (error) {
      console.warn("Không thể tải ảnh từ danh mục Fandom:", error);
    }
  }));

  if (Object.keys(imageSources).length > 0) {
    writeStorage(keys.imageSources, imageSources);
    renderAll();
  }
}

function renderFilters() {
  const selectedGroup = elements.group.value;
  const selectedMember = elements.memberFilter?.value || "";
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

  // Member filter dropdown for chosen group
  if (selectedGroup && groupMembers[selectedGroup]) {
    const memList = groupMembers[selectedGroup];
    if (elements.memberFilterWrap) elements.memberFilterWrap.style.display = "";
    if (elements.memberFilter) {
      elements.memberFilter.innerHTML = `<option value="">Tất cả thành viên (${memList.length})</option>` +
        memList.map((m) => `<option value="${escapeHtml(m)}">${escapeHtml(m)}</option>`).join("");
      if (memList.includes(selectedMember)) elements.memberFilter.value = selectedMember;
    }
  } else {
    if (elements.memberFilterWrap) elements.memberFilterWrap.style.display = "none";
    if (elements.memberFilter) {
      elements.memberFilter.innerHTML = '<option value="">Tất cả thành viên</option>';
      elements.memberFilter.value = "";
    }
  }
}

let currentCardSort = "type-grade";

function renderCards() {
  const query = elements.search.value.trim().toLocaleLowerCase();
  const group = elements.group.value;
  const member = elements.memberFilter?.value || "";
  const level = elements.levelFilter.value;
  const grade = elements.grade.value;
  const type = elements.type.value;
  const filtered = cards.filter((card) => {
    const searchable = `${card.name} ${card.group} ${card.grade ?? card.rarity} ${card.type ?? ""} ${card.theme ?? ""}`.toLocaleLowerCase();
    return (!query || searchable.includes(query)) &&
      (!group || card.group === group) &&
      (!member || card.name.toLowerCase() === member.toLowerCase()) &&
      (!level || cardLevel(card) === Number(level)) &&
      (!grade || (card.grade ?? card.rarity) === grade) &&
      (!type || card.type === type) &&
      (!elements.favoritesOnly.checked || Object.hasOwn(favorites, card.id));
  });
  elements.cardCount.textContent = filtered.length;
  elements.resultLabel.textContent = filtered.length === cards.length ? "Tất cả thẻ" : `Hiển thị ${filtered.length} / ${cards.length} thẻ`;
  const tabCardCount = document.querySelector("#tab-card-count");
  if (tabCardCount) tabCardCount.textContent = filtered.length;
  elements.empty.hidden = filtered.length > 0;
  elements.grid.hidden = filtered.length === 0;

  const groupOrder = Object.keys(groupMembers);
  const typeOrder = ["live", "fx", "special", "season", "album"];

  const sortedCards = [...filtered].sort((a, b) => {
    const grpDiff = (groupOrder.indexOf(a.group) < 0 ? groupOrder.length : groupOrder.indexOf(a.group)) -
                    (groupOrder.indexOf(b.group) < 0 ? groupOrder.length : groupOrder.indexOf(b.group));
    if (grpDiff !== 0) return grpDiff;

    if (currentCardSort === "grade") {
      return gradeOrder.indexOf(a.grade ?? a.rarity) - gradeOrder.indexOf(b.grade ?? b.rarity) ||
             (typeOrder.indexOf(a.type) - typeOrder.indexOf(b.type)) ||
             a.name.localeCompare(b.name);
    }
    if (currentCardSort === "member") {
      return a.name.localeCompare(b.name) ||
             (typeOrder.indexOf(a.type) - typeOrder.indexOf(b.type));
    }
    if (currentCardSort === "power-desc") {
      return cardPower(b, cardLevel(b)) - cardPower(a, cardLevel(a));
    }
    // Default: type-grade (Live UR -> Album S)
    return (typeOrder.indexOf(a.type) - typeOrder.indexOf(b.type)) ||
           gradeOrder.indexOf(a.grade ?? a.rarity) - gradeOrder.indexOf(b.grade ?? b.rarity) ||
           a.name.localeCompare(b.name);
  });

  const groupedCards = new Map();
  for (const card of sortedCards) {
    if (!groupedCards.has(card.group)) groupedCards.set(card.group, []);
    groupedCards.get(card.group).push(card);
  }

  elements.grid.innerHTML = [...groupedCards].map(([group, groupCards]) => `
    <section class="group-section" aria-label="${escapeHtml(group)} — ${groupCards.length} thẻ">
      <header class="group-heading">
        <div>
          <p class="eyebrow">${escapeHtml(groupInfo[group]?.fullName || group)}</p>
          <h3>${fandomEmojis[group] || "✨"} ${escapeHtml(group)} <small style="font-size:14px;opacity:0.75;font-weight:400">· Fandom: ${escapeHtml(groupInfo[group]?.fandom || "—")}</small></h3>
        </div>
        <span class="group-card-count">${groupCards.length} thẻ</span>
      </header>
      <div class="group-card-grid">${groupCards.map((card, index) => {
        const grade = card.grade ?? card.rarity ?? "UR";
        const level = cardLevel(card);
        const stats = calculatedStats(card, level);
        const sourceUrl = card.image || imageSources[card.id]?.url || "";
        const isFavorite = Object.hasOwn(favorites, card.id);
        const rating = Number(favorites[card.id]) || 0;
        const targetTeam = getGroupTeam(card.group);
        const selected = targetTeam.includes(card.id);
        const type = cardTypes.find((entry) => entry.id === card.type);
        const typeStyle = type ? `--type-color:${type.color}` : "--type-color:#ff3b4e";
        return `
          <article class="character-card has-card-image grade-${grade.toLowerCase()} type-${card.type || "unknown"}" style="${typeStyle}" data-id="${escapeHtml(card.id)}" data-name="${escapeHtml(card.name)}" data-group="${escapeHtml(card.group)}">
            <div class="card-visual" style="--card-bg:${palette[index % palette.length]}">
              <span class="grade-badge grade-badge-${grade.toLowerCase()}" title="Cấp thẻ ${grade}">${escapeHtml(grade)}</span>
              <span class="type-badge type-badge-${card.type || 'unknown'}" title="Loại thẻ: ${type ? type.name : ""} · Chủ đề: ${card.theme || ""}">${type ? `${type.icon || ""} ${escapeHtml(type.shortName || type.name)}` : ""}${card.theme ? ` · ${escapeHtml(card.theme)}` : ""}</span>
              <button class="favorite-button${isFavorite ? " is-favorite" : ""}" type="button" data-action="favorite" data-id="${escapeHtml(card.id)}" aria-label="${isFavorite ? "Bỏ yêu thích" : "Thêm yêu thích"} ${escapeHtml(card.name)}" aria-pressed="${isFavorite}">♥</button>
              ${sourceUrl ? `
                <a class="card-photo-link" href="${escapeHtml(sourceUrl)}" target="_blank" rel="noopener noreferrer" title="Xem ảnh thẻ ${escapeHtml(card.name)} (${grade} · ${card.theme || type?.name || ""})">
                  <img class="card-photo" src="${escapeHtml(sourceUrl)}" alt="Ảnh thẻ ${escapeHtml(card.name)}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null; this.closest('.character-card')?.classList.remove('has-card-image'); this.parentElement.outerHTML='<span class=\\'avatar-mark\\'>${escapeHtml(initials(card.name))}</span>';">
                </a>` : `<span class="avatar-mark">${escapeHtml(initials(card.name))}</span>`}
              <span class="card-group">${escapeHtml(card.group)}</span>
            </div>
            <div class="card-body">
              <div class="card-title-row">
                <h3 class="card-title" title="Xem hồ sơ chi tiết của ${escapeHtml(card.name)}">${escapeHtml(card.name)}</h3>
                <span class="card-max-lvl-tag card-tag-${card.type || 'live'}">Cấp ${escapeHtml(grade)} · Lv.${level}</span>
              </div>
              <div class="card-subtitle">
                <span class="card-group-name">${fandomEmojis[card.group] || "✨"} ${escapeHtml(card.group)}</span>
                <span class="card-theme-tag theme-tag-${card.type || 'unknown'}" title="Loại thẻ: ${type ? type.name : ""} · Chủ đề: ${card.theme || ""}">${type ? `${type.icon || ""} ${escapeHtml(type.shortName || type.name)}` : "Thẻ"}${card.theme ? ` · ${escapeHtml(card.theme)}` : ""}</span>
              </div>
              <div class="card-meta-row">
                <div class="rating" aria-label="Đánh giá ${rating} trên 5">
                  ${[1, 2, 3, 4, 5].map((star) => `<button type="button" data-action="rate" data-id="${escapeHtml(card.id)}" data-rating="${star}" class="${star <= rating ? "active" : ""}" aria-label="Đánh giá ${star} sao" aria-pressed="${star === rating}">★</button>`).join("")}
                </div>
                <span class="card-stat-total" title="Tổng sức mạnh hiện tại (PWR)">${cardPower(card, level).toLocaleString("vi-VN")} PWR</span>
              </div>
              <div class="card-stats">
                ${statNames.map(([key, label]) => `<div class="stat-item"><span>${label}</span><strong>${stats[key].toLocaleString("vi-VN")}</strong></div>`).join("")}
              </div>
              <div class="song-recommendation">
                <button type="button" class="song-recommend-button" data-action="songs" data-id="${escapeHtml(card.id)}">♫ Bài điểm cao của ${escapeHtml(card.name)}</button>
                <div class="song-results" data-results-for="${escapeHtml(card.id)}" hidden></div>
              </div>
              <div class="card-footer">
                <label class="card-level-control" title="Điều chỉnh level từ 1 đến 60">LV <input class="card-level-input" type="number" min="1" max="60" value="${level}" data-action="card-level" data-id="${escapeHtml(card.id)}" aria-label="Level ${escapeHtml(card.name)}"> / 60</label>
                <button type="button" class="add-button${selected ? " is-added" : ""}" data-action="team" data-id="${escapeHtml(card.id)}">${selected ? "✓ Đã vào đội" : "＋ Đội hình"}</button>
              </div>
            </div>
          </article>`;
      }).join("")}</div>
    </section>`).join("");
}

function renderTeam() {
  const group = selectedStudioGroup || "BTS";
  const members = groupMembers[group] || [];
  const team = getGroupTeam(group);
  currentTeam = team;
  const teamCards = team.map((id) => id ? cardById(id) : null);
  const active = teamCards.filter(Boolean);
  const total = active.reduce((sum, card) => sum + cardPower(card, cardLevel(card)), 0);

  // Sync sidebar group selector
  const sidebarGroupSelect = document.querySelector("#sidebar-group-select");
  if (sidebarGroupSelect) {
    sidebarGroupSelect.innerHTML = ALL_GROUPS.map((g) => {
      const gActive = (groupTeams[g] || []).filter(Boolean).length;
      const gTotal = groupMembers[g]?.length || 5;
      return `<option value="${escapeHtml(g)}" ${g === group ? "selected" : ""}>${fandomEmojis[g] || "✨"} ${escapeHtml(g)} (${gActive}/${gTotal})</option>`;
    }).join("");
    sidebarGroupSelect.value = group;
  }

  elements.teamCount.textContent = `${active.length}/${members.length}`;
  const fandomStr = groupInfo[group]?.fandom ? ` · Fandom: ${groupInfo[group].fandom} ${fandomEmojis[group] || "✨"}` : "";
  elements.teamGroup.textContent = `${group}${fandomStr}`;
  elements.teamGroup.classList.add("has-group");
  elements.teamTotal.textContent = total.toLocaleString("vi-VN");

  const tabTeamCount = document.querySelector("#tab-team-count");
  if (tabTeamCount) tabTeamCount.textContent = `${active.length}/${members.length}`;

  const totalVocal = active.reduce((sum, card) => sum + calculatedStats(card, cardLevel(card)).vocal, 0);
  const totalDance = active.reduce((sum, card) => sum + calculatedStats(card, cardLevel(card)).dance, 0);
  const totalRap = active.reduce((sum, card) => sum + calculatedStats(card, cardLevel(card)).rap, 0);
  const totalCharm = active.reduce((sum, card) => sum + calculatedStats(card, cardLevel(card)).charm, 0);

  const teamVocalEl = document.querySelector("#team-vocal");
  if (teamVocalEl) teamVocalEl.textContent = totalVocal.toLocaleString("vi-VN");
  const teamDanceEl = document.querySelector("#team-dance");
  if (teamDanceEl) teamDanceEl.textContent = totalDance.toLocaleString("vi-VN");
  const teamRapEl = document.querySelector("#team-rap");
  if (teamRapEl) teamRapEl.textContent = totalRap.toLocaleString("vi-VN");
  const teamCharmEl = document.querySelector("#team-charm");
  if (teamCharmEl) teamCharmEl.textContent = totalCharm.toLocaleString("vi-VN");

  elements.teamSlots.innerHTML = members.map((memberName, index) => {
    const card = teamCards[index];
    if (card) {
      const level = cardLevel(card);
      const pwr = cardPower(card, level);
      const grade = card.grade ?? card.rarity;
      const type = cardTypes.find((t) => t.id === card.type);
      return `
        <div class="team-slot" data-id="${escapeHtml(card.id)}">
          <span class="slot-avatar">${escapeHtml(initials(card.name))}</span>
          <span class="slot-copy">
            <strong>${escapeHtml(card.name)} <small style="color:#ffd880">(${escapeHtml(memberName)})</small></strong>
            <span><b class="grade-text-${grade.toLowerCase()}">${escapeHtml(grade)}</b> · ${type ? escapeHtml(type.name) : "Thẻ"}${card.theme ? ` (${escapeHtml(card.theme)})` : ""} · LV ${level}/60 · <b>${pwr.toLocaleString("vi-VN")} PWR</b></span>
          </span>
          <button type="button" class="remove-slot" data-action="remove-slot" data-index="${index}" aria-label="Xóa ${escapeHtml(card.name)} khỏi đội hình">×</button>
        </div>`;
    }
    return `<div class="team-slot empty-slot" data-slot-index="${index}">Vị trí ${index + 1} · ${escapeHtml(memberName)} (Trống)</div>`;
  }).join("");

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
  renderLineupStudio();
}

function updateLevel(value) {
  const val = Math.max(1, Math.min(60, Math.round(Number(value) || 1)));
  currentLevel = val;
  elements.levelInput.value = val;
  elements.levelRange.value = val;
  writeStorage(keys.level, val);
  for (const card of cards) {
    cardLevels[card.id] = val;
  }
  writeStorage(keys.cardLevels, cardLevels);
  renderCards();
  renderTeam();
}

function updateCardLevel(id, value) {
  const card = cardById(id);
  if (!card) return;
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
  card.type = value || null;
  if (writeStorage(keys.cards, cards)) {
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

  const group = card.group;
  selectedStudioGroup = group;
  const team = getGroupTeam(group);
  const members = groupMembers[group] || [];
  const memberIndex = members.findIndex((m) => m.toLowerCase() === card.name.toLowerCase());

  const existingIndex = team.indexOf(id);
  if (existingIndex >= 0) {
    team[existingIndex] = null;
    saveGroupTeams();
    currentTeam = team;
    renderAll();
    showNotice(`Đã gỡ thẻ ${card.name} khỏi đội hình ${group}.`);
    return;
  }

  // If idol has a designated member slot
  if (memberIndex >= 0) {
    team[memberIndex] = id;
  } else {
    const freeSlot = team.indexOf(null);
    if (freeSlot >= 0) {
      team[freeSlot] = id;
    } else {
      team[0] = id;
    }
  }

  saveGroupTeams();
  currentTeam = team;
  renderAll();
  showNotice(`Đã thêm ${card.name} vào đội hình ${group}!`);
}

function saveBuild() {
  const name = elements.buildName.value.trim();
  if (!name) {
    showNotice("Hãy nhập tên cho đội hình trước khi lưu.");
    elements.buildName.focus();
    return;
  }
  const group = selectedStudioGroup || "BTS";
  const team = getGroupTeam(group);
  if (!team.some(Boolean)) {
    showNotice(`Hãy thêm ít nhất một thẻ vào đội hình ${group} trước khi lưu.`);
    return;
  }
  const teamLevels = Object.fromEntries(team.filter(Boolean).map((id) => [id, cardLevels[id] ?? 1]));
  builds.unshift({ id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, name, group, team: [...team], levels: teamLevels, level: currentLevel });
  if (writeStorage(keys.builds, builds)) {
    elements.buildName.value = "";
    showNotice(`Đã lưu đội hình "${name}" cho nhóm ${group}.`);
    renderTeam();
  } else {
    builds.shift();
  }
}

elements.search.addEventListener("input", renderCards);
elements.group.addEventListener("change", () => {
  renderFilters();
  renderCards();
});
elements.memberFilter?.addEventListener("change", renderCards);
elements.levelFilter.addEventListener("change", renderCards);
elements.grade.addEventListener("change", renderCards);
elements.type.addEventListener("change", renderCards);
elements.favoritesOnly.addEventListener("change", renderCards);
document.querySelector("#reset-filters-btn")?.addEventListener("click", () => {
  elements.search.value = "";
  elements.group.value = "";
  if (elements.memberFilter) elements.memberFilter.value = "";
  elements.levelFilter.value = "";
  elements.grade.value = "";
  elements.type.value = "";
  elements.favoritesOnly.checked = false;
  renderFilters();
  renderCards();
});
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
  const fandomBadge = tooltip.querySelector(".tooltip-fandom-badge");
  const fandomEmoji = fandomEmojis[group] || "✨";
  if (fandomBadge) {
    if (profile.fandom) {
      fandomBadge.textContent = `${fandomEmoji} ${profile.fandom}`;
      fandomBadge.hidden = false;
    } else {
      fandomBadge.hidden = true;
    }
  }
  tooltip.querySelector(".tooltip-debut-badge").textContent = profile.debut ? `Debut: ${profile.debut}` : "";
  tooltip.querySelector(".tooltip-member-name").textContent = name;
  tooltip.querySelector(".tooltip-real-name").textContent = profile.realName || name;

  // Basic info fields
  tooltip.querySelector(".tooltip-birth").textContent = profile.birthDate || "Đang cập nhật";
  tooltip.querySelector(".tooltip-zodiac").textContent = profile.zodiac || "—";
  tooltip.querySelector(".tooltip-nationality").textContent = profile.nationality || "—";
  tooltip.querySelector(".tooltip-position").textContent = profile.position || "Thành viên";
  tooltip.querySelector(".tooltip-agency").textContent = profile.agency || "HYBE";
  tooltip.querySelector(".tooltip-fandom").textContent = profile.fandom ? `${profile.fandom} ${fandomEmoji}` : "—";
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
  const tipWidth = tooltip.offsetWidth || 440;
  const tipHeight = tooltip.offsetHeight || 420;
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
  const titleTrigger = event.target.closest(".card-title");
  if (titleTrigger) {
    const cardElement = titleTrigger.closest(".character-card");
    const id = cardElement?.dataset.id;
    if (id && cardElement) {
      if (isTooltipPinned && activeTooltipCardId === id) {
        hideMemberTooltip(true);
      } else {
        activeTooltipCardId = id;
        showMemberTooltip(id, cardElement, true);
      }
      return;
    }
  }

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
    const cardEl = button.closest(".character-card");
    const results = cardEl?.querySelector(".song-results");
    if (!results) return;

    const card = cardById(id);
    const isCurrentlyOpen = !results.hidden;

    // 1. Accordion: Close ALL other open song recommendations so only this card is visible
    document.querySelectorAll(".song-results").forEach((res) => {
      res.hidden = true;
    });
    document.querySelectorAll('.song-recommend-button[data-action="songs"]').forEach((btn) => {
      const cId = btn.dataset.id;
      const c = cardById(cId);
      btn.textContent = c ? `♫ Bài điểm cao của ${c.name}` : "♫ Bài điểm cao cùng nhóm";
      btn.classList.remove("is-active");
      btn.disabled = false;
    });

    if (isCurrentlyOpen) {
      return;
    }

    // 2. Open only this idol's recommendation
    results.hidden = false;
    button.classList.add("is-active");
    button.disabled = true;
    button.textContent = "Đang tra bảng điểm…";

    loadGroupSongScores(card.group).then((songs) => {
      renderSongRecommendations(results, songs, card);
      button.disabled = false;
      button.textContent = `Ẩn gợi ý (${escapeHtml(card.name)})`;
    }).catch((error) => {
      console.error(`Không thể tải bảng điểm bài hát cho ${card.group}.`, error);
      const fallback = defaultSongScores[card.group] || [];
      if (fallback.length > 0) {
        renderSongRecommendations(results, fallback, card);
        button.disabled = false;
        button.textContent = `Ẩn gợi ý (${escapeHtml(card.name)})`;
      } else {
        results.textContent = "Không tải được dữ liệu bài hát từ Wiki. Hãy thử lại khi có kết nối mạng.";
        button.disabled = false;
        button.textContent = "Thử tải lại gợi ý";
      }
    });
  }
});

elements.teamSlots.addEventListener("click", (event) => {
  const button = event.target.closest('button[data-action="remove-slot"]');
  if (button) {
    const idx = Number(button.dataset.index);
    const team = getGroupTeam(selectedStudioGroup);
    team[idx] = null;
    saveGroupTeams();
    currentTeam = team;
    renderAll();
    return;
  }

  const slotElement = event.target.closest(".team-slot[data-id]");
  if (slotElement) {
    const id = slotElement.dataset.id;
    if (id) {
      if (isTooltipPinned && activeTooltipCardId === id) {
        hideMemberTooltip(true);
      } else {
        activeTooltipCardId = id;
        showMemberTooltip(id, slotElement, true);
      }
    }
  }
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
    if (!elements.memberTooltip?.contains(event.target) &&
        !event.target.closest('.card-title') &&
        !event.target.closest('.team-slot[data-id]') &&
        !event.target.closest('button[data-action="card-profile"]')) {
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
    const loadGroup = firstSavedCard?.group || build.group || "BTS";
    selectedStudioGroup = loadGroup;
    const count = getGroupMemberCount(loadGroup);
    let skippedCards = false;
    const newTeam = Array.from({ length: count }, (_, slot) => {
      const id = savedIds[slot]?.id ?? savedIds[slot];
      const card = cardById(id);
      if (card && card.group === loadGroup) return card.id;
      if (card) skippedCards = true;
      return null;
    });
    groupTeams[loadGroup] = newTeam;
    saveGroupTeams();
    currentTeam = newTeam;
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
      ? `Đã mở đội hình "${build.name}" (${loadGroup}) và bỏ qua thẻ khác nhóm để giữ đội hình đồng nhất.`
      : `Đã mở đội hình "${build.name}" (${loadGroup}).`);
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

/* ============================================================
   Tab Navigation & Multi-Tab Features
   ============================================================ */
function switchTab(tabName) {
  currentTab = tabName;
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    const isActive = btn.dataset.tab === tabName;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-selected", String(isActive));
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    const isActive = panel.id === `tab-panel-${tabName}`;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });

  if (tabName === "cards") {
    renderCards();
  } else if (tabName === "lineup") {
    renderLineupStudio();
  } else if (tabName === "songs") {
    renderSongsTab();
  } else if (tabName === "idols") {
    renderIdolsTab();
  }
}

function autoOptimizeLineup(targetGroup) {
  const group = targetGroup || selectedStudioGroup || "BTS";
  selectedStudioGroup = group;
  const members = groupMembers[group] || [];
  if (members.length === 0) return;

  const groupCards = cards.filter((c) => c.group === group);
  if (groupCards.length === 0) {
    showNotice(`Không tìm thấy thẻ nào của nhóm ${group}.`);
    return;
  }

  const team = Array(members.length).fill(null);
  members.forEach((memberName, index) => {
    const memberCards = groupCards.filter((c) => c.name.toLowerCase() === memberName.toLowerCase());
    if (memberCards.length > 0) {
      memberCards.sort((a, b) => cardPower(b, cardLevel(b)) - cardPower(a, cardLevel(a)));
      team[index] = memberCards[0].id;
    }
  });

  groupTeams[group] = team;
  saveGroupTeams();
  currentTeam = team;
  renderAll();
  showNotice(`Đã tự động chọn đầy đủ ${members.length} thẻ mạnh nhất cho đội hình ${group}!`);
}

function clearLineup(targetGroup) {
  const group = targetGroup || selectedStudioGroup || "BTS";
  selectedStudioGroup = group;
  groupTeams[group] = Array(getGroupMemberCount(group)).fill(null);
  saveGroupTeams();
  currentTeam = groupTeams[group];
  renderAll();
  showNotice(`Đã làm mới đội hình của nhóm ${group}.`);
}

function renderLineupStudio() {
  const slotsContainer = document.querySelector("#studio-slots");
  if (!slotsContainer) return;

  if (!selectedStudioGroup || !ALL_GROUPS.includes(selectedStudioGroup)) {
    selectedStudioGroup = "BTS";
  }

  // 1. Render Group Tabs / Pills
  const studioTabs = document.querySelector("#studio-group-tabs");
  if (studioTabs) {
    studioTabs.innerHTML = ALL_GROUPS.map((g) => {
      const icon = fandomEmojis[g] || "✨";
      const count = groupMembers[g]?.length || 5;
      const isActive = g === selectedStudioGroup;
      return `<button type="button" class="group-pill${isActive ? " is-active" : ""}" data-studio-group="${escapeHtml(g)}">
        ${icon} ${escapeHtml(g)} <small style="opacity:0.75">(${count} TV)</small>
      </button>`;
    }).join("");
  }

  // 2. Sync Studio Group Dropdown Select
  const groupSelect = document.querySelector("#studio-group-select");
  if (groupSelect) {
    groupSelect.innerHTML = ALL_GROUPS.map((g) => {
      const fName = groupInfo[g]?.fandom ? ` · ${fandomEmojis[g] || "✨"} ${groupInfo[g].fandom}` : "";
      const count = groupMembers[g]?.length || 5;
      return `<option value="${escapeHtml(g)}" ${g === selectedStudioGroup ? "selected" : ""}>${escapeHtml(g)}${fName} (${count} thành viên)</option>`;
    }).join("");
    groupSelect.value = selectedStudioGroup;
  }

  // 3. Load active team for selectedStudioGroup
  const team = getGroupTeam(selectedStudioGroup);
  currentTeam = team;
  const members = groupMembers[selectedStudioGroup] || [];
  const teamCards = team.map((id) => id ? cardById(id) : null);
  const active = teamCards.filter(Boolean);
  const totalPower = active.reduce((sum, card) => sum + cardPower(card, cardLevel(card)), 0);

  // 4. Update Power Banner
  const totalEl = document.querySelector("#studio-total-power");
  if (totalEl) totalEl.textContent = totalPower.toLocaleString("vi-VN");

  const badgeEl = document.querySelector("#studio-team-group-badge");
  if (badgeEl) {
    const fStr = groupInfo[selectedStudioGroup]?.fandom ? ` · Fandom: ${groupInfo[selectedStudioGroup].fandom} ${fandomEmojis[selectedStudioGroup] || "✨"}` : "";
    badgeEl.textContent = `Nhóm: ${selectedStudioGroup}${fStr} (${active.length}/${members.length})`;
  }

  // 5. Calculate Stats
  const totalVocal = active.reduce((sum, card) => sum + calculatedStats(card, cardLevel(card)).vocal, 0);
  const totalDance = active.reduce((sum, card) => sum + calculatedStats(card, cardLevel(card)).dance, 0);
  const totalRap = active.reduce((sum, card) => sum + calculatedStats(card, cardLevel(card)).rap, 0);
  const totalCharm = active.reduce((sum, card) => sum + calculatedStats(card, cardLevel(card)).charm, 0);

  const vEl = document.querySelector("#studio-vocal");
  if (vEl) vEl.textContent = totalVocal.toLocaleString("vi-VN");
  const dEl = document.querySelector("#studio-dance");
  if (dEl) dEl.textContent = totalDance.toLocaleString("vi-VN");
  const rEl = document.querySelector("#studio-rap");
  if (rEl) rEl.textContent = totalRap.toLocaleString("vi-VN");
  const cEl = document.querySelector("#studio-charm");
  if (cEl) cEl.textContent = totalCharm.toLocaleString("vi-VN");

  const maxStat = Math.max(1, totalVocal, totalDance, totalRap, totalCharm);
  const vBar = document.querySelector("#studio-vocal-bar");
  if (vBar) vBar.style.width = `${Math.round((totalVocal / maxStat) * 100)}%`;
  const dBar = document.querySelector("#studio-dance-bar");
  if (dBar) dBar.style.width = `${Math.round((totalDance / maxStat) * 100)}%`;
  const rBar = document.querySelector("#studio-rap-bar");
  if (rBar) rBar.style.width = `${Math.round((totalRap / maxStat) * 100)}%`;
  const cBar = document.querySelector("#studio-charm-bar");
  if (cBar) cBar.style.width = `${Math.round((totalCharm / maxStat) * 100)}%`;

  // 6. Render Stage Slots
  slotsContainer.innerHTML = members.map((memberName, index) => {
    const card = teamCards[index];
    if (!card) {
      return `
        <div class="studio-slot-card is-empty" data-slot-index="${index}" data-member="${escapeHtml(memberName)}">
          <span class="slot-member-target">VỊ TRÍ ${index + 1}</span>
          <strong class="empty-slot-member">${escapeHtml(memberName)}</strong>
          <span class="empty-slot-label"><small style="color:var(--muted);font-weight:400">Trống (+ Chọn thẻ)</small></span>
        </div>`;
    }
    const level = cardLevel(card);
    const pwr = cardPower(card, level);
    const grade = card.grade ?? card.rarity;
    const type = cardTypes.find((t) => t.id === card.type);
    const source = cardImageSource(card, grade);
    return `
      <div class="studio-slot-card is-filled" data-id="${escapeHtml(card.id)}">
        <span class="slot-member-target">VỊ TRÍ ${index + 1} · ${escapeHtml(memberName)}</span>
        <div class="studio-slot-img-wrap">
          ${source?.url ? `<img class="studio-slot-img" src="${escapeHtml(source.url)}" alt="${escapeHtml(card.name)}">` : `<span class="studio-slot-mark">${escapeHtml(initials(card.name))}</span>`}
          <div class="studio-slot-badges">
            <span class="grade-badge grade-badge-${grade.toLowerCase()}">${escapeHtml(grade)}</span>
            <span class="type-badge">${type ? escapeHtml(type.name) : ""}${card.theme ? ` · ${escapeHtml(card.theme)}` : ""}</span>
          </div>
          <button type="button" class="studio-slot-remove" data-action="remove-slot" data-index="${index}" title="Xóa khỏi đội" aria-label="Xóa ${escapeHtml(card.name)}">×</button>
        </div>
        <div class="studio-slot-info">
          <h4 class="studio-slot-name" title="${escapeHtml(card.name)}">${escapeHtml(card.name)}</h4>
          <span class="studio-slot-meta"><b class="grade-text-${grade.toLowerCase()}">${escapeHtml(grade)}</b> · ${escapeHtml(card.group)} · LV ${level}/60</span>
          <strong class="studio-slot-pwr">${pwr.toLocaleString("vi-VN")} PWR</strong>
        </div>
      </div>`;
  }).join("");

  // 7. Render Tray of Available Cards for selectedStudioGroup
  const trayGroupNameEl = document.querySelector("#studio-tray-group-name");
  if (trayGroupNameEl) trayGroupNameEl.textContent = selectedStudioGroup;

  const groupCards = cards.filter((c) => c.group === selectedStudioGroup);
  const trayCountEl = document.querySelector("#studio-tray-count");
  if (trayCountEl) trayCountEl.textContent = `${groupCards.length} thẻ`;

  const trayGrid = document.querySelector("#studio-tray-grid");
  if (trayGrid) {
    if (groupCards.length === 0) {
      trayGrid.innerHTML = '<p class="saved-empty">Chưa có thẻ nào cho nhóm này.</p>';
    } else {
      trayGrid.innerHTML = groupCards.map((card) => {
        const isInTeam = team.includes(card.id);
        const level = cardLevel(card);
        const pwr = cardPower(card, level);
        const grade = card.grade ?? card.rarity;
        const type = cardTypes.find((t) => t.id === card.type);
        const source = cardImageSource(card, grade);
        return `
          <div class="studio-tray-card${isInTeam ? " is-in-team" : ""}">
            <div class="tray-card-thumb">
              ${source?.url ? `<img src="${escapeHtml(source.url)}" alt="${escapeHtml(card.name)}">` : `<span>${escapeHtml(initials(card.name))}</span>`}
            </div>
            <div class="tray-card-info">
              <strong class="tray-card-name">${escapeHtml(card.name)}</strong>
              <div class="tray-card-sub"><b class="grade-text-${grade.toLowerCase()}">${escapeHtml(grade)}</b> · ${card.theme ? escapeHtml(card.theme) : (type ? escapeHtml(type.name) : "Thẻ")} · LV ${level}/60 · <b>${pwr.toLocaleString("vi-VN")} PWR</b></div>
            </div>
            <button type="button" class="tray-add-btn" data-action="team" data-id="${escapeHtml(card.id)}">
              ${isInTeam ? "Bỏ" : "+ Thêm"}
            </button>
          </div>`;
      }).join("");
    }
  }
}

const albumReleaseDates = {
  // BTS
  "2 COOL 4 SKOOL": "2013-06-12",
  "O!RUL8,2?": "2013-09-11",
  "Skool Luv Affair": "2014-02-12",
  "DARK&WILD": "2014-08-19",
  "화양연화 pt.1": "2015-04-29",
  "화양연화 pt.2": "2015-11-30",
  "화양연화 Young Forever": "2016-05-02",
  "Wings": "2016-10-10",
  "YOU NEVER WALK ALONE": "2017-02-13",
  "LOVE YOURSELF 承 'Her'": "2017-09-18",
  "LOVE YOURSELF 轉 'Tear'": "2018-05-18",
  "LOVE YOURSELF 結 'Answer'": "2018-08-24",
  "MAP OF THE SOUL : PERSONA": "2019-04-12",
  "MAP OF THE SOUL : 7": "2020-02-21",
  "Dynamite": "2020-08-21",
  "BE": "2020-11-20",
  "Butter": "2021-05-21",
  "Permission to Dance": "2021-07-09",
  "Proof": "2022-06-10",
  "Take Two": "2023-06-09",
  "Happy": "2024-11-15",
  "MUSE": "2024-07-19",
  "HOPE ON THE STREET VOL.1": "2024-03-29",
  "FRI(END)S": "2024-03-15",
  "GOLDEN": "2023-11-03",
  "Layover": "2023-09-08",
  "D-DAY": "2023-04-21",
  "FACE": "2023-03-24",
  "on the street": "2023-03-03",
  "Indigo": "2022-12-02",
  "The Astronaut": "2022-10-28",
  "Jack In The Box": "2022-07-15",
  "Super Tuna": "2021-12-04",
  "D-2": "2020-05-22",

  // TXT
  "The Dream Chapter: STAR": "2019-03-04",
  "The Dream Chapter: MAGIC": "2019-10-21",
  "The Dream Chapter: ETERNITY": "2020-05-18",
  "minisode1: Blue Hour": "2020-10-26",
  "The Chaos Chapter: FREEZE": "2021-05-31",
  "The Chaos Chapter: FIGHT OR ESCAPE": "2021-08-17",
  "minisode 2: Thursday's Child": "2022-05-09",
  "The Name Chapter: TEMPTATION": "2023-01-27",
  "The Name Chapter: FREEFALL": "2023-10-13",
  "minisode 3: TOMORROW": "2024-04-01",
  "The Star Chapter: SANCTUARY": "2024-11-04",

  // ENHYPEN
  "BORDER : DAY ONE": "2020-11-30",
  "BORDER : CARNIVAL": "2021-04-26",
  "DIMENSION : DILEMMA": "2021-10-12",
  "DIMENSION : ANSWER": "2022-01-10",
  "MANIFESTO : DAY 1": "2022-07-04",
  "DARK BLOOD": "2023-05-22",
  "ORANGE BLOOD": "2023-11-17",
  "MEMORABILIA": "2024-05-13",
  "ROMANCE : UNTOLD": "2024-07-12",
  "ROMANCE : UNTOLD -daydream-": "2024-11-11",

  // SEVENTEEN
  "17 CARAT": "2015-05-29",
  "BOYS BE": "2015-09-10",
  "FIRST 'LOVE&LETTER'": "2016-04-25",
  "Love & Letter Repackage": "2016-07-04",
  "Going Seventeen": "2016-12-05",
  "Al1": "2017-05-22",
  "TEEN, AGE": "2017-11-06",
  "DIRECTOR'S CUT": "2018-02-05",
  "YOU MAKE MY DAY": "2018-07-16",
  "YOU MADE MY DAWN": "2019-01-21",
  "An Ode": "2019-09-16",
  "Heng:garæ": "2020-06-22",
  "; [Semicolon]": "2020-10-19",
  "Your Choice": "2021-06-18",
  "Attacca": "2021-10-22",
  "Face the Sun": "2022-05-27",
  "SECTOR 17": "2022-07-18",
  "FML": "2023-04-24",
  "SECOND WIND": "2023-02-06",
  "SEVENTEENTH HEAVEN": "2023-10-23",
  "17 IS RIGHT HERE": "2024-04-29",
  "SPILL THE FEELS": "2024-10-14",

  // LE SSERAFIM
  "FEARLESS": "2022-05-02",
  "ANTIFRAGILE": "2022-10-17",
  "UNFORGIVEN": "2023-05-01",
  "Perfect Night": "2023-10-27",
  "EASY": "2024-02-19",
  "CRAZY": "2024-08-30",
  "Star Signs": "2024-11-15",

  // NewJeans
  "New Jeans": "2022-08-01",
  "OMG": "2023-01-02",
  "Get Up": "2023-07-21",
  "GODS": "2023-10-04",
  "Zero": "2023-04-03",
  "NJWMX": "2023-12-19",
  "How Sweet": "2024-05-24",
  "Supernatural": "2024-06-21",

  // BOYNEXTDOOR
  "WHO!": "2023-05-30",
  "WHY..": "2023-09-04",
  "HOW?": "2024-04-15",
  "19.99": "2024-09-09",
  "GARBAGE TIME OST": "2023-11-07",

  // TWS
  "Sparkling Blue": "2024-01-22",
  "SUMMER BEAT!": "2024-06-24",
  "Last Bell": "2024-11-25",

  // ILLIT
  "SUPER REAL ME": "2024-03-25",
  "I'LL LIKE YOU": "2024-10-21",
};

const songDifficultyOverrides = {
  "Run BTS (달려라 방탄)": { easy: 5, normal: 9, hard: 13, superHard: 17, bpm: 145 },
  "Dionysus": { easy: 5, normal: 8, hard: 13, superHard: 16, bpm: 152 },
  "MIC Drop": { easy: 4, normal: 8, hard: 12, superHard: 16, bpm: 170 },
  "FIRE (불타오르네)": { easy: 4, normal: 8, hard: 12, superHard: 16, bpm: 145 },
  "DOPE (쩔어)": { easy: 4, normal: 8, hard: 12, superHard: 15, bpm: 130 },
  "Blood Sweat & Tears (피 땀 눈물)": { easy: 4, normal: 7, hard: 11, superHard: 15, bpm: 110 },
  "IDOL": { easy: 4, normal: 8, hard: 12, superHard: 16, bpm: 126 },
  "Butter": { easy: 3, normal: 6, hard: 10, superHard: 14, bpm: 110 },
  "Dynamite": { easy: 3, normal: 6, hard: 10, superHard: 13, bpm: 114 },
  "Spring Day (봄날)": { easy: 2, normal: 5, hard: 8, superHard: 12, bpm: 108 },
  "Life Goes On": { easy: 2, normal: 5, hard: 8, superHard: 11, bpm: 82 },
  "MAESTRO": { easy: 5, normal: 9, hard: 13, superHard: 17, bpm: 135 },
  "Super (손오공)": { easy: 5, normal: 9, hard: 13, superHard: 17, bpm: 132 },
  "LOVE, MONEY, FAME (feat. DJ Khaled)": { easy: 4, normal: 8, hard: 12, superHard: 16, bpm: 115 },
  "God of Music (음악의 신)": { easy: 4, normal: 7, hard: 11, superHard: 15, bpm: 125 },
  "HOT": { easy: 4, normal: 8, hard: 12, superHard: 16, bpm: 115 },
  "VERY NICE (아주 NICE)": { easy: 4, normal: 8, hard: 12, superHard: 15, bpm: 138 },
  "Over The Moon": { easy: 4, normal: 8, hard: 12, superHard: 16, bpm: 120 },
  "Deja Vu": { easy: 4, normal: 8, hard: 12, superHard: 16, bpm: 118 },
  "Sugar Rush Ride": { easy: 4, normal: 7, hard: 11, superHard: 15, bpm: 125 },
  "0X1=LOVESONG (I Know I Love You)": { easy: 4, normal: 7, hard: 11, superHard: 15, bpm: 105 },
  "No Doubt": { easy: 4, normal: 8, hard: 12, superHard: 16, bpm: 122 },
  "Brought The Heat Back": { easy: 5, normal: 9, hard: 13, superHard: 16, bpm: 140 },
  "Bite Me": { easy: 4, normal: 7, hard: 11, superHard: 15, bpm: 110 },
  "Sweet Venom": { easy: 3, normal: 7, hard: 11, superHard: 14, bpm: 120 },
  "Drunk-Dazed": { easy: 4, normal: 8, hard: 12, superHard: 15, bpm: 135 },
  "CRAZY": { easy: 4, normal: 8, hard: 12, superHard: 16, bpm: 130 },
  "EASY": { easy: 3, normal: 7, hard: 11, superHard: 15, bpm: 108 },
  "Smart": { easy: 3, normal: 7, hard: 11, superHard: 14, bpm: 113 },
  "ANTIFRAGILE": { easy: 4, normal: 8, hard: 12, superHard: 15, bpm: 105 },
  "UNFORGIVEN (feat. Nile Rodgers)": { easy: 4, normal: 8, hard: 12, superHard: 15, bpm: 105 },
  "Supernatural": { easy: 4, normal: 7, hard: 12, superHard: 15, bpm: 110 },
  "How Sweet": { easy: 3, normal: 7, hard: 11, superHard: 14, bpm: 112 },
  "Hype Boy": { easy: 3, normal: 7, hard: 11, superHard: 14, bpm: 100 },
  "Ditto": { easy: 3, normal: 6, hard: 10, superHard: 13, bpm: 134 },
  "OMG": { easy: 3, normal: 7, hard: 11, superHard: 14, bpm: 127 },
  "Nice Guy": { easy: 4, normal: 7, hard: 11, superHard: 15, bpm: 120 },
  "Earth, Wind & Fire": { easy: 4, normal: 8, hard: 12, superHard: 16, bpm: 136 },
  "If I'm S, Can You Be My N? (내가 S면 넌 나의 N이 되어줘)": { easy: 4, normal: 7, hard: 11, superHard: 15, bpm: 128 },
  "plot twist (첫 만남은 계획대로 되지 않아)": { easy: 4, normal: 7, hard: 11, superHard: 15, bpm: 124 },
  "Cherish (My Love)": { easy: 4, normal: 7, hard: 12, superHard: 15, bpm: 116 },
  "Magnetic": { easy: 4, normal: 8, hard: 12, superHard: 15, bpm: 131 },
};

function enrichSong(song, group) {
  if (!song) return song;
  const album = song.album || "";
  const releaseDate = song.releaseDate || albumReleaseDates[album] || "2023-01-01";
  const score = Number(song.score) || 2500000;

  // Level determination: 1 - 17 across 4 modes
  const ovr = songDifficultyOverrides[song.title];
  let levels;
  let bpm;
  if (ovr) {
    levels = { easy: ovr.easy, normal: ovr.normal, hard: ovr.hard, superHard: ovr.superHard };
    bpm = ovr.bpm || 120;
  } else {
    const ratio = Math.max(0, Math.min(1, (score - 2400000) / (3300000 - 2400000)));
    const superHard = Math.min(17, Math.max(11, Math.round(12 + ratio * 5)));
    const hard = Math.min(14, Math.max(7, superHard - 4));
    const normal = Math.min(9, Math.max(4, hard - 4));
    const easy = Math.min(5, Math.max(1, normal - 3));
    levels = { easy, normal, hard, superHard };
    bpm = Math.round(95 + (score % 45));
  }

  // Duration
  const duration = song.duration || "Game Cut: 1:50";

  // YouTube direct search/play URL
  const cleanTitle = song.title.replace(/\s*\([^)]*\)/g, "").trim();
  const youtubeUrl = song.youtubeUrl || `https://www.youtube.com/results?search_query=${encodeURIComponent(group + " " + cleanTitle + " Official MV")}`;

  return {
    ...song,
    album,
    releaseDate,
    levels,
    bpm,
    duration,
    youtubeUrl,
  };
}

async function renderSongsTab() {
  const container = document.querySelector("#tab-panel-songs");
  if (!container) return;

  const groupTabs = document.querySelector("#songs-group-tabs");
  const availableGroups = Object.keys(songCategories);
  if (groupTabs) {
    groupTabs.innerHTML = availableGroups.map((g) => `
      <button type="button" class="group-pill${g === currentSongGroup ? " is-active" : ""}" data-song-group="${escapeHtml(g)}">
        ${escapeHtml(g)}
      </button>`).join("");
  }

  const rawSongs = songScores[currentSongGroup] || [];
  const currentSongs = rawSongs.map((s) => enrichSong(s, currentSongGroup));

  // Populate Album select dropdown
  const albumSelect = document.querySelector("#songs-album-filter");
  if (albumSelect) {
    const albumsList = [...new Set(currentSongs.map((s) => s.album).filter(Boolean))].sort();
    if (!albumsList.includes(currentSongAlbum)) {
      currentSongAlbum = "";
    }
    albumSelect.innerHTML = `<option value="">Tất cả Album (${albumsList.length})</option>` +
      albumsList.map((alb) => `<option value="${escapeHtml(alb)}" ${alb === currentSongAlbum ? "selected" : ""}>${escapeHtml(alb)}</option>`).join("");
  }

  // Summary bar update
  const summaryBar = document.querySelector("#songs-summary-bar");
  if (summaryBar) {
    if (currentSongs.length > 0) {
      const sortedByScore = [...currentSongs].sort((a, b) => b.score - a.score);
      const topSong = sortedByScore[0];
      const albumsSet = new Set(currentSongs.map((s) => s.album).filter(Boolean));
      summaryBar.innerHTML = `
        <div class="songs-summary-content">
          <div class="songs-summary-item">
            <span class="sum-label">NHÓM NHẠC</span>
            <strong class="sum-value sum-highlight">${escapeHtml(currentSongGroup)}</strong>
          </div>
          <div class="songs-summary-item">
            <span class="sum-label">FANDOM CHÍNH THỨC</span>
            <strong class="sum-value sum-highlight sum-fandom-val">${fandomEmojis[currentSongGroup] || "✨"} ${escapeHtml(groupInfo[currentSongGroup]?.fandom || "—")}</strong>
          </div>
          <div class="songs-summary-item">
            <span class="sum-label">TỔNG SỐ BÀI HÁT</span>
            <strong class="sum-value">${currentSongs.length} bài hát trong game</strong>
          </div>
          <div class="songs-summary-item">
            <span class="sum-label">TOP 1 ĐIỂM MỤC TIÊU</span>
            <strong class="sum-value" title="${escapeHtml(topSong.title)}">${escapeHtml(topSong.title)} (${topSong.score.toLocaleString("vi-VN")} PWR)</strong>
          </div>
          <div class="songs-summary-item">
            <span class="sum-label">SỐ ALBUM TRONG GAME</span>
            <strong class="sum-value">${albumsSet.size} Album</strong>
          </div>
        </div>
      `;
      summaryBar.hidden = false;
    } else {
      summaryBar.hidden = true;
    }
  }

  const status = document.querySelector("#songs-status");
  if (currentSongs.length === 0 && !isFetchingSongs) {
    if (status) {
      status.textContent = `Đang tra cứu danh sách bài hát của nhóm ${currentSongGroup} từ Rhythm Hive Wiki...`;
      status.hidden = false;
    }
    isFetchingSongs = true;
    try {
      const fetched = await loadGroupSongScores(currentSongGroup);
      isFetchingSongs = false;
      if (status) status.hidden = true;
      renderSongsGrid(fetched.map((s) => enrichSong(s, currentSongGroup)));
    } catch (err) {
      isFetchingSongs = false;
      if (status) {
        status.textContent = `Không thể tải bảng bài hát của ${currentSongGroup}. Vui lòng thử lại sau.`;
        status.hidden = false;
      }
    }
  } else {
    if (status) status.hidden = true;
    // Filter and sort songs
    const filtered = filterAndSortSongs(currentSongs);
    renderSongsGrid(filtered);
  }
}

function filterAndSortSongs(songsList) {
  const q = songsSearchQuery.trim().toLowerCase();
  const alb = currentSongAlbum.trim();
  const diffMode = currentSongDiff;
  const levelNum = currentSongLevel ? Number(currentSongLevel) : null;

  return songsList
    .filter((song) => {
      // Search query (title, album, or release year/date)
      if (q) {
        const matchTitle = song.title.toLowerCase().includes(q);
        const matchAlbum = song.album && song.album.toLowerCase().includes(q);
        const matchDate = song.releaseDate && song.releaseDate.includes(q);
        if (!matchTitle && !matchAlbum && !matchDate) return false;
      }

      // Album filter
      if (alb && song.album !== alb) return false;

      // Level filter (1 - 17)
      if (Number.isInteger(levelNum)) {
        if (diffMode === "all") {
          const hasLevel = (
            song.levels.easy === levelNum ||
            song.levels.normal === levelNum ||
            song.levels.hard === levelNum ||
            song.levels.superHard === levelNum
          );
          if (!hasLevel) return false;
        } else if (song.levels[diffMode] !== levelNum) {
          return false;
        }
      }

      return true;
    })
    .sort((a, b) => {
      switch (currentSongSort) {
        case "date-desc":
          return b.releaseDate.localeCompare(a.releaseDate) || b.score - a.score;
        case "date-asc":
          return a.releaseDate.localeCompare(b.releaseDate) || b.score - a.score;
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "level-desc":
          return b.levels.superHard - a.levels.superHard || b.score - a.score;
        case "level-asc":
          return a.levels.superHard - b.levels.superHard || a.score - b.score;
        case "score-desc":
        default:
          return b.score - a.score;
      }
    });
}

function renderSongsGrid(songsList) {
  const grid = document.querySelector("#songs-grid");
  if (!grid) return;

  if (songsList.length === 0) {
    const ytSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(currentSongGroup + " " + (songsSearchQuery || "Rhythm Hive") + " gameplay songs")}`;
    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1; padding: 36px 20px; text-align: center;">
        <span class="empty-icon" aria-hidden="true" style="font-size: 32px; display: block; margin-bottom: 10px;">⌕</span>
        <h3 style="color: #fff; margin-bottom: 8px;">Không tìm thấy bài hát nào phù hợp</h3>
        <p style="color: var(--muted); margin-bottom: 18px;">Thử điều chỉnh bộ lọc Album, Level hoặc từ khóa tìm kiếm.</p>
        <button type="button" class="songs-youtube-btn" onclick="window.open('${escapeHtml(ytSearchUrl)}', '_blank')" style="margin: 0 auto;">
          <span class="yt-icon">▶</span> Tìm "${escapeHtml(songsSearchQuery || currentSongGroup)}" trên YouTube ↗
        </button>
      </div>`;
    return;
  }

  grid.innerHTML = songsList.map((song, i) => {
    let rankBadgeClass = "rank-other";
    let rankBadgeText = `#${i + 1}`;
    if (i === 0 && currentSongSort === "score-desc") {
      rankBadgeClass = "rank-top1";
      rankBadgeText = "🥇 Top 1";
    } else if (i === 1 && currentSongSort === "score-desc") {
      rankBadgeClass = "rank-top2";
      rankBadgeText = "🥈 Top 2";
    } else if (i === 2 && currentSongSort === "score-desc") {
      rankBadgeClass = "rank-top3";
      rankBadgeText = "🥉 Top 3";
    }

    return `
      <article class="song-card ${i < 3 && currentSongSort === "score-desc" ? "is-top-tier" : ""}" data-song-title="${escapeHtml(song.title)}">
        <div class="song-card-header-row">
          <div style="display:flex;align-items:center;gap:6px">
            <span class="song-rank-badge ${rankBadgeClass}">${rankBadgeText}</span>
            ${song.isCustom ? `<span class="song-card-custom-badge">Tự thêm</span>` : ""}
          </div>
          <div style="display:flex;align-items:center;gap:6px">
            ${song.album ? `<span class="song-album-pill" title="Album: ${escapeHtml(song.album)}">💿 ${escapeHtml(song.album)}</span>` : ""}
            ${song.isCustom ? `<button type="button" class="song-card-delete-btn" data-action="delete-custom-song" data-title="${escapeHtml(song.title)}" title="Xóa bài hát này">🗑️</button>` : ""}
          </div>
        </div>
        <div class="song-card-body">
          <h4 class="song-card-title" title="${escapeHtml(song.title)}">${escapeHtml(song.title)}</h4>
          <div class="song-card-diff-pills" title="Cấp độ các chế độ (Easy / Normal / Hard / Super Hard)">
            <span class="diff-pill p-easy" title="Easy">E: ${song.levels.easy}</span>
            <span class="diff-pill p-normal" title="Normal">N: ${song.levels.normal}</span>
            <span class="diff-pill p-hard" title="Hard">H: ${song.levels.hard}</span>
            <span class="diff-pill p-superhard" title="Super Hard">SH: ${song.levels.superHard}</span>
          </div>
        </div>
        <div class="song-card-meta">
          <div class="song-goal-wrap">
            <span class="song-goal-lbl">Mục tiêu Stage</span>
            <span class="song-goal-badge">🎯 ${song.score.toLocaleString("vi-VN")} <small>PWR</small></span>
          </div>
          <a class="song-yt-link" href="${escapeHtml(song.youtubeUrl)}" target="_blank" rel="noopener noreferrer" title="Mở MV / Nghe trên YouTube">
            <span class="yt-play-icon">▶</span> YouTube
          </a>
        </div>
      </article>`;
  }).join("");
}

// Add Custom Card Modal Logic
function populateCardMemberSelect(group) {
  const memberSelect = document.querySelector("#new-card-member");
  if (!memberSelect) return;
  const members = groupMembers[group] || [];
  memberSelect.innerHTML = members.map((m) => `<option value="${escapeHtml(m)}">${escapeHtml(m)}</option>`).join("");
}

function openAddCardModal() {
  const modal = document.querySelector("#add-card-modal");
  if (!modal) return;
  const groupSelect = document.querySelector("#new-card-group");
  const selectedGroup = elements.group?.value && ALL_GROUPS.includes(elements.group.value) ? elements.group.value : "BTS";
  if (groupSelect) {
    groupSelect.value = selectedGroup;
    populateCardMemberSelect(selectedGroup);
  }
  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  document.querySelector("#new-card-theme-name")?.focus();
}

function closeAddCardModal() {
  const modal = document.querySelector("#add-card-modal");
  if (!modal) return;
  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
  document.querySelector("#add-card-form")?.reset();
}

function saveCustomCard(data) {
  const group = data.group?.trim();
  const name = data.name?.trim();
  const grade = (data.grade || "UR").trim().toUpperCase();
  const type = (data.type || "live").trim().toLowerCase();
  const theme = data.theme?.trim() || "";
  const vocal = Math.max(100, Math.min(1500, Number(data.vocal) || 980));
  const dance = Math.max(100, Math.min(1500, Number(data.dance) || 950));
  const rap = Math.max(100, Math.min(1500, Number(data.rap) || 890));
  const charm = Math.max(100, Math.min(1500, Number(data.charm) || 965));
  const image = data.image?.trim() || "";

  if (!group || !name) {
    showNotice("Vui lòng chọn nhóm và thành viên hợp lệ.");
    return;
  }

  const grpSlug = group.toLowerCase().replace(/[^a-z0-9]/g, "");
  const memSlug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const uid = Math.random().toString(36).substring(2, 7);
  const cardId = `custom-${grpSlug}-${memSlug}-${uid}`;

  const minRatio = grade === "UR" ? 0.52 : grade === "XR" ? 0.50 : 0.45;

  const newCard = {
    id: cardId,
    name,
    group,
    rarity: grade,
    grade,
    type,
    ...(theme ? { theme } : {}),
    stats: {
      min: {
        vocal: Math.round(vocal * minRatio),
        dance: Math.round(dance * minRatio),
        rap: Math.round(rap * minRatio),
        charm: Math.round(charm * minRatio),
      },
      max: { vocal, dance, rap, charm },
    },
    ...(image ? { image, imageGrade: grade } : {}),
    isCustom: true,
  };

  cards.unshift(newCard);
  writeStorage(keys.cards, cards);

  if (image) {
    imageSources[newCard.id] = { url: image, page: image, manual: true };
    writeStorage(keys.imageSources, imageSources);
  }

  closeAddCardModal();
  renderAll();
  showNotice(`Đã thêm thành công thẻ ${newCard.name} (${newCard.grade} · ${newCard.theme || newCard.type.toUpperCase()}) vào Bộ sưu tập!`);
}

// Add Custom Song Logic
function openAddSongModal() {
  const modal = document.querySelector("#add-song-modal");
  if (!modal) return;
  const groupSelect = document.querySelector("#new-song-group");
  if (groupSelect) groupSelect.value = currentSongGroup;
  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  document.querySelector("#new-song-title")?.focus();
}

function closeAddSongModal() {
  const modal = document.querySelector("#add-song-modal");
  if (!modal) return;
  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
  document.querySelector("#add-song-form")?.reset();
}

function saveCustomSong(formData) {
  const group = formData.group;
  if (!group || !formData.title) return;

  const newSong = {
    title: formData.title.trim(),
    album: (formData.album || "Single / Custom").trim(),
    score: Number(formData.score) || 3150000,
    releaseDate: formData.releaseDate || new Date().toISOString().split("T")[0],
    levels: {
      easy: Number(formData.easy) || 4,
      normal: Number(formData.normal) || 8,
      hard: Number(formData.hard) || 12,
      superHard: Number(formData.superHard) || 16,
    },
    youtubeUrl: formData.youtubeUrl ? formData.youtubeUrl.trim() : `https://www.youtube.com/results?search_query=${encodeURIComponent(group + " " + formData.title + " Official MV")}`,
    isCustom: true,
  };

  if (!storedSongScores[group]) storedSongScores[group] = [];
  const existingIdx = storedSongScores[group].findIndex((s) => s.title.toLowerCase() === newSong.title.toLowerCase());
  if (existingIdx >= 0) {
    storedSongScores[group][existingIdx] = newSong;
  } else {
    storedSongScores[group].unshift(newSong);
  }

  writeStorage(keys.songScores, storedSongScores);

  if (!songScores[group]) songScores[group] = [];
  const memIdx = songScores[group].findIndex((s) => s.title.toLowerCase() === newSong.title.toLowerCase());
  if (memIdx >= 0) {
    songScores[group][memIdx] = newSong;
  } else {
    songScores[group].unshift(newSong);
  }

  closeAddSongModal();
  showNotice(`Đã thêm bài hát "${newSong.title}" vào nhóm ${group}!`);
  currentSongGroup = group;
  renderSongsTab();
}

function deleteCustomSong(title, group) {
  if (!confirm(`Bạn có chắc muốn xóa bài hát "${title}" khỏi danh sách?`)) return;
  if (storedSongScores[group]) {
    storedSongScores[group] = storedSongScores[group].filter((s) => s.title.toLowerCase() !== title.toLowerCase());
    writeStorage(keys.songScores, storedSongScores);
  }
  if (songScores[group]) {
    songScores[group] = songScores[group].filter((s) => s.title.toLowerCase() !== title.toLowerCase());
  }
  showNotice(`Đã xóa bài hát "${title}".`);
  renderSongsTab();
}

// Hover Tooltip for Songs
function formatReleaseDate(isoDate) {
  if (!isoDate || typeof isoDate !== "string") return "—";
  const parts = isoDate.split("-");
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return isoDate;
}

function showSongTooltip(song, group, event) {
  const tooltip = document.querySelector("#song-tooltip");
  if (!tooltip || !song) return;

  const groupBadge = tooltip.querySelector(".song-tooltip-group-badge");
  const fandomBadge = tooltip.querySelector(".song-tooltip-fandom-badge");
  const albumBadge = tooltip.querySelector(".song-tooltip-album-badge");
  const titleEl = tooltip.querySelector(".song-tooltip-title");
  const releaseEl = tooltip.querySelector(".song-tooltip-release");
  const albumEl = tooltip.querySelector(".song-tooltip-album");
  const fandomEl = tooltip.querySelector(".song-tooltip-fandom");
  const timingEl = tooltip.querySelector(".song-tooltip-timing");
  const scoreEl = tooltip.querySelector(".song-tooltip-score");
  const ytBtn = tooltip.querySelector(".song-tooltip-yt-btn");

  const easyVal = tooltip.querySelector(".diff-easy-val");
  const normalVal = tooltip.querySelector(".diff-normal-val");
  const hardVal = tooltip.querySelector(".diff-hard-val");
  const superhardVal = tooltip.querySelector(".diff-superhard-val");

  const fandomName = groupInfo[group]?.fandom || "—";
  const fandomEmoji = fandomEmojis[group] || "✨";

  if (groupBadge) groupBadge.textContent = group;
  if (fandomBadge) fandomBadge.textContent = `${fandomEmoji} ${fandomName}`;
  if (albumBadge) albumBadge.textContent = song.album || "Single";
  if (titleEl) titleEl.textContent = song.title;
  if (releaseEl) releaseEl.textContent = formatReleaseDate(song.releaseDate);
  if (albumEl) albumEl.textContent = song.album || "Single / OST";
  if (fandomEl) fandomEl.textContent = `${fandomName} ${fandomEmoji}`;
  if (timingEl) timingEl.textContent = `${song.duration || "Game Cut: 1:50"} · ${song.bpm || 120} BPM`;
  if (scoreEl) scoreEl.textContent = `${song.score.toLocaleString("vi-VN")} PWR`;

  if (easyVal) easyVal.textContent = `Lv. ${song.levels.easy}`;
  if (normalVal) normalVal.textContent = `Lv. ${song.levels.normal}`;
  if (hardVal) hardVal.textContent = `Lv. ${song.levels.hard}`;
  if (superhardVal) superhardVal.textContent = `Lv. ${song.levels.superHard}`;

  if (ytBtn) {
    ytBtn.href = song.youtubeUrl || "#";
    ytBtn.title = `Xem MV hoặc nghe bài hát "${song.title}" trên YouTube`;
  }

  tooltip.hidden = false;
  tooltip.setAttribute("aria-hidden", "false");

  // Position tooltip
  const pad = 16;
  const tipWidth = tooltip.offsetWidth || 380;
  const tipHeight = tooltip.offsetHeight || 320;
  let x = event.clientX + 16;
  let y = event.clientY - 20;

  if (x + tipWidth > window.innerWidth - pad) {
    x = event.clientX - tipWidth - 16;
  }
  if (x < pad) x = pad;

  if (y + tipHeight > window.innerHeight - pad) {
    y = window.innerHeight - tipHeight - pad;
  }
  if (y < pad) y = pad;

  tooltip.style.left = `${Math.round(x)}px`;
  tooltip.style.top = `${Math.round(y)}px`;
}

function hideSongTooltip() {
  const tooltip = document.querySelector("#song-tooltip");
  if (!tooltip) return;
  tooltip.hidden = true;
  tooltip.setAttribute("aria-hidden", "true");
}

function renderIdolsTab() {
  const container = document.querySelector("#tab-panel-idols");
  if (!container) return;

  const groupTabs = document.querySelector("#idols-group-tabs");
  const allGroups = ["Tất cả", "BTS", "TXT", "ENHYPEN", "SEVENTEEN", "LE SSERAFIM", "NewJeans", "BOYNEXTDOOR", "TWS", "ILLIT"];
  if (groupTabs) {
    groupTabs.innerHTML = allGroups.map((g) => `
      <button type="button" class="group-pill${g === currentIdolGroup ? " is-active" : ""}" data-idol-group="${escapeHtml(g)}">
        ${escapeHtml(g)}
      </button>`).join("");
  }

  const grid = document.querySelector("#idols-grid");
  if (!grid) return;

  const q = idolsSearchQuery.trim().toLowerCase();
  const profilesList = Object.values(memberProfiles).map((prof) => {
    const meta = groupInfo[prof.group] || {};
    return {
      ...prof,
      agency: prof.agency || meta.agency || "HYBE",
      debut: prof.debut || meta.debut || "",
      fandom: prof.fandom || meta.fandom || "—",
      color: meta.color || "#a894fa",
    };
  }).filter((prof) => {
    const matchGroup = currentIdolGroup === "Tất cả" || prof.group === currentIdolGroup;
    const searchable = `${prof.name} ${prof.realName || ""} ${prof.group} ${prof.fandom} ${prof.position || ""}`.toLowerCase();
    const matchQuery = !q || searchable.includes(q);
    return matchGroup && matchQuery;
  });

  if (profilesList.length === 0) {
    grid.innerHTML = '<p class="saved-empty" style="grid-column:1/-1">Không tìm thấy thần tượng nào phù hợp.</p>';
    return;
  }

  grid.innerHTML = profilesList.map((idol) => {
    const idolCardWithImg = cards.find((c) => c.name.toLowerCase() === idol.name.toLowerCase() && c.group === idol.group && (c.image || imageSources[c.id]));
    const avatarUrl = idolCardWithImg?.image || imageSources[idolCardWithImg?.id]?.url || "";
    const cardCount = cards.filter((c) => c.name.toLowerCase() === idol.name.toLowerCase() && c.group === idol.group).length;

    return `
      <article class="idol-card">
        <div class="idol-card-header">
          <div class="idol-avatar-wrap">
            ${avatarUrl ? `<img src="${escapeHtml(avatarUrl)}" alt="${escapeHtml(idol.name)}" loading="lazy">` : `<span>${escapeHtml(initials(idol.name))}</span>`}
          </div>
          <div class="idol-title-wrap">
            <div class="idol-tags-row">
              <span class="idol-group-tag">${escapeHtml(idol.group)}</span>
              <span class="idol-fandom-tag">${fandomEmojis[idol.group] || "✨"} ${escapeHtml(idol.fandom)}</span>
            </div>
            <h3 class="idol-name">${escapeHtml(idol.name)}</h3>
            <p class="idol-real-name">${escapeHtml(idol.realName || "")}</p>
          </div>
        </div>
        <div class="idol-info-grid">
          <div class="idol-info-item"><span>Vị trí</span><strong>${escapeHtml(idol.position || "Thành viên")}</strong></div>
          <div class="idol-info-item"><span>Sinh nhật</span><strong>${escapeHtml(idol.birthDate || "—")}</strong></div>
          <div class="idol-info-item"><span>Cung</span><strong>${escapeHtml(idol.zodiac || "—")}</strong></div>
          <div class="idol-info-item"><span>Quốc tịch</span><strong>${escapeHtml(idol.nationality || "—")}</strong></div>
          <div class="idol-info-item"><span>Công ty</span><strong>${escapeHtml(idol.agency || "HYBE")}</strong></div>
          <div class="idol-info-item"><span>Fandom</span><strong class="highlight-fandom">${escapeHtml(idol.fandom)} ${fandomEmojis[idol.group] || "✨"}</strong></div>
        </div>
        ${idol.bio ? `<p class="idol-bio">"${escapeHtml(idol.bio)}"</p>` : ""}
        <button type="button" class="view-member-cards-btn" data-action="filter-idol-cards" data-name="${escapeHtml(idol.name)}" data-group="${escapeHtml(idol.group)}">
          🎴 Xem thẻ của ${escapeHtml(idol.name)} (${cardCount} thẻ)
        </button>
      </article>`;
  }).join("");
}

// Global Event Listeners for Tabs and Actions
document.querySelector(".app-tabs")?.addEventListener("click", (event) => {
  const btn = event.target.closest(".tab-btn");
  if (btn?.dataset.tab) {
    switchTab(btn.dataset.tab);
  }
});

document.addEventListener("click", (event) => {
  const tabBtn = event.target.closest(".tab-btn");
  if (tabBtn?.dataset.tab) {
    event.preventDefault();
    switchTab(tabBtn.dataset.tab);
    return;
  }

  const actionBtn = event.target.closest("[data-action]");
  if (!actionBtn) return;
  const { action } = actionBtn.dataset;

  if (action === "go-to-lineup") {
    switchTab("lineup");
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (action === "go-to-cards") {
    switchTab("cards");
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (action === "auto-lineup") {
    autoOptimizeLineup();
    return;
  }
  if (action === "clear-lineup") {
    clearLineup();
    return;
  }
  if (action === "filter-idol-cards") {
    const { name, group } = actionBtn.dataset;
    if (elements.search) elements.search.value = name || "";
    if (elements.group && group) elements.group.value = group;
    switchTab("cards");
    renderCards();
    elements.grid?.scrollIntoView({ behavior: "smooth" });
    return;
  }
});

document.querySelector("#studio-group-tabs")?.addEventListener("click", (e) => {
  const pill = e.target.closest(".group-pill[data-studio-group]");
  if (pill) {
    selectedStudioGroup = pill.dataset.studioGroup;
    renderAll();
  }
});

document.querySelector("#studio-group-select")?.addEventListener("change", (e) => {
  selectedStudioGroup = e.target.value;
  renderAll();
});

document.querySelector("#sidebar-group-select")?.addEventListener("change", (e) => {
  selectedStudioGroup = e.target.value;
  renderAll();
});

document.querySelector("#studio-slots")?.addEventListener("click", (e) => {
  const removeBtn = e.target.closest('button[data-action="remove-slot"]');
  if (removeBtn) {
    const index = Number(removeBtn.dataset.index);
    if (Number.isInteger(index)) {
      const team = getGroupTeam(selectedStudioGroup);
      team[index] = null;
      saveGroupTeams();
      currentTeam = team;
      renderAll();
    }
  }
});

document.querySelector("#studio-tray-grid")?.addEventListener("click", (e) => {
  const addBtn = e.target.closest('button[data-action="team"]');
  if (addBtn?.dataset.id) {
    toggleTeamCard(addBtn.dataset.id);
  }
});

document.querySelector("#songs-group-tabs")?.addEventListener("click", (e) => {
  const pill = e.target.closest(".group-pill[data-song-group]");
  if (pill) {
    currentSongGroup = pill.dataset.songGroup;
    currentSongAlbum = "";
    renderSongsTab();
  }
});

document.querySelector("#songs-search-input")?.addEventListener("input", (e) => {
  songsSearchQuery = e.target.value;
  renderSongsTab();
});

document.querySelector("#songs-album-filter")?.addEventListener("change", (e) => {
  currentSongAlbum = e.target.value;
  renderSongsTab();
});

document.querySelector("#songs-diff-filter")?.addEventListener("change", (e) => {
  currentSongDiff = e.target.value;
  renderSongsTab();
});

document.querySelector("#songs-level-filter")?.addEventListener("change", (e) => {
  currentSongLevel = e.target.value;
  renderSongsTab();
});

document.querySelector("#songs-sort-filter")?.addEventListener("change", (e) => {
  currentSongSort = e.target.value;
  renderSongsTab();
});

document.querySelector("#songs-youtube-btn")?.addEventListener("click", () => {
  const q = songsSearchQuery
    ? `${currentSongGroup} ${songsSearchQuery}`
    : `${currentSongGroup} Rhythm Hive playlist songs`;
  window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`, "_blank");
});

document.querySelector("#open-add-card-btn")?.addEventListener("click", openAddCardModal);
document.querySelector("#new-card-group")?.addEventListener("change", (e) => {
  populateCardMemberSelect(e.target.value);
});

document.querySelector("#add-card-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const group = document.querySelector("#new-card-group")?.value;
  const name = document.querySelector("#new-card-member")?.value;
  const grade = document.querySelector("#new-card-grade")?.value || "UR";
  const type = document.querySelector("#new-card-type")?.value || "live";
  const theme = document.querySelector("#new-card-theme-name")?.value || "";
  const vocal = document.querySelector("#new-card-vocal")?.value || 980;
  const dance = document.querySelector("#new-card-dance")?.value || 950;
  const rap = document.querySelector("#new-card-rap")?.value || 890;
  const charm = document.querySelector("#new-card-charm")?.value || 965;
  const image = document.querySelector("#new-card-image")?.value || "";

  saveCustomCard({
    group,
    name,
    grade,
    type,
    theme,
    vocal,
    dance,
    rap,
    charm,
    image,
  });
});

document.querySelector("#songs-add-custom-btn")?.addEventListener("click", openAddSongModal);

document.addEventListener("click", (e) => {
  const closeCardBtn = e.target.closest("[data-close-modal='add-card-modal']");
  if (closeCardBtn) {
    closeAddCardModal();
    return;
  }

  const closeBtn = e.target.closest("[data-close-modal='add-song-modal']");
  if (closeBtn) {
    closeAddSongModal();
    return;
  }

  const deleteBtn = e.target.closest('[data-action="delete-custom-song"]');
  if (deleteBtn && deleteBtn.dataset.title) {
    deleteCustomSong(deleteBtn.dataset.title, currentSongGroup);
    return;
  }
});

document.querySelector("#add-song-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const group = document.querySelector("#new-song-group")?.value || currentSongGroup;
  const title = document.querySelector("#new-song-title")?.value || "";
  const album = document.querySelector("#new-song-album")?.value || "";
  const releaseDate = document.querySelector("#new-song-date")?.value || "";
  const score = document.querySelector("#new-song-score")?.value || 3150000;
  const easy = document.querySelector("#new-song-easy")?.value || 4;
  const normal = document.querySelector("#new-song-normal")?.value || 8;
  const hard = document.querySelector("#new-song-hard")?.value || 12;
  const superHard = document.querySelector("#new-song-superhard")?.value || 16;
  const youtubeUrl = document.querySelector("#new-song-youtube")?.value || "";

  saveCustomSong({
    group,
    title,
    album,
    releaseDate,
    score,
    easy,
    normal,
    hard,
    superHard,
    youtubeUrl,
  });
});

const songsGridEl = document.querySelector("#songs-grid");
songsGridEl?.addEventListener("mouseover", (e) => {
  const card = e.target.closest(".song-card");
  if (card && card.dataset.songTitle) {
    const rawSongs = songScores[currentSongGroup] || [];
    const songs = rawSongs.map((s) => enrichSong(s, currentSongGroup));
    const song = songs.find((s) => s.title === card.dataset.songTitle);
    if (song) showSongTooltip(song, currentSongGroup, e);
  }
});
songsGridEl?.addEventListener("mousemove", (e) => {
  const tooltip = document.querySelector("#song-tooltip");
  if (tooltip && !tooltip.hidden) {
    const pad = 16;
    const tipWidth = tooltip.offsetWidth || 400;
    const tipHeight = tooltip.offsetHeight || 320;
    let x = e.clientX + 16;
    let y = e.clientY - 20;
    if (x + tipWidth > window.innerWidth - pad) x = e.clientX - tipWidth - 16;
    if (x < pad) x = pad;
    if (y + tipHeight > window.innerHeight - pad) y = window.innerHeight - tipHeight - pad;
    if (y < pad) y = pad;
    tooltip.style.left = `${Math.round(x)}px`;
    tooltip.style.top = `${Math.round(y)}px`;
  }
});
songsGridEl?.addEventListener("mouseout", (e) => {
  const card = e.target.closest(".song-card");
  if (card && !card.contains(e.relatedTarget)) {
    hideSongTooltip();
  }
});

document.querySelector(".song-tooltip-close-btn")?.addEventListener("click", hideSongTooltip);

document.querySelector("#idols-group-tabs")?.addEventListener("click", (e) => {
  const pill = e.target.closest(".group-pill[data-idol-group]");
  if (pill) {
    currentIdolGroup = pill.dataset.idolGroup;
    renderIdolsTab();
  }
});

document.querySelector("#idols-search-input")?.addEventListener("input", (e) => {
  idolsSearchQuery = e.target.value;
  renderIdolsTab();
});

document.querySelector("#card-sort-select")?.addEventListener("change", (e) => {
  currentCardSort = e.target.value;
  renderCards();
});

document.querySelector("#reset-catalog-btn")?.addEventListener("click", () => {
  if (confirm("Khôi phục toàn bộ thẻ về dữ liệu gốc chuẩn của Rhythm Hive?")) {
    localStorage.removeItem(keys.cards);
    localStorage.removeItem(keys.imageSources);
    localStorage.removeItem(keys.cardLevels);
    location.reload();
  }
});

// Initial boot with safe fallback and error handling
try {
  if (elements.search) elements.search.value = "";
  if (elements.favoritesOnly) elements.favoritesOnly.checked = false;
  if (elements.levelFilter) elements.levelFilter.value = "";
  if (elements.grade) elements.grade.value = "";
  if (elements.type) elements.type.value = "";
  if (elements.group) elements.group.value = "";

  elements.levelInput.value = currentLevel;
  elements.levelRange.value = currentLevel;
  renderAll();
  loadFandomImages().catch((e) => console.warn("Lỗi đồng bộ ảnh Fandom:", e));
  switchTab("cards");
} catch (err) {
  console.error("Lỗi khởi động ứng dụng:", err);
  const noticeEl = document.querySelector("#notice");
  if (noticeEl) {
    noticeEl.textContent = "Lỗi khởi động: " + (err.message || err);
    noticeEl.hidden = false;
    noticeEl.style.display = "block";
  }
}




