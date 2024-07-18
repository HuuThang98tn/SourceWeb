import React from "react";
import dayjs from "dayjs";
import CopyToClipboard from "react-copy-to-clipboard";
import Image from "next/image";
// internal
import OfferTimer from "./offer-timer";
import { InfoDetails } from "@/svg";

const CouponItem = ({ coupon, handleCopied, copiedCode, copied }) => {
  return (
    <div className="tp-coupon-item mb-30 p-relative d-md-flex justify-content-between align-items-center">
      <span className="tp-coupon-border"></span>
      <div className="tp-coupon-item-left d-sm-flex align-items-center">
        <div className="tp-coupon-thumb">
          <a href="#">
            <Image src={coupon.logo} alt="logo" width={120} height={120} />
          </a>
        </div>
        <div className="tp-coupon-content">
          <h3 className="tp-coupon-title">{coupon.title}</h3>
          <p className="tp-coupon-offer mb-15">
            <span>{coupon.discountPercentage}%</span>Off
          </p>
          <div className="tp-coupon-countdown">
            {dayjs().isAfter(dayjs(coupon.endTime)) ? (
              <div className="tp-coupon-countdown-inner">
                <ul>
                  <li>
                    <span>{0}</span> Ngày
                  </li>
                  <li>
                    <span>{0}</span> Giờ
                  </li>
                  <li>
                    <span>{0}</span> Phút
                  </li>
                  <li>
                    <span>{0}</span> Giây
                  </li>
                </ul>
              </div>
            ) : (
              <OfferTimer expiryTimestamp={new Date(coupon.endTime)} />
            )}
          </div>
        </div>
      </div>
      <div className="tp-coupon-item-right pl-20">
        <div className="tp-coupon-status mb-10 d-flex align-items-center">
          <h4>
            Voucher <span className={dayjs().isAfter(dayjs(coupon.endTime)) ? "in-active" : "active"}>{dayjs().isAfter(dayjs(coupon.endTime)) ? "Hết hạn" : "Còn hạn"}</span>
          </h4>
          <div className="tp-coupon-info-details">
            <span>
              <InfoDetails />
            </span>
            <div className="tp-coupon-info-tooltip transition-3">
              <p>
                *Mã giảm giá này sẽ được áp dụng vào <span>Các loại sản phẩm </span> khi bạn mua sắm nhiều hơn <span>${coupon.minimumAmount}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="tp-coupon-date">
          <CopyToClipboard text={coupon.couponCode} onCopy={() => handleCopied(coupon.couponCode)}>
            <button>{copied && coupon.couponCode === copiedCode ? <span>Copied!</span> : <span>{coupon.couponCode}</span>}</button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default CouponItem;
