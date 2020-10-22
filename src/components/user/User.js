import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/user/${id}`);
    setUser(result.data);
  };
  return (
    <div className="contener py-4">
      <Link className="btn btn-primary" to="/">
        back to home
      </Link>
      {/* <hi className="display-4">User Id:{id}</hi> */}
      <hr />
      <div className="w-75 mx-auto shadow p-5">
        <ul class="list-group">
          <li class="list-group-item active">User Id:{user.id}</li>
          <li class="list-group-item">name:{user.name}</li>
          <li class="list-group-item">user name:{user.username}</li>
          <li class="list-group-item">email :{user.email}</li>
          <li class="list-group-item">phone:{user.phone}</li>
          <li class="list-group-item">website:{user.website}</li>
        </ul>
      </div>
    </div>
  );
};

export default User;
