import Products from '../models/products.js';

export const getProducts = async(req, res) => {
	try{
      let page = parseInt(req.query.page) - 1 || 0;
    	let limit = parseInt(req.query.limit) || 10;
      let title = req.query.title || "";
    	let category = req.query.category || "";
    	let brand = req.query.brand || "";
    	let sort = req.query.sort || "";

    	const findProducts = await Products.find();

    	let allCategories = findProducts.map((e) => e.category)
      let allBrands = findProducts.map((e) => e.brand);

    	let categories = allCategories.filter((c, index) => {
    		return allCategories.indexOf(c) === index;
    	});

      let brands = allBrands.filter((b, index) => {
        return allBrands.indexOf(b) === index
      });

      let sortBy = {};
      if (sort === "asc") {
        sortBy["price"] = 1;
      }
      if (sort === "desc") {
        sortBy["price"] = -1;
      }

      const productss = await Products.find();

    const products = await Products.find({title: { $regex: title, $options: "i" }, brand: { $regex: brand, $options: "i"}, category: { $regex: category, $options: "i"}})
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);

    const total = await Products.countDocuments({
      title: { $regex: title, $options: "i" },
      category: { $regex: category, $options: "i" },
      brand: { $regex: brand, $options: "i" }
    })

    const result = {
      total,
      page: page + 1,
      limit,
      categories,
      brands,
      products
    };

    res.status(200).json(result);
	} catch(err){
		res.status(500).json({message: err.message})
	}
};