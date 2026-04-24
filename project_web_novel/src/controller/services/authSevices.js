import { DataUser } from '../../model/mockData/DataUser'; 

const registerUser = (userData) => {
    const newUser = {
        id: DataUser.length + 1, 
        userName: userData.userName,
        name: userData.name || userData.userName,
        password: userData.password || "social_auth_no_password",
        email: userData.email,
        role: "member",
        avatar: userData.avatar || "https://via.placeholder.com/150",
        bio: "Thành viên mới của Hiên Nhà Của Sò",
        readingHistory: [],
        bookmarks: [],
        createdAt: new Date().toLocaleDateString('vi-VN'),
    };
    DataUser.push(newUser);
    return newUser;
};

// Tạo đối tượng chứa các hàm
const authSevices = {
    handleRegister: (formData) => {
        return registerUser(formData);
    },
    handleSocialLogin: (platform) => {
        const socialData = {
            userName: `${platform.toLowerCase()}_${Math.floor(Math.random() * 10000)}`,
            name: `${platform} User`,
            email: `${platform.toLowerCase()}@social.com`,
        };
        return registerUser(socialData);
    }
};

// Export duy nhất đối tượng này
export default authSevices;