import React from "react";
import { Link } from "react-router-dom";
import styles from "./panel.module.scss";
import { useRouteMatch } from "react-router-dom";
import noImage from "../../../static/images/no_image.jpg";
import { format } from "date-fns";

function RecipePanel(props) {
  const match = useRouteMatch();
  return (
    <Link to={`${match.url}/${props.id}`} className={styles.eventLinkWrapper}>
      <div className={styles.panelImageFillWrapper}>
        <img
          src={props.image !== "" ? props.image : noImage}
          alt={props.title}
          className={styles.panelImageFill}
        />
      </div>
      <div className={styles.eventLinkboxWrapper}>
        <div className={styles.eventLinkTitle}>{props.title}</div>
        <div className={styles.eventLinkTitleDescription}>
          {props.title_description}
        </div>
        <div className={styles.eventLinkDate}>
          {format(new Date(props["created_at"]), "yyyy-MM-dd")}
        </div>
        <div className={styles.eventLinkMore}>More &gt;</div>
      </div>
    </Link>
  );
}

export default RecipePanel;
