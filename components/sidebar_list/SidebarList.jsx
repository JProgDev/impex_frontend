import Link from "next/link";
import classes from "./SidebarList.module.scss";

export const SidebarList = () => {
    return <ul className={classes.list}>
        <li><Link href={'/insurance/2'}>Transport vositalari sug&apos;urtasi</Link></li>
        <li><Link href={'/insurance/2'}>Transport vositalari sug&apos;urtasi</Link></li>
        <li><Link href={'/insurance/2'}>Transport vositalari sug&apos;urtasi</Link></li>
    </ul>
}