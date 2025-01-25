
import IProduct from "@/types/foods";
import Product from "./Product";
import { client } from "@/sanity/lib/client";

async function ShoplistPage() {
  const products: IProduct[] = await client.fetch(
    `*[_type == "food"] {
      name,
      description,
      price,
      originalPrice,
      tags,
      "imageUrl": image.asset->url,
      "slug": slug.current,
   }`
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.length > 0 ? (
        products.map((product) => (
          <Product key={product.slugs} product={product} />
        ))
      ) : (
        <div className="text-center text-2xl my-10 font-bold">
          <p>No products found.</p>
        </div>
      )}
    </div>
  );
}

export default ShoplistPage;