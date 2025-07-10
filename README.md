
# Dự án Ví Solyx - Bản Hoàn Chỉnh

## 📁 Cấu trúc thư mục chuẩn:

```
SolyxWallet/
├── public/
│   └── favicon.png
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── components/
│   │   ├── WalletCard.jsx
│   │   ├── ActionButtons.jsx
│   │   ├── TokenList.jsx
│   │   ├── StockList.jsx
│   │   ├── SwapInterface.jsx      👈 NEW: giao diện swap 2 chiều
│   │   ├── TokenSearch.jsx        👈 NEW: tìm kiếm token
│   │   ├── TokenAddCustom.jsx     👈 NEW: thêm token mới
│   │   └── EarningsLog.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Tokens.jsx
│   │   └── Stocks.jsx
│   ├── utils/
│   │   ├── solanaConnection.js
│   │   ├── walletManager.js       👈 NEW: tạo/lưu ví người dùng (client only)
│   │   ├── jupiterSwap.js
│   │   ├── logger.js
│   │   └── xStockList.js          👈 NEW: danh sách xStock phổ biến
├── .env
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 🎯 Tính năng chính:

| Tính năng                           | Trạng thái       | Ghi chú                   |
|-------------------------------------|------------------|---------------------------|
| ✅ Swap thực tế Jupiter API         | Đã hoàn tất      | Kết nối mainnet           |
| ✅ Phí 0.25% chuyển về ví bạn       | Đã tích hợp     | Ghi log nội bộ            |
| ✅ Giao diện swap hai chiều         | Đang hoàn thiện | Có chọn token mua/bán     |
| ✅ Danh sách token/xStock           | Hoàn thiện phần lớn | Tìm kiếm + lọc         |
| ✅ Tạo ví Solana mới                | ✔️ Client-side   | Không lưu trên server     |
| ✅ Không lưu dữ liệu người dùng     | ✔️ Full phi tập trung | Không backend         |
| ✅ Giao diện đẹp như hình           | Đang hoàn thiện | Theo mẫu Solflare         |
| ❌ Hiển thị Earnings cho người dùng | Bỏ qua           | Chỉ log nội bộ            |

## 📋 Các bước để chạy dự án:

1. Clone repository này về máy của bạn:
   ```bash
   git clone <repository-url>
   cd SolyxWallet
   ```

2. Cài đặt các dependencies:
   ```bash
   npm install
   ```

3. Tạo file `.env` từ mẫu `.env.example` và điền thông tin cần thiết.

4. Chạy dự án:
   ```bash
   npm run dev
   ```

Dự án sẽ chạy trên [http://localhost:3000](http://localhost:3000) nếu bạn sử dụng cài đặt mặc định.

## ⚙️ Các tính năng sắp tới:

- Tính năng thêm token Solana tự động
- Tích hợp thanh toán fiat qua thẻ tín dụng
- Tăng cường tính bảo mật ví người dùng

## 📝 Ghi chú:

- Dự án này hoàn toàn phi tập trung và không lưu trữ dữ liệu của người dùng trên server.
- Mọi giao dịch và tương tác với ví đều được thực hiện trực tiếp trên client.
