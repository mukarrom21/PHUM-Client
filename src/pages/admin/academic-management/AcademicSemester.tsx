import { useGetAllAcademicSemestersQuery } from "../../../redux/features/academic-semester/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllAcademicSemestersQuery(undefined);
  console.log(data);

  return (
    <div>
      <h1>This is AcademicSemester component</h1>
    </div>
  );
};

export default AcademicSemester;
