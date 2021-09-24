<template>
    <div class="">
        <h1 class="text-2xl md:text-4xl lg:text-5xl font-serif text-center text-gray-200 mb-14">We've Created an Exchange to Lead this Revolutionary</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card :image="'https://cdn-icons-png.flaticon.com/512/4705/4705661.png'" :title="'Great Trading'" :description="'We believe in the potential to provide groundbreaking solutions accross industries and beyond crypto.'" />
            <Card :image="'https://cdn-icons-png.flaticon.com/512/755/755091.png'" :title="'Security First'" :description="'When  choosing an exchange, trust matters. That is why security has been our top consideration. '"/>
            <Card :image="'https://cdn-icons-png.flaticon.com/512/2428/2428691.png'" :title="'Robust Technology'" :description="'We believe in the potential to provide groundbreaking solutions accross industries and beyond crypto.'"/>
        </div>
    </div>

</template>

<script>
import Card from './Card.vue'

export default {
    name: 'Services',
    components: {
        Card
    }
}
</script>