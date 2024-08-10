<template>
    <header class="sticky top-0 z-10  backdrop-filter backdrop-blur">
        <nav class=" bg-grey flex justify-between" :class="{'backdrop-filter text-white': darkModeIsActived }">
            <div class="pl-5 ">
                    <img src="../assets/DesignLogo.png" alt="" class="h-[90px] cursor-pointer   ">
            </div>
           
            <ul class=" flex items-center ">
                <button class="mx-5" @click="activeDarkMode">
                    <svg v-if="darkModeIsActived" xmlns="http://www.w3.org/2000/svg"  class="dark h-[25px]"  viewBox="0 0 512 512"><path fill="#ffffff" d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-[25px]" viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>
    
                    </button>
                
                <li class="mx-4"> 
                    <button @click="scrollToSection('home')"  :class="[
          'text-xl bg-transparent rounded-full py-1 px-3 hover:bg-gray-400 hover:text-white',
        activeSection === 'home' ? ' text-white bg-gray-400' : 'text-black'
      ]">
                        Home
                    </button>
                </li>
               
                <li class="mx-4"> 
                    <button @click="scrollToSection('skills')" :class="[
          'text-xl bg-transparent rounded-full py-1 px-3 hover:bg-gray-400 hover:text-white',
        activeSection === 'skills' ? ' text-white bg-gray-400' : 'text-black'
      ]">
                        Skills
                    </button>
                </li>
                <li class="mx-4"> 
                    <button @click="scrollToSection('about')" :class="[
          'text-xl bg-transparent rounded-full py-1 px-3 hover:bg-gray-400 hover:text-white',
        activeSection === 'about' ? ' text-white bg-gray-400' : 'text-black'
      ]">
                        About
                    </button>
                </li>
                <li class="mx-4"> 
                    <button @click="scrollToSection('projetos')" :class="[
          'text-xl bg-transparent rounded-full py-1 px-3 hover:bg-gray-400 hover:text-white',
        activeSection === 'projetos' ? ' text-white bg-gray-400' : 'text-black'
      ]">
                        Projects
                    </button>
                </li>
                
                    
                
                
            </ul>
    
        </nav>
    </header>
    
    
    </template>
    
    
    <script lang=ts>
    import type { SetupContext } from 'vue';
import { defineComponent, ref, type PropType } from 'vue';
    
    export default defineComponent({
        name: 'NavBarTeste',
        props: {
        activeSection: {
        type: String as PropType<string>,
        required: true,
    },
},  
        setup(_,context: SetupContext) {
            const darkModeIsActived = ref(false);
    
            const activeDarkMode = () => {
                darkModeIsActived.value = !darkModeIsActived.value;
                context.emit('darkMode', darkModeIsActived.value);
            };

            const scrollToSection = (sectionId: string) => {
            const section = document.getElementById(sectionId);
                    if (section) {
                        const offset = 150; 

                        window.scrollTo({
                        top: section.offsetTop - offset, 
                        behavior: 'smooth',
});
      }
    };
    
            return {
                darkModeIsActived,
                activeDarkMode,
                scrollToSection
            };
        }
    })
    
    
    
    </script>
    
    <styles >
    
    
    </styles>
    
    
    