import Users from '../models/user.model';
import Employees from '../models/employee.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const signUp = async (req, res) => {
       try {
              const checkEmail = await Users.findOne({ email: req.body.email }).exec();
              if(checkEmail) {
                     return res.status(200).json({
                            message: 'Email đã tồn tại!!!'
                     })
              }

              const salt = await bcrypt.genSalt(10);
              const hashed = await bcrypt.hash(req.body.password, salt);
              const newUser = await new Users({
                     name: req.body.name,
                     email: req.body.email,
                     password: hashed
              }).save();

              return res.status(200).json({
                     message: "Đăng kí tài khoản thành công!!!"
              })
       } catch (error) {
              return res.status(400).json({
                     message: "Đăng kí không thành công!!!"
              })
       }
}

const singIn = async (req, res) => {
       try {
              if(req.body.user == 'admin') {
                     const user = await Users.findOne({email: req.body.email});
                     if(!user) {
                            return res.status(404).json({
                                   message: "Email khẩu không đúng",
                            })
                     }
                     const checkPassword = await bcrypt.compare(
                            req.body.password,
                            user.password
                     )
                     if(!checkPassword) {
                            return res.status(404).json({
                                   message: "Mật khẩu không đúng"
                            })
                     }
                     if(user && checkPassword) {
                            const token = jwt.sign({_id: user._id}, 'khanhnb');
                            return res.status(200).json({
                                   id: user._id,
                                   accessToken: token,
                                   user: user.name,
                                   email: user.email,
                                   author: 'admin'
                            })
                     }
              } else {
                     const user = await Employees.findOne({email: req.body.email});
                     if(!user) {
                            return res.status(404).json({
                                   message: "Email khẩu không đúng",
                            })
                     }
                     const checkPassword = await bcrypt.compare(
                            req.body.password,
                            user.password
                     )
                     if(!checkPassword) {
                            return res.status(404).json({
                                   message: "Mật khẩu không đúng"
                            })
                     }
                     if(user && checkPassword) {
                            const token = jwt.sign({_id: user._id}, 'khanhnb');
                            return res.status(200).json({
                                   id: user._id,
                                   accessToken: token,
                                   user: user.name,
                                   email: user.email,
                                   author: 'employee'
                            })
                     }
              }

       } catch (error) {
              return res.status(400).json({
                     message: 'Lỗi đăng nhập'
              })
       }
}

export { signUp,singIn }
