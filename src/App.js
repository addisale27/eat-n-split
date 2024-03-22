const initialFriends = [
  {
    id: 118836,
    name: "Clark ",
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
    <div className="main">
      <div className="friends">
        <ul>
          {initialFriends.map((friend) => (
            <FriendsList friend={friend} key={friend.id} />
          ))}
        </ul>
        <AddFriendBtn />
        <AddFriend />
      </div>
      <Split />
    </div>
  );
}
function FriendsList({ friend }) {
  return (
    <li className="grid">
      <img src={`${friend.image}`} alt="here" />
      <div className="stat">
        <h4>{friend.name}</h4>
        <p>you owe {friend.name} $45</p>
      </div>
      <button className="select">Select</button>
    </li>
  );
}
function AddFriendBtn({ children }) {
  return <button className="add-friend-btn">Add Friend</button>;
}
function AddFriend() {
  return (
    <div className="add-friend-list">
      <div className="name grid">
        <span>👭</span>
        <h5>Friend name</h5>
        <input type="text" />
      </div>
      <div className="image grid">
        <span>🖼</span>
        <h5>Image URL</h5>
        <input type="text" placeholder="https://i.pravatar.cc/48" />
      </div>
      <div className="grid">
        <button className="add"> Add</button>
      </div>
    </div>
  );
}
function Split() {
  return (
    <div className="side-2">
      <h3>split a bill with addis </h3>
      <Form>Split bill</Form>
    </div>
  );
}
function Form({ children }) {
  return (
    <div>
      <form>
        <ul>
          <li className="grid">
            <span>💰</span>
            <h4>Bill value</h4>
            <input type="number" />
          </li>
          <li className="grid">
            <span>🕴</span>
            <h4>Your expense</h4>
            <input type="text" />
          </li>
          <li className="grid">
            <span>👭</span>
            <h4>addis`s expense</h4>
            <input type="text" />
          </li>
          <li className="grid">
            <span>🤑</span>
            <h4>Who is paying the bill?</h4>
            <select>
              <option value="you">you</option>
              <option value="addis">addis</option>
            </select>
          </li>
        </ul>
      </form>
      <button className="split-bill-btn">{children}</button>
    </div>
  );
}
