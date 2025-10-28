document.fonts.ready.then(() => {
  console.log('Polices disponibles:', Array.from(document.fonts).map(f => f.family));
  document.fonts.forEach(font => {
    console.log('Police:', font.family, 'Status:', font.status);
  });
});
//mappings
const circuitMaps = {
  'bahrain': 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244985/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Bahrain_Circuit.png',
  'jeddah': 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244987/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Saudi_Arabia_Circuit.png',
  'albert_park': 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244984/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Australia_Circuit.png',
  'suzuka': 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244989/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Japan_Circuit.png',
  'shanghai': 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244986/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/China_Circuit.png',
  'miami': 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244988/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Miami_Circuit.png',
  'imola': 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244987/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Emilia_Romagna_Circuit.png',
  'monaco': 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244988/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Monaco_Circuit.png',
  'villeneuve': 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244986/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Canada_Circuit.png',
  'catalunya': 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244988/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Spain_Circuit.png',
  'red_bull_ring': 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244984/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Austria_Circuit.png',
  'silverstone': 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244989/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Great_Britain_Circuit.png',
  'hungaroring': 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244987/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Hungary_Circuit.png',
  'spa': 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244985/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Belgium_Circuit.png',
  'zandvoort': 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244989/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Netherlands_Circuit.png',
  'monza': 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244987/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Italy_Circuit.png',
  'baku': 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244984/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Azerbaijan_Circuit.png',
  'marina_bay': 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244988/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Singapore_Circuit.png',
  'americas': 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244989/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/USA_Circuit.png',
  'rodriguez': 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244988/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Mexico_Circuit.png',
  'interlagos': 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244985/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Brazil_Circuit.png',
  'vegas': 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244989/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Las_Vegas_Circuit.png',
  'losail': 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244988/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Qatar_Circuit.png',
  'yas_marina': 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677244984/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Abu_Dhabi_Circuit.png'
};

const driverPhotos = {
  'norris': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/1col/image.png',
  'piastri': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/1col/image.png',
  'max_verstappen': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/1col/image.png',
  'leclerc': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/1col/image.png',
  'sainz': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/1col/image.png',
  'perez': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/1col/image.png',
  'russell': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/1col/image.png',
  'hamilton': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/1col/image.png',
  'alonso': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/1col/image.png',
  'stroll': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/1col/image.png',
  'gasly': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/1col/image.png',
  'ocon': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/1col/image.png',
  'tsunoda': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/1col/image.png',
  'hulkenberg': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/1col/image.png',
  'ricciardo': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png.transform/1col/image.png',
  'magnussen': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/K/KEVMAG01_Kevin_Magnussen/kevmag01.png.transform/1col/image.png',
  'albon': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/1col/image.png',
  'sargeant': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LOGSAR01_Logan_Sargeant/logsar01.png.transform/1col/image.png',
  'bottas': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/1col/image.png',
  'zhou': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GUAZHO01_Guanyu_Zhou/guazho01.png.transform/1col/image.png',
  'colapinto': 'https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/colapinto.jpg.img.1536.medium.jpg/1723553488381.jpg',
  'lawson': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LIALAW01_Liam_Lawson/lialaw01.png.transform/1col/image.png',
  'bearman': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OLIBEA01_Oliver_Bearman/olibea01.png.transform/1col/image.png',
  'antonelli': 'https://media.formula1.com/image/upload/c_fill,w_720,h_720,g_face/q_auto/v1740000000/common/f1/2025/mercedes/andant01/2025mercedesandant01right.webp',
  'doohan': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/J/JACDOO01_Jack_Doohan/jacdoo01.png.transform/1col/image.png',
  'hadjar': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/I/ISAHAD01_Isack_Hadjar/isahad01.png.transform/1col/image.png',
  'bortoleto': 'https://media.formula1.com/image/upload/c_fill,w_720,h_720,g_face/q_auto/v1740000000/common/f1/2025/kicksauber/gabbor01/2025kicksaubergabbor01right.webp'
};

//pilote excluded (doohan has been replaced)
const excludedDrivers = ['doohan'];

let panelOpen = false;
let currentTab = 'drivers';
let allDriversData = [];

