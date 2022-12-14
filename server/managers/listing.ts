import { Listing } from '~~/interfaces/listing';
import { useListingsStore } from '~~/store/listings';
interface ListingsRequest{
  page: number,
  count: number,
  realtorID: number | undefined
}
class ListingManager {
  async loadListings (request: ListingsRequest) {
    const listingsStore = useListingsStore();
    const result = await $fetch('/api/residential', {
      method: 'POST',
      body: {
        count: request.count,
        skip: request.page,
        realtorID: request.realtorID
      }
    });
    listingsStore.listings = result.data;
  }

  async getListings (page: number, count: number, realtorID?: number): Promise<Listing[]> {
    const listingsStore = useListingsStore();
    if (!listingsStore.hasListings) {
      await this.loadListings({ page, count, realtorID });
    }
    if (realtorID) {
      return listingsStore.listings.filter(listing => listing.ListAgentMlsId === realtorID.toString());
    }
    return listingsStore.listings;
  }

  getListingById (listingID: number): Listing | undefined {
    const listingsStore = useListingsStore();
    return listingsStore.getListingById(listingID);
  }
}
export default new ListingManager();
