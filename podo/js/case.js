const btn_case_box = document.querySelector(".btn_case_box"),
      case_item01 = document.querySelectorAll(".case li"),
      btn_case01 = document.querySelectorAll(".btn_case li"),
      mobile = document.querySelector(".mobile")
const on = "on";
      
function btn_caseOnRemove(){
         let ii =0;
         while(ii<10){
            btn_case01[ii].classList.remove("on");
            case_item01[ii].classList.remove("on");
            ii++;
         }
      }
      
function btn_caseOnRemove2(){
   let btnOn = btn_case_box.querySelector(`.${on}`);
   if (btnOn){
      btnOn.classList.remove(on);
   }
}
function btn_caseOnAdd(){
   for( let i = 0; i < btn_case01.length; i++) {
      btn_case01[i].onclick = function(){ 
      const btnOn = btn_case_box.querySelector(`.${on}`);
      const mobileOn = mobile.querySelector(`.${on}`);
      if (btnOn) {
         btnOn.classList.remove(on);
         mobileOn.classList.remove(on);
      } 
      case_item01[i].classList.add("on");
      btn_case01[i].classList.add("on");
      }
   }
}

// btn_case_box.addEventListener("mouseenter",btn_caseOnAdd);
function init(){
   btn_caseOnAdd();
}
init();
