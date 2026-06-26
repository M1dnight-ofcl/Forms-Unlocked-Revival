export default defineBackground(()=>{
  chrome.runtime.onInstalled.addListener(() => {
    const urlPatterns = ['https://docs.google.com/forms/d/e/*'];
    chrome.contextMenus.create({
      title: 'Display Google',
      documentUrlPatterns: urlPatterns,
      id: 'displayGoogle',
      contexts: ['all'],
    });
    chrome.contextMenus.create({
      title: 'Change Button Display',
      id: 'modifyButtonDisplay',
      documentUrlPatterns: urlPatterns,
      contexts: ['all'],
    });
    chrome.contextMenus.create({
      title: 'Destroy All',
      id: 'emergencyDestroy',
      documentUrlPatterns: urlPatterns,
      contexts: ['all'],
    });
    chrome.contextMenus.create({
      title: 'Restart Extension (After Destroy)',
      id: 'restartExt',
      documentUrlPatterns: urlPatterns,
      contexts: ['all'],
    });
  });
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (!tab?.id) return;
    chrome.tabs.sendMessage(tab.id, {
      message: info.menuItemId,
    });
  });
});