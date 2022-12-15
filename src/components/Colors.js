import React, {useState} from 'react'

const Colors = () => {
    const [colors , setColors] = useState(["Kırmızı", "Yeşil", "Mavi"]);

    const handleClick = () => setColors((prev)=> ([ ...prev, "gri'yi ekledik"]))
  return (
    <div>
    <h2>Renkler</h2>
    {colors.map((color,i) => (
        <div key={i}>{color}</div>
    ))}
    <button onClick={handleClick}>Ekle</button>  <hr />
    {/* <button onClick={() => setColors([...colors, "gri"])}>Ekle</button> */}
    </div>
  )}

export default  Colors