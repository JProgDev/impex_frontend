import Link from "next/link";
import classes from "./InsuranceList.module.scss";

export const InsuranceList = () => {
    return <ul className={classes.list}>
        <li><Link href={'/insurance/2'}>Transport vositalari sug&apos;urtasi</Link></li>
        <li><Link href={'/insurance/2'}>Transport vositalari sug&apos;urtasi</Link></li>
        <li><Link href={'/insurance/2'}>Transport vositalari sug&apos;urtasi</Link></li>
    </ul>
}