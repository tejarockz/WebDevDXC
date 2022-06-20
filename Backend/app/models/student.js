module.exports = (sequelize, Sequelize) => {
  const TableName = "student";
  const Student = sequelize.define(
    TableName,
    {
      StudentID: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
      tableName: TableName,
    }
  );
  Student.removeAttribute("id");
  return Student;
};