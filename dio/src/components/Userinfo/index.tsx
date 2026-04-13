import React from "react";

import { UserInfoContainer, NameText, UserPicture, Progress } from "./styles";
import { IUserInfo } from "./types";

const UserInfo = ({ nome, image, percentual } : IUserInfo) => {
  return (
    <UserInfoContainer>
        <UserPicture src={image}/>
        <div>
            <NameText>{nome}</NameText>
            <Progress percentual={percentual}/>
        </div>
    </UserInfoContainer>
    )
}
export {UserInfo};