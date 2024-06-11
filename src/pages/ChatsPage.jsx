import React from "react";
import Menu from "../components/Menu";
import Search from "../icons/search.svg";
import Chat from "../components/Chat";
import send from "../icons/send.svg";
import EmojiPicker from "emoji-picker-react";
import emoji from "../icons/emoji.svg";
import { useState } from "react";
function ChatsPage() {
    const [openEmoji, setOpenEmoji] = useState(false);
    const [message, setMessage] = useState("")
    function toggleEmoji() {
        if (openEmoji == true) {
            setOpenEmoji(false);
        } else {
            setOpenEmoji(true);
        }
    }
    return (
        <div className="chatsPage">
            <Menu />
            <div className="search">
                <img src={Search} alt="Search" />
                <input type="text" placeholder="Search" />
            </div>
            <div className="chats">
                <h2>Chats</h2>
                <Chat
                    avatar="https://www.karusel-tv.ru/media/suit/preview_full/media/image/2019/02/1549979823114855_1.png"
                    name="Ghorg"
                    lastMessage="How are you?"
                    date="12.12.12"
                    status="read"
                />
                <Chat
                    avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz6nx14fM8lBoLhAEk_QqETa6imQWeFQlOUA&s"
                    name="Biology"
                    lastMessage="How are you?"
                    date="20.11.21"
                    status="unread"
                />
                <Chat
                    avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN-N-iJxlT7l_BwS7tLSCE1kuNPieD2pcvNg&s"
                    name="Lovely"
                    lastMessage="Okey?"
                    date="02.02.02"
                    status="undelivered"
                />
                <Chat
                    avatar="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/380x240"
                    name="Lovely"
                    lastMessage="Whats happened?"
                    date="02.02.02"
                    status="3"
                />
            </div>
            <div className="openedChat">
                <div className="openedChat-header">
                    <img
                        src="https://pichold.ru/wp-content/uploads/2018/10/s1200-2-2.jpg"
                        alt="avatar"
                        className="avatar"
                    />
                    <div>
                        <h2>Turtle</h2>
                        <p className="online">Online</p>
                    </div>
                </div>
                <div className="openedChat-content"></div>
                <div className="openedChat-footer">
                    <div className="openedChat-field">
                        <input onChange={(event)=>setMessage(event.target.value)} value={message} className="openedChat-input" type="text" />
                        <img
                            onClick={toggleEmoji}
                            className="openedChat-emoji"
                            src={emoji}
                            alt="Emoji"
                        />
                     
                    </div>
                    <div className="emoji">
                            <EmojiPicker
                                onEmojiClick={(emoji)=>{
                                   setMessage((oldMessage)=> oldMessage + emoji.emoji)
                                }}
                                open={openEmoji}
                                emojiStyle="native"
                                theme="dark"
                            />
                        </div>
                    <button className="sendButton">
                        <img src={send} alt="Send" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChatsPage;
