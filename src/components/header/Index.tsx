import { ImageProfile } from "../../assets/Index";

interface HeaderProps {
  toggleDarkMode: () => void;
  isdarkMode: boolean;
}

export const Header = ({ toggleDarkMode, isdarkMode }: HeaderProps) => {
  return (
    <div className="flex items-center justify-between px-6 py-3 border-b-[.5px] border-[#D1D7E0] dark:border-b-[#262C36] dark:backdrop-blur-2xl bg-white dark:bg-bg-secondary">
      <div>
        <h1 className="text-xl font-semibold">Hi, Paulo André</h1>
        <p className="text-gray-700 dark:text-text-secondary">Welcome back!</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => toggleDarkMode()}
          className="mr-2 p-2 border rounded cursor-pointer dark:bg-primary dark:text-white text-sm"
        >
          {isdarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <div className="w-12 h-12 rounded-full overflow-hidden border border-primary">
            <img src={ImageProfile} alt="Profile"  className="w-full h-full object-cover"/>
        </div>
      </div>
    </div>
  );
};
