<template>
  <main :class="{'bg-gray-800 text-white': dataDark, 'bg-stone-100' : !dataDark}" >
    <NavBarTeste @darkMode="saveDarkData"/>
    <ConteudoHome :dark-mode="dataDark"/>
    <ConteudoTechs :dark-mode="dataDark"/>
    <ConteudoAbout :dark-mode="dataDark"/>
    <FooterFixed/>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavBarTeste from './components/NavbarTop.vue';
import ConteudoHome from './components/ConteudoHome.vue';
import FooterFixed from './components/FooterFixed.vue';
import ConteudoAbout from './components/ConteudoAbout.vue';
import ConteudoTechs from './components/ConteudoTechs.vue';




export default defineComponent({
    name: 'App',
    components: { NavBarTeste, ConteudoHome, FooterFixed, ConteudoAbout, ConteudoTechs },
    setup(){
      const dataDark = ref(false)

      const saveDarkData = (darkData : boolean) => {
        dataDark.value = darkData
      }

      return {
        saveDarkData, dataDark
      }

    }

});
</script>

<style>

</style>