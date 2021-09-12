import CompanyData from "../../interfaces/companyData";
import JobData from "../../interfaces/jobData";

export const makeJobMockData = (
  id: string,
  title: string,
  locations: string[],
  type = "Full Time"
): JobData => {
  return {
    id,
    title,
    type,
    locations,
    dateTimeAdded: "1630116426229",
    startDate: "",
    salary: "",
    details: {
      description:
        "Curabitur quam velit, dignissim quis mi at, ultrices tincidunt odio. Cras pharetra finibus fermentum. Donec et nisl diam. Nam at posuere nisl. Sed fermentum ligula purus, at gravida arcu sagittis nec. Proin nec varius nulla, sed fermentum quam. Nullam dictum ornare lorem vel placerat.\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed varius elit ut nibh faucibus, ut euismod lacus dictum. Vivamus dignissim ligula sit amet justo elementum, fringilla sollicitudin nisl interdum. Pellentesque ornare urna eget eros eleifend efficitur ac id purus. Suspendisse quis mi ut ante placerat varius vel eget massa. Ut tincidunt risus vitae varius vestibulum. Mauris vehicula, elit fringilla volutpat congue, lectus neque sollicitudin purus, ut eleifend dui sem in ipsum. Mauris tincidunt mi sed varius vehicula. Nulla finibus maximus varius. Vivamus faucibus, sapien et hendrerit tempus, lectus leo tristique arcu, ac convallis sem arcu nec sapien. Praesent id elit malesuada, vestibulum urna id, aliquam lacus. Cras feugiat ultricies nulla, vel bibendum metus porta a. Proin eu purus a lectus facilisis maximus quis et nibh. Duis luctus sit amet odio quis elementum. Nam sit amet metus sed erat tempus commodo.",
      requirements: {
        description: "",
        info: [],
      },
      responsibilities: {
        description:
          "Curabitur quam velit, dignissim quis mi at, ultrices tincidunt odio. Cras pharetra finibus fermentum. Donec et nisl diam. Nam at posuere nisl. Sed fermentum ligula purus, at gravida arcu sagittis nec. Proin nec varius nulla, sed fermentum quam. Nullam dictum ornare lorem vel placerat.\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed varius elit ut nibh faucibus, ut euismod lacus dictum. Vivamus dignissim ligula sit amet justo elementum, fringilla sollicitudin nisl interdum. Pellentesque ornare urna eget eros eleifend efficitur ac id purus. Suspendisse quis mi ut ante placerat varius vel eget massa. Ut tincidunt risus vitae varius vestibulum. Mauris vehicula, elit fringilla volutpat congue, lectus neque sollicitudin purus, ut eleifend dui sem in ipsum. Mauris tincidunt mi sed varius vehicula. Nulla finibus maximus varius. Vivamus faucibus, sapien et hendrerit tempus, lectus leo tristique arcu, ac convallis sem arcu nec sapien. Praesent id elit malesuada, vestibulum urna id, aliquam lacus. Cras feugiat ultricies nulla, vel bibendum metus porta a. Proin eu purus a lectus facilisis maximus quis et nibh. Duis luctus sit amet odio quis elementum. Nam sit amet metus sed erat tempus commodo.",
        info: [],
      },
      contact: {
        name: "Tom Test",
        email: "Tom@test.com",
        phone: "555-111-555",
      },
    },
  };
};

export const makeCompanyMockData = (
  name: string,
  locations: string[],
  ...jobs: JobData[]
): CompanyData => {
  return {
    name,
    logo: "",
    backgroundColor: "",
    locations,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et bi",
    url: "",
    companySize: "",
    type: "Private",
    industry: "",
    jobs,
  };
};
