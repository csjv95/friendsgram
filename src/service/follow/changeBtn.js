export const changeBtn = (targetUser,followingList,setIsFollowing) => {
  const isFollowing = followingList.includes(targetUser);
  isFollowing && setIsFollowing(targetUser);
  console.log(isFollowing);
}