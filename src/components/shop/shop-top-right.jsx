import React from "react";
import { useDispatch } from "react-redux";
// internal
import { Filter } from "@/svg";
import NiceSelect from "@/ui/nice-select";
import {handleFilterSidebarOpen } from "@/redux/features/shop-filter-slice";

const ShopTopRight = ({selectHandleFilter}) => {
  const dispatch = useDispatch()
  return (
    <div className="tp-shop-top-right d-sm-flex align-items-center justify-content-xl-end">
      <div className="tp-shop-top-select">
        <NiceSelect
          options={[
            { value: "Sắp xếp mặc định", text: "Sắp xếp mặc định" },
            { value: "Từ thấp đến cao", text: "Từ thấp đến cao" },
            { value: "Từ cao đến thấp", text: "Từ cao đến thấp" },
            { value: "Mới thêm", text: "Mới thêm" },
            { value: "Trên sàn", text: "Trên sàn" },
          ]}
          defaultCurrent={0}
          onChange={selectHandleFilter}
          name="Sắp xếp mặc định"
        />
      </div>
      <div className="tp-shop-top-filter">
        <button onClick={()=> dispatch(handleFilterSidebarOpen())} type="button" className="tp-filter-btn">
          <span>
            <Filter />
          </span>
          {" "}Lọc
        </button>
      </div>
    </div>
  );
};

export default ShopTopRight;
