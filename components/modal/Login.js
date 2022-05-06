import { useState, useEffect } from "react";
import Image from 'next/image'
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";


import Facebook from 'assets/icons/modal/login/facebook.png'
import Google from 'assets/icons/modal/login/google.png'
import User from 'assets/icons/modal/login/user.png'
import Password from 'assets/icons/modal/login/password.png'
import eyes from "assets/icons/modal/login/eyes.svg";
import eyesSlash from "assets/icons/modal/login/eyes-slash.svg";
import Logo from "~/assets/icons/footer/logo.svg";

import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";
const Login = () => {
  const showModalLogin = useSelector((state) => state.modal.showModalLogin);
  const handleSocialLogin = (user) => {
    console.log(user);
  };
  const handleSocialLoginFailer = (user) => {
    console.log(user);
  };
  return (
    <Modal
      show={showModalLogin}
      backdrop="static"
      centered
      contentClassName="rounded-1"
      id="modal-login">
      <Modal.Body className="text-center py-5">
        <div>
          <Image src={Logo} width={138} height={42} loading="lazy" alt="" />
        </div>
        <div className="h2 fw-bold">Đăng nhập</div>
        <div>
          Học tập và giao lưu với hàng triệu học viên trên mọi miền đất nước
        </div>
        <div className="form-login mt-3 mx-5 px-5">
          <div className="mb-2">
            <LoginSocialGoogle
              client_id={process.env.NEXT_PUBLIC_GOOGLE_ID || ""}
              onResolve={handleSocialLogin}
              onReject={handleSocialLoginFailer}>
              <button className="bg-transparent border py-2 px-3 rounded-2 w-100 d-flex align-items-center ">
                <Image
                  src={Google}
                  width={24}
                  height={24}
                  alt=""
                  className=""
                />{" "}
                <span className="ms-3 fw-bold">Đăng nhập bằng Google</span>
              </button>
            </LoginSocialGoogle>
          </div>
          <div className="mb-2">
            <LoginSocialFacebook
              client_id={process.env.NEXT_PUBLIC_FACEBOOK_ID || ""}
              onResolve={handleSocialLogin}>
              <button className="bg-primary border py-2 px-3 rounded-2 w-100 d-flex align-items-center text-white">
                <Image
                  src={Facebook}
                  width={24}
                  height={24}
                  alt=""
                  className=""
                />{" "}
                <span className="ms-3 fw-bold">Đăng nhập bằng Facebook</span>
              </button>
            </LoginSocialFacebook>
          </div>
          <div className="my-3 d-flex align-items-center">
            <span className="border-top flex-fill"></span>
            <span className="mx-2">Hoặc</span>
            <span className="border-top flex-fill"></span>
          </div>
          <div>
            <div className="position-relative border mb-3 d-flex align-items-center">
              <span className="flex-shrink-0 d-flex align-items-center p-2 border-end pointer">
                <Image src={User} width={20} height={20} alt="" />
              </span>
              <input
                type="text"
                className="w-100 border-0 px-2 py-2"
                placeholder="Nhập email, số điện thoại"
              />
            </div>
            <div className="position-relative border mb-2 d-flex align-items-center">
              <span className="flex-shrink-0 d-flex align-items-center p-2 border-end pointer">
                <Image
                  src={Password}
                  width={20}
                  height={20}
                  alt=""
                  className=""
                />
              </span>
              <input
                type="text"
                className="w-100 border-0 px-2 py-1"
                placeholder="Nhập mật khẩu"
              />
              <span className="flex-shrink-0 d-flex align-items-center p-2 border-end bg-light pointer">
                <Image src={eyes} width={20} height={20} alt="" className="" />
              </span>
            </div>
            <div className="action">
              <div className="text-primary text-end small pointer">
                Quên mật khẩu
              </div>
              <button className="btn-primary text-white w-100 rounded-4 py-2 mt-3">
                Đăng nhập
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default Login;
