const Sequelize = require('sequelize');

module.exports = class Folder extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            // userId: {
            //     type: Sequelize.INTEGER,
            //     allowNull: true,
            // },
            name: {
                type: Sequelize.STRING(30),
                allowNull: false,
            }

        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Folder',
            tableName: 'folders',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
        db.Folder.belongsTo(db.User, {
            foreignKey: 'user_id',
            targetKey: 'id'
        })
    };
        static associate(db) {
            db.Folder.hasMany(db.User_folder, {
                foreignKey : 'folder_id',
                sourceKey: 'id'
            })
        };


};