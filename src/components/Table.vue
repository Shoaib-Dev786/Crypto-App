<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-700 text-gray-50">
              <tr>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    uppercase
                    tracking-wider
                  "
                >
                  Rank
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    uppercase
                    tracking-wider
                  "
                >
                  Coin
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    uppercase
                    tracking-wider
                  "
                >
                  Price
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    uppercase
                    tracking-wider
                  "
                >
                  24h
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    uppercase
                    tracking-wider
                  "
                >
                  Total Volume
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    uppercase
                    tracking-wider
                  "
                >
                  Market Cap
                </th>
              </tr>
            </thead>
            <tbody class="bg-gray-900 divide-y divide-gray-200">
              <tr v-for="stats in crypto">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-50">
                    {{stats.market_cap_rank}}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img
                        class="h-10 w-10 rounded-full"
                        :src="stats.image" 
                        :alt="stats.name"
                      />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-50">
                        {{ stats.name }}
                      </div>
                      <div class="text-sm text-gray-300">
                        {{ stats.symbol }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-50">
                    ${{ numberWithCommas(stats.current_price) }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span v-if="stats.price_change_percentage_24h > 0"
                    class="
                      px-2
                      inline-flex
                      text-xs
                      leading-5
                      font-semibold
                      rounded-full
                      bg-green-100
                      text-green-800
                    "
                  >
                    {{ stats.price_change_percentage_24h }}%
                  </span>
                  <span v-else
                    class="
                      px-2
                      inline-flex
                      text-xs
                      leading-5
                      font-semibold
                      rounded-full
                      bg-red-100
                      text-red-800
                    "
                  >
                    {{ stats.price_change_percentage_24h }}%
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-50">
                  ${{ numberWithCommas(stats.total_volume) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-50">
                    ${{ numberWithCommas(stats.market_cap) }}
                  </div>
                </td>
              </tr>

              <!-- More people... -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Table",
    props: ['crypto'],
    methods: {
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
    }
};
</script>