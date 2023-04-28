/**
 * solvedac 문제 데이터를 파싱해오는 함수.
 * @param {int} problemId
 */
async function SolvedApiCall(problemId) {
  return fetch(`https://solved.ac/api/v3/problem/show?problemId=${problemId}`, { method: 'GET' })
    .then((query) => query.json());
}

function handleMessage(request, sender, sendResponse) {
  if (request && request.closeWebPage === true && request.isSuccess === true) {
    /* Set username */
    chrome.storage.local.set(
      { Sellog_username: request.nickname } /* , () => {
      window.localStorage.Sellog_username = request.username;
    } */,
    );

    /* Set token */
    chrome.storage.local.set(
      { Sellog_token: request.token } /* , () => {
      window.localStorage[request.KEY] = request.token;
    } */,
    );

    /* Close pipe */
    chrome.storage.local.set({ pipe_Sellog: false }, () => {
      console.log('Closed pipe.');
    });

    // chrome.tabs.getSelected(null, function (tab) {
    //   chrome.tabs.remove(tab.id);
    // });

    /* Go to onboarding for UX */
    const urlOnboarding = `chrome-extension://${chrome.runtime.id}/welcome.html`;
    chrome.tabs.create({ url: urlOnboarding, selected: true }); // creates new tab
  } else if (request && request.closeWebPage === true && request.isSuccess === true) {
    alert('Something went wrong while trying to authenticate your profile!');
    chrome.tabs.getSelected(null, function (tab) {
      chrome.tabs.remove(tab.id);
    });
  } else if (request && request.sender == "baekjoon" && request.task == "SolvedApiCall") {
    SolvedApiCall(request.problemId).then((res) => sendResponse(res));
    //sendResponse(SolvedApiCall(request.problemId))
  }
  return true;
}

chrome.runtime.onMessage.addListener(handleMessage);