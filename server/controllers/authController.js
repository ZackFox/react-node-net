const authController = {};

authController.signUp = (req, res) => {
  console.log(req.body);
  res.status(200).json({ success: true, message: '200' });
};

export default authController;
