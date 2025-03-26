const Product = require("../models/Product");
const Store = require("../models/Store");

const getAllProducts = async (_req, res) => {
  try {
    const products = await Product.findAll();
    if (products.length !== 0) {
      return res.status(200).json({
        products,
        message: "Listado de productos correctamente",
        status: 1,
      });
    }
    return res
      .status(404)
      .json({ message: "No se encontraron productos", status: 0 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

const getQuantityProductsByStoreId = async (req, res) => {
  const { store_id } = req.params;
  try {
    const productCount = await Product.count({ where: { store_id } });

    // Enviar solo el número entero en la respuesta
    if (productCount === 0) return res.send("0");
    return res.send(productCount.toString()); // Convierte a string para evitar errores
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error del servidor");
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (product) {
      return res
        .status(200)
        .json({ product, message: "Producto encontrado", status: 1 });
    }
    return res
      .status(404)
      .json({ message: "Producto no encontrado", status: 0 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

const createProduct = async (req, res) => {
  const { product_name, description, price, image, store_id } =
    req.body;
    console.log("Request Body:", store_id);
  try {
    //const store = await Store.findByPk(store_id);
/*     if (!store) {
      return res
        .status(400)
        .json({ message: "El store_id proporcionado no existe", status: 0 });
    } */
    const product = await Product.create({
      product_name,
      description,
      price,
      image,
      store_id,
    });
    return res
      .status(201)
      .json({ product, message: "Producto creado correctamente", status: 1 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { product_name, description, price, status, store_id } = req.body;
  try {
    const product = await Product.findByPk(id);
    if (product) {
      await product.update({
        product_name,
        description,
        price,
        status,
        store_id,
      });
      return res.status(200).json({
        product,
        message: "Producto actualizado correctamente",
        status: 1,
      });
    }
    return res
      .status(404)
      .json({ message: "Producto no encontrado", status: 0 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (product) {
      await product.destroy();
      return res
        .status(200)
        .json({ message: "Producto eliminado correctamente", status: 1 });
    }
    return res
      .status(404)
      .json({ message: "Producto no encontrado", status: 0 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getQuantityProductsByStoreId,
};
