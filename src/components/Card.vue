<template>
    <div class=" px-4 py-8 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-200 rounded-lg shadow-lg">
        <img class="w-1/4 h-1/3" :src="image">
        <h1 class="my-3 font-semibold text-2xl text-gray-300">{{ title }}</h1>
        <p>{{description}}</p>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        image: String,
        title: String,
        description: String
    }
}
</script>