import { defineStore } from 'pinia'
import { Listing } from '~~/interfaces/listing'
export const useListingsStore = defineStore('listings', {
  state: () => ({ listings: [] as Listing[] }),
  getters: {
    getListings: state => state.listings,
    hasListings: state => state.listings.length > 0,
    getListingById: (state) => {
      return (listingID: number) => state.listings.find(l => l.ListingKeyNumeric === listingID)
    }
  }
})
