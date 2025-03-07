import { File, UsersRound, HomeIcon, LogOut } from "lucide-react"
import Link from "next/link"
import NavButton from "./NavButton"
import { ModeToggle } from "./ModeToggle"
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <header className="animate-slide bg-background h-12 p-2 border-b sticky z-20 top-0">
      <div className="flex h-8 items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <NavButton href="/home" label="Home" icon={HomeIcon} />
          <Link href='/home' className="flex justify-center items-center gap-2 ml-0" title="Home">
            <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">Fixmate</h1>
          </Link>
        </div>
        <div className="flex items-center">
          <NavButton href="/tickets" label="Home" icon={File} />
          <NavButton href="/customers" label="Home" icon={UsersRound} />
          <ModeToggle />
          <Button variant="ghost" size="icon" aria-label="Logout" title="Logout"
            className="rounded-full" asChild>
            <LogoutLink>
              <LogOut />
            </LogoutLink>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
