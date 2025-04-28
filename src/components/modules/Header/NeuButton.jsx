// NeuButton.jsx
//  استایل نومورفیسم برای دکمه ها
import { Button } from "antd";

const NeuButton = ({ icon, onClick, tooltip, inputProps, ...rest }) => (
  <Button
    shape="circle"
    icon={icon}
    onClick={onClick}
    className="!w-[50px] !h-[50px] !p-0 text-xl font-bold
    neumorphic
    border-none
    rounded-[50%] dark:text-or "

    title={tooltip}
  />
);

export default NeuButton;
