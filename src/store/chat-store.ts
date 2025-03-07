import { create } from "zustand";

// Zustand store for managing the selected conversation
export const useConversationStore = create((set) => ({
	selectedConversation: null, // Initially, no conversation is selected
	setSelectedConversation: (conversation) => set({ selectedConversation: conversation }), // Function to set the selected conversation
}));