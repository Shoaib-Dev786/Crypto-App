<template>
  <div class="rounded-xl 
        bg-gradient-to-r
        from-gray-600
        via-gray-700
        to-gray-600
        shadow-lg
        p-5 bg-opacity-60 backdrop-filter backdrop-blur-lg
        ">
    <p v-for="stats in crypto" class="flex items-center text-gray-100 p-2 gap-3">
      <img
        class="h-8 w-8 rounded-full"
        :src="stats.image"
        :alt="stats.name"
      />
      <span class="uppercase">{{ stats.symbol }}</span>
      <span
        class="
          text-xs
          leading-5
          font-semibold
          rounded-full
          bg-red-100
          text-red-800
          px-2
        "
        v-if="stats.price_change_percentage_24h < 0"
      >
        {{ stats.price_change_percentage_24h }}%
      </span>
      <span
        class="
          text-xs
          leading-5
          font-semibold
          rounded-full
          bg-green-100
          text-green-800
          px-2
        "
        v-else
      >
        {{ stats.price_change_percentage_24h }}%
      </span>
      <span>${{  numberWithCommas(stats.current_price) }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "HeroCard",
  props: ['crypto'],
  methods: {
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
    }
};
</script>