import create from "@ant-design/icons/lib/components/IconFont";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const CryptoHeaders = {
  "X-RapidAPI-Key": "de253a2c9cmshc67ecf0e13b6e76p16d009jsne2a6b280eee2",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/coins";

const createRequest = (url) => ({
  url,
  headers: CryptoHeaders,
});

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoApi;
