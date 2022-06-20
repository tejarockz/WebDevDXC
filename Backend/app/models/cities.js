module.exports = (sequelize, Sequelize) => {
    const TableName = "cities";
    const cities = sequelize.define(
      TableName,
      {
        citiesID: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        citiesName: {
          type: Sequelize.STRING,
        },
        
      },
      {
        timestamps: true,
        freezeTableName: true,
        tableName: TableName,
      }
    );
    cities.removeAttribute("id");
    return cities;
  };