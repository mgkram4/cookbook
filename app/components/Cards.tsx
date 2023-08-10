import { Post } from "../lib/interface";
import { client } from "../lib/sanity";
import Image from "next/image";
import urlFor from "../lib/sanityImageUrl";
import Link from "next/link";

async function getData() {
  const query = '*[_type == "post"]';
  const data = await client.fetch(query);
  return data;
}

export default async function Card() {
  const data = (await getData()) as Post[];

  return (
    <div className="flex flex-col items-center justify-center ">
      {data.map((post: Post) => (
        <div key={post._id}>
          <div className="card w-96  border-2 shadow-md">
            {post.image?.asset && (
              <Image
                className="ml-36 mt-4"
                src={urlFor(post.image).url()}
                alt="logos"
                width={100}
                height={100}
                placeholder="blur"
                blurDataURL={urlFor(post.image)
                  .width(24)
                  .height(24)
                  .blur(10)
                  .url()}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
            )}
            <div className="card-body ">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.overview}</p>
              <div className="card-actions justify-end">
                <Link href={`/post/${post.slug.current}`}>
                  <button className="btn bg-tan-10 hover:bg-red-500">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
