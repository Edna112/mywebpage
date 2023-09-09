var daysOfTheWeek = ['sunday', 'monday', 'tuesday', 'wednesday','thursday', 'friday','saturday'];
var today = new Date();
var currentDay = today.getDay();
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = daysOfTheWeek[currentDay];
var currrentUTCTime = Date.now();
document.querySelector('[data-testid="currentUTCTime"]').textContent= currrentUTCTime;