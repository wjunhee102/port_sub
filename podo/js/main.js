const header = $("#header"),
         caseMove = $(".case"),
         quick01 = $(".menu_quick li:first-child"),
         quick01Btn = $(".quick01Btn"),
         quick02 = $(".menu_quick li:nth-child(2)"),
         quick02Btn = $(".quick02Btn"),
         quick03 = $(".menu_quick li:nth-child(3)"),
         quick03Btn = $(".quick03Btn"),
         quick04 = $(".menu_quick li:nth-child(4)"),
         quick04Btn = $(".quick04Btn"),
         quick05 = $(".menu_quick li:nth-child(5)"),
         quick05Btn = $(".quick05Btn"),
         quick06 = $(".menu_quick li:nth-child(6)"),
         quick06Btn = $(".quick06Btn"),
         quick07 = $(".menu_quick li:nth-child(7)"),
         quick07Btn = $(".quick07Btn"),
         quick08 = $(".menu_quick li:nth-child(8)"),
         quick08Btn = $(".quick08Btn"),
         quick09 = $(".menu_quick li:nth-child(9)"),
         quick09Btn = $(".quick09Btn"),
         quick10 = $(".menu_quick li:nth-child(10)"),
         quick10Btn = $(".quick10Btn"),
         quick11 = $(".menu_quick li:nth-child(11)"),
         quick11Btn = $(".quick11Btn"),
         quick12 = $(".menu_quick li:last-child"),
         quick12Btn = $(".quick12Btn"),
         sec03_img = $('.section03 .section03_inner .imagesGroup'),
         sec04_move1 = $('.section04 .section04_inner .img_group'),
         sec05_move = $(".section05 .section05_inner .img_group"),
         section08_slide = $(".section08 .slide")
         ;
