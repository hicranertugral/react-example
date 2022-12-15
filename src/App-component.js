import React from "react";
// import Header from "./components/Header";
import Login from "./components/Login";


const isLoggedIn = false;
const fullnName = "Hicran Ertuğral";

function App() {
  return (
    <div className="test">
      {/* 1. yol true çıktısı : Hoş Geldin Hicran Ertuğral    -  False çıktısı : Giriş Yapın */}
      {/* { isLoggedIn ? "Hoş geldiniz " + fullnName : <a href="#/">Giriş yapın</a>} */}

      {/* 2.yol  true çıktısı : Hoş Geldin Hicran Ertuğral    -  False çıktısı : Giriş Yapın*/}
      {/* {isLoggedIn && <div>Hoş Geldin {fullnName}</div>}
      {!isLoggedIn && <a href="#/">Giriş Yapın</a>} */}

      {/* 3. yol true çıktısı : Hoş Geldin Hicran Ertuğral - False çıktısı : boş değer döndürüyor.*/ }
      {/* {isLoggedIn ? <div>Hoş Geldin {fullnName} </div> : null} */}

      {/* 4.yol true çıktısı : Hoş Geldin Hicran Ertuğral - False çıktısı : Login */}
      {isLoggedIn ? <div> Hoş geldin {fullnName}</div> : <Login />}

    </div>
  );
}

export default App;
