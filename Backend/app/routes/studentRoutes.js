const controller = require("../controllers/studentController");
const path = "/student";

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get(`${path}/all`, controller.all_Students);
  app.get(`${path}/:id`, controller.one_Students);
  app.post(`${path}/new`, controller.new_Students);
  app.put(`${path}/:id`, controller.update_Students);
  app.delete(`${path}/:id`, controller.delete_Students);
};