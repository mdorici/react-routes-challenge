import { useParams } from "react-router-dom";
import { getProduct } from "../../../../data";

export default function Porduct() {
  const params = useParams();
  
  const product = getProduct(String(params.name));

  return (
    <>
      {product && (
        <main>
            <p>{product.item1}</p>
            <p>{product.item2}</p>
            <p>{product.item3}</p>
        </main>
      )}
    </>
  );
}
