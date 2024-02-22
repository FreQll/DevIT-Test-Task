const getRequests = async (req, res) => {
  try {
    res.send({ message: "Requests" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { getRequests };
