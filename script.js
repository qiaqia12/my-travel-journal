const places = {
  taikoo: {
    name: '太古里 / 春熙路',
    mapLabel: '太古里',
    type: '街区',
    x: 472,
    y: 232,
    labelX: -126,
    labelY: -18,
    desc: '抵达当天适合轻松逛，不安排复杂动线。',
    photo: '街拍、夜景、城市细节',
    food: '火锅、川菜小馆、甜品',
  },
  museum: {
    name: '成都博物馆',
    mapLabel: '成都博物馆',
    type: '博物馆',
    x: 360,
    y: 228,
    labelX: 18,
    labelY: -20,
    desc: '放在市中心慢游日，上午看展，下午接人民公园。',
    photo: '建筑线条、展厅光影',
    food: '附近可接人民公园小吃',
  },
  peoplePark: {
    name: '人民公园',
    mapLabel: '人民公园',
    type: '茶馆',
    x: 305,
    y: 270,
    labelX: -108,
    labelY: 28,
    desc: '盖碗茶和竹椅子留足时间，适合拍人文。',
    photo: '茶馆、人文、树影',
    food: '钟水饺、甜水面、蛋烘糕',
  },
  kuanzhai: {
    name: '宽窄巷子 / 奎星楼街',
    mapLabel: '宽窄 / 奎星楼',
    type: '街巷',
    x: 238,
    y: 238,
    labelX: -92,
    labelY: -24,
    desc: '放在人民公园之后，慢慢走到晚饭。',
    photo: '巷子、店招、街头小吃',
    food: '串串、小吃、川菜',
  },
  panda: {
    name: '熊猫基地',
    mapLabel: '熊猫基地',
    type: '景点',
    x: 585,
    y: 120,
    labelX: 18,
    labelY: -18,
    desc: '早起单独安排，上午看完后回市区休息。',
    photo: '熊猫、竹林、园区绿意',
    food: '回市区吃午饭更稳',
  },
  jianshe: {
    name: '建设路 / 东郊记忆',
    mapLabel: '建设路 / 东郊',
    type: '夜晚',
    x: 565,
    y: 285,
    labelX: 18,
    labelY: 24,
    desc: '适合熊猫基地当天晚上，路线在成都偏东侧。',
    photo: '工业风、夜景、小吃街',
    food: '夜宵、小吃、串串',
  },
  qingcheng: {
    name: '青城山前山',
    mapLabel: '青城山',
    type: '山水',
    x: 105,
    y: 115,
    labelX: 18,
    labelY: -18,
    desc: '29号自驾一日线的第一站，上午走精华段。',
    photo: '山林、道观、石径',
    food: '景区附近简餐',
  },
  dujiangyan: {
    name: '都江堰景区',
    mapLabel: '都江堰',
    type: '世界遗产',
    x: 145,
    y: 185,
    labelX: -84,
    labelY: 8,
    desc: '下午看核心景区，傍晚接南桥和灌县古城。',
    photo: '水利工程、古桥、水声',
    food: '南桥、灌县古城晚饭',
  },
  nanqiao: {
    name: '南桥 / 灌县古城',
    mapLabel: '南桥',
    type: '夜景',
    x: 170,
    y: 225,
    labelX: 24,
    labelY: 38,
    desc: '自驾线最后一站，吃晚饭和拍夜景。',
    photo: '桥、灯光、水面倒影',
    food: '本地菜、夜宵',
  },
  wuhou: {
    name: '武侯祠 / 锦里',
    mapLabel: '武侯祠 / 锦里',
    type: '古迹',
    x: 320,
    y: 365,
    labelX: -110,
    labelY: -18,
    desc: '红墙竹影适合上午或下午光线柔和时拍。',
    photo: '红墙、竹影、古建筑',
    food: '锦里小吃可浅尝',
  },
  yulin: {
    name: '玉林',
    mapLabel: '玉林',
    type: '街区',
    x: 365,
    y: 420,
    labelX: -56,
    labelY: 30,
    desc: '适合慢逛、咖啡和街头照片。',
    photo: '街头、咖啡、生活感',
    food: '川菜、咖啡、小酒馆',
  },
  jiuyan: {
    name: '九眼桥',
    mapLabel: '九眼桥',
    type: '夜景',
    x: 470,
    y: 390,
    labelX: 18,
    labelY: 24,
    desc: '晚上散步和拍夜景，适合放在返程前一晚。',
    photo: '桥、河边、夜色',
    food: '夜宵、酒馆、川菜',
  },
};

