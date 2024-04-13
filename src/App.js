import Nav from "./components/Nav";
import "./App.css";
import Footer from "./layout/Footer";
import ProductPage from "./pages/ProductPage";
import Header from "./layout/Header";
import { useState } from "react";

function App() {
  const [productsData, setProductsData] = useState([
    {
      imgURL:
        "https://www.niobehosting.com/blog/wp-content/uploads/html-kodlama-nasil-ogrenilir.jpg",
      baslik: "HTML",
      aciklama:
        "HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
      fiyat: "300 $",
    },
    {
      imgURL:
        "https://i0.wp.com/ieee.ku.edu.tr/wp-content/uploads/2016/03/js-logo.png?fit=500%2C500&ssl=1",
      baslik: "JavaScript",
      aciklama:
        "JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code. These engines are also utilized in some servers and a variety of apps",
      fiyat: "500 $",
    },
  ]);

  const productEkle = () => {
    setProductsData([
      ...productsData,
      {
        imgURL: "",
        baslik: "CSS",
        aciklama: "Cascading Style Sheet",
        fiyat: 250,
      },
    ]);
  };

  return (
    <div className="app">
      <Header productsData={productsData} productEkle={productEkle} />
      <div className="page-body">
        <ProductPage productsData={productsData} />
        <div className="page-content"></div>
      </div>
      <Footer productsData={productsData} />
    </div>
  );
}

export default App;
