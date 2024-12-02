<script>
  $(document).ready(function () {
    // a. Modify text content
    $("#myElement").text("Modified Text");

    // b. Add a class to an element
    $("#myDIV").addClass("myStyle");

    // c. Add a click event listener to a button
    $("#myButton").on("click", function () {
      alert("Button clicked!");
    });
  });
</script>
