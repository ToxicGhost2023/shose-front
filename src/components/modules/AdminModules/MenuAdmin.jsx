"use client"

import { useState } from 'react';
import {
    DeleteOutlined,
    EditOutlined,
    FileTextOutlined,
    FolderAddOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PayCircleOutlined,
    ProductOutlined,
    UserSwitchOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import Link from 'next/link';

const items = [
    {
        key: '1',
        icon: <FolderAddOutlined />,
        label: <Link href="/panelAdmin/create">ثبت محصول</Link>,
    },
    {
        key: '2',
        icon: <ProductOutlined />,
        label: <Link href="/panelAdmin/productsList">لیست محصولات من</Link>
    },

    {
        key: '3',
        icon: <PayCircleOutlined />,
        label: <Link href="/panelAdmin/Discount"> جشواره تخفیف ها</Link>,
    },
    {
        key: 'sub1',
        label: 'مدیریت',
        icon: <UserSwitchOutlined />,
        children: [
            { key: '5', label: "ssss" }
        ],
    },
    {
        key: 'sub2',
        label: 'وبلاگ',
        icon: <UserSwitchOutlined />,
        children: [
            { key: '9', label: <Link href="/panelAdmin/blog1">Option 9</Link> },
            { key: '10', label: <Link href="/panelAdmin/blog2">Option 10</Link> },

        ],
    },
];

const MenuAdmin = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div style={{ width: 256 }}>
            <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
            />
        </div>
    );
};

export default MenuAdmin;
