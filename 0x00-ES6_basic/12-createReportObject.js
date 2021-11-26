export default function createReportObject(employeesList) {
  const empsObj = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      let count = 0;
      for (const e in employeesList) {
        if (e) {
          count += 1;
        }
      }
      return count;
    },
  };
  return empsObj;
}
