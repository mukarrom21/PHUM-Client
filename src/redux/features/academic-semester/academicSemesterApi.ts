import { baseApi } from "../../api/baseApi";

const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getAllAcademicSemesters: builder.query({
        query: () => ({
          url: "/academic-semesters",
          method: "GET",
        }),
      }),
    };
  },
});

export const { useGetAllAcademicSemestersQuery } = academicSemesterApi;
