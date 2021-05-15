// Regex expression for 5 digits
// You can also add ^ and $ for first and last resp.
const validatePaperIDs = /\d{5}/;

// semObj : semester Object
export default function filterPaperIDs(semObj) {
  let pprIds = [];
  if (semObj) {
    const keys = Object.keys(semObj).map((key) => key.slice(-5));
    pprIds = keys.filter((key) => validatePaperIDs.test(key));
  }
  // Converting Object keys to ( 5 digits only ) keys array
  return pprIds;
}
