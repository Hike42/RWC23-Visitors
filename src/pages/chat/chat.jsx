import React, { useState } from 'react';
import Header from '../../component/header/header';

const ChatPage = () => {
  const [conversations, setConversations] = useState(
    Array.from({ length: 10 }).map((_, index) => ({
      id: index,
      messages: [],
    }))
  );
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedConversation, setSelectedConversation] = useState(null);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setConversations((prevConversations) => {
        const updatedConversations = [...prevConversations];
        updatedConversations[selectedConversation].messages.unshift({
          text: newMessage,
          sentByUser: true,
        });
        return updatedConversations;
      });
      setNewMessage("");
    }
  };

  const handleConversationSelect = (index) => {
    setSelectedConversation(index);
  };

  const handleExitConversation = () => {
    setSelectedConversation(null);
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filtrer les conversations en fonction de la recherche
  const filteredConversations = conversations.filter((conversation) =>
    conversation.id.toString().includes(searchQuery)
  );

  // Récupère la conversation actuellement sélectionnée
  const currentConversation =
    selectedConversation !== null ? (
      <Card className="h-full flex flex-col">
        <Text className="text-lg font-bold mb-4">Chat</Text>
        {/* Affichage des messages */}
        <div
          className="h-full overflow-y-auto p-4 flex flex-col-reverse"
          style={{ scrollBehavior: "smooth" }}
        >
          {conversations[selectedConversation].messages.map(
            (message, index) => (
              <div
                key={index}
                className={`${
                  message.sentByUser ? "text-blue-500" : "text-gray-600"
                } rounded p-2 mb-2 ${
                  message.sentByUser
                    ? "text-right ml-auto"
                    : "text-left mr-auto"
                } bg-white shadow-lg rounded-10 transition-all`}
                style={{
                  maxWidth: nonUserMessageWidth,
                  wordBreak: "break-word",
                }}
              >
                {message.text}
              </div>
            )
          )}
        </div>
        {/* Saisie du message */}
        <div className="flex-shrink-0 p-4 flex">
          <input
            type="text"
            className="flex-grow border rounded p-2 mr-4"
            placeholder="Entrez votre message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
            onClick={handleSendMessage}
          >
            Envoyer
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white rounded px-4 py-2 ml-2"
            onClick={handleExitConversation}
          >
            Quitter
          </button>
        </div>
      </Card>
    ) : (
      <Card className="h-full flex items-center justify-center">
        <Text className="text-gray-500">Sélectionnez une discussion</Text>
      </Card>
    );

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex' }}>
    <Header/>
      <div style={{ flex: '1 1 0%', marginTop: '2.5rem', marginLeft: '5rem', marginRight: '5rem' }}>
        <div style={{ backgroundColor: 'white', maxHeight: 'calc(100vh - 9.375rem)' }}>
          <div style={{ overflowY: 'hidden', height: '100%' }}>
            <h1 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '1rem' }}>Discussions</h1>
            {/* Rest of your code... */}
            <div style={{ overflowY: 'auto', height: '100%' }}>
              <ul style={{ marginBottom: '1.5rem' }}>
                {filteredConversations.map((conversation) => {
                  const lastMessage =
                    conversation.messages.length > 0
                      ? conversation.messages[conversation.messages.length - 1]
                      : null;

                  return (
                    <li
                      key={conversation.id}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        marginBottom: '1.5rem',
                        cursor: 'pointer',
                        backgroundColor: selectedConversation === conversation.id ? 'gray' : ''
                      }}
                      onClick={() => handleConversationSelect(conversation.id)}
                    >
                      <div style={{ width: '1.25rem', height: '1.25rem', marginTop: '0.5rem', marginRight: '0.5rem' }}>
                        &gt;
                      </div>
                      <div>
                        <h2 style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Personne {conversation.id}</h2>
                        {lastMessage ? (
                          <p style={{ color: 'gray', fontSize: '0.875rem' }}>{lastMessage.text}</p>
                        ) : (
                          <p style={{ color: 'gray', fontSize: '0.875rem' }}>Cliquez pour échanger</p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: 'white', marginLeft: '5rem', display: 'flex', flexDirection: 'column', maxHeight: 'calc(100vh - 9.375rem)' }}
        >
          {/* Current conversation */}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
