import { Store } from '@pinia/nuxt/dist/runtime/composables';
import { Listing } from '~~/interfaces/listing'
import { useListingsStore } from '~~/store/listings'
class ListingManager {
  async loadListings(){
    const listingsStore = useListingsStore()
    const result = await $fetch('/api/mls', {
      method: 'POST',
      body: {
        count: 12,
        skip: 0
      }
    })
    listingsStore.listings = result.data
  }
  async getListings (): Promise<Listing[]> {
    const listingsStore = useListingsStore()
    if(!listingsStore.hasListings){
      await this.loadListings();
    }
    return listingsStore.listings
  }
  async getListingById(listingID: number): Promise<Listing | undefined>{
    const listingsStore = useListingsStore()
    return listingsStore.getListingById(listingID);
  }
}
export default new ListingManager()
