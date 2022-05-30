// Preloader
// $(window).on('load', function() {

//     $(".loader").fadeOut();
//     $("#preloder").delay(400).fadeOut("slow");

// });

// $(document).ready(function(){
//     $(".content").slice(0, 4).show();
//     $("#loadMore").on("click", function(e){
//       e.preventDefault();
//       $(".content:hidden").slice(0, 4).slideDown();
//       if($(".content:hidden").length == 0) {
//         $("#loadMore").text("No Content").addClass("noContent");
//       }
//     });
    
//   })


  document.querySelector(document).ready(function(){
    document.querySelector(".content").slice(0, 4).show();
    document.querySelector("#loadMore").addEventListener("click", function(e){
      e.preventDefault();
      document.querySelector(".content:hidden").slice(0, 4).slideDown();
      if(document.querySelector(".content:hidden").length === 0) {
        document.querySelector("#loadMore").text("No Content").classList.add("noContent");
      }
    });
    
  })
