import { FC } from "react";

import { IHeaderProps } from "@/common/types/components";

const Header: FC<IHeaderProps> = ({ label }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold">Selamat datang</h1>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default Header;
