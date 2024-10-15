<template>
  <div class="bg-primary-100 dark:bg-secondary-300">
    <div class="flex items-center py-24 border-b border-black dark:border-secondary-400">
      <div class="flex flex-col mx-auto max-w-5xl items-center">
        <NTitle title="Web Developer" />
      </div>
    </div>
    <div class="py-7 w-3/5 mx-auto">
      <div class="grid md:grid-cols-3 grid-cols-1 gap-4 justify-items-center pb-6">
        <div class="text-center">
          <h2 class="font-bold text-3xl font-playpen dark:text-secondary-500">Namrata Sapra</h2>
          <h1 class="text-2xl font-bold pb-5 font-playpen dark:text-secondary-500">
            &lt; coder &gt;
          </h1>
        </div>

        <div class="col-span-2">
          <p class="text-xl font-light text-left dark:text-secondary-500">
            Hii! I am Namrata Sapra. I am a web developer, designer, and
            <span class="font-semibold underline"
              ><a
                href="https://www.instagram.com/naamy.art_?igsh=MXNsNmR0MGJlOTQ4cg=="
                target="_blank"
                >Art lover</a
              ></span
            >
            from India, who writes clean, elegant and efficient code.
          </p>
          <p class="text-xl font-light text-left dark:text-secondary-500">
            With a background in IT and a love for both design and code, I bring creativity and
            technical expertise to every project. Let's build something amazing together!
          </p>
          <div class="pt-6 flex gap-3">
            <NButton
              label="Contact Me"
              theme="primary"
              size="md"
              @click="$router.push({ name: 'contact' })"
            />
            <a href="https://www.instagram.com/naamy.art_?igsh=MXNsNmR0MGJlOTQ4cg==" target="_blank"
              ><button
                class="bg-black px-3 py-2 text-white dark:bg-secondary-500 dark:text-secondary-200"
              >
                Check My Arts
              </button></a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mx-auto border-t border-black dark:border-secondary-400">
      <p
        class="text-3xl font-bold inline-block dark:text-secondary-500 font-playpen px-24 py-3 border-x border-b border-black dark:border-secondary-400"
      >
        Skills I have
      </p>
      <div class="flex flex-wrap justify-center py-14 md:gap-3 gap-1 md:w-3/5 px-4 mx-auto">
        <NChips :items="skills" />
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  { id: 1, name: 'Vue.Js' },
  { id: 2, name: 'React.Js' },
  { id: 3, name: 'Vuetify' },
  { id: 4, name: 'Vuex' },
  { id: 5, name: 'Pinia' },
  { id: 6, name: 'GraphQL' },
  { id: 7, name: 'Bootstrap' },
  { id: 8, name: 'HTML5' },
  { id: 9, name: 'CSS3' },
  { id: 10, name: 'Javascript' },
  { id: 11, name: 'Github' }
]
</script>
