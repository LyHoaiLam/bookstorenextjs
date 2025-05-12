"use client"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
    username: z
      .string()
      .nonempty({ message: "Username không được bỏ trống."})
      .min(6, { message: "Username phải có ít nhất 6 ký tự."})
    ,
    password: z
      .string()
      .nonempty({ message: "Password không được bỏ trống."})
      .min(10, { message: "Username phải có ít nhất 10 ký tự."})
    ,
    confirmPassword: z
      .string()
      .nonempty({ message: "Password không được bỏ trống."})
      .min(10, { message: "Username phải có ít nhất 10 ký tự."})
  })
  
export default function RegisterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })
  const { toast } = useToast()
    function handlerTestToast() {
        toast({
            title: "Thông báo",
            description: "Tính năng vẫn đang phát triển"
        })
    }

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Submit data: ", data)
  }

  return (
    <div className="flex items-center justify-center">
        <div className="w-[600px] flex flex-col gap-20 p-8 rounded-lg">
            <h1 className="text-4xl w-full flex items-center justify-center">Register</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField name="username" control={form.control}
                        render={({ field }) => (
                          <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                              <Input placeholder="username" {...field} />
                          </FormControl>
                          <FormMessage />
                          </FormItem>
                        )}
                    />

                    <FormField name="password" control={form.control}
                        render={({ field }) => (
                          <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                              <Input type="password" placeholder="password" {...field} />
                          </FormControl>
                          <FormMessage />
                          </FormItem>
                        )}
                    />

                    <FormField name="confirmPassword" control={form.control}
                        render={({ field }) => (
                          <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                              <Input type="password" placeholder="confirm Password" {...field} />
                          </FormControl>
                          <FormMessage />
                          </FormItem>
                        )}
                    />

                    <Button onClick={handlerTestToast} type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    </div>
  )
}
