jQuery(document).ready(function() {
  //define function for Title casing
  function capitalizeFirstChar(val){
    return val.charAt(0).toUpperCase()+val.substr(1).toLowerCase();
  }
  
  //user click on Add button
  $("form").submit(function(event) {
    event.preventDefault(); //prevent default form submit
    var newListItem = $("#input-field").val(); //get value from input-field
    newListItem = capitalizeFirstChar(newListItem); //apply title casing
    $("ul").prepend("<li>" + newListItem + "</li>") //insert list item
    $("#input-field").val("") //reset input value
  });

  //user click on "show/hide list button"
  $("#show-hide").click(function() {
    //fancy show/hide button transition
    if ($(this).text() === "show list") {
      $(this).fadeOut(function() {
        $(this).text("hide list").fadeIn();  
      });      
    } else {
      $(this).fadeOut(function() {
        $(this).text("show list").fadeIn();  
      });      
    }
    $("ul").fadeToggle(); //fade-in list
  });
});