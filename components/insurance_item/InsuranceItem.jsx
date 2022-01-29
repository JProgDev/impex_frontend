import Link from "next/link";

export const InsuranceItem = ({href, icon, title, description}) => {
    return (<Link href={href}>
        <div className="card insurance-card">
                  <span
                      className="iconify card-img-top insurance-icon"
                      data-icon={icon}
                  />
            <div className="card-body">
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    </Link>)
};