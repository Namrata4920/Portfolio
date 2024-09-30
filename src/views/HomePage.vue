<template>
  <div class="bg-primary-100 dark:bg-secondary-300">
    <div class="flex items-center py-24 border-b border-black dark:border-secondary-400">
      <div class="flex flex-col mx-auto max-w-5xl items-center">
        <NTitle title="Web Developer" />
        <!-- <h1 class="text-7xl font-bold pb-5">&lt; coder &gt;</h1> -->
      </div>
    </div>
    <div class="py-5 w-3/5 mx-auto">
      <div class="grid grid-cols-3 gap-4 justify-items-center">
        <div>
          <h2 class="font-bold text-2xl">Namrata Sapra</h2>
        </div>

        <div class="col-span-2">
          <p class="text-xl font-light text-left dark:text-secondary-500">
            Hii! I am Namrata Sapra. I am a web developer, designer, and Art lover from India, who
            writes clean, elegant and efficient code.
          </p>
          <div class="pt-6">
            <NButton label="Contact Me" theme="primary" size="md" class="mr-auto" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
