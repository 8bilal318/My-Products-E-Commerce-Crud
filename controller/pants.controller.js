import Pants from "../models/pants.model.js";

// READ
export const getPants = async (req, res) => {
  const products = await Pants.find();
  res.render("pants/products", { products });
};

// ADD FORM
export const addPantsForm = (req, res) => {
  res.render("pants/add-product");
};

// CREATE
export const addPants = async (req, res) => {
  await Pants.create(req.body);
  res.redirect("/pants");
};

// EDIT FORM
export const editPantsForm = async (req, res) => {
  const product = await Pants.findById(req.params.id);
  res.render("pants/update-product", { product });
};

// UPDATE
export const updatePants = async (req, res) => {
  await Pants.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/pants");
};

// DELETE
export const deletePants = async (req, res) => {
  await Pants.findByIdAndDelete(req.params.id);
  res.redirect("/pants");
};
