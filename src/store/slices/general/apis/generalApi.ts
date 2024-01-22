import baseApi from '../../../apis/baseApi';

const generalApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    yourRequest: builder.mutation<
    {/* response interface */},
    {/* request interface */}
    >({
      query: (body) => ({
        url: 'endpoint',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useYourRequestMutation } = generalApi;

export default generalApi;
