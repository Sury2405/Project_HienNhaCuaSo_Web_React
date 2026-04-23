// 1. Import đúng tên DataUser (không có s) từ file Model của bạn
import { DataUser } from '../../model/mockData/DataUser'; 


const authSevices = () => {
    // Hàm xử lý đăng ký chung (Dùng cho cả form và social)
    const registerUser = (userData) => {
        // 2. Sử dụng DataUser để tính toán
        const newUser = {
            id: DataUser.length + 1, 
            userName: userData.userName,
            name: userData.name || userData.userName,
            password: userData.password || "social_auth_no_password",
            email: userData.email,
            role: "member", // Mặc định mọi tài khoản mới là member
            avatar: userData.avatar || "https://via.placeholder.com/150",
            bio: "Thành viên mới của Hiên Nhà Của Sò",
            readingHistory: [],
            bookmarks: [],
            createdAt: new Date().toLocaleDateString('vi-VN'),
        };

        // 3. Đẩy dữ liệu vào mảng DataUser
        DataUser.push(newUser);
        
        console.log("Dữ liệu User hiện tại sau khi thêm:", DataUser);
        return newUser;
    };

    // Control cho Đăng ký từ Form
    export const handleRegister = (formData) => {
        return registerUser(formData);
    };

    // Control cho Social Login (Google/Facebook)
    export const handleSocialLogin = (platform) => {
        const socialData = {
            userName: `${platform.toLowerCase()}_${Math.floor(Math.random() * 10000)}`,
            name: `${platform} User`,
            email: `${platform.toLowerCase()}@social.com`,
        };
        return registerUser(socialData);
    };
};
export default authSevices;