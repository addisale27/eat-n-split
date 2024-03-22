import { useState } from "react";

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
  const [add, setadd] = useState(false);
  const [select, setSelect] = useState(false);
  const [id, setId] = useState(` `);
  const [name, setName] = useState(` `);
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const [allfriends, setAllfriends] = useState([...initialFriends]);
  const [bill, setBill] = useState(` `);
  const [expense, setExpense] = useState(` `);
  const [payer, setPayer] = useState("you");
  const net = +bill - +expense;
  function handleAdd() {
    const newfriend = { name, id: new Date(), image, balance: 0 };
    setAllfriends((allfriends) => [...allfriends, newfriend]);
  }
  function handleSplit() {
    const spliter = allfriends.find((friends) => friends.id === id);
    if (payer === `you`) {
      spliter.balance -= net;
    }
    if (payer === spliter.name) {
      spliter.balance += +expense;
    }

    setBill(` `);
    setExpense(` `);
    setPayer(`you`);
    setSelect(false);
    console.log(allfriends);
  }
  return (
    <div className="main">
      <div className="friends">
        <ul>
          {allfriends.map((friend) => (
            <FriendsList
              friend={friend}
              key={friend.id}
              select={select}
              setSelect={setSelect}
              id={id}
              setId={setId}
              payer={payer}
              net={net}
            />
          ))}
        </ul>
        <AddFriendBtn add={add} setadd={setadd} />
        <AddFriend
          add={add}
          setadd={setadd}
          name={name}
          setName={setName}
          image={setImage}
          setImage={setImage}
          setAllfriends={setAllfriends}
          allfriends={setAllfriends}
          onAdd={handleAdd}
        />
      </div>
      <Split
        select={select}
        setSelect={setSelect}
        id={id}
        setId={setId}
        allfriends={allfriends}
        payer={payer}
        setPayer={setPayer}
        bill={bill}
        setBill={setBill}
        expense={expense}
        setExpense={setExpense}
        onSplit={handleSplit}
      />
    </div>
  );
}
function FriendsList({ friend, select, setSelect, id, setId, payer, net }) {
  function handleSelect() {
    setId(friend.id);
    setSelect(true);
  }
  // {const invitor = id === friend.id && payer === `you`;}
  return (
    <li className="grid">
      <img src={`${friend.image}`} alt="here" />
      <div className="stat">
        <h4>{friend.name}</h4>
        <Status friend={friend} />
      </div>
      <button className="select" onClick={handleSelect}>
        Select
      </button>
    </li>
  );
}
function Status({ friend }) {
  if (friend.balance === 0) return <p>you and {friend.name} are even</p>;
  if (friend.balance > 0)
    return (
      <p style={{ color: `green`, fontWeight: `bold` }}>
        I owe {friend.name} ${friend.balance}
      </p>
    );
  if (friend.balance < 0)
    return (
      <p style={{ color: `red`, fontWeight: `bold` }}>
        {friend.name} owe me ${Math.abs(friend.balance)}
      </p>
    );
  return <p>you and {friend.name} are even</p>;
}
function AddFriendBtn({ children, add, setadd }) {
  return (
    <button className="add-friend-btn" onClick={() => setadd((add) => !add)}>
      {add ? `Close` : `Add Friend`}
    </button>
  );
}
function AddFriend({
  add,
  setadd,
  name,
  setName,
  image,
  setImage,
  allfriends,
  setAllfriends,
  onAdd,
}) {
  if (add)
    return (
      <div className="add-friend-list">
        <div className="name grid">
          <span>👭</span>
          <h5>Friend name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="image grid">
          <span>🖼</span>
          <h5>Image URL</h5>
          <input
            type="text"
            placeholder="https://i.pravatar.cc/48"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="grid">
          <button className="add" onClick={onAdd}>
            Add
          </button>
        </div>
      </div>
    );
}
function Split({
  select,
  setSelect,
  id,
  setId,
  allfriends,
  bill,
  setBill,
  expense,
  setExpense,
  payer,
  setPayer,
  onSplit,
}) {
  const friendtosplit = allfriends.find((friend) => friend.id === id);
  if (select)
    return (
      <div className="side-2">
        <h3>split a bill with {friendtosplit.name} </h3>
        <Form
          select={select}
          setSelect={setSelect}
          friend={friendtosplit}
          payer={payer}
          setPayer={setPayer}
          bill={bill}
          setBill={setBill}
          expense={expense}
          setExpense={setExpense}
          onSplit={onSplit}
        >
          Split bill
        </Form>
      </div>
    );
}
function Form({
  children,
  select,
  setSelect,
  friend,
  bill,
  setBill,
  expense,
  setExpense,
  payer,
  setPayer,
  onSplit,
}) {
  return (
    <div>
      <form>
        <ul>
          <li className="grid">
            <span>💰</span>
            <h4>Bill value</h4>
            <input
              type="number"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />
          </li>
          <li className="grid">
            <span>🕴</span>
            <h4>Your expense</h4>
            <input
              type="text"
              value={expense}
              onChange={(e) => setExpense(e.target.value)}
            />
          </li>
          <li className="grid">
            <span>👭</span>
            <h4>{`${friend.name}\`s`} expense</h4>
            <input
              type="text"
              value={+bill - +expense}
              className="others-expense"
            />
          </li>
          <li className="grid">
            <span>🤑</span>
            <h4>Who is paying the bill?</h4>
            <select value={payer} onChange={(e) => setPayer(e.target.value)}>
              <option value="you">you</option>
              <option value={friend.name}>{friend.name}</option>
            </select>
          </li>
        </ul>
      </form>
      <button className="split-bill-btn" onClick={onSplit}>
        {children}
      </button>
    </div>
  );
}
