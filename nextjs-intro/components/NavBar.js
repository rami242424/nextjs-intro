import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar(){
    const router = useRouter();
    return(
        <nav>
            <Link href="/" legacyBehavior>
                Home
            </Link>
            <Link href="/about" legacyBehavior>
                About
            </Link>
            <style jsx global>{`
                nav {
                    background-color: tomato;
                }
                a {
                    text-decoration: none;
                }
            `}</style>
        </nav>
    )
}