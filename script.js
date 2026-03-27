const state = {
  selectedRole: 'All',
  map: null,
  lookupHero: null,
  playerHero: null,
  activeSlot: null,
  enemySlots: {
    tank: null,
    damage1: null,
    damage2: null,
    support1: null,
    support2: null
  }
};

const MAPS = {
  Escort: ['Circuit Royal', 'Dorado', 'Havana', 'Junkertown', 'Rialto', 'Route 66', 'Shambali Monastery', 'Watchpoint: Gibraltar'],
  Hybrid: ['Blizzard World', 'Eichenwalde', 'Hollywood', "King's Row", 'Midtown', 'Numbani', 'Paraiso'],
  Control: ['Antarctic Peninsula', 'Busan', 'Ilios', 'Lijiang Tower', 'Nepal', 'Oasis', 'Samoa'],
  Push: ['Colosseo', 'Esperança', 'New Queen Street', 'Runasapi'],
  Flashpoint: ['New Junk City', 'Suravasa'],
  Clash: ['Hanaoka', 'Throne of Anubis']
};

const MAP_MODE_BONUS = {
  Escort: { Widowmaker: 1.4, Ashe: 1.2, Sigma: 1.1, Ana: 0.8 },
  Hybrid: { Ramattra: 1.2, Winston: 1.1, Cassidy: 0.8, Lúcio: 0.8 },
  Control: { Reaper: 1.2, Mei: 1.1, Lúcio: 1.5, Moira: 1.0, Winston: 0.8 },
  Push: { Sojourn: 1.1, Soldier76: 1.0, Winston: 1.2, Zenyatta: 0.7 },
  Flashpoint: { Tracer: 1.2, Venture: 1.0, Lúcio: 1.4, Winston: 1.2 },
  Clash: { JunkerQueen: 1.2, Mei: 0.9, Reaper: 1.1, Brigitte: 0.9 }
};

const dom = {};
const HERO_BY_NAME = Object.fromEntries(HERO_DB.map(hero => [hero.name, hero]));
const HEROES_BY_ROLE = {
  Tank: HERO_DB.filter(h => h.role === 'Tank').sort((a, b) => a.name.localeCompare(b.name)),
  Damage: HERO_DB.filter(h => h.role === 'Damage').sort((a, b) => a.name.localeCompare(b.name)),
  Support: HERO_DB.filter(h => h.role === 'Support').sort((a, b) => a.name.localeCompare(b.name))
};

init();

function init() {
  cacheDom();
  bindEvents();
  renderSlots();
  renderLookup();
  updateAll();
}

function cacheDom() {
  dom.statusChip = document.getElementById('status-chip');
  dom.enemyCount = document.getElementById('enemy-count');
  dom.playerCount = document.getElementById('player-count');
  dom.results = document.getElementById('results-container');
  dom.bans = document.getElementById('ban-container');
  dom.perks = document.getElementById('perk-container');
  dom.lookup = document.getElementById('lookup-container');
  dom.tooltip = document.getElementById('tooltip');
  dom.slotModal = document.getElementById('slot-modal');
  dom.modalTitle = document.getElementById('modal-title');
  dom.modalCopy = document.getElementById('modal-copy');
  dom.modalList = document.getElementById('modal-hero-list');
  dom.mapBtn = document.getElementById('map-select-btn');
  dom.lookupBtn = document.getElementById('hero-lookup-btn');
  dom.playerBtn = document.getElementById('player-hero-btn');
}

