const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
export default function App() {
  return (
    <div className="friends">
      <ul>
        {initialFriends.map((friend) => (
          <FriendsList friend={friend} />
        ))}
      </ul>
      <AddFriendBtn />
      <AddFriend />
    </div>
  );
}
function FriendsList({ friend }) {
  return (
    <li>
      <img src={`${friend.image}`} alt="here" />
      <div className="stat">
        <h4>{friend.name}</h4>
        <p>you owe {friend.name} $45</p>
      </div>
      <button className="select">Select</button>
    </li>
  );
}
function AddFriendBtn() {
  return <button className="add-friend-btn">Add Friend</button>;
}
function AddFriend() {
  return (
    <div>
      <div className="grid add-friend-list">
        <span>👭</span>
        <h5>Friend name</h5>
        <input type="text" />
      </div>
      <div>
        <span>🖼</span>
        <h5>Image URL</h5>
        <input type="text" placeholder="https://i.pravatar.cc/48" />
      </div>
    </div>
  );
}
