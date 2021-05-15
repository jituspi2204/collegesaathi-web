// getSubjectsList takes paperId, subjectsListSemesterWise and semester
// It returns array of objects containing semester details plus title :)

export default function getSubjectsList(
  pprIds,
  subjectsListSemWise,
  semester,
  semesterYear
) {

  if (semester && subjectsListSemWise && pprIds && semesterYear) {

    let semPaperID = pprIds
    if(semester[pprIds[0]] === undefined) {
      semPaperID = pprIds.map(pId => '0'+pId)
    }

    return pprIds.map((pId, index) => {
      return {
        // slice is to remove last 6 digits which corresponds to PaperId
        title: subjectsListSemWise[semesterYear][pId].slice(0, -6),
        ...semester[semPaperID[index]],
        pId: pId,
      };
    });
  } else return [];
}
