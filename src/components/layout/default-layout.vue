<template>
  <div>
    <header class="py-8 primary_bg">
      <div class="w-11/12 mx-auto flex justify-between items-center">
        <div class="">
          <ul class="flex space-x-4">
            <li>Web</li>
            <li>About</li>
            <li>Art</li>
            <li>Craft</li>
          </ul>
        </div>
        <div class="flex-1 text-center">
          <a href="#" class="text-4xl">Namrata Sapra</a>
        </div>
        <div class="flex space-x-4">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>
