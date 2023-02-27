import Products from '../models/products.js';

export const getProducts = async(req, res) => {
	try{
      let page = parseInt(req.query.page) - 1 || 0;
    	let limit = parseInt(req.query.limit) || 10;
      let title = req.query.title || "";
    	let category = req.query.category || "All";
    	let brand = req.query.brand || "";
    	let sort = req.query.sort || "";

    	const findProducts = await Products.find();

    	let allCategories = findProducts.map((e) => e.category)

    	let categories = allCategories.filter((c, index) => {
    		return allCategories.indexOf(c) === index;
    	});
    	
      category === "All"? 
      (category = [...allCategories]): 
      (category = req.query.category.split(",").toString());

      let sortBy = {};
      if (sort === "asc") {
        sortBy["price"] = 1;
      }
      if (sort === "desc") {
        sortBy["price"] = -1;
      }

      const productss = await Products.find();

    const products = await Products.find({title: { $regex: title, $options: "i" }, brand: { $regex: brand, $options: "i"}})
      .where("category")
      .in([...category])
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);

    const total = await Products.countDocuments({
      title: { $regex: title, $options: "i" },
      category: { $in: [...category] }
    })

    const result = {
      total,
      page: page + 1,
      limit,
      categories,
      products
    };

    res.status(200).json(result);
	} catch(err){
		res.status(500).json({message: err.message})
	}
};