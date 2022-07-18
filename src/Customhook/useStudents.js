import { useQuery } from "react-query";
const useStudents = () => {
  const { refetch, data } = useQuery(["student"], () =>
    fetch(`https://tpl-student.herokuapp.com/students`).then((res) =>
      res.json(),
    ),
  );

  return [data, refetch];
};

export default useStudents;
