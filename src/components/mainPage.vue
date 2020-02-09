<template>
<div>
  <div class="cryu_wrap">
    <!-- 최상위 헤더
    <div class="border" style="height:40px; width:100%;">

    </div> -->

    <!-- 카테고리 헤더 -->
    <div class="border" style="height:72px; width:100%;">
    </div>

    <!-- 알림 헤더
    <div class="border" style="height:58px; width:100%;">

    </div> -->

    <!-- 메인 배너 -->
    <div style="height:700px; width:90%; margin:0 auto !important;">
      <div style="width:388px; height:100%; z-index:5; position:relative; top:50px; left:50px">
        <p style="font-family: 'Anton', sans-serif; font-size:72px; color:black; line-height:70px; font-weight:bold;">
          DESIGNED TO HELP REDUCE INJURY
        </p>
        <span class="mt-2" style="font-weight:500; display:inline-block; font-size:17px;">
          New colors in the React infinity Run.
        </span>
        <a class="d-flex justify-content-center align-items-center mt-3" style="color:white; width:95px; height:40px; display:block; background-color:black; border-radius:20px;">Shop</a>

      </div>
      <img 
        src="https://c.static-nike.com/a/images/f_auto/dpr_2.0/w_1328,c_limit/55dafea4-d011-48fd-8270-513c709bb9a0/nikecom-homepage-na.jpg"
        style="object-fit: cover; width:100%; height:100%; z-index:0; position:relative; top:-700px;"  
      >
    </div>

    <!-- 사진 2개 -->
    <div style="height:auto; width:90%; margin:100px auto !important; margin-bottom:10px !important;">
      <div class="mb-4" style="height:auto; width:100%;">
        <h2 style="font-weight:600; font-size:24px;">Basketball's Best</h2>
      </div>

      <div style="text-align:center;">
        <div style="height:700px; width:49.5%; display:inline-block;">

          <img 
            src="https://c.static-nike.com/a/images/f_auto/dpr_2.0/h_700,c_limit/4a5d9c0a-8b32-403b-b97b-a7047eb663ce/nikecom-homepage-na.jpg"
            style="width:100%; height:100%; z-index:0; object-fit: cover; position:relative; top:0;"
          />

          <div style="width:100%; height:100%; text-align:left; position:relative; top:-700px; cursor:pointer;">
            <span style="position:relative; top:560px; left:50px; color:white; font-weight:500; font-size:20px;">
              The New PG4 'Plaid'

            </span>
            <a 
              class="d-flex justify-content-center align-items-center mt-3" 
              style="color:black; width:95px; height:40px; 
              display:block; background-color:white; border-radius:20px; position:relative; top: 560px; left:50px;"
            >
              
            Shop</a>
          </div>
        </div>
        <div style="height:700px; width:49.5%; display:inline-block;">

          <img 
            src="https://c.static-nike.com/a/images/f_auto/dpr_2.0/h_700,c_limit/8c79cf48-c4c4-46a2-adfa-b7e781a88750/nikecom-homepage-na.jpg"
            style="width:100%; height:100%; z-index:0; object-fit: cover;"
          />
          <div style="width:100%; height:100%; text-align:left; position:relative; top:-700px; cursor:pointer;">
            <span style="position:relative; top:560px; left:50px; color:white; font-weight:500; font-size:20px;">
              NBA All-Star 2020 Collection
            </span>
            <a 
              class="d-flex justify-content-center align-items-center mt-3" 
              style="color:black; width:95px; height:40px; 
              display:block; background-color:white; border-radius:20px; position:relative; top: 560px; left:50px;"
            >
              
            Shop</a>

          </div>
        </div>

      </div>
      
      
    </div>

    <!-- 스와이프 상품 -->
    <div style="height:auto; width:auto; marign: 100px auto !important;">
      <div class="mb-4" style="height:auto; width:90%; margin:0 auto !important;">
        <span style="font-weight:600; font-size:24px; display:inline-block; width:49.5%; text-align:left;">Picks for Your MVP</span>
        <span style="font-weight:500; font-size:16px; display:inline-block; width:49.5%; text-align:right; cursor:pointer;">Show All</span>
      </div>

      <div class="mt-3" style="width:100%; height:auto;">
        <swiper :options="swiperOption" style="height:100%;">
          <!-- slides -->
          <swiper-slide class="slide_div">
            <img src="https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/02f5f001-59a6-4010-a935-362827ca60ce/air-force-1-sage-low-valentines-day-womens-shoe-Zb8SL4.jpg"
                class="slide_img mb-2"
            />
            <div>
              <span class="d-block" style="color:#aa8375; font-weight:600; width:80%;">Member Access</span>
              <span class="d-block" style="width:80%; font-weight:500;">Nike Air Force 1 Sage Low Valentine's Day</span>
              <span class="d-block" style="color:#aaa; width:80%;">Women's Shoe</span>
              <span class="d-block" style="color:#aaa; width:80%;">$110</span>
              
            </div>

          </swiper-slide>
          <swiper-slide class="slide_div">
            <img src="https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/4a12b841-69c3-44dd-a51f-631d36a1ae68/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg"
                class="slide_img mb-2"
            />
            <div>
              <span class="d-block" style="width:80%; font-weight:500;">Nike Air Force 1 Sage Low Valentine's Day</span>
              <span class="d-block" style="color:#aaa; width:80%;">Women's Shoe</span>
              <span class="d-block" style="color:#aaa; width:80%;">$110</span>
              
            </div>
          </swiper-slide>
          <swiper-slide class="slide_div">
            <img src="https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/2e5c6a80-7d86-45e4-89ab-bd62343252b5/air-max-97-womens-shoe-rMjFpL.jpg"
                class="slide_img mb-2"
            />
            <div>
              <span class="d-block" style="width:80%; font-weight:500;">Nike Air Force 1 Sage Low Valentine's Day</span>
              <span class="d-block" style="color:#aaa; width:80%;">Women's Shoe</span>
              <span class="d-block" style="color:#aaa; width:80%;">$110</span>
              
            </div>
          </swiper-slide>
          <swiper-slide class="slide_div">
            <img src="https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/uszcnd9sefgufnxfs4an/windrunner-wild-run-mens-running-jacket-3qWSBl.jpg"
                class="slide_img mb-2"
            />
            <div>
              <span class="d-block" style="width:80%; font-weight:500;">Nike Air Force 1 Sage Low Valentine's Day</span>
              <span class="d-block" style="color:#aaa; width:80%;">Women's Shoe</span>
              <span class="d-block" style="color:#aaa; width:80%;">$110</span>
              
            </div>
          </swiper-slide>
          <swiper-slide class="slide_div">
            <img src="https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/b1650918-552b-45ab-9b58-0c5b7d66825a/sportswear-womens-long-sleeve-dress-0TmMP1.jpg"
                class="slide_img mb-2"
            />
            <div>
              <span class="d-block" style="width:80%; font-weight:500;">Nike Air Force 1 Sage Low Valentine's Day</span>
              <span class="d-block" style="color:#aaa; width:80%;">Women's Shoe</span>
              <span class="d-block" style="color:#aaa; width:80%;">$110</span>
              
            </div>
          </swiper-slide>
          <swiper-slide class="slide_div">
            <img src="https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/ad35e536-647d-450b-ba08-35864ae65cb6/sportswear-big-kids-girls-t-shirt-3RFvvw.jpg"
                class="slide_img mb-2"
            />
            <div>
              <span class="d-block" style="width:80%; font-weight:500;">Nike Air Force 1 Sage Low Valentine's Day</span>
              <span class="d-block" style="color:#aaa; width:80%;">Women's Shoe</span>
              <span class="d-block" style="color:#aaa; width:80%;">$110</span>
              
            </div>
          </swiper-slide>
          <swiper-slide class="slide_div">
            <img src="https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/86a2c1c0-dfe0-4fe5-ae75-8c9472d4ca30/react-presto-extreme-valentines-day-big-kids-shoe-H9DcRb.jpg"
                class="slide_img mb-2"
            />
            <div>
              <span class="d-block" style="width:80%; font-weight:500;">Nike Air Force 1 Sage Low Valentine's Day</span>
              <span class="d-block" style="color:#aaa; width:80%;">Women's Shoe</span>
              <span class="d-block" style="color:#aaa; width:80%;">$110</span>
              
            </div>
          </swiper-slide>

          <!-- 슬라이더 네비게이션
          <div class="swiper-pagination"  slot="pagination"></div>
           -->
        </swiper>
      </div>

    </div>

    <!-- 사진 2개 -->
    <div style="height:auto; width:90%; margin:100px auto !important; margin-bottom:10px !important;">
      <div class="mb-4" style="height:auto; width:100%;">
        <h2 style="font-weight:500; font-size:24px;">Latest and Greatest</h2>
      </div>

      <div style="text-align:center;">
        <div style="height:700px; width:49.5%; display:inline-block;">

          <img 
            src="https://c.static-nike.com/a/images/f_auto/dpr_2.0/h_700,c_limit/df5b6ba6-d5e5-41e6-a0b2-14febfae70ec/nikecom-homepage-na.jpg"
            style="width:100%; height:100%; z-index:0; object-fit: cover; position:relative; top:0;"
          />

          <div style="width:100%; height:100%; text-align:left; position:relative; top:-700px; cursor:pointer;">
            <span style="position:relative; top:560px; left:50px; color:white; font-weight:500; font-size:20px;">
              The New PG4 'Plaid'

            </span>
            <a 
              class="d-flex justify-content-center align-items-center mt-3" 
              style="color:black; width:95px; height:40px; 
              display:block; background-color:white; border-radius:20px; position:relative; top: 560px; left:50px;"
            >
              
            Shop</a>
          </div>
        </div>
        <div style="height:700px; width:49.5%; display:inline-block;">

          <img 
            src="https://c.static-nike.com/a/images/f_auto/dpr_2.0/h_700,c_limit/a8bf1c05-132b-448d-92f1-4dc506411fee/nikecom-homepage-na.jpg"
            style="width:100%; height:100%; z-index:0; object-fit: cover;"
          />
          <div style="width:100%; height:100%; text-align:left; position:relative; top:-700px; cursor:pointer;">
            <span style="position:relative; top:560px; left:50px; color:black; font-weight:500; font-size:20px;">
              NBA All-Star 2020 Collection
            </span>
            <a 
              class="d-flex justify-content-center align-items-center mt-3" 
              style="color:white; width:95px; height:40px; 
              display:block; background-color:black; border-radius:20px; position:relative; top: 560px; left:50px;"
            >
              
            Shop</a>

          </div>
        </div>

      </div>
      
      
    </div>

    <!-- 사진 3개 -->
    <div class="" style="height:auto; width:90%; margin:0px auto !important;">
      <div class="mb-4" style="height:auto; width:100%;">
        <h2 style="font-weight:500; font-size:24px;">New Arrivals</h2>
      </div>

      <div style="width:100%; text-align:center;">
        <div class="" style="width:32%; height:500px; display:inline-block; margin-right:1.5% !important;">
          <img 
            src="https://c.static-nike.com/a/images/f_auto/dpr_2.0/w_352,c_limit/3e2e550a-5d0b-4873-9446-f090ac75efde/nikecom-homepage-na.jpg" 
            style="width:100%;"
          />
          <span class="d-block mt-2" style="text-align:left !important; font-weight:600; font-size:20px;">
            Basketball
          </span>
        </div>
        <div class="" style="width:32%; height:500px; display:inline-block; margin-right:1.5% !important;">
          <img 
            src="https://c.static-nike.com/a/images/f_auto/dpr_2.0/h_540,c_limit/6fdbeb03-f4b3-49d1-9b0b-aea3d531966c/nikecom-homepage-na.jpg" 
            style="width:100%;"
          />
          <span class="d-block mt-2" style="text-align:left !important; font-weight:600; font-size:20px;">
            Lifestyle
          </span>
        </div>
        <div class="" style="width:32%; height:500px; display:inline-block;;">
          <img 
            src="https://c.static-nike.com/a/images/f_auto/dpr_2.0/h_540,c_limit/716e9f8f-e9e9-41dd-b5e9-33f361d9f752/nikecom-homepage-na.jpg" 
            style="width:100%;"
          />
          <span class="d-block mt-2" style="text-align:left !important; font-weight:600; font-size:20px;">
            Jordan
          </span>
        </div>

      </div>
      
      
    </div>

    <!-- hover 시 카테고리 추가로 나옴 -->
    <div class="div-hover" style="">

      <div style="width:100%;">
        <div class="top-div">Icons</div>
        <div class="top-div">Shoes</div>
        <div class="top-div">Clothing</div>
        <div class="top-div">Kids'</div>
      </div>

      <div class="md-div">
        <ul>
          <li><a href="#">Air Force 1</a></li>
          <li><a href="#">Huarache</a></li>
          <li><a href="#">Jordan 1</a></li>
          <li><a href="#">Air Max 90</a></li>
        </ul>
        <ul class="ul-dpnone">
          <li><a href="#">Air Max 95</a></li>
          <li><a href="#">Air Max 97</a></li>
          <li><a href="#">Air Max 270</a></li>
          <li><a href="#">Air Max 720</a></li>
          <li><a href="#">sale Air Max</a></li>
        </ul>
      </div>
      <div class="md-div">
        <ul>
          <li><a href="#">All Shoes</a></li>
          <li><a href="#">Custom Shoes</a></li>
          <li><a href="#">Running Shoes</a></li>
          <li><a href="#">Basketball Shoes</a></li>
        </ul>
        <ul class="ul-dpnone">
          <li><a href="#">Training Shoes</a></li>
          <li><a href="#">Jordan Shoes</a></li>
          <li><a href="#">Soccer Cleats</a></li>
          <li><a href="#">Football Cleats</a></li>
          <li><a href="#">Sale Shoes</a></li>
        </ul>
      </div>
      <div class="md-div">
        <ul>
          <li><a href="#">All Clothing</a></li>
          <li><a href="#">Hoodies &amp; Pullovers</a></li>
          <li><a href="#">Sprts Bras</a></li>
          <li><a href="#">Pants &amp; Tights</a></li>
        </ul>
        <ul class="ul-dpnone">
          <li><a href="#">Joggers &amp; Sweatpants</a></li>
          <li><a href="#">Shorts</a></li>
          <li><a href="#">Socks</a></li>
          <li><a href="#">Plus Size Clothing</a></li>
          <li><a href="#">Sale Clothing</a></li>
        </ul>
      </div>
      <div class="md-div">
        <ul>
          <li><a href="#">Infant &amp; Toddler Shoes</a></li>
          <li><a href="#">Kids' Shoes</a></li>
          <li><a href="#">Kids' Basketball Shoes</a></li>
          <li><a href="#">Kids' Running Shoes</a></li>
        </ul>
        <ul class="ul-dpnone">
          <li><a href="#">Kids' Jordan Shoes</a></li>
          <li><a href="#">Kids' Clothing</a></li>
          <li><a href="#">Kids' Backpacks</a></li>
          <li><a href="#">Kids' Socks</a></li>
          <li><a href="#">Kids' Sale</a></li>
        </ul>
      </div>
    </div>

    <!-- 푸터 -->

    <div style="height:auto; width:100%; background-color:#111;">
      <div style="width:60%; height:auto; padding: 50px 0 30px 50px !important; display:inline-block;">
        <div class="footer_div">
          <ul style="font-family: 'Teko', sans-serif; color:white; font-size:18px;">
            <li class="footer_li_font">GIFT CARDS</li>
            <li class="footer_li_font">PROMOTIONS</li>
            <li class="footer_li_font">FIND A STORE</li>
            <li class="footer_li_font">SIGN UP FOR EMAIL</li>
            <li class="footer_li_font">BECOME A MEMBER</li>
            <li class="footer_li_font">SITE FEEDBACK</li>
          </ul>
        </div>
        <div class="footer_div">
          <ul>
            <li style="font-family: 'Teko', sans-serif; color:white; font-size:18px;">GET HELP</li>
            <li class="footer_li">Order Status</li>
            <li class="footer_li">Shipping and Delivery</li>
            <li class="footer_li">Returns</li>
            <li class="footer_li">Payment Options</li>
            <li class="footer_li">Gift Card Balance</li>
            <li class="footer_li">Contact Us</li>
          </ul>
        </div>
        <div class="footer_div">
          <ul>
            <li style="font-family: 'Teko', sans-serif; color:white; font-size:18px;">ABOUT TIME</li>
            <li class="footer_li">News</li>
            <li class="footer_li">Careers</li>
            <li class="footer_li">Investors</li>
            <li class="footer_li">Purpose</li>
            <li class="footer_li">Sustainability</li>
            <li class="footer_li">CA Supply Chains Act</li>

          </ul>
        </div>
      </div>
      <div style="width:39%; hegiht:auto; padding: 50px 50px 30px 0 !important; display:inline-block;"></div>
      <div class="row" style="width:100%; border-top:1px solid #222; padding: 30px 0 10px 50px !important;">
        <div class="col-6" style="padding:0 !important;">        
          <font-awesome-icon style="color:white; font-size:14px; " icon="map-marker-alt" />
          <span style="margin-left:8px !important; color:white; font-size:10px;">United States</span> 
          <span style="color:#7E7E82; font-size:10px; margin-left:20px !important;">© 2020 Nike, Inc. All Rights Reserved</span> 
        </div>

        <div class="col-6" style="padding-right:50px !important; text-align:right;">
          <span style="color:#7E7E82; font-size:10px; margin-left:23px !important;">Guides</span> 
          <span style="color:#7E7E82; font-size:10px; margin-left:23px !important;">Terms of Sale</span>
          <span style="color:#7E7E82; font-size:10px; margin-left:23px !important;">Terms of Use</span>
          <span style="color:#7E7E82; font-size:10px; margin-left:23px !important;">Nike Privacy Policy</span>
        </div>
      </div>


    </div>

  </div>
  <div class="mt-5 cryu_wrap_mobile" >
    모바일 페이지는 현재 준비 중입니다.
  </div>
