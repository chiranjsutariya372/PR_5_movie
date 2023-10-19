const movieDetailes = async (req, res, next) => {
  const {
    title,
    description,
    releaseDate,
    category,
    actors,
    image,
    ratings,
    comments,
    addedBy,
  } = req.body;
  if (
    !title ||
    !description ||
    !releaseDate ||
    !category ||
    !actors ||
    !image ||
    !ratings ||
    !comments ||
    !addedBy
  ) {
    res.status(400).send({ error: "all fields are required" });
  }
  else{
      next();
  }
};

module.exports = movieDetailes;
