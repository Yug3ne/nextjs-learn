import { getUser } from "@/lib/data";

const UserCard = async ({userId}) => {

    const user = await getUser(userId)

  return (
    <div className="flex flex-col gap-[10px]">
      <span className="text-gray-500 font-bold">Author</span>
      <span>{user.username}</span>
    </div>
  );
};

export default UserCard;
