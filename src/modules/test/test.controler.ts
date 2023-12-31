const testControler = async (req, res) => {
  res.status(200).json({
    success: true,
    message: ' job safari server is running.',
  });
};

export const testRouter = testControler;
