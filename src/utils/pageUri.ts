export const createPageUri = (jobId: string, companyName: string) => {
  const formatedName = companyName.trim().replace(/\s/g, "-");
  return `/jobs/${formatedName}/${jobId}`;
};
