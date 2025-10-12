const nodemailer = require('nodemailer');
const FeedBack = require('../Models/FeedBackModel');

const transporter = nodemailer.createTransport({
    host: "x14.x10hosting.com",
    port:  465, 
    secure: true,
  auth: {
    user: 'feedback@phucprofile.x10.network',
    pass: 'Phucle@1806',
  },
});
class FeedbackController{
    async fetchData(req, res) {  
        const Data = await FeedBack.Feedback(); 
        if(!Data) {
            return res.status(200).json({ success: false ,message: 'không có dữ liệu' });
        }
        return res.status(200).json({ success: true ,message: Data });   
}
/////////////////////////////////////////
    async sendData(req, res) {
        try{
            const {name, email, avata, content, rating, position}= req.body;
            transporter.verify((error, success) => {
            if (error) {
                console.log("Lỗi kết nối SMTP:", error);
            } else {
                console.log("SMTP server sẵn sàng gửi mail");
            }
            });
            const validate= await FeedBack.sendFeedback(name, email, avata,content, rating, position)
            if(validate) {
                const info= await transporter.sendMail({
                from: 'feedback@phucprofile.x10.network',
                replyTo: 'feedback@phucprofile.x10.network',
                to: email,
                subject: 'Cảm ơn bạn đã góp ý',
                html: `
                <div style="font-family: Arial, sans-serif; color: #222; line-height: 1.6; background-color: #f9f9f9; padding: 20px;">
                    <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; padding: 20px;">
                        <h2 style="color: #4CAF50;">Cảm ơn bạn đã góp ý!</h2>
                        <p>Chào <strong>Phuc</strong>,</p>
                        <p>
                            Cảm ơn bạn rất nhiều vì đã dành thời gian chia sẻ cảm nhận với mình.
                        </p>
                        <p>
                            <em>Trang web này là dự án cá nhân đầu tay của mình nên không tránh khỏi thiếu sót, nên mỗi góp ý từ bạn đều là động lực cực kỳ quý giá để mình hoàn thiện hơn.</em>
                        </p>
                        <p>
                            Chúc bạn một ngày thật vui vẻ, tràn đầy năng lượng tích cực 
                        </p>
                        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                        <p style="font-size: 12px; color: #888;">— Hoàng Phúc</p>
                    </div>
                </div>
                `,
                envelope: {
                    from: "feedback@phucprofile.x10.network",
                    to: email
                },
                headers: {
                    "X-Mailer":"Nodemailer",
                    "X-priority": "3( Normal)"
                }
                });
                console.log("Email sent:", info.response); 
            }      
        return res.status(200).json({ success: true ,message: 'gửi thành công' });

        }catch(error) {
           return res.status(500).json({success: false ,message: 'lỗi server! hãy thử lại sau'})
        }
    }
    //////////////////////////////////////
    async contact(req,res) {
        try {
            const {name, email, content}= req.body;

            await transporter.sendMail({
                from:"feedback@phucprofile.x10.network",
                to:"hoangphuckaito1806@gmail.com",
                subject: `Liên hệ mới từ ${name}`,
                html:`
                <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2>📬 Thông tin liên hệ mới</h2>
                <p><strong>Tên:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Lời nhắn:</strong></p>
                <p style="background:#f3f3f3; padding:10px; border-radius:5px;">${content}</p>
                <hr/>
                <p style="font-size:12px; color:#777;">Gửi từ form liên hệ trên website của bạn.</p>
                </div>
                `
            })
            return res.status(200).json({ success: true ,message: 'gửi thành công' });

        }catch(error) {
            return res.status(500).json({success: false, message:" Lỗi server! quay lại sau" })
        }
    }
}
module.exports = new FeedbackController()