export interface Product {
    title: string;           // ✅ Tên sản phẩm
    price: string;           // ✅ Giá hiện tại
    oldPrice?: string;       // ✅ Giá gạch bỏ (nếu có)
    author: string;          // ✅ Tên người tạo
    img: string;             // ✅ Đường dẫn ảnh sản phẩm
    category: string;        // ✅ Danh mục sản phẩm
    description?: string;    // ✅ Mô tả chi tiết
    downloads?: number;      // ✅ Số lượt tải
    rating?: number;         // ✅ Đánh giá (sao)
    updated?: string;        // ✅ Ngày cập nhật
    published?: string;      // ✅ Ngày phát hành
    tags?: string[];         // ✅ Các thẻ liên quan
}