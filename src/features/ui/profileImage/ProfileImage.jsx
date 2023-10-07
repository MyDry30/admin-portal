import { StyledProfileImage } from "./ProfileImage.styled";

const ProfileImage = ({ src, alt }) => {
	return (
		<StyledProfileImage>
			<img src={src || ""} alt={alt || ""} />
		</StyledProfileImage>
	);
};

export default ProfileImage;
