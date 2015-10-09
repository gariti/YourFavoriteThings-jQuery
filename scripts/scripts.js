
jQuery(document).ready(function() {

  function capitalizeFirstChar(val){
    return val.charAt(0).toUpperCase()+val.substr(1).toLowerCase();
  }
  
  $("form").submit(function(event) {
    event.preventDefault(); //prevent default form submit

    var newListItem = $("#input-field").val(); //get value from input
    newListItem = capitalizeFirstChar(newListItem);
    $("ul").prepend("<li>" + newListItem + "</li>") //insert list item


  });

});