const teamColors = {
  'Red Bull': '#3671C6',
  'Ferrari': '#E8002D',
  'Mercedes': '#27F4D2',
  'McLaren': '#FF8000',
  'Aston Martin': '#229971',
  'Alpine': '#FF87BC',
  'Williams': '#64C4FF',
  'AlphaTauri': '#5E8FAA',
  'Alfa Romeo': '#C92D4B',
  'Haas': '#B6BABD',
  'RB': '#6692FF',
  'Sauber': '#52E252',
  'Kick Sauber': '#52E252'
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'togglePanel') {
    togglePanel();
  } else if (request.action === 'autoOpenPanel') {
    if (!panelOpen) {
      togglePanel();
    }
  }
});

function createPanel() {
  if (document.getElementById('f1-extension-panel')) return;

  const panel = document.createElement('div');
  panel.id = 'f1-extension-panel';
  panel.className = 'f1-panel';
  
  panel.innerHTML = `
    <div class="f1-panel-header">
      <div class="f1-logo">F1</div>
      <button class="f1-close-btn">✕</button>
    </div>
    <div class="f1-next-race-container">
      <div class="f1-loading">Chargement du prochain GP...</div>
    </div>
    <div class="f1-tabs">
      <button class="f1-tab active" data-tab="drivers">Pilotes</button>
      <button class="f1-tab" data-tab="constructors">Constructeurs</button>
    </div>
    <div class="f1-content">
      <div class="f1-tab-content active" id="drivers-content">
        <div class="f1-loading">Chargement des classements...</div>
      </div>
      <div class="f1-tab-content" id="constructors-content">
        <div class="f1-loading">Chargement des constructeurs...</div>
      </div>
    </div>
  `;

  document.body.appendChild(panel);

  panel.querySelector('.f1-close-btn').addEventListener('click', togglePanel);
  
  panel.querySelectorAll('.f1-tab').forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });

  loadNextRace();
  loadDriverStandings();
  loadConstructorStandings();
}

function togglePanel() {
  const panel = document.getElementById('f1-extension-panel');
  
  if (!panel) {
    createPanel();
    panelOpen = true;
  } else {
    if (panelOpen) {
      panel.style.transform = 'translateX(100%)';
      setTimeout(() => panel.remove(), 300);
      panelOpen = false;
    } else {
      createPanel();
      panelOpen = true;
    }
  }
}

function switchTab(tabName) {
  currentTab = tabName;
  
  document.querySelectorAll('.f1-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.tab === tabName);
  });
  
  document.querySelectorAll('.f1-tab-content').forEach(content => {
    content.classList.toggle('active', content.id === `${tabName}-content`);
  });
}

async function loadNextRace() {
  try {
    const response = await chrome.runtime.sendMessage({ action: 'getNextRace' });
    
    if (response && response.success) {
      displayNextRace(response.data);
    } else {
      throw new Error(response?.error || 'Erreur inconnue');
    }
  } catch (error) {
    console.error('Erreur chargement prochain GP:', error);
    const container = document.querySelector('.f1-next-race-container');
    if (container) {
      container.innerHTML = '<div class="f1-loading">Prochain GP en attente...</div>';
    }
  }
}

async function loadDriverStandings() {
  try {
    const response = await chrome.runtime.sendMessage({ action: 'getDriverStandings' });
    
    if (response && response.success) {
      allDriversData = response.data; 
      displayDriverStandings(response.data);
    } else {
      throw new Error(response?.error || 'Erreur inconnue');
    }
  } catch (error) {
    console.error('Erreur chargement classement pilotes:', error);
    const content = document.getElementById('drivers-content');
    if (content) {
      content.innerHTML = '<div class="f1-loading">Erreur de chargement</div>';
    }
  }
}

async function loadConstructorStandings() {
  try {
    const response = await chrome.runtime.sendMessage({ action: 'getConstructorStandings' });
    
    if (response && response.success) {
      displayConstructorStandings(response.data);
    } else {
      throw new Error(response?.error || 'Erreur inconnue');
    }
  } catch (error) {
    console.error('Erreur chargement classement constructeurs:', error);
    const content = document.getElementById('constructors-content');
    if (content) {
      content.innerHTML = '<div class="f1-loading">Erreur de chargement</div>';
    }
  }
}

