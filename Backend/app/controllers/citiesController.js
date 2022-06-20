const db = require("../models/index");
const cities = db.cities;

// Find All enties in Student Table
exports.all_cities = (req, res) => {
  cities.findAll({})
    .then((allcities) => {
      res.status(200).send(allcities);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

// Find single Entry
exports.one_cities = (req, res) => {
  // console.log(req.params);
  cities.findOne({
    where: { citiesID: req.params.id },
  })
    .then((onecities) => {
      if (!onecities) return res.status(500).send("No records found");
      res.status(200).send(onecities);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

// Create a record {}
exports.new_cities = (req, res) => {
  console.log(req.body);
  cities.create({
    citiesName:req.body.cities.citiesName,

  })
    .then((newcities) => {
      res.status(200).send(newcities);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

//  Update a record
// exports.update_Students = (req, res) => {
//   console.log(req.body);
//   console.log(req.params);
//   Student.findOne({
//     where: { StudentID: req.body.student.StudentID },
//   })
//     .then((oneStudent) => {
//       if (!oneStudent) return res.status(500).send("No records found");
//       Student.update(req.body.student, { where: { StudentID: req.body.student.StudentID } })
//         .then((update) => {
//           res.status(200).send(update);
//         })
//         .catch((err) => {
//           S;
//           res.status(500).send({ message: err.message });
//         });
//     })
//     .catch((err) => {
//       res.status(500).send({ message: err.message });
//     });
// };

// // Delete
// exports.delete_Students = (req, res) => {
//   Student.destroy({ where: { StudentID: req.params.id } })
//     .then((deleteStudent) => {
//       if (!deleteStudent) return res.status(200).send("Not found");
//       res.status(200).send("Success");
//     })
//     .catch((err) => {
//       res.status(500).send({ message: err.message });
//     });
// };