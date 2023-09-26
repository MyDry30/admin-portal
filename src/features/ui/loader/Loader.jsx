import { MdAutorenew } from "react-icons/md";
import { StyledLoader } from "./Loader.styled";

const Loader = () => {
	return (
		<StyledLoader>
			<h2>Loading...</h2>
			<MdAutorenew />
		</StyledLoader>
	);
};

export default Loader;
