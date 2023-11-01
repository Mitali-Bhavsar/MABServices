//----------to fix navbar at top start-----------------
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 90) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 
//----------to fix navbar at top end-----------------
//----------top arrow button start-----------------

window.onscroll = () => {
  toggleTopButton();
}
function scrollToTop(){
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function toggleTopButton() {
  if (document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20) {
    document.getElementById('back-to-up').classList.remove('d-none');
  } else {
    document.getElementById('back-to-up').classList.add('d-none');
  }
}
//----------top arrow button end-----------------
//----for whatsapp start-----------
var url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?21123';
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;
var options = {
"enabled":true,
"chatButtonSetting":{
    "backgroundColor":"#3a8106",
    "ctaText":"Chat with us",
    "borderRadius":"25",
    "marginLeft": "0",
    "marginRight": "20",
    "marginBottom": "20",
    "ctaIconWATI":false,
    "position":"left"
},
"brandSetting":{
    "brandName":"MAB Services",
    "brandSubTitle":"undefined",
    "brandImg":"https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
    "welcomeText":"Hi there!\nHow can I help you?",
    "messageText":"Hello, %0A I have a question about {{page_link}}",
    "backgroundColor":"#00e785",
    "ctaText":"Chat with us",
    "borderRadius":"25",
    "autoShow":false,
    "phoneNumber":"919356854785"
}
};
s.onload = function() {
    CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);
//----for whatsapp end-----------