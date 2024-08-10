<template>
  <main :class="{'bg-gray-800 text-white': dataDark, 'bg-stone-100' : !dataDark}" >
    <NavBarTeste :active-section="activeSection" @darkMode="saveDarkData"/>
    <ConteudoHome id="home" ref="homeSection" :dark-mode="dataDark"/>
    <ConteudoTechs id="skills" ref="skillsSection" :dark-mode="dataDark"/>
    <ConteudoAbout id="about" ref="aboutSection" class="flex  items-center" :dark-mode="dataDark"/>
    <ConteudoProjects id="projetos"  ref="projectsSection" :dark-mode="dataDark"/>
    <FooterFixed/>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
import NavBarTeste from './components/NavbarTop.vue';
import ConteudoHome from './components/ConteudoHome.vue';
import FooterFixed from './components/FooterFixed.vue';
import ConteudoAbout from './components/ConteudoAbout.vue';
import ConteudoTechs from './components/ConteudoTechs.vue';
import ConteudoProjects from './components/ConteudoProjects.vue';




export default defineComponent({
    name: 'App',
    components: { NavBarTeste, ConteudoHome, FooterFixed, ConteudoAbout, ConteudoTechs, ConteudoProjects },
    setup(){
      const dataDark = ref(false)

      const saveDarkData = (darkData : boolean) => {
        dataDark.value = darkData
      }

      const activeSection = ref<string>('home');
        const homeSection = ref<HTMLElement | null>(null);
        const skillsSection = ref<HTMLElement | null>(null);
        const aboutSection = ref<HTMLElement | null>(null);
        const projectsSection = ref<HTMLElement | null>(null);

        const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id;
             console.log("Section changed to: ", activeSection.value);
          }
        });
      },
      { threshold: 0.5 } // Ajuste este valor conforme necessário
    );

    onMounted(() => {
  console.log('Mounted sections:');

  const home = document.getElementById('home');
  const skills = document.getElementById('skills');
  const about = document.getElementById('about');
  const projects = document.getElementById('projetos');

  if (home) {
    console.log("Observing home section:", home);
    observer.observe(home);
  } else {
    console.log("homeSection not found");
  }

  if (skills) {
    console.log("Observing skills section:", skills);
    observer.observe(skills);
  } else {
    console.log("skillsSection not found");
  }

  if (about) {
    console.log("Observing about section:", about);
    observer.observe(about);
  } else {
    console.log("aboutSection not found");
  }

  if (projects) {
    console.log("Observing projects section:", projects);
    observer.observe(projects);
  } else {
    console.log("projectsSection not found");
  }
});



    onUnmounted(() => {
      observer.disconnect();
    });

      return {
        saveDarkData, dataDark, activeSection,
      homeSection,
      aboutSection,
      projectsSection,
      skillsSection
      }

    }

});
</script>

<style>

</style>