import React from "react";

import { UserInfoContainer, NameText, UserPicture, Progress } from "./styles";

const UserInfo = ({ nome, image, percentual }) => {
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