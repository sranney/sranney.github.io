import React, {Fragment, useState} from "react";

import Biography from "./about/Biography";
import {SectionBtnNav} from "../helpers/styled-components/containers";
import {PrimaryButton} from "../helpers/styled-components/buttons";
import Recommendations from "./about/Recommendations";

export default function About() {
	const [shownItem, setShownItem] = useState("bio");

	const showBio = () => setShownItem("bio");
	const showPortf = () => setShownItem("portf");
	const showRecs = () => setShownItem("recs");

    return (
        <Fragment>
            <SectionBtnNav>
                <PrimaryButton size={"small"} onClick={showBio}>Biography</PrimaryButton>
                <PrimaryButton size={"small"}  onClick={showPortf}>Portfolio</PrimaryButton>
                <PrimaryButton size={"small"}  onClick={showRecs}>Recommendations</PrimaryButton>
            </SectionBtnNav>
            {
                shownItem === 'bio' && <Biography/>
            }
            {
                shownItem === 'recs' && <Recommendations/>
            }
        </Fragment>
    );
}