export interface UserProps {
    id: number
    email: string
    phoneNumber: string | null
    lastName: string | null
    firstName: string | null
    birthDate: Date | null
    avatar: string | null
    bio: string | null
    dateCreation: Date
}