const days = {
  'day-27': {
    kicker: '抵达成都',
    title: '7月27日 · 城市初见',
    summary: '抵达、入住、在太古里和春熙路附近轻松吃第一顿。',
    color: '#9b3b34',
    route: ['taikoo'],
    optional: ['peoplePark', 'jiuyan'],
    slots: ['傍晚', '晚上', '夜间'],
  },
  'day-28': {
    kicker: '城市中心慢游',
    title: '7月28日 · 博物馆、茶馆和街巷',
    summary: '成都博物馆、人民公园、宽窄巷子和奎星楼街，市中心偏西，移动短。',
    color: '#54705b',
    route: ['museum', 'peoplePark', 'kuanzhai'],
    optional: ['taikoo'],
    slots: ['上午', '下午', '傍晚', '晚上'],
  },
  'day-29': {
    kicker: '自驾山水线',
    title: '7月29日 · 青城山和都江堰',
    summary: '租车早出发，上午青城山前山，下午都江堰，傍晚南桥和灌县古城。',
    color: '#2f6652',
    route: ['qingcheng', 'dujiangyan', 'nanqiao'],
    optional: [],
    slots: ['09:00', '14:00', '17:30'],
  },
  'day-30': {
    kicker: '熊猫和夜色',
    title: '7月30日 · 熊猫基地之后回到城市',
    summary: '早起去熊猫基地，下午回酒店休息，晚上去建设路或东郊记忆。',
    color: '#765f43',
    route: ['panda', 'jianshe'],
    optional: ['wuhou', 'yulin', 'jiuyan'],
    slots: ['早上', '晚上', '备选', '备选'],
  },
  'day-31': {
    kicker: '返程',
    title: '7月31日 · 早餐、伴手礼和返程',
    summary: '早餐、伴手礼、整理照片和行李，同天返程。',
    color: '#8b493d',
    route: ['taikoo'],
    optional: ['museum'],
    slots: ['上午', '中午'],
  },
};

const stateKey = 'chengdu-journal-route-state';
const hiddenKey = 'chengdu-journal-hidden-places';
const dayOrder = Object.keys(days);
const travelTimes = {
  'taikoo>peoplePark': '打车约18分钟',
  'taikoo>jiuyan': '打车约16分钟',
  'museum>peoplePark': '步行约18分钟',
  'museum>kuanzhai': '打车约12分钟',
  'peoplePark>kuanzhai': '步行约18分钟',
  'peoplePark>taikoo': '打车约18分钟',
  'kuanzhai>taikoo': '打车约22分钟',
  'panda>jianshe': '打车约28分钟',
  'panda>wuhou': '打车约45分钟',
  'panda>yulin': '打车约42分钟',
  'panda>jiuyan': '打车约38分钟',
  'jianshe>wuhou': '打车约30分钟',
  'jianshe>yulin': '打车约28分钟',
  'jianshe>jiuyan': '打车约18分钟',
  'wuhou>yulin': '打车约15分钟',
  'wuhou>jiuyan': '打车约20分钟',
  'yulin>jiuyan': '打车约18分钟',
  'qingcheng>dujiangyan': '自驾约30分钟',
  'dujiangyan>nanqiao': '步行或短途打车约12分钟',
  'nanqiao>taikoo': '自驾回成都约1.5小时',
  'taikoo>museum': '打车约12分钟',
};
let activeDay = 'day-27';
let activePlace = days[activeDay].route[0];
let userRoutes = JSON.parse(localStorage.getItem(stateKey) || '{}');
let hiddenPlaces = {};
localStorage.removeItem(hiddenKey);

