import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href={"/"}>
            <Image className="w-full h-[40px]" src={"/img/logo/logo.svg"} alt="" sizes="100vw" height={0} width={0} priority/>
        </Link>
    )
}