const    quickbtn = $(".menu_quick li"),
         section = $("section"),
         btnQuick = $(".next_btn")

         $(()=>{
            
            $(window).scroll(()=>{
               let y = $(document).scrollTop();

            if( 1276 <= y &&  y < 2302){
            header.addClass("moving");
            caseMove.addClass("move");
            header.removeClass("fixed");
            quick01.removeClass('on');
            quick02.addClass('on');
            quick03.removeClass('on');
            } else if( 2302 <= y && y < 3302){
            header.addClass("moving");   
            quick01.removeClass('on');
            quick02.removeClass('on');
            quick03.addClass('on');
            quick04.removeClass('on');
            sec03_img.addClass('imagesGroup_move');
            }else if( 3302 <= y && y < 4442 ){
            header.addClass("moving");   
            quick01.removeClass('on');   
            quick03.removeClass('on');
            quick05.removeClass('on');
            quick04.addClass('on'); 
            sec04_move1.addClass('img_group_moving');
            }else if( 4442 <= y && y < $('.section06').offset().top){
            header.addClass("moving"); 
            quick01.removeClass('on');   
            quick04.removeClass('on');
            quick06.removeClass('on'); 
            quick05.addClass('on'); 
            sec05_move.addClass('img_group_moving');
            }
            else if( $('.section06').offset().top <= y && y < $('.section07').offset().top){
            header.addClass("moving");    
            quick01.removeClass('on');   
            quick05.removeClass('on');
            quick07.removeClass('on');
            quick06.addClass('on'); 
            $('.section06_inner').addClass('moving');
            }
            else if( $('.section07').offset().top <= y && y < $('.section08').offset().top ){
            header.addClass("moving");    
            quick01.removeClass('on');   
            quick06.removeClass('on');
            quick08.removeClass('on');
            quick07.addClass('on'); 
            $('.section07_inner').addClass('moving');
            }
            else if( $('.section08').offset().top <= y && y < $('.section09').offset().top ){
            header.addClass("moving");    
            quick01.removeClass('on');   
            quick07.removeClass('on');
            quick09.removeClass('on');
            quick08.addClass('on'); 
            }
            else if( $('.section09').offset().top <= y && y < $('.section10').offset().top ){
            header.addClass("moving");    
            quick01.removeClass('on');   
            quick08.removeClass('on');
            quick10.removeClass('on');
            quick09.addClass('on'); 
            $('.section09_inner').addClass('moving');
            }
            else if( $('.section10').offset().top <= y && y < $('.section11').offset().top ){
            header.addClass("moving");    
            quick01.removeClass('on');   
            quick09.removeClass('on');
            quick11.removeClass('on');
            quick10.addClass('on'); 
            $('.section10_inner').addClass('moving');
            }
            else if( $('.section11').offset().top <= y && y < $('.section12').offset().top ){
            header.addClass("moving");    
            quick01.removeClass('on');   
            quick10.removeClass('on');
            quick12.removeClass('on');
            quick11.addClass('on'); 
            $('.section11_inner').addClass('moving');
            }
            else if( $('.section12').offset().top <= y ){
            header.addClass("moving");    
            quick01.removeClass('on');   
            quick11.removeClass('on');
            quick12.addClass('on'); 
            $('.section12_inner').addClass('moving');
            }
            else if( y < 1277){
            header.addClass("fixed");
            caseMove.removeClass("move");
            header.removeClass("moving");
            quick04.removeClass('on');
            quick02.removeClass('on');
            quick03.removeClass('on');
            quick05.removeClass('on');
            quick06.removeClass('on');
            quick07.removeClass('on');
            quick08.removeClass('on');
            quick09.removeClass('on');
            quick10.removeClass('on');
            quick11.removeClass('on');
            quick12.removeClass('on');
            quick01.addClass('on');
            sec04_move1.removeClass('img_group_moving');  
            sec03_img.removeClass('imagesGroup_move');
            sec05_move.removeClass('img_group_moving');
            $('.section06_inner').removeClass('moving');
            $('.section07_inner').removeClass('moving');
            $('.section08_inner').removeClass('moving');
            $('.section09_inner').removeClass('moving');
            $('.section10_inner').removeClass('moving');
            $('.section11_inner').removeClass('moving');
            $('.section12_inner').removeClass('moving');
            };
         });
      });

      //스크롤 이동
      $(function(){
         quickbtn.click(function(){
            let a = $(this).index();
            $("body,html").stop().animate({scrollTop: section.eq(a).offset().top},1000);
         });
      });
      // 다음 섹션 스크롤 이동 
      $(function(){
         btnQuick.click(function(){
            let b = $(this).parents("section");
            console.log(b);
            $("body,html").stop().animate({scrollTop: b.next().offset().top},1000); 
         });
      });

      // const case_btn = $(".section10_inner");
      // const bbb = $(".btn_case_box li");
      // const ccc = $(".case li");
      // const      
      //    btn_case = $(".btn_case li"),
      //    btn_case_l = $(".btn_case_left li"),
      //    btn_case_r = $(".btn_case_right li"),
      //    case_item = $(".case li"),
      //    case_l = $(".case_left li"),
      //    case_r = $(".case_right li")
      //    ;
      // $(function(){
      //    btn_case_l.click(function(){
      //       btn_case.removeClass("on");
      //       case_item.removeClass("on");
      //       let a = $(this).index();
      //       btn_case_l.eq(a).addClass("on");
      //       case_l.eq(a).addClass("on");
      //    });
      // });

      // $(function(){
      //    btn_case_r.click(function(){
      //       btn_case.removeClass("on");
      //       case_item.removeClass("on");
      //       let a = $(this).index();
      //       btn_case_r.eq(a).addClass("on");
      //       case_r.eq(a).addClass("on");
      //    });
      // });

      // $(()=> {
      //    btn_case.click(function(){
      //       let a = $(this).index();
      //       btn_case.removeClass("on");
      //       case_item.removeClass("on");
      //       btn_case.eq(a).addClass("on");
      //       case_item.eq(a).addClass("on");
      //    });
      // });