</div>

</template>

<script>
import 'swiper/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'


export default {
  name: 'HelloWorld',
  data () {
    return {
      swiperOption: {
        // swiper 옵션, 콜백함수 모두 동일하게 사용
        slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    // 현재 swiper 인스턴스를 확인
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Anton|Teko&display=swap');
  @keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.8;
  }
}
  a {
    cursor: pointer;
  }
  a:hover{
    animation: fadeOut 0.5s;
    opacity: 0.8;
  }
  ul{
    list-style: none;

  }

  .div-hover:hover .ul-dpnone{
    transition: opacity 0.5s linear;  
    opacity: 1;
    display: inline-block;
  }

  .ul-dpnone{
    opacity: 0;  
    display: none;
  }

  .div-hover {
    height: 200px;
    width:80%; 
    margin:50px auto !important;
    transition: height 0.05s linear;  
    font-size: 1rem;
  }
  .div-hover:hover{
    height: 350px;
  }



  .top-div{
    width:20%;
    display: inline-block;
    margin-right: 6% !important;
    font-weight: bold;
    margin-bottom:20px !important;
  }

  .top-div:last-child{
    margin-right: 0% !important;
  }

  .md-div{
    width:20%;
    display: inline-block;
    margin-right: 6% !important;
    
  }

  .md-div a {
    color:#8d8d8d;
    text-decoration: none;
    font-weight: 500;
  }

  .md-div a:hover{
    color:black;
    text-decoration: none;
  }

  .md-div li {
    margin-bottom: 10px !important;
  }

  .md-div:last-child{
    margin-right: 0% !important;
  }
  .slide_div{
    width:30% !important;
    height: auto;
    margin-right: 15px !important;
  }

  .slide_div:nth-child(1) {
    margin-left: 5% !important;
  }

  .slide_img{
    width:100%;
    height: auto;
  }

  .footer_div{
    width:196px;
    height:auto;
    display: inline-block;
  }

  .footer_li{
    color:#7E7E82; 
    font-size:12px; 
    padding:4px 0 4px 0;
  }

  .footer_li_font{
    padding: 2px 0 2px 0;
  }

  .cryu_wrap_mobile{
    font-weight: bold;
    display: none;
    width: 100%;
    text-align: center;
  }

  @media (max-width:1000px){
    .div-hover{
      display: none;
    }
  }

  @media (max-width:900px) {
    .cryu_wrap{
      display:none;
    }
    .cryu_wrap_mobile{
      display: inline-block;
    }
  }

</style>
