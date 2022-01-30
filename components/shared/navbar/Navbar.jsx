import Image from "next/image";
import Link from "next/link";
import {links} from "./Navbar.constants";
import classes from "./Navbar.module.scss";

export const Navbar = () => {

    const _renderLink = (href, name, index) => (<Link key={index} passHref href={href} className="nav-item">
        <span className="nav-link pointer">{name}</span>
    </Link>)

    const _renderDropdown = (children = [], name, index) => (<li key={index} className={`nav-item ${classes.link}`}>
                             <span className="nav-link pointer">
                                {name}
                            </span>
        <span className={classes.dropdown}>
                            <div className={classes.content}>
                                {children.map((child, index) => (<Link href={child.href} key={index}>
                                    <div className={`pointer ${classes.item}`}>{child.name}</div>
                                </Link>))}
                            </div>
                      </span>
    </li>)

    return (<header>
        <nav className="navbar navbar-expand-lg w-100">
            <div className="container">
                <Link className="navbar-brand" href="/#" passHref>
                    <Image
                        width={120}
                        height={60}
                        src="/assets/impeks_logo.svg"
                        className="logo"
                        alt="impex-logo"
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto">
                        {links.map((link, index) => {
                            return link.children ? _renderDropdown(link.children, link.name, index) : _renderLink(link.href, link.name, index)
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    </header>);
};
