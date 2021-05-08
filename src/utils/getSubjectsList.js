// getSubjectsList takes paperId, subjectsListSemesterWise and semester
// It returns array of objects containing semester details plus title :)

export default function getSubjectsList(
  pprIds,
  subjectsListSemWise,
  semester,
  semesterYear
) {
  if (semester && subjectsListSemWise && pprIds && semesterYear) {
    return pprIds.map((pId) => {
      return {
        // slice is to remove last 6 digits which corresponds to PaperId
        title: subjectsListSemWise[semesterYear][pId].slice(0, -6),
        ...semester[pId],
        pId: pId,
      };
    });
  } else return [];
}
