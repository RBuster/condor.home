<template>
  <p>{{ listing?.PublicRemarks }}</p>
</template>
<script setup>
import ListingManager from '../../server/managers/listing'
import { useListingsStore } from '~~/store/listings'
const route = useRoute()
const slug = route.params.slug
const store = useListingsStore()
if (!store.hasListings) {
  await ListingManager.loadListings()
}
const listingId = parseInt(slug)
if (!listingId) {
  navigateTo('/forSale')
}
const listing = ListingManager.getListingById(listingId)
</script>
