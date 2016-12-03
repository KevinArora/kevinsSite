document.addEventListener("DOMContentLoaded", ()=> {
  const div = document.getElementById("image");
  const main = document.getElementById("main");
  const goodies = $("#goodies");
  const restOshit = $("#restOshit");
  const text = ["-- A Lover --", "-- A Friend --", "-- A Tennor --", "-- A Classroom Troll --", "-- NOT REALY AN ASSHOLE --", "-- MORE LIKE A SON OF A BITCH --", "-- A Puppy Enthusiast --", "-- A Swell Lad Whose Friends Made him this Site --"];
  let counter = 0;
  const elem = document.getElementById("changeText");
  setInterval(change, 1500);
  function change() {
    elem.innerHTML = text[counter];
    counter++;
    if(counter >= text.length) { counter = 0; }
  }

  document.body.addEventListener("click", function spin() {

    div.classList.add('rotated-image');
    const intervalID2 = setInterval(shaking, 1000);
    function shaking () {
      main.classList.add('shake');


    const intervalID3 = setInterval(back, 1500);
    function back () {
      goodies.fadeOut();
      restOshit.delay(500).fadeIn();
      main.classList.remove('shake');
      clearInterval(intervalID2);
    }
    }

    const intervalID = setInterval(spinAgain, 3000);
    function spinAgain () {
      div.classList.remove('rotated-image');
      clearInterval(intervalID);
    }
  })
})