function displayNextRace(race) {
  const container = document.querySelector('.f1-next-race-container');
  const raceDate = new Date(race.date + 'T' + race.time);
  
  const options = { 
    weekday: 'short', 
    day: 'numeric', 
    month: 'short', 
    hour: '2-digit', 
    minute: '2-digit' 
  };
  const formattedDate = raceDate.toLocaleDateString('fr-FR', options);
  
  const circuitId = race.Circuit.circuitId;
  const circuitImageUrl = circuitMaps[circuitId];
  
  console.log('Circuit ID:', circuitId, 'URL:', circuitImageUrl); //debug
  
  container.innerHTML = `
    <div class="f1-next-race">
      <div class="f1-next-race-label">PROCHAIN GP</div>
      <div class="f1-next-race-name">${race.raceName}</div>
      <div class="f1-next-race-circuit">${race.Circuit.circuitName}</div>
      <div class="f1-next-race-date">${formattedDate}</div>
      <div class="f1-circuit-layout">
        ${circuitImageUrl ? `
          <img src="${circuitImageUrl}" 
               alt="${race.Circuit.circuitName}" 
               class="circuit-image"
               onerror="console.error('Erreur chargement circuit:', this.src);">
        ` : '<div class="f1-loading">Tracé du circuit non disponible</div>'}
      </div>
    </div>
  `;
}

function displayDriverStandings(standings) {
  const content = document.getElementById('drivers-content');
  //filter for dhooan
  const filteredStandings = standings.filter(driver => 
    !excludedDrivers.includes(driver.Driver.driverId)
  );
  
  let html = '<div class="f1-standings">';
  
  filteredStandings.forEach((driver) => {
    const position = driver.position;
    const isTopThree = position <= 3;
    const teamColor = teamColors[driver.Constructors[0].name] || '#666';
    const driverId = driver.Driver.driverId;
    
    const photoUrl = driverPhotos[driverId] || 'https://via.placeholder.com/80x80/15151e/E10600?text=' + (driver.Driver.code || 'F1');
    
    if (isTopThree) {
      html += `
        <div class="f1-driver-card top-three" style="border-left: 4px solid ${teamColor}">
          <div class="f1-driver-position">${position}</div>
          <div class="f1-driver-image">
            <img src="${photoUrl}" 
                 alt="${driver.Driver.givenName}"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="driver-initial">${driver.Driver.code || driver.Driver.familyName.substring(0, 3).toUpperCase()}</div>
          </div>
          <div class="f1-driver-info">
            <div class="f1-driver-name">${driver.Driver.givenName} ${driver.Driver.familyName}</div>
            <div class="f1-driver-team">${driver.Constructors[0].name}</div>
            <div class="f1-driver-points">${driver.points} pts</div>
          </div>
          <div class="f1-driver-flag">${getFlag(driver.Driver.nationality)}</div>
        </div>
      `;
    } else {
      html += `
        <div class="f1-driver-row" 
             style="border-left: 3px solid ${teamColor}"
             data-driver='${JSON.stringify({
               position: position,
               givenName: driver.Driver.givenName,
               familyName: driver.Driver.familyName,
               code: driver.Driver.code,
               nationality: driver.Driver.nationality,
               team: driver.Constructors[0].name,
               points: driver.points,
               driverId: driverId,
               teamColor: teamColor
             })}'>
          <span class="f1-driver-pos">${position}</span>
          <span class="f1-driver-flag-small">${getFlag(driver.Driver.nationality)}</span>
          <span class="f1-driver-name-small">${driver.Driver.familyName}</span>
          <span class="f1-driver-points-small">${driver.points}</span>
          <span class="f1-expand-icon">›</span>
        </div>
      `;
    }
  });
  
  html += '</div>';
  content.innerHTML = html;
  
  document.querySelectorAll('.f1-driver-row').forEach(row => {
    row.addEventListener('click', () => toggleDriverExpand(row));
  });
}

