import React from 'react';
import Image from 'next/image';

const NoveltyPage = () => {
    return <div className="mt-4">
        <h1 className="title text-uppercase">test</h1>
        <div className="container">
            <div className="row bg-white">
                <div className="col-md-5">
                    <div className="card h-100">
                        <Image className="card-img-top" width={100} height={300} objectFit={'cover'}
                               fill={'responsive'} alt={""} src={'/assets/car.webp'}/>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="card">
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
            </div>
        </div>
    </div>;
};

export default NoveltyPage;
