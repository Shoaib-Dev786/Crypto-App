<template>
  <main v-if="!loading">
    <Table :crypto="stats" />
  </main>
  <main v-else>
    <div class="text-gray-500 text-3xl mt-10 mb-6 text-center">
      Fetching Data. Have a Cup of Coffee.
    </div>
    <img :src="loadingImage" class="w-24 m-auto" alt="">
  </main>
</template>

<script>
import Table from '../components/Table.vue'

export default {
  name: 'Coins',
  components: {
    Table,
  },

  data() {
    return {
      loading: true,
      stats: {},
      loadingImage: require('../assets/coffee.gif')
    }
  },
  methods: {
    async fetchCryptoData() {
      const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false');
      const data = res.json();
      console.log(data);
      return data;
    }
  },
  async created() {
     const data = await this.fetchCryptoData();
     this.stats = data;
     this.loading = false;
  }
}
</script>
