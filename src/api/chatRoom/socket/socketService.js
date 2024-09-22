import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

let stompClient = null;


//떠날때
export const sendLeaveMessage = (socket, roomId) => {
    const leaveMessage = {
        type: 'LEAVE',
        chatroomId: roomId,
    };
    socket.send(`/pub/chat.leave/${roomId}`, {}, JSON.stringify(leaveMessage));
};

export const unsubscribeFromRoom = (socket, roomId) => {
    socket.unsubscribe(`/sub/${roomId}`);
};






//입장 및 나감
export const connectWebSocket = (chatroomId, onMessageReceived) => {
    const socket = new SockJS('/ws');
    stompClient = Stomp.over(socket);

    stompClient.connect({}, (frame) => {
        console.log('Connected: ' + frame);
        stompClient.subscribe(`/sub/${chatroomId}`, (message) => {
            const newMessage = JSON.parse(message.body);
            onMessageReceived(newMessage);
        });

        const joinMessage = {
            content: 'User has joined the chat',
            type: 'JOIN',
        };
        stompClient.send(`/pub/chat.join/${chatroomId}`, {}, JSON.stringify(joinMessage));
        localStorage.setItem(`chatroom_${chatroomId}_connected`, 'true');
    }, (error) => {
        console.error('Connection error:', error);
        localStorage.removeItem(`chatroom_${chatroomId}_connected`);
    });

    return stompClient;
};

export const disconnectWebSocket = () => {
    if (stompClient) {
        stompClient.disconnect(() => {
            console.log('Disconnected');
        });
    }
};

//전송할때
export const sendMessageHandler = (chatroomId, message) => {
    if (stompClient && stompClient.connected) {
        stompClient.send(`/pub/chat.send/${chatroomId}`, {}, JSON.stringify(message));
    } else {
        console.error("WebSocket is not connected");
    }
};


