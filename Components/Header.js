import styles from "./Header.module.css"
import Image from "next/image";

export default function Header(){
return(
    <header className={styles.header}>
        <div className={styles.header_image}>
         <Image src={"vercel.svg"} alt={"Logo"} width={50} height={50} />
            <p>Test</p>
        </div>
    </header>
)
}