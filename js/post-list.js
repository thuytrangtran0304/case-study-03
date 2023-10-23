let localStTitle = localStorage.getItem("title");
let localStCategory = localStorage.getItem("category");
let newsAPI = "Updating...";

localStorage.setItem("title", "");
localStorage.setItem("category", "");

$(document).ready(function () {
  $(".post-title").click(function () {
    $.ajax({
      url: "https://65365a22bb226bb85dd1f69f.mockapi.io/api/v1/post-lists",
      type: "GET",
      dataType: "text",
    }).done(function (response) {
      //   window.location.href = "./detail.html";
      console.log(response);
    });
  });
});
