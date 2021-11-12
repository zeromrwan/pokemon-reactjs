/* eslint new-cap: "off", global-require: "off" */
const DataTypes = require("sequelize");
const sequelize = require("../../config/database");
const moment = require("moment");
const TdOwned = sequelize.define(
  "TdOwned",
  {
    id: {
      type: DataTypes.STRING(36),
      field: "id",
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    pokemonId: {
      type: DataTypes.INTEGER,
      field: "pokemon_id",
      allowNull: true,
    },
    nickname: {
      type: DataTypes.STRING(100),
      field: "nickname",
      allowNull: true,
    },
    urlImage: {
      type: DataTypes.STRING(255),
      field: "url_image",
      allowNull: true,
    },
    pokemonName: {
      type: DataTypes.STRING(150),
      field: "pokemon_name",
      allowNull: true,
    },
    totalOwned: {
      type: DataTypes.INTEGER,
      field: "total_owned",
      allowNull: true,
    },
    createdAt: {
      type: "TIMESTAMP",
      field: "created_at",
      allowNull: true,
      get() {
        return moment(this.getDataValue("createdAt")).format(
          "YYYY-MM-DD HH:mm:ss"
        );
      },
    },
    updatedAt: {
      type: "TIMESTAMP",
      field: "updated_at",
      allowNull: true,
      get() {
        return moment(this.getDataValue("updatedAt")).format(
          "YYYY-MM-DD HH:mm:ss"
        ) === "Invalid date"
          ? null
          : moment(this.getDataValue("updatedAt")).format(
              "YYYY-MM-DD HH:mm:ss"
            );
      },
    },
    fibSeq: {
      type: DataTypes.INTEGER,
      field: "fib_seq",
      allowNull: true,
    },
  },
  {
    schema: "pokemon",
    tableName: "td_owned",
    timestamps: false,
  }
);
module.exports = TdOwned;
