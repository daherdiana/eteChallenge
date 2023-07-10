const db = require('../lib/database');

async function getEmployeesList(query) {
  const employees = await db.Employee.findAll({
    attributes: [`id`, `fullName`, `email`, `dateOfBirth`, `country`, `profilePicture`],
    distinct: true,
    raw: true,
    nest: true,
    limit: Number(query.limit) || 20,
    offset: (Number(query.page) - 1) * Number(query.limit) || 0,
  });
  const totalCount = await db.Employee.count({
    distinct: true,
  });
  return {
    employees,
    totalCount
  }
}

async function createEmployee(body) {
  return db.Employee.create(body);
}

async function updateEmployee(body) {
  const employee = await db.Employee.findOne({
    where: {
      id: body.id
    },
  })
  if (!employee) {
    throw new Error('employee_not_found')
  }
  delete body.id;
  return employee.update(body);
}

async function deleteEmployee(body) {
  const employee = await db.Employee.findOne({
    where: {
      id: body.id
    },
  })
  if (!employee) {
    throw new Error('employee_not_found')
  }
  return employee.destroy();
}

exports.getEmployeesList = getEmployeesList;
exports.createEmployee = createEmployee;
exports.updateEmployee = updateEmployee;
exports.deleteEmployee = deleteEmployee;
