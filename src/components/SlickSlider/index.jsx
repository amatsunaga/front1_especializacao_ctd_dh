import Slider from "react-slick";
import "./style.scss";
import { useMesa01Products } from "../../contexts/Mesa01ProductsContext/useMesa01Products";

export const SlickSlider = () => {
  const { products } = useMesa01Products();

  const showProducts = (product) => {
    const firstProducts = [];

    if (firstProducts.length < 4) {
      for (let item of products) {
        if (item == product) {
          continue;
        }
        firstProducts.push(item);
      }
    }

    return firstProducts;
  };

  console.log(products);

  const settings = {
    //   autoplay: true,
    // dots: true,
    // arrows: true,
    // vertical: false,
    infinite: true,
    // speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <Slider {...settings}>
      {showProducts().map((product) => (
        <div key={product.id}>
          {/* <div>
            <img src={product.thumbnail} alt={product.description} />
          </div> */}
          <div>
            <h3>{product.title}</h3>
            <h4>{product.category}</h4>
            <p>R$ {product.price},00</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};
