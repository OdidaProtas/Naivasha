import React, { useContext, useRef, useState, useEffect } from "react";
import { StateContext } from "../../state";
import { useParams } from "react-router";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import { Grid, TextField } from "@mui/material";
import { LogoComponent } from "../../components";

import firebase from "firebase/app";
import "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { firestore } from "../../state/firebaseConfig";
import { Typography } from "@mui/material";

export default function ChatScreen() {

  const dummy: any = useRef();
  const scrollToBottom = () => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt", "asc").limitToLast(25);
  const [messages] = useCollectionData(query, { idField: "id" });


  const me = localStorage.getItem("username");

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e: any) => {
    e.preventDefault();
    await messagesRef.add({
      body: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      user: me,
    });

    // resetting form value and scrolling to bottom
    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <NavbarComponent />
      <div>
        <Grid container>
          <Grid item xs></Grid>
          <Grid item xs>
            <LogoComponent />
            <div>
              <p>Chat</p>
              <div>
                {messages &&
                  messages.map((msg: any) => (
                    <div key={msg.id} style={{ margin: "18px", backgroundColor:"lightgray" }}>
                      <p>{msg.body}</p>
                      {msg.user === me ? (
                        <Typography variant="caption">(me)</Typography>
                      ) : null}
                    </div>
                  ))}
                <span ref={dummy}></span>
              </div>
              <div>
                <form onSubmit={sendMessage} style={{ display: "flex" }}>
                  <TextField
                    value={formValue}
                    onChange={(e: any) => setFormValue(e.target.value)}
                    fullWidth
                    type="text"
                  />
                  <button type="submit">Send</button>
                </form>
              </div>
            </div>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </div>
    </div>
  );
}
