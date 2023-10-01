import { useState, useTransition } from "react";
import musashi from "../../assets/users/Musashi.jpeg";
import spike from "../../assets/users/spike.jpeg";

const users = [
  { avatar: musashi, name: "Musashi" },
  { avatar: spike, name: "Spike" },
];

function Transition() {
  const [searchUsers, setSearchUsers] = useState("");
  const [filterUsers, setFilterUsers] = useState(users);
  const [isPending, startTransition] = useTransition();

  const handleChange = ({ target: { value } }) => {
    setSearchUsers(value);
    startTransition(() => {
      setFilterUsers(users.filter((item) => item.name.includes(value)));
    });
  };

  return (
    <div className="container">
      <div>
        {users.length !== filterUsers.length
          ? `${filterUsers.length} matches`
          : null}
      </div>

      <input
        onChange={handleChange}
        value={searchUsers}
        type="text"
        placeholder="Type a name"
      />

      {isPending ? (
        <div>Loading...</div>
      ) : (
        <div className="cards">
          {filterUsers.map((user) => (
            <div class="card">
              <div className="profile">
                <img src={user.avatar} alt="avatar" />
              </div>
              <div className="body">
                <strong>{user.name}</strong>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Transition;
