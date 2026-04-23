import React from 'react';
import hinh1 from '../../view/assets/hinh1.jpg';
import hinh2 from '../../view/assets/hinh2.jpg';
import hinh3 from '../../view/assets/hinh3.jpg';
import hinh4 from '../../view/assets/hinh4.jpg';
import hinh5 from '../../view/assets/hinh5.jpg';
import hinh6 from '../../view/assets/hinh6.jpg';
import hinh7 from '../../view/assets/hinh7.jpg';
import hinh8 from '../../view/assets/hinh8.jpg';
import hinh9 from '../../view/assets/hinh9.jpg';

export const DataUser = [
    {
        id: 1,
        userName: "sury2405",
        name: "Sury",
        password: "123456",
        email: 'sury@gmail.com',
        role: "admin",
        avatar: hinh2,
        bio: "Người yêu thích những câu truyện lãng mạn",
        readingHistory: [101, 105, 110],
        bookmarks: [101, 202],
        createdAt: "22-04-2026",
    },
     {
        id: 2,
        userName: "ngoc2305",
        name: "Ngọc",
        password: "123456",
        email: 'sury@gmail.com',
        role: "member",
        avatar: hinh5,
        bio: "Người yêu thích những câu truyện lãng mạn",
        readingHistory: [101, 105, 110],
        bookmarks: [101, 202],
        createdAt: "22-04-2026",
    },
     {
        id: 3,
        userName: "Uyên1401",
        name: "Uyên",
        password: "123456",
        email: 'uyen@gmail.com',
        role: "author",
        avatar: hinh7,
        bio: "Người yêu thích những câu truyện lãng mạn",
        readingHistory: [101, 105, 110],
        bookmarks: [101, 202],
        createdAt: "22-04-2026",
    }
]