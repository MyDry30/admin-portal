import { StyledProfileImage } from "./ProfileImage.styled";
import { MdAccountCircle } from "react-icons/md";

const ProfileImage = ({ src, alt = "" }) => {
	return (
		<StyledProfileImage>
			{src ? <img src={src} alt={alt} /> : <MdAccountCircle />}
		</StyledProfileImage>
	);
};

export default ProfileImage;