function toggleDriverExpand(row) {
  const isExpanded = row.classList.contains('expanded');
  document.querySelectorAll('.f1-driver-row.expanded').forEach(r => {
    if (r !== row) {
      r.classList.remove('expanded');
    }
  });
  
  if (isExpanded) {
    row.classList.remove('expanded');
  } else {
    const driverData = JSON.parse(row.getAttribute('data-driver'));
    const photoUrl = driverPhotos[driverData.driverId] || 'https://via.placeholder.com/80x80/15151e/E10600?text=' + (driverData.code || 'F1');
    
    row.classList.add('expanded');

    row.innerHTML = `
      <div class="f1-driver-position">${driverData.position}</div>
      <div class="f1-driver-image">
        <img src="${photoUrl}" 
             alt="${driverData.givenName}"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="driver-initial">${driverData.code || driverData.familyName.substring(0, 3).toUpperCase()}</div>
      </div>
      <div class="f1-driver-info">
        <div class="f1-driver-name">${driverData.givenName} ${driverData.familyName}</div>
        <div class="f1-driver-team">${driverData.team}</div>
        <div class="f1-driver-points">${driverData.points} pts</div>
      </div>
      <div class="f1-driver-flag">${getFlag(driverData.nationality)}</div>
      <div class="f1-collapse-icon">×</div>
    `;
    
    row.addEventListener('click', () => {
      row.classList.remove('expanded');
      row.innerHTML = `
        <span class="f1-driver-pos">${driverData.position}</span>
        <span class="f1-driver-flag-small">${getFlag(driverData.nationality)}</span>
        <span class="f1-driver-name-small">${driverData.familyName}</span>
        <span class="f1-driver-points-small">${driverData.points}</span>
        <span class="f1-expand-icon">›</span>
      `;
      row.addEventListener('click', () => toggleDriverExpand(row));
    }, { once: true });
  }
}

function displayConstructorStandings(standings) {
  const content = document.getElementById('constructors-content');
  
  let html = '<div class="f1-constructors">';
  
  standings.forEach((constructor) => {
    const teamColor = teamColors[constructor.Constructor.name] || '#666';
    const constructorId = constructor.Constructor.constructorId;
    
    const carMapping = {
      'mclaren': 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/mclaren.png.transform/4col/image.png',
      'ferrari': 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/ferrari.png.transform/4col/image.png',
      'red_bull': 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/red-bull-racing.png.transform/4col/image.png',
      'mercedes': 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/mercedes.png.transform/4col/image.png',
      'aston_martin': 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/aston-martin.png.transform/4col/image.png',
      'alpine': 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/alpine.png.transform/4col/image.png',
      'haas': 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/haas-f1-team.png.transform/4col/image.png',
      'rb': 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/rb.png.transform/4col/image.png',
      'williams': 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/williams.png.transform/4col/image.png',
      'sauber': 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/kick-sauber.png.transform/4col/image.png',
      'alphatauri': 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/rb.png.transform/4col/image.png'
    };
    
    const carUrl = carMapping[constructorId] || '';
    
    const teamDrivers = allDriversData.filter(driver => 
      driver.Constructors[0].constructorId === constructorId &&
      !excludedDrivers.includes(driver.Driver.driverId)
    );
    
    html += `
      <div class="f1-constructor-card" 
           style="border-left: 4px solid ${teamColor}"
           data-constructor='${JSON.stringify({
             name: constructor.Constructor.name,
             constructorId: constructorId,
             position: constructor.position,
             points: constructor.points,
             teamColor: teamColor,
             carUrl: carUrl,
             drivers: teamDrivers
           })}'>
        <div class="f1-constructor-position">${constructor.position}</div>
        <div class="f1-constructor-info">
          <div class="f1-constructor-name">${constructor.Constructor.name}</div>
          <div class="f1-constructor-points">${constructor.points} points</div>
        </div>
        <div class="f1-constructor-car">
          ${carUrl ? `<img src="${carUrl}" alt="${constructor.Constructor.name}" class="car-image">` : `
            <svg viewBox="0 0 120 40" class="car-svg">
              <path d="M10,25 L20,20 L40,18 L60,18 L80,20 L100,25 L110,25 L105,30 L15,30 Z" 
                    fill="${teamColor}" 
                    stroke="#000" 
                    stroke-width="1"/>
              <circle cx="30" cy="30" r="5" fill="#1a1a1a" stroke="#666" stroke-width="1"/>
              <circle cx="90" cy="30" r="5" fill="#1a1a1a" stroke="#666" stroke-width="1"/>
              <path d="M45,18 L45,15 L75,15 L75,18" fill="#1a1a1a"/>
            </svg>
          `}
        </div>
        <span class="f1-expand-icon">›</span>
      </div>
    `;
  });
  
  html += '</div>';
  content.innerHTML = html;
  
  document.querySelectorAll('.f1-constructor-card').forEach(card => {
    card.addEventListener('click', () => toggleConstructorExpand(card));
  });
}

