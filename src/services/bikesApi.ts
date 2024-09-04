import { IFilter } from "@/models/bikes.model";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseUrl = "https://bikeindex.org:443/api/v3/search";
export const BikesApi = createApi({
  reducerPath: "BikesApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getStolenBikesCount: builder.query({
      query: () => `${baseUrl}/count?location=Munich&stolenness=stolen`,
    }),
    getStolenBikes: builder.query({
      query: (filter: IFilter) =>
        `${baseUrl}?page=${filter.page}&per_page=${filter.per_page}
      ${
        filter.title !== "" ? `&query=${filter.title}` : ""
      }&location=Munich&stolenness=stolen`,
    }),
  }),
});
export const { useGetStolenBikesQuery, useGetStolenBikesCountQuery } = BikesApi;
