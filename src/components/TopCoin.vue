<template>
    <div class="flex items-center justify-around flex-col-reverse md:flex-row">
       <div>
            <div class="flex flex-col items-center rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 text-gray-200 py-12 px-28">
              <img class="h-16 w-16 rounded-full border-4 border-yellow-200" :src="coin.image" >
              <div class="flex flex-col items-center mt-4">
                  <h3 class="text-xl text-gray-200 font-semibold">{{ coin.name }}</h3>
                  <span class="mb-6 uppercase">{{ coin.symbol }}</span>
                  <span class="mb-4 text-lg">${{ numberWithCommas(coin.current_price) }} </span>
                  <span class="text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 px-2" v-if="coin.price_change_percentage_24h < 0">{{ coin.price_change_percentage_24h }}%</span>
                  <span class="text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 px-2" v-else>{{ coin.price_change_percentage_24h }}%</span>
              </div>    
            </div>
       </div>
       <div class="w-full md:w-1/2 px-0 md:px-6 md:mb-0 mb-8">
           <h1 class="text-gray-200 text-2xl md:text-2xl lg:text-4xl my-4 font-semibold">Your Access to the Top Coin Markets</h1>
           <p class="text-gray-200">Capitalize on trends and trade with confidence through our expensive marketplace listings.</p>
           <span class="text-green-500">Buy, sell and trade over 500 markets.</span><br>
           <button class="bg-gradient-to-r mt-6 from-green-400 to-green-600 text-gray-100 p-2 rounded-md font-semibold"><router-link to="/coins">Explore Coins</router-link></button>
       </div>
    </div>
</template>

<script>

export default {
    name: 'TopCoin',
    props: ['coin'],
    methods: {
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
    }
}
</script>