function bindEvents() {
  document.getElementById('reset-btn').addEventListener('click', resetState);
  document.getElementById('close-modal-btn').addEventListener('click', closeModal);
  dom.slotModal.addEventListener('click', (e) => {
    if (e.target.dataset.closeModal === 'true') closeModal();
  });

  document.querySelectorAll('.role-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.role-btn').forEach(x => x.classList.remove('active'));
      btn.classList.add('active');
      state.selectedRole = btn.dataset.role;
      updateAll();
    });
  });

  document.querySelectorAll('.hero-slot').forEach(btn => {
    btn.addEventListener('click', () => openHeroSlotPicker(btn.dataset.slot, btn.dataset.role));
  });

  dom.mapBtn.addEventListener('click', openMapPicker);
  dom.lookupBtn.addEventListener('click', openLookupPicker);
  dom.playerBtn.addEventListener('click', openPlayerPicker);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function resetState() {
  state.selectedRole = 'All';
  state.map = null;
  state.lookupHero = null;
  state.playerHero = null;
  state.activeSlot = null;
  Object.keys(state.enemySlots).forEach(key => state.enemySlots[key] = null);
  document.querySelectorAll('.role-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.role === 'All'));
  updateAll();
}

function getEnemyNames() {
  return Object.values(state.enemySlots).filter(Boolean);
}

function renderSlots() {
  document.querySelectorAll('.hero-slot').forEach(slot => {
    const heroName = state.enemySlots[slot.dataset.slot];
    const role = slot.dataset.role;
    if (!heroName) {
      slot.innerHTML = `
        <div class="hero-slot-inner">
          <span class="slot-empty-badge">+</span>
          <div class="hero-slot-name">Choose ${role}</div>
          <div class="hero-slot-sub">Pick 1 ${role.toLowerCase()} hero</div>
        </div>`;
      return;
    }
    const hero = HERO_BY_NAME[heroName];
    slot.innerHTML = `
      <div class="hero-slot-inner">
        <img src="${hero.image}" alt="${hero.name}">
        <div class="hero-slot-name">${hero.name}</div>
        <div class="hero-slot-sub">${hero.role}</div>
      </div>`;
    hydrateImage(slot.querySelector('img'), hero.name, hero.role);
  });
}

function openHeroSlotPicker(slotKey, role) {
  state.activeSlot = slotKey;
  const taken = new Set(getEnemyNames().filter(name => name !== state.enemySlots[slotKey]));
  dom.modalTitle.textContent = `Choose ${role}`;
  dom.modalCopy.textContent = 'Only heroes from this role are shown. The same hero cannot be picked twice.';
  dom.modalList.innerHTML = '';
  const group = document.createElement('div');
  group.className = 'modal-group';
  group.innerHTML = `<div class="modal-group-title">${role}</div><div class="modal-grid"></div>`;
  const grid = group.querySelector('.modal-grid');

  const clearBtn = document.createElement('button');
  clearBtn.type = 'button';
  clearBtn.className = 'text-option';
  clearBtn.textContent = `Clear ${role} slot`;
  clearBtn.addEventListener('click', () => {
    state.enemySlots[slotKey] = null;
    closeModal();
    updateAll();
  });
  dom.modalList.appendChild(clearBtn);

  HEROES_BY_ROLE[role].forEach(hero => {
    const item = document.createElement('button');
    item.type = 'button';
    item.className = 'modal-hero';
    if (taken.has(hero.name)) item.classList.add('disabled');
    item.innerHTML = `<img src="${hero.image}" alt="${hero.name}"><div class="modal-hero-name">${hero.name}</div>`;
    hydrateImage(item.querySelector('img'), hero.name, hero.role);
    if (!taken.has(hero.name)) {
      item.addEventListener('click', () => {
        state.enemySlots[slotKey] = hero.name;
        closeModal();
        updateAll();
      });
      bindTooltip(item, hero);
    }
    grid.appendChild(item);
  });
  dom.modalList.appendChild(group);
  openModal();
}

function openMapPicker() {
  dom.modalTitle.textContent = 'Choose map';
  dom.modalCopy.textContent = 'Map picker uses the same dark site colors as the rest of the UI.';
  dom.modalList.innerHTML = '';

  const clearBtn = document.createElement('button');
  clearBtn.type = 'button';
  clearBtn.className = 'text-option';
  clearBtn.textContent = 'Clear map';
  clearBtn.addEventListener('click', () => {
    state.map = null;
    closeModal();
    updateAll();
  });
  dom.modalList.appendChild(clearBtn);

  Object.entries(MAPS).forEach(([mode, maps]) => {
    const group = document.createElement('div');
    group.className = 'modal-group';
    const sorted = [...maps].sort((a, b) => a.localeCompare(b));
    group.innerHTML = `<div class="modal-group-title">${mode}</div><div class="modal-grid"></div>`;
    const grid = group.querySelector('.modal-grid');
    sorted.forEach(map => {
      const item = document.createElement('button');
      item.type = 'button';
      item.className = 'text-option';
      item.textContent = map;
      item.addEventListener('click', () => {
        state.map = map;
        closeModal();
        updateAll();
      });
      grid.appendChild(item);
    });
    dom.modalList.appendChild(group);
  });
  openModal();
}

function openLookupPicker() {
  dom.modalTitle.textContent = 'Hero matchup lookup';
  dom.modalCopy.textContent = 'Heroes are shown in role order, then A to Z.';
  dom.modalList.innerHTML = '';

  const clearBtn = document.createElement('button');
  clearBtn.type = 'button';
  clearBtn.className = 'text-option';
  clearBtn.textContent = 'Clear hero lookup';
  clearBtn.addEventListener('click', () => {
    state.lookupHero = null;
    closeModal();
    updateAll();
  });
  dom.modalList.appendChild(clearBtn);

  ['Tank', 'Damage', 'Support'].forEach(role => {
    const group = document.createElement('div');
    group.className = 'modal-group';
    group.innerHTML = `<div class="modal-group-title">${role}</div><div class="modal-grid"></div>`;
    const grid = group.querySelector('.modal-grid');
    HEROES_BY_ROLE[role].forEach(hero => {
      const item = document.createElement('button');
      item.type = 'button';
      item.className = 'modal-hero';
      item.innerHTML = `<img src="${hero.image}" alt="${hero.name}"><div class="modal-hero-name">${hero.name}</div>`;
      hydrateImage(item.querySelector('img'), hero.name, hero.role);
      item.addEventListener('click', () => {
        state.lookupHero = hero.name;
        closeModal();
        updateAll();
      });
      bindTooltip(item, hero);
      grid.appendChild(item);
    });
    dom.modalList.appendChild(group);
  });
  openModal();
}

function openPlayerPicker() {
  dom.modalTitle.textContent = 'Choose your hero';
  dom.modalCopy.textContent = 'Heroes are shown in role order, then A to Z.';
  dom.modalList.innerHTML = '';

  const clearBtn = document.createElement('button');
  clearBtn.type = 'button';
  clearBtn.className = 'text-option';
  clearBtn.textContent = 'Clear current hero';
  clearBtn.addEventListener('click', () => {
    state.playerHero = null;
    closeModal();
    updateAll();
  });
  dom.modalList.appendChild(clearBtn);

  ['Tank', 'Damage', 'Support'].forEach(role => {
    const group = document.createElement('div');
    group.className = 'modal-group';
    group.innerHTML = `<div class="modal-group-title">${role}</div><div class="modal-grid"></div>`;
    const grid = group.querySelector('.modal-grid');
    HEROES_BY_ROLE[role].forEach(hero => {
      const item = document.createElement('button');
      item.type = 'button';
      item.className = 'modal-hero';
      if (getEnemyNames().includes(hero.name)) item.classList.add('disabled');
      item.innerHTML = `<img src="${hero.image}" alt="${hero.name}"><div class="modal-hero-name">${hero.name}</div>`;
      hydrateImage(item.querySelector('img'), hero.name, hero.role);
      if (!getEnemyNames().includes(hero.name)) {
        item.addEventListener('click', () => {
          state.playerHero = hero.name;
          closeModal();
          updateAll();
        });
        bindTooltip(item, hero);
      }
      grid.appendChild(item);
    });
    dom.modalList.appendChild(group);
  });
  openModal();
}

function openModal() {
  dom.slotModal.classList.remove('hidden');
  dom.slotModal.setAttribute('aria-hidden', 'false');
}
function closeModal() {
  dom.slotModal.classList.add('hidden');
  dom.slotModal.setAttribute('aria-hidden', 'true');
}

function updateAll() {
  renderSlots();
  updateButtons();
  updateStatus();
  renderBestPick();
  renderBans();
  renderLookup();
}

function updateButtons() {
  dom.mapBtn.textContent = state.map || 'Choose a map';
  dom.mapBtn.classList.toggle('empty', !state.map);
  dom.lookupBtn.textContent = state.lookupHero || 'Choose one hero';
  dom.lookupBtn.classList.toggle('empty', !state.lookupHero);
  dom.playerBtn.textContent = state.playerHero || 'No hero selected';
  dom.playerBtn.classList.toggle('empty', !state.playerHero);
  dom.enemyCount.textContent = `${getEnemyNames().length} / 5 selected`;
  dom.playerCount.textContent = `${state.playerHero ? 1 : 0} / 1 selected`;
}

function updateStatus() {
  const enemies = getEnemyNames();
  if (!state.map && enemies.length === 0) {
    dom.statusChip.textContent = 'Pick a map and enemy team to start';
    return;
  }
  const pieces = [];
  if (state.map) pieces.push(state.map);
  if (enemies.length) pieces.push(`Enemy: ${enemies.join(', ')}`);
  dom.statusChip.textContent = pieces.join(' // ');
}

function renderBestPick() {
  const enemies = getEnemyNames();
  if (!state.map && enemies.length === 0) {
    dom.results.innerHTML = `<div class="empty-state"><div class="empty-icon">◎</div><h3>No draft yet</h3><p>Pick a map and at least one enemy hero to see your best pick and backup options.</p></div>`;
    dom.perks.innerHTML = `<div class="empty-state compact"><h3>No perk plan yet</h3><p>Your best hero will generate 2 minor perks and 2 major perks. The app will recommend exactly one minor and one major.</p></div>`;
    return;
  }

  const scored = HERO_DB
    .filter(hero => !enemies.includes(hero.name))
    .filter(hero => state.selectedRole === 'All' || hero.role === state.selectedRole)
    .map(hero => scoreHero(hero, enemies, state.map))
    .sort((a, b) => b.score - a.score || a.hero.name.localeCompare(b.hero.name));

  if (!scored.length) {
    dom.results.innerHTML = `<div class="empty-state compact"><h3>No valid pick</h3><p>Change your role filter or enemy team.</p></div>`;
    return;
  }

  const best = scored[0];
  const alts = scored.slice(1, 4);
  dom.results.innerHTML = `
    <div class="result-grid">
      <article class="best-card highlight">
        <div class="result-hero">
          <div class="name-stack">
            <img src="${best.hero.image}" alt="${best.hero.name}">
            <div class="hero-name-under">${best.hero.name}</div>
          </div>
          <div>
            <span class="mini-tag map-tag">${state.map ? `Best for ${state.map}` : 'No map set'}</span>
            <span class="mini-tag enemy-tag">Best score ${best.score.toFixed(1)}</span>
            <h3>${best.hero.role} pick</h3>
            <div class="reason-line">${best.summary}</div>
            <div class="tip-list">${best.hero.tips.slice(0,3).map(t => `<div class="tip">${t}</div>`).join('')}</div>
          </div>
        </div>
      </article>
      <div class="alt-list">${alts.map(item => renderAlt(item)).join('')}</div>
    </div>`;
  dom.results.querySelectorAll('img').forEach(img => hydrateImage(img, img.alt, HERO_BY_NAME[img.alt]?.role));
  renderPerks(best.hero, enemies, state.map);
}

function renderAlt(item) {
  return `<article class="alt-card"><div class="name-stack small"><img src="${item.hero.image}" alt="${item.hero.name}"><div class="hero-name-under">${item.hero.name}</div></div><h3>${item.hero.role}</h3><div class="reason-line">${item.summary}</div><div class="score-pill">Score ${item.score.toFixed(1)}</div></article>`;
}

function scoreHero(hero, enemies, map) {
  let score = 0;
  const beats = [];
  const worries = [];

  enemies.forEach(enemyName => {
    const enemy = HERO_BY_NAME[enemyName];
    if (!enemy) return;
    if (hero.strong_against.includes(enemyName)) {
      score += 3.2;
      beats.push(enemyName);
    }
    if (hero.weak_against.includes(enemyName)) {
      score -= 2.6;
      worries.push(enemyName);
    }
    if (enemy.strong_against.includes(hero.name)) {
      score -= 2.2;
      worries.push(enemyName);
    }
  });

  if (map) {
    const mode = getModeForMap(map);
    const key = normalizeHeroKey(hero.name);
    score += (MAP_MODE_BONUS[mode]?.[key] || MAP_MODE_BONUS[mode]?.[hero.name] || 0);
    if (hero.role === 'Tank' && (mode === 'Hybrid' || mode === 'Escort')) score += 0.2;
    if (hero.role === 'Support' && (mode === 'Control' || mode === 'Flashpoint')) score += 0.2;
  }

  if (state.playerHero) {
    const player = HERO_BY_NAME[state.playerHero];
    if (player && player.role !== hero.role) score += 0.4;
    if (player && hero.strong_against.includes(player.name)) score += 0.4;
  }

  const good = unique(beats).slice(0, 2).join(' and ');
  const bad = unique(worries).slice(0, 1).join('');
  let summary = good ? `${hero.name} plays well into ${good}.` : `${hero.name} is a stable pick here.`;
  if (map) summary += ` ${hero.name} also fits ${map}.`;
  if (bad) summary += ` Watch ${bad}.`;

  return { hero, score, summary };
}

function renderBans() {
  const enemies = getEnemyNames();
  const bestHeroName = dom.results.querySelector('.best-card .hero-name-under')?.textContent;
  if (!enemies.length && !bestHeroName) {
    dom.bans.innerHTML = `<div class="empty-state compact"><h3>No bans yet</h3><p>Add a draft to see the two biggest problem heroes to remove.</p></div>`;
    return;
  }
  const targetName = state.playerHero || bestHeroName;
  const list = HERO_DB
    .filter(hero => !enemies.includes(hero.name) && hero.name !== targetName)
    .map(hero => {
      let score = 0;
      if (targetName && hero.strong_against.includes(targetName)) score += 4;
      enemies.forEach(enemy => {
        if (hero.strong_against.includes(enemy)) score += 1.2;
      });
      return { hero, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score || a.hero.name.localeCompare(b.hero.name))
    .slice(0, 2);

  if (!list.length) {
    dom.bans.innerHTML = `<div class="empty-state compact"><h3>No clear bans</h3><p>No hero stands out as a must-ban right now.</p></div>`;
    return;
  }

  dom.bans.innerHTML = list.map(item => `
    <article class="ban-card">
      <div class="lookup-mini">
        <img src="${item.hero.image}" alt="${item.hero.name}">
        <div>
          <span class="mini-tag enemy-tag">Ban target</span>
          <h3>${item.hero.name}</h3>
          <div class="reason-line">${item.hero.name} is dangerous into your plan and adds pressure to this draft.</div>
        </div>
      </div>
    </article>`).join('');
  dom.bans.querySelectorAll('img').forEach(img => hydrateImage(img, img.alt, HERO_BY_NAME[img.alt]?.role));
}

function renderLookup() {
  if (!state.lookupHero) {
    dom.lookup.innerHTML = `<div class="empty-state compact"><h3>No hero selected</h3><p>Pick one hero from the lookup bar to see counters, threats, and quick tips.</p></div>`;
    return;
  }
  const hero = HERO_BY_NAME[state.lookupHero];
  const strong = hero.strong_against.slice().sort((a,b) => a.localeCompare(b));
  const weak = hero.weak_against.slice().sort((a,b) => a.localeCompare(b));
  dom.lookup.innerHTML = `
    <article class="lookup-card">
      <div class="lookup-mini">
        <img src="${hero.image}" alt="${hero.name}">
        <div>
          <span class="mini-tag map-tag">${hero.role}</span>
          <h3>${hero.name}</h3>
          <div class="reason-line">Short matchup read for quick swaps.</div>
        </div>
      </div>
      <div class="lookup-bullets">
        <div class="lookup-bullet"><strong>Good into:</strong> ${strong.join(', ')}</div>
        <div class="lookup-bullet"><strong>Weak into:</strong> ${weak.join(', ')}</div>
        <div class="lookup-bullet"><strong>Quick tip:</strong> ${hero.tips[0]}</div>
      </div>
    </article>
    <article class="lookup-card">
      <h3>How to use ${hero.name}</h3>
      <div class="lookup-bullets">${hero.tips.slice(0,3).map(t => `<div class="lookup-bullet">${t}</div>`).join('')}</div>
    </article>
    <article class="lookup-card">
      <h3>Fast matchup summary</h3>
      <div class="lookup-bullets">
        <div class="lookup-bullet">Pick ${hero.name} when you can pressure ${strong.slice(0,2).join(' and ')}.</div>
        <div class="lookup-bullet">Avoid long open fights into ${weak.slice(0,2).join(' and ')}.</div>
      </div>
    </article>`;
  dom.lookup.querySelectorAll('img').forEach(img => hydrateImage(img, img.alt, HERO_BY_NAME[img.alt]?.role));
}

function renderPerks(hero, enemies, map) {
  const perks = buildPerks(hero, enemies, map);
  dom.perks.innerHTML = perks.map(perk => `
    <article class="perk-card ${perk.recommended ? 'recommended' : ''}">
      <div class="perk-topline">
        <span class="perk-type">${perk.type}</span>
        ${perk.recommended ? `<span class="perk-win">Best ${perk.type.toLowerCase()} pick</span>` : ''}
      </div>
      <h3>${perk.name}</h3>
      <p>${perk.why}</p>
      <div class="perk-explain">
        <p><strong>How to use it:</strong> ${perk.use}</p>
        <span class="perk-note">${perk.recommended ? `This is the best ${perk.type.toLowerCase()} option here.` : `This loses value here compared with the other ${perk.type.toLowerCase()} choice.`}</span>
      </div>
    </article>`).join('');
}

function buildPerks(hero, enemies, map) {
  const flyers = enemies.filter(name => ['Pharah', 'Echo', 'Mercy'].includes(name)).length;
  const flankers = enemies.filter(name => ['Tracer', 'Sombra', 'Genji', 'Wrecking Ball', 'Doomfist'].includes(name)).length;
  const tanks = enemies.filter(name => HERO_BY_NAME[name]?.role === 'Tank').length;
  const closeMap = ['Control', 'Flashpoint', 'Clash'].includes(getModeForMap(map || ''));

  const minorA = {
    type: 'Minor',
    name: 'Fast Entry',
    score: closeMap || hero.role === 'Tank' ? 3 : 1,
    why: closeMap ? `Shorter fights and closer angles make ${hero.name} stronger when it can get in first.` : `${hero.name} gets a cleaner first touch with faster setup windows.`,
    use: `Use this when you want to take space first and start the fight before the enemy can set up.`
  };
  const minorB = {
    type: 'Minor',
    name: 'Clean Exit',
    score: flankers > 0 || hero.role === 'Support' ? 3 : 1,
    why: flankers > 0 ? `The enemy has dive pressure, so safer escapes are worth more than raw tempo.` : `${hero.name} can keep value longer by living through bad angles.`,
    use: `Hold this value for disengages. Back out after cooldowns, then re-enter when your team is ready.`
  };
  const majorA = {
    type: 'Major',
    name: 'Target Lock',
    score: flyers > 0 || tanks > 0 ? 3 : 1,
    why: flyers > 0 ? `The enemy has air targets, so extra finishing pressure helps confirm kills.` : `Stronger focus fire helps your team burn the front line faster.`,
    use: `Call one target and hard commit when your team has line of sight. Use this to finish low enemies quickly.`
  };
  const majorB = {
    type: 'Major',
    name: 'Snowball Reset',
    score: closeMap || hero.role === 'Damage' ? 2.8 : 1.2,
    why: closeMap ? `Clustered fights let ${hero.name} chain value from one win into the next.` : `This is stronger only when your team is already converting kills fast.`,
    use: `Play this after your first pick. Push your advantage immediately instead of slowing the fight down.`
  };

  const minors = [minorA, minorB];
  const majors = [majorA, majorB];
  const bestMinor = minors.sort((a, b) => b.score - a.score)[0].name;
  const bestMajor = majors.sort((a, b) => b.score - a.score)[0].name;

  return [minorA, minorB, majorA, majorB].map(perk => ({
    ...perk,
    recommended: perk.name === bestMinor || perk.name === bestMajor
  }));
}

function getModeForMap(map) {
  for (const [mode, maps] of Object.entries(MAPS)) {
    if (maps.includes(map)) return mode;
  }
  return '';
}

function unique(items) {
  return [...new Set(items)];
}

function normalizeHeroKey(name) {
  return name.replace(/[^A-Za-z0-9]/g, '');
}

function bindTooltip(el, hero) {
  el.addEventListener('mouseenter', e => showTooltip(e, hero));
  el.addEventListener('mousemove', moveTooltip);
  el.addEventListener('mouseleave', hideTooltip);
}

function showTooltip(e, hero) {
  dom.tooltip.innerHTML = `<strong>${hero.name}</strong>${hero.role} • ${hero.tips[0]}`;
  dom.tooltip.classList.remove('hidden');
  moveTooltip(e);
}
function moveTooltip(e) {
  if (dom.tooltip.classList.contains('hidden')) return;
  const x = Math.min(window.innerWidth - dom.tooltip.offsetWidth - 12, e.clientX + 14);
  const y = Math.min(window.innerHeight - dom.tooltip.offsetHeight - 12, e.clientY + 14);
  dom.tooltip.style.left = `${Math.max(12,x)}px`;
  dom.tooltip.style.top = `${Math.max(12,y)}px`;
}
function hideTooltip() { dom.tooltip.classList.add('hidden'); }

function hydrateImage(img, heroName, role) {
  if (!img) return;
  img.addEventListener('error', () => {
    img.src = makeFallbackIcon(heroName, role || 'Damage');
  }, { once: true });
}

function makeFallbackIcon(name, role) {
  const colorMap = { Tank: '67ffb6', Damage: 'ff4fd8', Support: '61e3ff' };
  const bg = colorMap[role] || '9f7cff';
  const initials = (name || 'H')
    .replace(/[^A-Za-zÀ-ÿ0-9]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0])
    .join('')
    .toUpperCase();
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='128' height='128'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='#${bg}'/><stop offset='100%' stop-color='#111322'/></linearGradient></defs><rect rx='22' width='128' height='128' fill='url(#g)'/><rect x='4' y='4' width='120' height='120' rx='18' fill='none' stroke='rgba(255,255,255,.35)'/><text x='50%' y='52%' dominant-baseline='middle' text-anchor='middle' font-size='52' font-family='Arial' fill='white'>${initials}</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
