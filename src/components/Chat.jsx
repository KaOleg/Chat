import React from "react";
import tick from "../icons/tick.svg"
import doubleTick from "../icons/double-tick.svg"
import blueTick from "../icons/read.svg"
function Chat(props) {
    const image =props.status == "read" ? blueTick : props.status == "undelivered" ? tick : props.status == "unread" ? doubleTick : null
    return (
        <div className="chat">
            <div className="chat-data">
                <img
                    className="avatar"
                    src={props.avatar}
                    alt=""
                />
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.lastMessage}</p>
                </div>
            </div>

            <div className="chat-status">
                <p>{props.date}</p>
        {image == null ? <p className="unreadMessages">{props.status}</p> : <img src={image} alt="" />}
            </div>
        </div>
    );
}

export default Chat;
