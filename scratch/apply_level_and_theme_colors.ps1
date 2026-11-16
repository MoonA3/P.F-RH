$files = @('d:\P.F RH\app-v36.js', 'd:\P.F RH\app.js')

foreach ($filePath in $files) {
    $content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)
    $content = $content -replace "\r\n", "`n"

    # 1. Update cardTypes with new colors (Live=Red, FX=Blue, Special=Purple, Season=Green, Album=Yellow)
    $oldCardTypes = @'
const cardTypes = [
  { id: "live", name: "Live", color: "#ff5a66" },
  { id: "special", name: "Special", color: "#b78bff" },
  { id: "fx", name: "FX", color: "#62aaff" },
  { id: "season", name: "Season", color: "#62d69a" },
  { id: "album", name: "Album", color: "#f1c75b" },
];
'@ -replace "\r\n", "`n"

    $newCardTypes = @'
const cardTypes = [
  { id: "live", name: "Live Theme", shortName: "Live", color: "#ff3b4e", icon: "🔴", desc: "Màu Đỏ" },
  { id: "fx", name: "FX Theme", shortName: "FX", color: "#00a2ff", icon: "🔷", desc: "Màu Xanh Dương" },
  { id: "special", name: "Special Theme", shortName: "Special", color: "#b347ff", icon: "💜", desc: "Màu Tím" },
  { id: "season", name: "Season Theme", shortName: "Season", color: "#10b981", icon: "🌿", desc: "Màu Xanh Lá" },
  { id: "album", name: "Album Theme", shortName: "Album", color: "#ffb703", icon: "🟡", desc: "Màu Vàng" },
];
'@ -replace "\r\n", "`n"

    if ($content.Contains($oldCardTypes)) {
        $content = $content.Replace($oldCardTypes, $newCardTypes)
        Write-Host "Updated cardTypes in $filePath"
    }

    # 2. Update cardMaxLevel to return 60 for all cards (allowing 1-60 without restriction)
    $oldCardMaxLvl = @'
function cardMaxLevel(grade) {
  switch (String(grade || "UR").toUpperCase()) {
    case "UR": return 60;
    case "XR": return 50;
    case "R":  return 40;
    case "S":  return 30;
    case "A":  return 20;
    case "B":  return 10;
    default:   return 60;
  }
}

function cardLevel(card) {
  const maxLvl = cardMaxLevel(card?.grade ?? card?.rarity);
  const lvl = cardLevels[card?.id] ?? 1;
  return Math.max(1, Math.min(maxLvl, Math.round(Number(lvl) || 1)));
}

function calculatedStats(card, level = cardLevel(card)) {
  const grade = card?.grade ?? card?.rarity ?? "UR";
  const maxLvl = cardMaxLevel(grade);
  const curLvl = Math.max(1, Math.min(maxLvl, Math.round(Number(level) || 1)));
  const ratio = maxLvl > 1 ? (curLvl - 1) / (maxLvl - 1) : 0;
  return Object.fromEntries(statNames.map(([key]) => [
    key,
    Math.round(card.stats.min[key] + (card.stats.max[key] - card.stats.min[key]) * ratio),
  ]));
}
'@ -replace "\r\n", "`n"

    $newCardMaxLvl = @'
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
'@ -replace "\r\n", "`n"

    if ($content.Contains($oldCardMaxLvl)) {
        $content = $content.Replace($oldCardMaxLvl, $newCardMaxLvl)
        Write-Host "Updated cardMaxLevel and calculatedStats in $filePath"
    }

    # 3. Update updateLevel and updateCardLevel
    $oldUpdateLvl = @'
function updateLevel(value) {
  const val = Math.max(1, Math.min(60, Math.round(Number(value) || 1)));
  elements.levelInput.value = val;
  elements.levelRange.value = val;
  writeStorage(keys.level, val);
  for (const card of cards) {
    const maxLvl = cardMaxLevel(card.grade ?? card.rarity);
    cardLevels[card.id] = Math.min(val, maxLvl);
  }
  writeStorage(keys.cardLevels, cardLevels);
  renderCards();
  renderTeam();
  renderLineupStudio();
}

function updateCardLevel(id, value) {
  const card = cardById(id);
  if (!card) return;
  const maxLvl = cardMaxLevel(card.grade ?? card.rarity);
  const level = Math.max(1, Math.min(maxLvl, Math.round(Number(value) || 1)));
  const previousLevel = cardLevels[id];
  cardLevels[id] = level;
  if (writeStorage(keys.cardLevels, cardLevels)) {
    renderAll();
  } else {
    showNotice("Không thể lưu level của thẻ. Hãy kiểm tra dung lượng trình duyệt.");
  }
}
'@ -replace "\r\n", "`n"

    $newUpdateLvl = @'
function updateLevel(value) {
  const val = Math.max(1, Math.min(60, Math.round(Number(value) || 1)));
  elements.levelInput.value = val;
  elements.levelRange.value = val;
  writeStorage(keys.level, val);
  for (const card of cards) {
    cardLevels[card.id] = val;
  }
  writeStorage(keys.cardLevels, cardLevels);
  renderCards();
  renderTeam();
  renderLineupStudio();
}

