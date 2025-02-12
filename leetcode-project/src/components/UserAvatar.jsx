function UserAvatar({ data }) {
    return (
      <img src={data.profile.userAvatar} alt="User Avatar" className="w-16 h-16 rounded-full mx-auto border-2 border-gray-500" />
    );
  }
  
  export default UserAvatar;
  