import { where } from "sequelize";
import FormModel from "../models/formModels.js";
//metodos para crud

//mostrar registros
export const getAllData = async (req, res) => {
  try {
    const datasF = await FormModel.findAll();
    res.json(datasF);
  } catch (error) {
    res.json({ message: error.message });
  }
};
//mostrar un registro
export const getOneData = async (req, res) => {
  try {
    const dataF = FormModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(dataF);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//crear registro
export const createForm = async (req, res) => {
  try {
    await FormModel.create(req.body);
    res.json({
      message: "checked good",
    });
  } catch (error) {
    es.json({ message: error.message });
  }
};
//actualizar registro
export const updateForm = async (req, res) => {
  try {
    FormModel.update(req.body, { where: { id: req.params.id } });
    res.json({
      message: "updated good",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
//eleminar registro
export const deleteForm = async (req, res) => {
  try {
    await FormModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "deleted good",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
