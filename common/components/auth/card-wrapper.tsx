"use client";

import { FC } from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import Header from "@/common/components/auth/header";
import BackButton from "@/common/components/auth/back-button";

import { ICardWrapperProps } from "@/common/types/components";

const CardWrapper: FC<ICardWrapperProps> = ({ children, headerLabel }) => {
  return (
    <div className="h-screen w-screen">
      <div className="flex h-full items-center justify-center">
        <Card className="w-[400px]">
          <CardHeader>
            <Header label={headerLabel} />
          </CardHeader>
          <CardContent>{children}</CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CardWrapper;
