import React from 'react';

const Header = () => {
  return (
    <header className="w-full shadow-md sticky top-0 z-50 bg-white">
      {/* Header 1: Top Bar */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-400 italic">Hiên Nhà Của Sò</div>
        
        <div className="flex-1 mx-10">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Tìm truyện..." 
              className="w-full border rounded-full px-4 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="absolute right-3 top-2 text-gray-400">🔍</button>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="bg-pink-400 text-white px-4 py-1 rounded-md text-sm hover:bg-pink-500">Đăng nhập</button>
          <button className="bg-purple-500 text-white px-4 py-1 rounded-md text-sm hover:bg-purple-600">Đăng ký</button>
        </div>
      </div>

      {/* Header 2: Navigation */}
      <nav className="bg-gray-50 border-t border-b">
        <div className="container mx-auto px-4 flex space-x-8 py-2 font-medium text-gray-700">
          <button className="hover:text-blue-500">Trang chủ</button>
          <button className="hover:text-blue-500">Truyện mới</button>
          <button className="hover:text-blue-500">Truyện full</button>
          {/* Menu phân cấp Thể loại */}
          <div className="relative group">
            <button className="hover:text-blue-500 flex items-center">
              Thể loại <span className="ml-1 text-[10px]">▼</span>
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg border mt-1 w-40 rounded py-2">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Ngôn tình</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Hành động</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Kiếm hiệp</a>
            </div>
          </div>
          <button className="hover:text-blue-500">Bảng xếp hạng</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;