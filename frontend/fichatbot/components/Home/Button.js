import React from "react";

import styles from "./Button.module.css";

// export type ButtonType = "primary" | "danger" | null;

export function IconButton({
  onClick,
  icon,
  type,
  text,
  bordered,
  shadow,
  className,
  title,
  disabled,
  tabIndex,
  autoFocus
}) {
  return (
    <button
      className={
        styles["icon-button"] +
        ` ${bordered && styles.border} ${shadow && shadow} ${
          className ?? ""
        } clickable ${styles[type ?? ""]}`
      }
      onClick={onClick}
      title={title}
      disabled={disabled}
      role="button"
      tabIndex={tabIndex}
      autoFocus={autoFocus}
    >
      {icon && (
        <div
          className={
            styles["icon-button-icon"] +
            ` ${type === "primary" && "no-dark"}`
          }
        >
          {icon}
        </div>
      )}

      {text && (
        <div className={styles["icon-button-text"]}>{text}</div>
      )}
    </button>
  );
}