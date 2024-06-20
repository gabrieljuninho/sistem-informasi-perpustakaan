import { FC } from "react";

import { Toaster } from "sonner";

import { ILayoutProps } from "@/common/types";

const Layouts: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <Toaster position="bottom-right" richColors />
    </>
  );
};

export default Layouts;
