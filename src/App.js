import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import ProductPage from "./pages/ProductPage";

function App() {
  const [productsData, setProductsData] = useState([
    {
      imgURL:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.olcbd.net%2Fwp-content%2Fuploads%2F2018%2F05%2Fhtml-800x445.jpg&f=1&nofb=1&ipt=8880051228135afbbcdb9a5d748bab08299030f877d21bf9335af05d839d0586&ipo=images",
      baslik: "HTML",
      aciklama:
        "HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
      fiyat: "300",
    },
    {
      imgURL:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*qdw4fL3VmMsn3Hw7LdEc3A.png&f=1&nofb=1&ipt=816f3cb38aa5f1ca4ab303777dda910e827bd3301d240c0811591552efb466a1&ipo=images",
      baslik: "JS",
      aciklama:
        "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.",
      fiyat: "500",
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
      <Header productsData={productsData} productEkle={productEkle}/>
      <div className="page-body">
        <ProductPage productsData={productsData} />
      </div>
      <Footer productsData={productsData} />
    </div>
  );
}

export default App;
