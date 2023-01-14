import { defineStore } from 'pinia';
import { FeaturedRental } from '~~/interfaces/featuredRental';
export const useFeaturedRentalsStore = defineStore('featuredRentals', {
  state: () => ({ listings: [] as FeaturedRental[] }),
  getters: {
    getListings: state => state.listings,
    hasListings: state => state.listings.length > 0,
    getListingById: (state) => {
      return (listingID: number) => state.listings.find(l => l.ListingKeyNumeric === listingID);
    }
  }
});
