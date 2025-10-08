const UserModel = require('../Models/AuthModel');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

class AuthController {

  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: 'Vui lòng nhập đầy đủ email và mật khẩu' });
      }

      const userData = await UserModel.findByEmail(email);

      if (!userData) {
        return res.status(400).json({ message: 'Email không tồn tại' });
      }

      if (!userData.isVerified) {
        return res.status(400).json({ message: 'Tài khoản chưa xác thực' });
      }

      const isMatch = await bcrypt.compare(password, userData.secretPass);
      if (!isMatch) {
        return res.status(400).json({ message: 'Sai mật khẩu' });
      }

      req.session.user = { email: userData.email, uid: userData.userId };

      return res.status(200).json({
        message: 'Đăng nhập thành công',
        user: req.session.user
      });

    } catch (error) {
      console.error('Lỗi server:', error);
      return res.status(500).json({ message: 'Lỗi server' });
    }
  }
}
module.exports = new AuthController();
