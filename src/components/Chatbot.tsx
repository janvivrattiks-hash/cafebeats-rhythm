import { useEffect, useRef } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

const Chatbot = () => {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    createChat({
      webhookUrl: 'https://jahnvivrattiks.app.n8n.cloud/webhook/5bd5144f-4809-419c-8ad0-d31d60175e02/chat',
      mode: 'window',
      showWelcomeScreen: true,
      chatInputKey: 'chatInput',
      loadPreviousSession: false,
      enableStreaming: false,
      metadata: {
        source: 'website',
        page: window.location.pathname,
        origin: window.location.origin,
      },
      i18n: {
        en: {
          title: 'CafeBeats Assistant',
          subtitle: 'How can I help you today about our menu and store?',
          footer: '',
          getStarted: 'New Conversation',
          inputPlaceholder: 'Type your message...',
          closeButtonTooltip: 'Close',
        },
      },
      initialMessages: [
        'Hi there! 👋 Welcome to CafeBeats.',
        'How can I help you today with our menu, store locations?'
      ],
    });
  }, []);

  return null;
};

export default Chatbot;
