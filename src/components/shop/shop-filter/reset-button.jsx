import { useRouter } from "next/router";
import React from "react";

const ResetButton = ({ shop_right = false }) => {
  const router = useRouter();
  return (
    <div className="tp-shop-widget mb-50">
      <h3 className="tp-shop-widget-title">Đặt lại</h3>
      <button
        onClick={() =>
          router.push(`/${shop_right ? "shop-right-sidebar" : "shop"}`)
        }
        className="tp-btn"
      >
        Đặt lại
      </button>
    </div>
  );
};

export default ResetButton;
