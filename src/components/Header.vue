<template>
   <div class="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-6 flex justify-between items-center flex-col md:flex-row">
        <div class="mb-3 md:mb-0">
            <router-link class="text-green-500 text-2xl font-bold" to="/"><i class="fab fa-bitcoin text-green-600"></i> Krypton</router-link>
        </div>    
        <div class="text-gray-100 font-semibold flex items-center justify-between">
            <router-link class="px-1 md:px-4 hover:text-green-400 " to="/">Home</router-link>
            <router-link class="px-1 md:px-4 hover:text-green-400" to="/coins">Explore Coins</router-link>
            <button class="bg-gradient-to-r from-green-400 to-green-600 text-gray-100 p-2 md:p-2 rounded-md font-medium md:font-semibold"><a class="" href="https://shoaibdevportfolio.netlify.app/">Meet Author</a></button>
        </div>   
   </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>
