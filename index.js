$(document).ready(function () {
  $("h1").addClass("title");
  let c = Math.floor(Math.random() * 100 + 1);
  console.log(c)


  $(".clickMe").on("mouseover", function () {
    $(this).animate(
      {
        right: Math.floor(Math.random()*1000+1), 
        left: Math.floor(Math.random()*1000+1),
        top: Math.floor(Math.random()*1000+1),
        bottom: Math.floor(Math.random()*1000+1),
      }, 
      100, 
      function() {
        // alert("Tutolmading kal-kal🌛")
      }
    );

    

  });


});