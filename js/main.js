$(function(){





    /* 화면 이동시 부드럽게 이동 스크립트 시작 */
    $(function() {
        class Scrooth {
            constructor({
              element = window,
              strength = 10,
              acceleration = 1.2,
              deceleration = 0.975,
            } = {}) {
              // 초기 설정을 받아와서 클래스의 속성으로 할당
              this.element = element;
              this.distance = strength;
              this.acceleration = acceleration;
              this.deceleration = deceleration;
              this.running = false;
    
              // 스크롤 이벤트 리스너 등록
              this.element.addEventListener(
                "wheel",
                this.scrollHandler.bind(this),
                { passive: false }
              );
              this.element.addEventListener(
                "mousewheel",
                this.scrollHandler.bind(this),
                { passive: false }
              );
              this.scroll = this.scroll.bind(this);
            }
    
            // 스크롤 이벤트 핸들러
            scrollHandler(e) {
              e.preventDefault();
    
              if (!this.running) {
                // 스크롤이 시작되면 초기화하고 애니메이션 시작
                this.top = this.element.pageYOffset || this.element.scrollTop || 0;
                this.running = true;
                this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
                this.isDistanceAsc = true;
                this.scroll();
              } else {
                // 스크롤 중에는 방향 및 거리 설정
                this.isDistanceAsc = false;
                this.currentDistance =
                  e.deltaY > 0 ? this.distance : -this.distance;
              }
            }
    
            // 실제 스크롤 애니메이션을 처리하는 메소드
            scroll() {
              if (this.running) {
                // 애니메이션 진행 중
                this.currentDistance *=
                  this.isDistanceAsc === true
                    ? this.acceleration
                    : this.deceleration;
    
                // 애니메이션 종료 조건
                Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false
                  ? (this.running = false)
                  : 1;
                Math.abs(this.currentDistance) >= Math.abs(this.distance)
                  ? (this.isDistanceAsc = false)
                  : 1;
    
                // 현재 위치 갱신 및 스크롤 이동
                this.top += this.currentDistance;
                this.element.scrollTo(0, this.top);
    
                // 다음 프레임 요청
                requestAnimationFrame(this.scroll);
              }
            }
          }
    
          const scroll = new Scrooth({
            element: window,
            strength: 40, //스크롤 한번에 이동하는 거리
            acceleration: 1.75,
            deceleration: 0.875,
          });
    
    
    })
    /* 화면 이동시 부드럽게 이동 스크립트 종료 */

    /* quick 스크립트 시작 */
    $(function(){
        $('.quick > div > ul .depth_01 > a').click(function(){
            $('.quick > div > ul .depth_02').toggleClass('on')
        })
    })
    /* quick 스크립트 종료 */


    /* menu_btn 스크립트 시작 */
    $(function(){
        $('.menu_btn').click(function () {
            $(this).toggleClass('on')
            $('.menu').toggleClass('on')
        })
    })
    /* menu_btn 스크립트 종료 */





    /* left_menu 스크립트 시작 */
    $(function(){
        /* 스와이퍼 */
        var swiper = new Swiper(".left_menu_Swiper", {
            effect : 'fade',
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });




        /* nav 스크립트 */

        $('.left_menu .left_pop .nav ul li').click(function(){
            $('.left_menu .left_pop .nav ul li').removeClass('on')
            $(this).addClass('on')
        })

    })

    /* left_menu 스크립트 종료 */

    


    /* main_visual 스크립트 시작 */
    $(function(){
        var swiper = new Swiper(".main_visual_Swiper", {
            effect : 'fade',
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
              el: ".main_visual .swiper-pagination",
              type: "fraction",
            },
            navigation: {
              nextEl: ".main_visual .swiper-button-next",
              prevEl: ".main_visual .swiper-button-prev",
            },
          });
    })
    /* main_visual 스크립트 종료 */


    /* section2 tab_menu 스크립트 시작 */
    $(function(){
        let smallImage = $('.section2 .inner .tab_menu .right >div')
        let bigImage = $('.section2 .inner .tab_menu .left > img')


        smallImage.click(function(){
            smallImage.removeClass('on')
            $(this).addClass('on')
            let bigImageChange = $(this).find('img').attr('src')
            bigImage.attr('src', bigImageChange)
        })



    })
    /* section2 tab_menu 스크립트 종료 */



    /* section3 machine 스크립트 시작 */
    $(function(){
        var swiper = new Swiper(".machine_Swiper", {
            slidesPerView: 1,
            spaceBetween: 25,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
              el: ".machine_Swiper .swiper-pagination",
              type: "progressbar",
            },
            breakpoints: {
              500: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 50,
              },
            },
          });
              
    })
    /* section3 machine 스크립트 종료 */




    /* section4 스크립트 시작 */
    $(function(){    


        $('.section4 .doctor .slide img:nth-child(1)').click(function(){
            $('.section4 .inner .text_box .arrow img:nth-child(1)').addClass('on')
            $('.section4 .inner .text_box .arrow img:nth-child(2)').removeClass('on')
            $('.section4 .inner .text_box .text').removeClass('on')
            $('.section4 .inner .text_box .text:nth-child(2)').addClass('on')
            $(this).addClass('on')
            $(this).removeClass('on1')
            $(this).removeClass('on2')
            $('.section4 .doctor .slide img:nth-child(2)').removeClass('on')
            $('.section4 .doctor .slide img:nth-child(2)').removeClass('on2')
            $('.section4 .doctor .slide img:nth-child(2)').addClass('on1')
            $('.section4 .doctor .slide img:nth-child(3)').removeClass('on')
            $('.section4 .doctor .slide img:nth-child(3)').removeClass('on1')
            $('.section4 .doctor .slide img:nth-child(3)').addClass('on2')
        })
        $('.section4 .doctor .slide img:nth-child(2)').click(function(){
            $('.section4 .inner .text_box .arrow img:nth-child(1)').removeClass('on')
            $('.section4 .inner .text_box .arrow img:nth-child(2)').removeClass('on')

            $('.section4 .inner .text_box .text').removeClass('on')
            $('.section4 .inner .text_box .text:nth-child(3)').addClass('on')

            $(this).addClass('on')
            $(this).removeClass('on1')
            $(this).removeClass('on2')
            $('.section4 .doctor .slide img:nth-child(1)').removeClass('on')
            $('.section4 .doctor .slide img:nth-child(1)').removeClass('on1')
            $('.section4 .doctor .slide img:nth-child(1)').addClass('on2')
            $('.section4 .doctor .slide img:nth-child(3)').removeClass('on2')
            $('.section4 .doctor .slide img:nth-child(3)').removeClass('on')
            $('.section4 .doctor .slide img:nth-child(3)').addClass('on1')
        })
        $('.section4 .doctor .slide img:nth-child(3)').click(function(){
            $('.section4 .inner .text_box .arrow img:nth-child(1)').removeClass('on')
            $('.section4 .inner .text_box .arrow img:nth-child(2)').addClass('on')

            $('.section4 .inner .text_box .text').removeClass('on')
            $('.section4 .inner .text_box .text:nth-child(4)').addClass('on')

            $(this).addClass('on')
            $(this).removeClass('on1')
            $(this).removeClass('on2')
            $('.section4 .doctor .slide img:nth-child(1)').removeClass('on')
            $('.section4 .doctor .slide img:nth-child(1)').removeClass('on2')
            $('.section4 .doctor .slide img:nth-child(1)').addClass('on1')
            $('.section4 .doctor .slide img:nth-child(2)').removeClass('on')
            $('.section4 .doctor .slide img:nth-child(2)').removeClass('on1')
            $('.section4 .doctor .slide img:nth-child(2)').addClass('on2')
        })

        $('.section4 .inner .text_box .arrow img:nth-child(2)').click(function(){
    
            if($('.section4 .doctor img:nth-child(1)').hasClass('on') === true){
                $('.section4 .inner .text_box .text').removeClass('on')
                $('.section4 .inner .text_box .text:nth-child(3)').addClass('on')
    
                $('.section4 .inner .text_box .arrow img:nth-child(1)').removeClass('on')
                $('.section4 .doctor img:nth-child(1)').removeClass('on')
                $('.section4 .doctor img:nth-child(1)').addClass('on2')
                $('.section4 .doctor img:nth-child(2)').removeClass('on1')
                $('.section4 .doctor img:nth-child(2)').addClass('on')
                $('.section4 .doctor img:nth-child(3)').removeClass('on2')
                $('.section4 .doctor img:nth-child(3)').addClass('on1')
            }
            else if($('.section4 .doctor img:nth-child(2)').hasClass('on') === true){
                $('.section4 .inner .text_box .text').removeClass('on')
                $('.section4 .inner .text_box .text:nth-child(4)').addClass('on')
    
                $('.section4 .inner .text_box .arrow img:nth-child(2)').addClass('on')
                $('.section4 .doctor img:nth-child(1)').removeClass('on2')
                $('.section4 .doctor img:nth-child(1)').addClass('on1')
                $('.section4 .doctor img:nth-child(2)').removeClass('on')
                $('.section4 .doctor img:nth-child(2)').addClass('on2')
                $('.section4 .doctor img:nth-child(3)').removeClass('on1')
                $('.section4 .doctor img:nth-child(3)').addClass('on')
    
            }
            
        })
        $('.section4 .inner .text_box .arrow img:nth-child(1)').click(function(){
            if($('.section4 .doctor img:nth-child(2)').hasClass('on') === true){
                $('.section4 .inner .text_box .text').removeClass('on')
                $('.section4 .inner .text_box .text:nth-child(2)').addClass('on')
    
                $('.section4 .inner .text_box .arrow img:nth-child(1)').addClass('on')
                $('.section4 .doctor img:nth-child(1)').removeClass('on2')
                $('.section4 .doctor img:nth-child(1)').addClass('on')
                $('.section4 .doctor img:nth-child(2)').removeClass('on')
                $('.section4 .doctor img:nth-child(2)').addClass('on1')
                $('.section4 .doctor img:nth-child(3)').removeClass('on1')
                $('.section4 .doctor img:nth-child(3)').addClass('on2')
            }
            else if($('.section4 .doctor img:nth-child(3)').hasClass('on') === true){
                $('.section4 .inner .text_box .text').removeClass('on')
                $('.section4 .inner .text_box .text:nth-child(3)').addClass('on')
    
                $('.section4 .inner .text_box .arrow img:nth-child(2)').removeClass('on')
                $('.section4 .doctor img:nth-child(1)').removeClass('on1')
                $('.section4 .doctor img:nth-child(1)').addClass('on2')
                $('.section4 .doctor img:nth-child(2)').removeClass('on2')
                $('.section4 .doctor img:nth-child(2)').addClass('on')
                $('.section4 .doctor img:nth-child(3)').removeClass('on')
                $('.section4 .doctor img:nth-child(3)').addClass('on1')
    
            }
    
    
        })

    })    
    /* section4 스크립트 종료 */





    /* section5 스크립트 시작 */
    $(function(){
        var swiper = new Swiper(".youtube_Swiper", {
            slidesPerView: 1,
            spaceBetween: 20,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
              el: ".youtube_Swiper .swiper-pagination",
              type: "progressbar",
            },
            breakpoints: {
              500: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 50,
              },
            },

          });

    })
    /* section5 스크립트 종료 */




    /* footer 스크립트 시작 */
    $(function(){
        $('.footer .inner .left .tab_list >img').click(function(){
            $(this).toggleClass('on');
            $('.footer .inner .left .tab_list ul li.on1').toggleClass('active');
        })

        


      $('.footer .inner .left .tab_list ul li.on1').on('click', function() {
        $('.footer .inner .left .text_box .text.on').removeClass('on');
        $('.footer .inner .left .text_box .text').eq($(this).index()).addClass('on');
        $('.footer .right .box > div.on').removeClass('on')
        $('.footer .right .box > div').eq($(this).index()).addClass('on')

      
          // 나머지 코드 추가
          $(this).toggleClass('active');
          $('.footer .inner .left .tab_list >img').toggleClass('on');
          $('.footer .inner .left .tab_list ul li.on').toggleClass('on1');
          $('.footer .inner .left .tab_list ul li.on').toggleClass('on');
          $(this).toggleClass('on1');
          $(this).toggleClass('on');
      
          // 클릭 이벤트 강제로 비활성화 후 재등록
          $('.footer .inner .left .tab_list ul li.on1').off('click').on('click', arguments.callee);
      });








        /* 지도 스크립트 시작 */
        var container = document.getElementById('map1'); //지도를 담을 영역의 DOM 레퍼런스
        var options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(35.152996716378404, 129.0596936404009 ), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };

        var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        /* 지도 스크립트 종료 */

        // 마커가 표시될 위치입니다 
        var markerPosition  = new kakao.maps.LatLng(35.152996716378404, 129.0596936404009 ); 

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
        // marker.setMap(null);    


  

        /* 지도 스크립트 시작 */
        var container = document.getElementById('map2'); //지도를 담을 영역의 DOM 레퍼런스
        var options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(35.09762217911301, 129.0324769215403 ), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };

        var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        /* 지도 스크립트 종료 */

        // 마커가 표시될 위치입니다 
        var markerPosition  = new kakao.maps.LatLng(35.09762217911301, 129.0324769215403 ); 

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
        // marker.setMap(null);    



    })
    /* footer 스크립트 종료 */

})