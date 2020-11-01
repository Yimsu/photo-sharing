const Sequelize = require('sequelize');

module.exports = class User_folder extends Sequelize.Model {
    static init(sequelize) {
        return super.init({

        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'User_folder',
            tableName: 'user_folder',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
        db.User_folder.belongsTo(db.User, {
            foreignKey: 'user_id',
            targetKey: 'id'
        });
    }
    static associate(db) {
        db.User_folder.belongsTo(db.Folder, {
            foreignKey: 'folder_id',
            targetKey: 'id'
        });
    }


};

