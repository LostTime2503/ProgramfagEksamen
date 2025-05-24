import React, { useState, useEffect } from "react";

const ChatbaseWidget = () => {
  useEffect(() => {
    // Only load the script if the widget placeholder exists
    if (!window.chatbase || window.chatbase("getState") !== "initialized") {
      window.chatbase = (...args) => {
        if (!window.chatbase.q) window.chatbase.q = [];
        window.chatbase.q.push(args);
      };

      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === "q") return target.q;
          return (...args) => target(prop, ...args);
        },
      });
    }

    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "MxswpwC2KZjRMmrkC-1_5";
    script.setAttribute("domain", "www.chatbase.co");
    document.body.appendChild(script);

    // Optionally, if Chatbase injects its widget into a predictable container,
    // you may want to return a cleanup function that removes it when unmounting.
    return () => {
      // Attempt to remove the script tag.
      const existingScript = document.getElementById("MxswpwC2KZjRMmrkC-1_5");
      if (existingScript) {
        existingScript.remove();
      }
      // Remove the chat widget container if it exists (you'll need the correct selector).
      const chatWidget = document.querySelector(".chatbase-widget-container");
      if (chatWidget) {
        chatWidget.remove();
      }
    };
  }, []);

  return null;
};

const ChatbaseWrapper = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && <ChatbaseWidget />}
      {isOpen && (
        <button onClick={handleClose}>
          Close Chat
        </button>
      )}
    </div>
  );
};

export default ChatbaseWrapper;
