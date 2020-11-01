const Sequelize = require('sequelize');

module.exports = class Photo extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING(40),
                allowNull: true,
                unique: true,
            }

        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Photo',
            tableName: 'photos',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }




};

