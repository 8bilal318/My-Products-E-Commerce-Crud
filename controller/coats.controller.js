import Coats from "../models/coats.model.js";

export const getCoats = async (req, res) => {
  const products = await Coats.find();
  res.render("coats/products", { products });
};

export const addCoatsForm = (req, res) => {
  res.render("coats/add-product");
};

export const addCoats = async (req, res) => {
  await Coats.create(req.body);
  res.redirect("/coats");
};

export const editCoatsForm = async (req, res) => {
  const product = await Coats.findById(req.params.id);
  res.render("coats/update-product", { product });
};

export const updateCoats = async (req, res) => {
  await Coats.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/coats");
};

export const deleteCoats = async (req, res) => {
  await Coats.findByIdAndDelete(req.params.id);
  res.redirect("/coats");
};
