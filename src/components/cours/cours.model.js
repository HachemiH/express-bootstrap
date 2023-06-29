import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Cours = sequelize.define(
  "Cours",
  {
    // Définition des champs du modèle
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // Autres champs du modèle...
  },
  {
    // Options supplémentaires du modèle
    tableName: "cours", // Nom de la table dans la base de données
    timestamps: true, // Activation des timestamps pour createdAt et updatedAt
  }
);

export default Cours;
