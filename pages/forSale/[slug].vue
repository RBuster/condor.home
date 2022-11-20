<template>
  <p>{{ listing?.PublicRemarks }}</p>
</template>
<script setup>
import { useListingsStore } from '~~/store/listings';
import ListingManager from '../../server/managers/listing'
const route = useRoute()
const slug = route.params.slug
const store = useListingsStore();
if(!store.hasListings){
  await ListingManager.loadListings();
}
const listingId = parseInt(slug);
if(!listingId){
  navigateTo('/forSale')
}
const listing = await ListingManager.getListingById(listingId);
</script>
