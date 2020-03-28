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
      });
});