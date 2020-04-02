$(document).ready(function() {
    $(function(){

        $('.chatWrap .faq .wing .fa-angle-left').click(function(){
          $('.chatWrap .faq').addClass('on');
          $('.chatWrap .faq .wing .fa-angle-left').removeClass('on');
          $('.chatWrap .faq .wing .fa-angle-right').addClass('on');
        });
        $('.chatWrap .faq .wing .fa-angle-right').click(function(){
          $('.chatWrap .faq').removeClass('on');
          $('.chatWrap .faq .wing .fa-angle-left').addClass('on');
          $('.chatWrap .faq .wing .fa-angle-right').removeClass('on');
        });

        $('.chatWrap .chat .board .chatting .balloon .contents').click(function(){
          $('.chatWrap .chat').addClass('on');
          $('.openTime').removeClass('on');
        });
        $('.chatWrap .chat .board .chatting .startBtn button').click(function(){
          $('.chatWrap .chat').addClass('on');
          $('.openTime').removeClass('on');
        });
        $('.chatWrap .chat .chatTitle p.openBtn').click(function(){
          $('.openTime').toggleClass('on');
        });
        $('.chatWrap .chat .chatTitle .basicBtn ul li .prev').click(function(){
          $('.chatWrap .chat').removeClass('on');
          $('.chatWrap .chat .board').removeClass('off');
          $('.chatWrap .chat .prevChat').removeClass('on');
        });
        $('.chatWrap .chat .chatTitle .basicBtn ul li .exit').click(function(){
          $('#chatting').removeClass('on');
          $('.chatWrap .chatBtn').addClass('on');
        });
        $('.chatWrap .chatBtn').click(function(){
          $('#chatting').addClass('on');
          $('.chatWrap .chatBtn').removeClass('on');
        });
        $('.chatWrap .chat .board .prevChatBtn').click(function(){
          $('.chatWrap .chat .prevChat').addClass('on');
          $('.openTime').removeClass('on');
          $('.chatWrap .chat').addClass('on');
          $('.chatWrap .chat .board').addClass('off');
        });
        
      });
});