<template>
  <div>
    <div v-for="listing in listings" :key="listing.ListingKeyNumeric">
      <p>{{ listing.PublicRemarks }}</p>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      listings: []
    }
  },
  async fetch () {
    if (this.listings.length <= 0) {
      await this.$axios.get(`${process.env.baseUrl}/api/getListings`).then((res) => {
        this.listings = res.data?.listings
      }
      )
    }
  }
}
</script>
