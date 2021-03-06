import SideBar from "../layout/sideBar/sideBar";
import CommonReducer from "../modules/common";
import ViewJSON from "../components/viewJSON/viewJSON";

export default () => {
	let title = "Logon session";
	return (
		<SideBar title={title} keyPath="logonSession">
			<ViewJSON object={CommonReducer.getData().data.logonSession} title={title}/>
		</SideBar>
	)
}