import Search from "./Search";
import Users from "./Users";

const LeftSiteUser = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl text-white my-5 ">Chats</h1>
      <Search />
      <hr className="my-5" />
      <div
        className="flex flex-col gap-6  overflow-y-auto "
        style={{ maxHeight: "calc(80vh" }}
      >
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
      </div>
    </div>
  );
};

export default LeftSiteUser;
