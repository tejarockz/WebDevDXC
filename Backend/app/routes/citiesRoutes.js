const controller = require("../controllers/citiesController");
const path = "/cities";

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get(`${path}/all`, controller.all_cities);
  app.get(`${path}/:id`, controller.one_cities);
  app.post(`${path}/new`, controller.new_cities);
  // app.put(`${path}/:id`, controller.update_Students);
  // app.delete(`${path}/:id`, controller.delete_Students);
};