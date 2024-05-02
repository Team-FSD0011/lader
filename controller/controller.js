const userDB = require("../Model/model");
const nodemailer = require("nodemailer");

const userDataCreate = async (req, res) => {
  try {
    const { name,
        email,
        phone,
        message } = req.body;//{name} destructure
    const newUser = new userDB({
      name,
      email,
      phone,
      message,
      
    });
    await send(email);
    res.json({
      data: newUser,
      message:"mail sent"
      
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};
// await userDB.save();
const send = async (email) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "bmadhubalu08@gmail.com",
        pass: "gnwh bcvu mufc wdgx",
      },
    });
    const mailOption = {
      from: "bmadhubalu08@gmail.com",
      to: email,
      subject: "welcome",
      text:"Thank you for contacting us,We will get back you soon"
      
    };
    await transporter.sendMail(mailOption);
    console.log("mail sent sucessfully");
  } catch (error) {
    console.log("mail not received", error.message);
  }
};

module.exports = userDataCreate;
