import React from 'react';
import { Input, QRCode, Space } from 'antd';

const QR = () => {
    const [text, setText] = React.useState('https://github.com/ToxicGhost2023');

    return (
        <div className=" flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
            <Space direction="vertical" align="center" className="w-full max-w-md">
                <QRCode
                    value={text || '-'}
                    size={300} // اندازه بزرگ‌تر QR کد
                    className="mx-auto"
                />

            </Space>
        </div>
    );
};

export default QR;