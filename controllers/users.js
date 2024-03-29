const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Users]
    const result = await mongodb.getDatabase().db().collection('users').find();
    result.toArray().then((users) => {
        // res.setHeader('Content-Type', 'aplication/json');
        res.status(200).json(users);
    });

}

const getSingle = async (req, res) => {
    //#swagger.tags=['Users']
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('users').find({_id: userId});
    result.toArray().then((users) => {
        // res.setHeader('Content-Type', 'aplication/json');
        res.status(200).json(users[0]);
    });

};

const createUser = async(req, res) => {
     //#swagger.tags=['Users']
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lasttName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDatabase().db().collection('users').insertOne(user);
    if (response.acknowleged) {
        res.status(204).send();
    }
    else {
        res.status(500).json(response.error || 'Some error occured while updating the user');
    }
};

const updateUser = async(req, res) => {
     //#swagger.tags=['Users']
    const userId = new ObjectId(req.params.id);
    const user = {
        userName: req.body.userName,
        email: req.body.email,
        name: req.body.name,
        ipaddress: req.body.ipaddress
    };
    const response = await mongodb.getDatabase().db().collection('users').replaceOne({_id: userId}, user);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    }
    else {
        res.status(500).json(response.error || 'Some error occured while updating the user');
    }
};

const deleteUser = async(req, res) => {
     //#swagger.tags=['Users']
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('users').deleteOne({_id: userId});
    if (response.deleteCount > 0) {
        res.status(204).send();
    }
    else {
        res.status(500).json(response.error || 'Some error occured while updating the user');
    }
}

module.exports = {
    getAll, 
    getSingle, 
    createUser,
    updateUser,
    deleteUser
};