export const useGetUserInfo = () => {
    const {name,profilePhoto,userID, isAuth} = JSON.parse(localStorage.getItem("auth")) || {};//Transforms stringify back to objec
return {name, profilePhoto, userID, isAuth}

}

