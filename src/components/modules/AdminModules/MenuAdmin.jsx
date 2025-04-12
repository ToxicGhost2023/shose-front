"use client"

import { useState } from 'react';
import {
    DeleteOutlined,
    EditOutlined,
    FileTextOutlined,
    FolderAddOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
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
        icon: <DeleteOutlined />,
        label: <Link href="/panelAdmin/delete">حذف محصول</Link>,
    },
    {
        key: '3',
        icon: <EditOutlined />,
        label: <Link href="/panelAdmin/edit">ویرایش محصول</Link>,
    },
    {
        key: 'sub1',
        label: 'مدیریت',
        icon: <UserSwitchOutlined />,
        children: [
            { key: '5', label: <Link href="/panelAdmin/option5">Option 5</Link> },
            { key: '6', label: <Link href="/panelAdmin/option6">Option 6</Link> },
            { key: '7', label: <Link href="/panelAdmin/option7">Option 7</Link> },
            { key: '8', label: <Link href="/panelAdmin/option8">Option 8</Link> },
        ],
    },
    {
        key: 'sub2',
        label: 'وبلاگ',
        icon: <FileTextOutlined />,
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
