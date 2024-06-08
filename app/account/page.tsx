import {options} from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"
import Profile from "./profile"

export default async function AccountHome() {
    const session = await getServerSession(options);
    return (
        <>
            {session ? (
                <Profile user={session?.user} pagetype={"AccountHome"} />
            ) : (
                <h1 className="text-7xl">YOUR ACCOUNT GOES HERE</h1>
            )
            }
        </>
    )
}