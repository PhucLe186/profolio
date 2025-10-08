const { db } = require('../../Config/firebase');

class UserModel {
  static async findByEmail(email) {
    const KhachHang = db.ref('khachhang');
    const snapshot = await KhachHang.orderByChild('email')
      .equalTo(email)
      .once('value');

    if (!snapshot.exists()) {
      return null;
    }

    // Lấy dữ liệu user
    const userData = Object.values(snapshot.val())[0];
    return userData;
  }
}

module.exports = UserModel;
