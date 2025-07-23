import { ChatContainer } from "@/app/components/chat/chat-container"
import { LayoutApp } from "@/app/components/layout/layout-app"
import { MessagesProvider } from "@/lib/chat-store/messages/provider"
import LandingPage from "./landing/page"

export const dynamic = "force-dynamic"

export default function Home() {
  const isLoggedIn = true;
  if(isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-screen">
        <LandingPage />
      </div>
    )
  }
  else {
    return (
      <MessagesProvider>
        <LayoutApp>
          <ChatContainer />
        </LayoutApp>
      </MessagesProvider>
    )
  }

}
