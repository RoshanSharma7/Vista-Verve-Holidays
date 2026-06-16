import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!to.trim()) {
      alert("Please enter a destination to search");
      return;
    }
    navigate(`/search?to=${encodeURIComponent(to)}&from=${encodeURIComponent(from)}&date=${date}`);
  };

  return (
    <div className="search-bar">
      <input placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} />
      <input placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button onClick={handleSearch}>
        <Search size={18} /> Search
      </button>
    </div>
  );
}