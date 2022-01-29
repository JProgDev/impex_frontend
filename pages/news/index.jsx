import Image from "next/image";
import Link from 'next/link';
import React from "react";

const NewsPage = () => {
    return (<div className="container">
        <h1 className="title text-uppercase mt-5">
            Impex Insurance Yangiliklari
        </h1>
        <div className="row">
            <div className="col-md-6">
                <Link href='/news/1'>
                    <div className="card h-100">
                        <Image
                            src="/assets/home7.png"
                            alt=""
                            width={100}
                            height={220}
                            objectFit="cover"
                            fill="responsive"
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h2>Title</h2>
                            <span>10.10.2022</span>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum cupiditate omnis quidem
                                ut
                                veritatis! Consectetur cupiditate ipsam nostrum provident voluptates! Accusantium atque
                                blanditiis dolor est et laboriosam libero odit praesentium?
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-md-6">
                <div className="card h-100">
                    <Image
                        src="/assets/home7.png"
                        alt=""
                        width={100}
                        height={220}
                        objectFit="cover"
                        fill="responsive"
                        className="card-img-top"
                    />
                    <div className="card-body">
                        <h2>Title</h2>
                        <span>10.10.2022</span>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum cupiditate omnis quidem ut
                            veritatis! Consectetur cupiditate ipsam nostrum provident voluptates! Accusantium atque
                            blanditiis dolor est et laboriosam libero odit praesentium?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default NewsPage;
