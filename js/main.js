$(document).ready(function () {
  $(function () {
    //채팅버튼 클릭 채팅창 메인 열기
    $(".chatWrap .chatBtn").click(function () {
      $("#chatting").addClass("on")
      $(".chatWrap .chatBtn").removeClass("on")
    })

    // lEFT 메뉴열기
    $(".chatWrap .faq .wing .fa-angle-left").click(function () {
      $(".chatWrap .faq").addClass("on")
      $(".chatWrap .faq .wing .fa-angle-left").removeClass("on")
      $(".chatWrap .faq .wing .fa-angle-right").addClass("on")
    })
    $(".chatWrap .faq .wing .fa-angle-right").click(function () {
      $(".chatWrap .faq").removeClass("on")
      $(".chatWrap .faq .wing .fa-angle-left").addClass("on")
      $(".chatWrap .faq .wing .fa-angle-right").removeClass("on")
    })

    // 기본 채팅창 열기
    $(".chatWrap .chat .board .chatting.talk .balloon .contents").click(function () {
      $(".chatWrap .chat").addClass("on")
      $(".chatWrap .chat .board .chatting.talk").addClass("on")
      $(".openTime").removeClass("on")
    })
    $(".chatWrap .chat .board .chatting.talk .startBtn button").click(function () {
      $(".chatWrap .chat").addClass("on")
      $(".chatWrap .chat .board .chatting.talk").addClass("on")
      $(".openTime").removeClass("on")
    })

    // 운영시간 확인하기
    $(".chatWrap .chat .chatTitle p.openBtn").click(function () {
      $(".openTime").toggleClass("on")
    })

    // 뒤로가기
    $(".chatWrap .chat .chatTitle .basicBtn ul li .prev").click(function () {
      $(".chatWrap .chat").removeClass("on")
      $(".chatWrap .chat .board").removeClass("off")
      $(".chatWrap .chat .prevChat").removeClass("on")
      $(".chatWrap .chat .csChat").removeClass("on")
      $(".exitBtn").removeClass("on")
      $(".chatWrap .chat .board .chatting.talk").removeClass("on")
    })

    // 채팅창 종료
    $(".chatWrap .chat .chatTitle .basicBtn ul li .exit").click(function () {
      $("#chatting").removeClass("on")
      $(".chatWrap .chatBtn").addClass("on")
    })

    // 이전대화보기
    $(".chatWrap .chat .board .prevChatBtn").click(function () {
      $(".chatWrap .chat .prevChat").addClass("on")
      $(".openTime").removeClass("on")
      $(".chatWrap .chat").addClass("on")
      $(".chatWrap .chat .board").addClass("off")
    })

    // 이전대화 채팅창
    $(".chatWrap .chat .prevChat ul li").click(function () {
      $(".chatWrap .chat").addClass("on")
      $(".chatWrap .chat .prevChat").removeClass("on")
      $(".chatWrap .chat .board").removeClass("off")
      $(".chatWrap .chat .board .chatting.talk").removeClass("off")
      $(".chatWrap .chat .board .chatting.talk").addClass("on")
    })
    // 상담원 대화
    $(".chatWrap .chat .board .chatting.cs .imagesBtn").click(function () {
      $(".chatWrap .chat .csChat").addClass("on")
      $(".openTime").removeClass("on")
      $(".chatWrap .chat").addClass("on")
      $(".exitBtn").addClass("on")
      $(".chatWrap .chat .board .chatting.talk").addClass("off")
    })
  })
})

$(document).ready(function () {
  $(".modal .btn_close").click(function () {
    setCookieMobile("todayCookie", "done", 1)
    $(".modal").hide()
  })
})

function setCookieMobile(name, value, expiredays) {
  var todayDate = new Date()
  todayDate.setDate(todayDate.getDate() + expiredays)
  document.cookie =
    name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}
function getCookieMobile() {
  var cookiedata = document.cookie
  if (cookiedata.indexOf("todayCookier=done") < 0) {
    $(".modal").show()
  } else {
    $(".modal").hide()
  }
}
getCookieMobile()
