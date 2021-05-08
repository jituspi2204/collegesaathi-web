// Regex expression for 5 digits
// You can also add ^ and $ for first and last resp.
const validatePaperIDs = /\d{5}/;

// semObj : semester Object
export default function filterPaperIDs(semObj) {
  // Converting Object keys to ( 5 digits only ) keys array
  const keys = Object.keys(semObj).map((key) => key.slice(-5));
  const pprIds = keys.filter((key) => validatePaperIDs.test(key));

  console.log("filter ppr ids", pprIds);
  return pprIds;
}
