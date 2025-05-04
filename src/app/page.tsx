import AppContainer from "@/components/layouts/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <AppContainer>
      <div className="flex h-screen items-center justify-center">
        <Button className="cursor-pointer">
          <Link href={"./home"}>Go to page Home</Link>
        </Button>
      </div>
    </AppContainer>
  )
}
