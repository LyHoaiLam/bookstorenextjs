"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { useAuthStore } from "@/store/useAuthStore"
import { formLogin } from "@/validation/validationLogin"
import { z } from "zod"
  
export default function LoginForm() {
  
  const { setUsername, setPassword } = useAuthStore()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formLogin>>({
    resolver: zodResolver(formLogin),
    defaultValues: {
      username: "",
      password: "",
    },
  })
  


  const onSubmit = (data: z.infer<typeof formLogin>) => {
    console.log("Submit data: ", data)
    setUsername(data.username)
    setPassword(data.password)

    toast({
      title: "Thông tin đăng nhập",
      description: `Username: ${data.username} - Password: ${data.password}`,
    })
  }

  return (
    <div className="flex items-center justify-center">
        <div className="w-[600px] flex flex-col gap-20 p-8 rounded-lg">
            <h1 className="text-4xl w-full flex items-center justify-center">Login</h1>
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

                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    </div>
  )
}
