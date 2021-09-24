<template>
    <section class="flex flex-col justify-center md:flex-row gap-0 md:gap-8 my-0 md:my-14">
        <div class="w-full mb-8 md:mb-0 md:w-7/12">
            <h1 class="text-4xl mt-5 md:mt-0 mb-4 md:mb-8 md:text-6xl font-bold text-gray-200 font-serif">Find the Next <span class="text-green-400">Crypto Gem</span> here</h1>
           <button class="bg-gradient-to-r mt-6 from-green-400 to-green-600 text-gray-100 p-2 rounded-md font-semibold"><router-link to="/coins">Explore Coins</router-link></button>
        </div>
        <div class="flex items-center justify-center flex-col rounded-md" v-if="!loading">
          <HeroCard :crypto="stats" />
        </div>
        <div class="flex items-center justify-center flex-col rounded-md" v-else>
          <div>
            <span class="text-2xl font-semibold text-gray-100">Loading</span>
            <img :src="loadingImage" class="w-12 m-auto" alt="">
          </div>
        </div>
    </section>
    <section class="px-2 md:px-14 py-14">
      <Companies />
    </section>
    <section class="px-2 md:px-14 py-14">
      <Services />
    </section>
    <section class="px-2 md:px-14 py-14">
      <div v-if="!loading">
        <TopCoin :coin="crypto" />
      </div>
      <div class="flex items-center justify-center flex-col rounded-md" v-else>
          <div>
            <span class="text-2xl font-semibold text-gray-100">Loading</span>
            <img :src="loadingImage" class="w-12 m-auto" alt="">
          </div>
      </div>
    </section>
    <section class="px-2 md:px-14 py-14">
        <Newsletter />
    </section>
</template>

<script>
import HeroCard from '../components/HeroCard.vue'
import Companies from '../components/Companies.vue'
import Services from '../components/Services.vue'
import TopCoin from '../components/TopCoin.vue'
import Newsletter from '../components/Newsletter.vue'

export default {
    name: 'Home',
    components: {
      HeroCard,
      Companies,
      Services,
      TopCoin,
      Newsletter
    },
    data() {
      return {
        loading: true,
        stats: {},
        loadingImage: require('../assets/loading.gif')
      }
      
    },
    methods: {
      async fetchCryptoData() {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=false');
        const data = res.json();
        return data;
      }
    },
    async created() {
      const data = await this.fetchCryptoData();
      this.stats = data;
      console.log(data[0]);
      this.crypto = data[0];
      this.loading = false;
    }
}
</script>