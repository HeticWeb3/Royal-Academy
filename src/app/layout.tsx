import './globals.css'
import {ContainerWide} from "@/app/Components/Atoms/";
import {AuthProvider} from "@/Utils/Contexts/AuthContext";
import Header from "@/app/Components/Organisms/Header/Header"


export const metadata = {
  title: 'Royal Saline Academy',
  description: 'Study with the world’s best musicians!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'body'}>
      <AuthProvider>
        <Header/>
            <ContainerWide>
              {children}
            </ContainerWide>
      </AuthProvider>
      </body>
    </html>
  )
}
