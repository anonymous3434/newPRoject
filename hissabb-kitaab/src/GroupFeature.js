import { useState } from "react";
import "./index.css";
import { Button } from "./Button";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  List,
  ListItem,
  Avatar,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import "./index.css";
export default function GroupFeature({ friends }) {
  const [groups, setGroups] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [selectedFriends, setSelectedFriends] = useState([]);

  const handleCreateGroup = () => {
    if (!groupName || selectedFriends.length === 0) return;
    const newGroup = {
      id: crypto.randomUUID(),
      name: groupName,
      members: selectedFriends,
    };
    setGroups([...groups, newGroup]);
    setGroupName("");
    setSelectedFriends([]);
  };

  return (
    <form className="form-add-friend" onSubmit={handleCreateGroup}>
      <label>👫 Group name</label>
      <input
        type="text"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
      />

      <label>🌄 Select Friends</label>
      <select>
        {friends.map((friend) => (
          <option
            key={friend.id}
            value={friend}
            onChange={(e) => setSelectedFriends(e.target.value)}
          >
            {friend.name}
          </option>
        ))}
      </select>

      <Button>Add</Button>
    </form>
  );
}
