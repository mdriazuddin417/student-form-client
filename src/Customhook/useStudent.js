import { useQuery } from "react-query";
const useStudent = (page, size) => {
  const { isLoading, error, data, refetch } = useQuery(
    ["repoData", page, size],
    () =>
      fetch(
        `https://tpl-student.herokuapp.com/student?page=${page}&size=${size}`,
      ).then((res) => res.json()),
  );

  return [data, refetch, isLoading];
};

export default useStudent;