const pinsLayer = document.querySelector('#map-pins');
const routePath = document.querySelector('#route-path');
const routeList = document.querySelector('#route-list');
const routeAction = document.querySelector('#route-action');

function getRoute(dayId) {
  const baseRoute = days[dayId].route;
  const savedRoute = userRoutes[dayId] || [];
  const addedStops = savedRoute.filter((id) => !baseRoute.includes(id));
  return [...baseRoute, ...addedStops];
}

function getAddedRouteIds(dayId) {
  return getRoute(dayId).filter((id) => !days[dayId].route.includes(id));
}

function previousAddedIds(dayId) {
  return new Set();
}

function getDisplayRoute(dayId) {
  const previousAdded = previousAddedIds(dayId);
  return getRoute(dayId).filter((id) => !previousAdded.has(id));
}

function setRoute(dayId, route) {
  userRoutes = { ...userRoutes, [dayId]: route };
  localStorage.setItem(stateKey, JSON.stringify(userRoutes));
}

function setHidden(dayId, ids) {
  hiddenPlaces = { ...hiddenPlaces, [dayId]: ids };
  localStorage.setItem(hiddenKey, JSON.stringify(hiddenPlaces));
}

function previousRouteIds(dayId) {
  return new Set();
}

function visiblePlaceIds(dayId) {
  const day = days[dayId];
  const route = getDisplayRoute(dayId);
  const previous = previousRouteIds(dayId);
  return [...new Set([...route, ...day.optional])].filter((id) => {
    if (route.includes(id)) return true;
    return !previous.has(id);
  });
}

function getTravelTime(fromId, toId) {
  if (!fromId || !toId) return '';
  return travelTimes[`${fromId}>${toId}`] || travelTimes[`${toId}>${fromId}`] || '按现场导航';
}

function getNextInfo(placeId) {
  const route = getDisplayRoute(activeDay);
  const index = route.indexOf(placeId);
  if (index >= 0) {
    const nextId = route[index + 1];
    return nextId ? `${places[nextId].name} · ${getTravelTime(placeId, nextId)}` : '今天最后一站';
  }
  const lastId = route[route.length - 1];
  return lastId ? `加入后接在 ${places[lastId].name} 后 · ${getTravelTime(lastId, placeId)}` : '加入后成为今日第一站';
}

function routeLine(route) {
  if (!route.length) return '';
  return route
    .map((id, index) => {
      const place = places[id];
      return `${index === 0 ? 'M' : 'L'} ${place.x} ${place.y}`;
    })
    .join(' ');
}

function renderPins() {
  const route = getDisplayRoute(activeDay);
  const allIds = visiblePlaceIds(activeDay);
  if (!allIds.includes(activePlace)) {
    activePlace = route[0] || allIds[0];
  }
  pinsLayer.innerHTML = allIds
    .map((id) => {
      const place = places[id];
      const inRoute = route.includes(id);
      const order = route.indexOf(id) + 1;
      const active = activePlace === id;
      return `
        <g class="pin ${inRoute ? 'in-route' : ''} ${active ? 'active' : ''}" data-place="${id}" tabindex="0" role="button" aria-label="${place.name}">
          <circle class="pin-dot" cx="${place.x}" cy="${place.y}" r="${active ? 15 : 13}"></circle>
          ${inRoute ? `<text class="pin-number" x="${place.x}" y="${place.y + 5}">${order}</text>` : ''}
          <text class="pin-label" x="${place.x + place.labelX}" y="${place.y + place.labelY}">${place.mapLabel || place.name}</text>
        </g>
      `;
    })
    .join('');

  document.querySelectorAll('.pin').forEach((pin) => {
    const select = () => {
      activePlace = pin.dataset.place;
      render();
    };
    pin.addEventListener('click', select);
    pin.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        select();
      }
    });
  });
}

