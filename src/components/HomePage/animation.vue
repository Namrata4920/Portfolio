<template>
  <div class="square">
    <span></span>
    <span></span>
    <span></span>

    <div class="content">
      <h1 id="name">Namrata Sapra</h1>
      <p id="skill">/ Frontend web developer</p>
      <a href="#"> <button type="button" id="button">Myportfolio</button></a>
    </div>
  </div>
</template>

<style scoped>
.square {
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
.square:hover .content {
  color: white;
}
.square span:nth-child(1) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #4f6d65;
  border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
  transition: 0.5s;
  animation: animate 6s linear infinite;
}
.square:hover span:nth-child(1) {
  border: none;
  background: #f4d7b3;
  opacity: 0.6;
}

.square span:nth-child(2) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #4f6d65;
  border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
  transition: 0.5s;
  animation: animate 4s linear infinite;
}
.square:hover span:nth-child(2) {
  border: none;
  background: #f4c75d;
  opacity: 0.6;
}

.square span:nth-child(3) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #4f6d65;
  border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
  transition: 0.5s;
  animation: animate2 10s linear infinite;
}
.square:hover span:nth-child(3) {
  border: none;
  background: #576c66;
  opacity: 0.6;
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate2 {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.content {
  position: relative;
  padding: 40px 60px;
  color: #424143;
  text-align: center;
  transition: 0.5s;
  z-index: 1000;
  font-family: 'Times New Roman', Times, serif;
}
</style>
