- File **index.js**  trong thư mục `routes` đóng vai trò là **router tổng**.  
  Nó gom tất cả các **route groups** (ví dụ: `/auth`, `/menu`, `/cart`, …) lại với nhau.  

- Các file khác trong thư mục `routes` (như `auth.js`, `menu.js`, `cart.js`, …) sẽ định nghĩa **các endpoint cụ thể** cho từng nhóm.  
  Ví dụ:
  - `auth.js` chứa các endpoint liên quan đến đăng nhập, đăng ký, đăng xuất (`/auth/login`, `/auth/register`, …).  
  - `menu.js` chứa các endpoint liên quan đến danh sách món ăn (`/menu`, `/menu/:id`).  
  - `cart.js` chứa các endpoint liên quan đến giỏ hàng (`/cart/add`, `/cart/remove`, …).
