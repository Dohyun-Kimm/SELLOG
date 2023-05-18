
// Set to true to enable console log
const debug = false;

let loader;

const currentUrl = window.location.href;
console.log(currentUrl);

if(currentUrl.includes('k8a404.p.ssafy.io')){
  window.addEventListener('hashchange', function(event) {
    console.log(event);
    if (window.location.href.includes('csquiz-result')) {
      console.log("csQuiz_result");
      const csQuizBtn = document.querySelector("#root > div > main > button");

      const csQuizHandler = async (e) => {
        try {
          uploadCsOnSellog();
        } catch(error){
          console.log(error);
        }
      }

      // 기존의 이벤트 리스너 제거 후, 다시 등록
      csQuizBtn.removeEventListener('click', csQuizHandler);
      csQuizBtn.addEventListener('click', csQuizHandler); 
    }

    if (window.location.href.includes('csquiz-battle-result')) {
      console.log("csQuiz_battle_result");
      const csQuizBattleBtn = document.querySelecto("#root > div > section > button");

      const csQuizBattleHandler = async (e) => {
        try {
          uploadCsOnSellog();
        } catch(error){
          console.log(error);
        }
        }

      // 기존의 이벤트 리스너 제거 후, 다시 등록
      csQuizBattleBtn.removeEventListener('click', csQuizBattleHandler);
      csQuizBattleBtn.addEventListener('click', csQuizBattleHandler); 
    }

    if (window.location.href.includes('feed')) {
      console.log("feed");
      const allATags = document.querySelectorAll('a');
      allATags.forEach((aTag) => {
        aTag.addEventListener('click', async (e) => {
          try {
            uploadCsOnSellog();
          } catch (error) {
            console.log(error);
          }
        });
      });
    }
  });
}
