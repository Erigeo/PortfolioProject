<template>
   
   <section class="justify-center  flex p-10 flex-col bg-pink-100">

<p class="text-4xl justify-center flex">Browse my recent Projects</p>

<div class="flex flex-row gap-10 justify-center mt-5">
<div class="border-2 border-gray-500 rounded-xl flex items-center flex-col w-[300px] h-[400px]">

<div class="flex">
    <div class="flex my-5 justify-center mb-2 bg-blue-100 w-[200px] h-[200px] ">
        <img class="rounded-xl" src="../assets/image.png" alt="imagem referente ao projeto CaptureDex" />
    </div>
    
   
</div>

<p class="mb-2 text-3xl mt-2 flex justify-center">Capture Dex</p>
   
<div class="flex flex-row gap-3 mt-7">


<a target="_blank" href="https://github.com/Erigeo"  class=" justify-center items-center flex  bg-white w-[100px] h-[30px] rounded-2xl text-gray-400 ">
    GitHub
</a>
<a target="_blank" href="https://github.com/Erigeo"  class=" justify-center items-center flex  bg-white w-[100px] h-[30px] rounded-2xl text-gray-400 ">
    Demo
</a>

</div>

</div>
</div>


</section>



</template>


<script lang="ts">
import { defineComponent } from 'vue';


    export default defineComponent({
        name: 'ConteudoProjects',
    })
</script>