function toggleConstructorExpand(card) {
  const isExpanded = card.classList.contains('expanded');
  
  if (isExpanded) {
    loadConstructorStandings();
    return;
  }
  
  const constructorData = JSON.parse(card.getAttribute('data-constructor'));
  const constructorId = constructorData.constructorId;
  
  loadConstructorStandings().then(() => {
    setTimeout(() => {
      const cards = document.querySelectorAll('.f1-constructor-card');
      cards.forEach(c => {
        const data = JSON.parse(c.getAttribute('data-constructor'));
        if (data.constructorId === constructorId) {
          openConstructorCard(c);
        }
      });
    }, 100);
  });
}

function openConstructorCard(card) {
  const constructorData = JSON.parse(card.getAttribute('data-constructor'));
  
  card.classList.add('expanded');
  
  let driversHtml = '';
  constructorData.drivers.forEach(driver => {
    const photoUrl = driverPhotos[driver.Driver.driverId] || 'https://via.placeholder.com/60x60/15151e/E10600?text=' + (driver.Driver.code || 'F1');
    driversHtml += `
      <div class="f1-team-driver">
        <div class="f1-team-driver-image">
          <img src="${photoUrl}" 
               alt="${driver.Driver.givenName}"
               onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="driver-initial-small">${driver.Driver.code || driver.Driver.familyName.substring(0, 3).toUpperCase()}</div>
        </div>
        <div class="f1-team-driver-info">
          <div class="f1-team-driver-name">${driver.Driver.givenName} ${driver.Driver.familyName}</div>
          <div class="f1-team-driver-points">${driver.points} pts</div>
        </div>
        <div class="f1-team-driver-flag">${getFlag(driver.Driver.nationality)}</div>
      </div>
    `;
  });
  
  card.innerHTML = `
    <div class="f1-constructor-expanded-header">
      <div class="f1-constructor-position">${constructorData.position}</div>
      <div class="f1-constructor-info">
        <div class="f1-constructor-name">${constructorData.name}</div>
        <div class="f1-constructor-points">${constructorData.points} points</div>
      </div>
      <div class="f1-collapse-icon">×</div>
    </div>
    <div class="f1-constructor-car-large">
      ${constructorData.carUrl ? `<img src="${constructorData.carUrl}" alt="${constructorData.name}" class="car-image-large">` : ''}
    </div>
    <div class="f1-team-drivers-list">
      ${driversHtml}
    </div>
  `;
  
  card.querySelector('.f1-collapse-icon').addEventListener('click', (e) => {
    e.stopPropagation();
    loadConstructorStandings();
  });
}

function getFlag(nationality) {
  const flags = {
    'Dutch': '🇳🇱', 
    'Mexican': '🇲🇽', 
    'Monegasque': '🇲🇨', 
    'Spanish': '🇪🇸',
    'British': '🇬🇧', 
    'Australian': '🇦🇺', 
    'German': '🇩🇪', 
    'Canadian': '🇨🇦',
    'French': '🇫🇷', 
    'Japanese': '🇯🇵', 
    'Thai': '🇹🇭', 
    'Chinese': '🇨🇳',
    'Finnish': '🇫🇮', 
    'Danish': '🇩🇰', 
    'American': '🇺🇸', 
    'New Zealander': '🇳🇿',
    'Italian': '🇮🇹',
    'Belgian': '🇧🇪',
    'Brazilian': '🇧🇷',
    'Argentine': '🇦🇷',
    'Polish': '🇵🇱',
    'Swiss': '🇨🇭',
    'Swedish': '🇸🇪',
    'Austrian': '🇦🇹',
    'Russian': '🇷🇺',
    'Hungarian': '🇭🇺'
  };
  return flags[nationality] || '🏁';
}

chrome.storage.local.get('shouldAutoOpen', (result) => {
  if (result.shouldAutoOpen) {
    setTimeout(() => {
      togglePanel();
      chrome.storage.local.set({ shouldAutoOpen: false });
    }, 1000);
  }
});