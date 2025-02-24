import Logo from "@/components/ui/logo";
import ProgressBar from "@/components/ui/progress-bar";
import LevelBar from "@/components/ui/level-bar";
import FishCounter from "@/components/ui/fish-counter";
import { mockAquariumStats } from "@/data/mock-data";
import Button from "../ui/button";

type StatusBarProps = {
  setIsMenuOpen: (isOpen: boolean) => void;
};

export default function StatusBar({ setIsMenuOpen }: StatusBarProps) {
  const statuses = [
    { name: "Cleanliness", percentage: mockAquariumStats.cleanliness, color: "bg-[#ffa500]", icon: "/icons/cleanliness.png" },
    { name: "Food", percentage: mockAquariumStats.food, color: "bg-[#ffa500]", icon: "/icons/food.png" },
  ];

  return (
    <div className="w-full h-36 text-white flex items-center px-8 bg-transparent absolute top-0 left-0 z-50">
      <Logo size={200} />
      <div className="flex flex-1 justify-end items-center gap-12">
      <div className="relative flex items-center">
  <FishCounter />
</div>
        {statuses.map((status, index) => (
          <div key={index} className="relative flex items-center w-full max-w-[300px] h-16">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center z-10 mr-[-14px]">
              <img src={status.icon} alt={status.name} width={36} height={36} />
            </div>
            <div className="flex-1 h-7 bg-white rounded-full overflow-hidden">
              <ProgressBar percentage={status.percentage} color={status.color} />
            </div>
          </div>
        ))}
        <div className="w-full max-w-[500px]">
          <LevelBar />
        </div>
      </div>


      <Button
        iconSrc="/textures/icons/Menu.svg"
        onClick={() => setIsMenuOpen(true)}
        color="teal"
        className="md:w-12 md:h-12 w-6 h-6 flex items-center justify-center p-1"
      />
    </div>
  );
}