// Нужно найти кнопку плей

const play = document.querySelector(".about__play");
// ищем само видео
const video = document.querySelector(".about__video video");

// по клику на плей вешаем обработчик клика что б запускалсь видео

play.addEventListener("click", () => {
  video.play();
  //   кнопки управления влючаються когда запускаеться видео
  video.setAttribute("controls", "controls");
  // потом после клика скрываем кнопку, добавляя новый класс
  play.classList.add("about__play--hidden");
});
