import Posts from "./Posts";
import SideBar from "./SideBar";
import Stories from "./Stories";

export default function Corpo() {
    return (
        <div className="container">
            <div className="mainbar">
                <Stories />
                <Posts />
            </div>
            <div className="sidebar-posicao">
                <SideBar />
            </div>
        </div>
    )
}