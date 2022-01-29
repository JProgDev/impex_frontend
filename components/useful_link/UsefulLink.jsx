import Image from "next/image";
import classes from "./UsefulLink.module.scss";

export const UsefulLink = ({redirectUrl, imageSrc, text}) => {
    return (<div className={`card position-relative ${classes.pt}`}>
        <span className={classes.avatar}>
            <Image alt={""} src={imageSrc} width={100} height={100} layout="fixed"/>
        </span>
        <div className="card-body px-5 pb-4">
            <div>{text}</div>
            <a href={redirectUrl} target="_blank" rel="noreferrer" className={classes.link}>{redirectUrl}</a>
        </div>
    </div>)
}
