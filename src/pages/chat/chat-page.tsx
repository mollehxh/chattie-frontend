import { Avatar } from '~/shared/ui/avatar';
import { Input } from '~/shared/ui/input';
import { Sidebar } from '~/shared/ui/sidebar';

export const ChatPage = () => {
  return (
    <>
      <Sidebar>
        <div className="flex items-center text-white p-3 border-b-[1px] border-zinc-700">
          <div className="flex gap-4">
            <Avatar />
            <div>
              <p className="text-white ">UserName</p>
              <span className="text-zinc-400 text-sm ">My account</span>
            </div>
          </div>
        </div>

        <div className="py-3 space-y-3">
          <div className="mx-3">
            <Input placeholder="Search users..." />
          </div>

          <p className="text-lg font-bold text-white px-3">Messages</p>
          <div className="overflow-y-auto h-[calc(100vh-178px)] scrollbar-hide">
            {Array.from({ length: 20 }).map(() => (
              <ChatCard />
            ))}
          </div>
        </div>
      </Sidebar>
    </>
  );
};

const ChatCard = () => {
  return (
    <div className="flex items-center text-white p-3 cursor-pointer hover:bg-zinc-700">
      <div className="flex gap-4">
        <Avatar online />
        <div>
          <p className="text-white ">UserName</p>
          <span className="text-zinc-400 text-sm ">Hello, how are you?</span>
        </div>
      </div>
    </div>
  );
};
