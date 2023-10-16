import { StyledProfileImage } from "./ProfileImage.styled";
import headshot from "../../../assets/headshot.jpg";

const ProfileImage = ({ src, alt }) => {
	return (
		<StyledProfileImage>
			<img src={headshot} alt={alt || ""} />
		</StyledProfileImage>
	);
};

export default ProfileImage;
