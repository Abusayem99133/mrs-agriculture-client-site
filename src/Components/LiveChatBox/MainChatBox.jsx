import LeftSite from "./LeftSiteBar/LeftSite";
import LeftSiteUser from "./LeftSiteBar/LeftSiteUser";
import RightSite from "./RightSiteBar/RightSite";

const MainChatBox = () => {
  return (
    <div>
      <div className="flex h-screen">
        <div>
          <LeftSite />
        </div>
        <div className="w-[30%] bg-slate-600 p-2 items-center">
          <LeftSiteUser />
        </div>
        <div className="w-[70%] bg-slate-900">
          <RightSite />
        </div>
      </div>
    </div>
  );
};

export default MainChatBox;
