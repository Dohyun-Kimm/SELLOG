
// Set to true to enable console log
const debug = false;

let loader;
let iscsQuiz = false;
let iscsQuizBattle = false;

const currentUrl = window.location.href;
// console.log(currentUrl);


if (currentUrl.includes('k8a404.p.ssafy.io')) startLoader();
else stopLoader();


function startLoader() {
  if (loader) {
    return;
  }

  loader = setInterval(async () => {
    // 기능 Off시 작동하지 않도록 함
    // console.log(ispublish);
    if (document.querySelector("#root > div > main > button") && !iscsQuiz) {
      iscsQuiz = true;
      const csQuizBtn = document.querySelector("#root > div > main > button");

      const csQuizHandler = async (e) => {
        
        stopLoader();
        try {
          uploadCsOnSellog();
        } catch(error){
          console.log(error);
        } finally {
          iscsQuiz = false;
          startLoader();
        }
      }

      // 기존의 이벤트 리스너 제거 후, 다시 등록
      csQuizBtn.removeEventListener('click', csQuizHandler);
      csQuizBtn.addEventListener('click', csQuizHandler); 
    }else if(!document.querySelector("#root > div > main > button")){
      iscsQuiz = false;
    }


    if (document.querySelector("#root > div > section > button") && !iscsQuizBattle) {
      iscsQuizBattle = true;
      const csQuizBattleBtn = document.querySelecto("#root > div > section > button");

      const csQuizBattleHandler = async (e) => {
        
        stopLoader();
        try {
          uploadCsOnSellog();
        } catch(error){
          console.log(error);
        } finally {
          iscsQuizBattle = false;
          startLoader();
        }
      }

      // 기존의 이벤트 리스너 제거 후, 다시 등록
      csQuizBattleBtn.removeEventListener('click', csQuizBattleHandler);
      csQuizBattleBtn.addEventListener('click', csQuizBattleHandler); 
    } else if (!document.querySelector("#root > div > section > button")) {
      iscsQuizBattle = false;
    }


    // if (currentUrl.includes('k8a404.p.ssafy.io/feed')) {
    //   const allATags = document.querySelectorAll('a');
    //   allATags.forEach((aTag) => {
    //     aTag.addEventListener('click', async (e) => {
    //       try {
    //         uploadCsOnSellog();
    //       } catch (error) {
    //         console.log(error);
    //       }
    //     });
    //   });
    // }

  }, 2000);
}


function stopLoader() {
  clearInterval(loader);
  loader = null;
}
  