import React from "react";
import ava from "../Assets/ava.png";

const DetailBlog = () => {
  return (
    <div>
      <div className="max-w-2xl mx-auto">
        <p className="mt-20 text-5xl font-bold tracking-tight mb-6">
          Blog Pertamaku
        </p>
        <hr />
        <div className="flex my-1">
          <img src={ava} alt="" className="w-16" />
          <div className="ml-3">
            <p className="font-medium text-xl">Jossie Pangaribuan</p>
            <p className="text-lg">17 Mei 2023</p>
          </div>
          <div className="my-auto ml-auto mr-2">
            <button className="bg-pink-300 py-2 px-4 text-lg font-medium rounded active:bg-pink-400">
              Like
            </button>
          </div>
        </div>
        <hr />
        <p className="text-lg mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          facere optio? Mollitia tenetur nulla consequatur sed, neque quae sint
          dicta vitae tempore veniam modi, quam, officia minus. In asperiores ea
          ad tempora quisquam laudantium eveniet fuga recusandae neque aliquid
          blanditiis minima exercitationem nesciunt iste modi dolorum dolorem,
          consequuntur nihil quibusdam enim sapiente dicta accusamus. Facilis
          quaerat accusantium soluta necessitatibus temporibus veritatis vero
          quasi delectus commodi perferendis hic ducimus, consectetur, quae
          inventore. Assumenda quaerat minus exercitationem voluptatibus ullam,
          suscipit molestiae deserunt maxime deleniti nesciunt tenetur quisquam
          ratione vel veritatis totam, quia, sunt iusto repellendus neque
          temporibus odit at? Quo, eaque reiciendis!
        </p>
      </div>
    </div>
  );
};

export default DetailBlog;
