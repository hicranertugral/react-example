import React, { useState } from "react";

const User = () => {
  const [user, setUser] = useState({ name: "Mehmet", surname: "Seven" });
  return (
    <div>
      <h2>User</h2>
      {user.name} {user.surname}
      <div>
        <button onClick={() => setUser((prev) => ({ ...prev, name: "Ahmet" }))}>
          İsmi Değiştir
        </button>
        <button
          onClick={() => setUser((prev) => ({ ...prev, surname: "SOYADI DEĞİŞTİ" })) }>Soyadını Değiştir</button> <hr />
      </div>
    </div>
  )};

export default User;

// import React from "react";
// import PropTypes from "prop-types";

// function User({ title, data, friends }) {
//   return (
//     <div>
//       <strong>{title}</strong>
//       <div> isim : {data.name}</div>
//       <div> yas : {data.age}</div>
//       <div> sehir : {data.city}</div>
//       <h3>Arkadaşları</h3>
//       {friends.map((friend, i) => (
//         <div key={i}>{friend}</div>
//       ))}
//       <hr />
//     </div>
//   );
// }

// User.propTypes = {
//   title: PropTypes.string,
//   data: PropTypes.exact({
//     name: PropTypes.string.isRequired,
//     age: PropTypes.number.isRequired,
//     city: PropTypes.string.isRequired,
//   }),
//   friends: PropTypes.array,
// };

// User.defaultProps = {
//     title: "Kişiler"
// }
// export default User;
