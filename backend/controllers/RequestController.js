const getRequests = async (req, res) => {
  const { index } = req.query;

  if (!index) {
    return res.status(400).send({ message: "Invalid index" });
  }

  const randomDelay = Math.floor(Math.random() * 1000) + 1;

  setTimeout(() => {
    return res.status(200).send({ index });
  }, randomDelay);
};

module.exports = { getRequests };
