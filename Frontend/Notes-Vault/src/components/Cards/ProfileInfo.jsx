import React from 'react';
import { getInitials } from '../../utils/helper';
import { MdLogout } from 'react-icons/md';

const ProfileInfo = ({ userInfo, onLogout }) => {
  if (!userInfo) {
    return (
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-200 animate-pulse" />
    );
  }

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      {/* Profile Circle */}
      <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full 
                      bg-gradient-to-br from-blue-600 to-blue-800 text-white text-sm font-bold shadow-md">
        {getInitials(userInfo.fullName)}
      </div>

      {/* Name & Logout */}
      <div className="flex flex-col items-start justify-center leading-tight">
        <span className="text-[13px] sm:text-sm font-semibold text-gray-800 truncate max-w-[120px] sm:max-w-[160px]">
          {userInfo.fullName}
        </span>
        <button
          className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 hover:text-red-600 transition"
          onClick={onLogout}
        >
          <MdLogout className="text-sm" /> Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
