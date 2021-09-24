<template>
    <div class="px-4 md:px-0 py-12 flex flex-col justify-center items-center bg-gradient-to-r
        from-gray-800
        via-gray-900
        to-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-lg">
        <h1 class="font-serif text-2xl md:text-4xl font-semibold text-gray-200 text-center">Subscribe to Our NewsLetter</h1>
        <form class="flex justify-center items-center mt-12 my-6">
            <input class="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 w-full  pl-4 pr-12 py-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent mr-0 md:mr-4" type="email" placeholder="Your Email" required>
            <button type="submit" class="bg-gradient-to-r from-green-400 to-green-600 text-gray-100 p-3 rounded-md font-semibold"><a href="mailto: shoaibmehmood065@gmail.com">Subscribe</a></button>
        </form>
        
    </div>    
</template>

<script>
export default {
    name: 'Newsletter'
}
</script>