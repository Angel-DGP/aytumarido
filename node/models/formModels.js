import db from "../database/db.js";

import { DataTypes } from "sequelize";

const FormModel = db.define("form_table", {
  sede: { type: DataTypes.STRING },
  codigoCarrera: { type: DataTypes.STRING },
  codigoConvenio: { type: DataTypes.STRING },
  nombreConvenio: { type: DataTypes.STRING },
  contraparteInternacional: { type: DataTypes.STRING },
  pais: { type: DataTypes.STRING },
  actividades: { type: DataTypes.STRING },
  fechaInicio: { type: DataTypes.DATE },
  fechaFinal: { type: DataTypes.DATE },
  areaConocimiento: { type: DataTypes.STRING },
  financiamiento: { type: DataTypes.STRING },
});
export default FormModel;
