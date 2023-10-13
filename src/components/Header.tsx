import React, { useContext } from "react";
import { HiLocationMarker, HiSearch } from "react-icons/hi";
import { Input, Switch } from "antd";
import { UnitContext } from "../App";

const customInputStyle = {
  border: "1px solid black",
  borderRadius: "25px",
  color: "black",
  marginRight: "35px",
  transform: "scale(1.1)",
};

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <div style={{ marginLeft: "20px" }}>
        <h1 style={{ fontFamily: "Archivo", fontWeight: "600" }}>
          <span style={{ color: "black" }}>TempCheck</span>
          <span style={{ color: "#FF7A00" }}>.</span>
        </h1>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", marginRight: "20px" }}
      >
        <HiLocationMarker style={{ fontSize: "60px", color: "#FF7A00" }} />
        <div style={{ margin: "2px 25px 0 5px" }}>
          <h3 style={{ fontFamily: "Archivo" }}>
            <span style={{ fontWeight: "900", whiteSpace: "nowrap" }}>
              Tunis,
            </span>
            <span style={{ fontWeight: "100", whiteSpace: "nowrap" }}>
              {" "}
              Tunisie
            </span>
          </h3>
        </div>
        <Input
          placeholder="Search city..."
          style={customInputStyle}
          suffix={<HiSearch style={{ color: "#FF7A00", fontSize: "25px" }} />}
        />
        <style>{`
        .ant-input::placeholder {
          color: black;
        }
      `}</style>
        <Switch
          checkedChildren="C°"
          unCheckedChildren="F°"
          defaultChecked
          style={{ background: "#6EB9FF", transform: "scale(1.5)" }}
        />
      </div>
    </div>
  );
};

export default Header;
