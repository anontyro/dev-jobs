import CompanyData from "../../interfaces/companyData";
import InitalJobQuery from "../../interfaces/search/initalJobQuery";

export const filterCompanyList = (
  search: InitalJobQuery,
  ...companys: CompanyData[]
): CompanyData[] => {
  const results = companys.map((company: CompanyData) => {
    const jobs = company.jobs.filter((j) => {
      const hasTitleOrIgnoreEmpty =
        search.title !== ""
          ? j.title.toLowerCase().includes(search.title.toLowerCase())
          : true;
      const hasLocationOrIgnoreEmpty =
        search.location !== ""
          ? j.locations
              .map((x) => x.toLowerCase())
              .includes(search.location.toLowerCase())
          : true;
      const isFullTimeOrAny = search.isFullTime ? j.type === "Full Time" : true;
      return (
        hasTitleOrIgnoreEmpty && hasLocationOrIgnoreEmpty && isFullTimeOrAny
      );
    });
    return {
      ...company,
      jobs,
    };
  });
  return results.filter((x) => x.jobs.length > 0);
};
