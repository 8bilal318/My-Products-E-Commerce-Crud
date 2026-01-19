import Shirts from "../models/shirts.model.js";

export const getShirts = async (req, res) => {
  const products = await Shirts.find();
  res.render("shirts/products", { products });
};

export const addShirtsForm = (req, res) => {
  res.render("shirts/add-product");
};

export const addShirts = async (req, res) => {
  await Shirts.create(req.body);
  res.redirect("/shirts");
};

export const editShirtsForm = async (req, res) => {
  const product = await Shirts.findById(req.params.id);
  res.render("shirts/update-product", { product });
};

export const updateShirts = async (req, res) => {
  await Shirts.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/shirts");
};

export const deleteShirts = async (req, res) => {
  await Shirts.findByIdAndDelete(req.params.id);
  res.redirect("/shirts");
};
