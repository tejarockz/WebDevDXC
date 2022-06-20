const db = require("../models/index");
const Student = db.student;

// Find All enties in Student Table
exports.all_Students = (req, res) => {
  Student.findAll({})
    .then((allStudent) => {
      res.status(200).send(allStudent);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

// Find single Entry
exports.one_Students = (req, res) => {
  // console.log(req.params);
  Student.findOne({
    where: { StudentID: req.params.id },
  })
    .then((oneStudent) => {
      if (!oneStudent) return res.status(500).send("No records found");
      res.status(200).send(oneStudent);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

// Create a record {}
exports.new_Students = (req, res) => {
  console.log(req.body);
  Student.create({
    firstName:req.body.student.firstName,

    lastName:req.body.student.lastName,

    email:req.body.student.email,

    city:req.body.student.city,

    phone:req.body.student.phone,
  })
    .then((newStudent) => {
      res.status(200).send(newStudent);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

//  Update a record
exports.update_Students = (req, res) => {
  console.log(req.body);
  console.log(req.params);
  Student.findOne({
    where: { StudentID: req.body.student.StudentID },
  })
    .then((oneStudent) => {
      if (!oneStudent) return res.status(500).send("No records found");
      Student.update(req.body.student, { where: { StudentID: req.body.student.StudentID } })
        .then((update) => {
          res.status(200).send(update);
        })
        .catch((err) => {
          S;
          res.status(500).send({ message: err.message });
        });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

// Delete
exports.delete_Students = (req, res) => {
  Student.destroy({ where: { StudentID: req.params.id } })
    .then((deleteStudent) => {
      if (!deleteStudent) return res.status(200).send("Not found");
      res.status(200).send("Success");
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};