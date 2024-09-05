"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Menu() {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState("Trang chủ");

  const handleLogout = () => {
    Swal.fire({
      title: "Bạn có muốn đăng xuất không?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Có",
      denyButtonText: `Không`,
    }).then((result: any) => {
      if (result.isConfirmed) {
        Swal.fire("Đăng xuất thành công", "", "success");
        setTimeout(() => {
          router.push("/admin/loginAdmin");
        }, 1500);
      } else if (result.isDenied) {
        Swal.fire("Không có gì thay đổi", "", "info");
      }
    });
  };

  const handleMenuClick = (item: string) => {
    setActiveItem(item); // Cập nhật mục active
  };

  return (
    <div className="menu">
      <div className="sidebar-brand">
        <h2>
          <i className="fa-solid fa-hat-cowboy-side"></i> AccuSoft
        </h2>
      </div>

      <div className="sidebar-menu">
        <ul>
          <li>
            <a
              href="#"
              className={activeItem === "Trang chủ" ? "active" : ""}
              onClick={() => handleMenuClick("Trang chủ")}
            >
              <i className="fa-solid fa-house"></i> <span>Trang chủ</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeItem === "Quản lí tài khoản" ? "active" : ""}
              onClick={() => handleMenuClick("Quản lí tài khoản")}
            >
              <i className="fa-solid fa-user-large"></i>{" "}
              <span>Quản lí tài khoản</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeItem === "Quản lí danh mục" ? "active" : ""}
              onClick={() => handleMenuClick("Quản lí danh mục")}
            >
              <i className="fa-solid fa-layer-group"></i>{" "}
              <span>Quản lí danh mục</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeItem === "Quản lí sản phẩm" ? "active" : ""}
              onClick={() => handleMenuClick("Quản lí sản phẩm")}
            >
              <i className="fa-brands fa-product-hunt"></i>{" "}
              <span>Quản lí sản phẩm</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeItem === "Quản lí đơn hàng" ? "active" : ""}
              onClick={() => handleMenuClick("Quản lí đơn hàng")}
            >
              <i className="fa-solid fa-house"></i>{" "}
              <span>Quản lí đơn hàng</span>
            </a>
          </li>
          <li className="logout">
            <a href="#" onClick={handleLogout}>
              <i className="fa-solid fa-right-from-bracket"></i>{" "}
              <span>Đăng xuất</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
