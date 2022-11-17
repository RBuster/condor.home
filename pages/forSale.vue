<template>
    <div>
        <div class="loading-block flex flex-wrap justify-center container mx-auto max-w-7xl" v-if="isLoading">
                <div class="p-6 rounded-lg shadow-lg bg-white w-96 my-6 mx-4 animate-pulse space-x-4">
                    <div class="grid grid-cols-1 gap-4">
                        <div class="h-2 bg-slate-700 rounded w-28"></div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                        <div class="bg-slate-700 rounded w-20 h-7"></div>
                    </div>
                </div>
                <div class="p-6 rounded-lg shadow-lg bg-white w-96 my-6 mx-4 animate-pulse space-x-4">
                    <div class="grid grid-cols-1 gap-4">
                        <div class="h-2 bg-slate-700 rounded w-28"></div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                        <div class="bg-slate-700 rounded w-20 h-7"></div>
                    </div>
                </div>
                <div class="p-6 rounded-lg shadow-lg bg-white w-96 my-6 mx-4 animate-pulse space-x-4">
                    <div class="grid grid-cols-1 gap-4">
                        <div class="h-2 bg-slate-700 rounded w-28"></div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                        <div class="bg-slate-700 rounded w-20 h-7"></div>
                    </div>
                </div>
            </div>
        <div class="flex flex-wrap justify-center container mx-auto max-w-7xl">


            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm my-6 mx-4"
                v-for="listing in listings" :key="listing.ListingKeyNumeric">
                <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
                    {{listing.StreetNumberNumeric}} {{listing.StreetName}} {{listing.City}} {{listing.StateOrProvince}}
                </h5>
                <p class="text-gray-700 text-base mb-4">
                    {{ listing.PublicRemarks }}
                </p>
                <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </div>
        </div>
    </div>
  </template>
<script>
export default {
    data(){
        return {
            isLoading: false,
            listings: []
        }
    },
    async mounted(){
        this.isLoading = true;
        const result = await $fetch('/api/mls')
        this.listings = result.data
        this.isLoading = false;
    }
}
</script>