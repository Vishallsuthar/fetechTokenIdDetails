import { ConnectKitButton } from "connectkit"
const Header = ()=>{
    return(
        <>
            <div className="d-flex w-100 p-3 py-2 mb-3 bg-primary justify-content-between align-items-center">
                <div>
                    <h1 className="text-white mb-0">
                    Logo Here
                    </h1>
                </div>
                <div>
                <ConnectKitButton />
                </div>
            </div>
        </>
    )
}
export default Header