// eslint-disable-next-line no-unused-vars
const oAuth2 = {
  /**
   * Initialize
   */
  init() {
    this.KEY = 'Sellog_token';
    this.ACCESS_TOKEN_URL = 'https://k8a404.p.ssafy.io/oauth2/authorization/github';
  },

  /**
   * Begin
   */
  begin() {
    this.init(); // secure token params.
    
    let url = `${this.ACCESS_TOKEN_URL}`;

    chrome.storage.local.set({ pipe_Sellog: true }, () => {
      // opening pipe temporarily

      chrome.tabs.create({ url, selected: true }, function () {
        window.close();
        chrome.tabs.getCurrent(function (tab) {
          // chrome.tabs.remove(tab.id, function () {});
        });
      });
    });
  },
};