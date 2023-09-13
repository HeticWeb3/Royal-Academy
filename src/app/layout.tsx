import './globals.css'
import {ContainerWide} from "@/app/Components/Atoms/";
import {AuthProvider} from "@/Utils/Contexts/AuthContext";
import Header from "@/app/Components/Organisms/Header/Header"
import Footer from "@/app/Components/Organisms/Footer/Footer"


export const metadata = {
  title: 'Saline Royal Academy - Learn any instrument you want',
  description: 'The Saline royale Academy is a private international higher-education establishment and a world heritage site based in Arc-et-Senans.',
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
        <Header></Header>
            <ContainerWide>
              {children}
            </ContainerWide>
      </AuthProvider>
      </body>
      <Footer></Footer>
    </html>
  )
}
