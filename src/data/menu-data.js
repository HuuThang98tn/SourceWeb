import home_1 from '@assets/img/menu/menu-home-1.jpg';
import home_2 from '@assets/img/menu/menu-home-2.jpg';
import home_3 from '@assets/img/menu/menu-home-3.jpg';
import home_4 from '@assets/img/menu/menu-home-4.jpg';

const menu_data = [
  {
    id: 1,
    homes: true,
    title: 'Trang chủ',
    link: '/',
    home_pages: [
      {
        img: home_1,
        title: 'Electronics',
        link: '/'
      },
      {
        img: home_2,
        title: 'Fashion',
        link: '/home-2'
      },
      {
        img: home_3,
        title: 'Beauty',
        link: '/home-3'
      },
      {
        img: home_4,
        title: 'Jewelry',
        link: '/home-4'
      }
    ]
  },
  {
    id: 2,
    products: true,
    title: 'Sản phẩm',
    link: '/shop',
    product_pages: [
      {
        title: 'Danh mục',
        link: '/shop',
        mega_menus: [
          { title: 'Danh mục', link: '/shop-category' },
          { title: 'Lọc sản phẩm', link: '/shop' },
          { title: 'Chi tiết sản phẩm', link: '/product-details' },
        ]
      },
      {
        title: 'Sản phẩm',
        link: '/product-details',
        mega_menus: [
          { title: 'Sản phẩm đơn lẻ', link: '/product-details' },
          { title: 'Sản phẩm có video ', link: '/product-details-video' },
          { title: 'Sản phẩm giảm giá', link: '/product-details-countdown' },
          { title: 'Sản phẩm lựa chọn', link: '/product-details-swatches' },
        ]
      },
      {
        title: 'Thương mại điện tử',
        link: '/shop',
        mega_menus: [
          { title: 'Giỏ hàng', link: '/cart' },
          { title: 'So sánh', link: '/compare' },
          { title: 'Danh sách yêu thích', link: '/wishlist' },
          { title: 'Thanh toán', link: '/checkout' },
          { title: 'Thông tin tài khoản', link: '/profile' },
        ]
      },
      {
        title: 'Trang thêm',
        link: '/shop',
        mega_menus: [
          { title: 'Đăng nhập', link: '/login' },
          { title: 'Đăng ký', link: '/register' },
          { title: 'Quên mật khẩu', link: '/forgot' },
          { title: '404 Lỗi', link: '/404' },
        ]
      },
    ]
  },
  // {
  //   id: 3,
  //   sub_menu: true,
  //   title: 'Cửa Hàng',
  //   link: '/shop',
  //   sub_menus: [
  //     { title: 'Cửa Hàng', link: '/shop' },
  //     { title: 'Danh mục lọc bên phải', link: '/shop-right-sidebar' },
  //     { title: 'Ẩn danh mục lọc', link: '/shop-hidden-sidebar' },
  //   ],
  // },
  {
    id: 4,
    single_link: true,
    title: 'Ưu Đãi',
    link: '/coupon',
  },
  {
    id: 5,
    sub_menu: true,
    title: 'Blogs',
    link: '/blog',
    sub_menus: [
      { title: 'Blog Tiêu chuẩn', link: '/blog' },
      { title: 'Blog dạng lưới', link: '/blog-grid' },
      { title: 'Danh sách Blog', link: '/blog-list' },
      { title: 'Chi tiết Blogs', link: '/blog-details' },
      { title: 'Chi tiết toàn màn hình', link: '/blog-details-2' },
    ]
  },
  {
    id: 6,
    single_link: true,
    title: 'Liên Hệ',
    link: '/contact',
  },
]

export default menu_data;

// mobile_menu
export const mobile_menu = [
  {
    id: 1,
    homes: true,
    title: 'Home',
    link: '/',
    home_pages: [
      {
        img: home_1,
        title: 'Electronics',
        link: '/'
      },
      {
        img: home_2,
        title: 'Fashion',
        link: '/home-2'
      },
      {
        img: home_3,
        title: 'Beauty',
        link: '/home-3'
      },
      {
        img: home_4,
        title: 'Jewelry',
        link: '/home-4'
      }
    ]
  },
  {
    id: 2,
    sub_menu: true,
    title: 'Products',
    link: '/shop',
    sub_menus: [
      { title: 'Shop', link: '/shop' },
      { title: 'Right Sidebar', link: '/shop-right-sidebar' },
      { title: 'Hidden Sidebar', link: '/shop-hidden-sidebar' },
      { title: 'Danh mục', link: '/shop-category' },
      { title: 'Product Simple', link: '/product-details' },
      { title: 'With Video', link: '/product-details-video' },
      { title: 'With Countdown Timer', link: '/product-details-countdown' },
      { title: 'Variations Swatches', link: '/product-details-swatches' },
    ],
  },
  {
    id: 3,
    sub_menu: true,
    title: 'eCommerce',
    link: '/cart',
    sub_menus: [
      { title: 'Giỏ hàng', link: '/cart' },
      { title: 'Compare', link: '/compare' },
      { title: 'Wishlist', link: '/wishlist' },
      { title: 'Thanh toán', link: '/checkout' },
      { title: 'My account', link: '/profile' },
    ],
  },
  {
    id: 4,
    sub_menu: true,
    title: 'More Pages',
    link: '/login',
    sub_menus: [
      { title: 'Login', link: '/login' },
      { title: 'Register', link: '/register' },
      { title: 'Forgot Password', link: '/forgot' },
      { title: '404 Error', link: '/404' },
    ],
  },
  {
    id: 4,
    single_link: true,
    title: 'Coupons',
    link: '/coupon',
  },
  {
    id: 5,
    sub_menu: true,
    title: 'Blog',
    link: '/blog',
    sub_menus: [
      { title: 'Blog Standard', link: '/blog' },
      { title: 'Blog Grid', link: '/blog-grid' },
      { title: 'Blog List', link: '/blog-list' },
      { title: 'Blog Details', link: '/blog-details' },
      { title: 'Blog Details Full Width', link: '/blog-details-2' },
    ]
  },
  {
    id: 6,
    single_link: true,
    title: 'Contact',
    link: '/contact',
  },
]