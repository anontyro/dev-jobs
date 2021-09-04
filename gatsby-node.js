const path = require("path");
const json = require("./src/assets/data/JOB_DATA.json");

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  const template = path.resolve("./src/templates/JobItem.tsx");

  const jobData = json
    .map((company) => {
      return company.jobs.map((job) => {
        return {
          company: {
            ...company,
            jobs: [],
          },
          ...job,
        };
      });
    })
    .flat();

  jobData.forEach((job) => {
    const companyName = job.company.name.trim().replace(/\s/g, "-");
    createPage({
      path: `/jobs/${companyName}/${job.id}`,
      component: template,
      context: {
        job,
      },
    });
  });
};
