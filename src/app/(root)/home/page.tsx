'use client'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useToast } from "@/hooks/use-toast"
import { Moon, Sun } from "lucide-react"
import { CarouselList } from "@/components/components/carousel/carousel-list/CarouselList"
import AppContainer from "@/components/layouts/Container"

export default function Home() {

    const { setTheme } = useTheme()
    const { toast } = useToast()
    function handlerTestToast() {
        toast({
            title: "Thông báo",
            description: "Chỉ là test Toast mà thôi!"
        })
    }
    
    return (
        <div className="mt-15">
            <AppContainer containerClassName="bg-[#1D3A52]" className="bg-transparent">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <button onClick={handlerTestToast} className="bg-red p-2">Test Toast</button>
            <p className="text-amber-400">sorry i am currently creating a new website to use this domain, you can find its source code here: https://github.com/LyHoaiLam/bookstorenextjs</p>
            <CarouselList />
          </AppContainer>
        </div>
    )
}