function renderItinerary() {
  const day = days[activeDay];
  const route = getDisplayRoute(activeDay);
  document.querySelector('#day-kicker').textContent = day.kicker;
  document.querySelector('#day-title').textContent = day.title;
  document.querySelector('#day-summary').textContent = day.summary;
  document.querySelector('#map-mode').textContent = day.kicker;
  document.querySelector('#route-count').textContent = `${route.length}站`;
  const orderedStops = route
    .map((id, index) => {
      const place = places[id];
      const added = !day.route.includes(id);
      const nextId = route[index + 1];
      const move = nextId ? `到下一站：${getTravelTime(id, nextId)}` : '今天最后一站';
      const slot = day.slots[index] || '加入';
      return `
        <article class="${added ? 'added' : ''}">
          <span>${String(index + 1).padStart(2, '0')}</span>
          <p>
            <strong>${slot} · ${place.name}</strong>
            <em>${move}</em>
          </p>
        </article>
      `;
    })
    .join('');

  routeList.innerHTML = `
    <div class="route-list-title">站点顺序</div>
    ${orderedStops}
  `;
}

function renderPlace() {
  const place = places[activePlace];
  const route = getDisplayRoute(activeDay);
  const inRoute = route.includes(activePlace);
  document.querySelector('#place-type').textContent = place.type;
  document.querySelector('#place-name').textContent = place.name;
  document.querySelector('#place-desc').textContent = place.desc;
  document.querySelector('#place-next').textContent = getNextInfo(activePlace);
  document.querySelector('#place-photo').textContent = place.photo;
  document.querySelector('#place-food').textContent = place.food;
  const isBaseStop = days[activeDay].route.includes(activePlace);
  routeAction.textContent = inRoute && !isBaseStop ? '取消加入今日路线' : inRoute ? '今日路线站点' : '加入今日路线';
  routeAction.disabled = inRoute && isBaseStop;
  routeAction.classList.toggle('remove', inRoute && !isBaseStop);
  routeAction.classList.toggle('added', inRoute && isBaseStop);
}

function renderTabs() {
  document.querySelectorAll('.day-tab').forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.day === activeDay);
  });
}

function render() {
  const day = days[activeDay];
  document.documentElement.style.setProperty('--route-color', day.color);
  routePath.setAttribute('d', routeLine(getDisplayRoute(activeDay)));
  renderTabs();
  renderPins();
  renderItinerary();
  renderPlace();
}

if (pinsLayer && routePath && routeList && routeAction) {
  document.querySelectorAll('.day-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      activeDay = tab.dataset.day;
      activePlace = getDisplayRoute(activeDay)[0];
      render();
    });
  });

  routeAction.addEventListener('click', () => {
    const storedRoute = getRoute(activeDay);
    const displayRoute = getDisplayRoute(activeDay);
    if (displayRoute.includes(activePlace)) {
      if (displayRoute.length <= 1) return;
      const nextRoute = storedRoute.filter((id) => id !== activePlace);
      setRoute(activeDay, nextRoute);
      activePlace = getDisplayRoute(activeDay)[0];
      render();
      return;
    }
    setHidden(activeDay, (hiddenPlaces[activeDay] || []).filter((id) => id !== activePlace));
    setRoute(activeDay, [...storedRoute, activePlace]);
    render();
  });

  render();
}

document.querySelectorAll('.nav-trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.nav-item');
    const expanded = trigger.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.nav-trigger').forEach((other) => other.setAttribute('aria-expanded', 'false'));
    trigger.setAttribute('aria-expanded', String(!expanded));
    item.classList.toggle('open', !expanded);
    document.querySelectorAll('.nav-item').forEach((other) => {
      if (other !== item) other.classList.remove('open');
    });
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-item')) {
    document.querySelectorAll('.nav-item').forEach((item) => item.classList.remove('open'));
    document.querySelectorAll('.nav-trigger').forEach((trigger) => trigger.setAttribute('aria-expanded', 'false'));
  }
});
