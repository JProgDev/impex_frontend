import React from 'react';
import Image from 'next/image';
import {SidebarList} from "../../../components";

const NoveltyPage = () => {
    return <div className="mt-4">
        <h1 className="title text-uppercase">test</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="card p-3">
                        <Image className="card-img-top" width={100} height={300} objectFit={'cover'}
                               fill={'responsive'} alt={""} src={'/assets/car.webp'}/>
                        <hr/>
                        <div className="card-body">
                            <h3 className="text-uppercase">title</h3>
                            <span>10.10.2022</span>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eos incidunt laborum
                                molestiae
                                necessitatibus odio placeat quis sed. Accusantium aperiam doloribus esse expedita ipsam
                                itaque
                                iure
                                iusto quos ut, vel.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <SidebarList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default NoveltyPage;
