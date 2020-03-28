$(document).ready(function() {
    $(function(){

        $('.chatWrap .chat .chatTitle .help p').click(function(){
          $('.chatWrap .faq').toggleClass('on');
        });
        $('.chatWrap .chat .board .chatting .balloon .contents').click(function(){
          $('.chatWrap .chat').addClass('on');
        });
        $('.chatWrap .chat .board .chatting .startBtn button').click(function(){
          $('.chatWrap .chat').addClass('on');
        });
        $('.chatWrap .chat .chatTitle p.openBtn').click(function(){
          $('.openTime').toggleClass('on');
        });
        $('.chatWrap .chat .chatTitle .basicBtn ul li .prev').click(function(){
          $('.chatWrap .chat').removeClass('on');
        });
        $('.chatWrap .chat .chatTitle .basicBtn ul li .exit').click(function(){
          $('#chatting').removeClass('on');
          $('.chatWrap .chatBtn').addClass('on');
        });
        $('.chatWrap .chatBtn').click(function(){
          $('#chatting').addClass('on');
          $('.chatWrap .chatBtn').removeClass('on');
        });


      });
});