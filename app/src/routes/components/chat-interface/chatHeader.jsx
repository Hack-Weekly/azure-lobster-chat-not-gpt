import React, { Component } from 'react'
import NavImg from "src/img/nav-img.png"

export default function ChatHeader() {
  return (
    <>
      <header>
        <div className="nav">
          <img className="user-img" src={NavImg}></img>
          <span className="user-name">Username</span>
        </div>
      </header>
    </>
  );
}