function updateCardLevel(id, value) {
  const card = cardById(id);
  if (!card) return;
  const level = Math.max(1, Math.min(60, Math.round(Number(value) || 1)));
  cardLevels[id] = level;
  if (writeStorage(keys.cardLevels, cardLevels)) {
    renderAll();
  } else {
    showNotice("Không thể lưu level của thẻ. Hãy kiểm tra dung lượng trình duyệt.");
  }
}
'@ -replace "\r\n", "`n"

    if ($content.Contains($oldUpdateLvl)) {
        $content = $content.Replace($oldUpdateLvl, $newUpdateLvl)
        Write-Host "Updated updateLevel in $filePath"
    }

    # 4. Update typeOrder in renderCards
    $oldTypeOrder = 'const typeOrder = ["live", "special", "fx", "season", "album"];'
    $newTypeOrder = 'const typeOrder = ["live", "fx", "special", "season", "album"];'
    if ($content.Contains($oldTypeOrder)) {
        $content = $content.Replace($oldTypeOrder, $newTypeOrder)
    }

    # 5. Update card template rendering in renderGroupCardSection
    $oldCardRender = @'
      <div class="group-card-grid">${groupCards.map((card, index) => {
        const grade = card.grade ?? card.rarity ?? "UR";
        const maxLvl = cardMaxLevel(grade);
        const level = Math.min(cardLevel(card), maxLvl);
        const stats = calculatedStats(card, level);
        const sourceUrl = card.image || imageSources[card.id]?.url || "";
        const isFavorite = Object.hasOwn(favorites, card.id);
        const rating = Number(favorites[card.id]) || 0;
        const targetTeam = getGroupTeam(card.group);
        const selected = targetTeam.includes(card.id);
        const type = cardTypes.find((entry) => entry.id === card.type);
        const typeStyle = type ? `--type-color:${type.color}` : "--type-color:#a9a4b5";
        return `
          <article class="character-card has-card-image grade-${grade.toLowerCase()} type-${card.type || "unknown"}" style="${typeStyle}" data-id="${escapeHtml(card.id)}" data-name="${escapeHtml(card.name)}" data-group="${escapeHtml(card.group)}">
            <div class="card-visual" style="--card-bg:${palette[index % palette.length]}">
              <span class="grade-badge grade-badge-${grade.toLowerCase()}" title="Cấp thẻ ${grade} (Tối đa Lv.${maxLvl})">${escapeHtml(grade)}</span>
              <span class="type-badge" title="Loại thẻ: ${type ? type.name : ""} · Chủ đề: ${card.theme || ""}">${type ? escapeHtml(type.name) : ""}${card.theme ? ` · ${escapeHtml(card.theme)}` : ""}</span>
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
                <span class="card-max-lvl-tag grade-text-${grade.toLowerCase()}">Cấp ${escapeHtml(grade)} · Lv.${maxLvl}</span>
              </div>
              <div class="card-subtitle">
                <span class="card-group-name">${fandomEmojis[card.group] || "✨"} ${escapeHtml(card.group)}</span>
                <span class="card-theme-tag" title="Loại thẻ: ${type ? type.name : ""} · Chủ đề: ${card.theme || ""}">${type ? escapeHtml(type.name) : "Thẻ"}${card.theme ? ` · ${escapeHtml(card.theme)}` : ""}</span>
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
                <label class="card-level-control" title="Điều chỉnh level từ 1 đến ${maxLvl}">LV <input class="card-level-input" type="number" min="1" max="${maxLvl}" value="${level}" data-action="card-level" data-id="${escapeHtml(card.id)}" aria-label="Level ${escapeHtml(card.name)}"> / ${maxLvl}</label>
                <button type="button" class="add-button${selected ? " is-added" : ""}" data-action="team" data-id="${escapeHtml(card.id)}">${selected ? "✓ Đã vào đội" : "＋ Đội hình"}</button>
              </div>
            </div>
          </article>`;
      }).join("")}</div>
'@ -replace "\r\n", "`n"

    $newCardRender = @'
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
'@ -replace "\r\n", "`n"

    if ($content.Contains($oldCardRender)) {
        $content = $content.Replace($oldCardRender, $newCardRender)
        Write-Host "Updated card render in $filePath"
    }

    # 6. Update renderTeam slot sub
    $oldTeamSub = 'LV ${level}/${cardMaxLevel(grade)}'
    $newTeamSub = 'LV ${level}/60'
    if ($content.Contains($oldTeamSub)) {
        $content = $content.Replace($oldTeamSub, $newTeamSub)
        Write-Host "Updated renderTeam level display in $filePath"
    }

    $finalText = $content -replace "`n", "`r`n"
    [System.IO.File]::WriteAllText($filePath, $finalText, [System.Text.Encoding]::UTF8)
    Write-Host "Finished processing $filePath."
}
