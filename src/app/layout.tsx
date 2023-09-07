import './globals.css'
import {ContainerWide} from "@/app/Components/Atoms/";
import {AuthProvider} from "@/Utils/Contexts/AuthContext";


export const metadata = {
  title: 'Saline Royal Academy - Learn any instrument you want',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'body'}>
          <ContainerWide>
              <AuthProvider>
                  {children}
              </AuthProvider>
          </ContainerWide>
      </body>
    </html>
  )
}
