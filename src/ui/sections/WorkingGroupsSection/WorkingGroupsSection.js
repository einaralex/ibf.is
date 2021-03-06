import React from "react";
import styles from "./WorkingGroupsSection.module.scss";
import WorkingGroupCard from "src/ui/components/WorkingGroupCard";

const WorkingGroups = ({ groups }) => {
  if (!groups || !groups.length) {
    return null;
  }
  return (
    <div className={styles.root}>
      {groups.map(group => (
        <WorkingGroupCard
          key={group.name}
          name={group.name}
          color={group.color}
          members={group.members}
          description={group.description}
          leader={group.leader}
          url={`/working-group/${group.slug}`}
        />
      ))}
    </div>
  );
};

export default WorkingGroups;
