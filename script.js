document.addEventListener("DOMContentLoaded", ()=> {

  console.log("Made by the ever growing boy 'Matt Keigwin and the OG wow-er 'Synclair Wang'")

  const div = document.getElementById("image");
  const main = document.getElementById("main");
  const goodies = $("#goodies");
  const restOshit = $("#restOshit");
  const letsDoit = $("#letsDoit");
  const text = ["-- A Lover --", "-- A Friend --", "-- A Tennor --", "-- A Classroom Troll --", "-- NOT REALY AN ASSHOLE --", "-- MORE LIKE A SON OF A BITCH --", "-- A 'Bub' Enthusiast --", "-- A Swell Lad Whose Friends Made him this Site --"];
  let counter = 0;
  const elem = document.getElementById("changeText");
  setInterval(change, 1500);
  function change() {
    elem.innerHTML = text[counter];
    counter++;
    if(counter >= text.length) { counter = 0; }
  }

  goodies.on("click", function spin() {
    restOshit.removeClass('fade-out')
    div.classList.add('rotated-image');
    const intervalID2 = setInterval(shaking, 1000);
    function shaking () {
      main.classList.add('shake');
      setTimeout(() => {
        goodies.fadeOut();
        restOshit.delay(500).fadeIn();
        main.classList.remove('shake');
        clearInterval(intervalID2);
      }, 1500)
    }

    const intervalID = setInterval(spinAgain, 3000);
    function spinAgain () {
      div.classList.remove('rotated-image');
      clearInterval(intervalID);
    }
  })

  restOshit.click(() => {
    restOshit.addClass('fade-out')

    letsDoit.show();
    letsDoit.addClass('superman');

    setTimeout(() => {
      goodies.fadeIn();
      letsDoit.hide();
      restOshit.hide()
    }, 2000)

  })



})
