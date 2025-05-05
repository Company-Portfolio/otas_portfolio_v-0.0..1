import React, { useEffect } from "react";

function ChatWidget() {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");

    // Set src attribute
    script.src =
      "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js";

    // Append script to head
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Style for the chat widget */}
      <style>
        {`
        df-messenger {
          z-index: 999;
          position: fixed;
          --df-messenger-font-color: #000;
          --df-messenger-font-family: Google Sans;
          --df-messenger-chat-background: #f3f6fc;
          --df-messenger-message-user-background: #d3e3fd;
          --df-messenger-message-bot-background: #fff;
          bottom: 16px;
          right: 16px;
        }
        `}
      </style>

      {/* Dialogflow Chat Widget */}
      <df-messenger
        project-id="spatial-genius-458908-d3"
        agent-id="1653d144-8d1d-4bc3-839f-1b548e2925bc"
        language-code="en"
        max-query-length="-1"
      >
        <df-messenger-chat-bubble chat-title="otas chat" />
      </df-messenger>
    </>
  );
}

export default ChatWidget;
