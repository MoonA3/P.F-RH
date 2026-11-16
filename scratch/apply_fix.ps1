$files = @('d:\P.F RH\app-v36.js', 'd:\P.F RH\app.js')

foreach ($filePath in $files) {
    $content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)
    $content = $content -replace "\r\n", "`n"

    # 1. Update elements if not already updated
    if (-not $content.Contains('memberFilter: document.querySelector("#member-filter"),')) {
        $oldElem = '  group: document.querySelector("#group-filter"),'
        $newElem = "  group: document.querySelector(`"#group-filter`"),`n  memberFilter: document.querySelector(`"#member-filter`"),`n  memberFilterWrap: document.querySelector(`"#member-filter-wrap`"),"
        $content = $content.Replace($oldElem, $newElem)
    }

    # 2. Update renderFilters
    $oldFilters = @'
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
'@ -replace "\r\n", "`n"

    $newFilters = @'
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
'@ -replace "\r\n", "`n"

    if ($content.Contains($oldFilters)) {
        $content = $content.Replace($oldFilters, $newFilters)
        Write-Host "Updated renderFilters in $filePath"
    }

    # 3. Update renderCards member filter
    $oldRenderCardsStart = @'
function renderCards() {
  const query = elements.search.value.trim().toLocaleLowerCase();
  const group = elements.group.value;
  const level = elements.levelFilter.value;
  const grade = elements.grade.value;
  const type = elements.type.value;
  const filtered = cards.filter((card) => {
    const searchable = `${card.name} ${card.group} ${card.grade ?? card.rarity} ${card.type ?? ""} ${card.theme ?? ""}`.toLocaleLowerCase();
    return (!query || searchable.includes(query)) &&
      (!group || card.group === group) &&
      (!level || cardLevel(card) === Number(level)) &&
'@ -replace "\r\n", "`n"

    $newRenderCardsStart = @'
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
'@ -replace "\r\n", "`n"

    if ($content.Contains($oldRenderCardsStart)) {
        $content = $content.Replace($oldRenderCardsStart, $newRenderCardsStart)
        Write-Host "Updated renderCards filtering in $filePath"
    }

    # 4. Update button text in card
    $oldBtn = '<button type="button" class="song-recommend-button" data-action="songs" data-id="${escapeHtml(card.id)}">♫ Bài điểm cao cùng nhóm</button>'
    $newBtn = '<button type="button" class="song-recommend-button" data-action="songs" data-id="${escapeHtml(card.id)}">♫ Bài điểm cao của ${escapeHtml(card.name)}</button>'
    if ($content.Contains($oldBtn)) {
        $content = $content.Replace($oldBtn, $newBtn)
        Write-Host "Updated song-recommend-button label in $filePath"
    }

    # 5. Update action === "songs" handler
    $oldSongsHandler = @'
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
'@ -replace "\r\n", "`n"

    $newSongsHandler = @'
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
'@ -replace "\r\n", "`n"

    if ($content.Contains($oldSongsHandler)) {
        $content = $content.Replace($oldSongsHandler, $newSongsHandler)
        Write-Host "Updated action songs handler in $filePath"
    }

    # 6. Update event listeners
    $oldListeners = @'
elements.group.addEventListener("change", renderCards);
elements.levelFilter.addEventListener("change", renderCards);
elements.grade.addEventListener("change", renderCards);
elements.type.addEventListener("change", renderCards);
elements.favoritesOnly.addEventListener("change", renderCards);
document.querySelector("#reset-filters-btn")?.addEventListener("click", () => {
  elements.search.value = "";
  elements.group.value = "";
  elements.levelFilter.value = "";
  elements.grade.value = "";
  elements.type.value = "";
  elements.favoritesOnly.checked = false;
  renderCards();
});
'@ -replace "\r\n", "`n"

    $newListeners = @'
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
'@ -replace "\r\n", "`n"

    if ($content.Contains($oldListeners)) {
        $content = $content.Replace($oldListeners, $newListeners)
        Write-Host "Updated filter change listeners in $filePath"
    }

    $finalText = $content -replace "`n", "`r`n"
    [System.IO.File]::WriteAllText($filePath, $finalText, [System.Text.Encoding]::UTF8)
    Write-Host "Processed $filePath successfully."
}
