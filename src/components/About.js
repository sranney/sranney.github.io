import React, {useState} from "react";

import Biography from "./about/Biography";
import {BtnNav} from "../helpers/styled-components/containers";
import {PrimaryButton} from "../helpers/styled-components/buttons";

export default function About() {
	const [shownItem, setShownItem] = useState("bio");

	const showBio = () => setShownItem("bio");
	const showPortf = () => setShownItem("portf");
	const showRecs = () => setShownItem("recs");

    return (
		<BtnNav>
			<PrimaryButton size={"small"} onClick={showBio}>Biography</PrimaryButton>
			<PrimaryButton size={"small"}  onClick={showPortf}>Portfolio</PrimaryButton>
			<PrimaryButton size={"small"}  onClick={showRecs}>Recommendations</PrimaryButton>
		</BtnNav>
    );
}