import React, { useEffect, useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';

const Message = ({ message }) => {
    const { authUser } = useAuthStore();
    const isSentByMe = message.senderId === authUser._id;

    return (
        <div className={`chat ${isSentByMe ? "chat-end" : "chat-start"}`}>
            <div className="chat-bubble">
                {message.message}
            </div>
            <div className="chat-footer opacity-50 text-xs">
                {new Date(message.createdAt).toLocaleTimeString()}
            </div>
        </div>
    );
};

export default Message; 