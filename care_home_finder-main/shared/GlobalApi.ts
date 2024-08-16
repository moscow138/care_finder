import axios from 'axios';

interface GooglePlaceResponse {
  // Define the expected structure of the response here, or use `any` if uncertain
  data: any;
}

const getGooglePlace = (
  category: string,
  radius: number,
  lat: number,
  lng: number
): Promise<GooglePlaceResponse> => {
  return axios.get<GooglePlaceResponse>(
    `/api/google-place?category=${category}&radius=${radius}&lat=${lat}&lng=${lng}`
  );
};

const searchPlace=(searchtext,lat,lng)=>axios.get('/api/google-search-place?searchtext='+
  searchtext+"&lat="+lat+"&lng="+lng);
  

export default {
  getGooglePlace,
  searchPlace
};
