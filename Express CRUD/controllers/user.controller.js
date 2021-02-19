const e = require("express");
const db = require("../models");
const User = db.users;
const bcrypt = require("bcrypt");

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    var passw;
    bcrypt.hash(req.body.password, 10, (err, value) => {
      this.passw = value;
      console.log(this.passw);
    });  
    
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: this.passw
    });

    var email = user.email;

    var status = false;
    var condition1 = email ? { email: { $regex: new RegExp(email), $options: "i" } } : {};
    User.find(condition1) 
    .then(data => {
      for (i = 0; i < data.length; i++) {
        if(data[i].email==user.email) {
          status = true;
          res.status(400).send({
            message: "user already exists"
          });
          break;
        }
      }
     if(!status) {
      user
      .save(user)
      .then(data => {
        res.send(data);
      })
     }
    })
  };

  exports.login = (req, res) => {
    // Validate request
    if (!req.body.email) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    const user = new User({
      email: req.body.email,
      password: req.body.password
    });
  
    const email = user.email;

    var condition1 = email ? { email: { $regex: new RegExp(email), $options: "i" } } : {};
    User.find(condition1) 
    .then(data => {
      for (i = 0; i < data.length; i++) {
        if(data[i].email==user.email) {
          bcrypt.compare(user.password, data[i].password, function(err, value) {
            if(value) {
              res.send(data);
            } else {
              res.status(401).send({
                message: "Unauthorized"
              });
            }
          });
         
        }
      }
      // res.status(400).send({
      //   message: "user not found"
      // });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving User."
      });
    });
  };

  exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
    User.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving User."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    User.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found User with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving User with id=" + id });
      });
  };

  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update User with id=${id}. Maybe User was not found!`
          });
        } else res.send({ message: "User was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error User with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    User.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete User with id=${id}. Maybe User was not found!`
          });
        } else {
          res.send({
            message: "User was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  };

  exports.deleteAll = (req, res) => {
    User.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Users were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Users."
        });
      });
  };