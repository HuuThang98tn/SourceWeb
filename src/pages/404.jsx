import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import SEO from "@/components/seo";
import HeaderTwo from "@/layout/headers/header-2";
import Footer from "@/layout/footers/footer";
import Wrapper from "@/layout/wrapper";
import error from '@assets/img/error/error.png';

const ErrorPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="404" />
      <HeaderTwo style_2={true} />
      {/* 404 area start */}
      <section className="tp-error-area pt-110 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="tp-error-content text-center">
                <div className="tp-error-thumb">
                  <Image src={error} alt="error img" />
                </div>

                <h3 className="tp-error-title">Oops! Không tìm thấy trang</h3>
                <p>Rất tiếc, điều này thật đáng xấu hổ. Có vẻ như trang bạn đang tìm kiếm không được tìm thấy.</p>

                <Link href="/" className="tp-error-btn">
                  Trở lại trang chủ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 404 area end */}
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default ErrorPage;
