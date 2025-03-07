import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function randomID(len) {
	let result = "";
	if (result) return result;
	var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
		maxPos = chars.length,
		i;
	len = len || 5;
	for (i = 0; i < len; i++) {
		result += chars.charAt(Math.floor(Math.random() * maxPos));
	}
	return result;
}

export function getUrlParams(url = window.location.href) {
	let urlStr = url.split("?")[1];
	return new URLSearchParams(urlStr);
}

const appID = +process.env.NEXT_PUBLIC_ZEGO_APP_ID;
const serverSecret = process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET;

export default function VideoUIKit() {
	const roomID = getUrlParams().get("roomID") || randomID(5);

	let myMeeting = (element) => {
		// generate Kit Token
		const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
			appID,
			serverSecret,
			roomID,
			randomID(5),
			randomID(5)
		);

		const zp = ZegoUIKitPrebuilt.create(kitToken);
		zp.joinRoom({
			container: element,
			sharedLinks: [
				{
					name: "Personal link",
					url:
						window.location.protocol +
						"//" +
						window.location.host +
						window.location.pathname +
						"?roomID=" +
						roomID,
				},
			],
			scenario: {
				mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
			},
		});
	};

	return <div className='myCallContainer' ref={myMeeting} style={{ width: "100vw", height: "100vh" }}></div>;
}