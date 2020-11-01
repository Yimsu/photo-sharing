const Sequelize = require('sequelize');
const User = require('./user');
const Folder = require('./folder');
const User_folder = require('./user_folder');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
db.Folder = Folder;
db.User_folder = User_folder;

User.init(sequelize);
Folder.init(sequelize);
User_folder.init(sequelize);

User.associate(db);
Folder.associate(db);
User_folder.associate(db);

module.exports = db;
