const API_BASE = 'https://api.jolpi.ca/ergast/f1';

chrome.alarms.create('checkRaceResults', { periodInMinutes: 60 });

chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === 'checkRaceResults') {
    await checkForNewRaceResults();
  }
});

chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, { action: 'togglePanel' });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getNextRace') {
    fetchNextRace().then(sendResponse);
    return true;
  }
  
  if (request.action === 'getDriverStandings') {
    fetchDriverStandings().then(sendResponse);
    return true;
  }
  
  if (request.action === 'getConstructorStandings') {
    fetchConstructorStandings().then(sendResponse);
    return true;
  }
});

async function fetchNextRace() {
  try {
    const response = await fetch(`${API_BASE}/current/next.json`);
    const data = await response.json();
    
    if (data.MRData?.RaceTable?.Races?.length > 0) {
      return { success: true, data: data.MRData.RaceTable.Races[0] };
    }
    return { success: false, error: 'No race data' };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function fetchDriverStandings() {
  try {
    const response = await fetch(`${API_BASE}/current/driverStandings.json`);
    const data = await response.json();
    
    if (data.MRData?.StandingsTable?.StandingsLists?.length > 0) {
      return { success: true, data: data.MRData.StandingsTable.StandingsLists[0].DriverStandings };
    }
    return { success: false, error: 'No standings' };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function fetchConstructorStandings() {
  try {
    const response = await fetch(`${API_BASE}/current/constructorStandings.json`);
    const data = await response.json();
    
    if (data.MRData?.StandingsTable?.StandingsLists?.length > 0) {
      return { success: true, data: data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings };
    }
    return { success: false, error: 'No constructor data' };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function checkForNewRaceResults() {
  try {
    const response = await fetch(`${API_BASE}/current/last/results.json`);
    const data = await response.json();
    
    if (data.MRData?.RaceTable?.Races?.length > 0) {
      const lastRace = data.MRData.RaceTable.Races[0];
      const raceDate = new Date(lastRace.date + 'T' + lastRace.time);
      const now = new Date();
      const hoursSinceRace = (now - raceDate) / (1000 * 60 * 60);
      
      if (hoursSinceRace >= 3 && hoursSinceRace <= 6) {
        const { lastNotifiedRace } = await chrome.storage.local.get('lastNotifiedRace');
        const raceId = lastRace.round + '-' + lastRace.season;
        
        if (lastNotifiedRace !== raceId) {
          await chrome.storage.local.set({ 
            lastNotifiedRace: raceId,
            shouldAutoOpen: true 
          });
          
          const tabs = await chrome.tabs.query({});
          tabs.forEach(tab => {
            chrome.tabs.sendMessage(tab.id, { action: 'autoOpenPanel' }).catch(() => {});
          });
        }
      }
    }
  } catch (error) {
    console.error('Erreur:', error);
  }
}

chrome.runtime.onInstalled.addListener(() => {
  checkForNewRaceResults();
});

chrome.runtime.onStartup.addListener(() => {
  checkForNewRaceResults();
});
