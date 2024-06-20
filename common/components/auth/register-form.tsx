"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";

import { toast } from "sonner";

import { LoaderCircle } from "lucide-react";

import * as z from "zod";

import { RegisterSchema } from "@/schemas";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import CardWrapper from "@/common/components/auth/card-wrapper";

const RegisterForm = () => {
  const [isPending, setIsPending] = useState<boolean>(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    setIsPending(true);

    const response = await axios.post("/api/users/register", values);

    setIsPending(false);

    // if (response.data.status === 200) {
    //   router.push("/login");
    // }

    if (response.data.status === 400) {
      toast.error(response.data.message);
    }
    console.log(response);
  };

  return (
    <CardWrapper
      headerLabel="Silahkan daftar akun Anda disini"
      backButtonLabel="Sudah punya akun?"
      backButtonHref="/login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Lengkap</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Toni Saptoni"
                      disabled={isPending}
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alamat Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="tonisaptoni@gmail.com"
                      disabled={isPending}
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kata Sandi</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="******"
                      disabled={isPending}
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={isPending} type="submit" className="w-full">
            {isPending ? (
              <LoaderCircle className="h-4 w-4 animate-spin text-white" />
            ) : (
              "Daftar"
            )}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default RegisterForm;
