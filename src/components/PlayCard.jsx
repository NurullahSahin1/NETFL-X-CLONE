import React from "react";
import { baseImgUrl } from "../constants";

const PlayCard = ({ player }) => {
  return (
    <div className="w-[140px] rounded-md overflow-hidden">
      {player.profile_path ? (
        <img className="h-[175px]" src={baseImgUrl + player?.profile_path} />
      ) : (
        <div className="h-[175px] w-[116px] bg-gray-400"></div>
      )}

      <h2 className="text-lg font-semibold">{player.original_name}</h2>
      <h2 className="line-clamp-2 text-green-500">{player.character}</h2>
    </div>
  );
};

export default PlayCard;
