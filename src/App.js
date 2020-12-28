import React from "react";
import Canvas from "./components/Canvas";
import SettingBar from "./components/SettingsBar";
import ToolBar from "./components/ToolBar";
import './styles/app.scss'

function App() {
  return (
    <div className="app">
      <ToolBar />
      <SettingBar />
      <Canvas />
    </div>
  );
}

export default App;
