const getSubjectsListSemWise = (data) => {
  const subjectsListSemWise = {};

  let k = "";
  data.subjects.forEach((sub) => {
    k = sub.key.slice(-5);
    if (sub.semester in subjectsListSemWise) {
      subjectsListSemWise[sub.semester][k] = `${sub.name}-${k}`;
    } else {
      subjectsListSemWise[sub.semester] = {};
      subjectsListSemWise[sub.semester][k] = `${sub.name}-${k}`;
    }
  });

  return subjectsListSemWise;
};

export default getSubjectsListSemWise;
