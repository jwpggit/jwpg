const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.kakao.com',
  port: 465,
  secure: true,
  auth: {
    user: 'jwpg', // Replace with your Kakao Mail email
    pass: 'ilcjacugxypjlayl' // Replace with your Kakao Mail password
  }
});

exports.create = async (req, res, next) => {
    console.log ('req.body', req.body)
   try {
    const { name, contact, question, shop_selected, web_selected, app_selected, logo_selected, ad_selected, detail_selected } = req.body;
    console.log('Received request to send email', req.body);
    console.log('Received request to send email');
    console.log('Name:', name);
    console.log('Contact:', contact);

    // Create email message
    const mailOptions = {
      from: 'jwpg@kakao.com', // Replace with your Kakao Mail email
      to: 'jwpg@kakao.com', // Replace with the recipient's email
      subject: 'New Contact',
      text: `
      회사명 (또는 작성자 이름): ${name}\n
      연락처 (또는 이메일 주소): ${contact}\n
      추가 문의사항: ${question}\n
      쇼핑몰 요금제: ${shop_selected}\n
      웹사이트 요금제: ${web_selected}\n
      앱 요금제: ${app_selected}\n
      로고 요금제: ${logo_selected}\n
      광고 요금제: ${ad_selected}\n
      상세페이지 요금제: ${detail_selected}\n
      `
    };

    console.log('Sending email:', mailOptions);

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log('제출완료');

    res.status(200).json({ message: '제출완료' });
  } catch (error) {
    console.error('Error occurred while sending email:', error);
    next(error);
  }
}

