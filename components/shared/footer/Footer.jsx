import React from 'react';
import Image from 'next/image';

export const Footer = () => {
  return <footer className="mt-5">
  <div className="container">
    <div className="row">
      <div className="col-md-4 text-center">
        <Image
          src="/assets/impeks_logo_white.svg"
          width={200}
          height={100}
          className="card-img-top logo"
          alt="Impex Insurance Logo"
          wi
        />
      </div>
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <p className="m-0">2021 © «Impex Insurance» AJ</p>
        <p>
          Saytdagi ma&apos;lumot chop etilganda saytga havola qoldirish majburiy
        </p>
      </div>
    </div>
  </div>
</footer>;
};
