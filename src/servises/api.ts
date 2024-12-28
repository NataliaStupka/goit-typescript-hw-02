import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export async function fetchPhoto<T>(query: string, page: number): Promise<T> {
  const response = await axios.get(`search/photos`, {
    params: {
      query,
      page,
      per_page: 20,
      orientation: "landscape",
      client_id: "4ChXu6KVv4PUXCS3EHYT84bih5AEnfXc2g47UvjiLBY",
    },
  });

  return response.data; //[{},{},..,{}]
}
