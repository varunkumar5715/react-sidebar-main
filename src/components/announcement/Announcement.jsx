import React from 'react';

export default function Announcement({ heading, path }) {
  return (
    <div>
      <h3>{heading}</h3>
      
      <img src={path} alt="announcment" />
      
    </div>
  );
}





// import React, { createContext, useContext } from 'react';

// const AnnouncementContext = createContext();

// export const useAnnouncement = () => useContext(AnnouncementContext);


// export const AnnouncementProvider = ({ children, announcements }) => (
//   <AnnouncementContext.Provider value={announcements}>
//     {children}
//   </AnnouncementContext.Provider>
// );
