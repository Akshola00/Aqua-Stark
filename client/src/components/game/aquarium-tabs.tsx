import React from "react"
import { Grid } from "lucide-react"
import { cn } from "@/lib/utils"
import { MOCK_AQUARIUMS } from "@/data/game-data"

interface AquariumTabProps {
  name: string
  active: boolean
  icon?: React.ReactNode
  onClick: () => void
}

function AquariumTab({ name, active, icon, onClick }: AquariumTabProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "game-button px-6 py-3 rounded-t-xl font-bold transition-all duration-200 flex items-center",
        active
          ? "bg-gradient-to-b from-blue-400 to-blue-600 text-white translate-y-0"
          : "bg-blue-800/50 text-white/70 hover:bg-blue-700/50 translate-y-2",
      )}
    >
      {icon && icon}
      {name}
    </button>
  )
}

interface AquariumTabsProps {
  aquariums: typeof MOCK_AQUARIUMS
  selectedAquarium: (typeof MOCK_AQUARIUMS)[0]
  onAquariumSelect: (aquarium?: (typeof MOCK_AQUARIUMS)[0]) => void
}

export function AquariumTabs({
  aquariums,
  selectedAquarium,
  onAquariumSelect,
}: AquariumTabsProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/90 to-transparent z-20 p-4">
      <div className="flex justify-between items-end">
        <div className="flex gap-2">
          {aquariums.map((aquarium) => (
            <AquariumTab
              key={aquarium.id}
              name={aquarium.name}
              active={selectedAquarium === aquarium}
              onClick={() => onAquariumSelect(aquarium)}
            />
          ))}
          <AquariumTab
            name="View All"
            active={selectedAquarium.id === 0}
            icon={<Grid className="h-4 w-4 mr-1" />}
            onClick={() => onAquariumSelect()}
          />
        </div>
      </div>
    </div>
  )
}
