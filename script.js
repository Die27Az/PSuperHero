$(document).ready(function() {

    $("form").submit(function (e) {
      e.preventDefault();

      let valueInput = $("#heroInput").val();

      alert(valueInput);

   });
});