document.getElementById("btn").addEventListener("click", function() {
    alert("Button clicked!");
  });   <br>

# Mouse: click, mouseover, mouseout, mousemove<br>
# Keyboard: keydown, keyup<br>
# Form/Input: input, change, submit, focus, blur<br>
# Window: DOMContentLoaded, scroll, resize<br>


<button id="btn">Click Me</button><br>

<script> <br>
document.getElementById("btn").addEventListener("click", function(e){ <br>
  console.log(e);       // entire event object <br>
  console.log(e.type);  // event type (click) <br>
  console.log(e.target); // element that triggered the event <br>
});<br>
</script><br>
